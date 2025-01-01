import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useEffect, createContext, useState, useContext } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        ServerRouter,
        {
          context: routerContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
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
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
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
const stylesheet = "/assets/app-BgO77I9T.css";
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
const logoDark = "/assets/logo-dark-pX2395Y0.svg";
const logoLight = "/assets/logo-light-CVbx2LBR.svg";
function Welcome() {
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center pt-16 pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: [
    /* @__PURE__ */ jsx("header", { className: "flex flex-col items-center gap-9", children: /* @__PURE__ */ jsxs("div", { className: "w-[500px] max-w-[100vw] p-4", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: logoLight,
          alt: "React Router",
          className: "block w-full dark:hidden"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: logoDark,
          alt: "React Router",
          className: "hidden w-full dark:block"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-[300px] w-full space-y-6 px-4", children: /* @__PURE__ */ jsxs("nav", { className: "rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "leading-6 text-gray-700 dark:text-gray-200 text-center", children: "What's next?" }),
      /* @__PURE__ */ jsx("ul", { children: resources.map(({ href, text, icon }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        "a",
        {
          className: "group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500",
          href,
          target: "_blank",
          rel: "noreferrer",
          children: [
            icon,
            text
          ]
        }
      ) }, href)) })
    ] }) })
  ] }) });
}
const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      }
    )
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 24 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z",
            strokeWidth: "1.5"
          }
        )
      }
    )
  }
];
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
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
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage((prev) => prev === "en" ? "vi" : "en");
  };
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { language, toggleLanguage }, children });
};
const useLanguage = () => useContext(LanguageContext);
const translations = {
  en: {
    title: "🎉 Happy 19th Birthday, Tú Trân! 🎂",
    wish: "Wishing you a birthday filled with joy, laughter, and success in all your adventures! ✨",
    redHairWish: "Go for that red hair—it’s going to be legendary! ❤️🔥",
    frenchWish: "Keep shining and conquer French like a pro! 🇫🇷",
    englishWish: "You’re destined to run a fantastic English center! 💼",
    surpriseBtn: "Click for a Surprise! 💖",
    anotherWishBtn: "Another Special Wish! 🎁",
    hairWishBtn: "Fun Hair Wish! 🎨",
    poemTitle: "A Poem Just for You 🌸",
    poem: `On this special day,<br/>
May joy find its way,<br/>
To a heart so bright,<br/>
Like the morning light! 🌟<br/>
Dream big, reach high,<br/>
Paint the world red, let your colors fly! 🔥`,
    interactiveGameTitle: "Interactive Birthday Game 🎮",
    gameInstruction: "Pop the balloons to reveal words of encouragement!",
    footer: "Made with ❤️ by your grateful student 🌟 ManhThanh 🌟",
    videoAlt: "Your browser does not support the video tag."
  },
  vi: {
    title: "🎉 Happy b-day 19 của bà Trân đáng iu! 🎂",
    wish: "Chúc bà iu có ngày sn siêu zui, cười xỉu ngang xỉu dọc và mọi thứ đều đỉnh chóp nha! ✨",
    redHairWish: "Nhuộm quả đầu nâu đỏ chắc chắn cháy phố luôn á bà ơi! ❤️🔥",
    frenchWish: "Ráng học tiếng Pháp nhen, đỉnh như bà thì dễ òm! 🇫🇷",
    englishWish: "Trời định sẵn bà sẽ làm chủ trung tâm tiếng Anh hoành tráng! 💼",
    surpriseBtn: "Ấn zô là hú hồn bất ngờ lun! 💖",
    anotherWishBtn: "Lời chúc siêu đỉnh nè! 🎁",
    hairWishBtn: "Tóc đỏ triệu likes nha bà! 🎨",
    poemTitle: "Bài thơ cuteee cho bà 🌸",
    poem: `Hôm nay là ngày đặc biệt,<br/>
                Chị yêu tỏa sáng hết mức!<br/>
                Trái tim rực rỡ như sao,<br/>
                Cả thế giới ngắm, ố là laaa! 🌟<br/>
                Mơ lớn, bay xa thiệt là ngầu,<br/>
                Tóc đỏ, thần thái – đỉnh cao sắc màu! 🔥`,
    interactiveGameTitle: "Game sinh nhật siêu cấp zuiii 🎮",
    gameInstruction: "Bấm bóng bay để nhận lời chúc nha bà!",
    footer: "Code bằng ❤️ bởi học sinh ruột 🌟 ManhThanh 🌟",
    videoAlt: "Trình duyệt hong support video rồi, buồn xỉu lun á!"
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
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base sm:text-lg md:text-2xl text-gray-800 font-medium", children: t.redHairWish }),
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
                children: t.hairWishBtn
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700", children: t.poemTitle }),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "mt-4 text-sm sm:text-lg text-gray-700 italic",
                dangerouslySetInnerHTML: { __html: t.poem }
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxs(
            "video",
            {
              className: "sm:w-80 sm:h-45 md:w-96 md:h-56 rounded-lg shadow-lg",
              controls: true,
              children: [
                /* @__PURE__ */ jsx("source", { src: video, type: "video/mp4" }),
                t.videoAlt
              ]
            }
          ) }),
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
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: landingPage
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-C1wptIQo.js", "imports": ["/assets/chunk-D52XG6IA-C_PBXKmx.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-D68Dt_iL.js", "imports": ["/assets/chunk-D52XG6IA-C_PBXKmx.js", "/assets/with-props-B1Bv_2nK.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-BcVSa7o4.js", "imports": ["/assets/with-props-B1Bv_2nK.js", "/assets/chunk-D52XG6IA-C_PBXKmx.js"], "css": [] }, "routes/landing-page": { "id": "routes/landing-page", "parentId": "root", "path": "landing", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/landing-page-vXz6t8cS.js", "imports": ["/assets/with-props-B1Bv_2nK.js", "/assets/chunk-D52XG6IA-C_PBXKmx.js"], "css": [] } }, "url": "/assets/manifest-15347fe5.js", "version": "15347fe5" };
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
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/landing-page": {
    id: "routes/landing-page",
    parentId: "root",
    path: "landing",
    index: void 0,
    caseSensitive: void 0,
    module: route2
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
