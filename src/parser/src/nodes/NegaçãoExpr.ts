import { NegacaoContext } from "@/language/index.ts";

import { Expressão } from "./Expressão.js";
import { Node } from "./Node.js";
import { invariant } from "../helpers/nodes.js";

export class NegaçãoExpr extends Expressão {
  expressão: Expressão;

  constructor(
    public ctx: NegacaoContext,
    public children: Node[],
  ) {
    super(ctx, children);

    for (const child of children) {
      if (child instanceof Expressão) {
        invariant(!this.expressão, child.ctx, "Expressão já definida");
        this.expressão = child;
      } else {
        this.unexpectedChild(child);
      }
    }

    invariant(this.expressão, ctx, "Expressão não definida");
  }
}
