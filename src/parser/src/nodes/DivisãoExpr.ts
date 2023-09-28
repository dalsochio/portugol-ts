import { DivisaoContext } from "@/language/index.ts";

import { ExpressãoMatemática } from "./ExpressãoMatemática.js";
import { Node } from "./Node.js";

export class DivisãoExpr extends ExpressãoMatemática {
  constructor(
    public ctx: DivisaoContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
