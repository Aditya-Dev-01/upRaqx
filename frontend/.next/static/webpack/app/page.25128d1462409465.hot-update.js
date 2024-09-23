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

/***/ "(app-pages-browser)/./components/CustomSelect/CustomSelect.tsx":
/*!**************************************************!*\
  !*** ./components/CustomSelect/CustomSelect.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CustomSelect = (param)=>{\n    let { arrayOfOptions, label, selectColor = \"#2BD17E\", selectTextColor = \"#ffffff\", bgColor = \"#224957\", height = \"150px\", onSelect } = param;\n    var _arrayOfOptions_find, _arrayOfOptions_;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const toggleDropdown = ()=>setIsOpen(!isOpen);\n    const selectValueFun = (value)=>{\n        setSelectedValue(value);\n        setIsOpen(false);\n        onSelect(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative mt-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleDropdown,\n                style: {\n                    backgroundColor: selectColor,\n                    color: selectTextColor\n                },\n                className: \"block w-[180px] h-[40px] sm:h-[50px] p-2 sm:p-4 font-bold text-sm text-center  shadow-md rounded-[10px]  custom-select\",\n                children: [\n                    selectedValue ? (_arrayOfOptions_find = arrayOfOptions.find((opt)=>opt.value === selectedValue)) === null || _arrayOfOptions_find === void 0 ? void 0 : _arrayOfOptions_find.label : label || ((_arrayOfOptions_ = arrayOfOptions[0]) === null || _arrayOfOptions_ === void 0 ? void 0 : _arrayOfOptions_.label),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-5 h-5 inline ml-2 float-right\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 20 20\",\n                        fill: \"currentColor\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            d: \"M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\",\n                            clipRule: \"evenodd\"\n                        }, void 0, false, {\n                            fileName: \"/home/developer/Desktop/paranjay/testTask/testTask/uqraqx/frontend/components/CustomSelect/CustomSelect.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/developer/Desktop/paranjay/testTask/testTask/uqraqx/frontend/components/CustomSelect/CustomSelect.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/developer/Desktop/paranjay/testTask/testTask/uqraqx/frontend/components/CustomSelect/CustomSelect.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: height,\n                    backgroundColor: bgColor\n                },\n                className: \"absolute mt-2 w-full shadow-lg rounded-[10px] z-10 custom-scrollbar overflow-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-1\",\n                    children: arrayOfOptions.map((ele)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>selectValueFun(ele.value),\n                            className: \"h-[49px] flex justify-start items-center p-4 text-white font-bold text-[14px] cursor-pointer rounded-md\",\n                            children: ele.label.toUpperCase()\n                        }, ele.value, false, {\n                            fileName: \"/home/developer/Desktop/paranjay/testTask/testTask/uqraqx/frontend/components/CustomSelect/CustomSelect.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/developer/Desktop/paranjay/testTask/testTask/uqraqx/frontend/components/CustomSelect/CustomSelect.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/developer/Desktop/paranjay/testTask/testTask/uqraqx/frontend/components/CustomSelect/CustomSelect.tsx\",\n                lineNumber: 64,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/developer/Desktop/paranjay/testTask/testTask/uqraqx/frontend/components/CustomSelect/CustomSelect.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomSelect, \"mI3x5cie57yyeb0LbLF8HtteuUk=\");\n_c = CustomSelect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomSelect);\nvar _c;\n$RefreshReg$(_c, \"CustomSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0L0N1c3RvbVNlbGVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBa0J4QyxNQUFNRSxlQUE0QztRQUFDLEVBQy9DQyxjQUFjLEVBQ2RDLEtBQUssRUFDTEMsY0FBYyxTQUFTLEVBQ3ZCQyxrQkFBa0IsU0FBUyxFQUMzQkMsVUFBVSxTQUFTLEVBQ25CQyxTQUFTLE9BQU8sRUFDaEJDLFFBQVEsRUFDWDtRQW9CcUJOLHNCQUNTQTs7SUFwQjNCLE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBUztJQUUzRCxNQUFNYSxpQkFBaUIsSUFBTUgsVUFBVSxDQUFDRDtJQUV4QyxNQUFNSyxpQkFBaUIsQ0FBQ0M7UUFDcEJILGlCQUFpQkc7UUFDakJMLFVBQVU7UUFDVkYsU0FBU087SUFDYjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQ0dDLFNBQVNOO2dCQUNUTyxPQUFPO29CQUFFQyxpQkFBaUJqQjtvQkFBYWtCLE9BQU9qQjtnQkFBZ0I7Z0JBQzlEWSxXQUFVOztvQkFFVE4saUJBQ0tULHVCQUFBQSxlQUFlcUIsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlULEtBQUssS0FBS0osNEJBQTNDVCwyQ0FBQUEscUJBQTJEQyxLQUFLLEdBQ2hFQSxXQUFTRCxtQkFBQUEsY0FBYyxDQUFDLEVBQUUsY0FBakJBLHVDQUFBQSxpQkFBbUJDLEtBQUs7a0NBQ3ZDLDhEQUFDc0I7d0JBQ0dSLFdBQVU7d0JBQ1ZTLE9BQU07d0JBQ05DLFNBQVE7d0JBQ1JDLE1BQUs7a0NBRUwsNEVBQUNDOzRCQUNHQyxVQUFTOzRCQUNUQyxHQUFFOzRCQUNGQyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztZQUtwQnZCLHdCQUNHLDhEQUFDTztnQkFDR0ksT0FBTztvQkFBRWIsUUFBUUE7b0JBQVFjLGlCQUFpQmY7Z0JBQVE7Z0JBQ2xEVyxXQUFVOzBCQUVWLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDVmYsZUFBZStCLEdBQUcsQ0FBQyxDQUFDQyxvQkFDakIsOERBQUNsQjs0QkFFR0csU0FBUyxJQUFNTCxlQUFlb0IsSUFBSW5CLEtBQUs7NEJBQ3ZDRSxXQUFVO3NDQUVUaUIsSUFBSS9CLEtBQUssQ0FBQ2dDLFdBQVc7MkJBSmpCRCxJQUFJbkIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTlDO0dBaEVNZDtLQUFBQTtBQWtFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC9DdXN0b21TZWxlY3QudHN4P2VmNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7IC8vIEltcG9ydCB1c2VUcmFuc2xhdGlvblxuXG5pbnRlcmZhY2UgT3B0aW9uIHtcbiAgICB2YWx1ZTogc3RyaW5nOyAvLyBDaGFuZ2UgdG8gc3RyaW5nIHRvIG1hdGNoIGxhbmd1YWdlIGNvZGVzIGxpa2UgJ2VuJywgJ2ZyJywgZXRjLlxuICAgIGxhYmVsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDdXN0b21TZWxlY3RQcm9wcyB7XG4gICAgYXJyYXlPZk9wdGlvbnM6IE9wdGlvbltdO1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIHNlbGVjdENvbG9yPzogc3RyaW5nO1xuICAgIHNlbGVjdFRleHRDb2xvcj86IHN0cmluZztcbiAgICBiZ0NvbG9yPzogc3RyaW5nO1xuICAgIGhlaWdodD86IHN0cmluZztcbiAgICBvblNlbGVjdDogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7IC8vIFVwZGF0ZSB0eXBlIHRvIHN0cmluZ1xufVxuXG5jb25zdCBDdXN0b21TZWxlY3Q6IFJlYWN0LkZDPEN1c3RvbVNlbGVjdFByb3BzPiA9ICh7XG4gICAgYXJyYXlPZk9wdGlvbnMsXG4gICAgbGFiZWwsXG4gICAgc2VsZWN0Q29sb3IgPSBcIiMyQkQxN0VcIixcbiAgICBzZWxlY3RUZXh0Q29sb3IgPSBcIiNmZmZmZmZcIixcbiAgICBiZ0NvbG9yID0gXCIjMjI0OTU3XCIsXG4gICAgaGVpZ2h0ID0gXCIxNTBweFwiLFxuICAgIG9uU2VsZWN0LFxufSkgPT4ge1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkVmFsdWUsIHNldFNlbGVjdGVkVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xuXG4gICAgY29uc3Qgc2VsZWN0VmFsdWVGdW4gPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZFZhbHVlKHZhbHVlKTtcbiAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgICAgb25TZWxlY3QodmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTFcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdENvbG9yLCBjb2xvcjogc2VsZWN0VGV4dENvbG9yIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1bMTgwcHhdIGgtWzQwcHhdIHNtOmgtWzUwcHhdIHAtMiBzbTpwLTQgZm9udC1ib2xkIHRleHQtc20gdGV4dC1jZW50ZXIgIHNoYWRvdy1tZCByb3VuZGVkLVsxMHB4XSAgY3VzdG9tLXNlbGVjdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgPyBhcnJheU9mT3B0aW9ucy5maW5kKChvcHQpID0+IG9wdC52YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZSk/LmxhYmVsXG4gICAgICAgICAgICAgICAgICAgIDogbGFiZWwgfHwgYXJyYXlPZk9wdGlvbnNbMF0/LmxhYmVsfVxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSBpbmxpbmUgbWwtMiBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNS4yOTMgOS4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDEyLjU4NmwzLjI5My0zLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMGwtNC00YTEgMSAwIDAxMC0xLjQxNHpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbXQtMiB3LWZ1bGwgc2hhZG93LWxnIHJvdW5kZWQtWzEwcHhdIHotMTAgY3VzdG9tLXNjcm9sbGJhciBvdmVyZmxvdy1hdXRvXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FycmF5T2ZPcHRpb25zLm1hcCgoZWxlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0VmFsdWVGdW4oZWxlLnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bNDlweF0gZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBwLTQgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1bMTRweF0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlLmxhYmVsLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tU2VsZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDdXN0b21TZWxlY3QiLCJhcnJheU9mT3B0aW9ucyIsImxhYmVsIiwic2VsZWN0Q29sb3IiLCJzZWxlY3RUZXh0Q29sb3IiLCJiZ0NvbG9yIiwiaGVpZ2h0Iiwib25TZWxlY3QiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZWxlY3RlZFZhbHVlIiwic2V0U2VsZWN0ZWRWYWx1ZSIsInRvZ2dsZURyb3Bkb3duIiwic2VsZWN0VmFsdWVGdW4iLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZmluZCIsIm9wdCIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiLCJtYXAiLCJlbGUiLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CustomSelect/CustomSelect.tsx\n"));

/***/ })

});