"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movies/[id]/page",{

/***/ "(app-pages-browser)/./app/utils/services/urls/apiurl.ts":
/*!*******************************************!*\
  !*** ./app/utils/services/urls/apiurl.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst BASE_URL = \"http://localhost:8080/api\";\nconst apiUrls = {\n    signIn: \"\".concat(BASE_URL, \"/signin\"),\n    signUp: \"\".concat(BASE_URL, \"/signup\"),\n    fetchMovies: \"\".concat(BASE_URL, \"/movies\"),\n    fetchMovieById: (id)=>\"\".concat(BASE_URL, \"/movies/\").concat(id),\n    createMovie: \"\".concat(BASE_URL, \"/movies\"),\n    updateMovie: (id)=>\"\".concat(BASE_URL, \"/movies/\").concat(id),\n    deleteMovie: (id)=>\"\".concat(BASE_URL, \"/movies/\").concat(id)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiUrls);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9zZXJ2aWNlcy91cmxzL2FwaXVybC50cyIsIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTUEsV0FBVztBQUVqQixNQUFNQyxVQUFVO0lBQ2RDLFFBQVEsR0FBWSxPQUFURixVQUFTO0lBQ3BCRyxRQUFRLEdBQVksT0FBVEgsVUFBUztJQUNwQkksYUFBYSxHQUFZLE9BQVRKLFVBQVM7SUFDekJLLGdCQUFnQixDQUFDQyxLQUFlLEdBQXNCQSxPQUFuQk4sVUFBUyxZQUFhLE9BQUhNO0lBQ3REQyxhQUFhLEdBQVksT0FBVFAsVUFBUztJQUN6QlEsYUFBYSxDQUFDRixLQUFlLEdBQXNCQSxPQUFuQk4sVUFBUyxZQUFhLE9BQUhNO0lBQ25ERyxhQUFhLENBQUNILEtBQWUsR0FBc0JBLE9BQW5CTixVQUFTLFlBQWEsT0FBSE07QUFDckQ7QUFFQSwrREFBZUwsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXRpbHMvc2VydmljZXMvdXJscy9hcGl1cmwudHM/YjJkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpXCI7XG5cbmNvbnN0IGFwaVVybHMgPSB7XG4gIHNpZ25JbjogYCR7QkFTRV9VUkx9L3NpZ25pbmAsXG4gIHNpZ25VcDogYCR7QkFTRV9VUkx9L3NpZ251cGAsIFxuICBmZXRjaE1vdmllczogYCR7QkFTRV9VUkx9L21vdmllc2AsXG4gIGZldGNoTW92aWVCeUlkOiAoaWQ6IHN0cmluZykgPT4gYCR7QkFTRV9VUkx9L21vdmllcy8ke2lkfWAsXG4gIGNyZWF0ZU1vdmllOiBgJHtCQVNFX1VSTH0vbW92aWVzYCxcbiAgdXBkYXRlTW92aWU6IChpZDogc3RyaW5nKSA9PiBgJHtCQVNFX1VSTH0vbW92aWVzLyR7aWR9YCxcbiAgZGVsZXRlTW92aWU6IChpZDogc3RyaW5nKSA9PiBgJHtCQVNFX1VSTH0vbW92aWVzLyR7aWR9YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaVVybHM7XG4iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJhcGlVcmxzIiwic2lnbkluIiwic2lnblVwIiwiZmV0Y2hNb3ZpZXMiLCJmZXRjaE1vdmllQnlJZCIsImlkIiwiY3JlYXRlTW92aWUiLCJ1cGRhdGVNb3ZpZSIsImRlbGV0ZU1vdmllIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/services/urls/apiurl.ts\n"));

/***/ })

});