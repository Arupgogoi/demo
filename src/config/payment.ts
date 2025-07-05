// Define a proper interface for the booking type
export interface BookingType {
  orderId: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  vehicle?: string;
  destination: string;
  passengers: string;
  specialRequirements?: string;
  startDate: string;
  endDate?: string;
  amount: number;
  status: string;
  createdAt: string;
}

export const paymentConfig = {
  razorpay: {
    key_id: "rzp_test_YOUR_TEST_KEY", // Replace with your actual key for production
    currency: "INR",
    name: "ShreeJii Tours & Travels",
    description: "Travel Booking Payment",
    image: "/logo.png", // Your company logo
  },
};

// These order statuses help track the booking state
export const ORDER_STATUS = {
  CREATED: "created",
  PAYMENT_PENDING: "payment_pending",
  PAYMENT_COMPLETED: "payment_completed",
  PAYMENT_FAILED: "payment_failed",
  CANCELLED: "cancelled",
};

// Helper function to generate random order ID (since there's no backend)
export const generateOrderId = () => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  return `SJ-${timestamp}-${random}`;
};

// Helper to save booking details in localStorage (since there's no database)
export const saveBooking = (booking: BookingType) => {
  const bookings = getBookings();
  bookings.push(booking);
  localStorage.setItem("sjt_bookings", JSON.stringify(bookings));
};

// Helper to get all bookings
export const getBookings = (): BookingType[] => {
  const bookingsJson = localStorage.getItem("sjt_bookings");
  return bookingsJson ? JSON.parse(bookingsJson) : [];
};

// Helper to get a specific booking
export const getBookingByOrderId = (orderId: string) => {
  const bookings = getBookings();
  return bookings.find((booking: BookingType) => booking.orderId === orderId);
};

// Helper to update a booking
export const updateBooking = (
  orderId: string,
  updates: Partial<BookingType>
) => {
  const bookings = getBookings();
  const index = bookings.findIndex(
    (booking: BookingType) => booking.orderId === orderId
  );

  if (index !== -1) {
    bookings[index] = { ...bookings[index], ...updates };
    localStorage.setItem("sjt_bookings", JSON.stringify(bookings));
    return true;
  }

  return false;
};
