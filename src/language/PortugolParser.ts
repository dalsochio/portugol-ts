// Generated from ./src/language/Portugol.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import PortugolListener from "./PortugolListener.js";
import PortugolVisitor from "./PortugolVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export class PortugolParser extends Parser {
	public static readonly ABRE_PARENTESES = 1;
	public static readonly FECHA_PARENTESES = 2;
	public static readonly ABRE_COLCHETES = 3;
	public static readonly FECHA_COLCHETES = 4;
	public static readonly ABRE_CHAVES = 5;
	public static readonly FECHA_CHAVES = 6;
	public static readonly TIPO = 7;
	public static readonly FACA = 8;
	public static readonly ENQUANTO = 9;
	public static readonly PARA = 10;
	public static readonly SE = 11;
	public static readonly SENAO = 12;
	public static readonly CONSTANTE = 13;
	public static readonly FUNCAO = 14;
	public static readonly PROGRAMA = 15;
	public static readonly ESCOLHA = 16;
	public static readonly CASO = 17;
	public static readonly CONTRARIO = 18;
	public static readonly PARE = 19;
	public static readonly RETORNE = 20;
	public static readonly INCLUA = 21;
	public static readonly BIBLIOTECA = 22;
	public static readonly OP_NAO = 23;
	public static readonly OP_E_LOGICO = 24;
	public static readonly OP_OU_LOGICO = 25;
	public static readonly OP_SUBTRACAO = 26;
	public static readonly OP_ADICAO = 27;
	public static readonly OP_MULTIPLICACAO = 28;
	public static readonly OP_DIVISAO = 29;
	public static readonly OP_MOD = 30;
	public static readonly OP_ATRIBUICAO = 31;
	public static readonly OP_IGUALDADE = 32;
	public static readonly OP_DIFERENCA = 33;
	public static readonly OP_MAIOR = 34;
	public static readonly OP_MENOR = 35;
	public static readonly OP_MENOR_IGUAL = 36;
	public static readonly OP_MAIOR_IGUAL = 37;
	public static readonly OP_INCREMENTO_UNARIO = 38;
	public static readonly OP_DECREMENTO_UNARIO = 39;
	public static readonly OP_SHIFT_LEFT = 40;
	public static readonly OP_SHIFT_RIGHT = 41;
	public static readonly OP_XOR = 42;
	public static readonly OP_OU_BITWISE = 43;
	public static readonly OP_NOT_BITWISE = 44;
	public static readonly OP_ALIAS_BIBLIOTECA = 45;
	public static readonly E_COMERCIAL = 46;
	public static readonly OP_MAIS_IGUAL = 47;
	public static readonly OP_MENOS_IGUAL = 48;
	public static readonly OP_MULTIPLICACAO_IGUAL = 49;
	public static readonly OP_DIVISAO_IGUAL = 50;
	public static readonly LOGICO = 51;
	public static readonly VERDADEIRO = 52;
	public static readonly FALSO = 53;
	public static readonly CARACTER = 54;
	public static readonly STRING = 55;
	public static readonly ID = 56;
	public static readonly REAL = 57;
	public static readonly INT = 58;
	public static readonly HEXADECIMAL = 59;
	public static readonly COMENTARIO = 60;
	public static readonly COMENTARIO_SIMPLES = 61;
	public static readonly WS = 62;
	public static readonly PONTO = 63;
	public static readonly VIRGULA = 64;
	public static readonly PONTOVIRGULA = 65;
	public static readonly DOISPONTOS = 66;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_arquivo = 0;
	public static readonly RULE_inclusaoBiblioteca = 1;
	public static readonly RULE_listaDeclaracoes = 2;
	public static readonly RULE_declaracao = 3;
	public static readonly RULE_declaracaoVariavel = 4;
	public static readonly RULE_declaracaoMatriz = 5;
	public static readonly RULE_inicializacaoMatriz = 6;
	public static readonly RULE_linhaMatriz = 7;
	public static readonly RULE_colunaMatriz = 8;
	public static readonly RULE_declaracaoArray = 9;
	public static readonly RULE_inicializacaoArray = 10;
	public static readonly RULE_tamanhoArray = 11;
	public static readonly RULE_declaracaoFuncao = 12;
	public static readonly RULE_parametroFuncao = 13;
	public static readonly RULE_listaParametros = 14;
	public static readonly RULE_parametro = 15;
	public static readonly RULE_parametroArray = 16;
	public static readonly RULE_parametroMatriz = 17;
	public static readonly RULE_comando = 18;
	public static readonly RULE_atribuicao = 19;
	public static readonly RULE_atribuicaoComposta = 20;
	public static readonly RULE_retorne = 21;
	public static readonly RULE_se = 22;
	public static readonly RULE_senao = 23;
	public static readonly RULE_enquanto = 24;
	public static readonly RULE_facaEnquanto = 25;
	public static readonly RULE_para = 26;
	public static readonly RULE_listaComandos = 27;
	public static readonly RULE_inicializacaoPara = 28;
	public static readonly RULE_condicao = 29;
	public static readonly RULE_incrementoPara = 30;
	public static readonly RULE_escolha = 31;
	public static readonly RULE_caso = 32;
	public static readonly RULE_pare = 33;
	public static readonly RULE_indiceArray = 34;
	public static readonly RULE_expressao = 35;
	public static readonly RULE_listaExpressoes = 36;
	public static readonly RULE_escopoBiblioteca = 37;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", null, 
                                                            "'faca'", "'enquanto'", 
                                                            "'para'", "'se'", 
                                                            "'senao'", "'const'", 
                                                            "'funcao'", 
                                                            "'programa'", 
                                                            "'escolha'", 
                                                            "'caso'", "'contrario'", 
                                                            "'pare'", "'retorne'", 
                                                            "'inclua'", 
                                                            "'biblioteca'", 
                                                            "'nao'", "'e'", 
                                                            "'ou'", "'-'", 
                                                            "'+'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'='", "'=='", 
                                                            "'!='", "'>'", 
                                                            "'<'", "'<='", 
                                                            "'>='", "'++'", 
                                                            "'--'", "'<<'", 
                                                            "'>>'", "'^'", 
                                                            "'|'", "'~'", 
                                                            "'-->'", "'&'", 
                                                            "'+='", "'-='", 
                                                            "'*='", "'/='", 
                                                            null, "'verdadeiro'", 
                                                            "'falso'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'.'", "','", 
                                                            "';'", "':'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ABRE_PARENTESES", 
                                                             "FECHA_PARENTESES", 
                                                             "ABRE_COLCHETES", 
                                                             "FECHA_COLCHETES", 
                                                             "ABRE_CHAVES", 
                                                             "FECHA_CHAVES", 
                                                             "TIPO", "FACA", 
                                                             "ENQUANTO", 
                                                             "PARA", "SE", 
                                                             "SENAO", "CONSTANTE", 
                                                             "FUNCAO", "PROGRAMA", 
                                                             "ESCOLHA", 
                                                             "CASO", "CONTRARIO", 
                                                             "PARE", "RETORNE", 
                                                             "INCLUA", "BIBLIOTECA", 
                                                             "OP_NAO", "OP_E_LOGICO", 
                                                             "OP_OU_LOGICO", 
                                                             "OP_SUBTRACAO", 
                                                             "OP_ADICAO", 
                                                             "OP_MULTIPLICACAO", 
                                                             "OP_DIVISAO", 
                                                             "OP_MOD", "OP_ATRIBUICAO", 
                                                             "OP_IGUALDADE", 
                                                             "OP_DIFERENCA", 
                                                             "OP_MAIOR", 
                                                             "OP_MENOR", 
                                                             "OP_MENOR_IGUAL", 
                                                             "OP_MAIOR_IGUAL", 
                                                             "OP_INCREMENTO_UNARIO", 
                                                             "OP_DECREMENTO_UNARIO", 
                                                             "OP_SHIFT_LEFT", 
                                                             "OP_SHIFT_RIGHT", 
                                                             "OP_XOR", "OP_OU_BITWISE", 
                                                             "OP_NOT_BITWISE", 
                                                             "OP_ALIAS_BIBLIOTECA", 
                                                             "E_COMERCIAL", 
                                                             "OP_MAIS_IGUAL", 
                                                             "OP_MENOS_IGUAL", 
                                                             "OP_MULTIPLICACAO_IGUAL", 
                                                             "OP_DIVISAO_IGUAL", 
                                                             "LOGICO", "VERDADEIRO", 
                                                             "FALSO", "CARACTER", 
                                                             "STRING", "ID", 
                                                             "REAL", "INT", 
                                                             "HEXADECIMAL", 
                                                             "COMENTARIO", 
                                                             "COMENTARIO_SIMPLES", 
                                                             "WS", "PONTO", 
                                                             "VIRGULA", 
                                                             "PONTOVIRGULA", 
                                                             "DOISPONTOS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"arquivo", "inclusaoBiblioteca", "listaDeclaracoes", "declaracao", "declaracaoVariavel", 
		"declaracaoMatriz", "inicializacaoMatriz", "linhaMatriz", "colunaMatriz", 
		"declaracaoArray", "inicializacaoArray", "tamanhoArray", "declaracaoFuncao", 
		"parametroFuncao", "listaParametros", "parametro", "parametroArray", "parametroMatriz", 
		"comando", "atribuicao", "atribuicaoComposta", "retorne", "se", "senao", 
		"enquanto", "facaEnquanto", "para", "listaComandos", "inicializacaoPara", 
		"condicao", "incrementoPara", "escolha", "caso", "pare", "indiceArray", 
		"expressao", "listaExpressoes", "escopoBiblioteca",
	];
	public get grammarFileName(): string { return "Portugol.g4"; }
	public get literalNames(): (string | null)[] { return PortugolParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return PortugolParser.symbolicNames; }
	public get ruleNames(): string[] { return PortugolParser.ruleNames; }
	public get serializedATN(): number[] { return PortugolParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, PortugolParser._ATN, PortugolParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public arquivo(): ArquivoContext {
		let localctx: ArquivoContext = new ArquivoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, PortugolParser.RULE_arquivo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this.match(PortugolParser.PROGRAMA);
			this.state = 77;
			this.match(PortugolParser.ABRE_CHAVES);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 78;
				this.inclusaoBiblioteca();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 24704) !== 0)) {
				{
				this.state = 86;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 14:
					{
					this.state = 84;
					this.declaracaoFuncao();
					}
					break;
				case 7:
				case 13:
					{
					this.state = 85;
					this.listaDeclaracoes();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 91;
			this.match(PortugolParser.FECHA_CHAVES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inclusaoBiblioteca(): InclusaoBibliotecaContext {
		let localctx: InclusaoBibliotecaContext = new InclusaoBibliotecaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, PortugolParser.RULE_inclusaoBiblioteca);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 93;
			this.match(PortugolParser.INCLUA);
			this.state = 94;
			this.match(PortugolParser.BIBLIOTECA);
			this.state = 95;
			this.match(PortugolParser.ID);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 96;
				this.match(PortugolParser.OP_ALIAS_BIBLIOTECA);
				this.state = 97;
				this.match(PortugolParser.ID);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listaDeclaracoes(): ListaDeclaracoesContext {
		let localctx: ListaDeclaracoesContext = new ListaDeclaracoesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, PortugolParser.RULE_listaDeclaracoes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 100;
				this.match(PortugolParser.CONSTANTE);
				}
			}

			this.state = 103;
			this.match(PortugolParser.TIPO);
			this.state = 104;
			this.declaracao();
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 105;
				this.match(PortugolParser.VIRGULA);
				this.state = 106;
				this.declaracao();
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaracao(): DeclaracaoContext {
		let localctx: DeclaracaoContext = new DeclaracaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, PortugolParser.RULE_declaracao);
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 112;
				this.declaracaoVariavel();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 113;
				this.declaracaoArray();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 114;
				this.declaracaoMatriz();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaracaoVariavel(): DeclaracaoVariavelContext {
		let localctx: DeclaracaoVariavelContext = new DeclaracaoVariavelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, PortugolParser.RULE_declaracaoVariavel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 117;
			this.match(PortugolParser.ID);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 118;
				this.match(PortugolParser.OP_ATRIBUICAO);
				this.state = 119;
				this.expressao(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaracaoMatriz(): DeclaracaoMatrizContext {
		let localctx: DeclaracaoMatrizContext = new DeclaracaoMatrizContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, PortugolParser.RULE_declaracaoMatriz);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 122;
			this.match(PortugolParser.ID);
			this.state = 123;
			this.match(PortugolParser.ABRE_COLCHETES);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209715202) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
				{
				this.state = 124;
				this.linhaMatriz();
				}
			}

			this.state = 127;
			this.match(PortugolParser.FECHA_COLCHETES);
			this.state = 128;
			this.match(PortugolParser.ABRE_COLCHETES);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209715202) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
				{
				this.state = 129;
				this.colunaMatriz();
				}
			}

			this.state = 132;
			this.match(PortugolParser.FECHA_COLCHETES);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 133;
				this.match(PortugolParser.OP_ATRIBUICAO);
				this.state = 134;
				this.inicializacaoMatriz();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inicializacaoMatriz(): InicializacaoMatrizContext {
		let localctx: InicializacaoMatrizContext = new InicializacaoMatrizContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, PortugolParser.RULE_inicializacaoMatriz);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 137;
			this.match(PortugolParser.ABRE_CHAVES);
			this.state = 138;
			this.inicializacaoArray();
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 139;
				this.match(PortugolParser.VIRGULA);
				this.state = 140;
				this.inicializacaoArray();
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 146;
			this.match(PortugolParser.FECHA_CHAVES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public linhaMatriz(): LinhaMatrizContext {
		let localctx: LinhaMatrizContext = new LinhaMatrizContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, PortugolParser.RULE_linhaMatriz);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 148;
			this.tamanhoArray();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public colunaMatriz(): ColunaMatrizContext {
		let localctx: ColunaMatrizContext = new ColunaMatrizContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, PortugolParser.RULE_colunaMatriz);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			this.tamanhoArray();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaracaoArray(): DeclaracaoArrayContext {
		let localctx: DeclaracaoArrayContext = new DeclaracaoArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, PortugolParser.RULE_declaracaoArray);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 152;
			this.match(PortugolParser.ID);
			this.state = 153;
			this.match(PortugolParser.ABRE_COLCHETES);
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209715202) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
				{
				this.state = 154;
				this.tamanhoArray();
				}
			}

			this.state = 157;
			this.match(PortugolParser.FECHA_COLCHETES);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 158;
				this.match(PortugolParser.OP_ATRIBUICAO);
				this.state = 159;
				this.inicializacaoArray();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inicializacaoArray(): InicializacaoArrayContext {
		let localctx: InicializacaoArrayContext = new InicializacaoArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, PortugolParser.RULE_inicializacaoArray);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this.match(PortugolParser.ABRE_CHAVES);
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209715202) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
				{
				this.state = 163;
				this.listaExpressoes();
				}
			}

			this.state = 166;
			this.match(PortugolParser.FECHA_CHAVES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tamanhoArray(): TamanhoArrayContext {
		let localctx: TamanhoArrayContext = new TamanhoArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, PortugolParser.RULE_tamanhoArray);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 168;
			this.expressao(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaracaoFuncao(): DeclaracaoFuncaoContext {
		let localctx: DeclaracaoFuncaoContext = new DeclaracaoFuncaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, PortugolParser.RULE_declaracaoFuncao);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			this.match(PortugolParser.FUNCAO);
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 171;
				this.match(PortugolParser.TIPO);
				}
			}

			this.state = 174;
			this.match(PortugolParser.ID);
			this.state = 175;
			this.parametroFuncao();
			this.state = 176;
			this.match(PortugolParser.ABRE_CHAVES);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 211365762) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
				{
				{
				this.state = 177;
				this.comando();
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 183;
			this.match(PortugolParser.FECHA_CHAVES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parametroFuncao(): ParametroFuncaoContext {
		let localctx: ParametroFuncaoContext = new ParametroFuncaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, PortugolParser.RULE_parametroFuncao);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 185;
			this.match(PortugolParser.ABRE_PARENTESES);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 186;
				this.listaParametros();
				}
			}

			this.state = 189;
			this.match(PortugolParser.FECHA_PARENTESES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listaParametros(): ListaParametrosContext {
		let localctx: ListaParametrosContext = new ListaParametrosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, PortugolParser.RULE_listaParametros);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 191;
			this.parametro();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 192;
				this.match(PortugolParser.VIRGULA);
				this.state = 193;
				this.parametro();
				}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parametro(): ParametroContext {
		let localctx: ParametroContext = new ParametroContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, PortugolParser.RULE_parametro);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			this.match(PortugolParser.TIPO);
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 200;
				this.match(PortugolParser.E_COMERCIAL);
				}
			}

			this.state = 203;
			this.match(PortugolParser.ID);
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 204;
				this.parametroArray();
				}
				break;
			case 2:
				{
				this.state = 205;
				this.parametroMatriz();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parametroArray(): ParametroArrayContext {
		let localctx: ParametroArrayContext = new ParametroArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, PortugolParser.RULE_parametroArray);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 208;
			this.match(PortugolParser.ABRE_COLCHETES);
			this.state = 209;
			this.match(PortugolParser.FECHA_COLCHETES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parametroMatriz(): ParametroMatrizContext {
		let localctx: ParametroMatrizContext = new ParametroMatrizContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, PortugolParser.RULE_parametroMatriz);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 211;
			this.match(PortugolParser.ABRE_COLCHETES);
			this.state = 212;
			this.match(PortugolParser.FECHA_COLCHETES);
			this.state = 213;
			this.match(PortugolParser.ABRE_COLCHETES);
			this.state = 214;
			this.match(PortugolParser.FECHA_COLCHETES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comando(): ComandoContext {
		let localctx: ComandoContext = new ComandoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, PortugolParser.RULE_comando);
		try {
			this.state = 227;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 216;
				this.listaDeclaracoes();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 217;
				this.se();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 218;
				this.enquanto();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 219;
				this.facaEnquanto();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 220;
				this.para();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 221;
				this.escolha();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 222;
				this.retorne();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 223;
				this.pare();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 224;
				this.atribuicao();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 225;
				this.atribuicaoComposta();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 226;
				this.expressao(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atribuicao(): AtribuicaoContext {
		let localctx: AtribuicaoContext = new AtribuicaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, PortugolParser.RULE_atribuicao);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 229;
			this.expressao(0);
			this.state = 230;
			this.match(PortugolParser.OP_ATRIBUICAO);
			this.state = 231;
			this.expressao(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atribuicaoComposta(): AtribuicaoCompostaContext {
		let localctx: AtribuicaoCompostaContext = new AtribuicaoCompostaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, PortugolParser.RULE_atribuicaoComposta);
		try {
			this.state = 249;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				localctx = new AtribuicaoCompostaSomaContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 233;
				this.expressao(0);
				this.state = 234;
				this.match(PortugolParser.OP_MAIS_IGUAL);
				this.state = 235;
				this.expressao(0);
				}
				break;
			case 2:
				localctx = new AtribuicaoCompostaSubtracaoContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 237;
				this.expressao(0);
				this.state = 238;
				this.match(PortugolParser.OP_MENOS_IGUAL);
				this.state = 239;
				this.expressao(0);
				}
				break;
			case 3:
				localctx = new AtribuicaoCompostaMultiplicacaoContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 241;
				this.expressao(0);
				this.state = 242;
				this.match(PortugolParser.OP_MULTIPLICACAO_IGUAL);
				this.state = 243;
				this.expressao(0);
				}
				break;
			case 4:
				localctx = new AtribuicaoCompostaDivisaoContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 245;
				this.expressao(0);
				this.state = 246;
				this.match(PortugolParser.OP_DIVISAO_IGUAL);
				this.state = 247;
				this.expressao(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public retorne(): RetorneContext {
		let localctx: RetorneContext = new RetorneContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, PortugolParser.RULE_retorne);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 251;
			this.match(PortugolParser.RETORNE);
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 252;
				this.expressao(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public se(): SeContext {
		let localctx: SeContext = new SeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, PortugolParser.RULE_se);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this.match(PortugolParser.SE);
			this.state = 256;
			this.match(PortugolParser.ABRE_PARENTESES);
			this.state = 257;
			this.expressao(0);
			this.state = 258;
			this.match(PortugolParser.FECHA_PARENTESES);
			this.state = 259;
			this.listaComandos();
			this.state = 261;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 260;
				this.senao();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public senao(): SenaoContext {
		let localctx: SenaoContext = new SenaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, PortugolParser.RULE_senao);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 263;
			this.match(PortugolParser.SENAO);
			this.state = 264;
			this.listaComandos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enquanto(): EnquantoContext {
		let localctx: EnquantoContext = new EnquantoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, PortugolParser.RULE_enquanto);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 266;
			this.match(PortugolParser.ENQUANTO);
			this.state = 267;
			this.match(PortugolParser.ABRE_PARENTESES);
			this.state = 268;
			this.expressao(0);
			this.state = 269;
			this.match(PortugolParser.FECHA_PARENTESES);
			this.state = 270;
			this.listaComandos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public facaEnquanto(): FacaEnquantoContext {
		let localctx: FacaEnquantoContext = new FacaEnquantoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, PortugolParser.RULE_facaEnquanto);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 272;
			this.match(PortugolParser.FACA);
			this.state = 273;
			this.listaComandos();
			this.state = 274;
			this.match(PortugolParser.ENQUANTO);
			this.state = 275;
			this.match(PortugolParser.ABRE_PARENTESES);
			this.state = 276;
			this.expressao(0);
			this.state = 277;
			this.match(PortugolParser.FECHA_PARENTESES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public para(): ParaContext {
		let localctx: ParaContext = new ParaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, PortugolParser.RULE_para);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.match(PortugolParser.PARA);
			this.state = 280;
			this.match(PortugolParser.ABRE_PARENTESES);
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209723522) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
				{
				this.state = 281;
				this.inicializacaoPara();
				}
			}

			this.state = 284;
			this.match(PortugolParser.PONTOVIRGULA);
			this.state = 285;
			this.condicao();
			this.state = 286;
			this.match(PortugolParser.PONTOVIRGULA);
			this.state = 287;
			this.incrementoPara();
			this.state = 288;
			this.match(PortugolParser.FECHA_PARENTESES);
			this.state = 289;
			this.listaComandos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listaComandos(): ListaComandosContext {
		let localctx: ListaComandosContext = new ListaComandosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, PortugolParser.RULE_listaComandos);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				this.state = 291;
				this.match(PortugolParser.ABRE_CHAVES);
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 211365762) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
					{
					{
					this.state = 292;
					this.comando();
					}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 298;
				this.match(PortugolParser.FECHA_CHAVES);
				}
				break;
			case 1:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 13:
			case 16:
			case 19:
			case 20:
			case 23:
			case 26:
			case 27:
			case 38:
			case 39:
			case 44:
			case 51:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
				{
				this.state = 299;
				this.comando();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inicializacaoPara(): InicializacaoParaContext {
		let localctx: InicializacaoParaContext = new InicializacaoParaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, PortugolParser.RULE_inicializacaoPara);
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 302;
				this.atribuicao();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 303;
				this.listaDeclaracoes();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 304;
				this.match(PortugolParser.ID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public condicao(): CondicaoContext {
		let localctx: CondicaoContext = new CondicaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, PortugolParser.RULE_condicao);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 307;
			this.expressao(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public incrementoPara(): IncrementoParaContext {
		let localctx: IncrementoParaContext = new IncrementoParaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, PortugolParser.RULE_incrementoPara);
		try {
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 309;
				this.expressao(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 310;
				this.atribuicaoComposta();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 311;
				this.atribuicao();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public escolha(): EscolhaContext {
		let localctx: EscolhaContext = new EscolhaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, PortugolParser.RULE_escolha);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 314;
			this.match(PortugolParser.ESCOLHA);
			this.state = 315;
			this.match(PortugolParser.ABRE_PARENTESES);
			this.state = 316;
			this.expressao(0);
			this.state = 317;
			this.match(PortugolParser.FECHA_PARENTESES);
			this.state = 318;
			this.match(PortugolParser.ABRE_CHAVES);
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 319;
				this.caso();
				}
				}
				this.state = 324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 325;
			this.match(PortugolParser.FECHA_CHAVES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caso(): CasoContext {
		let localctx: CasoContext = new CasoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, PortugolParser.RULE_caso);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 327;
			this.match(PortugolParser.CASO);
			this.state = 330;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
				{
				this.state = 328;
				this.match(PortugolParser.CONTRARIO);
				}
				break;
			case 1:
			case 23:
			case 26:
			case 27:
			case 38:
			case 39:
			case 44:
			case 51:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
				{
				this.state = 329;
				this.expressao(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 332;
			this.match(PortugolParser.DOISPONTOS);
			this.state = 347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 13:
			case 16:
			case 17:
			case 19:
			case 20:
			case 23:
			case 26:
			case 27:
			case 38:
			case 39:
			case 44:
			case 51:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
				{
				this.state = 336;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 333;
						this.comando();
						}
						}
					}
					this.state = 338;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				}
				}
				break;
			case 5:
				{
				this.state = 339;
				this.match(PortugolParser.ABRE_CHAVES);
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 211365762) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
					{
					{
					this.state = 340;
					this.comando();
					}
					}
					this.state = 345;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 346;
				this.match(PortugolParser.FECHA_CHAVES);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 349;
				this.pare();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pare(): PareContext {
		let localctx: PareContext = new PareContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, PortugolParser.RULE_pare);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 352;
			this.match(PortugolParser.PARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indiceArray(): IndiceArrayContext {
		let localctx: IndiceArrayContext = new IndiceArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, PortugolParser.RULE_indiceArray);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 354;
			this.match(PortugolParser.ABRE_COLCHETES);
			this.state = 355;
			this.expressao(0);
			this.state = 356;
			this.match(PortugolParser.FECHA_COLCHETES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expressao(): ExpressaoContext;
	public expressao(_p: number): ExpressaoContext;
	// @RuleVersion(0)
	public expressao(_p?: number): ExpressaoContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressaoContext = new ExpressaoContext(this, this._ctx, _parentState);
		let _prevctx: ExpressaoContext = localctx;
		let _startState: number = 70;
		this.enterRecursionRule(localctx, 70, PortugolParser.RULE_expressao, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 434;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				localctx = new ChamadaFuncaoContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 360;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 359;
					this.escopoBiblioteca();
					}
					break;
				}
				this.state = 362;
				this.match(PortugolParser.ID);
				this.state = 363;
				this.match(PortugolParser.ABRE_PARENTESES);
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 209715202) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4137027) !== 0)) {
					{
					this.state = 364;
					this.listaExpressoes();
					}
				}

				this.state = 367;
				this.match(PortugolParser.FECHA_PARENTESES);
				}
				break;
			case 2:
				{
				localctx = new ReferenciaArrayContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 369;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 368;
					this.escopoBiblioteca();
					}
					break;
				}
				this.state = 371;
				this.match(PortugolParser.ID);
				this.state = 372;
				this.indiceArray();
				}
				break;
			case 3:
				{
				localctx = new ReferenciaMatrizContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 374;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 373;
					this.escopoBiblioteca();
					}
					break;
				}
				this.state = 376;
				this.match(PortugolParser.ID);
				this.state = 377;
				this.indiceArray();
				this.state = 379;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 378;
					this.indiceArray();
					}
					break;
				}
				}
				break;
			case 4:
				{
				localctx = new MenosUnarioContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 381;
				this.match(PortugolParser.OP_SUBTRACAO);
				this.state = 382;
				this.expressao(33);
				}
				break;
			case 5:
				{
				localctx = new MaisUnarioContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 383;
				this.match(PortugolParser.OP_ADICAO);
				this.state = 384;
				this.expressao(32);
				}
				break;
			case 6:
				{
				localctx = new NegacaoContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 385;
				this.match(PortugolParser.OP_NAO);
				this.state = 386;
				this.expressao(31);
				}
				break;
			case 7:
				{
				localctx = new NegacaoBitwiseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 387;
				this.match(PortugolParser.OP_NOT_BITWISE);
				this.state = 388;
				this.expressao(30);
				}
				break;
			case 8:
				{
				localctx = new IncrementoUnarioPosfixadoContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 389;
				this.match(PortugolParser.ID);
				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3) {
					{
					this.state = 390;
					this.indiceArray();
					this.state = 392;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===3) {
						{
						this.state = 391;
						this.indiceArray();
						}
					}

					}
				}

				this.state = 396;
				this.match(PortugolParser.OP_INCREMENTO_UNARIO);
				}
				break;
			case 9:
				{
				localctx = new DecrementoUnarioPosfixadoContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 397;
				this.match(PortugolParser.ID);
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3) {
					{
					this.state = 398;
					this.indiceArray();
					this.state = 400;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===3) {
						{
						this.state = 399;
						this.indiceArray();
						}
					}

					}
				}

				this.state = 404;
				this.match(PortugolParser.OP_DECREMENTO_UNARIO);
				}
				break;
			case 10:
				{
				localctx = new IncrementoUnarioPrefixadoContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 405;
				this.match(PortugolParser.OP_INCREMENTO_UNARIO);
				this.state = 406;
				this.match(PortugolParser.ID);
				this.state = 411;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 407;
					this.indiceArray();
					this.state = 409;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
					case 1:
						{
						this.state = 408;
						this.indiceArray();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 11:
				{
				localctx = new DecrementoUnarioPrefixadoContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 413;
				this.match(PortugolParser.OP_DECREMENTO_UNARIO);
				this.state = 414;
				this.match(PortugolParser.ID);
				this.state = 419;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 415;
					this.indiceArray();
					this.state = 417;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						this.state = 416;
						this.indiceArray();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 12:
				{
				localctx = new ReferenciaParaVariavelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 422;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 421;
					this.escopoBiblioteca();
					}
					break;
				}
				this.state = 424;
				this.match(PortugolParser.ID);
				}
				break;
			case 13:
				{
				localctx = new NumeroInteiroContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 425;
				_la = this._input.LA(1);
				if(!(_la===58 || _la===59)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 14:
				{
				localctx = new NumeroRealContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 426;
				this.match(PortugolParser.REAL);
				}
				break;
			case 15:
				{
				localctx = new ValorLogicoContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 427;
				this.match(PortugolParser.LOGICO);
				}
				break;
			case 16:
				{
				localctx = new CaracterContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 428;
				this.match(PortugolParser.CARACTER);
				}
				break;
			case 17:
				{
				localctx = new StringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 429;
				this.match(PortugolParser.STRING);
				}
				break;
			case 18:
				{
				localctx = new ExpressaoEntreParentesesContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 430;
				this.match(PortugolParser.ABRE_PARENTESES);
				this.state = 431;
				this.expressao(0);
				this.state = 432;
				this.match(PortugolParser.FECHA_PARENTESES);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 492;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 490;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicacaoContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 436;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 437;
						this.match(PortugolParser.OP_MULTIPLICACAO);
						this.state = 438;
						this.expressao(26);
						}
						break;
					case 2:
						{
						localctx = new DivisaoContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 439;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 440;
						this.match(PortugolParser.OP_DIVISAO);
						this.state = 441;
						this.expressao(25);
						}
						break;
					case 3:
						{
						localctx = new ModuloContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 442;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 443;
						this.match(PortugolParser.OP_MOD);
						this.state = 444;
						this.expressao(24);
						}
						break;
					case 4:
						{
						localctx = new AdicaoContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 445;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 446;
						this.match(PortugolParser.OP_ADICAO);
						this.state = 447;
						this.expressao(23);
						}
						break;
					case 5:
						{
						localctx = new SubtracaoContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 448;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 449;
						this.match(PortugolParser.OP_SUBTRACAO);
						this.state = 450;
						this.expressao(22);
						}
						break;
					case 6:
						{
						localctx = new OperacaoIgualdadeContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 451;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 452;
						this.match(PortugolParser.OP_IGUALDADE);
						this.state = 453;
						this.expressao(21);
						}
						break;
					case 7:
						{
						localctx = new OperacaoDiferencaContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 454;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 455;
						this.match(PortugolParser.OP_DIFERENCA);
						this.state = 456;
						this.expressao(20);
						}
						break;
					case 8:
						{
						localctx = new OperacaoMaiorContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 457;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 458;
						this.match(PortugolParser.OP_MAIOR);
						this.state = 459;
						this.expressao(19);
						}
						break;
					case 9:
						{
						localctx = new OperacaoMenorContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 460;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 461;
						this.match(PortugolParser.OP_MENOR);
						this.state = 462;
						this.expressao(18);
						}
						break;
					case 10:
						{
						localctx = new OperacaoMenorIgualContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 463;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 464;
						this.match(PortugolParser.OP_MENOR_IGUAL);
						this.state = 465;
						this.expressao(17);
						}
						break;
					case 11:
						{
						localctx = new OperacaoMaiorIgualContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 466;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 467;
						this.match(PortugolParser.OP_MAIOR_IGUAL);
						this.state = 468;
						this.expressao(16);
						}
						break;
					case 12:
						{
						localctx = new OperacaoELogicoContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 469;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 470;
						this.match(PortugolParser.OP_E_LOGICO);
						this.state = 471;
						this.expressao(15);
						}
						break;
					case 13:
						{
						localctx = new OperacaoOuLogicoContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 472;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 473;
						this.match(PortugolParser.OP_OU_LOGICO);
						this.state = 474;
						this.expressao(14);
						}
						break;
					case 14:
						{
						localctx = new OperacaoXorContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 475;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 476;
						this.match(PortugolParser.OP_XOR);
						this.state = 477;
						this.expressao(13);
						}
						break;
					case 15:
						{
						localctx = new OperacaoShiftLeftContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 478;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 479;
						this.match(PortugolParser.OP_SHIFT_LEFT);
						this.state = 480;
						this.expressao(12);
						}
						break;
					case 16:
						{
						localctx = new OperacaoShiftRightContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 481;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 482;
						this.match(PortugolParser.OP_SHIFT_RIGHT);
						this.state = 483;
						this.expressao(11);
						}
						break;
					case 17:
						{
						localctx = new OperacaoAndBitwiseContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 484;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 485;
						this.match(PortugolParser.E_COMERCIAL);
						this.state = 486;
						this.expressao(10);
						}
						break;
					case 18:
						{
						localctx = new OperacaoOrBitwiseContext(this, new ExpressaoContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, PortugolParser.RULE_expressao);
						this.state = 487;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 488;
						this.match(PortugolParser.OP_OU_BITWISE);
						this.state = 489;
						this.expressao(9);
						}
						break;
					}
					}
				}
				this.state = 494;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listaExpressoes(): ListaExpressoesContext {
		let localctx: ListaExpressoesContext = new ListaExpressoesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, PortugolParser.RULE_listaExpressoes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 495;
				this.expressao(0);
				}
				break;
			case 2:
				{
				this.state = 496;
				this.atribuicaoComposta();
				}
				break;
			case 3:
				{
				this.state = 497;
				this.atribuicao();
				}
				break;
			}
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 500;
				this.match(PortugolParser.VIRGULA);
				this.state = 504;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					this.state = 501;
					this.expressao(0);
					}
					break;
				case 2:
					{
					this.state = 502;
					this.atribuicaoComposta();
					}
					break;
				case 3:
					{
					this.state = 503;
					this.atribuicao();
					}
					break;
				}
				}
				}
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public escopoBiblioteca(): EscopoBibliotecaContext {
		let localctx: EscopoBibliotecaContext = new EscopoBibliotecaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, PortugolParser.RULE_escopoBiblioteca);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 511;
			this.match(PortugolParser.ID);
			this.state = 512;
			this.match(PortugolParser.PONTO);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 35:
			return this.expressao_sempred(localctx as ExpressaoContext, predIndex);
		}
		return true;
	}
	private expressao_sempred(localctx: ExpressaoContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 25);
		case 1:
			return this.precpred(this._ctx, 24);
		case 2:
			return this.precpred(this._ctx, 23);
		case 3:
			return this.precpred(this._ctx, 22);
		case 4:
			return this.precpred(this._ctx, 21);
		case 5:
			return this.precpred(this._ctx, 20);
		case 6:
			return this.precpred(this._ctx, 19);
		case 7:
			return this.precpred(this._ctx, 18);
		case 8:
			return this.precpred(this._ctx, 17);
		case 9:
			return this.precpred(this._ctx, 16);
		case 10:
			return this.precpred(this._ctx, 15);
		case 11:
			return this.precpred(this._ctx, 14);
		case 12:
			return this.precpred(this._ctx, 13);
		case 13:
			return this.precpred(this._ctx, 12);
		case 14:
			return this.precpred(this._ctx, 11);
		case 15:
			return this.precpred(this._ctx, 10);
		case 16:
			return this.precpred(this._ctx, 9);
		case 17:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,66,515,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,1,0,1,0,1,0,
	5,0,80,8,0,10,0,12,0,83,9,0,1,0,1,0,5,0,87,8,0,10,0,12,0,90,9,0,1,0,1,0,
	1,1,1,1,1,1,1,1,1,1,3,1,99,8,1,1,2,3,2,102,8,2,1,2,1,2,1,2,1,2,5,2,108,
	8,2,10,2,12,2,111,9,2,1,3,1,3,1,3,3,3,116,8,3,1,4,1,4,1,4,3,4,121,8,4,1,
	5,1,5,1,5,3,5,126,8,5,1,5,1,5,1,5,3,5,131,8,5,1,5,1,5,1,5,3,5,136,8,5,1,
	6,1,6,1,6,1,6,5,6,142,8,6,10,6,12,6,145,9,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,
	1,9,1,9,3,9,156,8,9,1,9,1,9,1,9,3,9,161,8,9,1,10,1,10,3,10,165,8,10,1,10,
	1,10,1,11,1,11,1,12,1,12,3,12,173,8,12,1,12,1,12,1,12,1,12,5,12,179,8,12,
	10,12,12,12,182,9,12,1,12,1,12,1,13,1,13,3,13,188,8,13,1,13,1,13,1,14,1,
	14,1,14,5,14,195,8,14,10,14,12,14,198,9,14,1,15,1,15,3,15,202,8,15,1,15,
	1,15,1,15,3,15,207,8,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,18,1,
	18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,228,8,18,1,19,1,19,
	1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
	20,1,20,1,20,1,20,3,20,250,8,20,1,21,1,21,3,21,254,8,21,1,22,1,22,1,22,
	1,22,1,22,1,22,3,22,262,8,22,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,
	24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,3,26,283,8,26,1,26,
	1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,5,27,294,8,27,10,27,12,27,297,9,
	27,1,27,1,27,3,27,301,8,27,1,28,1,28,1,28,3,28,306,8,28,1,29,1,29,1,30,
	1,30,1,30,3,30,313,8,30,1,31,1,31,1,31,1,31,1,31,1,31,5,31,321,8,31,10,
	31,12,31,324,9,31,1,31,1,31,1,32,1,32,1,32,3,32,331,8,32,1,32,1,32,5,32,
	335,8,32,10,32,12,32,338,9,32,1,32,1,32,5,32,342,8,32,10,32,12,32,345,9,
	32,1,32,3,32,348,8,32,1,32,3,32,351,8,32,1,33,1,33,1,34,1,34,1,34,1,34,
	1,35,1,35,3,35,361,8,35,1,35,1,35,1,35,3,35,366,8,35,1,35,1,35,3,35,370,
	8,35,1,35,1,35,1,35,3,35,375,8,35,1,35,1,35,1,35,3,35,380,8,35,1,35,1,35,
	1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,393,8,35,3,35,395,8,35,
	1,35,1,35,1,35,1,35,3,35,401,8,35,3,35,403,8,35,1,35,1,35,1,35,1,35,1,35,
	3,35,410,8,35,3,35,412,8,35,1,35,1,35,1,35,1,35,3,35,418,8,35,3,35,420,
	8,35,1,35,3,35,423,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	35,3,35,435,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
	1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
	1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,
	35,491,8,35,10,35,12,35,494,9,35,1,36,1,36,1,36,3,36,499,8,36,1,36,1,36,
	1,36,1,36,3,36,505,8,36,5,36,507,8,36,10,36,12,36,510,9,36,1,37,1,37,1,
	37,1,37,0,1,70,38,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
	40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,0,1,1,0,58,59,581,
	0,76,1,0,0,0,2,93,1,0,0,0,4,101,1,0,0,0,6,115,1,0,0,0,8,117,1,0,0,0,10,
	122,1,0,0,0,12,137,1,0,0,0,14,148,1,0,0,0,16,150,1,0,0,0,18,152,1,0,0,0,
	20,162,1,0,0,0,22,168,1,0,0,0,24,170,1,0,0,0,26,185,1,0,0,0,28,191,1,0,
	0,0,30,199,1,0,0,0,32,208,1,0,0,0,34,211,1,0,0,0,36,227,1,0,0,0,38,229,
	1,0,0,0,40,249,1,0,0,0,42,251,1,0,0,0,44,255,1,0,0,0,46,263,1,0,0,0,48,
	266,1,0,0,0,50,272,1,0,0,0,52,279,1,0,0,0,54,300,1,0,0,0,56,305,1,0,0,0,
	58,307,1,0,0,0,60,312,1,0,0,0,62,314,1,0,0,0,64,327,1,0,0,0,66,352,1,0,
	0,0,68,354,1,0,0,0,70,434,1,0,0,0,72,498,1,0,0,0,74,511,1,0,0,0,76,77,5,
	15,0,0,77,81,5,5,0,0,78,80,3,2,1,0,79,78,1,0,0,0,80,83,1,0,0,0,81,79,1,
	0,0,0,81,82,1,0,0,0,82,88,1,0,0,0,83,81,1,0,0,0,84,87,3,24,12,0,85,87,3,
	4,2,0,86,84,1,0,0,0,86,85,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,
	0,0,89,91,1,0,0,0,90,88,1,0,0,0,91,92,5,6,0,0,92,1,1,0,0,0,93,94,5,21,0,
	0,94,95,5,22,0,0,95,98,5,56,0,0,96,97,5,45,0,0,97,99,5,56,0,0,98,96,1,0,
	0,0,98,99,1,0,0,0,99,3,1,0,0,0,100,102,5,13,0,0,101,100,1,0,0,0,101,102,
	1,0,0,0,102,103,1,0,0,0,103,104,5,7,0,0,104,109,3,6,3,0,105,106,5,64,0,
	0,106,108,3,6,3,0,107,105,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,
	1,0,0,0,110,5,1,0,0,0,111,109,1,0,0,0,112,116,3,8,4,0,113,116,3,18,9,0,
	114,116,3,10,5,0,115,112,1,0,0,0,115,113,1,0,0,0,115,114,1,0,0,0,116,7,
	1,0,0,0,117,120,5,56,0,0,118,119,5,31,0,0,119,121,3,70,35,0,120,118,1,0,
	0,0,120,121,1,0,0,0,121,9,1,0,0,0,122,123,5,56,0,0,123,125,5,3,0,0,124,
	126,3,14,7,0,125,124,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,128,5,
	4,0,0,128,130,5,3,0,0,129,131,3,16,8,0,130,129,1,0,0,0,130,131,1,0,0,0,
	131,132,1,0,0,0,132,135,5,4,0,0,133,134,5,31,0,0,134,136,3,12,6,0,135,133,
	1,0,0,0,135,136,1,0,0,0,136,11,1,0,0,0,137,138,5,5,0,0,138,143,3,20,10,
	0,139,140,5,64,0,0,140,142,3,20,10,0,141,139,1,0,0,0,142,145,1,0,0,0,143,
	141,1,0,0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,143,1,0,0,0,146,147,5,6,
	0,0,147,13,1,0,0,0,148,149,3,22,11,0,149,15,1,0,0,0,150,151,3,22,11,0,151,
	17,1,0,0,0,152,153,5,56,0,0,153,155,5,3,0,0,154,156,3,22,11,0,155,154,1,
	0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,160,5,4,0,0,158,159,5,31,0,0,
	159,161,3,20,10,0,160,158,1,0,0,0,160,161,1,0,0,0,161,19,1,0,0,0,162,164,
	5,5,0,0,163,165,3,72,36,0,164,163,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,
	0,166,167,5,6,0,0,167,21,1,0,0,0,168,169,3,70,35,0,169,23,1,0,0,0,170,172,
	5,14,0,0,171,173,5,7,0,0,172,171,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,
	0,174,175,5,56,0,0,175,176,3,26,13,0,176,180,5,5,0,0,177,179,3,36,18,0,
	178,177,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,183,
	1,0,0,0,182,180,1,0,0,0,183,184,5,6,0,0,184,25,1,0,0,0,185,187,5,1,0,0,
	186,188,3,28,14,0,187,186,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,
	5,2,0,0,190,27,1,0,0,0,191,196,3,30,15,0,192,193,5,64,0,0,193,195,3,30,
	15,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,197,
	29,1,0,0,0,198,196,1,0,0,0,199,201,5,7,0,0,200,202,5,46,0,0,201,200,1,0,
	0,0,201,202,1,0,0,0,202,203,1,0,0,0,203,206,5,56,0,0,204,207,3,32,16,0,
	205,207,3,34,17,0,206,204,1,0,0,0,206,205,1,0,0,0,206,207,1,0,0,0,207,31,
	1,0,0,0,208,209,5,3,0,0,209,210,5,4,0,0,210,33,1,0,0,0,211,212,5,3,0,0,
	212,213,5,4,0,0,213,214,5,3,0,0,214,215,5,4,0,0,215,35,1,0,0,0,216,228,
	3,4,2,0,217,228,3,44,22,0,218,228,3,48,24,0,219,228,3,50,25,0,220,228,3,
	52,26,0,221,228,3,62,31,0,222,228,3,42,21,0,223,228,3,66,33,0,224,228,3,
	38,19,0,225,228,3,40,20,0,226,228,3,70,35,0,227,216,1,0,0,0,227,217,1,0,
	0,0,227,218,1,0,0,0,227,219,1,0,0,0,227,220,1,0,0,0,227,221,1,0,0,0,227,
	222,1,0,0,0,227,223,1,0,0,0,227,224,1,0,0,0,227,225,1,0,0,0,227,226,1,0,
	0,0,228,37,1,0,0,0,229,230,3,70,35,0,230,231,5,31,0,0,231,232,3,70,35,0,
	232,39,1,0,0,0,233,234,3,70,35,0,234,235,5,47,0,0,235,236,3,70,35,0,236,
	250,1,0,0,0,237,238,3,70,35,0,238,239,5,48,0,0,239,240,3,70,35,0,240,250,
	1,0,0,0,241,242,3,70,35,0,242,243,5,49,0,0,243,244,3,70,35,0,244,250,1,
	0,0,0,245,246,3,70,35,0,246,247,5,50,0,0,247,248,3,70,35,0,248,250,1,0,
	0,0,249,233,1,0,0,0,249,237,1,0,0,0,249,241,1,0,0,0,249,245,1,0,0,0,250,
	41,1,0,0,0,251,253,5,20,0,0,252,254,3,70,35,0,253,252,1,0,0,0,253,254,1,
	0,0,0,254,43,1,0,0,0,255,256,5,11,0,0,256,257,5,1,0,0,257,258,3,70,35,0,
	258,259,5,2,0,0,259,261,3,54,27,0,260,262,3,46,23,0,261,260,1,0,0,0,261,
	262,1,0,0,0,262,45,1,0,0,0,263,264,5,12,0,0,264,265,3,54,27,0,265,47,1,
	0,0,0,266,267,5,9,0,0,267,268,5,1,0,0,268,269,3,70,35,0,269,270,5,2,0,0,
	270,271,3,54,27,0,271,49,1,0,0,0,272,273,5,8,0,0,273,274,3,54,27,0,274,
	275,5,9,0,0,275,276,5,1,0,0,276,277,3,70,35,0,277,278,5,2,0,0,278,51,1,
	0,0,0,279,280,5,10,0,0,280,282,5,1,0,0,281,283,3,56,28,0,282,281,1,0,0,
	0,282,283,1,0,0,0,283,284,1,0,0,0,284,285,5,65,0,0,285,286,3,58,29,0,286,
	287,5,65,0,0,287,288,3,60,30,0,288,289,5,2,0,0,289,290,3,54,27,0,290,53,
	1,0,0,0,291,295,5,5,0,0,292,294,3,36,18,0,293,292,1,0,0,0,294,297,1,0,0,
	0,295,293,1,0,0,0,295,296,1,0,0,0,296,298,1,0,0,0,297,295,1,0,0,0,298,301,
	5,6,0,0,299,301,3,36,18,0,300,291,1,0,0,0,300,299,1,0,0,0,301,55,1,0,0,
	0,302,306,3,38,19,0,303,306,3,4,2,0,304,306,5,56,0,0,305,302,1,0,0,0,305,
	303,1,0,0,0,305,304,1,0,0,0,306,57,1,0,0,0,307,308,3,70,35,0,308,59,1,0,
	0,0,309,313,3,70,35,0,310,313,3,40,20,0,311,313,3,38,19,0,312,309,1,0,0,
	0,312,310,1,0,0,0,312,311,1,0,0,0,313,61,1,0,0,0,314,315,5,16,0,0,315,316,
	5,1,0,0,316,317,3,70,35,0,317,318,5,2,0,0,318,322,5,5,0,0,319,321,3,64,
	32,0,320,319,1,0,0,0,321,324,1,0,0,0,322,320,1,0,0,0,322,323,1,0,0,0,323,
	325,1,0,0,0,324,322,1,0,0,0,325,326,5,6,0,0,326,63,1,0,0,0,327,330,5,17,
	0,0,328,331,5,18,0,0,329,331,3,70,35,0,330,328,1,0,0,0,330,329,1,0,0,0,
	331,332,1,0,0,0,332,347,5,66,0,0,333,335,3,36,18,0,334,333,1,0,0,0,335,
	338,1,0,0,0,336,334,1,0,0,0,336,337,1,0,0,0,337,348,1,0,0,0,338,336,1,0,
	0,0,339,343,5,5,0,0,340,342,3,36,18,0,341,340,1,0,0,0,342,345,1,0,0,0,343,
	341,1,0,0,0,343,344,1,0,0,0,344,346,1,0,0,0,345,343,1,0,0,0,346,348,5,6,
	0,0,347,336,1,0,0,0,347,339,1,0,0,0,348,350,1,0,0,0,349,351,3,66,33,0,350,
	349,1,0,0,0,350,351,1,0,0,0,351,65,1,0,0,0,352,353,5,19,0,0,353,67,1,0,
	0,0,354,355,5,3,0,0,355,356,3,70,35,0,356,357,5,4,0,0,357,69,1,0,0,0,358,
	360,6,35,-1,0,359,361,3,74,37,0,360,359,1,0,0,0,360,361,1,0,0,0,361,362,
	1,0,0,0,362,363,5,56,0,0,363,365,5,1,0,0,364,366,3,72,36,0,365,364,1,0,
	0,0,365,366,1,0,0,0,366,367,1,0,0,0,367,435,5,2,0,0,368,370,3,74,37,0,369,
	368,1,0,0,0,369,370,1,0,0,0,370,371,1,0,0,0,371,372,5,56,0,0,372,435,3,
	68,34,0,373,375,3,74,37,0,374,373,1,0,0,0,374,375,1,0,0,0,375,376,1,0,0,
	0,376,377,5,56,0,0,377,379,3,68,34,0,378,380,3,68,34,0,379,378,1,0,0,0,
	379,380,1,0,0,0,380,435,1,0,0,0,381,382,5,26,0,0,382,435,3,70,35,33,383,
	384,5,27,0,0,384,435,3,70,35,32,385,386,5,23,0,0,386,435,3,70,35,31,387,
	388,5,44,0,0,388,435,3,70,35,30,389,394,5,56,0,0,390,392,3,68,34,0,391,
	393,3,68,34,0,392,391,1,0,0,0,392,393,1,0,0,0,393,395,1,0,0,0,394,390,1,
	0,0,0,394,395,1,0,0,0,395,396,1,0,0,0,396,435,5,38,0,0,397,402,5,56,0,0,
	398,400,3,68,34,0,399,401,3,68,34,0,400,399,1,0,0,0,400,401,1,0,0,0,401,
	403,1,0,0,0,402,398,1,0,0,0,402,403,1,0,0,0,403,404,1,0,0,0,404,435,5,39,
	0,0,405,406,5,38,0,0,406,411,5,56,0,0,407,409,3,68,34,0,408,410,3,68,34,
	0,409,408,1,0,0,0,409,410,1,0,0,0,410,412,1,0,0,0,411,407,1,0,0,0,411,412,
	1,0,0,0,412,435,1,0,0,0,413,414,5,39,0,0,414,419,5,56,0,0,415,417,3,68,
	34,0,416,418,3,68,34,0,417,416,1,0,0,0,417,418,1,0,0,0,418,420,1,0,0,0,
	419,415,1,0,0,0,419,420,1,0,0,0,420,435,1,0,0,0,421,423,3,74,37,0,422,421,
	1,0,0,0,422,423,1,0,0,0,423,424,1,0,0,0,424,435,5,56,0,0,425,435,7,0,0,
	0,426,435,5,57,0,0,427,435,5,51,0,0,428,435,5,54,0,0,429,435,5,55,0,0,430,
	431,5,1,0,0,431,432,3,70,35,0,432,433,5,2,0,0,433,435,1,0,0,0,434,358,1,
	0,0,0,434,369,1,0,0,0,434,374,1,0,0,0,434,381,1,0,0,0,434,383,1,0,0,0,434,
	385,1,0,0,0,434,387,1,0,0,0,434,389,1,0,0,0,434,397,1,0,0,0,434,405,1,0,
	0,0,434,413,1,0,0,0,434,422,1,0,0,0,434,425,1,0,0,0,434,426,1,0,0,0,434,
	427,1,0,0,0,434,428,1,0,0,0,434,429,1,0,0,0,434,430,1,0,0,0,435,492,1,0,
	0,0,436,437,10,25,0,0,437,438,5,28,0,0,438,491,3,70,35,26,439,440,10,24,
	0,0,440,441,5,29,0,0,441,491,3,70,35,25,442,443,10,23,0,0,443,444,5,30,
	0,0,444,491,3,70,35,24,445,446,10,22,0,0,446,447,5,27,0,0,447,491,3,70,
	35,23,448,449,10,21,0,0,449,450,5,26,0,0,450,491,3,70,35,22,451,452,10,
	20,0,0,452,453,5,32,0,0,453,491,3,70,35,21,454,455,10,19,0,0,455,456,5,
	33,0,0,456,491,3,70,35,20,457,458,10,18,0,0,458,459,5,34,0,0,459,491,3,
	70,35,19,460,461,10,17,0,0,461,462,5,35,0,0,462,491,3,70,35,18,463,464,
	10,16,0,0,464,465,5,36,0,0,465,491,3,70,35,17,466,467,10,15,0,0,467,468,
	5,37,0,0,468,491,3,70,35,16,469,470,10,14,0,0,470,471,5,24,0,0,471,491,
	3,70,35,15,472,473,10,13,0,0,473,474,5,25,0,0,474,491,3,70,35,14,475,476,
	10,12,0,0,476,477,5,42,0,0,477,491,3,70,35,13,478,479,10,11,0,0,479,480,
	5,40,0,0,480,491,3,70,35,12,481,482,10,10,0,0,482,483,5,41,0,0,483,491,
	3,70,35,11,484,485,10,9,0,0,485,486,5,46,0,0,486,491,3,70,35,10,487,488,
	10,8,0,0,488,489,5,43,0,0,489,491,3,70,35,9,490,436,1,0,0,0,490,439,1,0,
	0,0,490,442,1,0,0,0,490,445,1,0,0,0,490,448,1,0,0,0,490,451,1,0,0,0,490,
	454,1,0,0,0,490,457,1,0,0,0,490,460,1,0,0,0,490,463,1,0,0,0,490,466,1,0,
	0,0,490,469,1,0,0,0,490,472,1,0,0,0,490,475,1,0,0,0,490,478,1,0,0,0,490,
	481,1,0,0,0,490,484,1,0,0,0,490,487,1,0,0,0,491,494,1,0,0,0,492,490,1,0,
	0,0,492,493,1,0,0,0,493,71,1,0,0,0,494,492,1,0,0,0,495,499,3,70,35,0,496,
	499,3,40,20,0,497,499,3,38,19,0,498,495,1,0,0,0,498,496,1,0,0,0,498,497,
	1,0,0,0,499,508,1,0,0,0,500,504,5,64,0,0,501,505,3,70,35,0,502,505,3,40,
	20,0,503,505,3,38,19,0,504,501,1,0,0,0,504,502,1,0,0,0,504,503,1,0,0,0,
	505,507,1,0,0,0,506,500,1,0,0,0,507,510,1,0,0,0,508,506,1,0,0,0,508,509,
	1,0,0,0,509,73,1,0,0,0,510,508,1,0,0,0,511,512,5,56,0,0,512,513,5,63,0,
	0,513,75,1,0,0,0,56,81,86,88,98,101,109,115,120,125,130,135,143,155,160,
	164,172,180,187,196,201,206,227,249,253,261,282,295,300,305,312,322,330,
	336,343,347,350,360,365,369,374,379,392,394,400,402,409,411,417,419,422,
	434,490,492,498,504,508];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PortugolParser.__ATN) {
			PortugolParser.__ATN = new ATNDeserializer().deserialize(PortugolParser._serializedATN);
		}

		return PortugolParser.__ATN;
	}


	static DecisionsToDFA = PortugolParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ArquivoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROGRAMA(): TerminalNode {
		return this.getToken(PortugolParser.PROGRAMA, 0);
	}
	public ABRE_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_CHAVES, 0);
	}
	public FECHA_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_CHAVES, 0);
	}
	public inclusaoBiblioteca_list(): InclusaoBibliotecaContext[] {
		return this.getTypedRuleContexts(InclusaoBibliotecaContext) as InclusaoBibliotecaContext[];
	}
	public inclusaoBiblioteca(i: number): InclusaoBibliotecaContext {
		return this.getTypedRuleContext(InclusaoBibliotecaContext, i) as InclusaoBibliotecaContext;
	}
	public declaracaoFuncao_list(): DeclaracaoFuncaoContext[] {
		return this.getTypedRuleContexts(DeclaracaoFuncaoContext) as DeclaracaoFuncaoContext[];
	}
	public declaracaoFuncao(i: number): DeclaracaoFuncaoContext {
		return this.getTypedRuleContext(DeclaracaoFuncaoContext, i) as DeclaracaoFuncaoContext;
	}
	public listaDeclaracoes_list(): ListaDeclaracoesContext[] {
		return this.getTypedRuleContexts(ListaDeclaracoesContext) as ListaDeclaracoesContext[];
	}
	public listaDeclaracoes(i: number): ListaDeclaracoesContext {
		return this.getTypedRuleContext(ListaDeclaracoesContext, i) as ListaDeclaracoesContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_arquivo;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterArquivo) {
	 		listener.enterArquivo(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitArquivo) {
	 		listener.exitArquivo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitArquivo) {
			return visitor.visitArquivo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusaoBibliotecaContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INCLUA(): TerminalNode {
		return this.getToken(PortugolParser.INCLUA, 0);
	}
	public BIBLIOTECA(): TerminalNode {
		return this.getToken(PortugolParser.BIBLIOTECA, 0);
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(PortugolParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(PortugolParser.ID, i);
	}
	public OP_ALIAS_BIBLIOTECA(): TerminalNode {
		return this.getToken(PortugolParser.OP_ALIAS_BIBLIOTECA, 0);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_inclusaoBiblioteca;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterInclusaoBiblioteca) {
	 		listener.enterInclusaoBiblioteca(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitInclusaoBiblioteca) {
	 		listener.exitInclusaoBiblioteca(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitInclusaoBiblioteca) {
			return visitor.visitInclusaoBiblioteca(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaDeclaracoesContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIPO(): TerminalNode {
		return this.getToken(PortugolParser.TIPO, 0);
	}
	public declaracao_list(): DeclaracaoContext[] {
		return this.getTypedRuleContexts(DeclaracaoContext) as DeclaracaoContext[];
	}
	public declaracao(i: number): DeclaracaoContext {
		return this.getTypedRuleContext(DeclaracaoContext, i) as DeclaracaoContext;
	}
	public CONSTANTE(): TerminalNode {
		return this.getToken(PortugolParser.CONSTANTE, 0);
	}
	public VIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(PortugolParser.VIRGULA);
	}
	public VIRGULA(i: number): TerminalNode {
		return this.getToken(PortugolParser.VIRGULA, i);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_listaDeclaracoes;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterListaDeclaracoes) {
	 		listener.enterListaDeclaracoes(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitListaDeclaracoes) {
	 		listener.exitListaDeclaracoes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitListaDeclaracoes) {
			return visitor.visitListaDeclaracoes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracaoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaracaoVariavel(): DeclaracaoVariavelContext {
		return this.getTypedRuleContext(DeclaracaoVariavelContext, 0) as DeclaracaoVariavelContext;
	}
	public declaracaoArray(): DeclaracaoArrayContext {
		return this.getTypedRuleContext(DeclaracaoArrayContext, 0) as DeclaracaoArrayContext;
	}
	public declaracaoMatriz(): DeclaracaoMatrizContext {
		return this.getTypedRuleContext(DeclaracaoMatrizContext, 0) as DeclaracaoMatrizContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_declaracao;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterDeclaracao) {
	 		listener.enterDeclaracao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitDeclaracao) {
	 		listener.exitDeclaracao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitDeclaracao) {
			return visitor.visitDeclaracao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracaoVariavelContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public OP_ATRIBUICAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_declaracaoVariavel;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterDeclaracaoVariavel) {
	 		listener.enterDeclaracaoVariavel(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitDeclaracaoVariavel) {
	 		listener.exitDeclaracaoVariavel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitDeclaracaoVariavel) {
			return visitor.visitDeclaracaoVariavel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracaoMatrizContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public ABRE_COLCHETES_list(): TerminalNode[] {
	    	return this.getTokens(PortugolParser.ABRE_COLCHETES);
	}
	public ABRE_COLCHETES(i: number): TerminalNode {
		return this.getToken(PortugolParser.ABRE_COLCHETES, i);
	}
	public FECHA_COLCHETES_list(): TerminalNode[] {
	    	return this.getTokens(PortugolParser.FECHA_COLCHETES);
	}
	public FECHA_COLCHETES(i: number): TerminalNode {
		return this.getToken(PortugolParser.FECHA_COLCHETES, i);
	}
	public linhaMatriz(): LinhaMatrizContext {
		return this.getTypedRuleContext(LinhaMatrizContext, 0) as LinhaMatrizContext;
	}
	public colunaMatriz(): ColunaMatrizContext {
		return this.getTypedRuleContext(ColunaMatrizContext, 0) as ColunaMatrizContext;
	}
	public OP_ATRIBUICAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
	}
	public inicializacaoMatriz(): InicializacaoMatrizContext {
		return this.getTypedRuleContext(InicializacaoMatrizContext, 0) as InicializacaoMatrizContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_declaracaoMatriz;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterDeclaracaoMatriz) {
	 		listener.enterDeclaracaoMatriz(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitDeclaracaoMatriz) {
	 		listener.exitDeclaracaoMatriz(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitDeclaracaoMatriz) {
			return visitor.visitDeclaracaoMatriz(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InicializacaoMatrizContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_CHAVES, 0);
	}
	public inicializacaoArray_list(): InicializacaoArrayContext[] {
		return this.getTypedRuleContexts(InicializacaoArrayContext) as InicializacaoArrayContext[];
	}
	public inicializacaoArray(i: number): InicializacaoArrayContext {
		return this.getTypedRuleContext(InicializacaoArrayContext, i) as InicializacaoArrayContext;
	}
	public FECHA_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_CHAVES, 0);
	}
	public VIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(PortugolParser.VIRGULA);
	}
	public VIRGULA(i: number): TerminalNode {
		return this.getToken(PortugolParser.VIRGULA, i);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_inicializacaoMatriz;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterInicializacaoMatriz) {
	 		listener.enterInicializacaoMatriz(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitInicializacaoMatriz) {
	 		listener.exitInicializacaoMatriz(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitInicializacaoMatriz) {
			return visitor.visitInicializacaoMatriz(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinhaMatrizContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tamanhoArray(): TamanhoArrayContext {
		return this.getTypedRuleContext(TamanhoArrayContext, 0) as TamanhoArrayContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_linhaMatriz;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterLinhaMatriz) {
	 		listener.enterLinhaMatriz(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitLinhaMatriz) {
	 		listener.exitLinhaMatriz(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitLinhaMatriz) {
			return visitor.visitLinhaMatriz(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColunaMatrizContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tamanhoArray(): TamanhoArrayContext {
		return this.getTypedRuleContext(TamanhoArrayContext, 0) as TamanhoArrayContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_colunaMatriz;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterColunaMatriz) {
	 		listener.enterColunaMatriz(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitColunaMatriz) {
	 		listener.exitColunaMatriz(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitColunaMatriz) {
			return visitor.visitColunaMatriz(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracaoArrayContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public ABRE_COLCHETES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_COLCHETES, 0);
	}
	public FECHA_COLCHETES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_COLCHETES, 0);
	}
	public tamanhoArray(): TamanhoArrayContext {
		return this.getTypedRuleContext(TamanhoArrayContext, 0) as TamanhoArrayContext;
	}
	public OP_ATRIBUICAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
	}
	public inicializacaoArray(): InicializacaoArrayContext {
		return this.getTypedRuleContext(InicializacaoArrayContext, 0) as InicializacaoArrayContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_declaracaoArray;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterDeclaracaoArray) {
	 		listener.enterDeclaracaoArray(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitDeclaracaoArray) {
	 		listener.exitDeclaracaoArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitDeclaracaoArray) {
			return visitor.visitDeclaracaoArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InicializacaoArrayContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_CHAVES, 0);
	}
	public FECHA_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_CHAVES, 0);
	}
	public listaExpressoes(): ListaExpressoesContext {
		return this.getTypedRuleContext(ListaExpressoesContext, 0) as ListaExpressoesContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_inicializacaoArray;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterInicializacaoArray) {
	 		listener.enterInicializacaoArray(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitInicializacaoArray) {
	 		listener.exitInicializacaoArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitInicializacaoArray) {
			return visitor.visitInicializacaoArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TamanhoArrayContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_tamanhoArray;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterTamanhoArray) {
	 		listener.enterTamanhoArray(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitTamanhoArray) {
	 		listener.exitTamanhoArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitTamanhoArray) {
			return visitor.visitTamanhoArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracaoFuncaoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCAO(): TerminalNode {
		return this.getToken(PortugolParser.FUNCAO, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public parametroFuncao(): ParametroFuncaoContext {
		return this.getTypedRuleContext(ParametroFuncaoContext, 0) as ParametroFuncaoContext;
	}
	public ABRE_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_CHAVES, 0);
	}
	public FECHA_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_CHAVES, 0);
	}
	public TIPO(): TerminalNode {
		return this.getToken(PortugolParser.TIPO, 0);
	}
	public comando_list(): ComandoContext[] {
		return this.getTypedRuleContexts(ComandoContext) as ComandoContext[];
	}
	public comando(i: number): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, i) as ComandoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_declaracaoFuncao;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterDeclaracaoFuncao) {
	 		listener.enterDeclaracaoFuncao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitDeclaracaoFuncao) {
	 		listener.exitDeclaracaoFuncao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitDeclaracaoFuncao) {
			return visitor.visitDeclaracaoFuncao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametroFuncaoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
	}
	public listaParametros(): ListaParametrosContext {
		return this.getTypedRuleContext(ListaParametrosContext, 0) as ListaParametrosContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_parametroFuncao;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterParametroFuncao) {
	 		listener.enterParametroFuncao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitParametroFuncao) {
	 		listener.exitParametroFuncao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitParametroFuncao) {
			return visitor.visitParametroFuncao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaParametrosContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parametro_list(): ParametroContext[] {
		return this.getTypedRuleContexts(ParametroContext) as ParametroContext[];
	}
	public parametro(i: number): ParametroContext {
		return this.getTypedRuleContext(ParametroContext, i) as ParametroContext;
	}
	public VIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(PortugolParser.VIRGULA);
	}
	public VIRGULA(i: number): TerminalNode {
		return this.getToken(PortugolParser.VIRGULA, i);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_listaParametros;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterListaParametros) {
	 		listener.enterListaParametros(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitListaParametros) {
	 		listener.exitListaParametros(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitListaParametros) {
			return visitor.visitListaParametros(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametroContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIPO(): TerminalNode {
		return this.getToken(PortugolParser.TIPO, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public E_COMERCIAL(): TerminalNode {
		return this.getToken(PortugolParser.E_COMERCIAL, 0);
	}
	public parametroArray(): ParametroArrayContext {
		return this.getTypedRuleContext(ParametroArrayContext, 0) as ParametroArrayContext;
	}
	public parametroMatriz(): ParametroMatrizContext {
		return this.getTypedRuleContext(ParametroMatrizContext, 0) as ParametroMatrizContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_parametro;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterParametro) {
	 		listener.enterParametro(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitParametro) {
	 		listener.exitParametro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitParametro) {
			return visitor.visitParametro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametroArrayContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_COLCHETES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_COLCHETES, 0);
	}
	public FECHA_COLCHETES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_COLCHETES, 0);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_parametroArray;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterParametroArray) {
	 		listener.enterParametroArray(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitParametroArray) {
	 		listener.exitParametroArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitParametroArray) {
			return visitor.visitParametroArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametroMatrizContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_COLCHETES_list(): TerminalNode[] {
	    	return this.getTokens(PortugolParser.ABRE_COLCHETES);
	}
	public ABRE_COLCHETES(i: number): TerminalNode {
		return this.getToken(PortugolParser.ABRE_COLCHETES, i);
	}
	public FECHA_COLCHETES_list(): TerminalNode[] {
	    	return this.getTokens(PortugolParser.FECHA_COLCHETES);
	}
	public FECHA_COLCHETES(i: number): TerminalNode {
		return this.getToken(PortugolParser.FECHA_COLCHETES, i);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_parametroMatriz;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterParametroMatriz) {
	 		listener.enterParametroMatriz(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitParametroMatriz) {
	 		listener.exitParametroMatriz(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitParametroMatriz) {
			return visitor.visitParametroMatriz(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listaDeclaracoes(): ListaDeclaracoesContext {
		return this.getTypedRuleContext(ListaDeclaracoesContext, 0) as ListaDeclaracoesContext;
	}
	public se(): SeContext {
		return this.getTypedRuleContext(SeContext, 0) as SeContext;
	}
	public enquanto(): EnquantoContext {
		return this.getTypedRuleContext(EnquantoContext, 0) as EnquantoContext;
	}
	public facaEnquanto(): FacaEnquantoContext {
		return this.getTypedRuleContext(FacaEnquantoContext, 0) as FacaEnquantoContext;
	}
	public para(): ParaContext {
		return this.getTypedRuleContext(ParaContext, 0) as ParaContext;
	}
	public escolha(): EscolhaContext {
		return this.getTypedRuleContext(EscolhaContext, 0) as EscolhaContext;
	}
	public retorne(): RetorneContext {
		return this.getTypedRuleContext(RetorneContext, 0) as RetorneContext;
	}
	public pare(): PareContext {
		return this.getTypedRuleContext(PareContext, 0) as PareContext;
	}
	public atribuicao(): AtribuicaoContext {
		return this.getTypedRuleContext(AtribuicaoContext, 0) as AtribuicaoContext;
	}
	public atribuicaoComposta(): AtribuicaoCompostaContext {
		return this.getTypedRuleContext(AtribuicaoCompostaContext, 0) as AtribuicaoCompostaContext;
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_comando;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterComando) {
	 		listener.enterComando(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitComando) {
	 		listener.exitComando(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitComando) {
			return visitor.visitComando(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtribuicaoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_ATRIBUICAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_atribuicao;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterAtribuicao) {
	 		listener.enterAtribuicao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitAtribuicao) {
	 		listener.exitAtribuicao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitAtribuicao) {
			return visitor.visitAtribuicao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtribuicaoCompostaContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_atribuicaoComposta;
	}
	public copyFrom(ctx: AtribuicaoCompostaContext): void {
		super.copyFrom(ctx);
	}
}
export class AtribuicaoCompostaSomaContext extends AtribuicaoCompostaContext {
	constructor(parser: PortugolParser, ctx: AtribuicaoCompostaContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_MAIS_IGUAL(): TerminalNode {
		return this.getToken(PortugolParser.OP_MAIS_IGUAL, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterAtribuicaoCompostaSoma) {
	 		listener.enterAtribuicaoCompostaSoma(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitAtribuicaoCompostaSoma) {
	 		listener.exitAtribuicaoCompostaSoma(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitAtribuicaoCompostaSoma) {
			return visitor.visitAtribuicaoCompostaSoma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtribuicaoCompostaSubtracaoContext extends AtribuicaoCompostaContext {
	constructor(parser: PortugolParser, ctx: AtribuicaoCompostaContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_MENOS_IGUAL(): TerminalNode {
		return this.getToken(PortugolParser.OP_MENOS_IGUAL, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterAtribuicaoCompostaSubtracao) {
	 		listener.enterAtribuicaoCompostaSubtracao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitAtribuicaoCompostaSubtracao) {
	 		listener.exitAtribuicaoCompostaSubtracao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitAtribuicaoCompostaSubtracao) {
			return visitor.visitAtribuicaoCompostaSubtracao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtribuicaoCompostaMultiplicacaoContext extends AtribuicaoCompostaContext {
	constructor(parser: PortugolParser, ctx: AtribuicaoCompostaContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_MULTIPLICACAO_IGUAL(): TerminalNode {
		return this.getToken(PortugolParser.OP_MULTIPLICACAO_IGUAL, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterAtribuicaoCompostaMultiplicacao) {
	 		listener.enterAtribuicaoCompostaMultiplicacao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitAtribuicaoCompostaMultiplicacao) {
	 		listener.exitAtribuicaoCompostaMultiplicacao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitAtribuicaoCompostaMultiplicacao) {
			return visitor.visitAtribuicaoCompostaMultiplicacao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtribuicaoCompostaDivisaoContext extends AtribuicaoCompostaContext {
	constructor(parser: PortugolParser, ctx: AtribuicaoCompostaContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_DIVISAO_IGUAL(): TerminalNode {
		return this.getToken(PortugolParser.OP_DIVISAO_IGUAL, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterAtribuicaoCompostaDivisao) {
	 		listener.enterAtribuicaoCompostaDivisao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitAtribuicaoCompostaDivisao) {
	 		listener.exitAtribuicaoCompostaDivisao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitAtribuicaoCompostaDivisao) {
			return visitor.visitAtribuicaoCompostaDivisao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RetorneContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETORNE(): TerminalNode {
		return this.getToken(PortugolParser.RETORNE, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_retorne;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterRetorne) {
	 		listener.enterRetorne(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitRetorne) {
	 		listener.exitRetorne(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitRetorne) {
			return visitor.visitRetorne(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SeContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SE(): TerminalNode {
		return this.getToken(PortugolParser.SE, 0);
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
	}
	public listaComandos(): ListaComandosContext {
		return this.getTypedRuleContext(ListaComandosContext, 0) as ListaComandosContext;
	}
	public senao(): SenaoContext {
		return this.getTypedRuleContext(SenaoContext, 0) as SenaoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_se;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterSe) {
	 		listener.enterSe(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitSe) {
	 		listener.exitSe(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitSe) {
			return visitor.visitSe(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SenaoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SENAO(): TerminalNode {
		return this.getToken(PortugolParser.SENAO, 0);
	}
	public listaComandos(): ListaComandosContext {
		return this.getTypedRuleContext(ListaComandosContext, 0) as ListaComandosContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_senao;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterSenao) {
	 		listener.enterSenao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitSenao) {
	 		listener.exitSenao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitSenao) {
			return visitor.visitSenao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnquantoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENQUANTO(): TerminalNode {
		return this.getToken(PortugolParser.ENQUANTO, 0);
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
	}
	public listaComandos(): ListaComandosContext {
		return this.getTypedRuleContext(ListaComandosContext, 0) as ListaComandosContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_enquanto;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterEnquanto) {
	 		listener.enterEnquanto(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitEnquanto) {
	 		listener.exitEnquanto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitEnquanto) {
			return visitor.visitEnquanto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FacaEnquantoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FACA(): TerminalNode {
		return this.getToken(PortugolParser.FACA, 0);
	}
	public listaComandos(): ListaComandosContext {
		return this.getTypedRuleContext(ListaComandosContext, 0) as ListaComandosContext;
	}
	public ENQUANTO(): TerminalNode {
		return this.getToken(PortugolParser.ENQUANTO, 0);
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_facaEnquanto;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterFacaEnquanto) {
	 		listener.enterFacaEnquanto(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitFacaEnquanto) {
	 		listener.exitFacaEnquanto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitFacaEnquanto) {
			return visitor.visitFacaEnquanto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParaContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARA(): TerminalNode {
		return this.getToken(PortugolParser.PARA, 0);
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
	}
	public PONTOVIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(PortugolParser.PONTOVIRGULA);
	}
	public PONTOVIRGULA(i: number): TerminalNode {
		return this.getToken(PortugolParser.PONTOVIRGULA, i);
	}
	public condicao(): CondicaoContext {
		return this.getTypedRuleContext(CondicaoContext, 0) as CondicaoContext;
	}
	public incrementoPara(): IncrementoParaContext {
		return this.getTypedRuleContext(IncrementoParaContext, 0) as IncrementoParaContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
	}
	public listaComandos(): ListaComandosContext {
		return this.getTypedRuleContext(ListaComandosContext, 0) as ListaComandosContext;
	}
	public inicializacaoPara(): InicializacaoParaContext {
		return this.getTypedRuleContext(InicializacaoParaContext, 0) as InicializacaoParaContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_para;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterPara) {
	 		listener.enterPara(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitPara) {
	 		listener.exitPara(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitPara) {
			return visitor.visitPara(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaComandosContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_CHAVES, 0);
	}
	public FECHA_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_CHAVES, 0);
	}
	public comando_list(): ComandoContext[] {
		return this.getTypedRuleContexts(ComandoContext) as ComandoContext[];
	}
	public comando(i: number): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, i) as ComandoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_listaComandos;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterListaComandos) {
	 		listener.enterListaComandos(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitListaComandos) {
	 		listener.exitListaComandos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitListaComandos) {
			return visitor.visitListaComandos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InicializacaoParaContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atribuicao(): AtribuicaoContext {
		return this.getTypedRuleContext(AtribuicaoContext, 0) as AtribuicaoContext;
	}
	public listaDeclaracoes(): ListaDeclaracoesContext {
		return this.getTypedRuleContext(ListaDeclaracoesContext, 0) as ListaDeclaracoesContext;
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_inicializacaoPara;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterInicializacaoPara) {
	 		listener.enterInicializacaoPara(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitInicializacaoPara) {
	 		listener.exitInicializacaoPara(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitInicializacaoPara) {
			return visitor.visitInicializacaoPara(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CondicaoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_condicao;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterCondicao) {
	 		listener.enterCondicao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitCondicao) {
	 		listener.exitCondicao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitCondicao) {
			return visitor.visitCondicao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncrementoParaContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public atribuicaoComposta(): AtribuicaoCompostaContext {
		return this.getTypedRuleContext(AtribuicaoCompostaContext, 0) as AtribuicaoCompostaContext;
	}
	public atribuicao(): AtribuicaoContext {
		return this.getTypedRuleContext(AtribuicaoContext, 0) as AtribuicaoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_incrementoPara;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterIncrementoPara) {
	 		listener.enterIncrementoPara(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitIncrementoPara) {
	 		listener.exitIncrementoPara(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitIncrementoPara) {
			return visitor.visitIncrementoPara(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EscolhaContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ESCOLHA(): TerminalNode {
		return this.getToken(PortugolParser.ESCOLHA, 0);
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
	}
	public ABRE_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_CHAVES, 0);
	}
	public FECHA_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_CHAVES, 0);
	}
	public caso_list(): CasoContext[] {
		return this.getTypedRuleContexts(CasoContext) as CasoContext[];
	}
	public caso(i: number): CasoContext {
		return this.getTypedRuleContext(CasoContext, i) as CasoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_escolha;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterEscolha) {
	 		listener.enterEscolha(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitEscolha) {
	 		listener.exitEscolha(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitEscolha) {
			return visitor.visitEscolha(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CasoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASO(): TerminalNode {
		return this.getToken(PortugolParser.CASO, 0);
	}
	public DOISPONTOS(): TerminalNode {
		return this.getToken(PortugolParser.DOISPONTOS, 0);
	}
	public CONTRARIO(): TerminalNode {
		return this.getToken(PortugolParser.CONTRARIO, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public ABRE_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_CHAVES, 0);
	}
	public FECHA_CHAVES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_CHAVES, 0);
	}
	public pare(): PareContext {
		return this.getTypedRuleContext(PareContext, 0) as PareContext;
	}
	public comando_list(): ComandoContext[] {
		return this.getTypedRuleContexts(ComandoContext) as ComandoContext[];
	}
	public comando(i: number): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, i) as ComandoContext;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_caso;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterCaso) {
	 		listener.enterCaso(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitCaso) {
	 		listener.exitCaso(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitCaso) {
			return visitor.visitCaso(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PareContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARE(): TerminalNode {
		return this.getToken(PortugolParser.PARE, 0);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_pare;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterPare) {
	 		listener.enterPare(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitPare) {
	 		listener.exitPare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitPare) {
			return visitor.visitPare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndiceArrayContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_COLCHETES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_COLCHETES, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public FECHA_COLCHETES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_COLCHETES, 0);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_indiceArray;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterIndiceArray) {
	 		listener.enterIndiceArray(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitIndiceArray) {
	 		listener.exitIndiceArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitIndiceArray) {
			return visitor.visitIndiceArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressaoContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_expressao;
	}
	public copyFrom(ctx: ExpressaoContext): void {
		super.copyFrom(ctx);
	}
}
export class ChamadaFuncaoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
	}
	public escopoBiblioteca(): EscopoBibliotecaContext {
		return this.getTypedRuleContext(EscopoBibliotecaContext, 0) as EscopoBibliotecaContext;
	}
	public listaExpressoes(): ListaExpressoesContext {
		return this.getTypedRuleContext(ListaExpressoesContext, 0) as ListaExpressoesContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterChamadaFuncao) {
	 		listener.enterChamadaFuncao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitChamadaFuncao) {
	 		listener.exitChamadaFuncao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitChamadaFuncao) {
			return visitor.visitChamadaFuncao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(PortugolParser.STRING, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegacaoBitwiseContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP_NOT_BITWISE(): TerminalNode {
		return this.getToken(PortugolParser.OP_NOT_BITWISE, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterNegacaoBitwise) {
	 		listener.enterNegacaoBitwise(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitNegacaoBitwise) {
	 		listener.exitNegacaoBitwise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitNegacaoBitwise) {
			return visitor.visitNegacaoBitwise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReferenciaArrayContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public indiceArray(): IndiceArrayContext {
		return this.getTypedRuleContext(IndiceArrayContext, 0) as IndiceArrayContext;
	}
	public escopoBiblioteca(): EscopoBibliotecaContext {
		return this.getTypedRuleContext(EscopoBibliotecaContext, 0) as EscopoBibliotecaContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterReferenciaArray) {
	 		listener.enterReferenciaArray(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitReferenciaArray) {
	 		listener.exitReferenciaArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitReferenciaArray) {
			return visitor.visitReferenciaArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumeroRealContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REAL(): TerminalNode {
		return this.getToken(PortugolParser.REAL, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterNumeroReal) {
	 		listener.enterNumeroReal(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitNumeroReal) {
	 		listener.exitNumeroReal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitNumeroReal) {
			return visitor.visitNumeroReal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MaisUnarioContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP_ADICAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_ADICAO, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterMaisUnario) {
	 		listener.enterMaisUnario(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitMaisUnario) {
	 		listener.exitMaisUnario(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitMaisUnario) {
			return visitor.visitMaisUnario(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoDiferencaContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_DIFERENCA(): TerminalNode {
		return this.getToken(PortugolParser.OP_DIFERENCA, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoDiferenca) {
	 		listener.enterOperacaoDiferenca(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoDiferenca) {
	 		listener.exitOperacaoDiferenca(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoDiferenca) {
			return visitor.visitOperacaoDiferenca(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MenosUnarioContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP_SUBTRACAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_SUBTRACAO, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterMenosUnario) {
	 		listener.enterMenosUnario(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitMenosUnario) {
	 		listener.exitMenosUnario(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitMenosUnario) {
			return visitor.visitMenosUnario(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdicaoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_ADICAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_ADICAO, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterAdicao) {
	 		listener.enterAdicao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitAdicao) {
	 		listener.exitAdicao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitAdicao) {
			return visitor.visitAdicao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoXorContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_XOR(): TerminalNode {
		return this.getToken(PortugolParser.OP_XOR, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoXor) {
	 		listener.enterOperacaoXor(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoXor) {
	 		listener.exitOperacaoXor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoXor) {
			return visitor.visitOperacaoXor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoMaiorIgualContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_MAIOR_IGUAL(): TerminalNode {
		return this.getToken(PortugolParser.OP_MAIOR_IGUAL, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoMaiorIgual) {
	 		listener.enterOperacaoMaiorIgual(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoMaiorIgual) {
	 		listener.exitOperacaoMaiorIgual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoMaiorIgual) {
			return visitor.visitOperacaoMaiorIgual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecrementoUnarioPrefixadoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP_DECREMENTO_UNARIO(): TerminalNode {
		return this.getToken(PortugolParser.OP_DECREMENTO_UNARIO, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public indiceArray_list(): IndiceArrayContext[] {
		return this.getTypedRuleContexts(IndiceArrayContext) as IndiceArrayContext[];
	}
	public indiceArray(i: number): IndiceArrayContext {
		return this.getTypedRuleContext(IndiceArrayContext, i) as IndiceArrayContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterDecrementoUnarioPrefixado) {
	 		listener.enterDecrementoUnarioPrefixado(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitDecrementoUnarioPrefixado) {
	 		listener.exitDecrementoUnarioPrefixado(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitDecrementoUnarioPrefixado) {
			return visitor.visitDecrementoUnarioPrefixado(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncrementoUnarioPosfixadoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public OP_INCREMENTO_UNARIO(): TerminalNode {
		return this.getToken(PortugolParser.OP_INCREMENTO_UNARIO, 0);
	}
	public indiceArray_list(): IndiceArrayContext[] {
		return this.getTypedRuleContexts(IndiceArrayContext) as IndiceArrayContext[];
	}
	public indiceArray(i: number): IndiceArrayContext {
		return this.getTypedRuleContext(IndiceArrayContext, i) as IndiceArrayContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterIncrementoUnarioPosfixado) {
	 		listener.enterIncrementoUnarioPosfixado(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitIncrementoUnarioPosfixado) {
	 		listener.exitIncrementoUnarioPosfixado(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitIncrementoUnarioPosfixado) {
			return visitor.visitIncrementoUnarioPosfixado(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicacaoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_MULTIPLICACAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_MULTIPLICACAO, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterMultiplicacao) {
	 		listener.enterMultiplicacao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitMultiplicacao) {
	 		listener.exitMultiplicacao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitMultiplicacao) {
			return visitor.visitMultiplicacao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoOuLogicoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_OU_LOGICO(): TerminalNode {
		return this.getToken(PortugolParser.OP_OU_LOGICO, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoOuLogico) {
	 		listener.enterOperacaoOuLogico(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoOuLogico) {
	 		listener.exitOperacaoOuLogico(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoOuLogico) {
			return visitor.visitOperacaoOuLogico(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoIgualdadeContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_IGUALDADE(): TerminalNode {
		return this.getToken(PortugolParser.OP_IGUALDADE, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoIgualdade) {
	 		listener.enterOperacaoIgualdade(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoIgualdade) {
	 		listener.exitOperacaoIgualdade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoIgualdade) {
			return visitor.visitOperacaoIgualdade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoShiftRightContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_SHIFT_RIGHT(): TerminalNode {
		return this.getToken(PortugolParser.OP_SHIFT_RIGHT, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoShiftRight) {
	 		listener.enterOperacaoShiftRight(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoShiftRight) {
	 		listener.exitOperacaoShiftRight(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoShiftRight) {
			return visitor.visitOperacaoShiftRight(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisaoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_DIVISAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_DIVISAO, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterDivisao) {
	 		listener.enterDivisao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitDivisao) {
	 		listener.exitDivisao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitDivisao) {
			return visitor.visitDivisao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressaoEntreParentesesContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterExpressaoEntreParenteses) {
	 		listener.enterExpressaoEntreParenteses(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitExpressaoEntreParenteses) {
	 		listener.exitExpressaoEntreParenteses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitExpressaoEntreParenteses) {
			return visitor.visitExpressaoEntreParenteses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoMenorIgualContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_MENOR_IGUAL(): TerminalNode {
		return this.getToken(PortugolParser.OP_MENOR_IGUAL, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoMenorIgual) {
	 		listener.enterOperacaoMenorIgual(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoMenorIgual) {
	 		listener.exitOperacaoMenorIgual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoMenorIgual) {
			return visitor.visitOperacaoMenorIgual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReferenciaMatrizContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public indiceArray_list(): IndiceArrayContext[] {
		return this.getTypedRuleContexts(IndiceArrayContext) as IndiceArrayContext[];
	}
	public indiceArray(i: number): IndiceArrayContext {
		return this.getTypedRuleContext(IndiceArrayContext, i) as IndiceArrayContext;
	}
	public escopoBiblioteca(): EscopoBibliotecaContext {
		return this.getTypedRuleContext(EscopoBibliotecaContext, 0) as EscopoBibliotecaContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterReferenciaMatriz) {
	 		listener.enterReferenciaMatriz(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitReferenciaMatriz) {
	 		listener.exitReferenciaMatriz(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitReferenciaMatriz) {
			return visitor.visitReferenciaMatriz(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoMaiorContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_MAIOR(): TerminalNode {
		return this.getToken(PortugolParser.OP_MAIOR, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoMaior) {
	 		listener.enterOperacaoMaior(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoMaior) {
	 		listener.exitOperacaoMaior(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoMaior) {
			return visitor.visitOperacaoMaior(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumeroInteiroContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INT(): TerminalNode {
		return this.getToken(PortugolParser.INT, 0);
	}
	public HEXADECIMAL(): TerminalNode {
		return this.getToken(PortugolParser.HEXADECIMAL, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterNumeroInteiro) {
	 		listener.enterNumeroInteiro(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitNumeroInteiro) {
	 		listener.exitNumeroInteiro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitNumeroInteiro) {
			return visitor.visitNumeroInteiro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaracterContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CARACTER(): TerminalNode {
		return this.getToken(PortugolParser.CARACTER, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterCaracter) {
	 		listener.enterCaracter(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitCaracter) {
	 		listener.exitCaracter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitCaracter) {
			return visitor.visitCaracter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReferenciaParaVariavelContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public escopoBiblioteca(): EscopoBibliotecaContext {
		return this.getTypedRuleContext(EscopoBibliotecaContext, 0) as EscopoBibliotecaContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterReferenciaParaVariavel) {
	 		listener.enterReferenciaParaVariavel(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitReferenciaParaVariavel) {
	 		listener.exitReferenciaParaVariavel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitReferenciaParaVariavel) {
			return visitor.visitReferenciaParaVariavel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValorLogicoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LOGICO(): TerminalNode {
		return this.getToken(PortugolParser.LOGICO, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterValorLogico) {
	 		listener.enterValorLogico(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitValorLogico) {
	 		listener.exitValorLogico(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitValorLogico) {
			return visitor.visitValorLogico(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoMenorContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_MENOR(): TerminalNode {
		return this.getToken(PortugolParser.OP_MENOR, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoMenor) {
	 		listener.enterOperacaoMenor(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoMenor) {
	 		listener.exitOperacaoMenor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoMenor) {
			return visitor.visitOperacaoMenor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoShiftLeftContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_SHIFT_LEFT(): TerminalNode {
		return this.getToken(PortugolParser.OP_SHIFT_LEFT, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoShiftLeft) {
	 		listener.enterOperacaoShiftLeft(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoShiftLeft) {
	 		listener.exitOperacaoShiftLeft(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoShiftLeft) {
			return visitor.visitOperacaoShiftLeft(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncrementoUnarioPrefixadoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP_INCREMENTO_UNARIO(): TerminalNode {
		return this.getToken(PortugolParser.OP_INCREMENTO_UNARIO, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public indiceArray_list(): IndiceArrayContext[] {
		return this.getTypedRuleContexts(IndiceArrayContext) as IndiceArrayContext[];
	}
	public indiceArray(i: number): IndiceArrayContext {
		return this.getTypedRuleContext(IndiceArrayContext, i) as IndiceArrayContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterIncrementoUnarioPrefixado) {
	 		listener.enterIncrementoUnarioPrefixado(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitIncrementoUnarioPrefixado) {
	 		listener.exitIncrementoUnarioPrefixado(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitIncrementoUnarioPrefixado) {
			return visitor.visitIncrementoUnarioPrefixado(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoELogicoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_E_LOGICO(): TerminalNode {
		return this.getToken(PortugolParser.OP_E_LOGICO, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoELogico) {
	 		listener.enterOperacaoELogico(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoELogico) {
	 		listener.exitOperacaoELogico(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoELogico) {
			return visitor.visitOperacaoELogico(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecrementoUnarioPosfixadoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public OP_DECREMENTO_UNARIO(): TerminalNode {
		return this.getToken(PortugolParser.OP_DECREMENTO_UNARIO, 0);
	}
	public indiceArray_list(): IndiceArrayContext[] {
		return this.getTypedRuleContexts(IndiceArrayContext) as IndiceArrayContext[];
	}
	public indiceArray(i: number): IndiceArrayContext {
		return this.getTypedRuleContext(IndiceArrayContext, i) as IndiceArrayContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterDecrementoUnarioPosfixado) {
	 		listener.enterDecrementoUnarioPosfixado(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitDecrementoUnarioPosfixado) {
	 		listener.exitDecrementoUnarioPosfixado(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitDecrementoUnarioPosfixado) {
			return visitor.visitDecrementoUnarioPosfixado(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoOrBitwiseContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_OU_BITWISE(): TerminalNode {
		return this.getToken(PortugolParser.OP_OU_BITWISE, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoOrBitwise) {
	 		listener.enterOperacaoOrBitwise(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoOrBitwise) {
	 		listener.exitOperacaoOrBitwise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoOrBitwise) {
			return visitor.visitOperacaoOrBitwise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModuloContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_MOD(): TerminalNode {
		return this.getToken(PortugolParser.OP_MOD, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterModulo) {
	 		listener.enterModulo(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitModulo) {
	 		listener.exitModulo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitModulo) {
			return visitor.visitModulo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtracaoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public OP_SUBTRACAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_SUBTRACAO, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterSubtracao) {
	 		listener.enterSubtracao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitSubtracao) {
	 		listener.exitSubtracao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitSubtracao) {
			return visitor.visitSubtracao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegacaoContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP_NAO(): TerminalNode {
		return this.getToken(PortugolParser.OP_NAO, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterNegacao) {
	 		listener.enterNegacao(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitNegacao) {
	 		listener.exitNegacao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitNegacao) {
			return visitor.visitNegacao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperacaoAndBitwiseContext extends ExpressaoContext {
	constructor(parser: PortugolParser, ctx: ExpressaoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public E_COMERCIAL(): TerminalNode {
		return this.getToken(PortugolParser.E_COMERCIAL, 0);
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterOperacaoAndBitwise) {
	 		listener.enterOperacaoAndBitwise(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitOperacaoAndBitwise) {
	 		listener.exitOperacaoAndBitwise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitOperacaoAndBitwise) {
			return visitor.visitOperacaoAndBitwise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaExpressoesContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public atribuicaoComposta_list(): AtribuicaoCompostaContext[] {
		return this.getTypedRuleContexts(AtribuicaoCompostaContext) as AtribuicaoCompostaContext[];
	}
	public atribuicaoComposta(i: number): AtribuicaoCompostaContext {
		return this.getTypedRuleContext(AtribuicaoCompostaContext, i) as AtribuicaoCompostaContext;
	}
	public atribuicao_list(): AtribuicaoContext[] {
		return this.getTypedRuleContexts(AtribuicaoContext) as AtribuicaoContext[];
	}
	public atribuicao(i: number): AtribuicaoContext {
		return this.getTypedRuleContext(AtribuicaoContext, i) as AtribuicaoContext;
	}
	public VIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(PortugolParser.VIRGULA);
	}
	public VIRGULA(i: number): TerminalNode {
		return this.getToken(PortugolParser.VIRGULA, i);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_listaExpressoes;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterListaExpressoes) {
	 		listener.enterListaExpressoes(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitListaExpressoes) {
	 		listener.exitListaExpressoes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitListaExpressoes) {
			return visitor.visitListaExpressoes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EscopoBibliotecaContext extends ParserRuleContext {
	constructor(parser?: PortugolParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(PortugolParser.ID, 0);
	}
	public PONTO(): TerminalNode {
		return this.getToken(PortugolParser.PONTO, 0);
	}
    public get ruleIndex(): number {
    	return PortugolParser.RULE_escopoBiblioteca;
	}
	public enterRule(listener: PortugolListener): void {
	    if(listener.enterEscopoBiblioteca) {
	 		listener.enterEscopoBiblioteca(this);
		}
	}
	public exitRule(listener: PortugolListener): void {
	    if(listener.exitEscopoBiblioteca) {
	 		listener.exitEscopoBiblioteca(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PortugolVisitor<Result>): Result {
		if (visitor.visitEscopoBiblioteca) {
			return visitor.visitEscopoBiblioteca(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
