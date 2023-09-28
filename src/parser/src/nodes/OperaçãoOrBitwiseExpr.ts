import { OperacaoOrBitwiseContext } from "@/language/index.ts";

import { ExpressãoMatemática } from "./ExpressãoMatemática.js";
import { Node } from "./Node.js";

export class OperaçãoOrBitwiseExpr extends ExpressãoMatemática {
  constructor(
    public ctx: OperacaoOrBitwiseContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
