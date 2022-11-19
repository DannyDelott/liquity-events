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

/***/ "./src/liquity/StakeChangedTable/StakeChangedTableRow.tsx":
/*!****************************************************************!*\
  !*** ./src/liquity/StakeChangedTable/StakeChangedTableRow.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StakeChangedTableRow\": function() { return /* binding */ StakeChangedTableRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers/lib/utils.js */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _base_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/format */ \"./src/base/format.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _wagmi_useBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../wagmi/useBlock */ \"./src/wagmi/useBlock.tsx\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction StakeChangedTableRow(param) {\n    let { event , prevEvent , nextEvent  } = param;\n    var ref, ref1, ref2, ref3;\n    _s();\n    const { data: block  } = (0,_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_3__.useBlock)(event.blockNumber);\n    const date = new Date(((block === null || block === void 0 ? void 0 : block.timestamp) || 0) * 1000);\n    // The amount of LQTY the user has staked in this block\n    const stakedLQTY = ((ref = event.args) === null || ref === void 0 ? void 0 : ref[1]) || ethers__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(0);\n    const stakedLQTYLabel = (0,_base_format__WEBPACK_IMPORTED_MODULE_1__.formatLQTYLabel)(stakedLQTY);\n    // The amount of LQTY the user has staked in the previous block\n    const prevStakedLQTY = prevEvent === null || prevEvent === void 0 ? void 0 : (ref1 = prevEvent.args) === null || ref1 === void 0 ? void 0 : ref1[1];\n    const stakedLQTYDeltaLabel = (0,_base_format__WEBPACK_IMPORTED_MODULE_1__.formatLQTYLabel)(stakedLQTY.sub(prevStakedLQTY || 0));\n    // The total amount of LQTY staked in the system after the user staked in this\n    // block\n    const { data: totalLQTYStakedUpdatedEvent  } = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_4__.useTotalLQTYStakedUpdatedEvents)(event.blockNumber, event.blockNumber);\n    const totalLQTYStaked = (totalLQTYStakedUpdatedEvent === null || totalLQTYStakedUpdatedEvent === void 0 ? void 0 : (ref2 = totalLQTYStakedUpdatedEvent[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.args) === null || ref3 === void 0 ? void 0 : ref3[0]) || ethers__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(0);\n    const totalLQTYStakedLabel = (0,_base_format__WEBPACK_IMPORTED_MODULE_1__.formatLQTYLabel)(totalLQTYStaked);\n    let poolShare = 0;\n    let poolSharePercentLabel = \"0%\";\n    if (stakedLQTY.gt(0) && totalLQTYStaked.gt(0)) {\n        poolShare = +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__.formatEther)(stakedLQTY) / +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__.formatEther)(totalLQTYStaked);\n        poolSharePercentLabel = \"\".concat((poolShare * 100).toFixed(4), \"%\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanBlockUrl)(event.blockNumber),\n                    children: event.blockNumber\n                }, void 0, false, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanTxUrl)(event.transactionHash),\n                    children: [\n                        event.transactionHash.slice(0, 16),\n                        \"...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: [\n                    date.toDateString(),\n                    \" @ \",\n                    date.toLocaleTimeString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: [\n                    stakedLQTYLabel,\n                    prevStakedLQTY ? \" (\".concat(stakedLQTY.gt(prevStakedLQTY) ? \"+\" : \"\").concat(stakedLQTYDeltaLabel, \")\") : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: totalLQTYStakedLabel\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: poolSharePercentLabel\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(StakeChangedTableRow, \"pjp1P9giUvwKx9za2Jn8CT0pXWQ=\", false, function() {\n    return [\n        _wagmi_useBlock__WEBPACK_IMPORTED_MODULE_3__.useBlock,\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_4__.useTotalLQTYStakedUpdatedEvents\n    ];\n});\n_c = StakeChangedTableRow;\nvar _c;\n$RefreshReg$(_c, \"StakeChangedTableRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9TdGFrZUNoYW5nZWRUYWJsZS9TdGFrZUNoYW5nZWRUYWJsZVJvdy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQztBQUVRO0FBQ0U7QUFDd0I7QUFDNUI7QUFDMkI7QUFRcEUsU0FBU08scUJBQXFCLEtBSVQsRUFBZ0I7UUFKUCxFQUNuQ0MsTUFBSyxFQUNMQyxVQUFTLEVBQ1RDLFVBQVMsRUFDaUIsR0FKUztRQVNMRixLQUlQQyxNQVlyQkU7O0lBcEJGLE1BQU0sRUFBRUMsTUFBTUMsTUFBSyxFQUFFLEdBQUdSLHlEQUFRQSxDQUFDRyxNQUFNTSxXQUFXO0lBQ2xELE1BQU1DLE9BQU8sSUFBSUMsS0FBSyxDQUFDSCxDQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9JLFNBQVMsS0FBSSxLQUFLO0lBRWhELHVEQUF1RDtJQUN2RCxNQUFNQyxhQUF3QlYsQ0FBQUEsQ0FBQUEsTUFBQUEsTUFBTVcsSUFBSSxjQUFWWCxpQkFBQUEsS0FBQUEsSUFBQUEsR0FBWSxDQUFDLEVBQUUsS0FBSVIsa0RBQWMsQ0FBQztJQUNoRSxNQUFNcUIsa0JBQWtCbkIsNkRBQWVBLENBQUNnQjtJQUV4QywrREFBK0Q7SUFDL0QsTUFBTUksaUJBQWlCYixzQkFBQUEsdUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLE9BQUFBLFVBQVdVLElBQUksY0FBZlYsa0JBQUFBLEtBQUFBLElBQUFBLElBQWlCLENBQUMsRUFBRTtJQUMzQyxNQUFNYyx1QkFBdUJyQiw2REFBZUEsQ0FDMUNnQixXQUFXTSxHQUFHLENBQUNGLGtCQUFrQjtJQUduQyw4RUFBOEU7SUFDOUUsUUFBUTtJQUNSLE1BQU0sRUFBRVYsTUFBTUQsNEJBQTJCLEVBQUUsR0FBR0wsdUZBQStCQSxDQUMzRUUsTUFBTU0sV0FBVyxFQUNqQk4sTUFBTU0sV0FBVztJQUVuQixNQUFNVyxrQkFDSmQsQ0FBQUEsd0NBQUFBLHlDQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxPQUFBQSwyQkFBNkIsQ0FBQyxFQUFFLGNBQWhDQSxrQkFBQUEsS0FBQUEsSUFBQUEsUUFBQUEsS0FBa0NRLG9DQUFsQ1IsS0FBQUEsUUFBd0MsQ0FBQyxFQUFFLEtBQUlYLGtEQUFjLENBQUM7SUFDaEUsTUFBTTBCLHVCQUF1QnhCLDZEQUFlQSxDQUFDdUI7SUFFN0MsSUFBSUUsWUFBWTtJQUNoQixJQUFJQyx3QkFBd0I7SUFDNUIsSUFBSVYsV0FBV1csRUFBRSxDQUFDLE1BQU1KLGdCQUFnQkksRUFBRSxDQUFDLElBQUk7UUFDN0NGLFlBQVksQ0FBQzFCLGdFQUFXQSxDQUFDaUIsY0FBYyxDQUFDakIsZ0VBQVdBLENBQUN3QjtRQUNwREcsd0JBQXdCLEdBQWdDLE9BQTdCLENBQUNELFlBQVksR0FBRSxFQUFHRyxPQUFPLENBQUMsSUFBRztJQUMxRCxDQUFDO0lBRUQscUJBQ0UsOERBQUNDOzswQkFFQyw4REFBQ0M7Z0JBQUdDLE9BQU87b0JBQUVDLFdBQVc7b0JBQVVDLFNBQVM7Z0JBQVc7MEJBQ3BELDRFQUFDQztvQkFBRUMsTUFBTWxDLGlFQUFxQkEsQ0FBQ0ssTUFBTU0sV0FBVzs4QkFDN0NOLE1BQU1NLFdBQVc7Ozs7Ozs7Ozs7OzBCQUl0Qiw4REFBQ2tCO2dCQUFHQyxPQUFPO29CQUFFQyxXQUFXO29CQUFVQyxTQUFTO2dCQUFXOzBCQUNwRCw0RUFBQ0M7b0JBQUVDLE1BQU1qQyw4REFBa0JBLENBQUNJLE1BQU04QixlQUFlOzt3QkFDOUM5QixNQUFNOEIsZUFBZSxDQUFDQyxLQUFLLENBQUMsR0FBRzt3QkFBSTs7Ozs7Ozs7Ozs7OzBCQUl4Qyw4REFBQ1A7Z0JBQUdDLE9BQU87b0JBQUVDLFdBQVc7b0JBQVVDLFNBQVM7Z0JBQVc7O29CQUNuRHBCLEtBQUt5QixZQUFZO29CQUFHO29CQUFJekIsS0FBSzBCLGtCQUFrQjs7Ozs7OzswQkFHbEQsOERBQUNUO2dCQUFHQyxPQUFPO29CQUFFQyxXQUFXO29CQUFVQyxTQUFTO2dCQUFXOztvQkFDbkRkO29CQUNBQyxpQkFDRyxLQUVHQyxPQURETCxXQUFXVyxFQUFFLENBQUNQLGtCQUFrQixNQUFNLEVBQUUsRUFDbEIsT0FBckJDLHNCQUFxQixPQUN4QixJQUFJOzs7Ozs7OzBCQUdWLDhEQUFDUztnQkFBR0MsT0FBTztvQkFBRUMsV0FBVztvQkFBVUMsU0FBUztnQkFBVzswQkFDbkRUOzs7Ozs7MEJBR0gsOERBQUNNO2dCQUFHQyxPQUFPO29CQUFFQyxXQUFXO29CQUFVQyxTQUFTO2dCQUFXOzBCQUNuRFA7Ozs7Ozs7Ozs7OztBQUlULENBQUM7R0F4RWVyQjs7UUFLVUYscURBQVFBO1FBZWNDLG1GQUErQkE7OztLQXBCL0RDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saXF1aXR5L1N0YWtlQ2hhbmdlZFRhYmxlL1N0YWtlQ2hhbmdlZFRhYmxlUm93LnRzeD82ZWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpZ051bWJlciwgRXZlbnQgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSBcImV0aGVycy9saWIvdXRpbHMuanNcIjtcbmltcG9ydCB7IGZvcm1hdExRVFlMYWJlbCB9IGZyb20gXCIuLi8uLi9iYXNlL2Zvcm1hdFwiO1xuaW1wb3J0IHsgbWFrZUV0aGVyc2NhbkJsb2NrVXJsLCBtYWtlRXRoZXJzY2FuVHhVcmwgfSBmcm9tIFwiLi4vLi4vZXRoZXJzY2FuXCI7XG5pbXBvcnQgeyB1c2VCbG9jayB9IGZyb20gXCIuLi8uLi93YWdtaS91c2VCbG9ja1wiO1xuaW1wb3J0IHsgdXNlVG90YWxMUVRZU3Rha2VkVXBkYXRlZEV2ZW50cyB9IGZyb20gXCIuLi9jb250cmFjdHMvbHF0eVN0YWtpbmdcIjtcblxuaW50ZXJmYWNlIFN0YWtlQ2hhbmdlZFRhYmxlUm93UHJvcHMge1xuICBldmVudDogRXZlbnQ7XG4gIHByZXZFdmVudD86IEV2ZW50O1xuICBuZXh0RXZlbnQ/OiBFdmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0YWtlQ2hhbmdlZFRhYmxlUm93KHtcbiAgZXZlbnQsXG4gIHByZXZFdmVudCxcbiAgbmV4dEV2ZW50LFxufTogU3Rha2VDaGFuZ2VkVGFibGVSb3dQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHsgZGF0YTogYmxvY2sgfSA9IHVzZUJsb2NrKGV2ZW50LmJsb2NrTnVtYmVyKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKChibG9jaz8udGltZXN0YW1wIHx8IDApICogMTAwMCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBMUVRZIHRoZSB1c2VyIGhhcyBzdGFrZWQgaW4gdGhpcyBibG9ja1xuICBjb25zdCBzdGFrZWRMUVRZOiBCaWdOdW1iZXIgPSBldmVudC5hcmdzPy5bMV0gfHwgQmlnTnVtYmVyLmZyb20oMCk7XG4gIGNvbnN0IHN0YWtlZExRVFlMYWJlbCA9IGZvcm1hdExRVFlMYWJlbChzdGFrZWRMUVRZKTtcblxuICAvLyBUaGUgYW1vdW50IG9mIExRVFkgdGhlIHVzZXIgaGFzIHN0YWtlZCBpbiB0aGUgcHJldmlvdXMgYmxvY2tcbiAgY29uc3QgcHJldlN0YWtlZExRVFkgPSBwcmV2RXZlbnQ/LmFyZ3M/LlsxXSBhcyBCaWdOdW1iZXI7XG4gIGNvbnN0IHN0YWtlZExRVFlEZWx0YUxhYmVsID0gZm9ybWF0TFFUWUxhYmVsKFxuICAgIHN0YWtlZExRVFkuc3ViKHByZXZTdGFrZWRMUVRZIHx8IDApXG4gICk7XG5cbiAgLy8gVGhlIHRvdGFsIGFtb3VudCBvZiBMUVRZIHN0YWtlZCBpbiB0aGUgc3lzdGVtIGFmdGVyIHRoZSB1c2VyIHN0YWtlZCBpbiB0aGlzXG4gIC8vIGJsb2NrXG4gIGNvbnN0IHsgZGF0YTogdG90YWxMUVRZU3Rha2VkVXBkYXRlZEV2ZW50IH0gPSB1c2VUb3RhbExRVFlTdGFrZWRVcGRhdGVkRXZlbnRzKFxuICAgIGV2ZW50LmJsb2NrTnVtYmVyLFxuICAgIGV2ZW50LmJsb2NrTnVtYmVyXG4gICk7XG4gIGNvbnN0IHRvdGFsTFFUWVN0YWtlZDogQmlnTnVtYmVyID1cbiAgICB0b3RhbExRVFlTdGFrZWRVcGRhdGVkRXZlbnQ/LlswXT8uYXJncz8uWzBdIHx8IEJpZ051bWJlci5mcm9tKDApO1xuICBjb25zdCB0b3RhbExRVFlTdGFrZWRMYWJlbCA9IGZvcm1hdExRVFlMYWJlbCh0b3RhbExRVFlTdGFrZWQpO1xuXG4gIGxldCBwb29sU2hhcmUgPSAwO1xuICBsZXQgcG9vbFNoYXJlUGVyY2VudExhYmVsID0gXCIwJVwiO1xuICBpZiAoc3Rha2VkTFFUWS5ndCgwKSAmJiB0b3RhbExRVFlTdGFrZWQuZ3QoMCkpIHtcbiAgICBwb29sU2hhcmUgPSArZm9ybWF0RXRoZXIoc3Rha2VkTFFUWSkgLyArZm9ybWF0RXRoZXIodG90YWxMUVRZU3Rha2VkKTtcbiAgICBwb29sU2hhcmVQZXJjZW50TGFiZWwgPSBgJHsocG9vbFNoYXJlICogMTAwKS50b0ZpeGVkKDQpfSVgO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dHI+XG4gICAgICB7LyogQmxvY2sgTnVtYmVyICovfVxuICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH19PlxuICAgICAgICA8YSBocmVmPXttYWtlRXRoZXJzY2FuQmxvY2tVcmwoZXZlbnQuYmxvY2tOdW1iZXIpfT5cbiAgICAgICAgICB7ZXZlbnQuYmxvY2tOdW1iZXJ9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGQ+XG4gICAgICB7LyogVHggSGFzaCAqL31cbiAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiNXB4IDIwcHhcIiB9fT5cbiAgICAgICAgPGEgaHJlZj17bWFrZUV0aGVyc2NhblR4VXJsKGV2ZW50LnRyYW5zYWN0aW9uSGFzaCl9PlxuICAgICAgICAgIHtldmVudC50cmFuc2FjdGlvbkhhc2guc2xpY2UoMCwgMTYpfS4uLlxuICAgICAgICA8L2E+XG4gICAgICA8L3RkPlxuICAgICAgey8qIERhdGUgKi99XG4gICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfX0+XG4gICAgICAgIHtkYXRlLnRvRGF0ZVN0cmluZygpfSBAIHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfVxuICAgICAgPC90ZD5cbiAgICAgIHsvKiBTdGFrZWQgYW1vdW50IChMUVRZKSAqL31cbiAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiNXB4IDIwcHhcIiB9fT5cbiAgICAgICAge3N0YWtlZExRVFlMYWJlbH1cbiAgICAgICAge3ByZXZTdGFrZWRMUVRZXG4gICAgICAgICAgPyBgICgke1xuICAgICAgICAgICAgICBzdGFrZWRMUVRZLmd0KHByZXZTdGFrZWRMUVRZKSA/IFwiK1wiIDogXCJcIlxuICAgICAgICAgICAgfSR7c3Rha2VkTFFUWURlbHRhTGFiZWx9KWBcbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L3RkPlxuICAgICAgey8qIFRvdGFsIExRVFkgc3Rha2VkIGluIHBvb2wgKi99XG4gICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfX0+XG4gICAgICAgIHt0b3RhbExRVFlTdGFrZWRMYWJlbH1cbiAgICAgIDwvdGQ+XG4gICAgICB7LyogSGlzdG9yaWNhbCBwb29sIHNoYXJlICovfVxuICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH19PlxuICAgICAgICB7cG9vbFNoYXJlUGVyY2VudExhYmVsfVxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJpZ051bWJlciIsImZvcm1hdEV0aGVyIiwiZm9ybWF0TFFUWUxhYmVsIiwibWFrZUV0aGVyc2NhbkJsb2NrVXJsIiwibWFrZUV0aGVyc2NhblR4VXJsIiwidXNlQmxvY2siLCJ1c2VUb3RhbExRVFlTdGFrZWRVcGRhdGVkRXZlbnRzIiwiU3Rha2VDaGFuZ2VkVGFibGVSb3ciLCJldmVudCIsInByZXZFdmVudCIsIm5leHRFdmVudCIsInRvdGFsTFFUWVN0YWtlZFVwZGF0ZWRFdmVudCIsImRhdGEiLCJibG9jayIsImJsb2NrTnVtYmVyIiwiZGF0ZSIsIkRhdGUiLCJ0aW1lc3RhbXAiLCJzdGFrZWRMUVRZIiwiYXJncyIsImZyb20iLCJzdGFrZWRMUVRZTGFiZWwiLCJwcmV2U3Rha2VkTFFUWSIsInN0YWtlZExRVFlEZWx0YUxhYmVsIiwic3ViIiwidG90YWxMUVRZU3Rha2VkIiwidG90YWxMUVRZU3Rha2VkTGFiZWwiLCJwb29sU2hhcmUiLCJwb29sU2hhcmVQZXJjZW50TGFiZWwiLCJndCIsInRvRml4ZWQiLCJ0ciIsInRkIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiYSIsImhyZWYiLCJ0cmFuc2FjdGlvbkhhc2giLCJzbGljZSIsInRvRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\n"));

/***/ })

});