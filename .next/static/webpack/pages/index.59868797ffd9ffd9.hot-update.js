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

/***/ "./src/liquity/StakeChangedTable/StakeChangedTable.tsx":
/*!*************************************************************!*\
  !*** ./src/liquity/StakeChangedTable/StakeChangedTable.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StakeChangedTable\": function() { return /* binding */ StakeChangedTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StakeChangedTableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StakeChangedTableRow */ \"./src/liquity/StakeChangedTable/StakeChangedTableRow.tsx\");\n\n\nconst newLocal = {\n    padding: \"5px 20px\"\n};\nfunction StakeChangedTable(param) {\n    let { stakeChangedEvents  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        style: {\n            width: \"75%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"caption\", {\n                style: {\n                    paddingBottom: 10\n                },\n                children: [\n                    \"The wallet has \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: stakeChangedEvents.length\n                    }, void 0, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 24\n                    }, this),\n                    \" StakeChanged events.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: newLocal,\n                            children: \"Block\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: {\n                                padding: \"5px 20px\"\n                            },\n                            children: \"Tx\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: {\n                                padding: \"5px 20px\"\n                            },\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: {\n                                padding: \"5px 20px\"\n                            },\n                            children: \"Staked amount (LQTY)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: {\n                                padding: \"5px 20px\"\n                            },\n                            children: \"Historical total staked (LQTY)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            style: {\n                                padding: \"5px 20px\"\n                            },\n                            children: \"Historical pool share\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: stakeChangedEvents.map((event, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StakeChangedTableRow__WEBPACK_IMPORTED_MODULE_1__.StakeChangedTableRow, {\n                        event: event,\n                        prevEvent: stakeChangedEvents[i - 1]\n                    }, event.blockNumber, false, {\n                        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dannydelott/Documents/projects/liquity-events/src/liquity/StakeChangedTable/StakeChangedTable.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = StakeChangedTable;\nvar _c;\n$RefreshReg$(_c, \"StakeChangedTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlxdWl0eS9TdGFrZUNoYW5nZWRUYWJsZS9TdGFrZUNoYW5nZWRUYWJsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQThEO0FBTzlELE1BQU1DLFdBQVc7SUFDZkMsU0FBUztBQUNYO0FBQ08sU0FBU0Msa0JBQWtCLEtBRVQsRUFBRTtRQUZPLEVBQ2hDQyxtQkFBa0IsRUFDSyxHQUZTO0lBR2hDLHFCQUNFLDhEQUFDQztRQUFNQyxPQUFPO1lBQUVDLE9BQU87UUFBTTs7MEJBQzNCLDhEQUFDQztnQkFDQ0YsT0FBTztvQkFDTEcsZUFBZTtnQkFDakI7O29CQUNEO2tDQUNnQiw4REFBQ0M7a0NBQVFOLG1CQUFtQk8sTUFBTTs7Ozs7O29CQUFVOzs7Ozs7OzBCQUc3RCw4REFBQ0M7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7NEJBQ0NSLE9BQU9MO3NDQUNSOzs7Ozs7c0NBR0QsOERBQUNhOzRCQUNDUixPQUFPO2dDQUNMSixTQUFTOzRCQUNYO3NDQUNEOzs7Ozs7c0NBR0QsOERBQUNZOzRCQUNDUixPQUFPO2dDQUNMSixTQUFTOzRCQUNYO3NDQUNEOzs7Ozs7c0NBR0QsOERBQUNZOzRCQUNDUixPQUFPO2dDQUNMSixTQUFTOzRCQUNYO3NDQUNEOzs7Ozs7c0NBR0QsOERBQUNZOzRCQUNDUixPQUFPO2dDQUNMSixTQUFTOzRCQUNYO3NDQUNEOzs7Ozs7c0NBR0QsOERBQUNZOzRCQUNDUixPQUFPO2dDQUNMSixTQUFTOzRCQUNYO3NDQUNEOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ2E7MEJBQ0VYLG1CQUFtQlksR0FBRyxDQUFDLENBQUNDLE9BQU9DLElBQU07b0JBQ3BDLHFCQUNFLDhEQUFDbEIsdUVBQW9CQTt3QkFFbkJpQixPQUFPQTt3QkFDUEUsV0FBV2Ysa0JBQWtCLENBQUNjLElBQUksRUFBRTt1QkFGL0JELE1BQU1HLFdBQVc7Ozs7O2dCQUs1Qjs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztLQXRFZWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saXF1aXR5L1N0YWtlQ2hhbmdlZFRhYmxlL1N0YWtlQ2hhbmdlZFRhYmxlLnRzeD8wY2FjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWtlQ2hhbmdlZFRhYmxlUm93IH0gZnJvbSBcIi4vU3Rha2VDaGFuZ2VkVGFibGVSb3dcIjtcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcImV0aGVyc1wiO1xuXG5pbnRlcmZhY2UgU3Rha2VDaGFuZ2VkVGFibGVQcm9wcyB7XG4gIHN0YWtlQ2hhbmdlZEV2ZW50czogRXZlbnRbXTtcbn1cblxuY29uc3QgbmV3TG9jYWwgPSB7XG4gIHBhZGRpbmc6IFwiNXB4IDIwcHhcIixcbn07XG5leHBvcnQgZnVuY3Rpb24gU3Rha2VDaGFuZ2VkVGFibGUoe1xuICBzdGFrZUNoYW5nZWRFdmVudHMsXG59OiBTdGFrZUNoYW5nZWRUYWJsZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjc1JVwiIH19PlxuICAgICAgPGNhcHRpb25cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAxMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgVGhlIHdhbGxldCBoYXMgPHN0cm9uZz57c3Rha2VDaGFuZ2VkRXZlbnRzLmxlbmd0aH08L3N0cm9uZz4gU3Rha2VDaGFuZ2VkXG4gICAgICAgIGV2ZW50cy5cbiAgICAgIDwvY2FwdGlvbj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aFxuICAgICAgICAgICAgc3R5bGU9e25ld0xvY2FsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJsb2NrXG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGhcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDIwcHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVHhcbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMjBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEYXRlXG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGhcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDIwcHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3Rha2VkIGFtb3VudCAoTFFUWSlcbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMjBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIaXN0b3JpY2FsIHRvdGFsIHN0YWtlZCAoTFFUWSlcbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMjBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIaXN0b3JpY2FsIHBvb2wgc2hhcmVcbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge3N0YWtlQ2hhbmdlZEV2ZW50cy5tYXAoKGV2ZW50LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdGFrZUNoYW5nZWRUYWJsZVJvd1xuICAgICAgICAgICAgICBrZXk9e2V2ZW50LmJsb2NrTnVtYmVyfVxuICAgICAgICAgICAgICBldmVudD17ZXZlbnR9XG4gICAgICAgICAgICAgIHByZXZFdmVudD17c3Rha2VDaGFuZ2VkRXZlbnRzW2kgLSAxXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU3Rha2VDaGFuZ2VkVGFibGVSb3ciLCJuZXdMb2NhbCIsInBhZGRpbmciLCJTdGFrZUNoYW5nZWRUYWJsZSIsInN0YWtlQ2hhbmdlZEV2ZW50cyIsInRhYmxlIiwic3R5bGUiLCJ3aWR0aCIsImNhcHRpb24iLCJwYWRkaW5nQm90dG9tIiwic3Ryb25nIiwibGVuZ3RoIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJldmVudCIsImkiLCJwcmV2RXZlbnQiLCJibG9ja051bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/liquity/StakeChangedTable/StakeChangedTable.tsx\n"));

/***/ })

});