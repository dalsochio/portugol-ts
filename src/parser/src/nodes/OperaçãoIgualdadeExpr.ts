import { OperacaoIgualdadeContext } from "@/language/index.ts";

import { ExpressãoMatemática } from "./ExpressãoMatemática.js";
import { Node } from "./Node.js";

export class OperaçãoIgualdadeExpr extends ExpressãoMatemática {
  constructor(
    public ctx: OperacaoIgualdadeContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
