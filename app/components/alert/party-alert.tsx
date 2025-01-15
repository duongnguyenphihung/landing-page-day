import React, { useEffect } from "react";

export const BirthdayPopup: React.FC<{ 
    message: string, 
    onClose: () => void, 
    videoGift?: string 
}> = ({ 
    message, 
    onClose, 
    videoGift =null
}) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
        >
            <div
                className="bg-white rounded-xl shadow-lg max-w-md w-11/12 p-4 md:p-6 text-center transform transition-transform duration-300 scale-0 animate-popup">
                <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">🎉 Happy Birthday! 🎂</h2>
                <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                    {message}
                </p>
                {
                    videoGift && (
                        <video 
                            src={videoGift} 
                            autoPlay 
                            loop 
                            muted 
                            className="rounded-lg shadow-md mx-auto mb-4 md:mb-6 w-full max-w-sm max-h-[80vh] object-contain"
                        />
                    )
                }
            </div>

            <style jsx>{`
                @keyframes popup {
                    from {
                        transform: scale(0.5);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .animate-popup {
                    animation: popup 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
};
