// components/TimelockOptionCard.tsx
import React from 'react';

interface TimelockOptionCardProps {
  title: string;
  description: string;
  bgColor: string; // Tailwind class for background color (e.g., 'bg-black', 'bg-white')
  textColor: string; // Tailwind class for text color (e.g., 'text-white', 'text-gray-900')
  borderColor?: string; // Optional border color (e.g., 'border-gray-200' for the white card)
  onClick?: () => void; // Optional click handler for interactivity
}

const TimelockOptionCard: React.FC<TimelockOptionCardProps> = ({
  title,
  description,
  bgColor,
  textColor,
  borderColor = 'border-transparent', // Default to no visible border
  onClick,
}) => {
  return (
    <div
      className={`
        ${bgColor} ${textColor}
        p-8 rounded-lg  border ${borderColor} /* Card styling */
        flex flex-col justify-end /* Aligns content to the bottom as in the image */
        min-h-[180px] /* Ensures consistent height for both cards */
        cursor-pointer hover:shadow-lg transition-shadow duration-200 /* Hover effect */
      `}
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80">{description}</p> {/* Description with lower opacity */}
    </div>
  );
};

export default TimelockOptionCard;