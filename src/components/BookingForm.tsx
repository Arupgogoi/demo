import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

const vehicles = [
  "Swift Dzire", "Maruti Ertiga", "Innova Crysta", "Mahindra Scorpio",
  "Mahindra XUV 500", "Mahindra XUV 700", "Hyundai Xcent", "Audi", "BMW",
  "Mercedes", "AC Traveller", "Bus"
];

const BookingForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    destination: '',
    passengers: '',
    specialRequirements: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Special handling for phone numbers
    if (name === 'phone') {
      // Only allow digits for phone numbers - no special characters
      const digitsOnly = value.replace(/\D/g, '');

      // Limit to exactly 10 digits
      if (digitsOnly.length > 10) {
        return; // Reject if more than 10 digits
      }

      // Format the phone number as needed (if you want formatting)
      // For example: XXX-XXX-XXXX
      let formattedValue = digitsOnly;
      if (digitsOnly.length > 6) {
        formattedValue = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
      } else if (digitsOnly.length > 3) {
        formattedValue = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
      }

      // Update with formatted value
      setFormData({
        ...formData,
        [name]: formattedValue
      });

      // Clear error when field is changed
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: ''
        });
      }

      return; // Skip the normal update as we've already handled it
    }

    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required fields validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      // Get only digits for phone validation
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length !== 10) {
        newErrors.phone = 'Phone number must be exactly 10 digits';
      }
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!startDate) {
      newErrors.startDate = 'Trip start date is required';
    }

    if (formData.passengers && (isNaN(Number(formData.passengers)) || Number(formData.passengers) < 1)) {
      newErrors.passengers = 'Please enter a valid number of passengers';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation failed",
        description: "Please check the form for errors and try again.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Create a proper payload matching what the server expects
      const payload = {
        ...formData,
        startDate: format(startDate as Date, 'PPP'),
        // Only add endDate if explicitly selected, otherwise omit
        ...(endDate && { endDate: format(endDate, 'PPP') }),
        // Support both message and specialRequirements fields
        message: formData.specialRequirements
      };

      // Use our Express server endpoint
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Success toast
      toast({
        title: "Booking Request Sent",
        description: "We'll contact you shortly to confirm your booking. Check your email for details.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        vehicle: '',
        destination: '',
        passengers: '',
        specialRequirements: ''
      });
      setStartDate(undefined);
      setEndDate(undefined);
      setErrors({});
    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="name" className="flex">Full Name <span className="text-red-500 ml-1">*</span></Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="email" className="flex">Email Address <span className="text-red-500 ml-1">*</span></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="phone" className="flex">Phone Number <span className="text-red-500 ml-1">*</span></Label>
          <Input
            id="phone"
            name="phone"
            placeholder="10-digit phone number (e.g., 123-456-7890)"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className={errors.phone ? "border-red-500" : ""}
            onBlur={() => {
              // Validate phone number on blur
              if (formData.phone) {
                const digitsOnly = formData.phone.replace(/\D/g, '');
                if (digitsOnly.length !== 10) {
                  setErrors({
                    ...errors,
                    phone: 'Phone number must be exactly 10 digits'
                  });
                }
              }
            }}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="service" className="flex">Service Required <span className="text-red-500 ml-1">*</span></Label>
          <Select
            value={formData.service}
            onValueChange={(value) => handleSelectChange('service', value)}
            required
          >
            <SelectTrigger className={cn("w-full", errors.service ? "border-red-500" : "")}>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private-tour">Private Tour</SelectItem>
              <SelectItem value="city-tour">City Tour</SelectItem>
              <SelectItem value="hotel-booking">Hotel Booking</SelectItem>
              <SelectItem value="airport-pickup">Airport Pickup & Drop</SelectItem>
              <SelectItem value="car-rental">Car Rental</SelectItem>
              <SelectItem value="ticket-booking">Ticket Booking</SelectItem>
              <SelectItem value="holiday-package">Holiday Package</SelectItem>
              <SelectItem value="Part-time Driver Service">Part-time Driver Service</SelectItem>
              <SelectItem value="Air Ticket Booking">Air Ticket Booking</SelectItem>
              <SelectItem value="Train Ticket Booking">Train Ticket Booking</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="destination" className="flex">Destination <span className="text-red-500 ml-1">*</span></Label>
          <Input
            id="destination"
            name="destination"
            placeholder="Where would you like to go?"
            required
            value={formData.destination}
            onChange={handleInputChange}
            className={errors.destination ? "border-red-500" : ""}
          />
          {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="vehicle">Preferred Vehicle</Label>
          <Select
            value={formData.vehicle}
            onValueChange={(value) => handleSelectChange('vehicle', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select vehicle" />
            </SelectTrigger>
            <SelectContent>
              {vehicles.map((vehicle) => (
                <SelectItem key={vehicle} value={vehicle.toLowerCase().replace(/\s+/g, '-')}>
                  {vehicle}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label className="flex">Trip Start Date <span className="text-red-500 ml-1">*</span></Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground",
                  errors.startDate && "border-red-500"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : <span>Select start date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={(date) => {
                  setStartDate(date);
                  if (errors.startDate) {
                    setErrors({
                      ...errors,
                      startDate: ''
                    });
                  }
                }}
                initialFocus
                className="pointer-events-auto"
                disabled={(date) => {
                  // Disable dates in the past
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today;
                }}
                fromDate={new Date()} // Start from today
              />
            </PopoverContent>
          </Popover>
          {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
        </div>

        <div className="space-y-1">
          <Label>Trip End Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Select end date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
                className="pointer-events-auto"
                disabled={(date) => {
                  // Disable dates in the past and dates before start date
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today || (startDate && date < startDate);
                }}
                fromDate={startDate || new Date()} // Start from either selected start date or today
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-1">
          <Label htmlFor="passengers">Number of Passengers</Label>
          <Input
            id="passengers"
            name="passengers"
            type="number"
            min="1"
            placeholder="How many people will be traveling?"
            value={formData.passengers}
            onChange={handleInputChange}
            className={errors.passengers ? "border-red-500" : ""}
          />
          {errors.passengers && <p className="text-red-500 text-sm mt-1">{errors.passengers}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="specialRequirements">Special Requirements</Label>
        <Textarea
          id="specialRequirements"
          name="specialRequirements"
          placeholder="Please provide any additional details about your requirements"
          rows={4}
          value={formData.specialRequirements}
          onChange={handleInputChange}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-accent-500 hover:bg-accent-600 text-white"
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit Booking Request"}
      </Button>
    </form>
  );
};

export default BookingForm;