"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antlr4_1 = require("antlr4");
var PortugolLexer_1 = require("./language/PortugolLexer");
var PortugolParser_1 = require("./language/PortugolParser");
var input = "your text to parse here";
console.log("input");
var chars = new antlr4_1.CharStream(input); // replace this with a FileStream as required
var lexer = new PortugolLexer_1.default(chars);
var tokens = new antlr4_1.CommonTokenStream(lexer);
var parser = new PortugolParser_1.default(tokens);
var tree = parser.arquivo();
