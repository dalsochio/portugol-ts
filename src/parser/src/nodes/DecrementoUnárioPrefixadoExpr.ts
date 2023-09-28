import { DecrementoUnarioPrefixadoContext } from "@/language/index.ts";

import { ExpressãoUnária } from "./ExpressãoUnária.js";
import { Node } from "./Node.js";

export class DecrementoUnárioPrefixadoExpr extends ExpressãoUnária {
  constructor(
    public ctx: DecrementoUnarioPrefixadoContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
