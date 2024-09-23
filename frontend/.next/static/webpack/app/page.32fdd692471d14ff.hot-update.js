"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/utils/slices/dataSlice.ts":
/*!***************************************!*\
  !*** ./app/utils/slices/dataSlice.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authSlice: function() { return /* binding */ authSlice; },\n/* harmony export */   signIn: function() { return /* binding */ signIn; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    token: null,\n    loading: false,\n    error: null,\n    message: null\n};\nconst signIn = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"auth/signIn\", async (credentials, param)=>{\n    let { rejectWithValue } = param;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8080/api/signin\", {\n            email: credentials.email,\n            password: credentials.password\n        });\n        return response.data;\n    } catch (error) {\n        var _error_response_data, _error_response;\n        console.log(error, \"erro\");\n        return rejectWithValue(((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.error) || \"Sign-in failed. Please try again.\");\n    }\n});\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(signIn.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        }).addCase(signIn.fulfilled, (state, action)=>{\n            state.loading = false;\n            state.message = action.payload.message;\n            state.token = action.payload.token;\n        }).addCase(signIn.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9zbGljZXMvZGF0YVNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDaUU7QUFDdkM7QUFTMUIsTUFBTUcsZUFBMEI7SUFDOUJDLE9BQU87SUFDUEMsU0FBUztJQUNUQyxPQUFPO0lBQ1BDLFNBQVE7QUFDVjtBQUdPLE1BQU1DLFNBQVNQLGtFQUFnQkEsQ0FDcEMsZUFDQSxPQUFPUTtRQUFrRCxFQUFFQyxlQUFlLEVBQUU7SUFDMUUsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTVQsNkNBQUtBLENBQUNVLElBQUksQ0FBQyxvQ0FBb0M7WUFDcEVDLE9BQU9KLFlBQVlJLEtBQUs7WUFDeEJDLFVBQVVMLFlBQVlLLFFBQVE7UUFDaEM7UUFDQSxPQUFPSCxTQUFTSSxJQUFJO0lBQ3RCLEVBQUUsT0FBT1QsT0FBWTtZQUVJQSxzQkFBQUE7UUFEdkJVLFFBQVFDLEdBQUcsQ0FBQ1gsT0FBTTtRQUNsQixPQUFPSSxnQkFBZ0JKLEVBQUFBLGtCQUFBQSxNQUFNSyxRQUFRLGNBQWRMLHVDQUFBQSx1QkFBQUEsZ0JBQWdCUyxJQUFJLGNBQXBCVCwyQ0FBQUEscUJBQXNCQSxLQUFLLEtBQUk7SUFDeEQ7QUFDRixHQUNBO0FBRUssTUFBTVksWUFBWWxCLDZEQUFXQSxDQUFDO0lBQ25DbUIsTUFBTTtJQUNOaEI7SUFDQWlCLFVBQVUsQ0FBQztJQUNYQyxlQUFlLENBQUNDO1FBQ2RBLFFBQ0dDLE9BQU8sQ0FBQ2YsT0FBT2dCLE9BQU8sRUFBRSxDQUFDQztZQUN4QkEsTUFBTXBCLE9BQU8sR0FBRztZQUNoQm9CLE1BQU1uQixLQUFLLEdBQUc7UUFDaEIsR0FDQ2lCLE9BQU8sQ0FBQ2YsT0FBT2tCLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUNqQ0YsTUFBTXBCLE9BQU8sR0FBRztZQUNoQm9CLE1BQU1sQixPQUFPLEdBQUNvQixPQUFPQyxPQUFPLENBQUNyQixPQUFPO1lBQ3BDa0IsTUFBTXJCLEtBQUssR0FBR3VCLE9BQU9DLE9BQU8sQ0FBQ3hCLEtBQUs7UUFDcEMsR0FDQ21CLE9BQU8sQ0FBQ2YsT0FBT3FCLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUNoQ0YsTUFBTXBCLE9BQU8sR0FBRztZQUNoQm9CLE1BQU1uQixLQUFLLEdBQUdxQixPQUFPQyxPQUFPO1FBQzlCO0lBQ0o7QUFDRixHQUFHO0FBRUgsK0RBQWVWLFVBQVVZLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXRpbHMvc2xpY2VzL2RhdGFTbGljZS50cz9kNWIyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbnRlcmZhY2UgQXV0aFN0YXRlIHtcbiAgdG9rZW46IHN0cmluZyB8IG51bGw7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xuICBtZXNzYWdlOnN0cmluZ3xudWxsO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IEF1dGhTdGF0ZSA9IHtcbiAgdG9rZW46IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogbnVsbCxcbiAgbWVzc2FnZTpudWxsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBzaWduSW4gPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImF1dGgvc2lnbkluXCIsXG4gIGFzeW5jIChjcmVkZW50aWFsczogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0sIHsgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9zaWduaW5cIiwge1xuICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IsXCJlcnJvXCIpXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvciB8fCBcIlNpZ24taW4gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYXV0aFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7fSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ2FzZShzaWduSW4ucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2Uoc2lnbkluLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5tZXNzYWdlPWFjdGlvbi5wYXlsb2FkLm1lc3NhZ2VcbiAgICAgICAgc3RhdGUudG9rZW4gPSBhY3Rpb24ucGF5bG9hZC50b2tlbiA7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2Uoc2lnbkluLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQgYXMgc3RyaW5nO1xuICAgICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiYXhpb3MiLCJpbml0aWFsU3RhdGUiLCJ0b2tlbiIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJzaWduSW4iLCJjcmVkZW50aWFscyIsInJlamVjdFdpdGhWYWx1ZSIsInJlc3BvbnNlIiwicG9zdCIsImVtYWlsIiwicGFzc3dvcmQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImF1dGhTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/slices/dataSlice.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/utils/store/store.ts":
