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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nconst tdStyle = {\n    textAlign: \"center\",\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    \"There have been \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: borrowingFeePaidInfos.length\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 25\n                    }, this),\n                    \" \",\n                    \"LUSDBorrowingFeePaid events since this page loaded.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfos.map((borrowingFeePaidInfo, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: makeEtherscanBlockUrl(event.blockNumber),\n                                    children: event.blockNumber\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: makeEtherscanTxUrl(event.transactionHash),\n                                    children: [\n                                        event.transactionHash.slice(0, 16),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: [\n                                    date.toDateString(),\n                                    \" @ \",\n                                    date.toLocaleTimeString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: [\n                                    stakedLQTYLabel,\n                                    \" \",\n                                    prevStakedLQTY ? stakedLQTY.gt(prevStakedLQTY) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"green\"\n                                        },\n                                        children: [\n                                            \"(\",\n                                            \"+\".concat(stakedLQTYDeltaLabel),\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 21\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"red\"\n                                        },\n                                        children: [\n                                            \"(\",\n                                            \"\".concat(stakedLQTYDeltaLabel),\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 21\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"green\"\n                                        },\n                                        children: [\n                                            \"(\",\n                                            \"+\".concat(stakedLQTYLabel),\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: totalLQTYStakedLabel\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: poolSharePercentLabel\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event1)=>{\n        if (!lqtyStaking) {\n            return;\n        }\n        const stakedLQTY1 = await lqtyStaking.stakes(account);\n        const totalStaked = await lqtyStaking.totalLQTYStaked();\n        const block = await event1.getBlock();\n        const timestamp = block.timestamp;\n        const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_4__.formatEther)(stakedLQTY1) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_4__.formatEther)(totalStaked);\n        const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_4__.formatEther)(lusdFee) * poolShare;\n        const borrowingFeePaidInfo = {\n            borrower,\n            block,\n            timestamp,\n            lusdFee,\n            poolShare,\n            earnedPortion,\n            event: event1\n        };\n        setBorrowingFeePaidInfos((prevState)=>[\n                ...prevState,\n                borrowingFeePaidInfo\n            ]);\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBR2xCO0FBQ3VEO0FBQzNCO0FBcUM3RCxNQUFNSSxVQUFVO0lBQ2RDLFNBQVM7QUFDWDtBQUNBLE1BQU1DLFVBQVU7SUFBRUMsV0FBVztJQUFVRixTQUFTO0FBQVc7QUFDcEQsU0FBU0csMEJBQTBCLEtBRVQsRUFBRTtRQUZPLEVBQ3hDQyxRQUFPLEVBQ3dCLEdBRlM7O0lBR3hDLE1BQU1DLHdCQUF3QkMsaUNBQWlDRjtJQUMvRCxxQkFDRSw4REFBQ0c7UUFBTUMsT0FBTztZQUFFQyxPQUFPO1FBQU07OzBCQUMzQiw4REFBQ0M7Z0JBQ0NGLE9BQU87b0JBQ0xHLGVBQWU7Z0JBQ2pCOztvQkFDRDtrQ0FDaUIsOERBQUNDO2tDQUFRUCxzQkFBc0JRLE1BQU07Ozs7OztvQkFBVztvQkFBSTs7Ozs7OzswQkFHdEUsOERBQUNDOzBCQUNDLDRFQUFDQzs7c0NBQ0MsOERBQUNDOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2lCOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2lCOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2lCOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2lCOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2lCOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDa0I7MEJBQ0VaLHNCQUFzQmEsR0FBRyxDQUFDLENBQUNDLHNCQUFzQkMsSUFBTTtvQkFDdEQscUJBQ0UsOERBQUNMOzswQ0FFQyw4REFBQ007Z0NBQUdiLE9BQU9QOzBDQUNULDRFQUFDcUI7b0NBQUVDLE1BQU1DLHNCQUFzQkMsTUFBTUMsV0FBVzs4Q0FDN0NELE1BQU1DLFdBQVc7Ozs7Ozs7Ozs7OzBDQUl0Qiw4REFBQ0w7Z0NBQUdiLE9BQU87b0NBQUVOLFdBQVc7b0NBQVVGLFNBQVM7Z0NBQVc7MENBQ3BELDRFQUFDc0I7b0NBQUVDLE1BQU1JLG1CQUFtQkYsTUFBTUcsZUFBZTs7d0NBQzlDSCxNQUFNRyxlQUFlLENBQUNDLEtBQUssQ0FBQyxHQUFHO3dDQUFJOzs7Ozs7Ozs7Ozs7MENBSXhDLDhEQUFDUjtnQ0FBR2IsT0FBTztvQ0FBRU4sV0FBVztvQ0FBVUYsU0FBUztnQ0FBVzs7b0NBQ25EOEIsS0FBS0MsWUFBWTtvQ0FBRztvQ0FBSUQsS0FBS0Usa0JBQWtCOzs7Ozs7OzBDQUdsRCw4REFBQ1g7Z0NBQUdiLE9BQU87b0NBQUVOLFdBQVc7b0NBQVVGLFNBQVM7Z0NBQVc7O29DQUNuRGlDO29DQUFpQjtvQ0FDakJDLGlCQUNDQyxXQUFXQyxFQUFFLENBQUNGLGdDQUNaLDhEQUFDRzt3Q0FBSzdCLE9BQU87NENBQUU4QixPQUFPO3dDQUFROzs0Q0FBRzs0Q0FDNUIsSUFBd0IsT0FBckJDOzRDQUF1Qjs7Ozs7OzZEQUcvQiw4REFBQ0Y7d0NBQUs3QixPQUFPOzRDQUFFOEIsT0FBTzt3Q0FBTTs7NENBQUc7NENBQzFCLEdBQXVCLE9BQXJCQzs0Q0FBdUI7Ozs7Ozs0Q0FFL0IsaUJBRUQsOERBQUNGO3dDQUFLN0IsT0FBTzs0Q0FBRThCLE9BQU87d0NBQVE7OzRDQUFHOzRDQUM1QixJQUFtQixPQUFoQkw7NENBQWtCOzs7Ozs7NENBRTNCOzs7Ozs7OzBDQUdILDhEQUFDWjtnQ0FBR2IsT0FBTztvQ0FBRU4sV0FBVztvQ0FBVUYsU0FBUztnQ0FBVzswQ0FDbkR3Qzs7Ozs7OzBDQUdILDhEQUFDbkI7Z0NBQUdiLE9BQU87b0NBQUVOLFdBQVc7b0NBQVVGLFNBQVM7Z0NBQVc7MENBQ25EeUM7Ozs7Ozs7Ozs7OztnQkFJVDs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztHQTdFZXRDOztRQUdnQkc7OztLQUhoQkg7QUErRWhCLFNBQVNHLGlDQUFpQ0YsT0FBc0IsRUFBRTs7SUFDaEUsTUFBTSxDQUFDQyx1QkFBdUJxQyx5QkFBeUIsR0FBRzlDLCtDQUFRQSxDQUVoRSxFQUFFO0lBRUosTUFBTStDLGNBQWM3Qyx5RUFBaUJBO0lBRXJDRCxvR0FBcUNBLENBQUMsT0FBTytDLFVBQVVDLFNBQVNwQixTQUFVO1FBQ3hFLElBQUksQ0FBQ2tCLGFBQWE7WUFDaEI7UUFDRixDQUFDO1FBRUQsTUFBTVIsY0FBYSxNQUFNUSxZQUFZRyxNQUFNLENBQUMxQztRQUM1QyxNQUFNMkMsY0FBYyxNQUFNSixZQUFZSyxlQUFlO1FBQ3JELE1BQU1DLFFBQVEsTUFBTXhCLE9BQU15QixRQUFRO1FBQ2xDLE1BQU1DLFlBQVlGLE1BQU1FLFNBQVM7UUFDakMsTUFBTUMsWUFBWSxDQUFDekQsaUVBQVdBLENBQUN3QyxlQUFjLENBQUN4QyxpRUFBV0EsQ0FBQ29EO1FBQzFELE1BQU1NLGdCQUFnQixDQUFDMUQsaUVBQVdBLENBQUNrRCxXQUFXTztRQUM5QyxNQUFNakMsdUJBQXlDO1lBQzdDeUI7WUFDQUs7WUFDQUU7WUFDQU47WUFDQU87WUFDQUM7WUFDQTVCLE9BQUFBO1FBQ0Y7UUFFQWlCLHlCQUF5QixDQUFDWSxZQUFjO21CQUNuQ0E7Z0JBQ0huQzthQUNEO0lBQ0g7SUFDQSxPQUFPZDtBQUNUO0lBbENTQzs7UUFLYVIscUVBQWlCQTtRQUVyQ0QsZ0dBQXFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4P2EzMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgRXZlbnQgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9hYnN0cmFjdC1wcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMgfSBmcm9tIFwiLi4vY29udHJhY3RzL2JvcnJvd2VyT3BlcmF0aW9uc1wiO1xuaW1wb3J0IHsgdXNlTGlxdWl0eVN0YWtpbmcgfSBmcm9tIFwiLi4vY29udHJhY3RzL2xxdHlTdGFraW5nXCI7XG5pbXBvcnQgeyBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUm93IH0gZnJvbSBcIi4vTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVJvd1wiO1xuXG5pbnRlcmZhY2UgQm9ycm93aW5nRmVlSW5mbyB7XG4gIGJvcnJvd2VyOiBgMHgke3N0cmluZ31gO1xuICAvKipcbiAgICogVGhlIGZlZSB0aGUgYm9ycm93ZXIgcGFpZFxuICAgKi9cbiAgbHVzZEZlZTogQmlnTnVtYmVyO1xuICAvKipcbiAgICogUG9vbCBzaGFyZSBhdCB0aGUgdGltZSB0aGUgTFVTREJvcnJvd2luZ0ZlZVBhaWQgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHBvb2xTaGFyZTogbnVtYmVyO1xuICAvKipcbiAgICogUG9ydGlvbiBvZiB0aGUgbHVzZCBmZWUgdGhhdCB3YXMgZWFybmVkXG4gICAqL1xuICBlYXJuZWRQb3J0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVuaXggdGltZXN0YW1wIGluIHNlY29uZHMgd2hlbiB0aGUgZXZlbnQgdG9vayBwbGFjZVxuICAgKi9cbiAgdGltZXN0YW1wOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBMVVNEQm9ycm93aW5nRmVlUGFpZCBldmVudCBpdHNlbGZcbiAgICovXG4gIGV2ZW50OiBFdmVudDtcblxuICAvKipcbiAgICogVGhlIGJsb2NrIHRoZSBldmVudCB0b29rIHBsYWNlIGluXG4gICAqL1xuICBibG9jazogQmxvY2s7XG59XG5pbnRlcmZhY2UgTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVByb3BzIHtcbiAgYWNjb3VudDogYDB4JHtzdHJpbmd9YDtcbn1cblxuY29uc3QgdGhTdHlsZSA9IHtcbiAgcGFkZGluZzogXCI1cHggMjBweFwiLFxufTtcbmNvbnN0IHRkU3R5bGUgPSB7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH07XG5leHBvcnQgZnVuY3Rpb24gTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZSh7XG4gIGFjY291bnQsXG59OiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMpIHtcbiAgY29uc3QgYm9ycm93aW5nRmVlUGFpZEluZm9zID0gdXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MoYWNjb3VudCk7XG4gIHJldHVybiAoXG4gICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjc1JVwiIH19PlxuICAgICAgPGNhcHRpb25cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAxMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgVGhlcmUgaGF2ZSBiZWVuIDxzdHJvbmc+e2JvcnJvd2luZ0ZlZVBhaWRJbmZvcy5sZW5ndGh9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICBMVVNEQm9ycm93aW5nRmVlUGFpZCBldmVudHMgc2luY2UgdGhpcyBwYWdlIGxvYWRlZC5cbiAgICAgIDwvY2FwdGlvbj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+QmxvY2s8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+VHg8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+RGF0ZTwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5Cb3Jyb3dlcjwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5GZWUgYW1vdW50IHBhaWQgKExVU0QpPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PlBvcnRpb24gZWFybmVkPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtib3Jyb3dpbmdGZWVQYWlkSW5mb3MubWFwKChib3Jyb3dpbmdGZWVQYWlkSW5mbywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIHsvKiBCbG9jayBOdW1iZXIgKi99XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bWFrZUV0aGVyc2NhbkJsb2NrVXJsKGV2ZW50LmJsb2NrTnVtYmVyKX0+XG4gICAgICAgICAgICAgICAgICB7ZXZlbnQuYmxvY2tOdW1iZXJ9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICB7LyogVHggSGFzaCAqL31cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5UeFVybChldmVudC50cmFuc2FjdGlvbkhhc2gpfT5cbiAgICAgICAgICAgICAgICAgIHtldmVudC50cmFuc2FjdGlvbkhhc2guc2xpY2UoMCwgMTYpfS4uLlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgey8qIERhdGUgKi99XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiNXB4IDIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICB7ZGF0ZS50b0RhdGVTdHJpbmcoKX0gQCB7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgey8qIFN0YWtlZCBhbW91bnQgKExRVFkpICovfVxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAge3N0YWtlZExRVFlMYWJlbH17XCIgXCJ9XG4gICAgICAgICAgICAgICAge3ByZXZTdGFrZWRMUVRZID8gKFxuICAgICAgICAgICAgICAgICAgc3Rha2VkTFFUWS5ndChwcmV2U3Rha2VkTFFUWSkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgKHtgKyR7c3Rha2VkTFFUWURlbHRhTGFiZWx9YH0pXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICh7YCR7c3Rha2VkTFFUWURlbHRhTGFiZWx9YH0pXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgKHtgKyR7c3Rha2VkTFFUWUxhYmVsfWB9KVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIHsvKiBUb3RhbCBMUVRZIHN0YWtlZCBpbiBwb29sICovfVxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAge3RvdGFsTFFUWVN0YWtlZExhYmVsfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICB7LyogSGlzdG9yaWNhbCBwb29sIHNoYXJlICovfVxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAge3Bvb2xTaGFyZVBlcmNlbnRMYWJlbH1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVzZVJlYWxUaW1lQm9ycm93aW5nRmVlUGFpZEluZm9zKGFjY291bnQ6IGAweCR7c3RyaW5nfWApIHtcbiAgY29uc3QgW2JvcnJvd2luZ0ZlZVBhaWRJbmZvcywgc2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zXSA9IHVzZVN0YXRlPFxuICAgIEJvcnJvd2luZ0ZlZUluZm9bXVxuICA+KFtdKTtcblxuICBjb25zdCBscXR5U3Rha2luZyA9IHVzZUxpcXVpdHlTdGFraW5nKCk7XG5cbiAgdXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyhhc3luYyAoYm9ycm93ZXIsIGx1c2RGZWUsIGV2ZW50KSA9PiB7XG4gICAgaWYgKCFscXR5U3Rha2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YWtlZExRVFkgPSBhd2FpdCBscXR5U3Rha2luZy5zdGFrZXMoYWNjb3VudCk7XG4gICAgY29uc3QgdG90YWxTdGFrZWQgPSBhd2FpdCBscXR5U3Rha2luZy50b3RhbExRVFlTdGFrZWQoKTtcbiAgICBjb25zdCBibG9jayA9IGF3YWl0IGV2ZW50LmdldEJsb2NrKCk7XG4gICAgY29uc3QgdGltZXN0YW1wID0gYmxvY2sudGltZXN0YW1wO1xuICAgIGNvbnN0IHBvb2xTaGFyZSA9ICtmb3JtYXRFdGhlcihzdGFrZWRMUVRZKSAvICtmb3JtYXRFdGhlcih0b3RhbFN0YWtlZCk7XG4gICAgY29uc3QgZWFybmVkUG9ydGlvbiA9ICtmb3JtYXRFdGhlcihsdXNkRmVlKSAqIHBvb2xTaGFyZTtcbiAgICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mbzogQm9ycm93aW5nRmVlSW5mbyA9IHtcbiAgICAgIGJvcnJvd2VyLFxuICAgICAgYmxvY2ssXG4gICAgICB0aW1lc3RhbXAsXG4gICAgICBsdXNkRmVlLFxuICAgICAgcG9vbFNoYXJlLFxuICAgICAgZWFybmVkUG9ydGlvbixcbiAgICAgIGV2ZW50LFxuICAgIH07XG5cbiAgICBzZXRCb3Jyb3dpbmdGZWVQYWlkSW5mb3MoKHByZXZTdGF0ZSkgPT4gW1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgYm9ycm93aW5nRmVlUGFpZEluZm8sXG4gICAgXSk7XG4gIH0pO1xuICByZXR1cm4gYm9ycm93aW5nRmVlUGFpZEluZm9zO1xufVxuIl0sIm5hbWVzIjpbImZvcm1hdEV0aGVyIiwidXNlU3RhdGUiLCJ1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzIiwidXNlTGlxdWl0eVN0YWtpbmciLCJ0aFN0eWxlIiwicGFkZGluZyIsInRkU3R5bGUiLCJ0ZXh0QWxpZ24iLCJMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlIiwiYWNjb3VudCIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsInVzZVJlYWxUaW1lQm9ycm93aW5nRmVlUGFpZEluZm9zIiwidGFibGUiLCJzdHlsZSIsIndpZHRoIiwiY2FwdGlvbiIsInBhZGRpbmdCb3R0b20iLCJzdHJvbmciLCJsZW5ndGgiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvIiwiaSIsInRkIiwiYSIsImhyZWYiLCJtYWtlRXRoZXJzY2FuQmxvY2tVcmwiLCJldmVudCIsImJsb2NrTnVtYmVyIiwibWFrZUV0aGVyc2NhblR4VXJsIiwidHJhbnNhY3Rpb25IYXNoIiwic2xpY2UiLCJkYXRlIiwidG9EYXRlU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwic3Rha2VkTFFUWUxhYmVsIiwicHJldlN0YWtlZExRVFkiLCJzdGFrZWRMUVRZIiwiZ3QiLCJzcGFuIiwiY29sb3IiLCJzdGFrZWRMUVRZRGVsdGFMYWJlbCIsInRvdGFsTFFUWVN0YWtlZExhYmVsIiwicG9vbFNoYXJlUGVyY2VudExhYmVsIiwic2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zIiwibHF0eVN0YWtpbmciLCJib3Jyb3dlciIsImx1c2RGZWUiLCJzdGFrZXMiLCJ0b3RhbFN0YWtlZCIsInRvdGFsTFFUWVN0YWtlZCIsImJsb2NrIiwiZ2V0QmxvY2siLCJ0aW1lc3RhbXAiLCJwb29sU2hhcmUiLCJlYXJuZWRQb3J0aW9uIiwicHJldlN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});