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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _base_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/format */ \"./src/base/format.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nconst tdStyle = {\n    textAlign: \"center\",\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    \"There have been \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: borrowingFeePaidInfos.length\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 25\n                    }, this),\n                    \" \",\n                    \"LUSDBorrowingFeePaid events since this page loaded.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfos.filter((param)=>{\n                    let { earnedPortion  } = param;\n                    return earnedPortion > 0;\n                }).map((param)=>{\n                    let { lusdFee , date , event , borrower , earnedPortion  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanBlockUrl)(event.blockNumber),\n                                    children: event.blockNumber\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanTxUrl)(event.transactionHash),\n                                    children: [\n                                        event.transactionHash.slice(0, 16),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: [\n                                    date.toDateString(),\n                                    \" @ \",\n                                    date.toLocaleTimeString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanAddressUrl)(borrower)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_base_format__WEBPACK_IMPORTED_MODULE_5__.formatLUSDLabel)(lusdFee)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: earnedPortion\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, event.transactionHash, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        if (!lqtyStaking) {\n            return;\n        }\n        const stakedLQTY = await lqtyStaking.stakes(account);\n        const totalStaked = await lqtyStaking.totalLQTYStaked();\n        const block = await event.getBlock();\n        const timestamp = block.timestamp;\n        const date = new Date(block.timestamp * 1000);\n        const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(totalStaked);\n        const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(lusdFee) * poolShare;\n        const borrowingFeePaidInfo = {\n            borrower,\n            block,\n            timestamp,\n            date,\n            lusdFee,\n            poolShare,\n            earnedPortion,\n            event\n        };\n        setBorrowingFeePaidInfos((prevState)=>[\n                ...prevState,\n                borrowingFeePaidInfo\n            ]);\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFHSDtBQUN3QztBQUMzQjtBQUtwQztBQUMyQjtBQXlDcEQsTUFBTVEsVUFBVTtJQUNkQyxTQUFTO0FBQ1g7QUFDQSxNQUFNQyxVQUF5QjtJQUFFQyxXQUFXO0lBQVVGLFNBQVM7QUFBVztBQUNuRSxTQUFTRywwQkFBMEIsS0FFVCxFQUFFO1FBRk8sRUFDeENDLFFBQU8sRUFDd0IsR0FGUzs7SUFHeEMsTUFBTUMsd0JBQXdCQyxpQ0FBaUNGO0lBQy9ELHFCQUNFLDhEQUFDRztRQUFNQyxPQUFPO1lBQUVDLE9BQU87UUFBTTs7MEJBQzNCLDhEQUFDQztnQkFDQ0YsT0FBTztvQkFDTEcsZUFBZTtnQkFDakI7O29CQUNEO2tDQUNpQiw4REFBQ0M7a0NBQVFQLHNCQUFzQlEsTUFBTTs7Ozs7O29CQUFXO29CQUFJOzs7Ozs7OzBCQUd0RSw4REFBQ0M7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDaUI7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDaUI7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDaUI7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDaUI7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDaUI7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNrQjswQkFDRVosc0JBQ0VhLE1BQU0sQ0FBQyxTQUF1QkM7d0JBQXRCLEVBQUVBLGNBQWEsRUFBRTsyQkFBS0EsZ0JBQWdCO2dCQUFBLEdBQzlDQyxHQUFHLENBQUMsU0FBdUQ7d0JBQXRELEVBQUVDLFFBQU8sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUwsY0FBYSxFQUFFO29CQUNyRCxxQkFDRSw4REFBQ0o7OzBDQUVDLDhEQUFDVTtnQ0FBR2pCLE9BQU9QOzBDQUNULDRFQUFDeUI7b0NBQUVDLE1BQU0vQixpRUFBcUJBLENBQUMyQixNQUFNSyxXQUFXOzhDQUM3Q0wsTUFBTUssV0FBVzs7Ozs7Ozs7Ozs7MENBS3RCLDhEQUFDSDtnQ0FBR2pCLE9BQU9QOzBDQUNULDRFQUFDeUI7b0NBQUVDLE1BQU05Qiw4REFBa0JBLENBQUMwQixNQUFNTSxlQUFlOzt3Q0FDOUNOLE1BQU1NLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDLEdBQUc7d0NBQUk7Ozs7Ozs7Ozs7OzswQ0FLeEMsOERBQUNMO2dDQUFHakIsT0FBT1A7O29DQUNScUIsS0FBS1MsWUFBWTtvQ0FBRztvQ0FBSVQsS0FBS1Usa0JBQWtCOzs7Ozs7OzBDQUlsRCw4REFBQ1A7Z0NBQUdqQixPQUFPUDswQ0FBVU4sbUVBQXVCQSxDQUFDNkI7Ozs7OzswQ0FHN0MsOERBQUNDO2dDQUFHakIsT0FBT1A7MENBQVVILDZEQUFlQSxDQUFDdUI7Ozs7OzswQ0FHckMsOERBQUNJO2dDQUFHakIsT0FBT1A7MENBQVVrQjs7Ozs7Ozt1QkEzQmRJLE1BQU1NLGVBQWU7Ozs7O2dCQThCbEM7Ozs7Ozs7Ozs7OztBQUlWLENBQUM7R0EvRGUxQjs7UUFHZ0JHOzs7S0FIaEJIO0FBaUVoQixTQUFTRyxpQ0FBaUNGLE9BQXNCLEVBQUU7O0lBQ2hFLE1BQU0sQ0FBQ0MsdUJBQXVCNEIseUJBQXlCLEdBQUd6QywrQ0FBUUEsQ0FFaEUsRUFBRTtJQUVKLE1BQU0wQyxjQUFjeEMseUVBQWlCQTtJQUVyQ0Qsb0dBQXFDQSxDQUFDLE9BQU8rQixVQUFVSCxTQUFTRSxRQUFVO1FBQ3hFLElBQUksQ0FBQ1csYUFBYTtZQUNoQjtRQUNGLENBQUM7UUFFRCxNQUFNQyxhQUFhLE1BQU1ELFlBQVlFLE1BQU0sQ0FBQ2hDO1FBQzVDLE1BQU1pQyxjQUFjLE1BQU1ILFlBQVlJLGVBQWU7UUFDckQsTUFBTUMsUUFBUSxNQUFNaEIsTUFBTWlCLFFBQVE7UUFDbEMsTUFBTUMsWUFBWUYsTUFBTUUsU0FBUztRQUNqQyxNQUFNbkIsT0FBTyxJQUFJb0IsS0FBS0gsTUFBTUUsU0FBUyxHQUFHO1FBQ3hDLE1BQU1FLFlBQVksQ0FBQ3BELGlFQUFXQSxDQUFDNEMsY0FBYyxDQUFDNUMsaUVBQVdBLENBQUM4QztRQUMxRCxNQUFNbEIsZ0JBQWdCLENBQUM1QixpRUFBV0EsQ0FBQzhCLFdBQVdzQjtRQUM5QyxNQUFNQyx1QkFBeUM7WUFDN0NwQjtZQUNBZTtZQUNBRTtZQUNBbkI7WUFDQUQ7WUFDQXNCO1lBQ0F4QjtZQUNBSTtRQUNGO1FBRUFVLHlCQUF5QixDQUFDWSxZQUFjO21CQUNuQ0E7Z0JBQ0hEO2FBQ0Q7SUFDSDtJQUNBLE9BQU92QztBQUNUO0lBcENTQzs7UUFLYVoscUVBQWlCQTtRQUVyQ0QsZ0dBQXFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4P2EzMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgRXZlbnQgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9hYnN0cmFjdC1wcm92aWRlclwiO1xuaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMgfSBmcm9tIFwiLi4vY29udHJhY3RzL2JvcnJvd2VyT3BlcmF0aW9uc1wiO1xuaW1wb3J0IHsgdXNlTGlxdWl0eVN0YWtpbmcgfSBmcm9tIFwiLi4vY29udHJhY3RzL2xxdHlTdGFraW5nXCI7XG5pbXBvcnQge1xuICBtYWtlRXRoZXJzY2FuQWRkcmVzc1VybCxcbiAgbWFrZUV0aGVyc2NhbkJsb2NrVXJsLFxuICBtYWtlRXRoZXJzY2FuVHhVcmwsXG59IGZyb20gXCIuLi8uLi9ldGhlcnNjYW5cIjtcbmltcG9ydCB7IGZvcm1hdExVU0RMYWJlbCB9IGZyb20gXCIuLi8uLi9iYXNlL2Zvcm1hdFwiO1xuXG5pbnRlcmZhY2UgQm9ycm93aW5nRmVlSW5mbyB7XG4gIGJvcnJvd2VyOiBgMHgke3N0cmluZ31gO1xuICAvKipcbiAgICogVGhlIGZlZSB0aGUgYm9ycm93ZXIgcGFpZFxuICAgKi9cbiAgbHVzZEZlZTogQmlnTnVtYmVyO1xuICAvKipcbiAgICogUG9vbCBzaGFyZSBhdCB0aGUgdGltZSB0aGUgTFVTREJvcnJvd2luZ0ZlZVBhaWQgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHBvb2xTaGFyZTogbnVtYmVyO1xuICAvKipcbiAgICogUG9ydGlvbiBvZiB0aGUgbHVzZCBmZWUgdGhhdCB3YXMgZWFybmVkXG4gICAqL1xuICBlYXJuZWRQb3J0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVuaXggdGltZXN0YW1wIGluIHNlY29uZHMgd2hlbiB0aGUgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEYXRlIG9iamVjdCB3aGVuIHRoZSBldmVudCB3YXMgZW1pdHRlZFxuICAgKi9cbiAgZGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50IGl0c2VsZlxuICAgKi9cbiAgZXZlbnQ6IEV2ZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgYmxvY2sgdGhlIGV2ZW50IHRvb2sgcGxhY2UgaW5cbiAgICovXG4gIGJsb2NrOiBCbG9jaztcbn1cbmludGVyZmFjZSBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMge1xuICBhY2NvdW50OiBgMHgke3N0cmluZ31gO1xufVxuXG5jb25zdCB0aFN0eWxlID0ge1xuICBwYWRkaW5nOiBcIjVweCAyMHB4XCIsXG59O1xuY29uc3QgdGRTdHlsZTogQ1NTUHJvcGVydGllcyA9IHsgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfTtcbmV4cG9ydCBmdW5jdGlvbiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlKHtcbiAgYWNjb3VudCxcbn06IExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVQcm9wcykge1xuICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mb3MgPSB1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyhhY2NvdW50KTtcbiAgcmV0dXJuIChcbiAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6IFwiNzUlXCIgfX0+XG4gICAgICA8Y2FwdGlvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBUaGVyZSBoYXZlIGJlZW4gPHN0cm9uZz57Ym9ycm93aW5nRmVlUGFpZEluZm9zLmxlbmd0aH08L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50cyBzaW5jZSB0aGlzIHBhZ2UgbG9hZGVkLlxuICAgICAgPC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5CbG9jazwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5UeDwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5EYXRlPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkJvcnJvd2VyPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkZlZSBhbW91bnQgcGFpZCAoTFVTRCk8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+UG9ydGlvbiBlYXJuZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2JvcnJvd2luZ0ZlZVBhaWRJbmZvc1xuICAgICAgICAgIC5maWx0ZXIoKHsgZWFybmVkUG9ydGlvbiB9KSA9PiBlYXJuZWRQb3J0aW9uID4gMClcbiAgICAgICAgICAubWFwKCh7IGx1c2RGZWUsIGRhdGUsIGV2ZW50LCBib3Jyb3dlciwgZWFybmVkUG9ydGlvbiB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtldmVudC50cmFuc2FjdGlvbkhhc2h9PlxuICAgICAgICAgICAgICAgIHsvKiBCbG9jayBOdW1iZXIgKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5CbG9ja1VybChldmVudC5ibG9ja051bWJlcil9PlxuICAgICAgICAgICAgICAgICAgICB7ZXZlbnQuYmxvY2tOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBUeCBIYXNoICovfVxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXttYWtlRXRoZXJzY2FuVHhVcmwoZXZlbnQudHJhbnNhY3Rpb25IYXNoKX0+XG4gICAgICAgICAgICAgICAgICAgIHtldmVudC50cmFuc2FjdGlvbkhhc2guc2xpY2UoMCwgMTYpfS4uLlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICB7LyogRGF0ZSAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PlxuICAgICAgICAgICAgICAgICAge2RhdGUudG9EYXRlU3RyaW5nKCl9IEAge2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBCb3Jyb3dlciAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PnttYWtlRXRoZXJzY2FuQWRkcmVzc1VybChib3Jyb3dlcil9PC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBGZWUgYW1vdW50IHBhaWQgKExVU0QpKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT57Zm9ybWF0TFVTRExhYmVsKGx1c2RGZWUpfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICB7LyogUG9ydGlvbiBlYXJuZWQgKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT57ZWFybmVkUG9ydGlvbn08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MoYWNjb3VudDogYDB4JHtzdHJpbmd9YCkge1xuICBjb25zdCBbYm9ycm93aW5nRmVlUGFpZEluZm9zLCBzZXRCb3Jyb3dpbmdGZWVQYWlkSW5mb3NdID0gdXNlU3RhdGU8XG4gICAgQm9ycm93aW5nRmVlSW5mb1tdXG4gID4oW10pO1xuXG4gIGNvbnN0IGxxdHlTdGFraW5nID0gdXNlTGlxdWl0eVN0YWtpbmcoKTtcblxuICB1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzKGFzeW5jIChib3Jyb3dlciwgbHVzZEZlZSwgZXZlbnQpID0+IHtcbiAgICBpZiAoIWxxdHlTdGFraW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3Rha2VkTFFUWSA9IGF3YWl0IGxxdHlTdGFraW5nLnN0YWtlcyhhY2NvdW50KTtcbiAgICBjb25zdCB0b3RhbFN0YWtlZCA9IGF3YWl0IGxxdHlTdGFraW5nLnRvdGFsTFFUWVN0YWtlZCgpO1xuICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgZXZlbnQuZ2V0QmxvY2soKTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBibG9jay50aW1lc3RhbXA7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJsb2NrLnRpbWVzdGFtcCAqIDEwMDApO1xuICAgIGNvbnN0IHBvb2xTaGFyZSA9ICtmb3JtYXRFdGhlcihzdGFrZWRMUVRZKSAvICtmb3JtYXRFdGhlcih0b3RhbFN0YWtlZCk7XG4gICAgY29uc3QgZWFybmVkUG9ydGlvbiA9ICtmb3JtYXRFdGhlcihsdXNkRmVlKSAqIHBvb2xTaGFyZTtcbiAgICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mbzogQm9ycm93aW5nRmVlSW5mbyA9IHtcbiAgICAgIGJvcnJvd2VyLFxuICAgICAgYmxvY2ssXG4gICAgICB0aW1lc3RhbXAsXG4gICAgICBkYXRlLFxuICAgICAgbHVzZEZlZSxcbiAgICAgIHBvb2xTaGFyZSxcbiAgICAgIGVhcm5lZFBvcnRpb24sXG4gICAgICBldmVudCxcbiAgICB9O1xuXG4gICAgc2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zKChwcmV2U3RhdGUpID0+IFtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIGJvcnJvd2luZ0ZlZVBhaWRJbmZvLFxuICAgIF0pO1xuICB9KTtcbiAgcmV0dXJuIGJvcnJvd2luZ0ZlZVBhaWRJbmZvcztcbn1cbiJdLCJuYW1lcyI6WyJmb3JtYXRFdGhlciIsInVzZVN0YXRlIiwidXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyIsInVzZUxpcXVpdHlTdGFraW5nIiwibWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwiLCJtYWtlRXRoZXJzY2FuQmxvY2tVcmwiLCJtYWtlRXRoZXJzY2FuVHhVcmwiLCJmb3JtYXRMVVNETGFiZWwiLCJ0aFN0eWxlIiwicGFkZGluZyIsInRkU3R5bGUiLCJ0ZXh0QWxpZ24iLCJMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlIiwiYWNjb3VudCIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsInVzZVJlYWxUaW1lQm9ycm93aW5nRmVlUGFpZEluZm9zIiwidGFibGUiLCJzdHlsZSIsIndpZHRoIiwiY2FwdGlvbiIsInBhZGRpbmdCb3R0b20iLCJzdHJvbmciLCJsZW5ndGgiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsImZpbHRlciIsImVhcm5lZFBvcnRpb24iLCJtYXAiLCJsdXNkRmVlIiwiZGF0ZSIsImV2ZW50IiwiYm9ycm93ZXIiLCJ0ZCIsImEiLCJocmVmIiwiYmxvY2tOdW1iZXIiLCJ0cmFuc2FjdGlvbkhhc2giLCJzbGljZSIsInRvRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsInNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsImxxdHlTdGFraW5nIiwic3Rha2VkTFFUWSIsInN0YWtlcyIsInRvdGFsU3Rha2VkIiwidG90YWxMUVRZU3Rha2VkIiwiYmxvY2siLCJnZXRCbG9jayIsInRpbWVzdGFtcCIsIkRhdGUiLCJwb29sU2hhcmUiLCJib3Jyb3dpbmdGZWVQYWlkSW5mbyIsInByZXZTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});