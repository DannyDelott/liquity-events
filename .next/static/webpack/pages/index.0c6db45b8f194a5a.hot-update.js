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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StakeChangedTableRow\": function() { return /* binding */ StakeChangedTableRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers/lib/utils.js */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _base_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/format */ \"./src/base/format.ts\");\n/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../etherscan */ \"./src/etherscan.ts\");\n/* harmony import */ var _wagmi_useBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../wagmi/useBlock */ \"./src/wagmi/useBlock.tsx\");\n/* harmony import */ var _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/lqtyStaking */ \"./src/liquity/contracts/lqtyStaking.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction StakeChangedTableRow(param) {\n    let { event , prevEvent , nextEvent  } = param;\n    var ref, ref1, ref2, ref3;\n    _s();\n    const { data: block  } = (0,_wagmi_useBlock__WEBPACK_IMPORTED_MODULE_3__.useBlock)(event.blockNumber);\n    const date = new Date(((block === null || block === void 0 ? void 0 : block.timestamp) || 0) * 1000);\n    // The amount of LQTY the user has staked in this block\n    const stakedLQTY = ((ref = event.args) === null || ref === void 0 ? void 0 : ref[1]) || ethers__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(0);\n    const stakedLQTYLabel = (0,_base_format__WEBPACK_IMPORTED_MODULE_1__.formatLQTYLabel)(stakedLQTY);\n    // The amount of LQTY the user has staked in the previous block\n    const prevStakedLQTY = prevEvent === null || prevEvent === void 0 ? void 0 : (ref1 = prevEvent.args) === null || ref1 === void 0 ? void 0 : ref1[1];\n    const stakedLQTYDeltaLabel = (0,_base_format__WEBPACK_IMPORTED_MODULE_1__.formatLQTYLabel)(stakedLQTY.sub(prevStakedLQTY || 0));\n    // The amount of LQTY staked in the system after the user staked in this block\n    const { data: totalLQTYStakedUpdatedEvent  } = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_4__.useTotalLQTYStakedUpdatedEvents)(event.blockNumber, event.blockNumber);\n    const totalLQTYStaked = (totalLQTYStakedUpdatedEvent === null || totalLQTYStakedUpdatedEvent === void 0 ? void 0 : (ref2 = totalLQTYStakedUpdatedEvent[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.args) === null || ref3 === void 0 ? void 0 : ref3[0]) || ethers__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(0);\n    const totalLQTYStakedLabel = (0,_base_format__WEBPACK_IMPORTED_MODULE_1__.formatLQTYLabel)(totalLQTYStaked);\n    // The amount of LQTY staked in the system after the user staked in the\n    // previous block\n    const { data: prevTotalLQTYStakedUpdatedEvent  } = (0,_contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_4__.useTotalLQTYStakedUpdatedEvents)(prevEvent === null || prevEvent === void 0 ? void 0 : prevEvent.blockNumber, prevEvent === null || prevEvent === void 0 ? void 0 : prevEvent.blockNumber);\n    let poolShare = 0;\n    let poolSharePercentLabel = \"0%\";\n    if (stakedLQTY.gt(0) && totalLQTYStaked.gt(0)) {\n        poolShare = +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__.formatEther)(stakedLQTY) / +(0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__.formatEther)(totalLQTYStaked);\n        poolSharePercentLabel = \"\".concat((poolShare * 100).toFixed(4), \"%\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanBlockUrl)(event.blockNumber),\n                    children: event.blockNumber\n                }, void 0, false, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: (0,_etherscan__WEBPACK_IMPORTED_MODULE_2__.makeEtherscanTxUrl)(event.transactionHash),\n                    children: [\n                        event.transactionHash.slice(0, 16),\n                        \"...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: [\n                    date.toDateString(),\n                    \" @ \",\n                    date.toLocaleTimeString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: [\n                    stakedLQTYLabel,\n                    prevStakedLQTY ? \" (\".concat(stakedLQTY.gt(prevStakedLQTY) ? \"+\" : \"\").concat(stakedLQTYDeltaLabel, \")\") : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: totalLQTYStakedLabel\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"5px 20px\"\n                },\n                children: poolSharePercentLabel\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(StakeChangedTableRow, \"+d8/oXbWG5jW5qWrjMKeC7Qsh9U=\", false, function() {\n    return [\n        _wagmi_useBlock__WEBPACK_IMPORTED_MODULE_3__.useBlock,\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_4__.useTotalLQTYStakedUpdatedEvents,\n        _contracts_lqtyStaking__WEBPACK_IMPORTED_MODULE_4__.useTotalLQTYStakedUpdatedEvents\n    ];\n});\n_c = StakeChangedTableRow;\nvar _c;\n$RefreshReg$(_c, \"StakeChangedTableRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9TdGFrZUNoYW5nZWRUYWJsZS9TdGFrZUNoYW5nZWRUYWJsZVJvdy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQztBQUVRO0FBQ0U7QUFDd0I7QUFDNUI7QUFDMkI7QUFRcEUsU0FBU08scUJBQXFCLEtBSVQsRUFBZ0I7UUFKUCxFQUNuQ0MsTUFBSyxFQUNMQyxVQUFTLEVBQ1RDLFVBQVMsRUFDaUIsR0FKUztRQVNMRixLQUlQQyxNQVdyQkU7O0lBbkJGLE1BQU0sRUFBRUMsTUFBTUMsTUFBSyxFQUFFLEdBQUdSLHlEQUFRQSxDQUFDRyxNQUFNTSxXQUFXO0lBQ2xELE1BQU1DLE9BQU8sSUFBSUMsS0FBSyxDQUFDSCxDQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9JLFNBQVMsS0FBSSxLQUFLO0lBRWhELHVEQUF1RDtJQUN2RCxNQUFNQyxhQUF3QlYsQ0FBQUEsQ0FBQUEsTUFBQUEsTUFBTVcsSUFBSSxjQUFWWCxpQkFBQUEsS0FBQUEsSUFBQUEsR0FBWSxDQUFDLEVBQUUsS0FBSVIsa0RBQWMsQ0FBQztJQUNoRSxNQUFNcUIsa0JBQWtCbkIsNkRBQWVBLENBQUNnQjtJQUV4QywrREFBK0Q7SUFDL0QsTUFBTUksaUJBQWlCYixzQkFBQUEsdUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLE9BQUFBLFVBQVdVLElBQUksY0FBZlYsa0JBQUFBLEtBQUFBLElBQUFBLElBQWlCLENBQUMsRUFBRTtJQUMzQyxNQUFNYyx1QkFBdUJyQiw2REFBZUEsQ0FDMUNnQixXQUFXTSxHQUFHLENBQUNGLGtCQUFrQjtJQUduQyw4RUFBOEU7SUFDOUUsTUFBTSxFQUFFVixNQUFNRCw0QkFBMkIsRUFBRSxHQUFHTCx1RkFBK0JBLENBQzNFRSxNQUFNTSxXQUFXLEVBQ2pCTixNQUFNTSxXQUFXO0lBRW5CLE1BQU1XLGtCQUNKZCxDQUFBQSx3Q0FBQUEseUNBQUFBLEtBQUFBLElBQUFBLENBQUFBLE9BQUFBLDJCQUE2QixDQUFDLEVBQUUsY0FBaENBLGtCQUFBQSxLQUFBQSxJQUFBQSxRQUFBQSxLQUFrQ1Esb0NBQWxDUixLQUFBQSxRQUF3QyxDQUFDLEVBQUUsS0FBSVgsa0RBQWMsQ0FBQztJQUNoRSxNQUFNMEIsdUJBQXVCeEIsNkRBQWVBLENBQUN1QjtJQUU3Qyx1RUFBdUU7SUFDdkUsaUJBQWlCO0lBQ2pCLE1BQU0sRUFBRWIsTUFBTWUsZ0NBQStCLEVBQUUsR0FDN0NyQix1RkFBK0JBLENBQzdCRyxzQkFBQUEsdUJBQUFBLEtBQUFBLElBQUFBLFVBQVdLLFdBQVcsRUFDdEJMLHNCQUFBQSx1QkFBQUEsS0FBQUEsSUFBQUEsVUFBV0ssV0FBVztJQUcxQixJQUFJYyxZQUFZO0lBQ2hCLElBQUlDLHdCQUF3QjtJQUM1QixJQUFJWCxXQUFXWSxFQUFFLENBQUMsTUFBTUwsZ0JBQWdCSyxFQUFFLENBQUMsSUFBSTtRQUM3Q0YsWUFBWSxDQUFDM0IsZ0VBQVdBLENBQUNpQixjQUFjLENBQUNqQixnRUFBV0EsQ0FBQ3dCO1FBQ3BESSx3QkFBd0IsR0FBZ0MsT0FBN0IsQ0FBQ0QsWUFBWSxHQUFFLEVBQUdHLE9BQU8sQ0FBQyxJQUFHO0lBQzFELENBQUM7SUFFRCxxQkFDRSw4REFBQ0M7OzBCQUVDLDhEQUFDQztnQkFBR0MsT0FBTztvQkFBRUMsV0FBVztvQkFBVUMsU0FBUztnQkFBVzswQkFDcEQsNEVBQUNDO29CQUFFQyxNQUFNbkMsaUVBQXFCQSxDQUFDSyxNQUFNTSxXQUFXOzhCQUM3Q04sTUFBTU0sV0FBVzs7Ozs7Ozs7Ozs7MEJBSXRCLDhEQUFDbUI7Z0JBQUdDLE9BQU87b0JBQUVDLFdBQVc7b0JBQVVDLFNBQVM7Z0JBQVc7MEJBQ3BELDRFQUFDQztvQkFBRUMsTUFBTWxDLDhEQUFrQkEsQ0FBQ0ksTUFBTStCLGVBQWU7O3dCQUM5Qy9CLE1BQU0rQixlQUFlLENBQUNDLEtBQUssQ0FBQyxHQUFHO3dCQUFJOzs7Ozs7Ozs7Ozs7MEJBSXhDLDhEQUFDUDtnQkFBR0MsT0FBTztvQkFBRUMsV0FBVztvQkFBVUMsU0FBUztnQkFBVzs7b0JBQ25EckIsS0FBSzBCLFlBQVk7b0JBQUc7b0JBQUkxQixLQUFLMkIsa0JBQWtCOzs7Ozs7OzBCQUdsRCw4REFBQ1Q7Z0JBQUdDLE9BQU87b0JBQUVDLFdBQVc7b0JBQVVDLFNBQVM7Z0JBQVc7O29CQUNuRGY7b0JBQ0FDLGlCQUNHLEtBRUdDLE9BRERMLFdBQVdZLEVBQUUsQ0FBQ1Isa0JBQWtCLE1BQU0sRUFBRSxFQUNsQixPQUFyQkMsc0JBQXFCLE9BQ3hCLElBQUk7Ozs7Ozs7MEJBR1YsOERBQUNVO2dCQUFHQyxPQUFPO29CQUFFQyxXQUFXO29CQUFVQyxTQUFTO2dCQUFXOzBCQUNuRFY7Ozs7OzswQkFHSCw4REFBQ087Z0JBQUdDLE9BQU87b0JBQUVDLFdBQVc7b0JBQVVDLFNBQVM7Z0JBQVc7MEJBQ25EUDs7Ozs7Ozs7Ozs7O0FBSVQsQ0FBQztHQS9FZXRCOztRQUtVRixxREFBUUE7UUFjY0MsbUZBQStCQTtRQVczRUEsbUZBQStCQTs7O0tBOUJuQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpcXVpdHkvU3Rha2VDaGFuZ2VkVGFibGUvU3Rha2VDaGFuZ2VkVGFibGVSb3cudHN4PzZlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlnTnVtYmVyLCBFdmVudCB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tIFwiZXRoZXJzL2xpYi91dGlscy5qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TFFUWUxhYmVsIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZm9ybWF0XCI7XG5pbXBvcnQgeyBtYWtlRXRoZXJzY2FuQmxvY2tVcmwsIG1ha2VFdGhlcnNjYW5UeFVybCB9IGZyb20gXCIuLi8uLi9ldGhlcnNjYW5cIjtcbmltcG9ydCB7IHVzZUJsb2NrIH0gZnJvbSBcIi4uLy4uL3dhZ21pL3VzZUJsb2NrXCI7XG5pbXBvcnQgeyB1c2VUb3RhbExRVFlTdGFrZWRVcGRhdGVkRXZlbnRzIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9scXR5U3Rha2luZ1wiO1xuXG5pbnRlcmZhY2UgU3Rha2VDaGFuZ2VkVGFibGVSb3dQcm9wcyB7XG4gIGV2ZW50OiBFdmVudDtcbiAgcHJldkV2ZW50PzogRXZlbnQ7XG4gIG5leHRFdmVudD86IEV2ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3Rha2VDaGFuZ2VkVGFibGVSb3coe1xuICBldmVudCxcbiAgcHJldkV2ZW50LFxuICBuZXh0RXZlbnQsXG59OiBTdGFrZUNoYW5nZWRUYWJsZVJvd1Byb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBkYXRhOiBibG9jayB9ID0gdXNlQmxvY2soZXZlbnQuYmxvY2tOdW1iZXIpO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKGJsb2NrPy50aW1lc3RhbXAgfHwgMCkgKiAxMDAwKTtcblxuICAvLyBUaGUgYW1vdW50IG9mIExRVFkgdGhlIHVzZXIgaGFzIHN0YWtlZCBpbiB0aGlzIGJsb2NrXG4gIGNvbnN0IHN0YWtlZExRVFk6IEJpZ051bWJlciA9IGV2ZW50LmFyZ3M/LlsxXSB8fCBCaWdOdW1iZXIuZnJvbSgwKTtcbiAgY29uc3Qgc3Rha2VkTFFUWUxhYmVsID0gZm9ybWF0TFFUWUxhYmVsKHN0YWtlZExRVFkpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2YgTFFUWSB0aGUgdXNlciBoYXMgc3Rha2VkIGluIHRoZSBwcmV2aW91cyBibG9ja1xuICBjb25zdCBwcmV2U3Rha2VkTFFUWSA9IHByZXZFdmVudD8uYXJncz8uWzFdIGFzIEJpZ051bWJlcjtcbiAgY29uc3Qgc3Rha2VkTFFUWURlbHRhTGFiZWwgPSBmb3JtYXRMUVRZTGFiZWwoXG4gICAgc3Rha2VkTFFUWS5zdWIocHJldlN0YWtlZExRVFkgfHwgMClcbiAgKTtcblxuICAvLyBUaGUgYW1vdW50IG9mIExRVFkgc3Rha2VkIGluIHRoZSBzeXN0ZW0gYWZ0ZXIgdGhlIHVzZXIgc3Rha2VkIGluIHRoaXMgYmxvY2tcbiAgY29uc3QgeyBkYXRhOiB0b3RhbExRVFlTdGFrZWRVcGRhdGVkRXZlbnQgfSA9IHVzZVRvdGFsTFFUWVN0YWtlZFVwZGF0ZWRFdmVudHMoXG4gICAgZXZlbnQuYmxvY2tOdW1iZXIsXG4gICAgZXZlbnQuYmxvY2tOdW1iZXJcbiAgKTtcbiAgY29uc3QgdG90YWxMUVRZU3Rha2VkOiBCaWdOdW1iZXIgPVxuICAgIHRvdGFsTFFUWVN0YWtlZFVwZGF0ZWRFdmVudD8uWzBdPy5hcmdzPy5bMF0gfHwgQmlnTnVtYmVyLmZyb20oMCk7XG4gIGNvbnN0IHRvdGFsTFFUWVN0YWtlZExhYmVsID0gZm9ybWF0TFFUWUxhYmVsKHRvdGFsTFFUWVN0YWtlZCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBMUVRZIHN0YWtlZCBpbiB0aGUgc3lzdGVtIGFmdGVyIHRoZSB1c2VyIHN0YWtlZCBpbiB0aGVcbiAgLy8gcHJldmlvdXMgYmxvY2tcbiAgY29uc3QgeyBkYXRhOiBwcmV2VG90YWxMUVRZU3Rha2VkVXBkYXRlZEV2ZW50IH0gPVxuICAgIHVzZVRvdGFsTFFUWVN0YWtlZFVwZGF0ZWRFdmVudHMoXG4gICAgICBwcmV2RXZlbnQ/LmJsb2NrTnVtYmVyLFxuICAgICAgcHJldkV2ZW50Py5ibG9ja051bWJlclxuICAgICk7XG5cbiAgbGV0IHBvb2xTaGFyZSA9IDA7XG4gIGxldCBwb29sU2hhcmVQZXJjZW50TGFiZWwgPSBcIjAlXCI7XG4gIGlmIChzdGFrZWRMUVRZLmd0KDApICYmIHRvdGFsTFFUWVN0YWtlZC5ndCgwKSkge1xuICAgIHBvb2xTaGFyZSA9ICtmb3JtYXRFdGhlcihzdGFrZWRMUVRZKSAvICtmb3JtYXRFdGhlcih0b3RhbExRVFlTdGFrZWQpO1xuICAgIHBvb2xTaGFyZVBlcmNlbnRMYWJlbCA9IGAkeyhwb29sU2hhcmUgKiAxMDApLnRvRml4ZWQoNCl9JWA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx0cj5cbiAgICAgIHsvKiBCbG9jayBOdW1iZXIgKi99XG4gICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfX0+XG4gICAgICAgIDxhIGhyZWY9e21ha2VFdGhlcnNjYW5CbG9ja1VybChldmVudC5ibG9ja051bWJlcil9PlxuICAgICAgICAgIHtldmVudC5ibG9ja051bWJlcn1cbiAgICAgICAgPC9hPlxuICAgICAgPC90ZD5cbiAgICAgIHsvKiBUeCBIYXNoICovfVxuICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH19PlxuICAgICAgICA8YSBocmVmPXttYWtlRXRoZXJzY2FuVHhVcmwoZXZlbnQudHJhbnNhY3Rpb25IYXNoKX0+XG4gICAgICAgICAge2V2ZW50LnRyYW5zYWN0aW9uSGFzaC5zbGljZSgwLCAxNil9Li4uXG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGQ+XG4gICAgICB7LyogRGF0ZSAqL31cbiAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiNXB4IDIwcHhcIiB9fT5cbiAgICAgICAge2RhdGUudG9EYXRlU3RyaW5nKCl9IEAge2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XG4gICAgICA8L3RkPlxuICAgICAgey8qIFN0YWtlZCBhbW91bnQgKExRVFkpICovfVxuICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1cHggMjBweFwiIH19PlxuICAgICAgICB7c3Rha2VkTFFUWUxhYmVsfVxuICAgICAgICB7cHJldlN0YWtlZExRVFlcbiAgICAgICAgICA/IGAgKCR7XG4gICAgICAgICAgICAgIHN0YWtlZExRVFkuZ3QocHJldlN0YWtlZExRVFkpID8gXCIrXCIgOiBcIlwiXG4gICAgICAgICAgICB9JHtzdGFrZWRMUVRZRGVsdGFMYWJlbH0pYFxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvdGQ+XG4gICAgICB7LyogVG90YWwgTFFUWSBzdGFrZWQgaW4gcG9vbCAqL31cbiAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiNXB4IDIwcHhcIiB9fT5cbiAgICAgICAge3RvdGFsTFFUWVN0YWtlZExhYmVsfVxuICAgICAgPC90ZD5cbiAgICAgIHsvKiBIaXN0b3JpY2FsIHBvb2wgc2hhcmUgKi99XG4gICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjVweCAyMHB4XCIgfX0+XG4gICAgICAgIHtwb29sU2hhcmVQZXJjZW50TGFiZWx9XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQmlnTnVtYmVyIiwiZm9ybWF0RXRoZXIiLCJmb3JtYXRMUVRZTGFiZWwiLCJtYWtlRXRoZXJzY2FuQmxvY2tVcmwiLCJtYWtlRXRoZXJzY2FuVHhVcmwiLCJ1c2VCbG9jayIsInVzZVRvdGFsTFFUWVN0YWtlZFVwZGF0ZWRFdmVudHMiLCJTdGFrZUNoYW5nZWRUYWJsZVJvdyIsImV2ZW50IiwicHJldkV2ZW50IiwibmV4dEV2ZW50IiwidG90YWxMUVRZU3Rha2VkVXBkYXRlZEV2ZW50IiwiZGF0YSIsImJsb2NrIiwiYmxvY2tOdW1iZXIiLCJkYXRlIiwiRGF0ZSIsInRpbWVzdGFtcCIsInN0YWtlZExRVFkiLCJhcmdzIiwiZnJvbSIsInN0YWtlZExRVFlMYWJlbCIsInByZXZTdGFrZWRMUVRZIiwic3Rha2VkTFFUWURlbHRhTGFiZWwiLCJzdWIiLCJ0b3RhbExRVFlTdGFrZWQiLCJ0b3RhbExRVFlTdGFrZWRMYWJlbCIsInByZXZUb3RhbExRVFlTdGFrZWRVcGRhdGVkRXZlbnQiLCJwb29sU2hhcmUiLCJwb29sU2hhcmVQZXJjZW50TGFiZWwiLCJndCIsInRvRml4ZWQiLCJ0ciIsInRkIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiYSIsImhyZWYiLCJ0cmFuc2FjdGlvbkhhc2giLCJzbGljZSIsInRvRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\n"));

/***/ })

});