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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _base_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/format */ \"./src/base/format.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nconst tdStyle = {\n    textAlign: \"center\",\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account , stakeChangedEvents , onLUSDBorrowingFeePaid  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account, onLUSDBorrowingFeePaid);\n    const borrowingFeePaidInfosWithNonZeroEarnings = borrowingFeePaidInfos.filter((param)=>{\n        let { earnedPortion  } = param;\n        return earnedPortion > 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"There has been a total of\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: borrowingFeePaidInfos.length\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            \" LUSDBorrowingFeePaid events since this page loaded.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Of this total, there are\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: borrowingFeePaidInfosWithNonZeroEarnings.length\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            \"events with non-zero earnings.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfosWithNonZeroEarnings.map((param)=>{\n                    let { lusdFee , date , event , borrower , earnedPortion  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanBlockUrl)(event.blockNumber),\n                                    children: event.blockNumber\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanTxUrl)(event.transactionHash),\n                                    children: [\n                                        event.transactionHash.slice(0, 16),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: [\n                                    date.toDateString(),\n                                    \" @ \",\n                                    date.toLocaleTimeString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanAddressUrl)(borrower),\n                                    children: borrower\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_base_format__WEBPACK_IMPORTED_MODULE_5__.formatLUSDLabel)(lusdFee)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: earnedPortion.toFixed(6)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, event.transactionHash, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account, onLUSDBorrowingFeePaid) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        if (!lqtyStaking) {\n            return;\n        }\n        const stakedLQTY = await lqtyStaking.stakes(account);\n        const totalStaked = await lqtyStaking.totalLQTYStaked();\n        const block = await event.getBlock();\n        const timestamp = block.timestamp;\n        const date = new Date(block.timestamp * 1000);\n        const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(totalStaked);\n        const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(lusdFee) * poolShare;\n        const borrowingFeePaidInfo = {\n            borrower,\n            block,\n            timestamp,\n            date,\n            lusdFee,\n            poolShare,\n            earnedPortion,\n            event\n        };\n        setBorrowingFeePaidInfos((prevState)=>[\n                ...prevState,\n                borrowingFeePaidInfo\n            ]);\n        onLUSDBorrowingFeePaid(borrowingFeePaidInfo);\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFHSDtBQUN3QztBQUMzQjtBQUtwQztBQUM0QztBQTJDckUsTUFBTVEsVUFBVTtJQUNkQyxTQUFTO0FBQ1g7QUFDQSxNQUFNQyxVQUF5QjtJQUFFQyxXQUFXO0lBQVVGLFNBQVM7QUFBVztBQUNuRSxTQUFTRywwQkFBMEIsS0FJVCxFQUFFO1FBSk8sRUFDeENDLFFBQU8sRUFDUEMsbUJBQWtCLEVBQ2xCQyx1QkFBc0IsRUFDUyxHQUpTOztJQUt4QyxNQUFNQyx3QkFBd0JDLGlDQUM1QkosU0FDQUU7SUFFRixNQUFNRywyQ0FBMkNGLHNCQUFzQkcsTUFBTSxDQUMzRSxTQUF1QkM7WUFBdEIsRUFBRUEsY0FBYSxFQUFFO2VBQUtBLGdCQUFnQjtJQUFBO0lBR3pDLHFCQUNFLDhEQUFDQztRQUFNQyxPQUFPO1lBQUVDLE9BQU87UUFBTTs7MEJBQzNCLDhEQUFDQztnQkFDQ0YsT0FBTztvQkFDTEcsZUFBZTtnQkFDakI7O2tDQUVBLDhEQUFDQzs7NEJBQUU7NEJBQ3lCOzBDQUMxQiw4REFBQ0M7MENBQVFYLHNCQUFzQlksTUFBTTs7Ozs7OzRCQUFVOzs7Ozs7O2tDQUdqRCw4REFBQ0Y7OzRCQUFFOzRCQUN3QjswQ0FDekIsOERBQUNDOzBDQUFRVCx5Q0FBeUNVLE1BQU07Ozs7Ozs0QkFBVzs0QkFBSTs7Ozs7Ozs7Ozs7OzswQkFJM0UsOERBQUNDOzBCQUNDLDRFQUFDQzs7c0NBQ0MsOERBQUNDOzRCQUFHVCxPQUFPZDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ3VCOzRCQUFHVCxPQUFPZDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ3VCOzRCQUFHVCxPQUFPZDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ3VCOzRCQUFHVCxPQUFPZDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ3VCOzRCQUFHVCxPQUFPZDtzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ3VCOzRCQUFHVCxPQUFPZDtzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDd0I7MEJBQ0VkLHlDQUF5Q2UsR0FBRyxDQUMzQyxTQUF1RDt3QkFBdEQsRUFBRUMsUUFBTyxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFakIsY0FBYSxFQUFFO29CQUNoRCxxQkFDRSw4REFBQ1U7OzBDQUVDLDhEQUFDUTtnQ0FBR2hCLE9BQU9aOzBDQUNULDRFQUFDNkI7b0NBQ0NDLFFBQU87b0NBQ1BDLE1BQU1wQyxpRUFBcUJBLENBQUMrQixNQUFNTSxXQUFXOzhDQUU1Q04sTUFBTU0sV0FBVzs7Ozs7Ozs7Ozs7MENBS3RCLDhEQUFDSjtnQ0FBR2hCLE9BQU9aOzBDQUNULDRFQUFDNkI7b0NBQ0NDLFFBQU87b0NBQ1BDLE1BQU1uQyw4REFBa0JBLENBQUM4QixNQUFNTyxlQUFlOzt3Q0FFN0NQLE1BQU1PLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDLEdBQUc7d0NBQUk7Ozs7Ozs7Ozs7OzswQ0FLeEMsOERBQUNOO2dDQUFHaEIsT0FBT1o7O29DQUNSeUIsS0FBS1UsWUFBWTtvQ0FBRztvQ0FBSVYsS0FBS1csa0JBQWtCOzs7Ozs7OzBDQUlsRCw4REFBQ1I7Z0NBQUdoQixPQUFPWjswQ0FDVCw0RUFBQzZCO29DQUFFQyxRQUFPO29DQUFTQyxNQUFNckMsbUVBQXVCQSxDQUFDaUM7OENBQzlDQTs7Ozs7Ozs7Ozs7MENBS0wsOERBQUNDO2dDQUFHaEIsT0FBT1o7MENBQVVILDZEQUFlQSxDQUFDMkI7Ozs7OzswQ0FHckMsOERBQUNJO2dDQUFHaEIsT0FBT1o7MENBQVVVLGNBQWMyQixPQUFPLENBQUM7Ozs7Ozs7dUJBckNwQ1gsTUFBTU8sZUFBZTs7Ozs7Z0JBd0NsQzs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQTFGZS9COztRQUtnQks7OztLQUxoQkw7QUE0RmhCLFNBQVNLLGlDQUNQSixPQUFzQixFQUN0QkUsc0JBQW9FLEVBQ3BFOztJQUNBLE1BQU0sQ0FBQ0MsdUJBQXVCZ0MseUJBQXlCLEdBQUcvQywrQ0FBUUEsQ0FFaEUsRUFBRTtJQUVKLE1BQU1nRCxjQUFjOUMseUVBQWlCQTtJQUVyQ0Qsb0dBQXFDQSxDQUFDLE9BQU9tQyxVQUFVSCxTQUFTRSxRQUFVO1FBQ3hFLElBQUksQ0FBQ2EsYUFBYTtZQUNoQjtRQUNGLENBQUM7UUFFRCxNQUFNQyxhQUFhLE1BQU1ELFlBQVlFLE1BQU0sQ0FBQ3RDO1FBQzVDLE1BQU11QyxjQUFjLE1BQU1ILFlBQVlJLGVBQWU7UUFDckQsTUFBTUMsUUFBUSxNQUFNbEIsTUFBTW1CLFFBQVE7UUFDbEMsTUFBTUMsWUFBWUYsTUFBTUUsU0FBUztRQUNqQyxNQUFNckIsT0FBTyxJQUFJc0IsS0FBS0gsTUFBTUUsU0FBUyxHQUFHO1FBQ3hDLE1BQU1FLFlBQVksQ0FBQzFELGlFQUFXQSxDQUFDa0QsY0FBYyxDQUFDbEQsaUVBQVdBLENBQUNvRDtRQUMxRCxNQUFNaEMsZ0JBQWdCLENBQUNwQixpRUFBV0EsQ0FBQ2tDLFdBQVd3QjtRQUM5QyxNQUFNQyx1QkFBeUM7WUFDN0N0QjtZQUNBaUI7WUFDQUU7WUFDQXJCO1lBQ0FEO1lBQ0F3QjtZQUNBdEM7WUFDQWdCO1FBQ0Y7UUFFQVkseUJBQXlCLENBQUNZLFlBQWM7bUJBQ25DQTtnQkFDSEQ7YUFDRDtRQUNENUMsdUJBQXVCNEM7SUFDekI7SUFDQSxPQUFPM0M7QUFDVDtJQXhDU0M7O1FBUWFkLHFFQUFpQkE7UUFFckNELGdHQUFxQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpcXVpdHkvTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlLnRzeD9hMzI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCI7XG5pbXBvcnQgeyBCaWdOdW1iZXIsIEV2ZW50IH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgQmxvY2sgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYWJzdHJhY3QtcHJvdmlkZXJcIjtcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9ib3Jyb3dlck9wZXJhdGlvbnNcIjtcbmltcG9ydCB7IHVzZUxpcXVpdHlTdGFraW5nIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9scXR5U3Rha2luZ1wiO1xuaW1wb3J0IHtcbiAgbWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwsXG4gIG1ha2VFdGhlcnNjYW5CbG9ja1VybCxcbiAgbWFrZUV0aGVyc2NhblR4VXJsLFxufSBmcm9tIFwiLi4vLi4vZXRoZXJzY2FuXCI7XG5pbXBvcnQgeyBmb3JtYXRMVVNETGFiZWwsIGZvcm1hdFBvb2xTaGFyZSB9IGZyb20gXCIuLi8uLi9iYXNlL2Zvcm1hdFwiO1xuXG5pbnRlcmZhY2UgQm9ycm93aW5nRmVlSW5mbyB7XG4gIGJvcnJvd2VyOiBgMHgke3N0cmluZ31gO1xuICAvKipcbiAgICogVGhlIGZlZSB0aGUgYm9ycm93ZXIgcGFpZFxuICAgKi9cbiAgbHVzZEZlZTogQmlnTnVtYmVyO1xuICAvKipcbiAgICogUG9vbCBzaGFyZSBhdCB0aGUgdGltZSB0aGUgTFVTREJvcnJvd2luZ0ZlZVBhaWQgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHBvb2xTaGFyZTogbnVtYmVyO1xuICAvKipcbiAgICogUG9ydGlvbiBvZiB0aGUgbHVzZCBmZWUgdGhhdCB3YXMgZWFybmVkXG4gICAqL1xuICBlYXJuZWRQb3J0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVuaXggdGltZXN0YW1wIGluIHNlY29uZHMgd2hlbiB0aGUgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEYXRlIG9iamVjdCB3aGVuIHRoZSBldmVudCB3YXMgZW1pdHRlZFxuICAgKi9cbiAgZGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50IGl0c2VsZlxuICAgKi9cbiAgZXZlbnQ6IEV2ZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgYmxvY2sgdGhlIGV2ZW50IHRvb2sgcGxhY2UgaW5cbiAgICovXG4gIGJsb2NrOiBCbG9jaztcbn1cbmludGVyZmFjZSBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMge1xuICBhY2NvdW50OiBgMHgke3N0cmluZ31gO1xuICBzdGFrZUNoYW5nZWRFdmVudHM6IEV2ZW50W107XG4gIG9uTFVTREJvcnJvd2luZ0ZlZVBhaWQ6IChib3Jyb3dpbmdGZWVJbmZvOiBCb3Jyb3dpbmdGZWVJbmZvKSA9PiB2b2lkO1xufVxuXG5jb25zdCB0aFN0eWxlID0ge1xuICBwYWRkaW5nOiBcIjVweCAyMHB4XCIsXG59O1xuY29uc3QgdGRTdHlsZTogQ1NTUHJvcGVydGllcyA9IHsgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfTtcbmV4cG9ydCBmdW5jdGlvbiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlKHtcbiAgYWNjb3VudCxcbiAgc3Rha2VDaGFuZ2VkRXZlbnRzLFxuICBvbkxVU0RCb3Jyb3dpbmdGZWVQYWlkLFxufTogTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVByb3BzKSB7XG4gIGNvbnN0IGJvcnJvd2luZ0ZlZVBhaWRJbmZvcyA9IHVzZVJlYWxUaW1lQm9ycm93aW5nRmVlUGFpZEluZm9zKFxuICAgIGFjY291bnQsXG4gICAgb25MVVNEQm9ycm93aW5nRmVlUGFpZFxuICApO1xuICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mb3NXaXRoTm9uWmVyb0Vhcm5pbmdzID0gYm9ycm93aW5nRmVlUGFpZEluZm9zLmZpbHRlcihcbiAgICAoeyBlYXJuZWRQb3J0aW9uIH0pID0+IGVhcm5lZFBvcnRpb24gPiAwXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6IFwiNzUlXCIgfX0+XG4gICAgICA8Y2FwdGlvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBoYXMgYmVlbiBhIHRvdGFsIG9me1wiIFwifVxuICAgICAgICAgIDxzdHJvbmc+e2JvcnJvd2luZ0ZlZVBhaWRJbmZvcy5sZW5ndGh9PC9zdHJvbmc+IExVU0RCb3Jyb3dpbmdGZWVQYWlkXG4gICAgICAgICAgZXZlbnRzIHNpbmNlIHRoaXMgcGFnZSBsb2FkZWQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT2YgdGhpcyB0b3RhbCwgdGhlcmUgYXJle1wiIFwifVxuICAgICAgICAgIDxzdHJvbmc+e2JvcnJvd2luZ0ZlZVBhaWRJbmZvc1dpdGhOb25aZXJvRWFybmluZ3MubGVuZ3RofTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICBldmVudHMgd2l0aCBub24temVybyBlYXJuaW5ncy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5CbG9jazwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5UeDwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5EYXRlPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkJvcnJvd2VyPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkZlZSBhbW91bnQgcGFpZCAoTFVTRCk8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+UG9ydGlvbiBlYXJuZWQgKExVU0QpPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtib3Jyb3dpbmdGZWVQYWlkSW5mb3NXaXRoTm9uWmVyb0Vhcm5pbmdzLm1hcChcbiAgICAgICAgICAoeyBsdXNkRmVlLCBkYXRlLCBldmVudCwgYm9ycm93ZXIsIGVhcm5lZFBvcnRpb24gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17ZXZlbnQudHJhbnNhY3Rpb25IYXNofT5cbiAgICAgICAgICAgICAgICB7LyogQmxvY2sgTnVtYmVyICovfVxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXttYWtlRXRoZXJzY2FuQmxvY2tVcmwoZXZlbnQuYmxvY2tOdW1iZXIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZXZlbnQuYmxvY2tOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBUeCBIYXNoICovfVxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXttYWtlRXRoZXJzY2FuVHhVcmwoZXZlbnQudHJhbnNhY3Rpb25IYXNoKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2V2ZW50LnRyYW5zYWN0aW9uSGFzaC5zbGljZSgwLCAxNil9Li4uXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBEYXRlICovfVxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICB7ZGF0ZS50b0RhdGVTdHJpbmcoKX0gQCB7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgey8qIEJvcnJvd2VyICovfVxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXttYWtlRXRoZXJzY2FuQWRkcmVzc1VybChib3Jyb3dlcil9PlxuICAgICAgICAgICAgICAgICAgICB7Ym9ycm93ZXJ9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBGZWUgYW1vdW50IHBhaWQgKExVU0QpKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT57Zm9ybWF0TFVTRExhYmVsKGx1c2RGZWUpfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICB7LyogUG9ydGlvbiBlYXJuZWQgKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT57ZWFybmVkUG9ydGlvbi50b0ZpeGVkKDYpfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MoXG4gIGFjY291bnQ6IGAweCR7c3RyaW5nfWAsXG4gIG9uTFVTREJvcnJvd2luZ0ZlZVBhaWQ6IChib3Jyb3dpbmdGZWVJbmZvOiBCb3Jyb3dpbmdGZWVJbmZvKSA9PiB2b2lkXG4pIHtcbiAgY29uc3QgW2JvcnJvd2luZ0ZlZVBhaWRJbmZvcywgc2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zXSA9IHVzZVN0YXRlPFxuICAgIEJvcnJvd2luZ0ZlZUluZm9bXVxuICA+KFtdKTtcblxuICBjb25zdCBscXR5U3Rha2luZyA9IHVzZUxpcXVpdHlTdGFraW5nKCk7XG5cbiAgdXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyhhc3luYyAoYm9ycm93ZXIsIGx1c2RGZWUsIGV2ZW50KSA9PiB7XG4gICAgaWYgKCFscXR5U3Rha2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YWtlZExRVFkgPSBhd2FpdCBscXR5U3Rha2luZy5zdGFrZXMoYWNjb3VudCk7XG4gICAgY29uc3QgdG90YWxTdGFrZWQgPSBhd2FpdCBscXR5U3Rha2luZy50b3RhbExRVFlTdGFrZWQoKTtcbiAgICBjb25zdCBibG9jayA9IGF3YWl0IGV2ZW50LmdldEJsb2NrKCk7XG4gICAgY29uc3QgdGltZXN0YW1wID0gYmxvY2sudGltZXN0YW1wO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShibG9jay50aW1lc3RhbXAgKiAxMDAwKTtcbiAgICBjb25zdCBwb29sU2hhcmUgPSArZm9ybWF0RXRoZXIoc3Rha2VkTFFUWSkgLyArZm9ybWF0RXRoZXIodG90YWxTdGFrZWQpO1xuICAgIGNvbnN0IGVhcm5lZFBvcnRpb24gPSArZm9ybWF0RXRoZXIobHVzZEZlZSkgKiBwb29sU2hhcmU7XG4gICAgY29uc3QgYm9ycm93aW5nRmVlUGFpZEluZm86IEJvcnJvd2luZ0ZlZUluZm8gPSB7XG4gICAgICBib3Jyb3dlcixcbiAgICAgIGJsb2NrLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgZGF0ZSxcbiAgICAgIGx1c2RGZWUsXG4gICAgICBwb29sU2hhcmUsXG4gICAgICBlYXJuZWRQb3J0aW9uLFxuICAgICAgZXZlbnQsXG4gICAgfTtcblxuICAgIHNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvcygocHJldlN0YXRlKSA9PiBbXG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBib3Jyb3dpbmdGZWVQYWlkSW5mbyxcbiAgICBdKTtcbiAgICBvbkxVU0RCb3Jyb3dpbmdGZWVQYWlkKGJvcnJvd2luZ0ZlZVBhaWRJbmZvKTtcbiAgfSk7XG4gIHJldHVybiBib3Jyb3dpbmdGZWVQYWlkSW5mb3M7XG59XG4iXSwibmFtZXMiOlsiZm9ybWF0RXRoZXIiLCJ1c2VTdGF0ZSIsInVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMiLCJ1c2VMaXF1aXR5U3Rha2luZyIsIm1ha2VFdGhlcnNjYW5BZGRyZXNzVXJsIiwibWFrZUV0aGVyc2NhbkJsb2NrVXJsIiwibWFrZUV0aGVyc2NhblR4VXJsIiwiZm9ybWF0TFVTRExhYmVsIiwidGhTdHlsZSIsInBhZGRpbmciLCJ0ZFN0eWxlIiwidGV4dEFsaWduIiwiTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZSIsImFjY291bnQiLCJzdGFrZUNoYW5nZWRFdmVudHMiLCJvbkxVU0RCb3Jyb3dpbmdGZWVQYWlkIiwiYm9ycm93aW5nRmVlUGFpZEluZm9zIiwidXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJib3Jyb3dpbmdGZWVQYWlkSW5mb3NXaXRoTm9uWmVyb0Vhcm5pbmdzIiwiZmlsdGVyIiwiZWFybmVkUG9ydGlvbiIsInRhYmxlIiwic3R5bGUiLCJ3aWR0aCIsImNhcHRpb24iLCJwYWRkaW5nQm90dG9tIiwicCIsInN0cm9uZyIsImxlbmd0aCIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwibHVzZEZlZSIsImRhdGUiLCJldmVudCIsImJvcnJvd2VyIiwidGQiLCJhIiwidGFyZ2V0IiwiaHJlZiIsImJsb2NrTnVtYmVyIiwidHJhbnNhY3Rpb25IYXNoIiwic2xpY2UiLCJ0b0RhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJ0b0ZpeGVkIiwic2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zIiwibHF0eVN0YWtpbmciLCJzdGFrZWRMUVRZIiwic3Rha2VzIiwidG90YWxTdGFrZWQiLCJ0b3RhbExRVFlTdGFrZWQiLCJibG9jayIsImdldEJsb2NrIiwidGltZXN0YW1wIiwiRGF0ZSIsInBvb2xTaGFyZSIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvIiwicHJldlN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});