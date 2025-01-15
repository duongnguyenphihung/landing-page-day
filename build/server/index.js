import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useEffect, createContext, useState, useContext } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-Bl28xY_D.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const queryClient = new QueryClient();
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(QueryClientProvider, {
    client: queryClient,
    children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(ReactQueryDevtools, {
      initialIsOpen: false
    })]
  });
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const ocque = "/assets/ocque-DUcrKT3x.png";
const BirthdayPopup = ({
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
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      onClick: handleOverlayClick,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-white rounded-xl shadow-lg max-w-md w-11/12 p-4 md:p-6 text-center transform transition-transform duration-300 scale-0 animate-popup",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-pink-600 mb-4", children: "🎉 Happy Birthday! 🎂" }),
              /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-gray-700 mb-4 md:mb-6", children: [
                message,
                " 🎁✨"
              ] }),
              imageGift && /* @__PURE__ */ jsx(
                "img",
                {
                  src: imageGift,
                  alt: "Birthday Gift",
                  className: "rounded-lg shadow-md mx-auto mb-4 md:mb-6 w-full max-w-sm"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("style", { jsx: true, children: `
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
            ` })
      ]
    }
  );
};
const tutran = "/assets/tutran-BG5QYJ-x.jpg";
const matcha = "/assets/matcha-CdiqW4Gn.png";
const video = "/assets/hpbd_song-C5yj4BtC.mp4";
const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {
  }
});
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("vi");
  const toggleLanguage = () => {
    setLanguage((prev) => prev === "en" ? "vi" : "en");
  };
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { language, toggleLanguage }, children });
};
const useLanguage = () => useContext(LanguageContext);
const translations = {
  en: {
    title: "🎉 Happy 21th Birthday, Thu Phương! 🎂",
    wish: "Wishing you a birthday as wonderful and thoughtful as you are. May your intelligence and kindness lead you to amazing places! ✨",
    thoughtfulWish: "Your thoughtfulness brings light to everyone🌟",
    successWish: "May this year bring you closer to your dreams and fill your heart with joy and success! 🚀",
    kindnessWish: "Stay as kind and compassionate as you are—your heart is truly golden! 💖",
    surpriseBtn: "Click for a Sweet Surprise! 🍰",
    anotherWishBtn: "Another Heartfelt Wish! 🎁",
    kindnessBtn: "Your Special Kindness Wish 🌼",
    messageBoardTitle: "Heartfelt Messages 💌",
    messages: [
      "Happy Birthday, Thu Phương! You’re a gem in this world—keep being amazing! 💎",
      "May your 21th year be full of laughter, love, and growth! 🌼",
      "Your intelligence is your superpower—use it to conquer every challenge! 🧠💪",
      "Wishing you a lifetime of happiness and success! 🎉",
      "Keep spreading your kindness—it makes the world brighter! 🌟",
      "Keep spreading your kindness—it makes the world brighter! 🌟"
    ],
    interactiveGameTitle: "Birthday Balloon Pop 🎈",
    gameInstruction: "Pop the balloons to discover more birthday wishes just for you!",
    footer: "Made with ❤️ by someone who admires you 🌟",
    videoAlt: "Your browser does not support the video tag."
  },
  vi: {
    title: "🎉 Chúc mừng sinh nhật 21 tuổi, Thu Phương! 🎂",
    wish: "Chúc Phương có một ngày sinh nhật thật đặc biệt, giống như chính sự tâm lý và thông minh của bạn vậy! ✨",
    thoughtfulWish: "Sự tâm lý của bà là ánh sáng cho mọi người🌟",
    successWish: "Hy vọng năm nay sẽ mang đến nhiều thành công và niềm vui bất ngờ! 🚀",
    kindnessWish: "Hãy luôn giữ vững tấm lòng nhân hậu của bạn—đó là điều quý giá nhất! 💖",
    surpriseBtn: "Ấn vào để nhận bất ngờ nè! 🍰",
    anotherWishBtn: "Lời chúc đặc biệt khác! 🎁",
    kindnessBtn: "Lời chúc nhân hậu cho bạn 🌼",
    messageBoardTitle: "Những lời chúc từ trái tim 💌",
    messages: [
      "Chúc mừng sinh nhật, Thu Phương! Bạn là một viên ngọc quý—hãy luôn tuyệt vời như vậy nhé! 💎",
      "Hy vọng tuổi 21 sẽ tràn đầy tiếng cười, yêu thương và phát triển! 🌼",
      "Sự thông minh là sức mạnh của bạn—hãy dùng nó để chinh phục mọi thử thách! 🧠💪",
      "Chúc bạn luôn hạnh phúc và thành công trong cuộc sống! 🎉",
      "Sự nhân hậu của bạn làm thế giới này rực rỡ hơn! 🌟",
      "Sự nhân hậu của bạn làm thế giới này rực rỡ hơn! 🌟"
    ],
    interactiveGameTitle: "Trò chơi bóng bay sinh nhật 🎈",
    gameInstruction: "Bấm vào bóng bay để khám phá thêm những lời chúc dành riêng cho bạn!",
    footer: "Được viết bằng ❤️ từ một người luôn ngưỡng mộ bạn 🌟",
    videoAlt: "Trình duyệt của bạn không hỗ trợ video."
  }
};
const imageGifts = [
  {
    index: 0,
    image: matcha
  },
  {
    index: 1,
    image: ocque
  },
  {
    index: 2,
    image: matcha
  },
  {
    index: 3,
    image: ocque
  },
  {
    index: 4,
    image: matcha
  }
];
function LandingPage() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [message, setMessage] = useState("");
  const [selectedBalloons, setSelectedBalloons] = useState([]);
  const [imageGift, setImageGift] = useState(null);
  const handleBalloonClick = (index) => {
    if (selectedBalloons.includes(index)) {
      setMessage(`Balloon ${index + 1} is already selected! 🎈`);
      setImageGift(imageGifts[index].image);
      return;
    }
    if (selectedBalloons.length >= 2) {
      setMessage("You can only select up to 2 balloons! 🎉");
      setImageGift(null);
      return;
    }
    setSelectedBalloons([...selectedBalloons, index]);
    setMessage(`Balloon ${index + 1} popped! Keep soaring higher! 🎈`);
    setImageGift(imageGifts[index].image);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-gray-800 px-4",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: `fixed top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full shadow-md transform transition duration-300 text-xs font-bold ${language === "en" ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800" : "bg-gradient-to-r from-pink-500 to-pink-700 text-white hover:from-pink-600 hover:to-pink-800"}`,
            onClick: toggleLanguage,
            children: language === "en" ? "vi" : "en"
          }
        ),
        message && /* @__PURE__ */ jsx(BirthdayPopup, { message, imageGift, onClose: () => setMessage(null) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mt-10", children: [
          /* @__PURE__ */ jsx("div", { className: "max-w-screen-sm mx-auto", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 animate-bounce mt-4", children: t.title }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base sm:text-lg md:text-2xl text-gray-800 font-medium", children: t.wish }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base sm:text-lg md:text-2xl text-gray-800 font-medium", children: t.thoughtfulWish }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center items-center", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "p-4 bg-white rounded-full shadow-2xl transform hover:scale-105 transition duration-300",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: tutran,
                  alt: "Birthday Celebration",
                  className: "w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 md:border-8 border-purple-300 shadow-2xl hover:scale-110 transform transition duration-300 mx-auto"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300",
                onClick: () => {
                  setMessage("Keep shining and conquer French like a pro! 🇫🇷");
                  setImageGift(null);
                },
                children: t.surpriseBtn
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-purple-600 transition duration-300",
                onClick: () => {
                  setMessage("You’re destined to run a fantastic English center! 💼");
                  setImageGift(null);
                },
                children: t.anotherWishBtn
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "bg-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300",
                onClick: () => {
                  setMessage("Go for that red hair—it’s going to be legendary! ❤️🔥");
                  setImageGift(null);
                },
                children: t.thoughtfulWish
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700", children: t.messageBoardTitle }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: t.messages.map((msg, index) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105",
                children: /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base md:text-lg text-gray-800 italic", children: msg })
              },
              index
            )) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-screen-md", children: /* @__PURE__ */ jsxs(
            "video",
            {
              className: "w-full h-auto rounded-lg shadow-lg",
              controls: true,
              children: [
                /* @__PURE__ */ jsx("source", { src: video, type: "video/mp4" }),
                t.videoAlt
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700", children: t.interactiveGameTitle }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm sm:text-lg text-gray-700", children: t.gameInstruction }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center mt-4 gap-2 sm:gap-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
              "div",
              {
                className: `w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg transform transition duration-300 cursor-pointer ${selectedBalloons.includes(i) ? "bg-gray-400 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-700 hover:scale-110"}`,
                onClick: () => handleBalloonClick(i)
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsx("footer", { className: "mt-8 mb-2 text-xs sm:text-sm text-gray-600", children: t.footer })
        ] })
      ]
    }
  );
}
const landingPage = withComponentProps(function Landing() {
  return /* @__PURE__ */ jsx(LanguageProvider, {
    children: /* @__PURE__ */ jsx(LandingPage, {})
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: landingPage
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DAN7OMys.js", "imports": ["/assets/chunk-K6AXKMTT-C08Np2nN.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BvpeII4c.js", "imports": ["/assets/chunk-K6AXKMTT-C08Np2nN.js", "/assets/with-props-Dfy0ETfz.js"], "css": [] }, "routes/landing-page": { "id": "routes/landing-page", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/landing-page-CeIbvDOl.js", "imports": ["/assets/with-props-Dfy0ETfz.js", "/assets/chunk-K6AXKMTT-C08Np2nN.js"], "css": [] } }, "url": "/assets/manifest-eecf3364.js", "version": "eecf3364" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/landing-page": {
    id: "routes/landing-page",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
