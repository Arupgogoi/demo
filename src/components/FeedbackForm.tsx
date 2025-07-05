import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface FeedbackFormProps {
  onSubmit?: (feedback: FeedbackData) => void;
}

export interface FeedbackData {
  rating: number;
  presetFeedback: string;
  additionalComments: string;
  serviceUsed: string;
}

const presetOptions = [
  "Excellent service and experience",
  "Good service but could be better",
  "Average experience",
  "Needs improvement",
  "Would not recommend"
];

const services = [
  "Airport Transfer",
  "Local City Tour",
  "Outstation Trip",
  "Wedding Transportation",
  "Corporate Travel",
  "Custom Tour Package",
  "Part-time Driver Service",
  "Air Ticket Booking",
  "Train Ticket Booking",
  "Other"
];

const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const [rating, setRating] = useState<number>(0);
  const [presetFeedback, setPresetFeedback] = useState<string>("");
  const [additionalComments, setAdditionalComments] = useState<string>("");
  const [serviceUsed, setServiceUsed] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!serviceUsed) newErrors.serviceUsed = "Please select a service.";
    if (!rating) newErrors.rating = "Please provide a rating.";
    if (!presetFeedback) newErrors.presetFeedback = "Please select a feedback option.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setLoading(true);
    try {
      // Send feedback to backend API (Brevo email)
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Feedback User", // Optionally collect name/email in the future
          email: "-", // Not collected in this form
          phone: "-", // Not collected in this form
          service: serviceUsed,
          message: `Rating: ${rating} stars\nPreset: ${presetFeedback}\nComments: ${additionalComments}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to send feedback");
      setSubmitted(true);
      toast.success("Thank you for your feedback!");
      setRating(0);
      setPresetFeedback("");
      setAdditionalComments("");
      setServiceUsed("");
      setErrors({});
      if (onSubmit) onSubmit({ rating, presetFeedback, additionalComments, serviceUsed });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-travel-700">
            Thank You!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg text-gray-700 py-8">
            We appreciate your feedback and will use it to improve our services.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-travel-700">
          Share Your Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Selection */}
          <div className="space-y-2">
            <Label className="text-lg font-semibold flex items-center">
              Which service did you use?
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Select value={serviceUsed} onValueChange={setServiceUsed}>
              <SelectTrigger className={errors.serviceUsed ? "w-full border-red-500" : "w-full"}>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceUsed && <p className="text-red-500 text-sm">{errors.serviceUsed}</p>}
          </div>

          {/* Star Rating */}
          <div className="space-y-2">
            <Label className="text-lg font-semibold flex items-center">
              How would you rate your experience?
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={star <= rating ? "#f59e0b" : "#e5e7eb"}
                    className="w-8 h-8 transition-colors duration-200 hover:scale-110"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              ))}
            </div>
            {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
          </div>

          {/* Preset Feedback Options */}
          <div className="space-y-2">
            <Label className="text-lg font-semibold flex items-center">
              What best describes your experience?
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <RadioGroup
              value={presetFeedback}
              onValueChange={setPresetFeedback}
              className="space-y-3 mt-2"
            >
              {presetOptions.map((option) => (
                <div key={option} className="flex items-center space-x-3 py-1">
                  <RadioGroupItem
                    value={option}
                    id={option}
                    className="w-5 h-5 border-2 border-travel-600 text-travel-600 focus:ring-2 focus:ring-travel-400 focus:ring-offset-2 transition-colors duration-150"
                  />
                  <Label htmlFor={option} className="text-gray-700 text-base cursor-pointer select-none">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.presetFeedback && !presetFeedback && (
              <p className="text-red-500 text-sm mt-1">{errors.presetFeedback}</p>
            )}
          </div>

          {/* Additional Comments */}
          <div className="space-y-2">
            <Label className="text-lg font-semibold">Additional Comments</Label>
            <Textarea
              value={additionalComments}
              onChange={(e) => setAdditionalComments(e.target.value)}
              placeholder="Share more details about your experience..."
              className="min-h-[100px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-travel-600 hover:bg-travel-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Submit Feedback'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm; 