"use strict";
// Generated from ./src/language/Portugol.g4 by ANTLR 4.13.1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var antlr4_1 = require("antlr4");
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PortugolParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
var PortugolVisitor = /** @class */ (function (_super) {
    __extends(PortugolVisitor, _super);
    function PortugolVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PortugolVisitor;
}(antlr4_1.ParseTreeVisitor));
exports.default = PortugolVisitor;
