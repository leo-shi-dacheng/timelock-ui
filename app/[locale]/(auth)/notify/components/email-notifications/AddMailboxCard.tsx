// components/email-notifications/AddMailboxCard.tsx
import React from 'react';

interface AddMailboxCardProps {
  onClick: () => void;
}

const AddMailboxCard: React.FC<AddMailboxCardProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-white p-6 rounded-lg shadow-md border border-gray-300 border-dashed /* Dashed border */
        flex flex-col items-center justify-center text-gray-400
        min-h-[150px] /* Consistent height with MailboxCard */
        hover:border-black-900 hover:text-black-900 transition-colors duration-200 cursor-pointer
      "
    >
      <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m0 0H6"></path>
      </svg>
      <span className="text-base font-medium">添加邮箱</span>
    </button>
  );
};

export default AddMailboxCard;