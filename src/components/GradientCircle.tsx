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
    translateX = "0",
    translateY = "0"
}) => {

    let gradientClass = '';
    if (type === 1) {
        gradientClass = 'bg-gradient-circle-1';
    } else if (type === 2) {
        gradientClass = 'bg-gradient-circle-2';
    } else if (type === 3) {
        gradientClass = 'bg-gradient-circle-3';
    } 

    return (
        <div
            className={`w-40 h-40 max-[930px]:h-24 max-[930px]:w-24 rounded-full ${gradientClass}`}
            style={{
                position: 'absolute',
                top,
                left,
                transform: `translate(${translateX}, ${translateY})`
            }}
        ></div>
    );
};

export default GradientCircle;