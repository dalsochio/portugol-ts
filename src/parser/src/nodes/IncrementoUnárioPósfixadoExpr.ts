import { IncrementoUnarioPosfixadoContext } from "@/language/index.ts";

import { ExpressãoUnária } from "./ExpressãoUnária.js";
import { Node } from "./Node.js";

export class IncrementoUnárioPósfixadoExpr extends ExpressãoUnária {
  constructor(
    public ctx: IncrementoUnarioPosfixadoContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
