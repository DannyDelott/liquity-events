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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _LUSDBorrowingFeePaidTableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LUSDBorrowingFeePaidTableRow */ \"./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTableRow.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    \"There have been \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: borrowingFeePaidInfos.length\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, this),\n                    \" \",\n                    \"LUSDBorrowingFeePaid events since this page loaded.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfo.map((event, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LUSDBorrowingFeePaidTableRow__WEBPACK_IMPORTED_MODULE_4__.LUSDBorrowingFeePaidTableRow, {\n                        event: event\n                    }, event.blockNumber, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        const stakedLQTY = await (lqtyStaking === null || lqtyStaking === void 0 ? void 0 : lqtyStaking.stakes(account));\n        const totalStaked = await (lqtyStaking === null || lqtyStaking === void 0 ? void 0 : lqtyStaking.totalLQTYStaked());\n        if ((stakedLQTY === null || stakedLQTY === void 0 ? void 0 : stakedLQTY.gt(0)) && (totalStaked === null || totalStaked === void 0 ? void 0 : totalStaked.gt(0))) {\n            const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(totalStaked);\n            const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(lusdFee) * poolShare;\n            const borrowingFeePaidInfo1 = {\n                borrower,\n                lusdFee,\n                poolShare,\n                earnedPortion,\n                event\n            };\n            setBorrowingFeePaidInfos((prevState)=>[\n                    ...prevState,\n                    borrowingFeePaidInfo1\n                ]);\n        }\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUVsQjtBQUN1RDtBQUMzQjtBQUNpQjtBQTBCOUUsTUFBTUssVUFBVTtJQUNkQyxTQUFTO0FBQ1g7QUFDTyxTQUFTQywwQkFBMEIsS0FFVCxFQUFFO1FBRk8sRUFDeENDLFFBQU8sRUFDd0IsR0FGUzs7SUFHeEMsTUFBTUMsd0JBQXdCQyxpQ0FBaUNGO0lBQy9ELHFCQUNFLDhEQUFDRztRQUFNQyxPQUFPO1lBQUVDLE9BQU87UUFBTTs7MEJBQzNCLDhEQUFDQztnQkFDQ0YsT0FBTztvQkFDTEcsZUFBZTtnQkFDakI7O29CQUNEO2tDQUNpQiw4REFBQ0M7a0NBQVFQLHNCQUFzQlEsTUFBTTs7Ozs7O29CQUFXO29CQUFJOzs7Ozs7OzBCQUd0RSw4REFBQ0M7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7NEJBQUdSLE9BQU9QO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDZTs0QkFBR1IsT0FBT1A7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNlOzRCQUFHUixPQUFPUDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2U7NEJBQUdSLE9BQU9QO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDZTs0QkFBR1IsT0FBT1A7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNlOzRCQUFHUixPQUFPUDtzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDZ0I7MEJBQ0VDLHFCQUFxQkMsR0FBRyxDQUFDLENBQUNDLE9BQU9DLElBQU07b0JBQ3RDLHFCQUNFLDhEQUFDckIsdUZBQTRCQTt3QkFFM0JvQixPQUFPQTt1QkFERkEsTUFBTUUsV0FBVzs7Ozs7Z0JBSTVCOzs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBcENlbkI7O1FBR2dCRzs7O0tBSGhCSDtBQXNDaEIsU0FBU0csaUNBQWlDRixPQUFzQixFQUFFOztJQUNoRSxNQUFNLENBQUNDLHVCQUF1QmtCLHlCQUF5QixHQUFHMUIsK0NBQVFBLENBRWhFLEVBQUU7SUFDSixNQUFNMkIsY0FBY3pCLHlFQUFpQkE7SUFDckNELG9HQUFxQ0EsQ0FBQyxPQUFPMkIsVUFBVUMsU0FBU04sUUFBVTtRQUN4RSxNQUFNTyxhQUFhLE9BQU1ILHdCQUFBQSx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYUksTUFBTSxDQUFDeEI7UUFDN0MsTUFBTXlCLGNBQWMsT0FBTUwsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhTSxlQUFlO1FBQ3RELElBQUlILENBQUFBLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUksRUFBRSxDQUFDLFFBQU1GLHdCQUFBQSx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYUUsRUFBRSxDQUFDLEtBQUk7WUFDM0MsTUFBTUMsWUFBWSxDQUFDcEMsaUVBQVdBLENBQUMrQixjQUFjLENBQUMvQixpRUFBV0EsQ0FBQ2lDO1lBQzFELE1BQU1JLGdCQUFnQixDQUFDckMsaUVBQVdBLENBQUM4QixXQUFXTTtZQUM5QyxNQUFNZCx3QkFBeUM7Z0JBQzdDTztnQkFDQUM7Z0JBQ0FNO2dCQUNBQztnQkFDQWI7WUFDRjtZQUVBRyx5QkFBeUIsQ0FBQ1csWUFBYzt1QkFDbkNBO29CQUNIaEI7aUJBQ0Q7UUFDSCxDQUFDO0lBQ0g7SUFDQSxPQUFPYjtBQUNUO0lBMUJTQzs7UUFJYVAscUVBQWlCQTtRQUNyQ0QsZ0dBQXFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4P2EzMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgRXZlbnQgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyB9IGZyb20gXCIuLi9jb250cmFjdHMvYm9ycm93ZXJPcGVyYXRpb25zXCI7XG5pbXBvcnQgeyB1c2VMaXF1aXR5U3Rha2luZyB9IGZyb20gXCIuLi9jb250cmFjdHMvbHF0eVN0YWtpbmdcIjtcbmltcG9ydCB7IExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVSb3cgfSBmcm9tIFwiLi9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUm93XCI7XG5cbmludGVyZmFjZSBCb3Jyb3dpbmdGZWVJbmZvIHtcbiAgYm9ycm93ZXI6IGAweCR7c3RyaW5nfWA7XG4gIC8qKlxuICAgKiBUaGUgZmVlIHRoZSBib3Jyb3dlciBwYWlkXG4gICAqL1xuICBsdXNkRmVlOiBCaWdOdW1iZXI7XG4gIC8qKlxuICAgKiBQb29sIHNoYXJlIGF0IHRoZSB0aW1lIHRoZSBMVVNEQm9ycm93aW5nRmVlUGFpZCBldmVudCB3YXMgZW1pdHRlZFxuICAgKi9cbiAgcG9vbFNoYXJlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBQb3J0aW9uIG9mIHRoZSBsdXNkIGZlZSB0aGF0IHdhcyBlYXJuZWRcbiAgICovXG4gIGVhcm5lZFBvcnRpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50IGl0c2VsZlxuICAgKi9cbiAgZXZlbnQ6IEV2ZW50O1xufVxuaW50ZXJmYWNlIExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVQcm9wcyB7XG4gIGFjY291bnQ6IGAweCR7c3RyaW5nfWA7XG59XG5cbmNvbnN0IHRoU3R5bGUgPSB7XG4gIHBhZGRpbmc6IFwiNXB4IDIwcHhcIixcbn07XG5leHBvcnQgZnVuY3Rpb24gTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZSh7XG4gIGFjY291bnQsXG59OiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMpIHtcbiAgY29uc3QgYm9ycm93aW5nRmVlUGFpZEluZm9zID0gdXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MoYWNjb3VudCk7XG4gIHJldHVybiAoXG4gICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjc1JVwiIH19PlxuICAgICAgPGNhcHRpb25cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAxMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgVGhlcmUgaGF2ZSBiZWVuIDxzdHJvbmc+e2JvcnJvd2luZ0ZlZVBhaWRJbmZvcy5sZW5ndGh9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICBMVVNEQm9ycm93aW5nRmVlUGFpZCBldmVudHMgc2luY2UgdGhpcyBwYWdlIGxvYWRlZC5cbiAgICAgIDwvY2FwdGlvbj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+QmxvY2s8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+VHg8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+RGF0ZTwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5Cb3Jyb3dlcjwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5GZWUgYW1vdW50IHBhaWQgKExVU0QpPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PlBvcnRpb24gZWFybmVkPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtib3Jyb3dpbmdGZWVQYWlkSW5mby5tYXAoKGV2ZW50LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUm93XG4gICAgICAgICAgICAgIGtleT17ZXZlbnQuYmxvY2tOdW1iZXJ9XG4gICAgICAgICAgICAgIGV2ZW50PXtldmVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVzZVJlYWxUaW1lQm9ycm93aW5nRmVlUGFpZEluZm9zKGFjY291bnQ6IGAweCR7c3RyaW5nfWApIHtcbiAgY29uc3QgW2JvcnJvd2luZ0ZlZVBhaWRJbmZvcywgc2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zXSA9IHVzZVN0YXRlPFxuICAgIEJvcnJvd2luZ0ZlZUluZm9bXVxuICA+KFtdKTtcbiAgY29uc3QgbHF0eVN0YWtpbmcgPSB1c2VMaXF1aXR5U3Rha2luZygpO1xuICB1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzKGFzeW5jIChib3Jyb3dlciwgbHVzZEZlZSwgZXZlbnQpID0+IHtcbiAgICBjb25zdCBzdGFrZWRMUVRZID0gYXdhaXQgbHF0eVN0YWtpbmc/LnN0YWtlcyhhY2NvdW50KTtcbiAgICBjb25zdCB0b3RhbFN0YWtlZCA9IGF3YWl0IGxxdHlTdGFraW5nPy50b3RhbExRVFlTdGFrZWQoKTtcbiAgICBpZiAoc3Rha2VkTFFUWT8uZ3QoMCkgJiYgdG90YWxTdGFrZWQ/Lmd0KDApKSB7XG4gICAgICBjb25zdCBwb29sU2hhcmUgPSArZm9ybWF0RXRoZXIoc3Rha2VkTFFUWSkgLyArZm9ybWF0RXRoZXIodG90YWxTdGFrZWQpO1xuICAgICAgY29uc3QgZWFybmVkUG9ydGlvbiA9ICtmb3JtYXRFdGhlcihsdXNkRmVlKSAqIHBvb2xTaGFyZTtcbiAgICAgIGNvbnN0IGJvcnJvd2luZ0ZlZVBhaWRJbmZvOiBCb3Jyb3dpbmdGZWVJbmZvID0ge1xuICAgICAgICBib3Jyb3dlcixcbiAgICAgICAgbHVzZEZlZSxcbiAgICAgICAgcG9vbFNoYXJlLFxuICAgICAgICBlYXJuZWRQb3J0aW9uLFxuICAgICAgICBldmVudCxcbiAgICAgIH07XG5cbiAgICAgIHNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvcygocHJldlN0YXRlKSA9PiBbXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgYm9ycm93aW5nRmVlUGFpZEluZm8sXG4gICAgICBdKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYm9ycm93aW5nRmVlUGFpZEluZm9zO1xufVxuIl0sIm5hbWVzIjpbImZvcm1hdEV0aGVyIiwidXNlU3RhdGUiLCJ1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzIiwidXNlTGlxdWl0eVN0YWtpbmciLCJMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUm93IiwidGhTdHlsZSIsInBhZGRpbmciLCJMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlIiwiYWNjb3VudCIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsInVzZVJlYWxUaW1lQm9ycm93aW5nRmVlUGFpZEluZm9zIiwidGFibGUiLCJzdHlsZSIsIndpZHRoIiwiY2FwdGlvbiIsInBhZGRpbmdCb3R0b20iLCJzdHJvbmciLCJsZW5ndGgiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvIiwibWFwIiwiZXZlbnQiLCJpIiwiYmxvY2tOdW1iZXIiLCJzZXRCb3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJscXR5U3Rha2luZyIsImJvcnJvd2VyIiwibHVzZEZlZSIsInN0YWtlZExRVFkiLCJzdGFrZXMiLCJ0b3RhbFN0YWtlZCIsInRvdGFsTFFUWVN0YWtlZCIsImd0IiwicG9vbFNoYXJlIiwiZWFybmVkUG9ydGlvbiIsInByZXZTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});