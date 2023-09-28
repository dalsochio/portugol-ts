import { AtribuicaoCompostaMultiplicacaoContext } from "@/language/index.ts";

import { AtribuiçãoCmd } from "./AtribuiçãoCmd.js";
import { Node } from "./Node.js";

export class AtribuiçãoCompostaMultiplicaçãoCmd extends AtribuiçãoCmd {
  constructor(
    public ctx: AtribuicaoCompostaMultiplicacaoContext,
    public children: Node[],
  ) {
    super(ctx, children);
  }
}
