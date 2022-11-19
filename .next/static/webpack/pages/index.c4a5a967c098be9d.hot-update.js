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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LUSDBorrowingFeePaidTable\": function() { return /* binding */ LUSDBorrowingFeePaidTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _base_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/format */ \"./src/base/format.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst thStyle = {\n    padding: \"5px 20px\"\n};\nconst tdStyle = {\n    textAlign: \"center\",\n    padding: \"5px 20px\"\n};\nfunction LUSDBorrowingFeePaidTable(param) {\n    let { account  } = param;\n    _s();\n    const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(account);\n    const borrowingFeePaidInfosWithNonZeroEarnings = borrowingFeePaidInfos.filter((param)=>{\n        let { earnedPortion  } = param;\n        return earnedPortion > 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"There has been a total of\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: borrowingFeePaidInfos.length\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            \" LUSDBorrowingFeePaid events since this page loaded.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Of this total, there are\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: borrowingFeePaidInfosWithNonZeroEarnings.length\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            \"events with non-zero earnings.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: borrowingFeePaidInfosWithNonZeroEarnings.map((param)=>{\n                    let { lusdFee , date , event , borrower , earnedPortion  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanBlockUrl)(event.blockNumber),\n                                    children: event.blockNumber\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanTxUrl)(event.transactionHash),\n                                    children: [\n                                        event.transactionHash.slice(0, 16),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: [\n                                    date.toDateString(),\n                                    \" @ \",\n                                    date.toLocaleTimeString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_4__.makeEtherscanAddressUrl)(borrower),\n                                    children: borrower\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: (0,_base_format__WEBPACK_IMPORTED_MODULE_5__.formatLUSDLabel)(lusdFee)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                style: tdStyle,\n                                children: earnedPortion.toFixed(6)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, event.transactionHash, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(LUSDBorrowingFeePaidTable, \"qshIBilRXuPwMMZSbkJ7BUml0Zk=\", false, function() {\n    return [\n        useRealTimeBorrowingFeePaidInfos\n    ];\n});\n_c = LUSDBorrowingFeePaidTable;\nfunction useRealTimeBorrowingFeePaidInfos(account) {\n    _s1();\n    const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const lqtyStaking = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking)();\n    (0,_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents)(async (borrower, lusdFee, event)=>{\n        if (!lqtyStaking) {\n            return;\n        }\n        const stakedLQTY = await lqtyStaking.stakes(account);\n        const totalStaked = await lqtyStaking.totalLQTYStaked();\n        const block = await event.getBlock();\n        const timestamp = block.timestamp;\n        const date = new Date(block.timestamp * 1000);\n        const poolShare = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(stakedLQTY) / +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(totalStaked);\n        const earnedPortion = +(0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(lusdFee) * poolShare;\n        const borrowingFeePaidInfo = {\n            borrower,\n            block,\n            timestamp,\n            date,\n            lusdFee,\n            poolShare,\n            earnedPortion,\n            event\n        };\n        setBorrowingFeePaidInfos((prevState)=>[\n                ...prevState,\n                borrowingFeePaidInfo\n            ]);\n    });\n    return borrowingFeePaidInfos;\n}\n_s1(useRealTimeBorrowingFeePaidInfos, \"ZHzX95QrVVMaUJq02/Zdss6RLbA=\", false, function() {\n    return [\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useLiquityStaking,\n        _contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_2__.useRealtimeLUSDBorrowingFeePaidEvents\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LUSDBorrowingFeePaidTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlL0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFHSDtBQUN3QztBQUMzQjtBQUtwQztBQUM0QztBQXlDckUsTUFBTVEsVUFBVTtJQUNkQyxTQUFTO0FBQ1g7QUFDQSxNQUFNQyxVQUF5QjtJQUFFQyxXQUFXO0lBQVVGLFNBQVM7QUFBVztBQUNuRSxTQUFTRywwQkFBMEIsS0FFVCxFQUFFO1FBRk8sRUFDeENDLFFBQU8sRUFDd0IsR0FGUzs7SUFHeEMsTUFBTUMsd0JBQXdCQyxpQ0FBaUNGO0lBQy9ELE1BQU1HLDJDQUEyQ0Ysc0JBQXNCRyxNQUFNLENBQzNFLFNBQXVCQztZQUF0QixFQUFFQSxjQUFhLEVBQUU7ZUFBS0EsZ0JBQWdCO0lBQUE7SUFHekMscUJBQ0UsOERBQUNDO1FBQU1DLE9BQU87WUFBRUMsT0FBTztRQUFNOzswQkFDM0IsOERBQUNDO2dCQUNDRixPQUFPO29CQUNMRyxlQUFlO2dCQUNqQjs7a0NBRUEsOERBQUNDOzs0QkFBRTs0QkFDeUI7MENBQzFCLDhEQUFDQzswQ0FBUVgsc0JBQXNCWSxNQUFNOzs7Ozs7NEJBQVU7Ozs7Ozs7a0NBR2pELDhEQUFDRjs7NEJBQUU7NEJBQ3dCOzBDQUN6Qiw4REFBQ0M7MENBQVFULHlDQUF5Q1UsTUFBTTs7Ozs7OzRCQUFXOzRCQUFJOzs7Ozs7Ozs7Ozs7OzBCQWMzRSw4REFBQ0M7MEJBQ0VYLHlDQUF5Q1ksR0FBRyxDQUMzQyxTQUF1RDt3QkFBdEQsRUFBRUMsUUFBTyxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFZCxjQUFhLEVBQUU7b0JBQ2hELHFCQUNFLDhEQUFDZTs7MENBRUMsOERBQUNDO2dDQUFHZCxPQUFPVjswQ0FDVCw0RUFBQ3lCO29DQUNDQyxRQUFPO29DQUNQQyxNQUFNaEMsaUVBQXFCQSxDQUFDMEIsTUFBTU8sV0FBVzs4Q0FFNUNQLE1BQU1PLFdBQVc7Ozs7Ozs7Ozs7OzBDQUt0Qiw4REFBQ0o7Z0NBQUdkLE9BQU9WOzBDQUNULDRFQUFDeUI7b0NBQ0NDLFFBQU87b0NBQ1BDLE1BQU0vQiw4REFBa0JBLENBQUN5QixNQUFNUSxlQUFlOzt3Q0FFN0NSLE1BQU1RLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDLEdBQUc7d0NBQUk7Ozs7Ozs7Ozs7OzswQ0FLeEMsOERBQUNOO2dDQUFHZCxPQUFPVjs7b0NBQ1JvQixLQUFLVyxZQUFZO29DQUFHO29DQUFJWCxLQUFLWSxrQkFBa0I7Ozs7Ozs7MENBSWxELDhEQUFDUjtnQ0FBR2QsT0FBT1Y7MENBQ1QsNEVBQUN5QjtvQ0FBRUMsUUFBTztvQ0FBU0MsTUFBTWpDLG1FQUF1QkEsQ0FBQzRCOzhDQUM5Q0E7Ozs7Ozs7Ozs7OzBDQUtMLDhEQUFDRTtnQ0FBR2QsT0FBT1Y7MENBQVVILDZEQUFlQSxDQUFDc0I7Ozs7OzswQ0FHckMsOERBQUNLO2dDQUFHZCxPQUFPVjswQ0FBVVEsY0FBY3lCLE9BQU8sQ0FBQzs7Ozs7Ozt1QkFyQ3BDWixNQUFNUSxlQUFlOzs7OztnQkF3Q2xDOzs7Ozs7Ozs7Ozs7QUFLVixDQUFDO0dBckZlM0I7O1FBR2dCRzs7O0tBSGhCSDtBQXVGaEIsU0FBU0csaUNBQWlDRixPQUFzQixFQUFFOztJQUNoRSxNQUFNLENBQUNDLHVCQUF1QjhCLHlCQUF5QixHQUFHM0MsK0NBQVFBLENBRWhFLEVBQUU7SUFFSixNQUFNNEMsY0FBYzFDLHlFQUFpQkE7SUFFckNELG9HQUFxQ0EsQ0FBQyxPQUFPOEIsVUFBVUgsU0FBU0UsUUFBVTtRQUN4RSxJQUFJLENBQUNjLGFBQWE7WUFDaEI7UUFDRixDQUFDO1FBRUQsTUFBTUMsYUFBYSxNQUFNRCxZQUFZRSxNQUFNLENBQUNsQztRQUM1QyxNQUFNbUMsY0FBYyxNQUFNSCxZQUFZSSxlQUFlO1FBQ3JELE1BQU1DLFFBQVEsTUFBTW5CLE1BQU1vQixRQUFRO1FBQ2xDLE1BQU1DLFlBQVlGLE1BQU1FLFNBQVM7UUFDakMsTUFBTXRCLE9BQU8sSUFBSXVCLEtBQUtILE1BQU1FLFNBQVMsR0FBRztRQUN4QyxNQUFNRSxZQUFZLENBQUN0RCxpRUFBV0EsQ0FBQzhDLGNBQWMsQ0FBQzlDLGlFQUFXQSxDQUFDZ0Q7UUFDMUQsTUFBTTlCLGdCQUFnQixDQUFDbEIsaUVBQVdBLENBQUM2QixXQUFXeUI7UUFDOUMsTUFBTUMsdUJBQXlDO1lBQzdDdkI7WUFDQWtCO1lBQ0FFO1lBQ0F0QjtZQUNBRDtZQUNBeUI7WUFDQXBDO1lBQ0FhO1FBQ0Y7UUFFQWEseUJBQXlCLENBQUNZLFlBQWM7bUJBQ25DQTtnQkFDSEQ7YUFDRDtJQUNIO0lBQ0EsT0FBT3pDO0FBQ1Q7SUFwQ1NDOztRQUthWixxRUFBaUJBO1FBRXJDRCxnR0FBcUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saXF1aXR5L0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUvTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZS50c3g/YTMyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC91bml0c1wiO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBFdmVudCB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IEJsb2NrIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2Fic3RyYWN0LXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyB9IGZyb20gXCIuLi9jb250cmFjdHMvYm9ycm93ZXJPcGVyYXRpb25zXCI7XG5pbXBvcnQgeyB1c2VMaXF1aXR5U3Rha2luZyB9IGZyb20gXCIuLi9jb250cmFjdHMvbHF0eVN0YWtpbmdcIjtcbmltcG9ydCB7XG4gIG1ha2VFdGhlcnNjYW5BZGRyZXNzVXJsLFxuICBtYWtlRXRoZXJzY2FuQmxvY2tVcmwsXG4gIG1ha2VFdGhlcnNjYW5UeFVybCxcbn0gZnJvbSBcIi4uLy4uL2V0aGVyc2NhblwiO1xuaW1wb3J0IHsgZm9ybWF0TFVTRExhYmVsLCBmb3JtYXRQb29sU2hhcmUgfSBmcm9tIFwiLi4vLi4vYmFzZS9mb3JtYXRcIjtcblxuaW50ZXJmYWNlIEJvcnJvd2luZ0ZlZUluZm8ge1xuICBib3Jyb3dlcjogYDB4JHtzdHJpbmd9YDtcbiAgLyoqXG4gICAqIFRoZSBmZWUgdGhlIGJvcnJvd2VyIHBhaWRcbiAgICovXG4gIGx1c2RGZWU6IEJpZ051bWJlcjtcbiAgLyoqXG4gICAqIFBvb2wgc2hhcmUgYXQgdGhlIHRpbWUgdGhlIExVU0RCb3Jyb3dpbmdGZWVQYWlkIGV2ZW50IHdhcyBlbWl0dGVkXG4gICAqL1xuICBwb29sU2hhcmU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFBvcnRpb24gb2YgdGhlIGx1c2QgZmVlIHRoYXQgd2FzIGVhcm5lZFxuICAgKi9cbiAgZWFybmVkUG9ydGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVbml4IHRpbWVzdGFtcCBpbiBzZWNvbmRzIHdoZW4gdGhlIGV2ZW50IHdhcyBlbWl0dGVkXG4gICAqL1xuICB0aW1lc3RhbXA6IG51bWJlcjtcblxuICAvKipcbiAgICogRGF0ZSBvYmplY3Qgd2hlbiB0aGUgZXZlbnQgd2FzIGVtaXR0ZWRcbiAgICovXG4gIGRhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBMVVNEQm9ycm93aW5nRmVlUGFpZCBldmVudCBpdHNlbGZcbiAgICovXG4gIGV2ZW50OiBFdmVudDtcblxuICAvKipcbiAgICogVGhlIGJsb2NrIHRoZSBldmVudCB0b29rIHBsYWNlIGluXG4gICAqL1xuICBibG9jazogQmxvY2s7XG59XG5pbnRlcmZhY2UgTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVByb3BzIHtcbiAgYWNjb3VudDogYDB4JHtzdHJpbmd9YDtcbn1cblxuY29uc3QgdGhTdHlsZSA9IHtcbiAgcGFkZGluZzogXCI1cHggMjBweFwiLFxufTtcbmNvbnN0IHRkU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH07XG5leHBvcnQgZnVuY3Rpb24gTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZSh7XG4gIGFjY291bnQsXG59OiBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlUHJvcHMpIHtcbiAgY29uc3QgYm9ycm93aW5nRmVlUGFpZEluZm9zID0gdXNlUmVhbFRpbWVCb3Jyb3dpbmdGZWVQYWlkSW5mb3MoYWNjb3VudCk7XG4gIGNvbnN0IGJvcnJvd2luZ0ZlZVBhaWRJbmZvc1dpdGhOb25aZXJvRWFybmluZ3MgPSBib3Jyb3dpbmdGZWVQYWlkSW5mb3MuZmlsdGVyKFxuICAgICh7IGVhcm5lZFBvcnRpb24gfSkgPT4gZWFybmVkUG9ydGlvbiA+IDBcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogXCI3NSVcIiB9fT5cbiAgICAgIDxjYXB0aW9uXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIGhhcyBiZWVuIGEgdG90YWwgb2Z7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Ym9ycm93aW5nRmVlUGFpZEluZm9zLmxlbmd0aH08L3N0cm9uZz4gTFVTREJvcnJvd2luZ0ZlZVBhaWRcbiAgICAgICAgICBldmVudHMgc2luY2UgdGhpcyBwYWdlIGxvYWRlZC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBPZiB0aGlzIHRvdGFsLCB0aGVyZSBhcmV7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Ym9ycm93aW5nRmVlUGFpZEluZm9zV2l0aE5vblplcm9FYXJuaW5ncy5sZW5ndGh9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgIGV2ZW50cyB3aXRoIG5vbi16ZXJvIGVhcm5pbmdzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2NhcHRpb24+XG4gICAgICB7LyogPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5CbG9jazwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5UeDwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5EYXRlPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkJvcnJvd2VyPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PkZlZSBhbW91bnQgcGFpZCAoTFVTRCk8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+UG9ydGlvbiBlYXJuZWQgKExVU0QpPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+ICovfVxuICAgICAgPHRib2R5PlxuICAgICAgICB7Ym9ycm93aW5nRmVlUGFpZEluZm9zV2l0aE5vblplcm9FYXJuaW5ncy5tYXAoXG4gICAgICAgICAgKHsgbHVzZEZlZSwgZGF0ZSwgZXZlbnQsIGJvcnJvd2VyLCBlYXJuZWRQb3J0aW9uIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2V2ZW50LnRyYW5zYWN0aW9uSGFzaH0+XG4gICAgICAgICAgICAgICAgey8qIEJsb2NrIE51bWJlciAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bWFrZUV0aGVyc2NhbkJsb2NrVXJsKGV2ZW50LmJsb2NrTnVtYmVyKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2V2ZW50LmJsb2NrTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICB7LyogVHggSGFzaCAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bWFrZUV0aGVyc2NhblR4VXJsKGV2ZW50LnRyYW5zYWN0aW9uSGFzaCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtldmVudC50cmFuc2FjdGlvbkhhc2guc2xpY2UoMCwgMTYpfS4uLlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICB7LyogRGF0ZSAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PlxuICAgICAgICAgICAgICAgICAge2RhdGUudG9EYXRlU3RyaW5nKCl9IEAge2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgIHsvKiBCb3Jyb3dlciAqL31cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17bWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwoYm9ycm93ZXIpfT5cbiAgICAgICAgICAgICAgICAgICAge2JvcnJvd2VyfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICB7LyogRmVlIGFtb3VudCBwYWlkIChMVVNEKSovfVxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+e2Zvcm1hdExVU0RMYWJlbChsdXNkRmVlKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgey8qIFBvcnRpb24gZWFybmVkICovfVxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0+e2Vhcm5lZFBvcnRpb24udG9GaXhlZCg2KX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVzZVJlYWxUaW1lQm9ycm93aW5nRmVlUGFpZEluZm9zKGFjY291bnQ6IGAweCR7c3RyaW5nfWApIHtcbiAgY29uc3QgW2JvcnJvd2luZ0ZlZVBhaWRJbmZvcywgc2V0Qm9ycm93aW5nRmVlUGFpZEluZm9zXSA9IHVzZVN0YXRlPFxuICAgIEJvcnJvd2luZ0ZlZUluZm9bXVxuICA+KFtdKTtcblxuICBjb25zdCBscXR5U3Rha2luZyA9IHVzZUxpcXVpdHlTdGFraW5nKCk7XG5cbiAgdXNlUmVhbHRpbWVMVVNEQm9ycm93aW5nRmVlUGFpZEV2ZW50cyhhc3luYyAoYm9ycm93ZXIsIGx1c2RGZWUsIGV2ZW50KSA9PiB7XG4gICAgaWYgKCFscXR5U3Rha2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YWtlZExRVFkgPSBhd2FpdCBscXR5U3Rha2luZy5zdGFrZXMoYWNjb3VudCk7XG4gICAgY29uc3QgdG90YWxTdGFrZWQgPSBhd2FpdCBscXR5U3Rha2luZy50b3RhbExRVFlTdGFrZWQoKTtcbiAgICBjb25zdCBibG9jayA9IGF3YWl0IGV2ZW50LmdldEJsb2NrKCk7XG4gICAgY29uc3QgdGltZXN0YW1wID0gYmxvY2sudGltZXN0YW1wO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShibG9jay50aW1lc3RhbXAgKiAxMDAwKTtcbiAgICBjb25zdCBwb29sU2hhcmUgPSArZm9ybWF0RXRoZXIoc3Rha2VkTFFUWSkgLyArZm9ybWF0RXRoZXIodG90YWxTdGFrZWQpO1xuICAgIGNvbnN0IGVhcm5lZFBvcnRpb24gPSArZm9ybWF0RXRoZXIobHVzZEZlZSkgKiBwb29sU2hhcmU7XG4gICAgY29uc3QgYm9ycm93aW5nRmVlUGFpZEluZm86IEJvcnJvd2luZ0ZlZUluZm8gPSB7XG4gICAgICBib3Jyb3dlcixcbiAgICAgIGJsb2NrLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgZGF0ZSxcbiAgICAgIGx1c2RGZWUsXG4gICAgICBwb29sU2hhcmUsXG4gICAgICBlYXJuZWRQb3J0aW9uLFxuICAgICAgZXZlbnQsXG4gICAgfTtcblxuICAgIHNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvcygocHJldlN0YXRlKSA9PiBbXG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBib3Jyb3dpbmdGZWVQYWlkSW5mbyxcbiAgICBdKTtcbiAgfSk7XG4gIHJldHVybiBib3Jyb3dpbmdGZWVQYWlkSW5mb3M7XG59XG4iXSwibmFtZXMiOlsiZm9ybWF0RXRoZXIiLCJ1c2VTdGF0ZSIsInVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMiLCJ1c2VMaXF1aXR5U3Rha2luZyIsIm1ha2VFdGhlcnNjYW5BZGRyZXNzVXJsIiwibWFrZUV0aGVyc2NhbkJsb2NrVXJsIiwibWFrZUV0aGVyc2NhblR4VXJsIiwiZm9ybWF0TFVTRExhYmVsIiwidGhTdHlsZSIsInBhZGRpbmciLCJ0ZFN0eWxlIiwidGV4dEFsaWduIiwiTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZSIsImFjY291bnQiLCJib3Jyb3dpbmdGZWVQYWlkSW5mb3MiLCJ1c2VSZWFsVGltZUJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsImJvcnJvd2luZ0ZlZVBhaWRJbmZvc1dpdGhOb25aZXJvRWFybmluZ3MiLCJmaWx0ZXIiLCJlYXJuZWRQb3J0aW9uIiwidGFibGUiLCJzdHlsZSIsIndpZHRoIiwiY2FwdGlvbiIsInBhZGRpbmdCb3R0b20iLCJwIiwic3Ryb25nIiwibGVuZ3RoIiwidGJvZHkiLCJtYXAiLCJsdXNkRmVlIiwiZGF0ZSIsImV2ZW50IiwiYm9ycm93ZXIiLCJ0ciIsInRkIiwiYSIsInRhcmdldCIsImhyZWYiLCJibG9ja051bWJlciIsInRyYW5zYWN0aW9uSGFzaCIsInNsaWNlIiwidG9EYXRlU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwidG9GaXhlZCIsInNldEJvcnJvd2luZ0ZlZVBhaWRJbmZvcyIsImxxdHlTdGFraW5nIiwic3Rha2VkTFFUWSIsInN0YWtlcyIsInRvdGFsU3Rha2VkIiwidG90YWxMUVRZU3Rha2VkIiwiYmxvY2siLCJnZXRCbG9jayIsInRpbWVzdGFtcCIsIkRhdGUiLCJwb29sU2hhcmUiLCJib3Jyb3dpbmdGZWVQYWlkSW5mbyIsInByZXZTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\n"));

/***/ })

});