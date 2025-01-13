import React from 'react';

const Logo = ({
  className = 'w-32 h-32', // Increased default size from w-8 h-8 to w-32 h-32
  color = '#2563eb',
  textColor = 'white',
}) => {
  return (
    <div className="flex items-center justify-center p-4">
      <svg
        className={className}
        viewBox="0 0 200 60"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          cx="35"
          cy="30"
          r="20"
          fill="none"
          stroke={color}
          strokeWidth="6"
        />
        <line x1="45" y1="20" x2="60" y2="20" stroke={color} strokeWidth="6" />
        <line
          x1="52.5"
          y1="12.5"
          x2="52.5"
          y2="27.5"
          stroke={color}
          strokeWidth="6"
        />
        <rect x="70" y="10" width="120" height="40" fill={color} rx="4" />
        <text
          x="80"
          y="40"
          fontFamily="Arial"
          fontWeight="bold"
          fontSize="30"
          fill={textColor}
        >
          DOJO
        </text>
      </svg>
    </div>
  );
};

export default Logo;
