import { CharStreams, CommonTokenStream } from "antlr4ts";
import { PortugolLexer, PortugolParser, PortugolVisitor } from '@/language';


const code = `programa {
    funcao inicio() {
      escreva("Olá mundo!")
    }
  }`;

const chars = CharStreams.fromString(code); // replace this with a FileStream as required
const lexer = new PortugolLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new PortugolParser(tokens);
const tree = parser.arquivo();

// o que fazer a partir daqui
console.log("tree", tree)