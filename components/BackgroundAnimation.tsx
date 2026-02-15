import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation: React.FC = () => {
    return (
        <div className="background-container fixed inset-0 z-0 pointer-events-none">
            {/* Moving Gradient Blobs */}
            <div className="blob-container absolute inset-0 z-0">
                <div className="blob blob-1 absolute top-0 left-0 w-[60%] h-[60%] rounded-full opacity-60 mix-blend-multiply filter blur-3xl animate-drift-slow"></div>
                <div className="blob blob-2 absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full opacity-60 mix-blend-multiply filter blur-3xl animate-drift-mid"></div>
                <div className="blob blob-3 absolute top-1/2 left-1/2 w-[40%] h-[40%] rounded-full opacity-50 mix-blend-color-dodge filter blur-3xl animate-float"></div>
                {/* Additional dynamic blob */}
                <div className="blob blob-4 absolute bottom-1/4 left-1/4 w-[30%] h-[30%] bg-purple-600 rounded-full opacity-40 mix-blend-overlay filter blur-3xl animate-drift-fast"></div>
            </div>

            {/* Noise Overlay */}
            <div className="noise-overlay absolute inset-0 opacity-[0.03] z-[1]"></div>
        </div>
    );
};

export default BackgroundAnimation;
