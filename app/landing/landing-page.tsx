import React, { useState } from "react";
import { BirthdayPopup } from "~/components/alert/party-alert";
import tutran from "public/tutran.jpg";
import video from "public/hpbd_song.mp4"
import { useLanguage } from "~/components/language/language-context";
import translations from "~/translations";

// array 5 balloons gift for Tú Trân
const imageGifts = [
    {
        index: 0,
        image: video,
    },
    {
        index: 1,
        image: video,
    },
    {
        index: 2,
        image: video,
    },
    {
        index: 3,
        image: video,
    },
    {
        index: 4,
        image: video,
    },
]

export function LandingPage() {
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];
    const [message, setMessage] = useState<string | null>("");

    const [selectedBalloons, setSelectedBalloons] = useState<number[]>([]);
    const [imageGift, setImageGift] = useState<string>();

    console.log("image gift",imageGift);
    

    const handleBalloonClick = (index: number) => {
        if (selectedBalloons.includes(index)) {
            setMessage(`Balloon ${index + 1} is already selected! 🎈`);
            setImageGift(imageGifts[index].image);
            return;
        }

        if (selectedBalloons.length >= 2) {
            setMessage("You can only select up to 2 balloons! 🎉");
            setImageGift(undefined);
            return;
        }

        setSelectedBalloons([...selectedBalloons, index]);
        setMessage(`Balloon ${index + 1} popped! Keep soaring higher! 🎈`);
        setImageGift(imageGifts[index].image);
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-gray-800 px-4">
            <button
                className={`fixed top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full shadow-md transform transition duration-300 text-xs font-bold ${language === "en"
                    ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800"
                    : "bg-gradient-to-r from-pink-500 to-pink-700 text-white hover:from-pink-600 hover:to-pink-800"
                    }`}
                onClick={toggleLanguage}
            >
                {language === "en" ? "vi" : "en"}
            </button>

            {message && <BirthdayPopup message={message} videoGift={imageGift} onClose={() => setMessage(null)} />}
            <div className="text-center mt-10">
                <div className="max-w-screen-sm mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 animate-bounce mt-4">
                        {t.title}
                    </h1>
                </div>
                <p className="mt-4 text-base sm:text-lg md:text-2xl text-gray-800 font-medium">
                    {t.wish}
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-2xl text-gray-800 font-medium">
                    {t.thoughtfulWish}
                </p>

                <div className="mt-8 flex justify-center items-center">
                    <div
                        className="p-4 bg-white rounded-full shadow-2xl transform hover:scale-105 transition duration-300">
                        <img
                            src={tutran}
                            alt="Birthday Celebration"
                            className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 md:border-8 border-purple-300 shadow-2xl hover:scale-110 transform transition duration-300 mx-auto"
                        />
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <button
                        className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                        onClick={() => {
                            setMessage("Keep shining and conquer French like a pro! 🇫🇷")
                            setImageGift(undefined)
                        }}
                    >
                        {t.surpriseBtn}
                    </button>

                    <button
                        className="bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
                        onClick={() => {
                            setMessage("You’re destined to run a fantastic English center! 💼")
                            setImageGift(undefined)
                        }}
                    >
                        {t.anotherWishBtn}
                    </button>

                    <button
                        className="bg-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
                        onClick={() => {
                            setMessage("Go for that red hair—it’s going to be legendary! ❤️🔥")
                            setImageGift(undefined)
                        }}
                    >
                        {t.thoughtfulWish}
                    </button>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700">
                        {t.messageBoardTitle}
                    </h2>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {t.messages.map((msg: string, index: number) => (
                            <div
                                key={index}
                                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                            >
                                <p className="text-sm sm:text-base md:text-lg text-gray-800 italic">{msg}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="w-full max-w-screen-md">
                        <video
                            className="w-full h-auto rounded-lg shadow-lg"
                            controls
                        >
                            <source src={video} type="video/mp4" />
                            {t.videoAlt}
                        </video>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700">
                        {t.interactiveGameTitle}
                    </h2>
                    <p className="mt-4 text-sm sm:text-lg text-gray-700">
                        {t.gameInstruction}
                    </p>
                    <div className="flex flex-wrap justify-center mt-4 gap-2 sm:gap-4">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg transform transition duration-300 cursor-pointer ${selectedBalloons.includes(i)
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-purple-500 hover:bg-purple-700 hover:scale-110"
                                    }`}
                                onClick={() => handleBalloonClick(i)}
                            ></div>
                        ))}
                    </div>
                </div>

                <footer className="mt-8 mb-2 text-xs sm:text-sm text-gray-600">
                    {t.footer}
                </footer>
            </div>
        </div>
    );
}
