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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_etherscan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/liquity/contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n/* harmony import */ var _src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/wagmi/useBlock */ \"./src/wagmi/useBlock.tsx\");\n/* harmony import */ var _src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/liquity/contracts/borrowerOperations */ \"./src/liquity/contracts/borrowerOperations.ts\");\n/* harmony import */ var _src_base_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/base/format */ \"./src/base/format.ts\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers/lib/utils.js */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_liquity_StakeChangedTable_StakeChangedTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/liquity/StakeChangedTable/StakeChangedTable */ \"./src/liquity/StakeChangedTable/StakeChangedTable.tsx\");\n/* harmony import */ var _src_liquity_LUSDBorrowingFeePaidTable_LUSDBorrowingFeePaidTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable */ \"./src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst MY_WALLET = \"0x171Da4C7e80e0Bc4Ae36dC903CC4A6dF30773d2D\";\n// const RANDO = \"0x5D73A43c06B4e3d5101618b587917C7f18317770\";\nconst account = MY_WALLET;\n// const account = RANDO;\nfunction Home() {\n    _s();\n    const { data: deploymentBlock  } = (0,_src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__.useBlock)(_src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__.BORROWER_OPERATIONS_DEPLOYMENT_BLOCK);\n    const date = new Date(((deploymentBlock === null || deploymentBlock === void 0 ? void 0 : deploymentBlock.timestamp) || 0) * 1000);\n    const { data: stakeChangedEvents = []  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakeChangedEvents)(account);\n    const { data: stakedLQTY  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakes)(account);\n    const { data: totalLQTYStaked  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useTotalLQTYStaked)();\n    const { data: pendingLUSDGain  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingLUSDGain)(account);\n    const { data: pendingETHGain  } = (0,_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingETHGain)(account);\n    let poolShare = 0;\n    let poolSharePercentLabel = \"0%\";\n    if ((stakedLQTY === null || stakedLQTY === void 0 ? void 0 : stakedLQTY.gt(0)) && (totalLQTYStaked === null || totalLQTYStaked === void 0 ? void 0 : totalLQTYStaked.gt(0))) {\n        poolShare = +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__.formatEther)(stakedLQTY) / +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_9__.formatEther)(totalLQTYStaked);\n        poolSharePercentLabel = \"\".concat((poolShare * 100).toFixed(4), \"%\");\n    }\n    const { data: testData  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_10__.useContractRead)({\n        address: _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.LIQUITY_STAKING_ADDRESS,\n        abi: _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.lqtyStakingABI,\n        functionName: \"stakes\",\n        args: [\n            user\n        ],\n        overrides: {\n            blockTag: \"12279983\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Liquity Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A Liquity Protocol frontend for exploring events.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Liquity Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Liquity was deployed on \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: date.toDateString()\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 35\n                            }, this),\n                            \" (Block:\",\n                            \" \",\n                            _src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__.BORROWER_OPERATIONS_DEPLOYMENT_BLOCK,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Reading from contracts:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: (0,_src_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanAddressUrl)(_src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.LIQUITY_STAKING_ADDRESS),\n                                        children: \"LQTY Staking\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: (0,_src_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanAddressUrl)(_src_liquity_contracts_borrowerOperations__WEBPACK_IMPORTED_MODULE_5__.BORROWER_OPERATIONS_ADDRESS),\n                                        children: \"Borrower Operations\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Realtime Earnings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_liquity_LUSDBorrowingFeePaidTable_LUSDBorrowingFeePaidTable__WEBPACK_IMPORTED_MODULE_8__.LUSDBorrowingFeePaidTable, {\n                        account: account\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Current Stake\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"The wallet being tracked is\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: (0,_src_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanAddressUrl)(account),\n                                    children: account\n                                }, void 0, false, {\n                                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current staked LQTY amount:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLQTYLabel)(stakedLQTY)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current total staked LQTY amount:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLQTYLabel)(totalLQTYStaked)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current pool share: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: poolSharePercentLabel\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 31\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current pending LUSD gains:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatLUSDLabel)(pendingLUSDGain)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current pending ETH gains:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: (0,_src_base_format__WEBPACK_IMPORTED_MODULE_6__.formatEtherLabel)(pendingETHGain, 4)\n                            }, void 0, false, {\n                                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    paddingBottom: \"32px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Staking History\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_liquity_StakeChangedTable_StakeChangedTable__WEBPACK_IMPORTED_MODULE_7__.StakeChangedTable, {\n                        stakeChangedEvents: stakeChangedEvents\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/pages/index.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"js3eo8KDTjMeLnaZnrgiRsYlqRk=\", false, function() {\n    return [\n        _src_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_4__.useBlock,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakeChangedEvents,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useStakes,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useTotalLQTYStaked,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingLUSDGain,\n        _src_liquity_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_3__.useGetPendingETHGain,\n        wagmi__WEBPACK_IMPORTED_MODULE_10__.useContractRead\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBtYWtlRXRoZXJzY2FuQWRkcmVzc1VybCB9IGZyb20gXCIuLi9zcmMvZXRoZXJzY2FuXCI7XG5pbXBvcnQge1xuICBMSVFVSVRZX1NUQUtJTkdfQUREUkVTUyxcbiAgbHF0eVN0YWtpbmdBQkksXG4gIHVzZUdldFBlbmRpbmdFVEhHYWluLFxuICB1c2VHZXRQZW5kaW5nTFVTREdhaW4sXG4gIHVzZVN0YWtlQ2hhbmdlZEV2ZW50cyxcbiAgdXNlU3Rha2VzLFxuICB1c2VUb3RhbExRVFlTdGFrZWQsXG59IGZyb20gXCIuLi9zcmMvbGlxdWl0eS9jb250cmFjdHMvbHF0eVN0YWtpbmdcIjtcbmltcG9ydCB7IHVzZUJsb2NrIH0gZnJvbSBcIi4uL3NyYy93YWdtaS91c2VCbG9ja1wiO1xuaW1wb3J0IHtcbiAgQk9SUk9XRVJfT1BFUkFUSU9OU19BRERSRVNTLFxuICBCT1JST1dFUl9PUEVSQVRJT05TX0RFUExPWU1FTlRfQkxPQ0ssXG4gIHVzZVJlYWx0aW1lTFVTREJvcnJvd2luZ0ZlZVBhaWRFdmVudHMsXG59IGZyb20gXCIuLi9zcmMvbGlxdWl0eS9jb250cmFjdHMvYm9ycm93ZXJPcGVyYXRpb25zXCI7XG5pbXBvcnQgeyBQSUNLTEVfRklOQU5DRV9TVFJBVEVHWSB9IGZyb20gXCIuLi9zcmMvcGlja2xlZmluYW5jZVwiO1xuaW1wb3J0IHtcbiAgZm9ybWF0RXRoZXJMYWJlbCxcbiAgZm9ybWF0TFFUWUxhYmVsLFxuICBmb3JtYXRMVVNETGFiZWwsXG59IGZyb20gXCIuLi9zcmMvYmFzZS9mb3JtYXRcIjtcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSBcImV0aGVycy9saWIvdXRpbHMuanNcIjtcbmltcG9ydCB7IFN0YWtlQ2hhbmdlZFRhYmxlIH0gZnJvbSBcIi4uL3NyYy9saXF1aXR5L1N0YWtlQ2hhbmdlZFRhYmxlL1N0YWtlQ2hhbmdlZFRhYmxlXCI7XG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV2ZW50LCBCaWdOdW1iZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBMVVNEQm9ycm93aW5nRmVlUGFpZFRhYmxlIH0gZnJvbSBcIi4uL3NyYy9saXF1aXR5L0xVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUvTFVTREJvcnJvd2luZ0ZlZVBhaWRUYWJsZVwiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RSZWFkIH0gZnJvbSBcIndhZ21pXCI7XG5cbmNvbnN0IE1ZX1dBTExFVCA9IFwiMHgxNzFEYTRDN2U4MGUwQmM0QWUzNmRDOTAzQ0M0QTZkRjMwNzczZDJEXCI7XG4vLyBjb25zdCBSQU5ETyA9IFwiMHg1RDczQTQzYzA2QjRlM2Q1MTAxNjE4YjU4NzkxN0M3ZjE4MzE3NzcwXCI7XG5cbmNvbnN0IGFjY291bnQgPSBNWV9XQUxMRVQ7XG4vLyBjb25zdCBhY2NvdW50ID0gUkFORE87XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGE6IGRlcGxveW1lbnRCbG9jayB9ID0gdXNlQmxvY2soXG4gICAgQk9SUk9XRVJfT1BFUkFUSU9OU19ERVBMT1lNRU5UX0JMT0NLXG4gICk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgoZGVwbG95bWVudEJsb2NrPy50aW1lc3RhbXAgfHwgMCkgKiAxMDAwKTtcbiAgY29uc3QgeyBkYXRhOiBzdGFrZUNoYW5nZWRFdmVudHMgPSBbXSB9ID0gdXNlU3Rha2VDaGFuZ2VkRXZlbnRzKGFjY291bnQpO1xuXG4gIGNvbnN0IHsgZGF0YTogc3Rha2VkTFFUWSB9ID0gdXNlU3Rha2VzKGFjY291bnQpO1xuICBjb25zdCB7IGRhdGE6IHRvdGFsTFFUWVN0YWtlZCB9ID0gdXNlVG90YWxMUVRZU3Rha2VkKCk7XG4gIGNvbnN0IHsgZGF0YTogcGVuZGluZ0xVU0RHYWluIH0gPSB1c2VHZXRQZW5kaW5nTFVTREdhaW4oYWNjb3VudCk7XG4gIGNvbnN0IHsgZGF0YTogcGVuZGluZ0VUSEdhaW4gfSA9IHVzZUdldFBlbmRpbmdFVEhHYWluKGFjY291bnQpO1xuXG4gIGxldCBwb29sU2hhcmUgPSAwO1xuICBsZXQgcG9vbFNoYXJlUGVyY2VudExhYmVsID0gXCIwJVwiO1xuICBpZiAoc3Rha2VkTFFUWT8uZ3QoMCkgJiYgdG90YWxMUVRZU3Rha2VkPy5ndCgwKSkge1xuICAgIHBvb2xTaGFyZSA9ICtmb3JtYXRFdGhlcihzdGFrZWRMUVRZKSAvICtmb3JtYXRFdGhlcih0b3RhbExRVFlTdGFrZWQpO1xuICAgIHBvb2xTaGFyZVBlcmNlbnRMYWJlbCA9IGAkeyhwb29sU2hhcmUgKiAxMDApLnRvRml4ZWQoNCl9JWA7XG4gIH1cbiAgY29uc3Qge2RhdGE6IHRlc3REYXRhIH0gPSB1c2VDb250cmFjdFJlYWQoe1xuICAgIGFkZHJlc3M6IExJUVVJVFlfU1RBS0lOR19BRERSRVNTLFxuICAgIGFiaTogbHF0eVN0YWtpbmdBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBcInN0YWtlc1wiLFxuICAgIGFyZ3M6IFt1c2VyXSxcbiAgICBvdmVycmlkZXM6IHtibG9ja1RhZzogJzEyMjc5OTgzJ31cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5MaXF1aXR5IEV2ZW50czwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQSBMaXF1aXR5IFByb3RvY29sIGZyb250ZW5kIGZvciBleHBsb3JpbmcgZXZlbnRzLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIzMnB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMT5MaXF1aXR5IEV2ZW50czwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExpcXVpdHkgd2FzIGRlcGxveWVkIG9uIDxzdHJvbmc+e2RhdGUudG9EYXRlU3RyaW5nKCl9PC9zdHJvbmc+IChCbG9jazp7XCIgXCJ9XG4gICAgICAgICAge0JPUlJPV0VSX09QRVJBVElPTlNfREVQTE9ZTUVOVF9CTE9DS30pXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgUmVhZGluZyBmcm9tIGNvbnRyYWN0czp7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5BZGRyZXNzVXJsKExJUVVJVFlfU1RBS0lOR19BRERSRVNTKX0+XG4gICAgICAgICAgICAgIExRVFkgU3Rha2luZ1xuICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5BZGRyZXNzVXJsKEJPUlJPV0VSX09QRVJBVElPTlNfQUREUkVTUyl9PlxuICAgICAgICAgICAgICBCb3Jyb3dlciBPcGVyYXRpb25zXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjMycHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGgzPlJlYWx0aW1lIEVhcm5pbmdzPC9oMz5cbiAgICAgICAgPExVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUgYWNjb3VudD17YWNjb3VudH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMzJweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aDM+Q3VycmVudCBTdGFrZTwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSB3YWxsZXQgYmVpbmcgdHJhY2tlZCBpc3tcIiBcIn1cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgPGEgaHJlZj17bWFrZUV0aGVyc2NhbkFkZHJlc3NVcmwoYWNjb3VudCl9PnthY2NvdW50fTwvYT5cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDdXJyZW50IHN0YWtlZCBMUVRZIGFtb3VudDp7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Zm9ybWF0TFFUWUxhYmVsKHN0YWtlZExRVFkpfTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEN1cnJlbnQgdG90YWwgc3Rha2VkIExRVFkgYW1vdW50OntcIiBcIn1cbiAgICAgICAgICA8c3Ryb25nPntmb3JtYXRMUVRZTGFiZWwodG90YWxMUVRZU3Rha2VkKX08L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDdXJyZW50IHBvb2wgc2hhcmU6IDxzdHJvbmc+e3Bvb2xTaGFyZVBlcmNlbnRMYWJlbH08L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDdXJyZW50IHBlbmRpbmcgTFVTRCBnYWluczp7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Zm9ybWF0TFVTRExhYmVsKHBlbmRpbmdMVVNER2Fpbil9PC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ3VycmVudCBwZW5kaW5nIEVUSCBnYWluczp7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz57Zm9ybWF0RXRoZXJMYWJlbChwZW5kaW5nRVRIR2FpbiwgNCl9PC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMzJweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aDM+U3Rha2luZyBIaXN0b3J5PC9oMz5cbiAgICAgICAgPFN0YWtlQ2hhbmdlZFRhYmxlIHN0YWtlQ2hhbmdlZEV2ZW50cz17c3Rha2VDaGFuZ2VkRXZlbnRzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIm1ha2VFdGhlcnNjYW5BZGRyZXNzVXJsIiwiTElRVUlUWV9TVEFLSU5HX0FERFJFU1MiLCJscXR5U3Rha2luZ0FCSSIsInVzZUdldFBlbmRpbmdFVEhHYWluIiwidXNlR2V0UGVuZGluZ0xVU0RHYWluIiwidXNlU3Rha2VDaGFuZ2VkRXZlbnRzIiwidXNlU3Rha2VzIiwidXNlVG90YWxMUVRZU3Rha2VkIiwidXNlQmxvY2siLCJCT1JST1dFUl9PUEVSQVRJT05TX0FERFJFU1MiLCJCT1JST1dFUl9PUEVSQVRJT05TX0RFUExPWU1FTlRfQkxPQ0siLCJmb3JtYXRFdGhlckxhYmVsIiwiZm9ybWF0TFFUWUxhYmVsIiwiZm9ybWF0TFVTRExhYmVsIiwiZm9ybWF0RXRoZXIiLCJTdGFrZUNoYW5nZWRUYWJsZSIsIkxVU0RCb3Jyb3dpbmdGZWVQYWlkVGFibGUiLCJ1c2VDb250cmFjdFJlYWQiLCJNWV9XQUxMRVQiLCJhY2NvdW50IiwiSG9tZSIsImRhdGEiLCJkZXBsb3ltZW50QmxvY2siLCJkYXRlIiwiRGF0ZSIsInRpbWVzdGFtcCIsInN0YWtlQ2hhbmdlZEV2ZW50cyIsInN0YWtlZExRVFkiLCJ0b3RhbExRVFlTdGFrZWQiLCJwZW5kaW5nTFVTREdhaW4iLCJwZW5kaW5nRVRIR2FpbiIsInBvb2xTaGFyZSIsInBvb2xTaGFyZVBlcmNlbnRMYWJlbCIsImd0IiwidG9GaXhlZCIsInRlc3REYXRhIiwiYWRkcmVzcyIsImFiaSIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJ1c2VyIiwib3ZlcnJpZGVzIiwiYmxvY2tUYWciLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nQm90dG9tIiwiaDEiLCJwIiwic3Ryb25nIiwidG9EYXRlU3RyaW5nIiwiYSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});