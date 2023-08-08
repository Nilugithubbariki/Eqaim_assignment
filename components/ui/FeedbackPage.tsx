// pages/index.tsx
import React, { useState } from 'react';

const FeedbackPage: React.FC = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const toggleFeedback = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Keep Your Feedback Here...</h1>
        <button
          onClick={toggleFeedback}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isFeedbackOpen ? 'Close Feedback' : 'Go To The FeedbackBox'}
        </button>
        {isFeedbackOpen && (
          <div className="mt-4">
            <textarea
              rows={4}
              cols={50}
              placeholder="Write your feedback here"
              className="border p-2 rounded w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
