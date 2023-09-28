import { OperacaoMenorContext } from "@/language/index.ts";

import { ExpressãoMatemática } from "./ExpressãoMatemática.js";
import { Node } from "./Node.js";

export class OperaçãoMenorQueExpr extends ExpressãoMatemática {
  constructor(
    public ctx: OperacaoMenorContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
