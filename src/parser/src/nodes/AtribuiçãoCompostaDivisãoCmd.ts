import { AtribuicaoCompostaDivisaoContext } from "@/language/index.ts";

import { AtribuiçãoCmd } from "./AtribuiçãoCmd.js";
import { Node } from "./Node.js";

export class AtribuiçãoCompostaDivisãoCmd extends AtribuiçãoCmd {
  constructor(
    public ctx: AtribuicaoCompostaDivisaoContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
