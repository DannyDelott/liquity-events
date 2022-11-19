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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _base_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/format */ \"./src/base/format.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nconst tdStyle = {\n    textAlign: \"center\",\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account);\n    const borrowingFeePaidInfosWithNonZeroEarnings = borrowingFeePaidInfos.filter((param)=>{\n        let { earnedPortion  } = param;\n        return earnedPortion > 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"There have been a total of\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: borrowingFeePaidInfos.length\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            \" LUSDBorrowingFeePaid events since this page loaded.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Of this total, there are\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: borrowingFeePaidInfosWithNonZeroEarnings.length\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            \"events with non-zero earnings.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Pool share\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfos.filter((param)=>{\n                    let { earnedPortion  } = param;\n                    return earnedPortion > 0;\n                }).map((param)=>{\n                    let { poolShare , lusdFee , date , event , borrower , earnedPortion  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanBlockUrl)(event.blockNumber),\n                                    children: event.blockNumber\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanTxUrl)(event.transactionHash),\n                                    children: [\n                                        event.transactionHash.slice(0, 16),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: [\n                                    date.toDateString(),\n                                    \" @ \",\n                                    date.toLocaleTimeString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanAddressUrl)(borrower)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_base_format__WEBPACK_IMPORTED_MODULE_5__.formatLUSDLabel)(lusdFee)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_base_format__WEBPACK_IMPORTED_MODULE_5__.formatPoolShare)(poolShare)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: earnedPortion\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, event.transactionHash, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        if (!lqtyStaking) {\n            return;\n        }\n        const stakedLQTY = await lqtyStaking.stakes(account);\n        const totalStaked = await lqtyStaking.totalLQTYStaked();\n        const block = await event.getBlock();\n        const timestamp = block.timestamp;\n        const date = new Date(block.timestamp * 1000);\n        const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(totalStaked);\n        const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(lusdFee) * poolShare;\n        const borrowingFeePaidInfo = {\n            borrower,\n            block,\n            timestamp,\n            date,\n            lusdFee,\n            poolShare,\n            earnedPortion,\n            event\n        };\n        setBorrowingFeePaidInfos((prevState)=>[\n                ...prevState,\n                borrowingFeePaidInfo\n            ]);\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFHSDtBQUN3QztBQUMzQjtBQUtwQztBQUM0QztBQXlDckUsTUFBTVMsVUFBVTtJQUNkQyxTQUFTO0FBQ1g7QUFDQSxNQUFNQyxVQUF5QjtJQUFFQyxXQUFXO0lBQVVGLFNBQVM7QUFBVztBQUNuRSxTQUFTRywwQkFBMEIsS0FFVCxFQUFFO1FBRk8sRUFDeENDLFFBQU8sRUFDd0IsR0FGUzs7SUFHeEMsTUFBTUMsd0JBQXdCQyxpQ0FBaUNGO0lBQy9ELE1BQU1HLDJDQUEyQ0Ysc0JBQXNCRyxNQUFNLENBQzNFLFNBQXVCQztZQUF0QixFQUFFQSxjQUFhLEVBQUU7ZUFBS0EsZ0JBQWdCO0lBQUE7SUFHekMscUJBQ0UsOERBQUNDO1FBQU1DLE9BQU87WUFBRUMsT0FBTztRQUFNOzswQkFDM0IsOERBQUNDO2dCQUNDRixPQUFPO29CQUNMRyxlQUFlO2dCQUNqQjs7a0NBRUEsOERBQUNDOzs0QkFBRTs0QkFDMEI7MENBQzNCLDhEQUFDQzswQ0FBUVgsc0JBQXNCWSxNQUFNOzs7Ozs7NEJBQVU7Ozs7Ozs7a0NBR2pELDhEQUFDRjs7NEJBQUU7NEJBQ3dCOzBDQUN6Qiw4REFBQ0M7MENBQVFULHlDQUF5Q1UsTUFBTTs7Ozs7OzRCQUFXOzRCQUFJOzs7Ozs7Ozs7Ozs7OzBCQUkzRSw4REFBQ0M7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNzQjswQkFDRWhCLHNCQUNFRyxNQUFNLENBQUMsU0FBdUJDO3dCQUF0QixFQUFFQSxjQUFhLEVBQUU7MkJBQUtBLGdCQUFnQjtnQkFBQSxHQUM5Q2EsR0FBRyxDQUNGLFNBQWtFO3dCQUFqRSxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRWxCLGNBQWEsRUFBRTtvQkFDM0QscUJBQ0UsOERBQUNVOzswQ0FFQyw4REFBQ1M7Z0NBQUdqQixPQUFPVjswQ0FDVCw0RUFBQzRCO29DQUFFQyxNQUFNbkMsaUVBQXFCQSxDQUFDK0IsTUFBTUssV0FBVzs4Q0FDN0NMLE1BQU1LLFdBQVc7Ozs7Ozs7Ozs7OzBDQUt0Qiw4REFBQ0g7Z0NBQUdqQixPQUFPVjswQ0FDVCw0RUFBQzRCO29DQUFFQyxNQUFNbEMsOERBQWtCQSxDQUFDOEIsTUFBTU0sZUFBZTs7d0NBQzlDTixNQUFNTSxlQUFlLENBQUNDLEtBQUssQ0FBQyxHQUFHO3dDQUFJOzs7Ozs7Ozs7Ozs7MENBS3hDLDhEQUFDTDtnQ0FBR2pCLE9BQU9WOztvQ0FDUndCLEtBQUtTLFlBQVk7b0NBQUc7b0NBQUlULEtBQUtVLGtCQUFrQjs7Ozs7OzswQ0FJbEQsOERBQUNQO2dDQUFHakIsT0FBT1Y7MENBQVVQLG1FQUF1QkEsQ0FBQ2lDOzs7Ozs7MENBRzdDLDhEQUFDQztnQ0FBR2pCLE9BQU9WOzBDQUFVSiw2REFBZUEsQ0FBQzJCOzs7Ozs7MENBR3JDLDhEQUFDSTtnQ0FBR2pCLE9BQU9WOzBDQUFVSCw2REFBZUEsQ0FBQ3lCOzs7Ozs7MENBR3JDLDhEQUFDSztnQ0FBR2pCLE9BQU9WOzBDQUFVUTs7Ozs7Ozt1QkE5QmRpQixNQUFNTSxlQUFlOzs7OztnQkFpQ2xDOzs7Ozs7Ozs7Ozs7QUFLWixDQUFDO0dBakZlN0I7O1FBR2dCRzs7O0tBSGhCSDtBQW1GaEIsU0FBU0csaUNBQWlDRixPQUFzQixFQUFFOztJQUNoRSxNQUFNLENBQUNDLHVCQUF1QitCLHlCQUF5QixHQUFHN0MsK0NBQVFBLENBRWhFLEVBQUU7SUFFSixNQUFNOEMsY0FBYzVDLHlFQUFpQkE7SUFFckNELG9HQUFxQ0EsQ0FBQyxPQUFPbUMsVUFBVUgsU0FBU0UsUUFBVTtRQUN4RSxJQUFJLENBQUNXLGFBQWE7WUFDaEI7UUFDRixDQUFDO1FBRUQsTUFBTUMsYUFBYSxNQUFNRCxZQUFZRSxNQUFNLENBQUNuQztRQUM1QyxNQUFNb0MsY0FBYyxNQUFNSCxZQUFZSSxlQUFlO1FBQ3JELE1BQU1DLFFBQVEsTUFBTWhCLE1BQU1pQixRQUFRO1FBQ2xDLE1BQU1DLFlBQVlGLE1BQU1FLFNBQVM7UUFDakMsTUFBTW5CLE9BQU8sSUFBSW9CLEtBQUtILE1BQU1FLFNBQVMsR0FBRztRQUN4QyxNQUFNckIsWUFBWSxDQUFDakMsaUVBQVdBLENBQUNnRCxjQUFjLENBQUNoRCxpRUFBV0EsQ0FBQ2tEO1FBQzFELE1BQU0vQixnQkFBZ0IsQ0FBQ25CLGlFQUFXQSxDQUFDa0MsV0FBV0Q7UUFDOUMsTUFBTXVCLHVCQUF5QztZQUM3Q25CO1lBQ0FlO1lBQ0FFO1lBQ0FuQjtZQUNBRDtZQUNBRDtZQUNBZDtZQUNBaUI7UUFDRjtRQUVBVSx5QkFBeUIsQ0FBQ1csWUFBYzttQkFDbkNBO2dCQUNIRDthQUNEO0lBQ0g7SUFDQSxPQUFPekM7QUFDVDtJQXBDU0M7O1FBS2FiLHFFQUFpQkE7UUFFckNELGdHQUFxQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpcXVpdHkvTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlLnRzeD9hMzI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCI7XG5pbXBvcnQgeyBCaWdOdW1iZXIsIEV2ZW50IH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgQmxvY2sgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYWJzdHJhY3QtcHJvdmlkZXJcIjtcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9ib3Jyb3dlck9wZXJhdGlvbnNcIjtcbmltcG9ydCB7IHVzZUxpcXVpdHlTdGFraW5nIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9scXR5U3Rha2luZ1wiO1xuaW1wb3J0IHtcbiAgbWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwsXG4gIG1ha2VFdGhlcnNjYW5CbG9ja1VybCxcbiAgbWFrZUV0aGVyc2NhblR4VXJsLFxufSBmcm9tIFwiLi4vLi4vZXRoZXJzY2FuXCI7XG5pbXBvcnQgeyBmb3JtYXRMVVNETGFiZWwsIGZvcm1hdFBvb2xTaGFyZSB9IGZyb20gXCIuLi8uLi9iYXNlL2Zvcm1hdFwiO1xuXG5pbnRlcmZhY2UgQm9ycm93aW5nRmVlSW5mbyB7XG4gIGJvcnJvd2VyOiBgMHgke3N0cmluZ31gO1xuICAvKipcbiAgICogVGhlIGZlZSB0aGUgYm9ycm93ZXIgcGFpZFxuICAgKi9cbiAgbHVzZEZlZTogQmlnTnVtYmVyO1xuICAvKipcbiAgICogUG9vbCBzaGFyZSBhdCB0aGUgdGltZSB0aGUgTFVTREJvcnJvd2luZ0ZlZVBhaWQgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHBvb2xTaGFyZTogbnVtYmVyO1xuICAvKipcbiAgICogUG9ydGlvbiBvZiB0aGUgbHVzZCBmZWUgdGhhdCB3YXMgZWFybmVkXG4gICAqL1xuICBlYXJuZWRQb3J0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVuaXggdGltZXN0YW1wIGluIHNlY29uZHMgd2hlbiB0aGUgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEYXRlIG9iamVjdCB3aGVuIHRoZSBldmVudCB3YXMgZW1pdHRlZFxuICAgKi9cbiAgZGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50IGl0c2VsZlxuICAgKi9cbiAgZXZlbnQ6IEV2ZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgYmxvY2sgdGhlIGV2ZW50IHRvb2sgcGxhY2UgaW5cbiAgICovXG4gIGJsb2NrOiBCbG9jaztcbn1cbmludGVyZmFjZSBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMge1xuICBhY2NvdW50OiBgMHgke3N0cmluZ31gO1xufVxuXG5jb25zdCB0aFN0eWxlID0ge1xuICBwYWRkaW5nOiBcIjVweCAyMHB4XCIsXG59O1xuY29uc3QgdGRTdHlsZTogQ1NTUHJvcGVydGllcyA9IHsgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfTtcbmV4cG9ydCBmdW5jdGlvbiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlKHtcbiAgYWNjb3VudCxcbn06IExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVQcm9wcykge1xuICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mb3MgPSB1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyhhY2NvdW50KTtcbiAgY29uc3QgYm9ycm93aW5nRmVlUGFpZEluZm9zV2l0aE5vblplcm9FYXJuaW5ncyA9IGJvcnJvd2luZ0ZlZVBhaWRJbmZvcy5maWx0ZXIoXG4gICAgKHsgZWFybmVkUG9ydGlvbiB9KSA9PiBlYXJuZWRQb3J0aW9uID4gMFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjc1JVwiIH19PlxuICAgICAgPGNhcHRpb25cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAxMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlcmUgaGF2ZSBiZWVuIGEgdG90YWwgb2Z7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Ym9ycm93aW5nRmVlUGFpZEluZm9zLmxlbmd0aH08L3N0cm9uZz4gTFVTREJvcnJvd2luZ0ZlZVBhaWRcbiAgICAgICAgICBldmVudHMgc2luY2UgdGhpcyBwYWdlIGxvYWRlZC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBPZiB0aGlzIHRvdGFsLCB0aGVyZSBhcmV7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Ym9ycm93aW5nRmVlUGFpZEluZm9zV2l0aE5vblplcm9FYXJuaW5ncy5sZW5ndGh9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgIGV2ZW50cyB3aXRoIG5vbi16ZXJvIGVhcm5pbmdzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2NhcHRpb24+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkJsb2NrPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PlR4PC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkRhdGU8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+Qm9ycm93ZXI8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+RmVlIGFtb3VudCBwYWlkIChMVVNEKTwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5Qb29sIHNoYXJlPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PlBvcnRpb24gZWFybmVkPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtib3Jyb3dpbmdGZWVQYWlkSW5mb3NcbiAgICAgICAgICAuZmlsdGVyKCh7IGVhcm5lZFBvcnRpb24gfSkgPT4gZWFybmVkUG9ydGlvbiA+IDApXG4gICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICh7IHBvb2xTaGFyZSwgbHVzZEZlZSwgZGF0ZSwgZXZlbnQsIGJvcnJvd2VyLCBlYXJuZWRQb3J0aW9uIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtldmVudC50cmFuc2FjdGlvbkhhc2h9PlxuICAgICAgICAgICAgICAgICAgey8qIEJsb2NrIE51bWJlciAqL31cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5CbG9ja1VybChldmVudC5ibG9ja051bWJlcil9PlxuICAgICAgICAgICAgICAgICAgICAgIHtldmVudC5ibG9ja051bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgey8qIFR4IEhhc2ggKi99XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXttYWtlRXRoZXJzY2FuVHhVcmwoZXZlbnQudHJhbnNhY3Rpb25IYXNoKX0+XG4gICAgICAgICAgICAgICAgICAgICAge2V2ZW50LnRyYW5zYWN0aW9uSGFzaC5zbGljZSgwLCAxNil9Li4uXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBEYXRlICovfVxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAge2RhdGUudG9EYXRlU3RyaW5nKCl9IEAge2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICB7LyogQm9ycm93ZXIgKi99XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PnttYWtlRXRoZXJzY2FuQWRkcmVzc1VybChib3Jyb3dlcil9PC90ZD5cblxuICAgICAgICAgICAgICAgICAgey8qIEZlZSBhbW91bnQgcGFpZCAoTFVTRCkqL31cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+e2Zvcm1hdExVU0RMYWJlbChsdXNkRmVlKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgICB7LyogUG9vbCBzaGFyZSAqL31cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+e2Zvcm1hdFBvb2xTaGFyZShwb29sU2hhcmUpfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBQb3J0aW9uIGVhcm5lZCAqL31cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+e2Vhcm5lZFBvcnRpb259PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVzZVJlYWxUaW1lQm9ycm93aW5nRmVlUGFpZEluZm9zKGFjY291bnQ6IGAweCR7c3RyaW5nfWApIHtcbiAgY29uc3QgW2JvcnJvd2luZ0ZlZVBhaWRJbmZvcywgc2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zXSA9IHVzZVN0YXRlPFxuICAgIEJvcnJvd2luZ0ZlZUluZm9bXVxuICA+KFtdKTtcblxuICBjb25zdCBscXR5U3Rha2luZyA9IHVzZUxpcXVpdHlTdGFraW5nKCk7XG5cbiAgdXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyhhc3luYyAoYm9ycm93ZXIsIGx1c2RGZWUsIGV2ZW50KSA9PiB7XG4gICAgaWYgKCFscXR5U3Rha2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YWtlZExRVFkgPSBhd2FpdCBscXR5U3Rha2luZy5zdGFrZXMoYWNjb3VudCk7XG4gICAgY29uc3QgdG90YWxTdGFrZWQgPSBhd2FpdCBscXR5U3Rha2luZy50b3RhbExRVFlTdGFrZWQoKTtcbiAgICBjb25zdCBibG9jayA9IGF3YWl0IGV2ZW50LmdldEJsb2NrKCk7XG4gICAgY29uc3QgdGltZXN0YW1wID0gYmxvY2sudGltZXN0YW1wO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShibG9jay50aW1lc3RhbXAgKiAxMDAwKTtcbiAgICBjb25zdCBwb29sU2hhcmUgPSArZm9ybWF0RXRoZXIoc3Rha2VkTFFUWSkgLyArZm9ybWF0RXRoZXIodG90YWxTdGFrZWQpO1xuICAgIGNvbnN0IGVhcm5lZFBvcnRpb24gPSArZm9ybWF0RXRoZXIobHVzZEZlZSkgKiBwb29sU2hhcmU7XG4gICAgY29uc3QgYm9ycm93aW5nRmVlUGFpZEluZm86IEJvcnJvd2luZ0ZlZUluZm8gPSB7XG4gICAgICBib3Jyb3dlcixcbiAgICAgIGJsb2NrLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgZGF0ZSxcbiAgICAgIGx1c2RGZWUsXG4gICAgICBwb29sU2hhcmUsXG4gICAgICBlYXJuZWRQb3J0aW9uLFxuICAgICAgZXZlbnQsXG4gICAgfTtcblxuICAgIHNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvcygocHJldlN0YXRlKSA9PiBbXG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBib3Jyb3dpbmdGZWVQYWlkSW5mbyxcbiAgICBdKTtcbiAgfSk7XG4gIHJldHVybiBib3Jyb3dpbmdGZWVQYWlkSW5mb3M7XG59XG4iXSwibmFtZXMiOlsiZm9ybWF0RXRoZXIiLCJ1c2VTdGF0ZSIsInVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMiLCJ1c2VMaXF1aXR5U3Rha2luZyIsIm1ha2VFdGhlcnNjYW5BZGRyZXNzVXJsIiwibWFrZUV0aGVyc2NhbkJsb2NrVXJsIiwibWFrZUV0aGVyc2NhblR4VXJsIiwiZm9ybWF0TFVTRExhYmVsIiwiZm9ybWF0UG9vbFNoYXJlIiwidGhTdHlsZSIsInBhZGRpbmciLCJ0ZFN0eWxlIiwidGV4dEFsaWduIiwiTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZSIsImFjY291bnQiLCJib3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJ1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvc1dpdGhOb25aZXJvRWFybmluZ3MiLCJmaWx0ZXIiLCJlYXJuZWRQb3J0aW9uIiwidGFibGUiLCJzdHlsZSIsIndpZHRoIiwiY2FwdGlvbiIsInBhZGRpbmdCb3R0b20iLCJwIiwic3Ryb25nIiwibGVuZ3RoIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJwb29sU2hhcmUiLCJsdXNkRmVlIiwiZGF0ZSIsImV2ZW50IiwiYm9ycm93ZXIiLCJ0ZCIsImEiLCJocmVmIiwiYmxvY2tOdW1iZXIiLCJ0cmFuc2FjdGlvbkhhc2giLCJzbGljZSIsInRvRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsInNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsImxxdHlTdGFraW5nIiwic3Rha2VkTFFUWSIsInN0YWtlcyIsInRvdGFsU3Rha2VkIiwidG90YWxMUVRZU3Rha2VkIiwiYmxvY2siLCJnZXRCbG9jayIsInRpbWVzdGFtcCIsIkRhdGUiLCJib3Jyb3dpbmdGZWVQYWlkSW5mbyIsInByZXZTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});