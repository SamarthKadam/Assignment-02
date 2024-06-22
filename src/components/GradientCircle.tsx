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


    return (
        <div
            className={`w-40 h-40 rounded-full bg-gradient-circle-${type}`}
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