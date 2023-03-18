(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/Bs"
const Bs_namespaceObject = require("react-icons/Bs");
;// CONCATENATED MODULE: ./components/layout/footer.tsx




function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: " mx-20 md:mx-5 mt-20 p-20 md:p-5 text-gray-500 text-sm font-semibold border-t",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-center flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/logo2.svg",
                        alt: "the website logo",
                        width: 150,
                        height: 150
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex gap-4 mt-4 [&>*]:transition [&>*]:duration-300 hover:[&>*]:text-black",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                children: "Contact"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/terms-and-conditions",
                                children: "Terms&Conditions"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "flex gap-3 mt-4 text-lg [&>*]:transition [&>*]:duration-300 hover:[&>*]:text-black",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Bs_namespaceObject.BsTwitter, {})
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mt-6 text-xs font-light",
                    children: "Copyright \xa9 2023 Wetalkdev"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/nav-link.tsx



function NavLink({ href , children  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: `px-2 py-1 font-base hover:text-gray-900 transition duration-100 rounded-md ${href === router.pathname ? "text-sky-500  hover:text-sky-500" : ""} `,
        href: href,
        children: children
    });
}
/* harmony default export */ const nav_link = (NavLink);

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: external "react-icons/gr"
const gr_namespaceObject = require("react-icons/gr");
;// CONCATENATED MODULE: ./components/layout/nav-bar.tsx
"use client";








function NavBar() {
    // const breakPoint = 800;
    // const [width, setWidth] = useState(
    //   typeof window !== "undefined" ? window.innerWidth : 0
    // );
    // console.log(width);
    // useEffect(() => {
    //   window.addEventListener("resize", () => setWidth(window.innerWidth));
    //   return window.removeEventListener("resize", () =>
    //     setWidth(window.innerWidth)
    //   );
    // }, []);
    const [menuIsOpen, setmenuIsOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                id: "nav-bar",
                className: "blury max-h-14 fixed top-0 right-0 left-0 text-gray-600 font-semibold flex items-center px-20 lg:px-10 md:px-10 sm:px-5 py-4 border-b border-gray-300 text-base",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/logo2.svg",
                            alt: "the website logo",
                            width: 150,
                            height: 150
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: `ml-auto md:hidden`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "[&>*]:ml-5 [&>*]:lg:ml-2 flex items-center ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(nav_link, {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(nav_link, {
                                        href: "/about",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(nav_link, {
                                        href: "/contact",
                                        children: "Contact"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "border-l border-gray-400 pl-4 py-0.5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Bs_namespaceObject.BsTwitter, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>setmenuIsOpen(true),
                        className: "hidden md:block text-2xl cursor-pointer ml-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiMenu, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                id: "nav-bar",
                className: ` ${menuIsOpen ? "md:translate-y-0" : ""} hidden-menu  fixed top-0  right-0 left-0 blury transition duration-500  `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "font-bold text-lg hover:[&>*]:[&>*]:bg-gray-200 [&>*]:[&>*]:cursor-pointer [&>*]:[&>*]:transition [&>*]:duration:300 [&>*]:[&>*]:py-2 [&>*]:[&>*]:px-4 [&>*]:[&>*]:rounded-lg [&>*]:mb-6 flex flex-col justify-center items-center p-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "self-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>{
                                    setmenuIsOpen(false);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(gr_namespaceObject.GrClose, {
                                    className: "cursor-pointer text-2xl "
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setmenuIsOpen(false),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setmenuIsOpen(false),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blogs",
                                children: "Blogs"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setmenuIsOpen(false),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setmenuIsOpen(false),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                children: "Contact"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setmenuIsOpen(false),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Bs_namespaceObject.BsTwitter, {})
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const nav_bar = (NavBar);

;// CONCATENATED MODULE: ./components/layout/layout.tsx





// CHANGE THE FONT
// import { Inter, Lato } from "@next/font/google";
// const fontFamily = Lato({
//   weight: ["400"],
//   subsets: ["latin"],
// });
// ${fontFamily.className}  PUT IN MAIN CLASSNAME
function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav_bar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: `p-1 mt-24 mb-4 mx-28 2xl:mx-25 xl:mx-20 lg:mx-10  sm:mx-6      `,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx





function App({ Component , pageProps  }) {
    const [loading, setLoading] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        const start = ()=>{
            console.log("start");
            setLoading(true);
        };
        const end = ()=>{
            console.log("findished");
            setLoading(false);
        };
        router_default().events.on("routeChangeStart", start);
        router_default().events.on("routeChangeComplete", end);
        router_default().events.on("routeChangeError", end);
        return ()=>{
            router_default().events.off("routeChangeStart", start);
            router_default().events.off("routeChangeComplete", end);
            router_default().events.off("routeChangeError", end);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "text-2xl fixed top-14 bottom-0 right-0 left-0 blury flex justify-center items-center ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                className: " w-10 animate-spin hds-flight-icon--animation-loading",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        id: "SVGRepo_bgCarrier",
                        "stroke-width": "0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        id: "SVGRepo_tracerCarrier",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        id: "SVGRepo_iconCarrier",
                        children: [
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                fill: "#000000",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z",
                                        opacity: ".2"
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"
                                    }),
                                    " "
                                ]
                            }),
                            " "
                        ]
                    })
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61], () => (__webpack_exec__(3480)));
module.exports = __webpack_exports__;

})();