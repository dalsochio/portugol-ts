import { MultiplicacaoContext } from "@/language/index.ts";

import { ExpressãoMatemática } from "./ExpressãoMatemática.js";
import { Node } from "./Node.js";

export class MultiplicaçãoExpr extends ExpressãoMatemática {
  constructor(
    public ctx: MultiplicacaoContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
