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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nconst tdStyle = {\n    textAlign: \"center\",\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    \"There have been \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: borrowingFeePaidInfos.length\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 25\n                    }, this),\n                    \" \",\n                    \"LUSDBorrowingFeePaid events since this page loaded.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfos.map((param, i)=>{\n                    let { timestamp , event , borrower  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanBlockUrl)(event.blockNumber),\n                                    children: event.blockNumber\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanTxUrl)(event.transactionHash),\n                                    children: [\n                                        event.transactionHash.slice(0, 16),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: [\n                                    date.toDateString(),\n                                    \" @ \",\n                                    date.toLocaleTimeString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: [\n                                    stakedLQTYLabel,\n                                    \" \",\n                                    prevStakedLQTY ? stakedLQTY.gt(prevStakedLQTY) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"green\"\n                                        },\n                                        children: [\n                                            \"(\",\n                                            \"+\".concat(stakedLQTYDeltaLabel),\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 21\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"red\"\n                                        },\n                                        children: [\n                                            \"(\",\n                                            \"\".concat(stakedLQTYDeltaLabel),\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 21\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"green\"\n                                        },\n                                        children: [\n                                            \"(\",\n                                            \"+\".concat(stakedLQTYLabel),\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: totalLQTYStakedLabel\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: poolSharePercentLabel\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        if (!lqtyStaking) {\n            return;\n        }\n        const stakedLQTY1 = await lqtyStaking.stakes(account);\n        const totalStaked = await lqtyStaking.totalLQTYStaked();\n        const block = await event.getBlock();\n        const timestamp = block.timestamp;\n        const date1 = new Date(block.timestamp * 1000);\n        const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(stakedLQTY1) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(totalStaked);\n        const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(lusdFee) * poolShare;\n        const borrowingFeePaidInfo = {\n            borrower,\n            block,\n            timestamp,\n            lusdFee,\n            poolShare,\n            earnedPortion,\n            event\n        };\n        setBorrowingFeePaidInfos((prevState)=>[\n                ...prevState,\n                borrowingFeePaidInfo\n            ]);\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUdIO0FBQ3dDO0FBQzNCO0FBRWU7QUFvQzVFLE1BQU1NLFVBQVU7SUFDZEMsU0FBUztBQUNYO0FBQ0EsTUFBTUMsVUFBeUI7SUFBRUMsV0FBVztJQUFVRixTQUFTO0FBQVc7QUFDbkUsU0FBU0csMEJBQTBCLEtBRVQsRUFBRTtRQUZPLEVBQ3hDQyxRQUFPLEVBQ3dCLEdBRlM7O0lBR3hDLE1BQU1DLHdCQUF3QkMsaUNBQWlDRjtJQUMvRCxxQkFDRSw4REFBQ0c7UUFBTUMsT0FBTztZQUFFQyxPQUFPO1FBQU07OzBCQUMzQiw4REFBQ0M7Z0JBQ0NGLE9BQU87b0JBQ0xHLGVBQWU7Z0JBQ2pCOztvQkFDRDtrQ0FDaUIsOERBQUNDO2tDQUFRUCxzQkFBc0JRLE1BQU07Ozs7OztvQkFBVztvQkFBSTs7Ozs7OzswQkFHdEUsOERBQUNDOzBCQUNDLDRFQUFDQzs7c0NBQ0MsOERBQUNDOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2lCOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2lCOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2lCOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2lCOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2lCOzRCQUFHUixPQUFPVDtzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDa0I7MEJBQ0VaLHNCQUFzQmEsR0FBRyxDQUFDLFFBQWlDQyxJQUFNO3dCQUF0QyxFQUFFQyxVQUFTLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFO29CQUN4RCxxQkFDRSw4REFBQ1A7OzBDQUVDLDhEQUFDUTtnQ0FBR2YsT0FBT1A7MENBQ1QsNEVBQUN1QjtvQ0FBRUMsTUFBTTVCLGlFQUFxQkEsQ0FBQ3dCLE1BQU1LLFdBQVc7OENBQzdDTCxNQUFNSyxXQUFXOzs7Ozs7Ozs7OzswQ0FJdEIsOERBQUNIO2dDQUFHZixPQUFPUDswQ0FDVCw0RUFBQ3VCO29DQUFFQyxNQUFNM0IsOERBQWtCQSxDQUFDdUIsTUFBTU0sZUFBZTs7d0NBQzlDTixNQUFNTSxlQUFlLENBQUNDLEtBQUssQ0FBQyxHQUFHO3dDQUFJOzs7Ozs7Ozs7Ozs7MENBSXhDLDhEQUFDTDtnQ0FBR2YsT0FBTztvQ0FBRU4sV0FBVztvQ0FBVUYsU0FBUztnQ0FBVzs7b0NBQ25ENkIsS0FBS0MsWUFBWTtvQ0FBRztvQ0FBSUQsS0FBS0Usa0JBQWtCOzs7Ozs7OzBDQUdsRCw4REFBQ1I7Z0NBQUdmLE9BQU87b0NBQUVOLFdBQVc7b0NBQVVGLFNBQVM7Z0NBQVc7O29DQUNuRGdDO29DQUFpQjtvQ0FDakJDLGlCQUNDQyxXQUFXQyxFQUFFLENBQUNGLGdDQUNaLDhEQUFDRzt3Q0FBSzVCLE9BQU87NENBQUU2QixPQUFPO3dDQUFROzs0Q0FBRzs0Q0FDNUIsSUFBd0IsT0FBckJDOzRDQUF1Qjs7Ozs7OzZEQUcvQiw4REFBQ0Y7d0NBQUs1QixPQUFPOzRDQUFFNkIsT0FBTzt3Q0FBTTs7NENBQUc7NENBQzFCLEdBQXVCLE9BQXJCQzs0Q0FBdUI7Ozs7Ozs0Q0FFL0IsaUJBRUQsOERBQUNGO3dDQUFLNUIsT0FBTzs0Q0FBRTZCLE9BQU87d0NBQVE7OzRDQUFHOzRDQUM1QixJQUFtQixPQUFoQkw7NENBQWtCOzs7Ozs7NENBRTNCOzs7Ozs7OzBDQUdILDhEQUFDVDtnQ0FBR2YsT0FBTztvQ0FBRU4sV0FBVztvQ0FBVUYsU0FBUztnQ0FBVzswQ0FDbkR1Qzs7Ozs7OzBDQUdILDhEQUFDaEI7Z0NBQUdmLE9BQU87b0NBQUVOLFdBQVc7b0NBQVVGLFNBQVM7Z0NBQVc7MENBQ25Ed0M7Ozs7Ozs7Ozs7OztnQkFJVDs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztHQTdFZXJDOztRQUdnQkc7OztLQUhoQkg7QUErRWhCLFNBQVNHLGlDQUFpQ0YsT0FBc0IsRUFBRTs7SUFDaEUsTUFBTSxDQUFDQyx1QkFBdUJvQyx5QkFBeUIsR0FBRy9DLCtDQUFRQSxDQUVoRSxFQUFFO0lBRUosTUFBTWdELGNBQWM5Qyx5RUFBaUJBO0lBRXJDRCxvR0FBcUNBLENBQUMsT0FBTzJCLFVBQVVxQixTQUFTdEIsUUFBVTtRQUN4RSxJQUFJLENBQUNxQixhQUFhO1lBQ2hCO1FBQ0YsQ0FBQztRQUVELE1BQU1SLGNBQWEsTUFBTVEsWUFBWUUsTUFBTSxDQUFDeEM7UUFDNUMsTUFBTXlDLGNBQWMsTUFBTUgsWUFBWUksZUFBZTtRQUNyRCxNQUFNQyxRQUFRLE1BQU0xQixNQUFNMkIsUUFBUTtRQUNsQyxNQUFNNUIsWUFBWTJCLE1BQU0zQixTQUFTO1FBQ2pDLE1BQU1TLFFBQU8sSUFBSW9CLEtBQUtGLE1BQU0zQixTQUFTLEdBQUc7UUFDeEMsTUFBTThCLFlBQVksQ0FBQ3pELGlFQUFXQSxDQUFDeUMsZUFBYyxDQUFDekMsaUVBQVdBLENBQUNvRDtRQUMxRCxNQUFNTSxnQkFBZ0IsQ0FBQzFELGlFQUFXQSxDQUFDa0QsV0FBV087UUFDOUMsTUFBTUUsdUJBQXlDO1lBQzdDOUI7WUFDQXlCO1lBQ0EzQjtZQUNBdUI7WUFDQU87WUFDQUM7WUFDQTlCO1FBQ0Y7UUFFQW9CLHlCQUF5QixDQUFDWSxZQUFjO21CQUNuQ0E7Z0JBQ0hEO2FBQ0Q7SUFDSDtJQUNBLE9BQU8vQztBQUNUO0lBbkNTQzs7UUFLYVYscUVBQWlCQTtRQUVyQ0QsZ0dBQXFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4P2EzMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgRXZlbnQgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9hYnN0cmFjdC1wcm92aWRlclwiO1xuaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMgfSBmcm9tIFwiLi4vY29udHJhY3RzL2JvcnJvd2VyT3BlcmF0aW9uc1wiO1xuaW1wb3J0IHsgdXNlTGlxdWl0eVN0YWtpbmcgfSBmcm9tIFwiLi4vY29udHJhY3RzL2xxdHlTdGFraW5nXCI7XG5pbXBvcnQgeyBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUm93IH0gZnJvbSBcIi4vTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVJvd1wiO1xuaW1wb3J0IHsgbWFrZUV0aGVyc2NhbkJsb2NrVXJsLCBtYWtlRXRoZXJzY2FuVHhVcmwgfSBmcm9tIFwiLi4vLi4vZXRoZXJzY2FuXCI7XG5cbmludGVyZmFjZSBCb3Jyb3dpbmdGZWVJbmZvIHtcbiAgYm9ycm93ZXI6IGAweCR7c3RyaW5nfWA7XG4gIC8qKlxuICAgKiBUaGUgZmVlIHRoZSBib3Jyb3dlciBwYWlkXG4gICAqL1xuICBsdXNkRmVlOiBCaWdOdW1iZXI7XG4gIC8qKlxuICAgKiBQb29sIHNoYXJlIGF0IHRoZSB0aW1lIHRoZSBMVVNEQm9ycm93aW5nRmVlUGFpZCBldmVudCB3YXMgZW1pdHRlZFxuICAgKi9cbiAgcG9vbFNoYXJlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBQb3J0aW9uIG9mIHRoZSBsdXNkIGZlZSB0aGF0IHdhcyBlYXJuZWRcbiAgICovXG4gIGVhcm5lZFBvcnRpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVW5peCB0aW1lc3RhbXAgaW4gc2Vjb25kcyB3aGVuIHRoZSBldmVudCB0b29rIHBsYWNlXG4gICAqL1xuICB0aW1lc3RhbXA6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50IGl0c2VsZlxuICAgKi9cbiAgZXZlbnQ6IEV2ZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgYmxvY2sgdGhlIGV2ZW50IHRvb2sgcGxhY2UgaW5cbiAgICovXG4gIGJsb2NrOiBCbG9jaztcbn1cbmludGVyZmFjZSBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMge1xuICBhY2NvdW50OiBgMHgke3N0cmluZ31gO1xufVxuXG5jb25zdCB0aFN0eWxlID0ge1xuICBwYWRkaW5nOiBcIjVweCAyMHB4XCIsXG59O1xuY29uc3QgdGRTdHlsZTogQ1NTUHJvcGVydGllcyA9IHsgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfTtcbmV4cG9ydCBmdW5jdGlvbiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlKHtcbiAgYWNjb3VudCxcbn06IExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVQcm9wcykge1xuICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mb3MgPSB1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyhhY2NvdW50KTtcbiAgcmV0dXJuIChcbiAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6IFwiNzUlXCIgfX0+XG4gICAgICA8Y2FwdGlvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBUaGVyZSBoYXZlIGJlZW4gPHN0cm9uZz57Ym9ycm93aW5nRmVlUGFpZEluZm9zLmxlbmd0aH08L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50cyBzaW5jZSB0aGlzIHBhZ2UgbG9hZGVkLlxuICAgICAgPC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5CbG9jazwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5UeDwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5EYXRlPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkJvcnJvd2VyPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkZlZSBhbW91bnQgcGFpZCAoTFVTRCk8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+UG9ydGlvbiBlYXJuZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2JvcnJvd2luZ0ZlZVBhaWRJbmZvcy5tYXAoKHsgdGltZXN0YW1wLCBldmVudCwgYm9ycm93ZXIgfSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIHsvKiBCbG9jayBOdW1iZXIgKi99XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bWFrZUV0aGVyc2NhbkJsb2NrVXJsKGV2ZW50LmJsb2NrTnVtYmVyKX0+XG4gICAgICAgICAgICAgICAgICB7ZXZlbnQuYmxvY2tOdW1iZXJ9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICB7LyogVHggSGFzaCAqL31cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXttYWtlRXRoZXJzY2FuVHhVcmwoZXZlbnQudHJhbnNhY3Rpb25IYXNoKX0+XG4gICAgICAgICAgICAgICAgICB7ZXZlbnQudHJhbnNhY3Rpb25IYXNoLnNsaWNlKDAsIDE2KX0uLi5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIHsvKiBEYXRlICovfVxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAge2RhdGUudG9EYXRlU3RyaW5nKCl9IEAge2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIHsvKiBTdGFrZWQgYW1vdW50IChMUVRZKSAqL31cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH19PlxuICAgICAgICAgICAgICAgIHtzdGFrZWRMUVRZTGFiZWx9e1wiIFwifVxuICAgICAgICAgICAgICAgIHtwcmV2U3Rha2VkTFFUWSA/IChcbiAgICAgICAgICAgICAgICAgIHN0YWtlZExRVFkuZ3QocHJldlN0YWtlZExRVFkpID8gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICh7YCske3N0YWtlZExRVFlEZWx0YUxhYmVsfWB9KVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAoe2Ake3N0YWtlZExRVFlEZWx0YUxhYmVsfWB9KVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICh7YCske3N0YWtlZExRVFlMYWJlbH1gfSlcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICB7LyogVG90YWwgTFFUWSBzdGFrZWQgaW4gcG9vbCAqL31cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH19PlxuICAgICAgICAgICAgICAgIHt0b3RhbExRVFlTdGFrZWRMYWJlbH1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgey8qIEhpc3RvcmljYWwgcG9vbCBzaGFyZSAqL31cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH19PlxuICAgICAgICAgICAgICAgIHtwb29sU2hhcmVQZXJjZW50TGFiZWx9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyhhY2NvdW50OiBgMHgke3N0cmluZ31gKSB7XG4gIGNvbnN0IFtib3Jyb3dpbmdGZWVQYWlkSW5mb3MsIHNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvc10gPSB1c2VTdGF0ZTxcbiAgICBCb3Jyb3dpbmdGZWVJbmZvW11cbiAgPihbXSk7XG5cbiAgY29uc3QgbHF0eVN0YWtpbmcgPSB1c2VMaXF1aXR5U3Rha2luZygpO1xuXG4gIHVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMoYXN5bmMgKGJvcnJvd2VyLCBsdXNkRmVlLCBldmVudCkgPT4ge1xuICAgIGlmICghbHF0eVN0YWtpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFrZWRMUVRZID0gYXdhaXQgbHF0eVN0YWtpbmcuc3Rha2VzKGFjY291bnQpO1xuICAgIGNvbnN0IHRvdGFsU3Rha2VkID0gYXdhaXQgbHF0eVN0YWtpbmcudG90YWxMUVRZU3Rha2VkKCk7XG4gICAgY29uc3QgYmxvY2sgPSBhd2FpdCBldmVudC5nZXRCbG9jaygpO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYmxvY2sudGltZXN0YW1wICogMTAwMCk7XG4gICAgY29uc3QgcG9vbFNoYXJlID0gK2Zvcm1hdEV0aGVyKHN0YWtlZExRVFkpIC8gK2Zvcm1hdEV0aGVyKHRvdGFsU3Rha2VkKTtcbiAgICBjb25zdCBlYXJuZWRQb3J0aW9uID0gK2Zvcm1hdEV0aGVyKGx1c2RGZWUpICogcG9vbFNoYXJlO1xuICAgIGNvbnN0IGJvcnJvd2luZ0ZlZVBhaWRJbmZvOiBCb3Jyb3dpbmdGZWVJbmZvID0ge1xuICAgICAgYm9ycm93ZXIsXG4gICAgICBibG9jayxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIGx1c2RGZWUsXG4gICAgICBwb29sU2hhcmUsXG4gICAgICBlYXJuZWRQb3J0aW9uLFxuICAgICAgZXZlbnQsXG4gICAgfTtcblxuICAgIHNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvcygocHJldlN0YXRlKSA9PiBbXG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBib3Jyb3dpbmdGZWVQYWlkSW5mbyxcbiAgICBdKTtcbiAgfSk7XG4gIHJldHVybiBib3Jyb3dpbmdGZWVQYWlkSW5mb3M7XG59XG4iXSwibmFtZXMiOlsiZm9ybWF0RXRoZXIiLCJ1c2VTdGF0ZSIsInVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMiLCJ1c2VMaXF1aXR5U3Rha2luZyIsIm1ha2VFdGhlcnNjYW5CbG9ja1VybCIsIm1ha2VFdGhlcnNjYW5UeFVybCIsInRoU3R5bGUiLCJwYWRkaW5nIiwidGRTdHlsZSIsInRleHRBbGlnbiIsIkxVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUiLCJhY2NvdW50IiwiYm9ycm93aW5nRmVlUGFpZEluZm9zIiwidXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJ0YWJsZSIsInN0eWxlIiwid2lkdGgiLCJjYXB0aW9uIiwicGFkZGluZ0JvdHRvbSIsInN0cm9uZyIsImxlbmd0aCIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiaSIsInRpbWVzdGFtcCIsImV2ZW50IiwiYm9ycm93ZXIiLCJ0ZCIsImEiLCJocmVmIiwiYmxvY2tOdW1iZXIiLCJ0cmFuc2FjdGlvbkhhc2giLCJzbGljZSIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJzdGFrZWRMUVRZTGFiZWwiLCJwcmV2U3Rha2VkTFFUWSIsInN0YWtlZExRVFkiLCJndCIsInNwYW4iLCJjb2xvciIsInN0YWtlZExRVFlEZWx0YUxhYmVsIiwidG90YWxMUVRZU3Rha2VkTGFiZWwiLCJwb29sU2hhcmVQZXJjZW50TGFiZWwiLCJzZXRCb3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJscXR5U3Rha2luZyIsImx1c2RGZWUiLCJzdGFrZXMiLCJ0b3RhbFN0YWtlZCIsInRvdGFsTFFUWVN0YWtlZCIsImJsb2NrIiwiZ2V0QmxvY2siLCJEYXRlIiwicG9vbFNoYXJlIiwiZWFybmVkUG9ydGlvbiIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvIiwicHJldlN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});