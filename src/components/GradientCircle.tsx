import React from 'react';

interface GradientCircleProps {
  type: number;
  top: string;
  left: string;
  translateX?: string;
  translateY?: string;
}

const GradientCircle: React.FC<GradientCircleProps> = ({
  type,
  top,
  left,
  translateX = '0',
  translateY = '0',
}) => {
  // Determine the gradient class based on the type prop
  const getGradientClass = () => {
    switch (type) {
      case 1:
        return 'bg-gradient-circle-1';
      case 2:
        return 'bg-gradient-circle-2';
      case 3:
        return 'bg-gradient-circle-3';
      default:
        return '';
    }
  };

  // Apply the gradient class
  const gradientClass = getGradientClass();

  return (
    <div
      className={`w-40 h-40 max-[930px]:h-24 max-[930px]:w-24 rounded-full ${gradientClass}`}
      style={{
        position: 'absolute',
        top,
        left,
        transform: `translate(${translateX}, ${translateY})`,
      }}
    ></div>
  );
};

export default GradientCircle;