import{w as f}from"./with-props-B1Bv_2nK.js";import{r,l as e}from"./chunk-D52XG6IA-C_PBXKmx.js";const m="/assets/ocque-DUcrKT3x.png",y=({message:s,onClose:l,imageGift:t})=>{r.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]);const i=n=>{n.target===n.currentTarget&&l()};return e.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",onClick:i,children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-lg max-w-md w-11/12 p-4 md:p-6 text-center transform transition-transform duration-300 scale-0 animate-popup",children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-pink-600 mb-4",children:"🎉 Happy Birthday! 🎂"}),e.jsxs("p",{className:"text-base md:text-lg text-gray-700 mb-4 md:mb-6",children:[s," 🎁✨"]}),t&&e.jsx("img",{src:t,alt:"Birthday Gift",className:"rounded-lg shadow-md mx-auto mb-4 md:mb-6 w-full max-w-sm"})]}),e.jsx("style",{jsx:!0,children:`
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
            `})]})},v="/assets/tutran-BG5QYJ-x.jpg",d="/assets/matcha-CdiqW4Gn.png",j="/assets/hpbd_song-C5yj4BtC.mp4",g=r.createContext({language:"en",toggleLanguage:()=>{}}),w=({children:s})=>{const[l,t]=r.useState("en"),i=()=>{t(n=>n==="en"?"vi":"en")};return e.jsx(g.Provider,{value:{language:l,toggleLanguage:i},children:s})},N=()=>r.useContext(g),k={en:{title:"🎉 Happy 19th Birthday, Tú Trân! 🎂",wish:"Wishing you a birthday filled with joy, laughter, and success in all your adventures! ✨",redHairWish:"Go for that red hair—it’s going to be legendary! ❤️🔥",frenchWish:"Keep shining and conquer French like a pro! 🇫🇷",englishWish:"You’re destined to run a fantastic English center! 💼",surpriseBtn:"Click for a Surprise! 💖",anotherWishBtn:"Another Special Wish! 🎁",hairWishBtn:"Fun Hair Wish! 🎨",poemTitle:"A Poem Just for You 🌸",poem:`On this special day,<br/>
