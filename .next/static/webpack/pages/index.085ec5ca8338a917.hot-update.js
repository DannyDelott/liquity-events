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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _base_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/format */ \"./src/base/format.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nconst tdStyle = {\n    textAlign: \"center\",\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account);\n    const borrowingFeePaidInfosWithNonZeroEarnings = borrowingFeePaidInfos.filter((param)=>{\n        let { earnedPortion  } = param;\n        return earnedPortion > 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"There has been a total of\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: borrowingFeePaidInfos.length\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            \" LUSDBorrowingFeePaid events since this page loaded.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Of this total, there are\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: borrowingFeePaidInfosWithNonZeroEarnings.length\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            \"events with non-zero earnings.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfos.map((param)=>{\n                    let { poolShare , lusdFee , date , event , borrower , earnedPortion  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanBlockUrl)(event.blockNumber),\n                                    children: event.blockNumber\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanTxUrl)(event.transactionHash),\n                                    children: [\n                                        event.transactionHash.slice(0, 16),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: [\n                                    date.toDateString(),\n                                    \" @ \",\n                                    date.toLocaleTimeString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanAddressUrl)(borrower),\n                                    children: borrower\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_base_format__WEBPACK_IMPORTED_MODULE_5__.formatLUSDLabel)(lusdFee)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: earnedPortion.toFixed(6)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, event.transactionHash, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        if (!lqtyStaking) {\n            return;\n        }\n        const stakedLQTY = await lqtyStaking.stakes(account);\n        const totalStaked = await lqtyStaking.totalLQTYStaked();\n        const block = await event.getBlock();\n        const timestamp = block.timestamp;\n        const date = new Date(block.timestamp * 1000);\n        const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(totalStaked);\n        const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(lusdFee) * poolShare;\n        const borrowingFeePaidInfo = {\n            borrower,\n            block,\n            timestamp,\n            date,\n            lusdFee,\n            poolShare,\n            earnedPortion,\n            event\n        };\n        setBorrowingFeePaidInfos((prevState)=>[\n                ...prevState,\n                borrowingFeePaidInfo\n            ]);\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFHSDtBQUN3QztBQUMzQjtBQUtwQztBQUM0QztBQXlDckUsTUFBTVEsVUFBVTtJQUNkQyxTQUFTO0FBQ1g7QUFDQSxNQUFNQyxVQUF5QjtJQUFFQyxXQUFXO0lBQVVGLFNBQVM7QUFBVztBQUNuRSxTQUFTRywwQkFBMEIsS0FFVCxFQUFFO1FBRk8sRUFDeENDLFFBQU8sRUFDd0IsR0FGUzs7SUFHeEMsTUFBTUMsd0JBQXdCQyxpQ0FBaUNGO0lBQy9ELE1BQU1HLDJDQUEyQ0Ysc0JBQXNCRyxNQUFNLENBQzNFLFNBQXVCQztZQUF0QixFQUFFQSxjQUFhLEVBQUU7ZUFBS0EsZ0JBQWdCO0lBQUE7SUFHekMscUJBQ0UsOERBQUNDO1FBQU1DLE9BQU87WUFBRUMsT0FBTztRQUFNOzswQkFDM0IsOERBQUNDO2dCQUNDRixPQUFPO29CQUNMRyxlQUFlO2dCQUNqQjs7a0NBRUEsOERBQUNDOzs0QkFBRTs0QkFDeUI7MENBQzFCLDhEQUFDQzswQ0FBUVgsc0JBQXNCWSxNQUFNOzs7Ozs7NEJBQVU7Ozs7Ozs7a0NBR2pELDhEQUFDRjs7NEJBQUU7NEJBQ3dCOzBDQUN6Qiw4REFBQ0M7MENBQVFULHlDQUF5Q1UsTUFBTTs7Ozs7OzRCQUFXOzRCQUFJOzs7Ozs7Ozs7Ozs7OzBCQUkzRSw4REFBQ0M7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDcUI7NEJBQUdULE9BQU9aO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNzQjswQkFDRWhCLHNCQUFzQmlCLEdBQUcsQ0FDeEIsU0FBa0U7d0JBQWpFLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFbEIsY0FBYSxFQUFFO29CQUMzRCxxQkFDRSw4REFBQ1U7OzBDQUVDLDhEQUFDUztnQ0FBR2pCLE9BQU9WOzBDQUNULDRFQUFDNEI7b0NBQUVDLE1BQU1sQyxpRUFBcUJBLENBQUM4QixNQUFNSyxXQUFXOzhDQUM3Q0wsTUFBTUssV0FBVzs7Ozs7Ozs7Ozs7MENBS3RCLDhEQUFDSDtnQ0FBR2pCLE9BQU9WOzBDQUNULDRFQUFDNEI7b0NBQUVDLE1BQU1qQyw4REFBa0JBLENBQUM2QixNQUFNTSxlQUFlOzt3Q0FDOUNOLE1BQU1NLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDLEdBQUc7d0NBQUk7Ozs7Ozs7Ozs7OzswQ0FLeEMsOERBQUNMO2dDQUFHakIsT0FBT1Y7O29DQUNSd0IsS0FBS1MsWUFBWTtvQ0FBRztvQ0FBSVQsS0FBS1Usa0JBQWtCOzs7Ozs7OzBDQUlsRCw4REFBQ1A7Z0NBQUdqQixPQUFPVjswQ0FDVCw0RUFBQzRCO29DQUFFQyxNQUFNbkMsbUVBQXVCQSxDQUFDZ0M7OENBQVlBOzs7Ozs7Ozs7OzswQ0FJL0MsOERBQUNDO2dDQUFHakIsT0FBT1Y7MENBQVVILDZEQUFlQSxDQUFDMEI7Ozs7OzswQ0FHckMsOERBQUNJO2dDQUFHakIsT0FBT1Y7MENBQVVRLGNBQWMyQixPQUFPLENBQUM7Ozs7Ozs7dUJBN0JwQ1YsTUFBTU0sZUFBZTs7Ozs7Z0JBZ0NsQzs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQTdFZTdCOztRQUdnQkc7OztLQUhoQkg7QUErRWhCLFNBQVNHLGlDQUFpQ0YsT0FBc0IsRUFBRTs7SUFDaEUsTUFBTSxDQUFDQyx1QkFBdUJnQyx5QkFBeUIsR0FBRzdDLCtDQUFRQSxDQUVoRSxFQUFFO0lBRUosTUFBTThDLGNBQWM1Qyx5RUFBaUJBO0lBRXJDRCxvR0FBcUNBLENBQUMsT0FBT2tDLFVBQVVILFNBQVNFLFFBQVU7UUFDeEUsSUFBSSxDQUFDWSxhQUFhO1lBQ2hCO1FBQ0YsQ0FBQztRQUVELE1BQU1DLGFBQWEsTUFBTUQsWUFBWUUsTUFBTSxDQUFDcEM7UUFDNUMsTUFBTXFDLGNBQWMsTUFBTUgsWUFBWUksZUFBZTtRQUNyRCxNQUFNQyxRQUFRLE1BQU1qQixNQUFNa0IsUUFBUTtRQUNsQyxNQUFNQyxZQUFZRixNQUFNRSxTQUFTO1FBQ2pDLE1BQU1wQixPQUFPLElBQUlxQixLQUFLSCxNQUFNRSxTQUFTLEdBQUc7UUFDeEMsTUFBTXRCLFlBQVksQ0FBQ2hDLGlFQUFXQSxDQUFDZ0QsY0FBYyxDQUFDaEQsaUVBQVdBLENBQUNrRDtRQUMxRCxNQUFNaEMsZ0JBQWdCLENBQUNsQixpRUFBV0EsQ0FBQ2lDLFdBQVdEO1FBQzlDLE1BQU13Qix1QkFBeUM7WUFDN0NwQjtZQUNBZ0I7WUFDQUU7WUFDQXBCO1lBQ0FEO1lBQ0FEO1lBQ0FkO1lBQ0FpQjtRQUNGO1FBRUFXLHlCQUF5QixDQUFDVyxZQUFjO21CQUNuQ0E7Z0JBQ0hEO2FBQ0Q7SUFDSDtJQUNBLE9BQU8xQztBQUNUO0lBcENTQzs7UUFLYVoscUVBQWlCQTtRQUVyQ0QsZ0dBQXFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4P2EzMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgRXZlbnQgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9hYnN0cmFjdC1wcm92aWRlclwiO1xuaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMgfSBmcm9tIFwiLi4vY29udHJhY3RzL2JvcnJvd2VyT3BlcmF0aW9uc1wiO1xuaW1wb3J0IHsgdXNlTGlxdWl0eVN0YWtpbmcgfSBmcm9tIFwiLi4vY29udHJhY3RzL2xxdHlTdGFraW5nXCI7XG5pbXBvcnQge1xuICBtYWtlRXRoZXJzY2FuQWRkcmVzc1VybCxcbiAgbWFrZUV0aGVyc2NhbkJsb2NrVXJsLFxuICBtYWtlRXRoZXJzY2FuVHhVcmwsXG59IGZyb20gXCIuLi8uLi9ldGhlcnNjYW5cIjtcbmltcG9ydCB7IGZvcm1hdExVU0RMYWJlbCwgZm9ybWF0UG9vbFNoYXJlIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZm9ybWF0XCI7XG5cbmludGVyZmFjZSBCb3Jyb3dpbmdGZWVJbmZvIHtcbiAgYm9ycm93ZXI6IGAweCR7c3RyaW5nfWA7XG4gIC8qKlxuICAgKiBUaGUgZmVlIHRoZSBib3Jyb3dlciBwYWlkXG4gICAqL1xuICBsdXNkRmVlOiBCaWdOdW1iZXI7XG4gIC8qKlxuICAgKiBQb29sIHNoYXJlIGF0IHRoZSB0aW1lIHRoZSBMVVNEQm9ycm93aW5nRmVlUGFpZCBldmVudCB3YXMgZW1pdHRlZFxuICAgKi9cbiAgcG9vbFNoYXJlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBQb3J0aW9uIG9mIHRoZSBsdXNkIGZlZSB0aGF0IHdhcyBlYXJuZWRcbiAgICovXG4gIGVhcm5lZFBvcnRpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVW5peCB0aW1lc3RhbXAgaW4gc2Vjb25kcyB3aGVuIHRoZSBldmVudCB3YXMgZW1pdHRlZFxuICAgKi9cbiAgdGltZXN0YW1wOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERhdGUgb2JqZWN0IHdoZW4gdGhlIGV2ZW50IHdhcyBlbWl0dGVkXG4gICAqL1xuICBkYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgTFVTREJvcnJvd2luZ0ZlZVBhaWQgZXZlbnQgaXRzZWxmXG4gICAqL1xuICBldmVudDogRXZlbnQ7XG5cbiAgLyoqXG4gICAqIFRoZSBibG9jayB0aGUgZXZlbnQgdG9vayBwbGFjZSBpblxuICAgKi9cbiAgYmxvY2s6IEJsb2NrO1xufVxuaW50ZXJmYWNlIExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVQcm9wcyB7XG4gIGFjY291bnQ6IGAweCR7c3RyaW5nfWA7XG59XG5cbmNvbnN0IHRoU3R5bGUgPSB7XG4gIHBhZGRpbmc6IFwiNXB4IDIwcHhcIixcbn07XG5jb25zdCB0ZFN0eWxlOiBDU1NQcm9wZXJ0aWVzID0geyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiNXB4IDIwcHhcIiB9O1xuZXhwb3J0IGZ1bmN0aW9uIExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUoe1xuICBhY2NvdW50LFxufTogTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVByb3BzKSB7XG4gIGNvbnN0IGJvcnJvd2luZ0ZlZVBhaWRJbmZvcyA9IHVzZVJlYWxUaW1lQm9ycm93aW5nRmVlUGFpZEluZm9zKGFjY291bnQpO1xuICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mb3NXaXRoTm9uWmVyb0Vhcm5pbmdzID0gYm9ycm93aW5nRmVlUGFpZEluZm9zLmZpbHRlcihcbiAgICAoeyBlYXJuZWRQb3J0aW9uIH0pID0+IGVhcm5lZFBvcnRpb24gPiAwXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6IFwiNzUlXCIgfX0+XG4gICAgICA8Y2FwdGlvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBoYXMgYmVlbiBhIHRvdGFsIG9me1wiIFwifVxuICAgICAgICAgIDxzdHJvbmc+e2JvcnJvd2luZ0ZlZVBhaWRJbmZvcy5sZW5ndGh9PC9zdHJvbmc+IExVU0RCb3Jyb3dpbmdGZWVQYWlkXG4gICAgICAgICAgZXZlbnRzIHNpbmNlIHRoaXMgcGFnZSBsb2FkZWQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT2YgdGhpcyB0b3RhbCwgdGhlcmUgYXJle1wiIFwifVxuICAgICAgICAgIDxzdHJvbmc+e2JvcnJvd2luZ0ZlZVBhaWRJbmZvc1dpdGhOb25aZXJvRWFybmluZ3MubGVuZ3RofTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICBldmVudHMgd2l0aCBub24temVybyBlYXJuaW5ncy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5CbG9jazwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5UeDwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5EYXRlPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkJvcnJvd2VyPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkZlZSBhbW91bnQgcGFpZCAoTFVTRCk8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+UG9ydGlvbiBlYXJuZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2JvcnJvd2luZ0ZlZVBhaWRJbmZvcy5tYXAoXG4gICAgICAgICAgKHsgcG9vbFNoYXJlLCBsdXNkRmVlLCBkYXRlLCBldmVudCwgYm9ycm93ZXIsIGVhcm5lZFBvcnRpb24gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17ZXZlbnQudHJhbnNhY3Rpb25IYXNofT5cbiAgICAgICAgICAgICAgICB7LyogQmxvY2sgTnVtYmVyICovfVxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXttYWtlRXRoZXJzY2FuQmxvY2tVcmwoZXZlbnQuYmxvY2tOdW1iZXIpfT5cbiAgICAgICAgICAgICAgICAgICAge2V2ZW50LmJsb2NrTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICB7LyogVHggSGFzaCAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bWFrZUV0aGVyc2NhblR4VXJsKGV2ZW50LnRyYW5zYWN0aW9uSGFzaCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZXZlbnQudHJhbnNhY3Rpb25IYXNoLnNsaWNlKDAsIDE2KX0uLi5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgey8qIERhdGUgKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIHtkYXRlLnRvRGF0ZVN0cmluZygpfSBAIHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICB7LyogQm9ycm93ZXIgKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5BZGRyZXNzVXJsKGJvcnJvd2VyKX0+e2JvcnJvd2VyfTwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgey8qIEZlZSBhbW91bnQgcGFpZCAoTFVTRCkqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9Pntmb3JtYXRMVVNETGFiZWwobHVzZEZlZSl9PC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBQb3J0aW9uIGVhcm5lZCAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PntlYXJuZWRQb3J0aW9uLnRvRml4ZWQoNil9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyhhY2NvdW50OiBgMHgke3N0cmluZ31gKSB7XG4gIGNvbnN0IFtib3Jyb3dpbmdGZWVQYWlkSW5mb3MsIHNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvc10gPSB1c2VTdGF0ZTxcbiAgICBCb3Jyb3dpbmdGZWVJbmZvW11cbiAgPihbXSk7XG5cbiAgY29uc3QgbHF0eVN0YWtpbmcgPSB1c2VMaXF1aXR5U3Rha2luZygpO1xuXG4gIHVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMoYXN5bmMgKGJvcnJvd2VyLCBsdXNkRmVlLCBldmVudCkgPT4ge1xuICAgIGlmICghbHF0eVN0YWtpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFrZWRMUVRZID0gYXdhaXQgbHF0eVN0YWtpbmcuc3Rha2VzKGFjY291bnQpO1xuICAgIGNvbnN0IHRvdGFsU3Rha2VkID0gYXdhaXQgbHF0eVN0YWtpbmcudG90YWxMUVRZU3Rha2VkKCk7XG4gICAgY29uc3QgYmxvY2sgPSBhd2FpdCBldmVudC5nZXRCbG9jaygpO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYmxvY2sudGltZXN0YW1wICogMTAwMCk7XG4gICAgY29uc3QgcG9vbFNoYXJlID0gK2Zvcm1hdEV0aGVyKHN0YWtlZExRVFkpIC8gK2Zvcm1hdEV0aGVyKHRvdGFsU3Rha2VkKTtcbiAgICBjb25zdCBlYXJuZWRQb3J0aW9uID0gK2Zvcm1hdEV0aGVyKGx1c2RGZWUpICogcG9vbFNoYXJlO1xuICAgIGNvbnN0IGJvcnJvd2luZ0ZlZVBhaWRJbmZvOiBCb3Jyb3dpbmdGZWVJbmZvID0ge1xuICAgICAgYm9ycm93ZXIsXG4gICAgICBibG9jayxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIGRhdGUsXG4gICAgICBsdXNkRmVlLFxuICAgICAgcG9vbFNoYXJlLFxuICAgICAgZWFybmVkUG9ydGlvbixcbiAgICAgIGV2ZW50LFxuICAgIH07XG5cbiAgICBzZXRCb3Jyb3dpbmdGZWVQYWlkSW5mb3MoKHByZXZTdGF0ZSkgPT4gW1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgYm9ycm93aW5nRmVlUGFpZEluZm8sXG4gICAgXSk7XG4gIH0pO1xuICByZXR1cm4gYm9ycm93aW5nRmVlUGFpZEluZm9zO1xufVxuIl0sIm5hbWVzIjpbImZvcm1hdEV0aGVyIiwidXNlU3RhdGUiLCJ1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzIiwidXNlTGlxdWl0eVN0YWtpbmciLCJtYWtlRXRoZXJzY2FuQWRkcmVzc1VybCIsIm1ha2VFdGhlcnNjYW5CbG9ja1VybCIsIm1ha2VFdGhlcnNjYW5UeFVybCIsImZvcm1hdExVU0RMYWJlbCIsInRoU3R5bGUiLCJwYWRkaW5nIiwidGRTdHlsZSIsInRleHRBbGlnbiIsIkxVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUiLCJhY2NvdW50IiwiYm9ycm93aW5nRmVlUGFpZEluZm9zIiwidXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJib3Jyb3dpbmdGZWVQYWlkSW5mb3NXaXRoTm9uWmVyb0Vhcm5pbmdzIiwiZmlsdGVyIiwiZWFybmVkUG9ydGlvbiIsInRhYmxlIiwic3R5bGUiLCJ3aWR0aCIsImNhcHRpb24iLCJwYWRkaW5nQm90dG9tIiwicCIsInN0cm9uZyIsImxlbmd0aCIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwicG9vbFNoYXJlIiwibHVzZEZlZSIsImRhdGUiLCJldmVudCIsImJvcnJvd2VyIiwidGQiLCJhIiwiaHJlZiIsImJsb2NrTnVtYmVyIiwidHJhbnNhY3Rpb25IYXNoIiwic2xpY2UiLCJ0b0RhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJ0b0ZpeGVkIiwic2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zIiwibHF0eVN0YWtpbmciLCJzdGFrZWRMUVRZIiwic3Rha2VzIiwidG90YWxTdGFrZWQiLCJ0b3RhbExRVFlTdGFrZWQiLCJibG9jayIsImdldEJsb2NrIiwidGltZXN0YW1wIiwiRGF0ZSIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvIiwicHJldlN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});