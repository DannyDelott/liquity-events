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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _base_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/format */ \"./src/base/format.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nconst tdStyle = {\n    textAlign: \"center\",\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account , onLUSDBorrowingFeePaid  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account, onLUSDBorrowingFeePaid);\n    const borrowingFeePaidInfosWithNonZeroEarnings = borrowingFeePaidInfos.filter((param)=>{\n        let { earnedPortion  } = param;\n        return earnedPortion > 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"There has been a total of\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: borrowingFeePaidInfos.length\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            \" LUSDBorrowingFeePaid events since this page loaded.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Of this total, there are\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: borrowingFeePaidInfosWithNonZeroEarnings.length\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            \"events with non-zero earnings.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfosWithNonZeroEarnings.map((param)=>{\n                    let { lusdFee , date , event , borrower , earnedPortion  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanBlockUrl)(event.blockNumber),\n                                    children: event.blockNumber\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanTxUrl)(event.transactionHash),\n                                    children: [\n                                        event.transactionHash.slice(0, 16),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: [\n                                    date.toDateString(),\n                                    \" @ \",\n                                    date.toLocaleTimeString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanAddressUrl)(borrower),\n                                    children: borrower\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_base_format__WEBPACK_IMPORTED_MODULE_5__.formatLUSDLabel)(lusdFee)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: earnedPortion.toFixed(6)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, event.transactionHash, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account, onLUSDBorrowingFeePaid) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        if (!lqtyStaking) {\n            return;\n        }\n        const stakedLQTY = await lqtyStaking.stakes(account);\n        const totalStaked = await lqtyStaking.totalLQTYStaked();\n        const block = await event.getBlock();\n        const timestamp = block.timestamp;\n        const date = new Date(block.timestamp * 1000);\n        const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(totalStaked);\n        const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(lusdFee) * poolShare;\n        const borrowingFeePaidInfo = {\n            borrower,\n            block,\n            timestamp,\n            date,\n            lusdFee,\n            poolShare,\n            earnedPortion,\n            event\n        };\n        setBorrowingFeePaidInfos((prevState)=>[\n                ...prevState,\n                borrowingFeePaidInfo\n            ]);\n        onLUSDBorrowingFeePaid(borrowingFeePaidInfo);\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFHSDtBQUN3QztBQUMzQjtBQUtwQztBQUM0QztBQTJDckUsTUFBTVEsVUFBVTtJQUNkQyxTQUFTO0FBQ1g7QUFDQSxNQUFNQyxVQUF5QjtJQUFFQyxXQUFXO0lBQVVGLFNBQVM7QUFBVztBQUNuRSxTQUFTRywwQkFBMEIsS0FHVCxFQUFFO1FBSE8sRUFDeENDLFFBQU8sRUFDUEMsdUJBQXNCLEVBQ1MsR0FIUzs7SUFJeEMsTUFBTUMsd0JBQXdCQyxpQ0FDNUJILFNBQ0FDO0lBRUYsTUFBTUcsMkNBQTJDRixzQkFBc0JHLE1BQU0sQ0FDM0UsU0FBdUJDO1lBQXRCLEVBQUVBLGNBQWEsRUFBRTtlQUFLQSxnQkFBZ0I7SUFBQTtJQUd6QyxxQkFDRSw4REFBQ0M7UUFBTUMsT0FBTztZQUFFQyxPQUFPO1FBQU07OzBCQUMzQiw4REFBQ0M7Z0JBQ0NGLE9BQU87b0JBQ0xHLGVBQWU7Z0JBQ2pCOztrQ0FFQSw4REFBQ0M7OzRCQUFFOzRCQUN5QjswQ0FDMUIsOERBQUNDOzBDQUFRWCxzQkFBc0JZLE1BQU07Ozs7Ozs0QkFBVTs7Ozs7OztrQ0FHakQsOERBQUNGOzs0QkFBRTs0QkFDd0I7MENBQ3pCLDhEQUFDQzswQ0FBUVQseUNBQXlDVSxNQUFNOzs7Ozs7NEJBQVc7NEJBQUk7Ozs7Ozs7Ozs7Ozs7MEJBSTNFLDhEQUFDQzswQkFDQyw0RUFBQ0M7O3NDQUNDLDhEQUFDQzs0QkFBR1QsT0FBT2I7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNzQjs0QkFBR1QsT0FBT2I7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNzQjs0QkFBR1QsT0FBT2I7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNzQjs0QkFBR1QsT0FBT2I7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNzQjs0QkFBR1QsT0FBT2I7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNzQjs0QkFBR1QsT0FBT2I7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ3VCOzBCQUNFZCx5Q0FBeUNlLEdBQUcsQ0FDM0MsU0FBdUQ7d0JBQXRELEVBQUVDLFFBQU8sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRWpCLGNBQWEsRUFBRTtvQkFDaEQscUJBQ0UsOERBQUNVOzswQ0FFQyw4REFBQ1E7Z0NBQUdoQixPQUFPWDswQ0FDVCw0RUFBQzRCO29DQUNDQyxRQUFPO29DQUNQQyxNQUFNbkMsaUVBQXFCQSxDQUFDOEIsTUFBTU0sV0FBVzs4Q0FFNUNOLE1BQU1NLFdBQVc7Ozs7Ozs7Ozs7OzBDQUt0Qiw4REFBQ0o7Z0NBQUdoQixPQUFPWDswQ0FDVCw0RUFBQzRCO29DQUNDQyxRQUFPO29DQUNQQyxNQUFNbEMsOERBQWtCQSxDQUFDNkIsTUFBTU8sZUFBZTs7d0NBRTdDUCxNQUFNTyxlQUFlLENBQUNDLEtBQUssQ0FBQyxHQUFHO3dDQUFJOzs7Ozs7Ozs7Ozs7MENBS3hDLDhEQUFDTjtnQ0FBR2hCLE9BQU9YOztvQ0FDUndCLEtBQUtVLFlBQVk7b0NBQUc7b0NBQUlWLEtBQUtXLGtCQUFrQjs7Ozs7OzswQ0FJbEQsOERBQUNSO2dDQUFHaEIsT0FBT1g7MENBQ1QsNEVBQUM0QjtvQ0FBRUMsUUFBTztvQ0FBU0MsTUFBTXBDLG1FQUF1QkEsQ0FBQ2dDOzhDQUM5Q0E7Ozs7Ozs7Ozs7OzBDQUtMLDhEQUFDQztnQ0FBR2hCLE9BQU9YOzBDQUFVSCw2REFBZUEsQ0FBQzBCOzs7Ozs7MENBR3JDLDhEQUFDSTtnQ0FBR2hCLE9BQU9YOzBDQUFVUyxjQUFjMkIsT0FBTyxDQUFDOzs7Ozs7O3VCQXJDcENYLE1BQU1PLGVBQWU7Ozs7O2dCQXdDbEM7Ozs7Ozs7Ozs7OztBQUtWLENBQUM7R0F6RmU5Qjs7UUFJZ0JJOzs7S0FKaEJKO0FBMkZoQixTQUFTSSxpQ0FDUEgsT0FBc0IsRUFDdEJDLHNCQUFvRSxFQUNwRTs7SUFDQSxNQUFNLENBQUNDLHVCQUF1QmdDLHlCQUF5QixHQUFHOUMsK0NBQVFBLENBRWhFLEVBQUU7SUFFSixNQUFNK0MsY0FBYzdDLHlFQUFpQkE7SUFFckNELG9HQUFxQ0EsQ0FBQyxPQUFPa0MsVUFBVUgsU0FBU0UsUUFBVTtRQUN4RSxJQUFJLENBQUNhLGFBQWE7WUFDaEI7UUFDRixDQUFDO1FBRUQsTUFBTUMsYUFBYSxNQUFNRCxZQUFZRSxNQUFNLENBQUNyQztRQUM1QyxNQUFNc0MsY0FBYyxNQUFNSCxZQUFZSSxlQUFlO1FBQ3JELE1BQU1DLFFBQVEsTUFBTWxCLE1BQU1tQixRQUFRO1FBQ2xDLE1BQU1DLFlBQVlGLE1BQU1FLFNBQVM7UUFDakMsTUFBTXJCLE9BQU8sSUFBSXNCLEtBQUtILE1BQU1FLFNBQVMsR0FBRztRQUN4QyxNQUFNRSxZQUFZLENBQUN6RCxpRUFBV0EsQ0FBQ2lELGNBQWMsQ0FBQ2pELGlFQUFXQSxDQUFDbUQ7UUFDMUQsTUFBTWhDLGdCQUFnQixDQUFDbkIsaUVBQVdBLENBQUNpQyxXQUFXd0I7UUFDOUMsTUFBTUMsdUJBQXlDO1lBQzdDdEI7WUFDQWlCO1lBQ0FFO1lBQ0FyQjtZQUNBRDtZQUNBd0I7WUFDQXRDO1lBQ0FnQjtRQUNGO1FBRUFZLHlCQUF5QixDQUFDWSxZQUFjO21CQUNuQ0E7Z0JBQ0hEO2FBQ0Q7UUFDRDVDLHVCQUF1QjRDO0lBQ3pCO0lBQ0EsT0FBTzNDO0FBQ1Q7SUF4Q1NDOztRQVFhYixxRUFBaUJBO1FBRXJDRCxnR0FBcUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saXF1aXR5L0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUvTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZS50c3g/YTMyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC91bml0c1wiO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBFdmVudCB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IEJsb2NrIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2Fic3RyYWN0LXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyB9IGZyb20gXCIuLi9jb250cmFjdHMvYm9ycm93ZXJPcGVyYXRpb25zXCI7XG5pbXBvcnQgeyB1c2VMaXF1aXR5U3Rha2luZyB9IGZyb20gXCIuLi9jb250cmFjdHMvbHF0eVN0YWtpbmdcIjtcbmltcG9ydCB7XG4gIG1ha2VFdGhlcnNjYW5BZGRyZXNzVXJsLFxuICBtYWtlRXRoZXJzY2FuQmxvY2tVcmwsXG4gIG1ha2VFdGhlcnNjYW5UeFVybCxcbn0gZnJvbSBcIi4uLy4uL2V0aGVyc2NhblwiO1xuaW1wb3J0IHsgZm9ybWF0TFVTRExhYmVsLCBmb3JtYXRQb29sU2hhcmUgfSBmcm9tIFwiLi4vLi4vYmFzZS9mb3JtYXRcIjtcblxuaW50ZXJmYWNlIEJvcnJvd2luZ0ZlZUluZm8ge1xuICBib3Jyb3dlcjogYDB4JHtzdHJpbmd9YDtcbiAgLyoqXG4gICAqIFRoZSBmZWUgdGhlIGJvcnJvd2VyIHBhaWRcbiAgICovXG4gIGx1c2RGZWU6IEJpZ051bWJlcjtcbiAgLyoqXG4gICAqIFBvb2wgc2hhcmUgYXQgdGhlIHRpbWUgdGhlIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50IHdhcyBlbWl0dGVkXG4gICAqL1xuICBwb29sU2hhcmU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFBvcnRpb24gb2YgdGhlIGx1c2QgZmVlIHRoYXQgd2FzIGVhcm5lZFxuICAgKi9cbiAgZWFybmVkUG9ydGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVbml4IHRpbWVzdGFtcCBpbiBzZWNvbmRzIHdoZW4gdGhlIGV2ZW50IHdhcyBlbWl0dGVkXG4gICAqL1xuICB0aW1lc3RhbXA6IG51bWJlcjtcblxuICAvKipcbiAgICogRGF0ZSBvYmplY3Qgd2hlbiB0aGUgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIGRhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBMVVNEQm9ycm93aW5nRmVlUGFpZCBldmVudCBpdHNlbGZcbiAgICovXG4gIGV2ZW50OiBFdmVudDtcblxuICAvKipcbiAgICogVGhlIGJsb2NrIHRoZSBldmVudCB0b29rIHBsYWNlIGluXG4gICAqL1xuICBibG9jazogQmxvY2s7XG59XG5pbnRlcmZhY2UgTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVByb3BzIHtcbiAgYWNjb3VudDogYDB4JHtzdHJpbmd9YDtcbiAgc3Rha2VDaGFuZ2VkRXZlbnRzOiBFdmVudFtdO1xuICBvbkxVU0RCb3Jyb3dpbmdGZWVQYWlkOiAoYm9ycm93aW5nRmVlSW5mbzogQm9ycm93aW5nRmVlSW5mbykgPT4gdm9pZDtcbn1cblxuY29uc3QgdGhTdHlsZSA9IHtcbiAgcGFkZGluZzogXCI1cHggMjBweFwiLFxufTtcbmNvbnN0IHRkU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH07XG5leHBvcnQgZnVuY3Rpb24gTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZSh7XG4gIGFjY291bnQsXG4gIG9uTFVTREJvcnJvd2luZ0ZlZVBhaWQsXG59OiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMpIHtcbiAgY29uc3QgYm9ycm93aW5nRmVlUGFpZEluZm9zID0gdXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MoXG4gICAgYWNjb3VudCxcbiAgICBvbkxVU0RCb3Jyb3dpbmdGZWVQYWlkXG4gICk7XG4gIGNvbnN0IGJvcnJvd2luZ0ZlZVBhaWRJbmZvc1dpdGhOb25aZXJvRWFybmluZ3MgPSBib3Jyb3dpbmdGZWVQYWlkSW5mb3MuZmlsdGVyKFxuICAgICh7IGVhcm5lZFBvcnRpb24gfSkgPT4gZWFybmVkUG9ydGlvbiA+IDBcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogXCI3NSVcIiB9fT5cbiAgICAgIDxjYXB0aW9uXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIGhhcyBiZWVuIGEgdG90YWwgb2Z7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Ym9ycm93aW5nRmVlUGFpZEluZm9zLmxlbmd0aH08L3N0cm9uZz4gTFVTREJvcnJvd2luZ0ZlZVBhaWRcbiAgICAgICAgICBldmVudHMgc2luY2UgdGhpcyBwYWdlIGxvYWRlZC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBPZiB0aGlzIHRvdGFsLCB0aGVyZSBhcmV7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Ym9ycm93aW5nRmVlUGFpZEluZm9zV2l0aE5vblplcm9FYXJuaW5ncy5sZW5ndGh9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgIGV2ZW50cyB3aXRoIG5vbi16ZXJvIGVhcm5pbmdzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2NhcHRpb24+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkJsb2NrPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PlR4PC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkRhdGU8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+Qm9ycm93ZXI8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+RmVlIGFtb3VudCBwYWlkIChMVVNEKTwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5Qb3J0aW9uIGVhcm5lZCAoTFVTRCk8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2JvcnJvd2luZ0ZlZVBhaWRJbmZvc1dpdGhOb25aZXJvRWFybmluZ3MubWFwKFxuICAgICAgICAgICh7IGx1c2RGZWUsIGRhdGUsIGV2ZW50LCBib3Jyb3dlciwgZWFybmVkUG9ydGlvbiB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtldmVudC50cmFuc2FjdGlvbkhhc2h9PlxuICAgICAgICAgICAgICAgIHsvKiBCbG9jayBOdW1iZXIgKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e21ha2VFdGhlcnNjYW5CbG9ja1VybChldmVudC5ibG9ja051bWJlcil9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtldmVudC5ibG9ja051bWJlcn1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgey8qIFR4IEhhc2ggKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e21ha2VFdGhlcnNjYW5UeFVybChldmVudC50cmFuc2FjdGlvbkhhc2gpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZXZlbnQudHJhbnNhY3Rpb25IYXNoLnNsaWNlKDAsIDE2KX0uLi5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgey8qIERhdGUgKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIHtkYXRlLnRvRGF0ZVN0cmluZygpfSBAIHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICB7LyogQm9ycm93ZXIgKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e21ha2VFdGhlcnNjYW5BZGRyZXNzVXJsKGJvcnJvd2VyKX0+XG4gICAgICAgICAgICAgICAgICAgIHtib3Jyb3dlcn1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgey8qIEZlZSBhbW91bnQgcGFpZCAoTFVTRCkqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9Pntmb3JtYXRMVVNETGFiZWwobHVzZEZlZSl9PC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBQb3J0aW9uIGVhcm5lZCAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PntlYXJuZWRQb3J0aW9uLnRvRml4ZWQoNil9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyhcbiAgYWNjb3VudDogYDB4JHtzdHJpbmd9YCxcbiAgb25MVVNEQm9ycm93aW5nRmVlUGFpZDogKGJvcnJvd2luZ0ZlZUluZm86IEJvcnJvd2luZ0ZlZUluZm8pID0+IHZvaWRcbikge1xuICBjb25zdCBbYm9ycm93aW5nRmVlUGFpZEluZm9zLCBzZXRCb3Jyb3dpbmdGZWVQYWlkSW5mb3NdID0gdXNlU3RhdGU8XG4gICAgQm9ycm93aW5nRmVlSW5mb1tdXG4gID4oW10pO1xuXG4gIGNvbnN0IGxxdHlTdGFraW5nID0gdXNlTGlxdWl0eVN0YWtpbmcoKTtcblxuICB1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzKGFzeW5jIChib3Jyb3dlciwgbHVzZEZlZSwgZXZlbnQpID0+IHtcbiAgICBpZiAoIWxxdHlTdGFraW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3Rha2VkTFFUWSA9IGF3YWl0IGxxdHlTdGFraW5nLnN0YWtlcyhhY2NvdW50KTtcbiAgICBjb25zdCB0b3RhbFN0YWtlZCA9IGF3YWl0IGxxdHlTdGFraW5nLnRvdGFsTFFUWVN0YWtlZCgpO1xuICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgZXZlbnQuZ2V0QmxvY2soKTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBibG9jay50aW1lc3RhbXA7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJsb2NrLnRpbWVzdGFtcCAqIDEwMDApO1xuICAgIGNvbnN0IHBvb2xTaGFyZSA9ICtmb3JtYXRFdGhlcihzdGFrZWRMUVRZKSAvICtmb3JtYXRFdGhlcih0b3RhbFN0YWtlZCk7XG4gICAgY29uc3QgZWFybmVkUG9ydGlvbiA9ICtmb3JtYXRFdGhlcihsdXNkRmVlKSAqIHBvb2xTaGFyZTtcbiAgICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mbzogQm9ycm93aW5nRmVlSW5mbyA9IHtcbiAgICAgIGJvcnJvd2VyLFxuICAgICAgYmxvY2ssXG4gICAgICB0aW1lc3RhbXAsXG4gICAgICBkYXRlLFxuICAgICAgbHVzZEZlZSxcbiAgICAgIHBvb2xTaGFyZSxcbiAgICAgIGVhcm5lZFBvcnRpb24sXG4gICAgICBldmVudCxcbiAgICB9O1xuXG4gICAgc2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zKChwcmV2U3RhdGUpID0+IFtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIGJvcnJvd2luZ0ZlZVBhaWRJbmZvLFxuICAgIF0pO1xuICAgIG9uTFVTREJvcnJvd2luZ0ZlZVBhaWQoYm9ycm93aW5nRmVlUGFpZEluZm8pO1xuICB9KTtcbiAgcmV0dXJuIGJvcnJvd2luZ0ZlZVBhaWRJbmZvcztcbn1cbiJdLCJuYW1lcyI6WyJmb3JtYXRFdGhlciIsInVzZVN0YXRlIiwidXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyIsInVzZUxpcXVpdHlTdGFraW5nIiwibWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwiLCJtYWtlRXRoZXJzY2FuQmxvY2tVcmwiLCJtYWtlRXRoZXJzY2FuVHhVcmwiLCJmb3JtYXRMVVNETGFiZWwiLCJ0aFN0eWxlIiwicGFkZGluZyIsInRkU3R5bGUiLCJ0ZXh0QWxpZ24iLCJMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlIiwiYWNjb3VudCIsIm9uTFVTREJvcnJvd2luZ0ZlZVBhaWQiLCJib3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJ1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvc1dpdGhOb25aZXJvRWFybmluZ3MiLCJmaWx0ZXIiLCJlYXJuZWRQb3J0aW9uIiwidGFibGUiLCJzdHlsZSIsIndpZHRoIiwiY2FwdGlvbiIsInBhZGRpbmdCb3R0b20iLCJwIiwic3Ryb25nIiwibGVuZ3RoIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJsdXNkRmVlIiwiZGF0ZSIsImV2ZW50IiwiYm9ycm93ZXIiLCJ0ZCIsImEiLCJ0YXJnZXQiLCJocmVmIiwiYmxvY2tOdW1iZXIiLCJ0cmFuc2FjdGlvbkhhc2giLCJzbGljZSIsInRvRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsInRvRml4ZWQiLCJzZXRCb3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJscXR5U3Rha2luZyIsInN0YWtlZExRVFkiLCJzdGFrZXMiLCJ0b3RhbFN0YWtlZCIsInRvdGFsTFFUWVN0YWtlZCIsImJsb2NrIiwiZ2V0QmxvY2siLCJ0aW1lc3RhbXAiLCJEYXRlIiwicG9vbFNoYXJlIiwiYm9ycm93aW5nRmVlUGFpZEluZm8iLCJwcmV2U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});