import { ModuloContext } from "@/language/index.ts";

import { ExpressãoMatemática } from "./ExpressãoMatemática.js";
import { Node } from "./Node.js";

export class MóduloExpr extends ExpressãoMatemática {
  constructor(
    public ctx: ModuloContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
