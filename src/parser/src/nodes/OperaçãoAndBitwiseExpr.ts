import { OperacaoAndBitwiseContext } from "@/language/index.ts";

import { ExpressãoMatemática } from "./ExpressãoMatemática.js";
import { Node } from "./Node.js";

export class OperaçãoAndBitwiseExpr extends ExpressãoMatemática {
  constructor(
    public ctx: OperacaoAndBitwiseContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
