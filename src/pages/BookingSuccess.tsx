import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BookingSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { bookingDetails, paymentData } = location.state || {};

    // Redirect to home if accessed directly without payment
    useEffect(() => {
        if (!bookingDetails || !paymentData) {
            navigate('/');
        }
    }, [bookingDetails, paymentData, navigate]);

    // If no booking details, don't render the content
    if (!bookingDetails || !paymentData) {
        return null;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container py-16 px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-green-50 p-6 border-b border-green-100">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-center text-green-800">Booking Confirmed!</h1>
                        <p className="text-center text-green-600 mt-2">
                            Thank you for booking with ShreeJii Tours & Travels
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-[#1a237e] mb-4">Booking Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Booking ID</p>
                                    <p className="font-medium">{bookingDetails.orderId}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Payment ID</p>
                                    <p className="font-medium">{paymentData.paymentId}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Amount Paid</p>
                                    <p className="font-bold">₹{bookingDetails.amount.toLocaleString('en-IN')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Payment Date</p>
                                    <p className="font-medium">{new Date(paymentData.paymentDate).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-[#1a237e] mb-4">Trip Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Service</p>
                                    <p className="font-medium">{bookingDetails.service}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Destination</p>
                                    <p className="font-medium">{bookingDetails.destination}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Start Date</p>
                                    <p className="font-medium">{bookingDetails.startDate}</p>
                                </div>
                                {bookingDetails.endDate && (
                                    <div>
                                        <p className="text-sm text-gray-500">End Date</p>
                                        <p className="font-medium">{bookingDetails.endDate}</p>
                                    </div>
                                )}
                                {bookingDetails.vehicle && (
                                    <div>
                                        <p className="text-sm text-gray-500">Vehicle</p>
                                        <p className="font-medium">{bookingDetails.vehicle}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-[#1a237e] mb-4">Customer Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Name</p>
                                    <p className="font-medium">{bookingDetails.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium">{bookingDetails.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-medium">{bookingDetails.phone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
                            <h3 className="font-semibold text-gray-700 mb-2">What's Next?</h3>
                            <p className="text-gray-600 text-sm">
                                We have sent a confirmation email to {bookingDetails.email} with all your booking details.
                                Our team will contact you within 24 hours to confirm your booking and provide additional information.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                                <Link to="/">Return to Home</Link>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="tel:+917099052244">Contact Us</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BookingSuccess; 