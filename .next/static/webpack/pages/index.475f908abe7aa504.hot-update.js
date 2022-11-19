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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_etherscan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/liquity/contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/wagmi/useBlock */ \"./src/wagmi/useBlock.tsx\");\n/* harmony import */ var _src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/liquity/contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _src_base_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/base/format */ \"./src/base/format.ts\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers/lib/utils.js */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_liquity_StakeChangedTable_StakeChangedTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/liquity/StakeChangedTable/StakeChangedTable */ \"./src/liquity/StakeChangedTable/StakeChangedTable.tsx\");\n/* harmony import */ var _src_liquity_LUSDBorrowingFeePaidTable_LUSDBorrowingFeePaidTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable */ \"./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst MY_WALLET = \"0x171Da4C7e80e0Bc4Ae36dC903CC4A6dF30773d2D\";\n// const RANDO = \"0x5D73A43c06B4e3d5101618b587917C7f18317770\";\nconst account = MY_WALLET;\n// const account = RANDO;\nfunction Home() {\n    _s();\n    const { data: deploymentBlock  } = (0,_src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__.useBlock)(_src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__.BORROWER_OPERATIONS_DEPLOYMENT_BLOCK);\n    const date = new Date(((deploymentBlock === null || deploymentBlock === void 0 ? void 0 : deploymentBlock.timestamp) || 0) * 1000);\n    const { data: stakeChangedEvents = []  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakeChangedEvents)(account);\n    const { data: stakedLQTY  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakes)(account);\n    const { data: totalLQTYStaked  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useTotalLQTYStaked)();\n    const { data: pendingLUSDGain  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingLUSDGain)(account);\n    const { data: pendingETHGain  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingETHGain)(account);\n    let poolShare = 0;\n    let poolSharePercentLabel = \"0%\";\n    if ((stakedLQTY === null || stakedLQTY === void 0 ? void 0 : stakedLQTY.gt(0)) && (totalLQTYStaked === null || totalLQTYStaked === void 0 ? void 0 : totalLQTYStaked.gt(0))) {\n        poolShare = +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__.formatEther)(stakedLQTY) / +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__.formatEther)(totalLQTYStaked);\n        poolSharePercentLabel = \"\".concat((poolShare * 100).toFixed(4), \"%\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Liquity Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A Liquity Protocol frontend for exploring events.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Liquity Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Liquity was deployed on \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: date.toDateString()\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 35\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"There is a total of\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLQTYLabel)(totalLQTYStaked),\n                                    \" LQTY\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            \" staked in the LQTY Staking Pool.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"You have \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLQTYLabel)(stakedLQTY),\n                                    \" LQTY\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 20\n                            }, this),\n                            \" staked in the system, giving you \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: poolSharePercentLabel\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 34\n                            }, this),\n                            \" of the pool.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Currently, you have\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLUSDLabel)(pendingLUSDGain),\n                                    \" LUSD\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            \" pending LUSD gains.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current pending ETH gains:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatEtherLabel)(pendingETHGain, 4)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Realtime Earnings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_liquity_LUSDBorrowingFeePaidTable_LUSDBorrowingFeePaidTable__WEBPACK_IMPORTED_MODULE_8__.LUSDBorrowingFeePaidTable, {\n                        account: account\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Current Stake\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"The wallet being tracked is\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_src_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanAddressUrl)(account),\n                                    children: account\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current staked LQTY amount:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLQTYLabel)(stakedLQTY)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current pool share: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: poolSharePercentLabel\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 31\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current pending LUSD gains:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLUSDLabel)(pendingLUSDGain)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current pending ETH gains:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatEtherLabel)(pendingETHGain, 4)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Staking History\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_liquity_StakeChangedTable_StakeChangedTable__WEBPACK_IMPORTED_MODULE_7__.StakeChangedTable, {\n                        stakeChangedEvents: stakeChangedEvents\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"pRPNNrMXI6kG/gPD49u9ooV2seU=\", false, function() {\n    return [\n        _src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__.useBlock,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakeChangedEvents,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakes,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useTotalLQTYStaked,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingLUSDGain,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingETHGain\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDOEI7QUFPYjtBQUNHO0FBQ2tEO0FBTXZFO0FBQ3NCO0FBQ3FDO0FBQ3dCO0FBRS9HLE1BQU1lLFlBQVk7QUFDbEIsOERBQThEO0FBRTlELE1BQU1DLFVBQVVEO0FBQ2hCLHlCQUF5QjtBQUNWLFNBQVNFLE9BQU87O0lBQzdCLE1BQU0sRUFBRUMsTUFBTUMsZ0JBQWUsRUFBRSxHQUFHWiw2REFBUUEsQ0FDeENDLDJHQUFvQ0E7SUFFdEMsTUFBTVksT0FBTyxJQUFJQyxLQUFLLENBQUNGLENBQUFBLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCRyxTQUFTLEtBQUksS0FBSztJQUMxRCxNQUFNLEVBQUVKLE1BQU1LLHFCQUFxQixFQUFFLEdBQUUsR0FBR25CLHlGQUFxQkEsQ0FBQ1k7SUFFaEUsTUFBTSxFQUFFRSxNQUFNTSxXQUFVLEVBQUUsR0FBR25CLDZFQUFTQSxDQUFDVztJQUN2QyxNQUFNLEVBQUVFLE1BQU1PLGdCQUFlLEVBQUUsR0FBR25CLHNGQUFrQkE7SUFDcEQsTUFBTSxFQUFFWSxNQUFNUSxnQkFBZSxFQUFFLEdBQUd2Qix5RkFBcUJBLENBQUNhO0lBQ3hELE1BQU0sRUFBRUUsTUFBTVMsZUFBYyxFQUFFLEdBQUd6Qix3RkFBb0JBLENBQUNjO0lBRXRELElBQUlZLFlBQVk7SUFDaEIsSUFBSUMsd0JBQXdCO0lBQzVCLElBQUlMLENBQUFBLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWU0sRUFBRSxDQUFDLFFBQU1MLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCSyxFQUFFLENBQUMsS0FBSTtRQUMvQ0YsWUFBWSxDQUFDaEIsZ0VBQVdBLENBQUNZLGNBQWMsQ0FBQ1osZ0VBQVdBLENBQUNhO1FBQ3BESSx3QkFBd0IsR0FBZ0MsT0FBN0IsQ0FBQ0QsWUFBWSxHQUFFLEVBQUdHLE9BQU8sQ0FBQyxJQUFHO0lBQzFELENBQUM7SUFFRCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDaEMsa0RBQUlBOztrQ0FDSCw4REFBQ2lDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7a0NBRVYsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDUDtnQkFDQ1EsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsZUFBZTtvQkFDZkMsWUFBWTtvQkFDWkMsZUFBZTtnQkFDakI7O2tDQUVBLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7NEJBQUU7MENBQ3VCLDhEQUFDQzswQ0FBUTNCLEtBQUs0QixZQUFZOzs7Ozs7NEJBQVk7Ozs7Ozs7a0NBRWhFLDhEQUFDRjs7NEJBQUU7NEJBQ21COzBDQUNwQiw4REFBQ0M7O29DQUFRckMsaUVBQWVBLENBQUNlO29DQUFpQjs7Ozs7Ozs0QkFBYzs7Ozs7OztrQ0FHMUQsOERBQUNxQjs7NEJBQUU7MENBQ1EsOERBQUNDOztvQ0FBUXJDLGlFQUFlQSxDQUFDYztvQ0FBWTs7Ozs7Ozs0QkFBYzswQ0FDckMsOERBQUN1QjswQ0FBUWxCOzs7Ozs7NEJBQStCOzs7Ozs7O2tDQUdqRSw4REFBQ2lCOzs0QkFBRTs0QkFDbUI7MENBQ3BCLDhEQUFDQzs7b0NBQVFwQyxpRUFBZUEsQ0FBQ2U7b0NBQWlCOzs7Ozs7OzRCQUFjOzs7Ozs7O2tDQUcxRCw4REFBQ29COzs0QkFBRTs0QkFDMEI7MENBQzNCLDhEQUFDQzswQ0FBUXRDLGtFQUFnQkEsQ0FBQ2tCLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc5Qyw4REFBQ0s7Z0JBQ0NRLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLFlBQVk7b0JBQ1pDLGVBQWU7Z0JBQ2pCOztrQ0FFQSw4REFBQ0s7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ25DLHVIQUF5QkE7d0JBQUNFLFNBQVNBOzs7Ozs7Ozs7Ozs7MEJBR3RDLDhEQUFDZ0I7Z0JBQ0NRLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLFlBQVk7b0JBQ1pDLGVBQWU7Z0JBQ2pCOztrQ0FFQSw4REFBQ0s7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0g7OzRCQUFFOzRCQUMyQjswQ0FDNUIsOERBQUNDOzBDQUNDLDRFQUFDRztvQ0FBRVgsTUFBTXRDLHVFQUF1QkEsQ0FBQ2U7OENBQVdBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHaEQsOERBQUM4Qjs7NEJBQUU7NEJBQzJCOzBDQUM1Qiw4REFBQ0M7MENBQVFyQyxpRUFBZUEsQ0FBQ2M7Ozs7Ozs7Ozs7OztrQ0FFM0IsOERBQUNzQjs7NEJBQUU7MENBQ21CLDhEQUFDQzswQ0FBUWxCOzs7Ozs7Ozs7Ozs7a0NBRS9CLDhEQUFDaUI7OzRCQUFFOzRCQUMyQjswQ0FDNUIsOERBQUNDOzBDQUFRcEMsaUVBQWVBLENBQUNlOzs7Ozs7Ozs7Ozs7a0NBRTNCLDhEQUFDb0I7OzRCQUFFOzRCQUMwQjswQ0FDM0IsOERBQUNDOzBDQUFRdEMsa0VBQWdCQSxDQUFDa0IsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTlDLDhEQUFDSztnQkFDQ1EsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsZUFBZTtvQkFDZkMsWUFBWTtvQkFDWkMsZUFBZTtnQkFDakI7O2tDQUVBLDhEQUFDSztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDcEMsK0ZBQWlCQTt3QkFBQ1Usb0JBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9DLENBQUM7R0F0SHVCTjs7UUFDWVYseURBQVFBO1FBSUFILHFGQUFxQkE7UUFFbENDLHlFQUFTQTtRQUNKQyxrRkFBa0JBO1FBQ2xCSCxxRkFBcUJBO1FBQ3RCRCxvRkFBb0JBOzs7S0FWL0JlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IG1ha2VFdGhlcnNjYW5BZGRyZXNzVXJsIH0gZnJvbSBcIi4uL3NyYy9ldGhlcnNjYW5cIjtcbmltcG9ydCB7XG4gIHVzZUdldFBlbmRpbmdFVEhHYWluLFxuICB1c2VHZXRQZW5kaW5nTFVTREdhaW4sXG4gIHVzZVN0YWtlQ2hhbmdlZEV2ZW50cyxcbiAgdXNlU3Rha2VzLFxuICB1c2VUb3RhbExRVFlTdGFrZWQsXG59IGZyb20gXCIuLi9zcmMvbGlxdWl0eS9jb250cmFjdHMvbHF0eVN0YWtpbmdcIjtcbmltcG9ydCB7IHVzZUJsb2NrIH0gZnJvbSBcIi4uL3NyYy93YWdtaS91c2VCbG9ja1wiO1xuaW1wb3J0IHsgQk9SUk9XRVJfT1BFUkFUSU9OU19ERVBMT1lNRU5UX0JMT0NLIH0gZnJvbSBcIi4uL3NyYy9saXF1aXR5L2NvbnRyYWN0cy9ib3Jyb3dlck9wZXJhdGlvbnNcIjtcbmltcG9ydCB7IFBJQ0tMRV9GSU5BTkNFX1NUUkFURUdZIH0gZnJvbSBcIi4uL3NyYy9waWNrbGVmaW5hbmNlXCI7XG5pbXBvcnQge1xuICBmb3JtYXRFdGhlckxhYmVsLFxuICBmb3JtYXRMUVRZTGFiZWwsXG4gIGZvcm1hdExVU0RMYWJlbCxcbn0gZnJvbSBcIi4uL3NyYy9iYXNlL2Zvcm1hdFwiO1xuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tIFwiZXRoZXJzL2xpYi91dGlscy5qc1wiO1xuaW1wb3J0IHsgU3Rha2VDaGFuZ2VkVGFibGUgfSBmcm9tIFwiLi4vc3JjL2xpcXVpdHkvU3Rha2VDaGFuZ2VkVGFibGUvU3Rha2VDaGFuZ2VkVGFibGVcIjtcbmltcG9ydCB7IExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUgfSBmcm9tIFwiLi4vc3JjL2xpcXVpdHkvTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZS9MVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlXCI7XG5cbmNvbnN0IE1ZX1dBTExFVCA9IFwiMHgxNzFEYTRDN2U4MGUwQmM0QWUzNmRDOTAzQ0M0QTZkRjMwNzczZDJEXCI7XG4vLyBjb25zdCBSQU5ETyA9IFwiMHg1RDczQTQzYzA2QjRlM2Q1MTAxNjE4YjU4NzkxN0M3ZjE4MzE3NzcwXCI7XG5cbmNvbnN0IGFjY291bnQgPSBNWV9XQUxMRVQ7XG4vLyBjb25zdCBhY2NvdW50ID0gUkFORE87XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGE6IGRlcGxveW1lbnRCbG9jayB9ID0gdXNlQmxvY2soXG4gICAgQk9SUk9XRVJfT1BFUkFUSU9OU19ERVBMT1lNRU5UX0JMT0NLXG4gICk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgoZGVwbG95bWVudEJsb2NrPy50aW1lc3RhbXAgfHwgMCkgKiAxMDAwKTtcbiAgY29uc3QgeyBkYXRhOiBzdGFrZUNoYW5nZWRFdmVudHMgPSBbXSB9ID0gdXNlU3Rha2VDaGFuZ2VkRXZlbnRzKGFjY291bnQpO1xuXG4gIGNvbnN0IHsgZGF0YTogc3Rha2VkTFFUWSB9ID0gdXNlU3Rha2VzKGFjY291bnQpO1xuICBjb25zdCB7IGRhdGE6IHRvdGFsTFFUWVN0YWtlZCB9ID0gdXNlVG90YWxMUVRZU3Rha2VkKCk7XG4gIGNvbnN0IHsgZGF0YTogcGVuZGluZ0xVU0RHYWluIH0gPSB1c2VHZXRQZW5kaW5nTFVTREdhaW4oYWNjb3VudCk7XG4gIGNvbnN0IHsgZGF0YTogcGVuZGluZ0VUSEdhaW4gfSA9IHVzZUdldFBlbmRpbmdFVEhHYWluKGFjY291bnQpO1xuXG4gIGxldCBwb29sU2hhcmUgPSAwO1xuICBsZXQgcG9vbFNoYXJlUGVyY2VudExhYmVsID0gXCIwJVwiO1xuICBpZiAoc3Rha2VkTFFUWT8uZ3QoMCkgJiYgdG90YWxMUVRZU3Rha2VkPy5ndCgwKSkge1xuICAgIHBvb2xTaGFyZSA9ICtmb3JtYXRFdGhlcihzdGFrZWRMUVRZKSAvICtmb3JtYXRFdGhlcih0b3RhbExRVFlTdGFrZWQpO1xuICAgIHBvb2xTaGFyZVBlcmNlbnRMYWJlbCA9IGAkeyhwb29sU2hhcmUgKiAxMDApLnRvRml4ZWQoNCl9JWA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxpcXVpdHkgRXZlbnRzPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJBIExpcXVpdHkgUHJvdG9jb2wgZnJvbnRlbmQgZm9yIGV4cGxvcmluZyBldmVudHMuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjMycHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGgxPkxpcXVpdHkgRXZlbnRzPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTGlxdWl0eSB3YXMgZGVwbG95ZWQgb24gPHN0cm9uZz57ZGF0ZS50b0RhdGVTdHJpbmcoKX08L3N0cm9uZz4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlcmUgaXMgYSB0b3RhbCBvZntcIiBcIn1cbiAgICAgICAgICA8c3Ryb25nPntmb3JtYXRMUVRZTGFiZWwodG90YWxMUVRZU3Rha2VkKX0gTFFUWTwvc3Ryb25nPiBzdGFrZWQgaW4gdGhlXG4gICAgICAgICAgTFFUWSBTdGFraW5nIFBvb2wuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgWW91IGhhdmUgPHN0cm9uZz57Zm9ybWF0TFFUWUxhYmVsKHN0YWtlZExRVFkpfSBMUVRZPC9zdHJvbmc+IHN0YWtlZCBpblxuICAgICAgICAgIHRoZSBzeXN0ZW0sIGdpdmluZyB5b3UgPHN0cm9uZz57cG9vbFNoYXJlUGVyY2VudExhYmVsfTwvc3Ryb25nPiBvZiB0aGVcbiAgICAgICAgICBwb29sLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEN1cnJlbnRseSwgeW91IGhhdmV7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Zm9ybWF0TFVTRExhYmVsKHBlbmRpbmdMVVNER2Fpbil9IExVU0Q8L3N0cm9uZz4gcGVuZGluZyBMVVNEXG4gICAgICAgICAgZ2FpbnMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ3VycmVudCBwZW5kaW5nIEVUSCBnYWluczp7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Zm9ybWF0RXRoZXJMYWJlbChwZW5kaW5nRVRIR2FpbiwgNCl9PC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjMycHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGgzPlJlYWx0aW1lIEVhcm5pbmdzPC9oMz5cbiAgICAgICAgPExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUgYWNjb3VudD17YWNjb3VudH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMzJweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aDM+Q3VycmVudCBTdGFrZTwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSB3YWxsZXQgYmVpbmcgdHJhY2tlZCBpc3tcIiBcIn1cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgPGEgaHJlZj17bWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwoYWNjb3VudCl9PnthY2NvdW50fTwvYT5cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDdXJyZW50IHN0YWtlZCBMUVRZIGFtb3VudDp7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Zm9ybWF0TFFUWUxhYmVsKHN0YWtlZExRVFkpfTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEN1cnJlbnQgcG9vbCBzaGFyZTogPHN0cm9uZz57cG9vbFNoYXJlUGVyY2VudExhYmVsfTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEN1cnJlbnQgcGVuZGluZyBMVVNEIGdhaW5zOntcIiBcIn1cbiAgICAgICAgICA8c3Ryb25nPntmb3JtYXRMVVNETGFiZWwocGVuZGluZ0xVU0RHYWluKX08L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDdXJyZW50IHBlbmRpbmcgRVRIIGdhaW5zOntcIiBcIn1cbiAgICAgICAgICA8c3Ryb25nPntmb3JtYXRFdGhlckxhYmVsKHBlbmRpbmdFVEhHYWluLCA0KX08L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIzMnB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMz5TdGFraW5nIEhpc3Rvcnk8L2gzPlxuICAgICAgICA8U3Rha2VDaGFuZ2VkVGFibGUgc3Rha2VDaGFuZ2VkRXZlbnRzPXtzdGFrZUNoYW5nZWRFdmVudHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwibWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwiLCJ1c2VHZXRQZW5kaW5nRVRIR2FpbiIsInVzZUdldFBlbmRpbmdMVVNER2FpbiIsInVzZVN0YWtlQ2hhbmdlZEV2ZW50cyIsInVzZVN0YWtlcyIsInVzZVRvdGFsTFFUWVN0YWtlZCIsInVzZUJsb2NrIiwiQk9SUk9XRVJfT1BFUkFUSU9OU19ERVBMT1lNRU5UX0JMT0NLIiwiZm9ybWF0RXRoZXJMYWJlbCIsImZvcm1hdExRVFlMYWJlbCIsImZvcm1hdExVU0RMYWJlbCIsImZvcm1hdEV0aGVyIiwiU3Rha2VDaGFuZ2VkVGFibGUiLCJMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlIiwiTVlfV0FMTEVUIiwiYWNjb3VudCIsIkhvbWUiLCJkYXRhIiwiZGVwbG95bWVudEJsb2NrIiwiZGF0ZSIsIkRhdGUiLCJ0aW1lc3RhbXAiLCJzdGFrZUNoYW5nZWRFdmVudHMiLCJzdGFrZWRMUVRZIiwidG90YWxMUVRZU3Rha2VkIiwicGVuZGluZ0xVU0RHYWluIiwicGVuZGluZ0VUSEdhaW4iLCJwb29sU2hhcmUiLCJwb29sU2hhcmVQZXJjZW50TGFiZWwiLCJndCIsInRvRml4ZWQiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nQm90dG9tIiwiaDEiLCJwIiwic3Ryb25nIiwidG9EYXRlU3RyaW5nIiwiaDMiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});