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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _base_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/format */ \"./src/base/format.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nconst tdStyle = {\n    textAlign: \"center\",\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    \"There have been \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: borrowingFeePaidInfos.length\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 25\n                    }, this),\n                    \" \",\n                    \"LUSDBorrowingFeePaid events since this page loaded.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfos.filter((param)=>{\n                    let { earnedPortion  } = param;\n                    return earnedPortion > 0;\n                }).map((param, i)=>{\n                    let { lusdFee , date , event , borrower , earnedPortion  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanBlockUrl)(event.blockNumber),\n                                    children: event.blockNumber\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanTxUrl)(event.transactionHash),\n                                    children: [\n                                        event.transactionHash.slice(0, 16),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: [\n                                    date.toDateString(),\n                                    \" @ \",\n                                    date.toLocaleTimeString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanAddressUrl)(borrower)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_base_format__WEBPACK_IMPORTED_MODULE_5__.formatLUSDLabel)(lusdFee)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: earnedPortion\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        if (!lqtyStaking) {\n            return;\n        }\n        const stakedLQTY = await lqtyStaking.stakes(account);\n        const totalStaked = await lqtyStaking.totalLQTYStaked();\n        const block = await event.getBlock();\n        const timestamp = block.timestamp;\n        const date = new Date(block.timestamp * 1000);\n        const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(totalStaked);\n        const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(lusdFee) * poolShare;\n        const borrowingFeePaidInfo = {\n            borrower,\n            block,\n            timestamp,\n            date,\n            lusdFee,\n            poolShare,\n            earnedPortion,\n            event\n        };\n        setBorrowingFeePaidInfos((prevState)=>[\n                ...prevState,\n                borrowingFeePaidInfo\n            ]);\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFHSDtBQUN3QztBQUMzQjtBQU1wQztBQUMyQjtBQXlDcEQsTUFBTVEsVUFBVTtJQUNkQyxTQUFTO0FBQ1g7QUFDQSxNQUFNQyxVQUF5QjtJQUFFQyxXQUFXO0lBQVVGLFNBQVM7QUFBVztBQUNuRSxTQUFTRywwQkFBMEIsS0FFVCxFQUFFO1FBRk8sRUFDeENDLFFBQU8sRUFDd0IsR0FGUzs7SUFHeEMsTUFBTUMsd0JBQXdCQyxpQ0FBaUNGO0lBQy9ELHFCQUNFLDhEQUFDRztRQUFNQyxPQUFPO1lBQUVDLE9BQU87UUFBTTs7MEJBQzNCLDhEQUFDQztnQkFDQ0YsT0FBTztvQkFDTEcsZUFBZTtnQkFDakI7O29CQUNEO2tDQUNpQiw4REFBQ0M7a0NBQVFQLHNCQUFzQlEsTUFBTTs7Ozs7O29CQUFXO29CQUFJOzs7Ozs7OzBCQUd0RSw4REFBQ0M7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDaUI7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDaUI7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDaUI7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDaUI7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7c0NBQ3BCLDhEQUFDaUI7NEJBQUdSLE9BQU9UO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNrQjswQkFDRVosc0JBQ0VhLE1BQU0sQ0FBQyxTQUF1QkM7d0JBQXRCLEVBQUVBLGNBQWEsRUFBRTsyQkFBS0EsZ0JBQWdCO2dCQUFBLEdBQzlDQyxHQUFHLENBQUMsUUFBb0RDLElBQU07d0JBQXpELEVBQUVDLFFBQU8sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRU4sY0FBYSxFQUFFO29CQUNyRCxxQkFDRSw4REFBQ0o7OzBDQUVDLDhEQUFDVztnQ0FBR2xCLE9BQU9QOzBDQUNULDRFQUFDMEI7b0NBQUVDLE1BQU1oQyxpRUFBcUJBLENBQUM0QixNQUFNSyxXQUFXOzhDQUM3Q0wsTUFBTUssV0FBVzs7Ozs7Ozs7Ozs7MENBS3RCLDhEQUFDSDtnQ0FBR2xCLE9BQU9QOzBDQUNULDRFQUFDMEI7b0NBQUVDLE1BQU0vQiw4REFBa0JBLENBQUMyQixNQUFNTSxlQUFlOzt3Q0FDOUNOLE1BQU1NLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDLEdBQUc7d0NBQUk7Ozs7Ozs7Ozs7OzswQ0FLeEMsOERBQUNMO2dDQUFHbEIsT0FBT1A7O29DQUNSc0IsS0FBS1MsWUFBWTtvQ0FBRztvQ0FBSVQsS0FBS1Usa0JBQWtCOzs7Ozs7OzBDQUlsRCw4REFBQ1A7Z0NBQUdsQixPQUFPUDswQ0FBVU4sbUVBQXVCQSxDQUFDOEI7Ozs7OzswQ0FHN0MsOERBQUNDO2dDQUFHbEIsT0FBT1A7MENBQVVILDZEQUFlQSxDQUFDd0I7Ozs7OzswQ0FHckMsOERBQUNJO2dDQUFHbEIsT0FBT1A7MENBQVVrQjs7Ozs7Ozs7Ozs7O2dCQUczQjs7Ozs7Ozs7Ozs7O0FBSVYsQ0FBQztHQS9EZWhCOztRQUdnQkc7OztLQUhoQkg7QUFpRWhCLFNBQVNHLGlDQUFpQ0YsT0FBc0IsRUFBRTs7SUFDaEUsTUFBTSxDQUFDQyx1QkFBdUI2Qix5QkFBeUIsR0FBRzFDLCtDQUFRQSxDQUVoRSxFQUFFO0lBRUosTUFBTTJDLGNBQWN6Qyx5RUFBaUJBO0lBRXJDRCxvR0FBcUNBLENBQUMsT0FBT2dDLFVBQVVILFNBQVNFLFFBQVU7UUFDeEUsSUFBSSxDQUFDVyxhQUFhO1lBQ2hCO1FBQ0YsQ0FBQztRQUVELE1BQU1DLGFBQWEsTUFBTUQsWUFBWUUsTUFBTSxDQUFDakM7UUFDNUMsTUFBTWtDLGNBQWMsTUFBTUgsWUFBWUksZUFBZTtRQUNyRCxNQUFNQyxRQUFRLE1BQU1oQixNQUFNaUIsUUFBUTtRQUNsQyxNQUFNQyxZQUFZRixNQUFNRSxTQUFTO1FBQ2pDLE1BQU1uQixPQUFPLElBQUlvQixLQUFLSCxNQUFNRSxTQUFTLEdBQUc7UUFDeEMsTUFBTUUsWUFBWSxDQUFDckQsaUVBQVdBLENBQUM2QyxjQUFjLENBQUM3QyxpRUFBV0EsQ0FBQytDO1FBQzFELE1BQU1uQixnQkFBZ0IsQ0FBQzVCLGlFQUFXQSxDQUFDK0IsV0FBV3NCO1FBQzlDLE1BQU1DLHVCQUF5QztZQUM3Q3BCO1lBQ0FlO1lBQ0FFO1lBQ0FuQjtZQUNBRDtZQUNBc0I7WUFDQXpCO1lBQ0FLO1FBQ0Y7UUFFQVUseUJBQXlCLENBQUNZLFlBQWM7bUJBQ25DQTtnQkFDSEQ7YUFDRDtJQUNIO0lBQ0EsT0FBT3hDO0FBQ1Q7SUFwQ1NDOztRQUthWixxRUFBaUJBO1FBRXJDRCxnR0FBcUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saXF1aXR5L0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUvTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZS50c3g/YTMyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC91bml0c1wiO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBFdmVudCB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IEJsb2NrIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2Fic3RyYWN0LXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyB9IGZyb20gXCIuLi9jb250cmFjdHMvYm9ycm93ZXJPcGVyYXRpb25zXCI7XG5pbXBvcnQgeyB1c2VMaXF1aXR5U3Rha2luZyB9IGZyb20gXCIuLi9jb250cmFjdHMvbHF0eVN0YWtpbmdcIjtcbmltcG9ydCB7IExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVSb3cgfSBmcm9tIFwiLi9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUm93XCI7XG5pbXBvcnQge1xuICBtYWtlRXRoZXJzY2FuQWRkcmVzc1VybCxcbiAgbWFrZUV0aGVyc2NhbkJsb2NrVXJsLFxuICBtYWtlRXRoZXJzY2FuVHhVcmwsXG59IGZyb20gXCIuLi8uLi9ldGhlcnNjYW5cIjtcbmltcG9ydCB7IGZvcm1hdExVU0RMYWJlbCB9IGZyb20gXCIuLi8uLi9iYXNlL2Zvcm1hdFwiO1xuXG5pbnRlcmZhY2UgQm9ycm93aW5nRmVlSW5mbyB7XG4gIGJvcnJvd2VyOiBgMHgke3N0cmluZ31gO1xuICAvKipcbiAgICogVGhlIGZlZSB0aGUgYm9ycm93ZXIgcGFpZFxuICAgKi9cbiAgbHVzZEZlZTogQmlnTnVtYmVyO1xuICAvKipcbiAgICogUG9vbCBzaGFyZSBhdCB0aGUgdGltZSB0aGUgTFVTREJvcnJvd2luZ0ZlZVBhaWQgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHBvb2xTaGFyZTogbnVtYmVyO1xuICAvKipcbiAgICogUG9ydGlvbiBvZiB0aGUgbHVzZCBmZWUgdGhhdCB3YXMgZWFybmVkXG4gICAqL1xuICBlYXJuZWRQb3J0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVuaXggdGltZXN0YW1wIGluIHNlY29uZHMgd2hlbiB0aGUgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEYXRlIG9iamVjdCB3aGVuIHRoZSBldmVudCB3YXMgZW1pdHRlZFxuICAgKi9cbiAgZGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50IGl0c2VsZlxuICAgKi9cbiAgZXZlbnQ6IEV2ZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgYmxvY2sgdGhlIGV2ZW50IHRvb2sgcGxhY2UgaW5cbiAgICovXG4gIGJsb2NrOiBCbG9jaztcbn1cbmludGVyZmFjZSBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMge1xuICBhY2NvdW50OiBgMHgke3N0cmluZ31gO1xufVxuXG5jb25zdCB0aFN0eWxlID0ge1xuICBwYWRkaW5nOiBcIjVweCAyMHB4XCIsXG59O1xuY29uc3QgdGRTdHlsZTogQ1NTUHJvcGVydGllcyA9IHsgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfTtcbmV4cG9ydCBmdW5jdGlvbiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlKHtcbiAgYWNjb3VudCxcbn06IExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVQcm9wcykge1xuICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mb3MgPSB1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyhhY2NvdW50KTtcbiAgcmV0dXJuIChcbiAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6IFwiNzUlXCIgfX0+XG4gICAgICA8Y2FwdGlvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBUaGVyZSBoYXZlIGJlZW4gPHN0cm9uZz57Ym9ycm93aW5nRmVlUGFpZEluZm9zLmxlbmd0aH08L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50cyBzaW5jZSB0aGlzIHBhZ2UgbG9hZGVkLlxuICAgICAgPC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5CbG9jazwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5UeDwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5EYXRlPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkJvcnJvd2VyPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkZlZSBhbW91bnQgcGFpZCAoTFVTRCk8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+UG9ydGlvbiBlYXJuZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2JvcnJvd2luZ0ZlZVBhaWRJbmZvc1xuICAgICAgICAgIC5maWx0ZXIoKHsgZWFybmVkUG9ydGlvbiB9KSA9PiBlYXJuZWRQb3J0aW9uID4gMClcbiAgICAgICAgICAubWFwKCh7IGx1c2RGZWUsIGRhdGUsIGV2ZW50LCBib3Jyb3dlciwgZWFybmVkUG9ydGlvbiB9LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgey8qIEJsb2NrIE51bWJlciAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bWFrZUV0aGVyc2NhbkJsb2NrVXJsKGV2ZW50LmJsb2NrTnVtYmVyKX0+XG4gICAgICAgICAgICAgICAgICAgIHtldmVudC5ibG9ja051bWJlcn1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgey8qIFR4IEhhc2ggKi99XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5UeFVybChldmVudC50cmFuc2FjdGlvbkhhc2gpfT5cbiAgICAgICAgICAgICAgICAgICAge2V2ZW50LnRyYW5zYWN0aW9uSGFzaC5zbGljZSgwLCAxNil9Li4uXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBEYXRlICovfVxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICB7ZGF0ZS50b0RhdGVTdHJpbmcoKX0gQCB7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgey8qIEJvcnJvd2VyICovfVxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+e21ha2VFdGhlcnNjYW5BZGRyZXNzVXJsKGJvcnJvd2VyKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgey8qIEZlZSBhbW91bnQgcGFpZCAoTFVTRCkqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9Pntmb3JtYXRMVVNETGFiZWwobHVzZEZlZSl9PC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBQb3J0aW9uIGVhcm5lZCAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PntlYXJuZWRQb3J0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyhhY2NvdW50OiBgMHgke3N0cmluZ31gKSB7XG4gIGNvbnN0IFtib3Jyb3dpbmdGZWVQYWlkSW5mb3MsIHNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvc10gPSB1c2VTdGF0ZTxcbiAgICBCb3Jyb3dpbmdGZWVJbmZvW11cbiAgPihbXSk7XG5cbiAgY29uc3QgbHF0eVN0YWtpbmcgPSB1c2VMaXF1aXR5U3Rha2luZygpO1xuXG4gIHVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMoYXN5bmMgKGJvcnJvd2VyLCBsdXNkRmVlLCBldmVudCkgPT4ge1xuICAgIGlmICghbHF0eVN0YWtpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFrZWRMUVRZID0gYXdhaXQgbHF0eVN0YWtpbmcuc3Rha2VzKGFjY291bnQpO1xuICAgIGNvbnN0IHRvdGFsU3Rha2VkID0gYXdhaXQgbHF0eVN0YWtpbmcudG90YWxMUVRZU3Rha2VkKCk7XG4gICAgY29uc3QgYmxvY2sgPSBhd2FpdCBldmVudC5nZXRCbG9jaygpO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYmxvY2sudGltZXN0YW1wICogMTAwMCk7XG4gICAgY29uc3QgcG9vbFNoYXJlID0gK2Zvcm1hdEV0aGVyKHN0YWtlZExRVFkpIC8gK2Zvcm1hdEV0aGVyKHRvdGFsU3Rha2VkKTtcbiAgICBjb25zdCBlYXJuZWRQb3J0aW9uID0gK2Zvcm1hdEV0aGVyKGx1c2RGZWUpICogcG9vbFNoYXJlO1xuICAgIGNvbnN0IGJvcnJvd2luZ0ZlZVBhaWRJbmZvOiBCb3Jyb3dpbmdGZWVJbmZvID0ge1xuICAgICAgYm9ycm93ZXIsXG4gICAgICBibG9jayxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIGRhdGUsXG4gICAgICBsdXNkRmVlLFxuICAgICAgcG9vbFNoYXJlLFxuICAgICAgZWFybmVkUG9ydGlvbixcbiAgICAgIGV2ZW50LFxuICAgIH07XG5cbiAgICBzZXRCb3Jyb3dpbmdGZWVQYWlkSW5mb3MoKHByZXZTdGF0ZSkgPT4gW1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgYm9ycm93aW5nRmVlUGFpZEluZm8sXG4gICAgXSk7XG4gIH0pO1xuICByZXR1cm4gYm9ycm93aW5nRmVlUGFpZEluZm9zO1xufVxuIl0sIm5hbWVzIjpbImZvcm1hdEV0aGVyIiwidXNlU3RhdGUiLCJ1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzIiwidXNlTGlxdWl0eVN0YWtpbmciLCJtYWtlRXRoZXJzY2FuQWRkcmVzc1VybCIsIm1ha2VFdGhlcnNjYW5CbG9ja1VybCIsIm1ha2VFdGhlcnNjYW5UeFVybCIsImZvcm1hdExVU0RMYWJlbCIsInRoU3R5bGUiLCJwYWRkaW5nIiwidGRTdHlsZSIsInRleHRBbGlnbiIsIkxVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUiLCJhY2NvdW50IiwiYm9ycm93aW5nRmVlUGFpZEluZm9zIiwidXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJ0YWJsZSIsInN0eWxlIiwid2lkdGgiLCJjYXB0aW9uIiwicGFkZGluZ0JvdHRvbSIsInN0cm9uZyIsImxlbmd0aCIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwiZmlsdGVyIiwiZWFybmVkUG9ydGlvbiIsIm1hcCIsImkiLCJsdXNkRmVlIiwiZGF0ZSIsImV2ZW50IiwiYm9ycm93ZXIiLCJ0ZCIsImEiLCJocmVmIiwiYmxvY2tOdW1iZXIiLCJ0cmFuc2FjdGlvbkhhc2giLCJzbGljZSIsInRvRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsInNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsImxxdHlTdGFraW5nIiwic3Rha2VkTFFUWSIsInN0YWtlcyIsInRvdGFsU3Rha2VkIiwidG90YWxMUVRZU3Rha2VkIiwiYmxvY2siLCJnZXRCbG9jayIsInRpbWVzdGFtcCIsIkRhdGUiLCJwb29sU2hhcmUiLCJib3Jyb3dpbmdGZWVQYWlkSW5mbyIsInByZXZTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});