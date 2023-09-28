import { OperacaoOuLogicoContext } from "@/language/index.ts";

import { ExpressãoMatemática } from "./ExpressãoMatemática.js";
import { Node } from "./Node.js";

export class OperaçãoOrLógicoExpr extends ExpressãoMatemática {
  constructor(
    public ctx: OperacaoOuLogicoContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
