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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_etherscan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/liquity/contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/wagmi/useBlock */ \"./src/wagmi/useBlock.tsx\");\n/* harmony import */ var _src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/liquity/contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _src_base_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/base/format */ \"./src/base/format.ts\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers/lib/utils.js */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_liquity_StakeChangedTable_StakeChangedTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/liquity/StakeChangedTable/StakeChangedTable */ \"./src/liquity/StakeChangedTable/StakeChangedTable.tsx\");\n/* harmony import */ var _src_liquity_LUSDBorrowingFeePaidTable_LUSDBorrowingFeePaidTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable */ \"./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst MY_WALLET = \"0x171Da4C7e80e0Bc4Ae36dC903CC4A6dF30773d2D\";\n// const RANDO = \"0x5D73A43c06B4e3d5101618b587917C7f18317770\";\nconst account = MY_WALLET;\n// const account = RANDO;\nfunction Home() {\n    _s();\n    const { data: deploymentBlock  } = (0,_src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__.useBlock)(_src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__.BORROWER_OPERATIONS_DEPLOYMENT_BLOCK);\n    const date = new Date(((deploymentBlock === null || deploymentBlock === void 0 ? void 0 : deploymentBlock.timestamp) || 0) * 1000);\n    const { data: stakeChangedEvents = []  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakeChangedEvents)(account);\n    const { data: stakedLQTY  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakes)(account);\n    const { data: totalLQTYStaked  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useTotalLQTYStaked)();\n    const { data: pendingLUSDGain  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingLUSDGain)(account);\n    const { data: pendingETHGain  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingETHGain)(account);\n    let poolShare = 0;\n    let poolSharePercentLabel = \"0%\";\n    if ((stakedLQTY === null || stakedLQTY === void 0 ? void 0 : stakedLQTY.gt(0)) && (totalLQTYStaked === null || totalLQTYStaked === void 0 ? void 0 : totalLQTYStaked.gt(0))) {\n        poolShare = +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__.formatEther)(stakedLQTY) / +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__.formatEther)(totalLQTYStaked);\n        poolSharePercentLabel = \"\".concat((poolShare * 100).toFixed(4), \"%\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Liquity Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A Liquity Protocol frontend for exploring events.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Liquity Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Liquity was deployed on \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: date.toDateString()\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 35\n                            }, this),\n                            \" (Block:\",\n                            \" \",\n                            _src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__.BORROWER_OPERATIONS_DEPLOYMENT_BLOCK,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"There is currently\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLQTYLabel)(totalLQTYStaked),\n                                    \" LQTY\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            \" staked in the system.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Realtime Earnings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_liquity_LUSDBorrowingFeePaidTable_LUSDBorrowingFeePaidTable__WEBPACK_IMPORTED_MODULE_8__.LUSDBorrowingFeePaidTable, {\n                        account: account\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Current Stake\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"The wallet being tracked is\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_src_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanAddressUrl)(account),\n                                    children: account\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current staked LQTY amount:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLQTYLabel)(stakedLQTY)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current pool share: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: poolSharePercentLabel\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 31\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current pending LUSD gains:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLUSDLabel)(pendingLUSDGain)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current pending ETH gains:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatEtherLabel)(pendingETHGain, 4)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Staking History\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_liquity_StakeChangedTable_StakeChangedTable__WEBPACK_IMPORTED_MODULE_7__.StakeChangedTable, {\n                        stakeChangedEvents: stakeChangedEvents\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"pRPNNrMXI6kG/gPD49u9ooV2seU=\", false, function() {\n    return [\n        _src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__.useBlock,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakeChangedEvents,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakes,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useTotalLQTYStaked,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingLUSDGain,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingETHGain\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDOEI7QUFPYjtBQUNHO0FBQ2tEO0FBTXZFO0FBQ3NCO0FBQ3FDO0FBQ3dCO0FBRS9HLE1BQU1lLFlBQVk7QUFDbEIsOERBQThEO0FBRTlELE1BQU1DLFVBQVVEO0FBQ2hCLHlCQUF5QjtBQUNWLFNBQVNFLE9BQU87O0lBQzdCLE1BQU0sRUFBRUMsTUFBTUMsZ0JBQWUsRUFBRSxHQUFHWiw2REFBUUEsQ0FDeENDLDJHQUFvQ0E7SUFFdEMsTUFBTVksT0FBTyxJQUFJQyxLQUFLLENBQUNGLENBQUFBLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCRyxTQUFTLEtBQUksS0FBSztJQUMxRCxNQUFNLEVBQUVKLE1BQU1LLHFCQUFxQixFQUFFLEdBQUUsR0FBR25CLHlGQUFxQkEsQ0FBQ1k7SUFFaEUsTUFBTSxFQUFFRSxNQUFNTSxXQUFVLEVBQUUsR0FBR25CLDZFQUFTQSxDQUFDVztJQUN2QyxNQUFNLEVBQUVFLE1BQU1PLGdCQUFlLEVBQUUsR0FBR25CLHNGQUFrQkE7SUFDcEQsTUFBTSxFQUFFWSxNQUFNUSxnQkFBZSxFQUFFLEdBQUd2Qix5RkFBcUJBLENBQUNhO0lBQ3hELE1BQU0sRUFBRUUsTUFBTVMsZUFBYyxFQUFFLEdBQUd6Qix3RkFBb0JBLENBQUNjO0lBRXRELElBQUlZLFlBQVk7SUFDaEIsSUFBSUMsd0JBQXdCO0lBQzVCLElBQUlMLENBQUFBLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWU0sRUFBRSxDQUFDLFFBQU1MLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCSyxFQUFFLENBQUMsS0FBSTtRQUMvQ0YsWUFBWSxDQUFDaEIsZ0VBQVdBLENBQUNZLGNBQWMsQ0FBQ1osZ0VBQVdBLENBQUNhO1FBQ3BESSx3QkFBd0IsR0FBZ0MsT0FBN0IsQ0FBQ0QsWUFBWSxHQUFFLEVBQUdHLE9BQU8sQ0FBQyxJQUFHO0lBQzFELENBQUM7SUFFRCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDaEMsa0RBQUlBOztrQ0FDSCw4REFBQ2lDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7a0NBRVYsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDUDtnQkFDQ1EsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsZUFBZTtvQkFDZkMsWUFBWTtvQkFDWkMsZUFBZTtnQkFDakI7O2tDQUVBLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7NEJBQUU7MENBQ3VCLDhEQUFDQzswQ0FBUTNCLEtBQUs0QixZQUFZOzs7Ozs7NEJBQVk7NEJBQVM7NEJBQ3RFeEMsMkdBQW9DQTs0QkFBQzs7Ozs7OztrQ0FFeEMsOERBQUNzQzs7NEJBQUU7NEJBQ2tCOzBDQUNuQiw4REFBQ0M7O29DQUFRckMsaUVBQWVBLENBQUNlO29DQUFpQjs7Ozs7Ozs0QkFBYzs7Ozs7Ozs7Ozs7OzswQkFJNUQsOERBQUNPO2dCQUNDUSxPQUFPO29CQUNMQyxTQUFTO29CQUNUQyxlQUFlO29CQUNmQyxZQUFZO29CQUNaQyxlQUFlO2dCQUNqQjs7a0NBRUEsOERBQUNLO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNuQyx1SEFBeUJBO3dCQUFDRSxTQUFTQTs7Ozs7Ozs7Ozs7OzBCQUd0Qyw4REFBQ2dCO2dCQUNDUSxPQUFPO29CQUNMQyxTQUFTO29CQUNUQyxlQUFlO29CQUNmQyxZQUFZO29CQUNaQyxlQUFlO2dCQUNqQjs7a0NBRUEsOERBQUNLO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNIOzs0QkFBRTs0QkFDMkI7MENBQzVCLDhEQUFDQzswQ0FDQyw0RUFBQ0c7b0NBQUVYLE1BQU10Qyx1RUFBdUJBLENBQUNlOzhDQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2hELDhEQUFDOEI7OzRCQUFFOzRCQUMyQjswQ0FDNUIsOERBQUNDOzBDQUFRckMsaUVBQWVBLENBQUNjOzs7Ozs7Ozs7Ozs7a0NBRTNCLDhEQUFDc0I7OzRCQUFFOzBDQUNtQiw4REFBQ0M7MENBQVFsQjs7Ozs7Ozs7Ozs7O2tDQUUvQiw4REFBQ2lCOzs0QkFBRTs0QkFDMkI7MENBQzVCLDhEQUFDQzswQ0FBUXBDLGlFQUFlQSxDQUFDZTs7Ozs7Ozs7Ozs7O2tDQUUzQiw4REFBQ29COzs0QkFBRTs0QkFDMEI7MENBQzNCLDhEQUFDQzswQ0FBUXRDLGtFQUFnQkEsQ0FBQ2tCLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk5Qyw4REFBQ0s7Z0JBQ0NRLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLFlBQVk7b0JBQ1pDLGVBQWU7Z0JBQ2pCOztrQ0FFQSw4REFBQ0s7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ3BDLCtGQUFpQkE7d0JBQUNVLG9CQUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQyxDQUFDO0dBekd1Qk47O1FBQ1lWLHlEQUFRQTtRQUlBSCxxRkFBcUJBO1FBRWxDQyx5RUFBU0E7UUFDSkMsa0ZBQWtCQTtRQUNsQkgscUZBQXFCQTtRQUN0QkQsb0ZBQW9CQTs7O0tBVi9CZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBtYWtlRXRoZXJzY2FuQWRkcmVzc1VybCB9IGZyb20gXCIuLi9zcmMvZXRoZXJzY2FuXCI7XG5pbXBvcnQge1xuICB1c2VHZXRQZW5kaW5nRVRIR2FpbixcbiAgdXNlR2V0UGVuZGluZ0xVU0RHYWluLFxuICB1c2VTdGFrZUNoYW5nZWRFdmVudHMsXG4gIHVzZVN0YWtlcyxcbiAgdXNlVG90YWxMUVRZU3Rha2VkLFxufSBmcm9tIFwiLi4vc3JjL2xpcXVpdHkvY29udHJhY3RzL2xxdHlTdGFraW5nXCI7XG5pbXBvcnQgeyB1c2VCbG9jayB9IGZyb20gXCIuLi9zcmMvd2FnbWkvdXNlQmxvY2tcIjtcbmltcG9ydCB7IEJPUlJPV0VSX09QRVJBVElPTlNfREVQTE9ZTUVOVF9CTE9DSyB9IGZyb20gXCIuLi9zcmMvbGlxdWl0eS9jb250cmFjdHMvYm9ycm93ZXJPcGVyYXRpb25zXCI7XG5pbXBvcnQgeyBQSUNLTEVfRklOQU5DRV9TVFJBVEVHWSB9IGZyb20gXCIuLi9zcmMvcGlja2xlZmluYW5jZVwiO1xuaW1wb3J0IHtcbiAgZm9ybWF0RXRoZXJMYWJlbCxcbiAgZm9ybWF0TFFUWUxhYmVsLFxuICBmb3JtYXRMVVNETGFiZWwsXG59IGZyb20gXCIuLi9zcmMvYmFzZS9mb3JtYXRcIjtcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSBcImV0aGVycy9saWIvdXRpbHMuanNcIjtcbmltcG9ydCB7IFN0YWtlQ2hhbmdlZFRhYmxlIH0gZnJvbSBcIi4uL3NyYy9saXF1aXR5L1N0YWtlQ2hhbmdlZFRhYmxlL1N0YWtlQ2hhbmdlZFRhYmxlXCI7XG5pbXBvcnQgeyBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlIH0gZnJvbSBcIi4uL3NyYy9saXF1aXR5L0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUvTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVwiO1xuXG5jb25zdCBNWV9XQUxMRVQgPSBcIjB4MTcxRGE0QzdlODBlMEJjNEFlMzZkQzkwM0NDNEE2ZEYzMDc3M2QyRFwiO1xuLy8gY29uc3QgUkFORE8gPSBcIjB4NUQ3M0E0M2MwNkI0ZTNkNTEwMTYxOGI1ODc5MTdDN2YxODMxNzc3MFwiO1xuXG5jb25zdCBhY2NvdW50ID0gTVlfV0FMTEVUO1xuLy8gY29uc3QgYWNjb3VudCA9IFJBTkRPO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhOiBkZXBsb3ltZW50QmxvY2sgfSA9IHVzZUJsb2NrKFxuICAgIEJPUlJPV0VSX09QRVJBVElPTlNfREVQTE9ZTUVOVF9CTE9DS1xuICApO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKGRlcGxveW1lbnRCbG9jaz8udGltZXN0YW1wIHx8IDApICogMTAwMCk7XG4gIGNvbnN0IHsgZGF0YTogc3Rha2VDaGFuZ2VkRXZlbnRzID0gW10gfSA9IHVzZVN0YWtlQ2hhbmdlZEV2ZW50cyhhY2NvdW50KTtcblxuICBjb25zdCB7IGRhdGE6IHN0YWtlZExRVFkgfSA9IHVzZVN0YWtlcyhhY2NvdW50KTtcbiAgY29uc3QgeyBkYXRhOiB0b3RhbExRVFlTdGFrZWQgfSA9IHVzZVRvdGFsTFFUWVN0YWtlZCgpO1xuICBjb25zdCB7IGRhdGE6IHBlbmRpbmdMVVNER2FpbiB9ID0gdXNlR2V0UGVuZGluZ0xVU0RHYWluKGFjY291bnQpO1xuICBjb25zdCB7IGRhdGE6IHBlbmRpbmdFVEhHYWluIH0gPSB1c2VHZXRQZW5kaW5nRVRIR2FpbihhY2NvdW50KTtcblxuICBsZXQgcG9vbFNoYXJlID0gMDtcbiAgbGV0IHBvb2xTaGFyZVBlcmNlbnRMYWJlbCA9IFwiMCVcIjtcbiAgaWYgKHN0YWtlZExRVFk/Lmd0KDApICYmIHRvdGFsTFFUWVN0YWtlZD8uZ3QoMCkpIHtcbiAgICBwb29sU2hhcmUgPSArZm9ybWF0RXRoZXIoc3Rha2VkTFFUWSkgLyArZm9ybWF0RXRoZXIodG90YWxMUVRZU3Rha2VkKTtcbiAgICBwb29sU2hhcmVQZXJjZW50TGFiZWwgPSBgJHsocG9vbFNoYXJlICogMTAwKS50b0ZpeGVkKDQpfSVgO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5MaXF1aXR5IEV2ZW50czwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQSBMaXF1aXR5IFByb3RvY29sIGZyb250ZW5kIGZvciBleHBsb3JpbmcgZXZlbnRzLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIzMnB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMT5MaXF1aXR5IEV2ZW50czwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExpcXVpdHkgd2FzIGRlcGxveWVkIG9uIDxzdHJvbmc+e2RhdGUudG9EYXRlU3RyaW5nKCl9PC9zdHJvbmc+IChCbG9jazp7XCIgXCJ9XG4gICAgICAgICAge0JPUlJPV0VSX09QRVJBVElPTlNfREVQTE9ZTUVOVF9CTE9DS30pXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlcmUgaXMgY3VycmVudGx5e1wiIFwifVxuICAgICAgICAgIDxzdHJvbmc+e2Zvcm1hdExRVFlMYWJlbCh0b3RhbExRVFlTdGFrZWQpfSBMUVRZPC9zdHJvbmc+IHN0YWtlZCBpbiB0aGVcbiAgICAgICAgICBzeXN0ZW0uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjMycHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGgzPlJlYWx0aW1lIEVhcm5pbmdzPC9oMz5cbiAgICAgICAgPExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUgYWNjb3VudD17YWNjb3VudH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMzJweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aDM+Q3VycmVudCBTdGFrZTwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSB3YWxsZXQgYmVpbmcgdHJhY2tlZCBpc3tcIiBcIn1cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgPGEgaHJlZj17bWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwoYWNjb3VudCl9PnthY2NvdW50fTwvYT5cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDdXJyZW50IHN0YWtlZCBMUVRZIGFtb3VudDp7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Zm9ybWF0TFFUWUxhYmVsKHN0YWtlZExRVFkpfTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEN1cnJlbnQgcG9vbCBzaGFyZTogPHN0cm9uZz57cG9vbFNoYXJlUGVyY2VudExhYmVsfTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEN1cnJlbnQgcGVuZGluZyBMVVNEIGdhaW5zOntcIiBcIn1cbiAgICAgICAgICA8c3Ryb25nPntmb3JtYXRMVVNETGFiZWwocGVuZGluZ0xVU0RHYWluKX08L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDdXJyZW50IHBlbmRpbmcgRVRIIGdhaW5zOntcIiBcIn1cbiAgICAgICAgICA8c3Ryb25nPntmb3JtYXRFdGhlckxhYmVsKHBlbmRpbmdFVEhHYWluLCA0KX08L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIzMnB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMz5TdGFraW5nIEhpc3Rvcnk8L2gzPlxuICAgICAgICA8U3Rha2VDaGFuZ2VkVGFibGUgc3Rha2VDaGFuZ2VkRXZlbnRzPXtzdGFrZUNoYW5nZWRFdmVudHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwibWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwiLCJ1c2VHZXRQZW5kaW5nRVRIR2FpbiIsInVzZUdldFBlbmRpbmdMVVNER2FpbiIsInVzZVN0YWtlQ2hhbmdlZEV2ZW50cyIsInVzZVN0YWtlcyIsInVzZVRvdGFsTFFUWVN0YWtlZCIsInVzZUJsb2NrIiwiQk9SUk9XRVJfT1BFUkFUSU9OU19ERVBMT1lNRU5UX0JMT0NLIiwiZm9ybWF0RXRoZXJMYWJlbCIsImZvcm1hdExRVFlMYWJlbCIsImZvcm1hdExVU0RMYWJlbCIsImZvcm1hdEV0aGVyIiwiU3Rha2VDaGFuZ2VkVGFibGUiLCJMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlIiwiTVlfV0FMTEVUIiwiYWNjb3VudCIsIkhvbWUiLCJkYXRhIiwiZGVwbG95bWVudEJsb2NrIiwiZGF0ZSIsIkRhdGUiLCJ0aW1lc3RhbXAiLCJzdGFrZUNoYW5nZWRFdmVudHMiLCJzdGFrZWRMUVRZIiwidG90YWxMUVRZU3Rha2VkIiwicGVuZGluZ0xVU0RHYWluIiwicGVuZGluZ0VUSEdhaW4iLCJwb29sU2hhcmUiLCJwb29sU2hhcmVQZXJjZW50TGFiZWwiLCJndCIsInRvRml4ZWQiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nQm90dG9tIiwiaDEiLCJwIiwic3Ryb25nIiwidG9EYXRlU3RyaW5nIiwiaDMiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});