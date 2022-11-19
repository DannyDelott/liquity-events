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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _LUSDBorrowingFeePaidTableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LUSDBorrowingFeePaidTableRow */ \"./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTableRow.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const [realTimeLUSDBorrowingFeePaidEvents, setRealTimeLUSDBorrowingFeePaidEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        const stakedLQTY = await (lqtyStaking === null || lqtyStaking === void 0 ? void 0 : lqtyStaking.stakes(account));\n        const totalStaked = await (lqtyStaking === null || lqtyStaking === void 0 ? void 0 : lqtyStaking.totalLQTYStaked());\n        if ((stakedLQTY === null || stakedLQTY === void 0 ? void 0 : stakedLQTY.gt(0)) && (totalStaked === null || totalStaked === void 0 ? void 0 : totalStaked.gt(0))) {\n            const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(totalStaked);\n            const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(lusdFee) * poolShare;\n            setRealTimeLUSDBorrowingFeePaidEvents((prevState)=>[\n                    ...prevState,\n                    {\n                        borrower,\n                        lusdFee,\n                        poolShare,\n                        earnedPortion,\n                        event\n                    }\n                ]);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    \"There have been\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: realTimeLUSDBorrowingFeePaidEvents.length\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    \"LUSDBorrowingFeePaid events since this page loaded.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidEvents.map((event, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LUSDBorrowingFeePaidTableRow__WEBPACK_IMPORTED_MODULE_4__.LUSDBorrowingFeePaidTableRow, {\n                        event: event\n                    }, event.blockNumber, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"1oAMd6nRpmUtkTO7YfzPbYaEOBg=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUVsQjtBQUN1RDtBQUMzQjtBQUNpQjtBQU05RSxNQUFNSyxVQUFVO0lBQ2RDLFNBQVM7QUFDWDtBQUNPLFNBQVNDLDBCQUEwQixLQUVULEVBQUU7UUFGTyxFQUN4Q0MsUUFBTyxFQUN3QixHQUZTOztJQUd4QyxNQUFNLENBQ0pDLG9DQUNBQyxzQ0FDRCxHQUFHVCwrQ0FBUUEsQ0FDVixFQUFFO0lBU0osTUFBTVUsY0FBY1IseUVBQWlCQTtJQUNyQ0Qsb0dBQXFDQSxDQUFDLE9BQU9VLFVBQVVDLFNBQVNDLFFBQVU7UUFDeEUsTUFBTUMsYUFBYSxPQUFNSix3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFLLE1BQU0sQ0FBQ1I7UUFDN0MsTUFBTVMsY0FBYyxPQUFNTix3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFPLGVBQWU7UUFDdEQsSUFBSUgsQ0FBQUEsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZSSxFQUFFLENBQUMsUUFBTUYsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhRSxFQUFFLENBQUMsS0FBSTtZQUMzQyxNQUFNQyxZQUFZLENBQUNwQixpRUFBV0EsQ0FBQ2UsY0FBYyxDQUFDZixpRUFBV0EsQ0FBQ2lCO1lBQzFELE1BQU1JLGdCQUFnQixDQUFDckIsaUVBQVdBLENBQUNhLFdBQVdPO1lBQzlDVixzQ0FBc0MsQ0FBQ1ksWUFBYzt1QkFDaERBO29CQUNIO3dCQUFFVjt3QkFBVUM7d0JBQVNPO3dCQUFXQzt3QkFBZVA7b0JBQU07aUJBQ3REO1FBQ0gsQ0FBQztJQUNIO0lBQ0EscUJBQ0UsOERBQUNTO1FBQU1DLE9BQU87WUFBRUMsT0FBTztRQUFNOzswQkFDM0IsOERBQUNDO2dCQUNDRixPQUFPO29CQUNMRyxlQUFlO2dCQUNqQjs7b0JBQ0Q7b0JBQ2lCO2tDQUNoQiw4REFBQ0M7a0NBQVFuQixtQ0FBbUNvQixNQUFNOzs7Ozs7b0JBQVc7b0JBQUk7Ozs7Ozs7MEJBR25FLDhEQUFDQzswQkFDQyw0RUFBQ0M7O3NDQUNDLDhEQUFDQzs0QkFBR1IsT0FBT25CO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDMkI7NEJBQUdSLE9BQU9uQjtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQzJCOzRCQUFHUixPQUFPbkI7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUMyQjs0QkFBR1IsT0FBT25CO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDMkI7NEJBQUdSLE9BQU9uQjtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQzJCOzRCQUFHUixPQUFPbkI7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQzRCOzBCQUNFQyx1QkFBdUJDLEdBQUcsQ0FBQyxDQUFDckIsT0FBT3NCLElBQU07b0JBQ3hDLHFCQUNFLDhEQUFDaEMsdUZBQTRCQTt3QkFFM0JVLE9BQU9BO3VCQURGQSxNQUFNdUIsV0FBVzs7Ozs7Z0JBSTVCOzs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBOURlOUI7O1FBZ0JNSixxRUFBaUJBO1FBQ3JDRCxnR0FBcUNBOzs7S0FqQnZCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4P2EzMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgRXZlbnQgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyB9IGZyb20gXCIuLi9jb250cmFjdHMvYm9ycm93ZXJPcGVyYXRpb25zXCI7XG5pbXBvcnQgeyB1c2VMaXF1aXR5U3Rha2luZyB9IGZyb20gXCIuLi9jb250cmFjdHMvbHF0eVN0YWtpbmdcIjtcbmltcG9ydCB7IExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVSb3cgfSBmcm9tIFwiLi9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUm93XCI7XG5cbmludGVyZmFjZSBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMge1xuICBhY2NvdW50OiBgMHgke3N0cmluZ31gO1xufVxuXG5jb25zdCB0aFN0eWxlID0ge1xuICBwYWRkaW5nOiBcIjVweCAyMHB4XCIsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUoe1xuICBhY2NvdW50LFxufTogTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVByb3BzKSB7XG4gIGNvbnN0IFtcbiAgICByZWFsVGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzLFxuICAgIHNldFJlYWxUaW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMsXG4gIF0gPSB1c2VTdGF0ZShcbiAgICBbXSBhcyB7XG4gICAgICBib3Jyb3dlcjogYDB4JHtzdHJpbmd9YDtcbiAgICAgIGx1c2RGZWU6IEJpZ051bWJlcjtcbiAgICAgIHBvb2xTaGFyZTogbnVtYmVyO1xuICAgICAgZWFybmVkUG9ydGlvbjogbnVtYmVyO1xuICAgICAgZXZlbnQ6IEV2ZW50O1xuICAgIH1bXVxuICApO1xuXG4gIGNvbnN0IGxxdHlTdGFraW5nID0gdXNlTGlxdWl0eVN0YWtpbmcoKTtcbiAgdXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyhhc3luYyAoYm9ycm93ZXIsIGx1c2RGZWUsIGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc3Rha2VkTFFUWSA9IGF3YWl0IGxxdHlTdGFraW5nPy5zdGFrZXMoYWNjb3VudCk7XG4gICAgY29uc3QgdG90YWxTdGFrZWQgPSBhd2FpdCBscXR5U3Rha2luZz8udG90YWxMUVRZU3Rha2VkKCk7XG4gICAgaWYgKHN0YWtlZExRVFk/Lmd0KDApICYmIHRvdGFsU3Rha2VkPy5ndCgwKSkge1xuICAgICAgY29uc3QgcG9vbFNoYXJlID0gK2Zvcm1hdEV0aGVyKHN0YWtlZExRVFkpIC8gK2Zvcm1hdEV0aGVyKHRvdGFsU3Rha2VkKTtcbiAgICAgIGNvbnN0IGVhcm5lZFBvcnRpb24gPSArZm9ybWF0RXRoZXIobHVzZEZlZSkgKiBwb29sU2hhcmU7XG4gICAgICBzZXRSZWFsVGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzKChwcmV2U3RhdGUpID0+IFtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICB7IGJvcnJvd2VyLCBsdXNkRmVlLCBwb29sU2hhcmUsIGVhcm5lZFBvcnRpb24sIGV2ZW50IH0sXG4gICAgICBdKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogXCI3NSVcIiB9fT5cbiAgICAgIDxjYXB0aW9uXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFRoZXJlIGhhdmUgYmVlbntcIiBcIn1cbiAgICAgICAgPHN0cm9uZz57cmVhbFRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cy5sZW5ndGh9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICBMVVNEQm9ycm93aW5nRmVlUGFpZCBldmVudHMgc2luY2UgdGhpcyBwYWdlIGxvYWRlZC5cbiAgICAgIDwvY2FwdGlvbj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+QmxvY2s8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+VHg8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+RGF0ZTwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5Cb3Jyb3dlcjwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5GZWUgYW1vdW50IHBhaWQgKExVU0QpPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PlBvcnRpb24gZWFybmVkPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtib3Jyb3dpbmdGZWVQYWlkRXZlbnRzLm1hcCgoZXZlbnQsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVSb3dcbiAgICAgICAgICAgICAga2V5PXtldmVudC5ibG9ja051bWJlcn1cbiAgICAgICAgICAgICAgZXZlbnQ9e2V2ZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJmb3JtYXRFdGhlciIsInVzZVN0YXRlIiwidXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyIsInVzZUxpcXVpdHlTdGFraW5nIiwiTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVJvdyIsInRoU3R5bGUiLCJwYWRkaW5nIiwiTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZSIsImFjY291bnQiLCJyZWFsVGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzIiwic2V0UmVhbFRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyIsImxxdHlTdGFraW5nIiwiYm9ycm93ZXIiLCJsdXNkRmVlIiwiZXZlbnQiLCJzdGFrZWRMUVRZIiwic3Rha2VzIiwidG90YWxTdGFrZWQiLCJ0b3RhbExRVFlTdGFrZWQiLCJndCIsInBvb2xTaGFyZSIsImVhcm5lZFBvcnRpb24iLCJwcmV2U3RhdGUiLCJ0YWJsZSIsInN0eWxlIiwid2lkdGgiLCJjYXB0aW9uIiwicGFkZGluZ0JvdHRvbSIsInN0cm9uZyIsImxlbmd0aCIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwiYm9ycm93aW5nRmVlUGFpZEV2ZW50cyIsIm1hcCIsImkiLCJibG9ja051bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});