/*!**********************************!*\
  !*** ./app/utils/store/store.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: function() { return /* binding */ store; },\n/* harmony export */   useAppDispatch: function() { return /* binding */ useAppDispatch; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _slices_dataSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slices/dataSlice */ \"(app-pages-browser)/./app/utils/slices/dataSlice.ts\");\n/* harmony import */ var _slices_movieSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/movieSlice */ \"(app-pages-browser)/./app/utils/slices/movieSlice.ts\");\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({\n    reducer: {\n        auth: _slices_dataSlice__WEBPACK_IMPORTED_MODULE_0__.authSlice.reducer,\n        movies: _slices_movieSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\nconst useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9zdG9yZS9zdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0Q7QUFFUjtBQUNNO0FBQ0E7QUFHekMsTUFBTUksUUFBUUosZ0VBQWNBLENBQUM7SUFDbENLLFNBQVM7UUFDUEMsTUFBTUosd0RBQVNBLENBQUNHLE9BQU87UUFDdkJFLFFBQU9KLDBEQUFZQTtJQUNyQjtBQUNGLEdBQUc7QUFLSSxNQUFNSyxpQkFBb0NQLG9EQUFXQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91dGlscy9zdG9yZS9zdG9yZS50cz85Yzk2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhdXRoU2xpY2UgfSBmcm9tICcuLi9zbGljZXMvZGF0YVNsaWNlJztcbmltcG9ydCBtb3ZpZVJlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy9tb3ZpZVNsaWNlXCI7XG5cblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgYXV0aDogYXV0aFNsaWNlLnJlZHVjZXIsXG4gICAgbW92aWVzOm1vdmllUmVkdWNlcixcbiAgfSxcbn0pO1xuXG5cbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoOiAoKSA9PiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoOyJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInVzZURpc3BhdGNoIiwiYXV0aFNsaWNlIiwibW92aWVSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiYXV0aCIsIm1vdmllcyIsInVzZUFwcERpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/store/store.ts\n"));

/***/ })

});