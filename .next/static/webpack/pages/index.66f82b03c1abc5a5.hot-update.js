"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx":
/*!*****************************************************************************!*\
  !*** ./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx ***!
  \*****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _LUSDBorrowingFeePaidTableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LUSDBorrowingFeePaidTableRow */ \"./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTableRow.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const [realTimeLUSDBorrowingFeePaidEvents, setRealTimeLUSDBorrowingFeePaidEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        const stakedLQTY = await (lqtyStaking === null || lqtyStaking === void 0 ? void 0 : lqtyStaking.stakes(account));\n        const totalStaked = await (lqtyStaking === null || lqtyStaking === void 0 ? void 0 : lqtyStaking.totalLQTYStaked());\n        if ((stakedLQTY === null || stakedLQTY === void 0 ? void 0 : stakedLQTY.gt(0)) && (totalStaked === null || totalStaked === void 0 ? void 0 : totalStaked.gt(0))) {\n            const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(totalStaked);\n            const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(lusdFee) * poolShare;\n            setRealTimeLUSDBorrowingFeePaidEvents((prevState)=>[\n                    ...prevState,\n                    {\n                        borrower,\n                        lusdFee,\n                        poolShare,\n                        earnedPortion,\n                        event\n                    }\n                ]);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    \"There have been\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: realTimeLUSDBorrowingFeePaidEvents.length\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    \"LUSDBorrowingFeePaid events since this page loaded.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidEvents.map((event, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LUSDBorrowingFeePaidTableRow__WEBPACK_IMPORTED_MODULE_4__.LUSDBorrowingFeePaidTableRow, {\n                        event: event\n                    }, event.blockNumber, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"1oAMd6nRpmUtkTO7YfzPbYaEOBg=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUVsQjtBQUN1RDtBQUMzQjtBQUNpQjtBQU05RSxNQUFNSyxVQUFVO0lBQ2RDLFNBQVM7QUFDWDtBQUNPLFNBQVNDLDBCQUEwQixLQUVULEVBQUU7UUFGTyxFQUN4Q0MsUUFBTyxFQUN3QixHQUZTOztJQW9CeEMsTUFBTSxDQUNKQyxvQ0FDQUMsc0NBQ0QsR0FBR1QsK0NBQVFBLENBQ1YsRUFBRTtJQUdKLE1BQU1VLGNBQWNSLHlFQUFpQkE7SUFDckNELG9HQUFxQ0EsQ0FBQyxPQUFPVSxVQUFVQyxTQUFTQyxRQUFVO1FBQ3hFLE1BQU1DLGFBQWEsT0FBTUosd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhSyxNQUFNLENBQUNSO1FBQzdDLE1BQU1TLGNBQWMsT0FBTU4sd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhTyxlQUFlO1FBQ3RELElBQUlILENBQUFBLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUksRUFBRSxDQUFDLFFBQU1GLHdCQUFBQSx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYUUsRUFBRSxDQUFDLEtBQUk7WUFDM0MsTUFBTUMsWUFBWSxDQUFDcEIsaUVBQVdBLENBQUNlLGNBQWMsQ0FBQ2YsaUVBQVdBLENBQUNpQjtZQUMxRCxNQUFNSSxnQkFBZ0IsQ0FBQ3JCLGlFQUFXQSxDQUFDYSxXQUFXTztZQUM5Q1Ysc0NBQXNDLENBQUNZLFlBQWM7dUJBQ2hEQTtvQkFDSDt3QkFBRVY7d0JBQVVDO3dCQUFTTzt3QkFBV0M7d0JBQWVQO29CQUFNO2lCQUN0RDtRQUNILENBQUM7SUFDSDtJQUNBLHFCQUNFLDhEQUFDUztRQUFNQyxPQUFPO1lBQUVDLE9BQU87UUFBTTs7MEJBQzNCLDhEQUFDQztnQkFDQ0YsT0FBTztvQkFDTEcsZUFBZTtnQkFDakI7O29CQUNEO29CQUNpQjtrQ0FDaEIsOERBQUNDO2tDQUFRbkIsbUNBQW1Db0IsTUFBTTs7Ozs7O29CQUFXO29CQUFJOzs7Ozs7OzBCQUduRSw4REFBQ0M7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7NEJBQUdSLE9BQU9uQjtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQzJCOzRCQUFHUixPQUFPbkI7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUMyQjs0QkFBR1IsT0FBT25CO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDMkI7NEJBQUdSLE9BQU9uQjtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQzJCOzRCQUFHUixPQUFPbkI7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUMyQjs0QkFBR1IsT0FBT25CO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUM0QjswQkFDRUMsdUJBQXVCQyxHQUFHLENBQUMsQ0FBQ3JCLE9BQU9zQixJQUFNO29CQUN4QyxxQkFDRSw4REFBQ2hDLHVGQUE0QkE7d0JBRTNCVSxPQUFPQTt1QkFERkEsTUFBTXVCLFdBQVc7Ozs7O2dCQUk1Qjs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztHQXpFZTlCOztRQTJCTUoscUVBQWlCQTtRQUNyQ0QsZ0dBQXFDQTs7O0tBNUJ2QksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpcXVpdHkvTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlLnRzeD9hMzI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCI7XG5pbXBvcnQgeyBCaWdOdW1iZXIsIEV2ZW50IH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMgfSBmcm9tIFwiLi4vY29udHJhY3RzL2JvcnJvd2VyT3BlcmF0aW9uc1wiO1xuaW1wb3J0IHsgdXNlTGlxdWl0eVN0YWtpbmcgfSBmcm9tIFwiLi4vY29udHJhY3RzL2xxdHlTdGFraW5nXCI7XG5pbXBvcnQgeyBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUm93IH0gZnJvbSBcIi4vTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVJvd1wiO1xuXG5pbnRlcmZhY2UgTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVByb3BzIHtcbiAgYWNjb3VudDogYDB4JHtzdHJpbmd9YDtcbn1cblxuY29uc3QgdGhTdHlsZSA9IHtcbiAgcGFkZGluZzogXCI1cHggMjBweFwiLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlKHtcbiAgYWNjb3VudCxcbn06IExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVQcm9wcykge1xuXHRpbnRlcmZhY2UgQm9ycm93aW5nRmVlSW5mbyB7XG5cdFx0Ym9ycm93ZXI6IGAweCR7c3RyaW5nfWA7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGZlZSB0aGUgYm9ycm93ZXIgcGFpZFxuXHRcdCAqL1xuXHRcdGx1c2RGZWU6IEJpZ051bWJlcjtcblx0XHQvKipcblx0XHQgKiBQb29sIHNoYXJlIGF0IHRoZSB0aW1lIHRoZSBldmVudCB3YXMgZW1pdHRlZFxuXHRcdCAqL1xuXHRcdHBvb2xTaGFyZTogbnVtYmVyO1xuXHRcdC8qKlxuXHRcdCAqIFBvcnRpb24gb2YgdGhlIGx1c2QgZmVlIHRoYXQgd2FzIGVhcm5lZFxuXHRcdCAqL1xuXHRcdGVhcm5lZFBvcnRpb246IG51bWJlcjtcblx0XHRldmVudDogRXZlbnQ7XG5cdH1cblxuICBjb25zdCBbXG4gICAgcmVhbFRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyxcbiAgICBzZXRSZWFsVGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzLFxuICBdID0gdXNlU3RhdGUoXG4gICAgW10gYXMgQm9ycm93aW5nRmVlSW5mb1tdXG4gICk7XG5cbiAgY29uc3QgbHF0eVN0YWtpbmcgPSB1c2VMaXF1aXR5U3Rha2luZygpO1xuICB1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzKGFzeW5jIChib3Jyb3dlciwgbHVzZEZlZSwgZXZlbnQpID0+IHtcbiAgICBjb25zdCBzdGFrZWRMUVRZID0gYXdhaXQgbHF0eVN0YWtpbmc/LnN0YWtlcyhhY2NvdW50KTtcbiAgICBjb25zdCB0b3RhbFN0YWtlZCA9IGF3YWl0IGxxdHlTdGFraW5nPy50b3RhbExRVFlTdGFrZWQoKTtcbiAgICBpZiAoc3Rha2VkTFFUWT8uZ3QoMCkgJiYgdG90YWxTdGFrZWQ/Lmd0KDApKSB7XG4gICAgICBjb25zdCBwb29sU2hhcmUgPSArZm9ybWF0RXRoZXIoc3Rha2VkTFFUWSkgLyArZm9ybWF0RXRoZXIodG90YWxTdGFrZWQpO1xuICAgICAgY29uc3QgZWFybmVkUG9ydGlvbiA9ICtmb3JtYXRFdGhlcihsdXNkRmVlKSAqIHBvb2xTaGFyZTtcbiAgICAgIHNldFJlYWxUaW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMoKHByZXZTdGF0ZSkgPT4gW1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHsgYm9ycm93ZXIsIGx1c2RGZWUsIHBvb2xTaGFyZSwgZWFybmVkUG9ydGlvbiwgZXZlbnQgfSxcbiAgICAgIF0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjc1JVwiIH19PlxuICAgICAgPGNhcHRpb25cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAxMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgVGhlcmUgaGF2ZSBiZWVue1wiIFwifVxuICAgICAgICA8c3Ryb25nPntyZWFsVGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzLmxlbmd0aH08L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50cyBzaW5jZSB0aGlzIHBhZ2UgbG9hZGVkLlxuICAgICAgPC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5CbG9jazwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5UeDwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5EYXRlPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkJvcnJvd2VyPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkZlZSBhbW91bnQgcGFpZCAoTFVTRCk8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+UG9ydGlvbiBlYXJuZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2JvcnJvd2luZ0ZlZVBhaWRFdmVudHMubWFwKChldmVudCwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVJvd1xuICAgICAgICAgICAgICBrZXk9e2V2ZW50LmJsb2NrTnVtYmVyfVxuICAgICAgICAgICAgICBldmVudD17ZXZlbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImZvcm1hdEV0aGVyIiwidXNlU3RhdGUiLCJ1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzIiwidXNlTGlxdWl0eVN0YWtpbmciLCJMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUm93IiwidGhTdHlsZSIsInBhZGRpbmciLCJMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlIiwiYWNjb3VudCIsInJlYWxUaW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMiLCJzZXRSZWFsVGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzIiwibHF0eVN0YWtpbmciLCJib3Jyb3dlciIsImx1c2RGZWUiLCJldmVudCIsInN0YWtlZExRVFkiLCJzdGFrZXMiLCJ0b3RhbFN0YWtlZCIsInRvdGFsTFFUWVN0YWtlZCIsImd0IiwicG9vbFNoYXJlIiwiZWFybmVkUG9ydGlvbiIsInByZXZTdGF0ZSIsInRhYmxlIiwic3R5bGUiLCJ3aWR0aCIsImNhcHRpb24iLCJwYWRkaW5nQm90dG9tIiwic3Ryb25nIiwibGVuZ3RoIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJib3Jyb3dpbmdGZWVQYWlkRXZlbnRzIiwibWFwIiwiaSIsImJsb2NrTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});