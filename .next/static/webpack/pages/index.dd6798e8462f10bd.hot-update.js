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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _src_etherscan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/liquity/contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/wagmi/useBlock */ \"./src/wagmi/useBlock.tsx\");\n/* harmony import */ var _src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/liquity/contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _src_base_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/base/format */ \"./src/base/format.ts\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers/lib/utils.js */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_liquity_StakeChangedTable_StakeChangedTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/liquity/StakeChangedTable/StakeChangedTable */ \"./src/liquity/StakeChangedTable/StakeChangedTable.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst MY_WALLET = \"0x171Da4C7e80e0Bc4Ae36dC903CC4A6dF30773d2D\";\n// const RANDO = \"0x5D73A43c06B4e3d5101618b587917C7f18317770\";\nconst account = MY_WALLET;\n// const account = RANDO;\nfunction Home() {\n    _s();\n    const { data: currentBlock  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useBlockNumber)();\n    const { data: deploymentBlock  } = (0,_src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__.useBlock)(_src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__.BORROWER_OPERATIONS_DEPLOYMENT_BLOCK);\n    const date = new Date(((deploymentBlock === null || deploymentBlock === void 0 ? void 0 : deploymentBlock.timestamp) || 0) * 1000);\n    const { data: stakeChangedEvents = []  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakeChangedEvents)(account);\n    const { data: stakedLQTY  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakes)(account);\n    const { data: totalLQTYStaked  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useTotalLQTYStaked)();\n    const { data: pendingLUSDGain  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingLUSDGain)(account);\n    const { data: pendingETHGain  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingETHGain)(account);\n    let poolShare = 0;\n    let poolSharePercentLabel = \"0%\";\n    if ((stakedLQTY === null || stakedLQTY === void 0 ? void 0 : stakedLQTY.gt(0)) && (totalLQTYStaked === null || totalLQTYStaked === void 0 ? void 0 : totalLQTYStaked.gt(0))) {\n        poolShare = +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__.formatEther)(stakedLQTY) / +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__.formatEther)(totalLQTYStaked);\n        poolSharePercentLabel = \"\".concat((poolShare * 100).toFixed(4), \"%\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Liquity Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A Liquity Protocol frontend for exploring events.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"This is Liquity Events!\"\n                }, void 0, false, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Liquity was deployed on \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: date.toDateString()\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 33\n                    }, this),\n                    \" (Block:\",\n                    \" \",\n                    _src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__.BORROWER_OPERATIONS_DEPLOYMENT_BLOCK,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Reading from contracts:\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: (0,_src_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanAddressUrl)(_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.LIQUITY_STAKING_ADDRESS),\n                                children: \"LQTY Staking\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: (0,_src_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanAddressUrl)(_src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__.BORROWER_OPERATIONS_ADDRESS),\n                                children: \"Borrower Operations\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"The current block is\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: (0,_src_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanBlockUrl)(currentBlock || 0),\n                            children: currentBlock\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"The wallet being tracked is\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: (0,_src_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanAddressUrl)(account),\n                            children: account\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Current staked LQTY amount:\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLQTYLabel)(stakedLQTY)\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Current total staked LQTY amount:\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLQTYLabel)(totalLQTYStaked)\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Current pool share: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: poolSharePercentLabel\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Current pending LUSD gains:\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLUSDLabel)(pendingLUSDGain)\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Current pending ETH gains:\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatEtherLabel)(pendingETHGain, 4)\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_liquity_StakeChangedTable_StakeChangedTable__WEBPACK_IMPORTED_MODULE_7__.StakeChangedTable, {\n                stakeChangedEvents: stakeChangedEvents\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"8T7U63YmPgY+9Wwav5cfyMGsG8o=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_8__.useBlockNumber,\n        _src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__.useBlock,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakeChangedEvents,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakes,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useTotalLQTYStaked,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingLUSDGain,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingETHGain\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNlOzs7Ozs7Ozs7Ozs7MEJBRTNCLDhEQUFDaUI7O29CQUFFO2tDQUNtQiw4REFBQ0M7a0NBQVFkOzs7Ozs7Ozs7Ozs7MEJBRS9CLDhEQUFDYTs7b0JBQUU7b0JBQzJCO2tDQUM1Qiw4REFBQ0M7a0NBQVFoQyxpRUFBZUEsQ0FBQ2U7Ozs7Ozs7Ozs7OzswQkFFM0IsOERBQUNnQjs7b0JBQUU7b0JBQzBCO2tDQUMzQiw4REFBQ0M7a0NBQVFsQyxrRUFBZ0JBLENBQUNrQixnQkFBZ0I7Ozs7Ozs7Ozs7OzswQkFHNUMsOERBQUNkLCtGQUFpQkE7Z0JBQUNVLG9CQUFvQkE7Ozs7Ozs7Ozs7OztBQUc3QyxDQUFDO0dBbkZ1QlA7O1FBQ1NuQixpREFBY0E7UUFFWFMseURBQVFBO1FBSUFILHFGQUFxQkE7UUFFbENDLHlFQUFTQTtRQUNKQyxrRkFBa0JBO1FBQ2xCSCxxRkFBcUJBO1FBQ3RCRCxvRkFBb0JBOzs7S0FaL0JlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUJsb2NrTnVtYmVyIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQge1xuICBtYWtlRXRoZXJzY2FuQWRkcmVzc1VybCxcbiAgbWFrZUV0aGVyc2NhbkJsb2NrVXJsLFxufSBmcm9tIFwiLi4vc3JjL2V0aGVyc2NhblwiO1xuaW1wb3J0IHtcbiAgTElRVUlUWV9TVEFLSU5HX0FERFJFU1MsXG4gIHVzZUdldFBlbmRpbmdFVEhHYWluLFxuICB1c2VHZXRQZW5kaW5nTFVTREdhaW4sXG4gIHVzZVN0YWtlQ2hhbmdlZEV2ZW50cyxcbiAgdXNlU3Rha2VzLFxuICB1c2VUb3RhbExRVFlTdGFrZWQsXG59IGZyb20gXCIuLi9zcmMvbGlxdWl0eS9jb250cmFjdHMvbHF0eVN0YWtpbmdcIjtcbmltcG9ydCB7IHVzZUJsb2NrIH0gZnJvbSBcIi4uL3NyYy93YWdtaS91c2VCbG9ja1wiO1xuaW1wb3J0IHtcbiAgQk9SUk9XRVJfT1BFUkFUSU9OU19BRERSRVNTLFxuICBCT1JST1dFUl9PUEVSQVRJT05TX0RFUExPWU1FTlRfQkxPQ0ssXG59IGZyb20gXCIuLi9zcmMvbGlxdWl0eS9jb250cmFjdHMvYm9ycm93ZXJPcGVyYXRpb25zXCI7XG5pbXBvcnQgeyBQSUNLTEVfRklOQU5DRV9TVFJBVEVHWSB9IGZyb20gXCIuLi9zcmMvcGlja2xlZmluYW5jZVwiO1xuaW1wb3J0IHtcbiAgZm9ybWF0RXRoZXJMYWJlbCxcbiAgZm9ybWF0TFFUWUxhYmVsLFxuICBmb3JtYXRMVVNETGFiZWwsXG59IGZyb20gXCIuLi9zcmMvYmFzZS9mb3JtYXRcIjtcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSBcImV0aGVycy9saWIvdXRpbHMuanNcIjtcbmltcG9ydCB7IFN0YWtlQ2hhbmdlZFRhYmxlIH0gZnJvbSBcIi4uL3NyYy9saXF1aXR5L1N0YWtlQ2hhbmdlZFRhYmxlL1N0YWtlQ2hhbmdlZFRhYmxlXCI7XG5cbmNvbnN0IE1ZX1dBTExFVCA9IFwiMHgxNzFEYTRDN2U4MGUwQmM0QWUzNmRDOTAzQ0M0QTZkRjMwNzczZDJEXCI7XG4vLyBjb25zdCBSQU5ETyA9IFwiMHg1RDczQTQzYzA2QjRlM2Q1MTAxNjE4YjU4NzkxN0M3ZjE4MzE3NzcwXCI7XG5cbmNvbnN0IGFjY291bnQgPSBNWV9XQUxMRVQ7XG4vLyBjb25zdCBhY2NvdW50ID0gUkFORE87XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGE6IGN1cnJlbnRCbG9jayB9ID0gdXNlQmxvY2tOdW1iZXIoKTtcblxuICBjb25zdCB7IGRhdGE6IGRlcGxveW1lbnRCbG9jayB9ID0gdXNlQmxvY2soXG4gICAgQk9SUk9XRVJfT1BFUkFUSU9OU19ERVBMT1lNRU5UX0JMT0NLXG4gICk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgoZGVwbG95bWVudEJsb2NrPy50aW1lc3RhbXAgfHwgMCkgKiAxMDAwKTtcbiAgY29uc3QgeyBkYXRhOiBzdGFrZUNoYW5nZWRFdmVudHMgPSBbXSB9ID0gdXNlU3Rha2VDaGFuZ2VkRXZlbnRzKGFjY291bnQpO1xuXG4gIGNvbnN0IHsgZGF0YTogc3Rha2VkTFFUWSB9ID0gdXNlU3Rha2VzKGFjY291bnQpO1xuICBjb25zdCB7IGRhdGE6IHRvdGFsTFFUWVN0YWtlZCB9ID0gdXNlVG90YWxMUVRZU3Rha2VkKCk7XG4gIGNvbnN0IHsgZGF0YTogcGVuZGluZ0xVU0RHYWluIH0gPSB1c2VHZXRQZW5kaW5nTFVTREdhaW4oYWNjb3VudCk7XG4gIGNvbnN0IHsgZGF0YTogcGVuZGluZ0VUSEdhaW4gfSA9IHVzZUdldFBlbmRpbmdFVEhHYWluKGFjY291bnQpO1xuXG4gIGxldCBwb29sU2hhcmUgPSAwO1xuICBsZXQgcG9vbFNoYXJlUGVyY2VudExhYmVsID0gXCIwJVwiO1xuICBpZiAoc3Rha2VkTFFUWT8uZ3QoMCkgJiYgdG90YWxMUVRZU3Rha2VkPy5ndCgwKSkge1xuICAgIHBvb2xTaGFyZSA9ICtmb3JtYXRFdGhlcihzdGFrZWRMUVRZKSAvICtmb3JtYXRFdGhlcih0b3RhbExRVFlTdGFrZWQpO1xuICAgIHBvb2xTaGFyZVBlcmNlbnRMYWJlbCA9IGAkeyhwb29sU2hhcmUgKiAxMDApLnRvRml4ZWQoNCl9JWA7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5MaXF1aXR5IEV2ZW50czwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQSBMaXF1aXR5IFByb3RvY29sIGZyb250ZW5kIGZvciBleHBsb3JpbmcgZXZlbnRzLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDE+VGhpcyBpcyBMaXF1aXR5IEV2ZW50cyE8L2gxPlxuICAgICAgPC9tYWluPlxuICAgICAgPHA+XG4gICAgICAgIExpcXVpdHkgd2FzIGRlcGxveWVkIG9uIDxzdHJvbmc+e2RhdGUudG9EYXRlU3RyaW5nKCl9PC9zdHJvbmc+IChCbG9jazp7XCIgXCJ9XG4gICAgICAgIHtCT1JST1dFUl9PUEVSQVRJT05TX0RFUExPWU1FTlRfQkxPQ0t9KVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFJlYWRpbmcgZnJvbSBjb250cmFjdHM6e1wiIFwifVxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5BZGRyZXNzVXJsKExJUVVJVFlfU1RBS0lOR19BRERSRVNTKX0+XG4gICAgICAgICAgICBMUVRZIFN0YWtpbmdcbiAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5BZGRyZXNzVXJsKEJPUlJPV0VSX09QRVJBVElPTlNfQUREUkVTUyl9PlxuICAgICAgICAgICAgQm9ycm93ZXIgT3BlcmF0aW9uc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIGN1cnJlbnQgYmxvY2sgaXN7XCIgXCJ9XG4gICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgPGEgaHJlZj17bWFrZUV0aGVyc2NhbkJsb2NrVXJsKGN1cnJlbnRCbG9jayB8fCAwKX0+e2N1cnJlbnRCbG9ja308L2E+XG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZSB3YWxsZXQgYmVpbmcgdHJhY2tlZCBpc3tcIiBcIn1cbiAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICA8YSBocmVmPXttYWtlRXRoZXJzY2FuQWRkcmVzc1VybChhY2NvdW50KX0+e2FjY291bnR9PC9hPlxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBDdXJyZW50IHN0YWtlZCBMUVRZIGFtb3VudDp7XCIgXCJ9XG4gICAgICAgIDxzdHJvbmc+e2Zvcm1hdExRVFlMYWJlbChzdGFrZWRMUVRZKX08L3N0cm9uZz5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBDdXJyZW50IHRvdGFsIHN0YWtlZCBMUVRZIGFtb3VudDp7XCIgXCJ9XG4gICAgICAgIDxzdHJvbmc+e2Zvcm1hdExRVFlMYWJlbCh0b3RhbExRVFlTdGFrZWQpfTwvc3Ryb25nPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEN1cnJlbnQgcG9vbCBzaGFyZTogPHN0cm9uZz57cG9vbFNoYXJlUGVyY2VudExhYmVsfTwvc3Ryb25nPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEN1cnJlbnQgcGVuZGluZyBMVVNEIGdhaW5zOntcIiBcIn1cbiAgICAgICAgPHN0cm9uZz57Zm9ybWF0TFVTRExhYmVsKHBlbmRpbmdMVVNER2Fpbil9PC9zdHJvbmc+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgQ3VycmVudCBwZW5kaW5nIEVUSCBnYWluczp7XCIgXCJ9XG4gICAgICAgIDxzdHJvbmc+e2Zvcm1hdEV0aGVyTGFiZWwocGVuZGluZ0VUSEdhaW4sIDQpfTwvc3Ryb25nPlxuICAgICAgPC9wPlxuXG4gICAgICA8U3Rha2VDaGFuZ2VkVGFibGUgc3Rha2VDaGFuZ2VkRXZlbnRzPXtzdGFrZUNoYW5nZWRFdmVudHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUJsb2NrTnVtYmVyIiwibWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwiLCJtYWtlRXRoZXJzY2FuQmxvY2tVcmwiLCJMSVFVSVRZX1NUQUtJTkdfQUREUkVTUyIsInVzZUdldFBlbmRpbmdFVEhHYWluIiwidXNlR2V0UGVuZGluZ0xVU0RHYWluIiwidXNlU3Rha2VDaGFuZ2VkRXZlbnRzIiwidXNlU3Rha2VzIiwidXNlVG90YWxMUVRZU3Rha2VkIiwidXNlQmxvY2siLCJCT1JST1dFUl9PUEVSQVRJT05TX0FERFJFU1MiLCJCT1JST1dFUl9PUEVSQVRJT05TX0RFUExPWU1FTlRfQkxPQ0siLCJmb3JtYXRFdGhlckxhYmVsIiwiZm9ybWF0TFFUWUxhYmVsIiwiZm9ybWF0TFVTRExhYmVsIiwiZm9ybWF0RXRoZXIiLCJTdGFrZUNoYW5nZWRUYWJsZSIsIk1ZX1dBTExFVCIsImFjY291bnQiLCJIb21lIiwiZGF0YSIsImN1cnJlbnRCbG9jayIsImRlcGxveW1lbnRCbG9jayIsImRhdGUiLCJEYXRlIiwidGltZXN0YW1wIiwic3Rha2VDaGFuZ2VkRXZlbnRzIiwic3Rha2VkTFFUWSIsInRvdGFsTFFUWVN0YWtlZCIsInBlbmRpbmdMVVNER2FpbiIsInBlbmRpbmdFVEhHYWluIiwicG9vbFNoYXJlIiwicG9vbFNoYXJlUGVyY2VudExhYmVsIiwiZ3QiLCJ0b0ZpeGVkIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInAiLCJzdHJvbmciLCJ0b0RhdGVTdHJpbmciLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});