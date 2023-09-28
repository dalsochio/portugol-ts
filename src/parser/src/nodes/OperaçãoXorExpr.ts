import { OperacaoXorContext } from "@/language/index.ts";

import { ExpressãoMatemática } from "./ExpressãoMatemática.js";
import { Node } from "./Node.js";

export class OperaçãoXorExpr extends ExpressãoMatemática {
  constructor(
    public ctx: OperacaoXorContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
