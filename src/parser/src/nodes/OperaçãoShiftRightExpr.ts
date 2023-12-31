import { OperacaoShiftRightContext } from "@/language/index.ts";

import { ExpressãoMatemática } from "./ExpressãoMatemática.js";
import { Node } from "./Node.js";

export class OperaçãoShiftRightExpr extends ExpressãoMatemática {
  constructor(
    public ctx: OperacaoShiftRightContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
