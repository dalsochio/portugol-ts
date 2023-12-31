import { CasoContext } from "@/language/index.ts";

import { CasoContrárioExpr } from "./CasoContrárioExpr.js";
import { Comando } from "./Comando.js";
import { Expressão } from "./Expressão.js";
import { Node } from "./Node.js";
import { invariant } from "../helpers/nodes.js";

export class CasoCmd extends Comando {
  condição: Expressão;
  instruções: Array<Expressão | Comando> = [];

  constructor(
    public ctx: CasoContext,
    public children: Node[],
  ) {
    super(ctx, children);

    const contrárioCtx = ctx.CONTRARIO();

    if (contrárioCtx) {
      this.condição = new CasoContrárioExpr(contrárioCtx, []);
    }

    for (const child of children) {
      if (child instanceof Expressão && child.ctx === ctx.expressao()) {
        invariant(!this.condição, child.ctx, "Condição já definida");
        this.condição = child;
      } else if (child instanceof Comando || child instanceof Expressão) {
        this.instruções.push(child);
      } else {
        this.unexpectedChild(child);
      }
    }

    invariant(this.condição, ctx, "Condição não definida");
  }
}