May joy find its way,<br/>
To a heart so bright,<br/>
Like the morning light! 🌟<br/>
Dream big, reach high,<br/>
Paint the world red, let your colors fly! 🔥`,interactiveGameTitle:"Interactive Birthday Game 🎮",gameInstruction:"Pop the balloons to reveal words of encouragement!",footer:"Made with ❤️ by your grateful student 🌟 ManhThanh 🌟",videoAlt:"Your browser does not support the video tag."},vi:{title:"🎉 Happy b-day 19 của bà Trân đáng iu! 🎂",wish:"Chúc bà iu có ngày sn siêu zui, cười xỉu ngang xỉu dọc và mọi thứ đều đỉnh chóp nha! ✨",redHairWish:"Nhuộm quả đầu nâu đỏ chắc chắn cháy phố luôn á bà ơi! ❤️🔥",frenchWish:"Ráng học tiếng Pháp nhen, đỉnh như bà thì dễ òm! 🇫🇷",englishWish:"Trời định sẵn bà sẽ làm chủ trung tâm tiếng Anh hoành tráng! 💼",surpriseBtn:"Ấn zô là hú hồn bất ngờ lun! 💖",anotherWishBtn:"Lời chúc siêu đỉnh nè! 🎁",hairWishBtn:"Tóc đỏ triệu likes nha bà! 🎨",poemTitle:"Bài thơ cuteee cho bà 🌸",poem:`Hôm nay là ngày đặc biệt,<br/>
                Chị yêu tỏa sáng hết mức!<br/>
                Trái tim rực rỡ như sao,<br/>
                Cả thế giới ngắm, ố là laaa! 🌟<br/>
                Mơ lớn, bay xa thiệt là ngầu,<br/>
                Tóc đỏ, thần thái – đỉnh cao sắc màu! 🔥`,interactiveGameTitle:"Game sinh nhật siêu cấp zuiii 🎮",gameInstruction:"Bấm bóng bay để nhận lời chúc nha bà!",footer:"Code bằng ❤️ bởi học sinh ruột 🌟 ManhThanh 🌟",videoAlt:"Trình duyệt hong support video rồi, buồn xỉu lun á!"}},u=[{index:0,image:d},{index:1,image:m},{index:2,image:d},{index:3,image:m},{index:4,image:d}];function B(){const{language:s,toggleLanguage:l}=N(),t=k[s],[i,n]=r.useState(""),[c,x]=r.useState([]),[p,o]=r.useState(null),b=a=>{if(c.includes(a)){n(`Balloon ${a+1} is already selected! 🎈`),o(u[a].image);return}if(c.length>=2){n("You can only select up to 2 balloons! 🎉"),o(null);return}x([...c,a]),n(`Balloon ${a+1} popped! Keep soaring higher! 🎈`),o(u[a].image)};return e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-gray-800 px-4",children:[e.jsx("button",{className:`fixed top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full shadow-md transform transition duration-300 text-xs font-bold ${s==="en"?"bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800":"bg-gradient-to-r from-pink-500 to-pink-700 text-white hover:from-pink-600 hover:to-pink-800"}`,onClick:l,children:s==="en"?"vi":"en"}),i&&e.jsx(y,{message:i,imageGift:p,onClose:()=>n(null)}),e.jsxs("div",{className:"text-center mt-10",children:[e.jsx("div",{className:"max-w-screen-sm mx-auto",children:e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 animate-bounce mt-4",children:t.title})}),e.jsx("p",{className:"mt-4 text-base sm:text-lg md:text-2xl text-gray-800 font-medium",children:t.wish}),e.jsx("p",{className:"mt-4 text-base sm:text-lg md:text-2xl text-gray-800 font-medium",children:t.redHairWish}),e.jsx("div",{className:"mt-8 flex justify-center items-center",children:e.jsx("div",{className:"p-4 bg-white rounded-full shadow-2xl transform hover:scale-105 transition duration-300",children:e.jsx("img",{src:v,alt:"Birthday Celebration",className:"w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 md:border-8 border-purple-300 shadow-2xl hover:scale-110 transform transition duration-300 mx-auto"})})}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6",children:[e.jsx("button",{className:"bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300",onClick:()=>{n("Keep shining and conquer French like a pro! 🇫🇷"),o(null)},children:t.surpriseBtn}),e.jsx("button",{className:"bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-purple-600 transition duration-300",onClick:()=>{n("You’re destined to run a fantastic English center! 💼"),o(null)},children:t.anotherWishBtn}),e.jsx("button",{className:"bg-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300",onClick:()=>{n("Go for that red hair—it’s going to be legendary! ❤️🔥"),o(null)},children:t.hairWishBtn})]}),e.jsxs("div",{className:"mt-12 text-center",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700",children:t.poemTitle}),e.jsx("p",{className:"mt-4 text-sm sm:text-lg text-gray-700 italic",dangerouslySetInnerHTML:{__html:t.poem}})]}),e.jsx("div",{className:"mt-12",children:e.jsxs("video",{className:"sm:w-80 sm:h-45 md:w-96 md:h-56 rounded-lg shadow-lg",controls:!0,children:[e.jsx("source",{src:j,type:"video/mp4"}),t.videoAlt]})}),e.jsxs("div",{className:"mt-12 text-center",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700",children:t.interactiveGameTitle}),e.jsx("p",{className:"mt-4 text-sm sm:text-lg text-gray-700",children:t.gameInstruction}),e.jsx("div",{className:"flex flex-wrap justify-center mt-4 gap-2 sm:gap-4",children:[...Array(5)].map((a,h)=>e.jsx("div",{className:`w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg transform transition duration-300 cursor-pointer ${c.includes(h)?"bg-gray-400 cursor-not-allowed":"bg-purple-500 hover:bg-purple-700 hover:scale-110"}`,onClick:()=>b(h)},h))})]}),e.jsx("footer",{className:"mt-8 mb-2 text-xs sm:text-sm text-gray-600",children:t.footer})]})]})}const W=f(function(){return e.jsx(w,{children:e.jsx(B,{})})});export{W as default};