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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nconst tdStyle = {\n    textAlign: \"center\",\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    \"There have been \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: borrowingFeePaidInfos.length\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 25\n                    }, this),\n                    \" \",\n                    \"LUSDBorrowingFeePaid events since this page loaded.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Borrower\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Fee amount paid (LUSD)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: thStyle,\n                            children: \"Portion earned\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfos.map((param, i)=>{\n                    let { date , event , borrower  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanBlockUrl)(event.blockNumber),\n                                    children: event.blockNumber\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanTxUrl)(event.transactionHash),\n                                    children: [\n                                        event.transactionHash.slice(0, 16),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: [\n                                    date.toDateString(),\n                                    \" @ \",\n                                    date.toLocaleTimeString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanAddressUrl)(borrower)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: totalLQTYStakedLabel\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    padding: \"5px 20px\"\n                                },\n                                children: poolSharePercentLabel\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        if (!lqtyStaking) {\n            return;\n        }\n        const stakedLQTY = await lqtyStaking.stakes(account);\n        const totalStaked = await lqtyStaking.totalLQTYStaked();\n        const block = await event.getBlock();\n        const timestamp = block.timestamp;\n        const date = new Date(block.timestamp * 1000);\n        const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(totalStaked);\n        const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(lusdFee) * poolShare;\n        const borrowingFeePaidInfo = {\n            borrower,\n            block,\n            timestamp,\n            date,\n            lusdFee,\n            poolShare,\n            earnedPortion,\n            event\n        };\n        setBorrowingFeePaidInfos((prevState)=>[\n                ...prevState,\n                borrowingFeePaidInfo\n            ]);\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUdIO0FBQ3dDO0FBQzNCO0FBTXBDO0FBeUN6QixNQUFNTyxVQUFVO0lBQ2RDLFNBQVM7QUFDWDtBQUNBLE1BQU1DLFVBQXlCO0lBQUVDLFdBQVc7SUFBVUYsU0FBUztBQUFXO0FBQ25FLFNBQVNHLDBCQUEwQixLQUVULEVBQUU7UUFGTyxFQUN4Q0MsUUFBTyxFQUN3QixHQUZTOztJQUd4QyxNQUFNQyx3QkFBd0JDLGlDQUFpQ0Y7SUFDL0QscUJBQ0UsOERBQUNHO1FBQU1DLE9BQU87WUFBRUMsT0FBTztRQUFNOzswQkFDM0IsOERBQUNDO2dCQUNDRixPQUFPO29CQUNMRyxlQUFlO2dCQUNqQjs7b0JBQ0Q7a0NBQ2lCLDhEQUFDQztrQ0FBUVAsc0JBQXNCUSxNQUFNOzs7Ozs7b0JBQVc7b0JBQUk7Ozs7Ozs7MEJBR3RFLDhEQUFDQzswQkFDQyw0RUFBQ0M7O3NDQUNDLDhEQUFDQzs0QkFBR1IsT0FBT1Q7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNpQjs0QkFBR1IsT0FBT1Q7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNpQjs0QkFBR1IsT0FBT1Q7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNpQjs0QkFBR1IsT0FBT1Q7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNpQjs0QkFBR1IsT0FBT1Q7c0NBQVM7Ozs7OztzQ0FDcEIsOERBQUNpQjs0QkFBR1IsT0FBT1Q7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ2tCOzBCQUNFWixzQkFBc0JhLEdBQUcsQ0FBQyxRQUE0QkMsSUFBTTt3QkFBakMsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRTtvQkFDbkQscUJBQ0UsOERBQUNQOzswQ0FFQyw4REFBQ1E7Z0NBQUdmLE9BQU9QOzBDQUNULDRFQUFDdUI7b0NBQUVDLE1BQU01QixpRUFBcUJBLENBQUN3QixNQUFNSyxXQUFXOzhDQUM3Q0wsTUFBTUssV0FBVzs7Ozs7Ozs7Ozs7MENBSXRCLDhEQUFDSDtnQ0FBR2YsT0FBT1A7MENBQ1QsNEVBQUN1QjtvQ0FBRUMsTUFBTTNCLDhEQUFrQkEsQ0FBQ3VCLE1BQU1NLGVBQWU7O3dDQUM5Q04sTUFBTU0sZUFBZSxDQUFDQyxLQUFLLENBQUMsR0FBRzt3Q0FBSTs7Ozs7Ozs7Ozs7OzBDQUl4Qyw4REFBQ0w7Z0NBQUdmLE9BQU9QOztvQ0FDUm1CLEtBQUtTLFlBQVk7b0NBQUc7b0NBQUlULEtBQUtVLGtCQUFrQjs7Ozs7OzswQ0FHbEQsOERBQUNQO2dDQUFHZixPQUFPUDswQ0FBVUwsbUVBQXVCQSxDQUFDMEI7Ozs7OzswQ0FFN0MsOERBQUNDO2dDQUFHZixPQUFPO29DQUFFTixXQUFXO29DQUFVRixTQUFTO2dDQUFXOzBDQUNuRCtCOzs7Ozs7MENBR0gsOERBQUNSO2dDQUFHZixPQUFPO29DQUFFTixXQUFXO29DQUFVRixTQUFTO2dDQUFXOzBDQUNuRGdDOzs7Ozs7Ozs7Ozs7Z0JBSVQ7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0E1RGU3Qjs7UUFHZ0JHOzs7S0FIaEJIO0FBOERoQixTQUFTRyxpQ0FBaUNGLE9BQXNCLEVBQUU7O0lBQ2hFLE1BQU0sQ0FBQ0MsdUJBQXVCNEIseUJBQXlCLEdBQUd4QywrQ0FBUUEsQ0FFaEUsRUFBRTtJQUVKLE1BQU15QyxjQUFjdkMseUVBQWlCQTtJQUVyQ0Qsb0dBQXFDQSxDQUFDLE9BQU80QixVQUFVYSxTQUFTZCxRQUFVO1FBQ3hFLElBQUksQ0FBQ2EsYUFBYTtZQUNoQjtRQUNGLENBQUM7UUFFRCxNQUFNRSxhQUFhLE1BQU1GLFlBQVlHLE1BQU0sQ0FBQ2pDO1FBQzVDLE1BQU1rQyxjQUFjLE1BQU1KLFlBQVlLLGVBQWU7UUFDckQsTUFBTUMsUUFBUSxNQUFNbkIsTUFBTW9CLFFBQVE7UUFDbEMsTUFBTUMsWUFBWUYsTUFBTUUsU0FBUztRQUNqQyxNQUFNdEIsT0FBTyxJQUFJdUIsS0FBS0gsTUFBTUUsU0FBUyxHQUFHO1FBQ3hDLE1BQU1FLFlBQVksQ0FBQ3BELGlFQUFXQSxDQUFDNEMsY0FBYyxDQUFDNUMsaUVBQVdBLENBQUM4QztRQUMxRCxNQUFNTyxnQkFBZ0IsQ0FBQ3JELGlFQUFXQSxDQUFDMkMsV0FBV1M7UUFDOUMsTUFBTUUsdUJBQXlDO1lBQzdDeEI7WUFDQWtCO1lBQ0FFO1lBQ0F0QjtZQUNBZTtZQUNBUztZQUNBQztZQUNBeEI7UUFDRjtRQUVBWSx5QkFBeUIsQ0FBQ2MsWUFBYzttQkFDbkNBO2dCQUNIRDthQUNEO0lBQ0g7SUFDQSxPQUFPekM7QUFDVDtJQXBDU0M7O1FBS2FYLHFFQUFpQkE7UUFFckNELGdHQUFxQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpcXVpdHkvTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlLnRzeD9hMzI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCI7XG5pbXBvcnQgeyBCaWdOdW1iZXIsIEV2ZW50IH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgQmxvY2sgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYWJzdHJhY3QtcHJvdmlkZXJcIjtcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9ib3Jyb3dlck9wZXJhdGlvbnNcIjtcbmltcG9ydCB7IHVzZUxpcXVpdHlTdGFraW5nIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9scXR5U3Rha2luZ1wiO1xuaW1wb3J0IHsgTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVJvdyB9IGZyb20gXCIuL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVSb3dcIjtcbmltcG9ydCB7XG4gIG1ha2VFdGhlcnNjYW5BZGRyZXNzVXJsLFxuICBtYWtlRXRoZXJzY2FuQmxvY2tVcmwsXG4gIG1ha2VFdGhlcnNjYW5UeFVybCxcbn0gZnJvbSBcIi4uLy4uL2V0aGVyc2NhblwiO1xuXG5pbnRlcmZhY2UgQm9ycm93aW5nRmVlSW5mbyB7XG4gIGJvcnJvd2VyOiBgMHgke3N0cmluZ31gO1xuICAvKipcbiAgICogVGhlIGZlZSB0aGUgYm9ycm93ZXIgcGFpZFxuICAgKi9cbiAgbHVzZEZlZTogQmlnTnVtYmVyO1xuICAvKipcbiAgICogUG9vbCBzaGFyZSBhdCB0aGUgdGltZSB0aGUgTFVTREJvcnJvd2luZ0ZlZVBhaWQgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHBvb2xTaGFyZTogbnVtYmVyO1xuICAvKipcbiAgICogUG9ydGlvbiBvZiB0aGUgbHVzZCBmZWUgdGhhdCB3YXMgZWFybmVkXG4gICAqL1xuICBlYXJuZWRQb3J0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVuaXggdGltZXN0YW1wIGluIHNlY29uZHMgd2hlbiB0aGUgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEYXRlIG9iamVjdCB3aGVuIHRoZSBldmVudCB3YXMgZW1pdHRlZFxuICAgKi9cbiAgZGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50IGl0c2VsZlxuICAgKi9cbiAgZXZlbnQ6IEV2ZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgYmxvY2sgdGhlIGV2ZW50IHRvb2sgcGxhY2UgaW5cbiAgICovXG4gIGJsb2NrOiBCbG9jaztcbn1cbmludGVyZmFjZSBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMge1xuICBhY2NvdW50OiBgMHgke3N0cmluZ31gO1xufVxuXG5jb25zdCB0aFN0eWxlID0ge1xuICBwYWRkaW5nOiBcIjVweCAyMHB4XCIsXG59O1xuY29uc3QgdGRTdHlsZTogQ1NTUHJvcGVydGllcyA9IHsgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfTtcbmV4cG9ydCBmdW5jdGlvbiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlKHtcbiAgYWNjb3VudCxcbn06IExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGVQcm9wcykge1xuICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mb3MgPSB1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyhhY2NvdW50KTtcbiAgcmV0dXJuIChcbiAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6IFwiNzUlXCIgfX0+XG4gICAgICA8Y2FwdGlvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBUaGVyZSBoYXZlIGJlZW4gPHN0cm9uZz57Ym9ycm93aW5nRmVlUGFpZEluZm9zLmxlbmd0aH08L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50cyBzaW5jZSB0aGlzIHBhZ2UgbG9hZGVkLlxuICAgICAgPC9jYXB0aW9uPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5CbG9jazwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5UeDwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5EYXRlPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkJvcnJvd2VyPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkZlZSBhbW91bnQgcGFpZCAoTFVTRCk8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+UG9ydGlvbiBlYXJuZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2JvcnJvd2luZ0ZlZVBhaWRJbmZvcy5tYXAoKHsgZGF0ZSwgZXZlbnQsIGJvcnJvd2VyIH0sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICB7LyogQmxvY2sgTnVtYmVyICovfVxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5CbG9ja1VybChldmVudC5ibG9ja051bWJlcil9PlxuICAgICAgICAgICAgICAgICAge2V2ZW50LmJsb2NrTnVtYmVyfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgey8qIFR4IEhhc2ggKi99XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bWFrZUV0aGVyc2NhblR4VXJsKGV2ZW50LnRyYW5zYWN0aW9uSGFzaCl9PlxuICAgICAgICAgICAgICAgICAge2V2ZW50LnRyYW5zYWN0aW9uSGFzaC5zbGljZSgwLCAxNil9Li4uXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICB7LyogRGF0ZSAqL31cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfT5cbiAgICAgICAgICAgICAgICB7ZGF0ZS50b0RhdGVTdHJpbmcoKX0gQCB7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgey8qIEJvcnJvd2VyICovfVxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PnttYWtlRXRoZXJzY2FuQWRkcmVzc1VybChib3Jyb3dlcil9PC90ZD5cbiAgICAgICAgICAgICAgey8qIFRvdGFsIExRVFkgc3Rha2VkIGluIHBvb2wgKi99XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiNXB4IDIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICB7dG90YWxMUVRZU3Rha2VkTGFiZWx9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIHsvKiBIaXN0b3JpY2FsIHBvb2wgc2hhcmUgKi99XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiNXB4IDIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICB7cG9vbFNoYXJlUGVyY2VudExhYmVsfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MoYWNjb3VudDogYDB4JHtzdHJpbmd9YCkge1xuICBjb25zdCBbYm9ycm93aW5nRmVlUGFpZEluZm9zLCBzZXRCb3Jyb3dpbmdGZWVQYWlkSW5mb3NdID0gdXNlU3RhdGU8XG4gICAgQm9ycm93aW5nRmVlSW5mb1tdXG4gID4oW10pO1xuXG4gIGNvbnN0IGxxdHlTdGFraW5nID0gdXNlTGlxdWl0eVN0YWtpbmcoKTtcblxuICB1c2VSZWFsdGltZUxVU0RCb3Jyb3dpbmdGZWVQYWlkRXZlbnRzKGFzeW5jIChib3Jyb3dlciwgbHVzZEZlZSwgZXZlbnQpID0+IHtcbiAgICBpZiAoIWxxdHlTdGFraW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3Rha2VkTFFUWSA9IGF3YWl0IGxxdHlTdGFraW5nLnN0YWtlcyhhY2NvdW50KTtcbiAgICBjb25zdCB0b3RhbFN0YWtlZCA9IGF3YWl0IGxxdHlTdGFraW5nLnRvdGFsTFFUWVN0YWtlZCgpO1xuICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgZXZlbnQuZ2V0QmxvY2soKTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBibG9jay50aW1lc3RhbXA7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJsb2NrLnRpbWVzdGFtcCAqIDEwMDApO1xuICAgIGNvbnN0IHBvb2xTaGFyZSA9ICtmb3JtYXRFdGhlcihzdGFrZWRMUVRZKSAvICtmb3JtYXRFdGhlcih0b3RhbFN0YWtlZCk7XG4gICAgY29uc3QgZWFybmVkUG9ydGlvbiA9ICtmb3JtYXRFdGhlcihsdXNkRmVlKSAqIHBvb2xTaGFyZTtcbiAgICBjb25zdCBib3Jyb3dpbmdGZWVQYWlkSW5mbzogQm9ycm93aW5nRmVlSW5mbyA9IHtcbiAgICAgIGJvcnJvd2VyLFxuICAgICAgYmxvY2ssXG4gICAgICB0aW1lc3RhbXAsXG4gICAgICBkYXRlLFxuICAgICAgbHVzZEZlZSxcbiAgICAgIHBvb2xTaGFyZSxcbiAgICAgIGVhcm5lZFBvcnRpb24sXG4gICAgICBldmVudCxcbiAgICB9O1xuXG4gICAgc2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zKChwcmV2U3RhdGUpID0+IFtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIGJvcnJvd2luZ0ZlZVBhaWRJbmZvLFxuICAgIF0pO1xuICB9KTtcbiAgcmV0dXJuIGJvcnJvd2luZ0ZlZVBhaWRJbmZvcztcbn1cbiJdLCJuYW1lcyI6WyJmb3JtYXRFdGhlciIsInVzZVN0YXRlIiwidXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyIsInVzZUxpcXVpdHlTdGFraW5nIiwibWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwiLCJtYWtlRXRoZXJzY2FuQmxvY2tVcmwiLCJtYWtlRXRoZXJzY2FuVHhVcmwiLCJ0aFN0eWxlIiwicGFkZGluZyIsInRkU3R5bGUiLCJ0ZXh0QWxpZ24iLCJMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlIiwiYWNjb3VudCIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsInVzZVJlYWxUaW1lQm9ycm93aW5nRmVlUGFpZEluZm9zIiwidGFibGUiLCJzdHlsZSIsIndpZHRoIiwiY2FwdGlvbiIsInBhZGRpbmdCb3R0b20iLCJzdHJvbmciLCJsZW5ndGgiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsImkiLCJkYXRlIiwiZXZlbnQiLCJib3Jyb3dlciIsInRkIiwiYSIsImhyZWYiLCJibG9ja051bWJlciIsInRyYW5zYWN0aW9uSGFzaCIsInNsaWNlIiwidG9EYXRlU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwidG90YWxMUVRZU3Rha2VkTGFiZWwiLCJwb29sU2hhcmVQZXJjZW50TGFiZWwiLCJzZXRCb3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJscXR5U3Rha2luZyIsImx1c2RGZWUiLCJzdGFrZWRMUVRZIiwic3Rha2VzIiwidG90YWxTdGFrZWQiLCJ0b3RhbExRVFlTdGFrZWQiLCJibG9jayIsImdldEJsb2NrIiwidGltZXN0YW1wIiwiRGF0ZSIsInBvb2xTaGFyZSIsImVhcm5lZFBvcnRpb24iLCJib3Jyb3dpbmdGZWVQYWlkSW5mbyIsInByZXZTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});