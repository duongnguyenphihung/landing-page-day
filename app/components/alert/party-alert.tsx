import React, {useEffect} from "react";
import ocque from "public/ocque.png";

export const BirthdayPopup: React.FC<{ message: string, onClose: () => void, imageGift?: any }> = ({
                                                                                                       message,
                                                                                                       onClose,
                                                                                                       imageGift
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
                <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">🎉 Happy New Year! 🎂</h2>
                <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                    {message} 🎁✨
                </p>
                {
                    imageGift && <img
                        src={imageGift}
                        alt="Birthday Gift"
                        className="rounded-lg shadow-md mx-auto mb-4 md:mb-6 w-full max-w-sm"
                    />
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

