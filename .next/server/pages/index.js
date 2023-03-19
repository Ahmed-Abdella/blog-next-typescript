"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tags)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Tags({ tags  }) {
    return(// WORKING TAGS
    // <div className="mb-4 pt-6 mt-auto px-8 flex flex-wrap gap-2">
    //   <span className="text-sky-500">#</span>
    //   {tags.map((tag) => (
    //     <Link
    //       href={`/?tag=${tag}`}
    //       key={tag}
    //       className=" bg-gray-200 hover:bg-gray-300  transition  duration-100 text-gray-900 rounded-xl px-2 py-0.5 text-sm"
    //     >
    //       {tag}
    //     </Link>
    //   ))}
    // </div>
    // NOT WORKING TAGS
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-4 pt-6 mt-auto px-8 flex flex-wrap gap-2",
        children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " bg-gray-200 text-gray-900 rounded-xl px-2 py-0.5 text-sm",
                children: tag
            }, tag))
    }));
}


/***/ }),

/***/ 8353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/tags.tsx
var tags = __webpack_require__(7351);
;// CONCATENATED MODULE: ./components/posts/post-item.tsx




function PostItem({ post  }) {
    const myLoader = ()=>{
        return post.imageURL;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full flex flex-col hover:shadow-xl focus:shadow-xl hover:md:transform-none transition duration-300 border border-gray-300 hover:border-gray-400 rounded-3xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: `/blog/${post.slug}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative h-52 width-full ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "object-cover rounded-t-3xl",
                            loader: myLoader,
                            src: post.imageURL,
                            alt: "development image unsplash",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: ` font-semibold mt-4 text-black text-2xl px-8 tracking-wide  `,
                        children: post.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: " mt-4 text-black text-base px-4 line-3",
                        children: `${post.excerpt}`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(tags/* default */.Z, {
                tags: post.tags
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center mb-4 mt-2 px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: "creator image",
                            src: post.authorImage,
                            width: 25,
                            height: 25,
                            className: "rounded-full"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: " text-gray-700 text-sm ml-1 hover:underline ",
                            children: post.author
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ml-auto text-gray-400 text-xs",
                        children: post.date
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/posts/posts-grid.tsx



function PostsGrid({ posts  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid gap-x-5 gap-y-7 grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 md:px-8 sm:px-1 ",
            children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(PostItem, {
                        post: post
                    })
                }, post._id))
        })
    });
}

;// CONCATENATED MODULE: ./components/SearchForm.tsx


/* harmony default export */ function SearchForm({ setValue , value  }) {
    const [border, setBorder] = (0,external_react_.useState)(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `  flex text-base font-normal  mt-6 py-1 px-4 mx-5 border-gray-400  rounded-md hover:bg-gray-100   transition duration-300 ${border ? "border-black border" : "border"} `,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "search"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "search",
                        type: "text",
                        value: value,
                        onChange: (e)=>setValue(e.target.value),
                        className: "w-80 xs:w-48 outline-none bg-inherit ",
                        placeholder: "search...",
                        onFocus: ()=>setBorder(true),
                        onBlur: ()=>setBorder(false)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.tsx




// import { useRouter } from "next/router";


// import Link from "next/link";
function blogs({ allPosts , notFound , errorMessage  }) {
    const [searchValue, setSearchValue] = (0,external_react_.useState)("");
    // const router = useRouter();
    // const { tag } = router.query;
    // console.log(tag);
    let posts = null;
    if (allPosts) {
        posts = allPosts.filter((post)=>post.title.toLowerCase().includes(searchValue.toLowerCase()) || post.excerpt.toLowerCase().includes(searchValue.toLowerCase()));
    }
    // console.log(searchValue);
    // console.log(posts);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            posts && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "We Talk Dev - Tips, Tricks, and Insights for Developers"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "description",
                                content: "Tips, Tricks, and Insights for Developers"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                rel: "icon",
                                href: "/favicon2.png"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " flex flex-col items-center justify-center mb-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " flex flex-col items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    className: " text-4xl md:text-2xl text-black text-center font-semibold",
                                    children: [
                                        "Tips, Tricks, and Insights for Developers",
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/icon.svg",
                                            alt: "the logo icon",
                                            width: 40,
                                            height: 40,
                                            className: "bg-gray-200 mb-1 p-2 rounded-full inline-block ml-2 "
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SearchForm, {
                                setValue: (value)=>setSearchValue(value),
                                value: searchValue
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PostsGrid, {
                        posts: posts
                    })
                ]
            }),
            notFound && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "bg-red-300 px-2 py-1",
                children: "Can't get the blogs"
            })
        ]
    });
}
async function getStaticProps() {
    try {
        const response = await fetch("https://api.wetalkdev.com/blog/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        return {
            props: {
                allPosts: result.data
            },
            revalidate: 600
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                props: {
                    notFound: true,
                    errorMessage: error.message
                }
            };
        }
    }
}
/* harmony default export */ const pages = (blogs);


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61], () => (__webpack_exec__(8353)));
module.exports = __webpack_exports__;

})();