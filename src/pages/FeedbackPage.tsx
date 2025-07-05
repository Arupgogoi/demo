import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeedbackForm, { FeedbackData } from '@/components/FeedbackForm';

const FeedbackPage = () => {
  const navigate = useNavigate();

  const handleFeedbackSubmit = (feedback: FeedbackData) => {
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', feedback);
    // Redirect to home page after submission
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-travel-700 mb-8">
          Share Your Experience
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Your feedback helps us improve our services and provide better experiences for our customers.
        </p>
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
      </div>
    </div>
  );
};

export default FeedbackPage; 