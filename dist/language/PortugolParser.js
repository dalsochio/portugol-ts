"use strict";
// Generated from ./src/language/Portugol.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperacaoXorContext = exports.AdicaoContext = exports.MenosUnarioContext = exports.OperacaoDiferencaContext = exports.MaisUnarioContext = exports.NumeroRealContext = exports.ReferenciaArrayContext = exports.NegacaoBitwiseContext = exports.StringContext = exports.ChamadaFuncaoContext = exports.ExpressaoContext = exports.IndiceArrayContext = exports.PareContext = exports.CasoContext = exports.EscolhaContext = exports.IncrementoParaContext = exports.CondicaoContext = exports.InicializacaoParaContext = exports.ListaComandosContext = exports.ParaContext = exports.FacaEnquantoContext = exports.EnquantoContext = exports.SenaoContext = exports.SeContext = exports.RetorneContext = exports.AtribuicaoCompostaDivisaoContext = exports.AtribuicaoCompostaMultiplicacaoContext = exports.AtribuicaoCompostaSubtracaoContext = exports.AtribuicaoCompostaSomaContext = exports.AtribuicaoCompostaContext = exports.AtribuicaoContext = exports.ComandoContext = exports.ParametroMatrizContext = exports.ParametroArrayContext = exports.ParametroContext = exports.ListaParametrosContext = exports.ParametroFuncaoContext = exports.DeclaracaoFuncaoContext = exports.TamanhoArrayContext = exports.InicializacaoArrayContext = exports.DeclaracaoArrayContext = exports.ColunaMatrizContext = exports.LinhaMatrizContext = exports.InicializacaoMatrizContext = exports.DeclaracaoMatrizContext = exports.DeclaracaoVariavelContext = exports.DeclaracaoContext = exports.ListaDeclaracoesContext = exports.InclusaoBibliotecaContext = exports.ArquivoContext = void 0;
exports.EscopoBibliotecaContext = exports.ListaExpressoesContext = exports.OperacaoAndBitwiseContext = exports.NegacaoContext = exports.SubtracaoContext = exports.ModuloContext = exports.OperacaoOrBitwiseContext = exports.DecrementoUnarioPosfixadoContext = exports.OperacaoELogicoContext = exports.IncrementoUnarioPrefixadoContext = exports.OperacaoShiftLeftContext = exports.OperacaoMenorContext = exports.ValorLogicoContext = exports.ReferenciaParaVariavelContext = exports.CaracterContext = exports.NumeroInteiroContext = exports.OperacaoMaiorContext = exports.ReferenciaMatrizContext = exports.OperacaoMenorIgualContext = exports.ExpressaoEntreParentesesContext = exports.DivisaoContext = exports.OperacaoShiftRightContext = exports.OperacaoIgualdadeContext = exports.OperacaoOuLogicoContext = exports.MultiplicacaoContext = exports.IncrementoUnarioPosfixadoContext = exports.DecrementoUnarioPrefixadoContext = exports.OperacaoMaiorIgualContext = void 0;
var antlr4_1 = require("antlr4");
var PortugolParser = /** @class */ (function (_super) {
    __extends(PortugolParser, _super);
    function PortugolParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new antlr4_1.ParserATNSimulator(_this, PortugolParser._ATN, PortugolParser.DecisionsToDFA, new antlr4_1.PredictionContextCache());
        return _this;
    }
    Object.defineProperty(PortugolParser.prototype, "grammarFileName", {
        get: function () { return "Portugol.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PortugolParser.prototype, "literalNames", {
        get: function () { return PortugolParser.literalNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PortugolParser.prototype, "symbolicNames", {
        get: function () { return PortugolParser.symbolicNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PortugolParser.prototype, "ruleNames", {
        get: function () { return PortugolParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PortugolParser.prototype, "serializedATN", {
        get: function () { return PortugolParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    PortugolParser.prototype.createFailedPredicateException = function (predicate, message) {
        return new antlr4_1.FailedPredicateException(this, predicate, message);
    };
    // @RuleVersion(0)
    PortugolParser.prototype.arquivo = function () {
        var localctx = new ArquivoContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, PortugolParser.RULE_arquivo);
        var _la;
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
                while (_la === 21) {
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
                                throw new antlr4_1.NoViableAltException(this);
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.inclusaoBiblioteca = function () {
        var localctx = new InclusaoBibliotecaContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, PortugolParser.RULE_inclusaoBiblioteca);
        var _la;
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
                if (_la === 45) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.listaDeclaracoes = function () {
        var localctx = new ListaDeclaracoesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, PortugolParser.RULE_listaDeclaracoes);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 13) {
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
                while (_la === 64) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.declaracao = function () {
        var localctx = new DeclaracaoContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, PortugolParser.RULE_declaracao);
        try {
            this.state = 115;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.declaracaoVariavel = function () {
        var localctx = new DeclaracaoVariavelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, PortugolParser.RULE_declaracaoVariavel);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 117;
                this.match(PortugolParser.ID);
                this.state = 120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 31) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.declaracaoMatriz = function () {
        var localctx = new DeclaracaoMatrizContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, PortugolParser.RULE_declaracaoMatriz);
        var _la;
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
                if (_la === 31) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.inicializacaoMatriz = function () {
        var localctx = new InicializacaoMatrizContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, PortugolParser.RULE_inicializacaoMatriz);
        var _la;
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
                while (_la === 64) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.linhaMatriz = function () {
        var localctx = new LinhaMatrizContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, PortugolParser.RULE_linhaMatriz);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 148;
                this.tamanhoArray();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.colunaMatriz = function () {
        var localctx = new ColunaMatrizContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, PortugolParser.RULE_colunaMatriz);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 150;
                this.tamanhoArray();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.declaracaoArray = function () {
        var localctx = new DeclaracaoArrayContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, PortugolParser.RULE_declaracaoArray);
        var _la;
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
                if (_la === 31) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.inicializacaoArray = function () {
        var localctx = new InicializacaoArrayContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, PortugolParser.RULE_inicializacaoArray);
        var _la;
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.tamanhoArray = function () {
        var localctx = new TamanhoArrayContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, PortugolParser.RULE_tamanhoArray);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 168;
                this.expressao(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.declaracaoFuncao = function () {
        var localctx = new DeclaracaoFuncaoContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, PortugolParser.RULE_declaracaoFuncao);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 170;
                this.match(PortugolParser.FUNCAO);
                this.state = 172;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 7) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.parametroFuncao = function () {
        var localctx = new ParametroFuncaoContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, PortugolParser.RULE_parametroFuncao);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 185;
                this.match(PortugolParser.ABRE_PARENTESES);
                this.state = 187;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 7) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.listaParametros = function () {
        var localctx = new ListaParametrosContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, PortugolParser.RULE_listaParametros);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 191;
                this.parametro();
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 64) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.parametro = function () {
        var localctx = new ParametroContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, PortugolParser.RULE_parametro);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 199;
                this.match(PortugolParser.TIPO);
                this.state = 201;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 46) {
                    {
                        this.state = 200;
                        this.match(PortugolParser.E_COMERCIAL);
                    }
                }
                this.state = 203;
                this.match(PortugolParser.ID);
                this.state = 206;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 20, this._ctx)) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.parametroArray = function () {
        var localctx = new ParametroArrayContext(this, this._ctx, this.state);
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.parametroMatriz = function () {
        var localctx = new ParametroMatrizContext(this, this._ctx, this.state);
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.comando = function () {
        var localctx = new ComandoContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, PortugolParser.RULE_comando);
        try {
            this.state = 227;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 21, this._ctx)) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.atribuicao = function () {
        var localctx = new AtribuicaoContext(this, this._ctx, this.state);
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.atribuicaoComposta = function () {
        var localctx = new AtribuicaoCompostaContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, PortugolParser.RULE_atribuicaoComposta);
        try {
            this.state = 249;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.retorne = function () {
        var localctx = new RetorneContext(this, this._ctx, this.state);
        this.enterRule(localctx, 42, PortugolParser.RULE_retorne);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 251;
                this.match(PortugolParser.RETORNE);
                this.state = 253;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.se = function () {
        var localctx = new SeContext(this, this._ctx, this.state);
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
                switch (this._interp.adaptivePredict(this._input, 24, this._ctx)) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.senao = function () {
        var localctx = new SenaoContext(this, this._ctx, this.state);
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.enquanto = function () {
        var localctx = new EnquantoContext(this, this._ctx, this.state);
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.facaEnquanto = function () {
        var localctx = new FacaEnquantoContext(this, this._ctx, this.state);
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.para = function () {
        var localctx = new ParaContext(this, this._ctx, this.state);
        this.enterRule(localctx, 52, PortugolParser.RULE_para);
        var _la;
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.listaComandos = function () {
        var localctx = new ListaComandosContext(this, this._ctx, this.state);
        this.enterRule(localctx, 54, PortugolParser.RULE_listaComandos);
        var _la;
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
                        throw new antlr4_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.inicializacaoPara = function () {
        var localctx = new InicializacaoParaContext(this, this._ctx, this.state);
        this.enterRule(localctx, 56, PortugolParser.RULE_inicializacaoPara);
        try {
            this.state = 305;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 28, this._ctx)) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.condicao = function () {
        var localctx = new CondicaoContext(this, this._ctx, this.state);
        this.enterRule(localctx, 58, PortugolParser.RULE_condicao);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 307;
                this.expressao(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.incrementoPara = function () {
        var localctx = new IncrementoParaContext(this, this._ctx, this.state);
        this.enterRule(localctx, 60, PortugolParser.RULE_incrementoPara);
        try {
            this.state = 312;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.escolha = function () {
        var localctx = new EscolhaContext(this, this._ctx, this.state);
        this.enterRule(localctx, 62, PortugolParser.RULE_escolha);
        var _la;
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
                while (_la === 17) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.caso = function () {
        var localctx = new CasoContext(this, this._ctx, this.state);
        this.enterRule(localctx, 64, PortugolParser.RULE_caso);
        var _la;
        try {
            var _alt = void 0;
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
                        throw new antlr4_1.NoViableAltException(this);
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
                            while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
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
                        throw new antlr4_1.NoViableAltException(this);
                }
                this.state = 350;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 19) {
                    {
                        this.state = 349;
                        this.pare();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.pare = function () {
        var localctx = new PareContext(this, this._ctx, this.state);
        this.enterRule(localctx, 66, PortugolParser.RULE_pare);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 352;
                this.match(PortugolParser.PARE);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.indiceArray = function () {
        var localctx = new IndiceArrayContext(this, this._ctx, this.state);
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.expressao = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new ExpressaoContext(this, this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 70;
        this.enterRecursionRule(localctx, 70, PortugolParser.RULE_expressao, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 434;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 50, this._ctx)) {
                    case 1:
                        {
                            localctx = new ChamadaFuncaoContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 360;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 36, this._ctx)) {
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
                            switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
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
                            switch (this._interp.adaptivePredict(this._input, 39, this._ctx)) {
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
                            switch (this._interp.adaptivePredict(this._input, 40, this._ctx)) {
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
                            if (_la === 3) {
                                {
                                    this.state = 390;
                                    this.indiceArray();
                                    this.state = 392;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === 3) {
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
                            if (_la === 3) {
                                {
                                    this.state = 398;
                                    this.indiceArray();
                                    this.state = 400;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === 3) {
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
                            switch (this._interp.adaptivePredict(this._input, 46, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 407;
                                        this.indiceArray();
                                        this.state = 409;
                                        this._errHandler.sync(this);
                                        switch (this._interp.adaptivePredict(this._input, 45, this._ctx)) {
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
                            switch (this._interp.adaptivePredict(this._input, 48, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 415;
                                        this.indiceArray();
                                        this.state = 417;
                                        this._errHandler.sync(this);
                                        switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
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
                            switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
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
                            if (!(_la === 58 || _la === 59)) {
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
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 490;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 51, this._ctx)) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.listaExpressoes = function () {
        var localctx = new ListaExpressoesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 72, PortugolParser.RULE_listaExpressoes);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 498;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 53, this._ctx)) {
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
                while (_la === 64) {
                    {
                        {
                            this.state = 500;
                            this.match(PortugolParser.VIRGULA);
                            this.state = 504;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 54, this._ctx)) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    PortugolParser.prototype.escopoBiblioteca = function () {
        var localctx = new EscopoBibliotecaContext(this, this._ctx, this.state);
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    PortugolParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 35:
                return this.expressao_sempred(localctx, predIndex);
        }
        return true;
    };
    PortugolParser.prototype.expressao_sempred = function (localctx, predIndex) {
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
    };
    Object.defineProperty(PortugolParser, "_ATN", {
        get: function () {
            if (!PortugolParser.__ATN) {
                PortugolParser.__ATN = new antlr4_1.ATNDeserializer().deserialize(PortugolParser._serializedATN);
            }
            return PortugolParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    PortugolParser.ABRE_PARENTESES = 1;
    PortugolParser.FECHA_PARENTESES = 2;
    PortugolParser.ABRE_COLCHETES = 3;
    PortugolParser.FECHA_COLCHETES = 4;
    PortugolParser.ABRE_CHAVES = 5;
    PortugolParser.FECHA_CHAVES = 6;
    PortugolParser.TIPO = 7;
    PortugolParser.FACA = 8;
    PortugolParser.ENQUANTO = 9;
    PortugolParser.PARA = 10;
    PortugolParser.SE = 11;
    PortugolParser.SENAO = 12;
    PortugolParser.CONSTANTE = 13;
    PortugolParser.FUNCAO = 14;
    PortugolParser.PROGRAMA = 15;
    PortugolParser.ESCOLHA = 16;
    PortugolParser.CASO = 17;
    PortugolParser.CONTRARIO = 18;
    PortugolParser.PARE = 19;
    PortugolParser.RETORNE = 20;
    PortugolParser.INCLUA = 21;
    PortugolParser.BIBLIOTECA = 22;
    PortugolParser.OP_NAO = 23;
    PortugolParser.OP_E_LOGICO = 24;
    PortugolParser.OP_OU_LOGICO = 25;
    PortugolParser.OP_SUBTRACAO = 26;
    PortugolParser.OP_ADICAO = 27;
    PortugolParser.OP_MULTIPLICACAO = 28;
    PortugolParser.OP_DIVISAO = 29;
    PortugolParser.OP_MOD = 30;
    PortugolParser.OP_ATRIBUICAO = 31;
    PortugolParser.OP_IGUALDADE = 32;
    PortugolParser.OP_DIFERENCA = 33;
    PortugolParser.OP_MAIOR = 34;
    PortugolParser.OP_MENOR = 35;
    PortugolParser.OP_MENOR_IGUAL = 36;
    PortugolParser.OP_MAIOR_IGUAL = 37;
    PortugolParser.OP_INCREMENTO_UNARIO = 38;
    PortugolParser.OP_DECREMENTO_UNARIO = 39;
    PortugolParser.OP_SHIFT_LEFT = 40;
    PortugolParser.OP_SHIFT_RIGHT = 41;
    PortugolParser.OP_XOR = 42;
    PortugolParser.OP_OU_BITWISE = 43;
    PortugolParser.OP_NOT_BITWISE = 44;
    PortugolParser.OP_ALIAS_BIBLIOTECA = 45;
    PortugolParser.E_COMERCIAL = 46;
    PortugolParser.OP_MAIS_IGUAL = 47;
    PortugolParser.OP_MENOS_IGUAL = 48;
    PortugolParser.OP_MULTIPLICACAO_IGUAL = 49;
    PortugolParser.OP_DIVISAO_IGUAL = 50;
    PortugolParser.LOGICO = 51;
    PortugolParser.VERDADEIRO = 52;
    PortugolParser.FALSO = 53;
    PortugolParser.CARACTER = 54;
    PortugolParser.STRING = 55;
    PortugolParser.ID = 56;
    PortugolParser.REAL = 57;
    PortugolParser.INT = 58;
    PortugolParser.HEXADECIMAL = 59;
    PortugolParser.COMENTARIO = 60;
    PortugolParser.COMENTARIO_SIMPLES = 61;
    PortugolParser.WS = 62;
    PortugolParser.PONTO = 63;
    PortugolParser.VIRGULA = 64;
    PortugolParser.PONTOVIRGULA = 65;
    PortugolParser.DOISPONTOS = 66;
    PortugolParser.EOF = antlr4_1.Token.EOF;
    PortugolParser.RULE_arquivo = 0;
    PortugolParser.RULE_inclusaoBiblioteca = 1;
    PortugolParser.RULE_listaDeclaracoes = 2;
    PortugolParser.RULE_declaracao = 3;
    PortugolParser.RULE_declaracaoVariavel = 4;
    PortugolParser.RULE_declaracaoMatriz = 5;
    PortugolParser.RULE_inicializacaoMatriz = 6;
    PortugolParser.RULE_linhaMatriz = 7;
    PortugolParser.RULE_colunaMatriz = 8;
    PortugolParser.RULE_declaracaoArray = 9;
    PortugolParser.RULE_inicializacaoArray = 10;
    PortugolParser.RULE_tamanhoArray = 11;
    PortugolParser.RULE_declaracaoFuncao = 12;
    PortugolParser.RULE_parametroFuncao = 13;
    PortugolParser.RULE_listaParametros = 14;
    PortugolParser.RULE_parametro = 15;
    PortugolParser.RULE_parametroArray = 16;
    PortugolParser.RULE_parametroMatriz = 17;
    PortugolParser.RULE_comando = 18;
    PortugolParser.RULE_atribuicao = 19;
    PortugolParser.RULE_atribuicaoComposta = 20;
    PortugolParser.RULE_retorne = 21;
    PortugolParser.RULE_se = 22;
    PortugolParser.RULE_senao = 23;
    PortugolParser.RULE_enquanto = 24;
    PortugolParser.RULE_facaEnquanto = 25;
    PortugolParser.RULE_para = 26;
    PortugolParser.RULE_listaComandos = 27;
    PortugolParser.RULE_inicializacaoPara = 28;
    PortugolParser.RULE_condicao = 29;
    PortugolParser.RULE_incrementoPara = 30;
    PortugolParser.RULE_escolha = 31;
    PortugolParser.RULE_caso = 32;
    PortugolParser.RULE_pare = 33;
    PortugolParser.RULE_indiceArray = 34;
    PortugolParser.RULE_expressao = 35;
    PortugolParser.RULE_listaExpressoes = 36;
    PortugolParser.RULE_escopoBiblioteca = 37;
    PortugolParser.literalNames = [null, "'('",
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
        "';'", "':'"];
    PortugolParser.symbolicNames = [null, "ABRE_PARENTESES",
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
        "DOISPONTOS"];
    // tslint:disable:no-trailing-whitespace
    PortugolParser.ruleNames = [
        "arquivo", "inclusaoBiblioteca", "listaDeclaracoes", "declaracao", "declaracaoVariavel",
        "declaracaoMatriz", "inicializacaoMatriz", "linhaMatriz", "colunaMatriz",
        "declaracaoArray", "inicializacaoArray", "tamanhoArray", "declaracaoFuncao",
        "parametroFuncao", "listaParametros", "parametro", "parametroArray", "parametroMatriz",
        "comando", "atribuicao", "atribuicaoComposta", "retorne", "se", "senao",
        "enquanto", "facaEnquanto", "para", "listaComandos", "inicializacaoPara",
        "condicao", "incrementoPara", "escolha", "caso", "pare", "indiceArray",
        "expressao", "listaExpressoes", "escopoBiblioteca",
    ];
    PortugolParser._serializedATN = [4, 1, 66, 515, 2, 0, 7, 0, 2,
        1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
        10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17,
        7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7,
        24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31,
        2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 1, 0, 1, 0, 1, 0,
        5, 0, 80, 8, 0, 10, 0, 12, 0, 83, 9, 0, 1, 0, 1, 0, 5, 0, 87, 8, 0, 10, 0, 12, 0, 90, 9, 0, 1, 0, 1, 0,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 99, 8, 1, 1, 2, 3, 2, 102, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 108,
        8, 2, 10, 2, 12, 2, 111, 9, 2, 1, 3, 1, 3, 1, 3, 3, 3, 116, 8, 3, 1, 4, 1, 4, 1, 4, 3, 4, 121, 8, 4, 1,
        5, 1, 5, 1, 5, 3, 5, 126, 8, 5, 1, 5, 1, 5, 1, 5, 3, 5, 131, 8, 5, 1, 5, 1, 5, 1, 5, 3, 5, 136, 8, 5, 1,
        6, 1, 6, 1, 6, 1, 6, 5, 6, 142, 8, 6, 10, 6, 12, 6, 145, 9, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 9,
        1, 9, 1, 9, 3, 9, 156, 8, 9, 1, 9, 1, 9, 1, 9, 3, 9, 161, 8, 9, 1, 10, 1, 10, 3, 10, 165, 8, 10, 1, 10,
        1, 10, 1, 11, 1, 11, 1, 12, 1, 12, 3, 12, 173, 8, 12, 1, 12, 1, 12, 1, 12, 1, 12, 5, 12, 179, 8, 12,
        10, 12, 12, 12, 182, 9, 12, 1, 12, 1, 12, 1, 13, 1, 13, 3, 13, 188, 8, 13, 1, 13, 1, 13, 1, 14, 1,
        14, 1, 14, 5, 14, 195, 8, 14, 10, 14, 12, 14, 198, 9, 14, 1, 15, 1, 15, 3, 15, 202, 8, 15, 1, 15,
        1, 15, 1, 15, 3, 15, 207, 8, 15, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1,
        18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18, 228, 8, 18, 1, 19, 1, 19,
        1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1,
        20, 1, 20, 1, 20, 1, 20, 3, 20, 250, 8, 20, 1, 21, 1, 21, 3, 21, 254, 8, 21, 1, 22, 1, 22, 1, 22,
        1, 22, 1, 22, 1, 22, 3, 22, 262, 8, 22, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1,
        24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 3, 26, 283, 8, 26, 1, 26,
        1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 5, 27, 294, 8, 27, 10, 27, 12, 27, 297, 9,
        27, 1, 27, 1, 27, 3, 27, 301, 8, 27, 1, 28, 1, 28, 1, 28, 3, 28, 306, 8, 28, 1, 29, 1, 29, 1, 30,
        1, 30, 1, 30, 3, 30, 313, 8, 30, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 5, 31, 321, 8, 31, 10,
        31, 12, 31, 324, 9, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 3, 32, 331, 8, 32, 1, 32, 1, 32, 5, 32,
        335, 8, 32, 10, 32, 12, 32, 338, 9, 32, 1, 32, 1, 32, 5, 32, 342, 8, 32, 10, 32, 12, 32, 345, 9,
        32, 1, 32, 3, 32, 348, 8, 32, 1, 32, 3, 32, 351, 8, 32, 1, 33, 1, 33, 1, 34, 1, 34, 1, 34, 1, 34,
        1, 35, 1, 35, 3, 35, 361, 8, 35, 1, 35, 1, 35, 1, 35, 3, 35, 366, 8, 35, 1, 35, 1, 35, 3, 35, 370,
        8, 35, 1, 35, 1, 35, 1, 35, 3, 35, 375, 8, 35, 1, 35, 1, 35, 1, 35, 3, 35, 380, 8, 35, 1, 35, 1, 35,
        1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 393, 8, 35, 3, 35, 395, 8, 35,
        1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 401, 8, 35, 3, 35, 403, 8, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35,
        3, 35, 410, 8, 35, 3, 35, 412, 8, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 418, 8, 35, 3, 35, 420,
        8, 35, 1, 35, 3, 35, 423, 8, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1,
        35, 3, 35, 435, 8, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35,
        1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1,
        35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35,
        1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 5,
        35, 491, 8, 35, 10, 35, 12, 35, 494, 9, 35, 1, 36, 1, 36, 1, 36, 3, 36, 499, 8, 36, 1, 36, 1, 36,
        1, 36, 1, 36, 3, 36, 505, 8, 36, 5, 36, 507, 8, 36, 10, 36, 12, 36, 510, 9, 36, 1, 37, 1, 37, 1,
        37, 1, 37, 0, 1, 70, 38, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
        40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 0, 1, 1, 0, 58, 59, 581,
        0, 76, 1, 0, 0, 0, 2, 93, 1, 0, 0, 0, 4, 101, 1, 0, 0, 0, 6, 115, 1, 0, 0, 0, 8, 117, 1, 0, 0, 0, 10,
        122, 1, 0, 0, 0, 12, 137, 1, 0, 0, 0, 14, 148, 1, 0, 0, 0, 16, 150, 1, 0, 0, 0, 18, 152, 1, 0, 0, 0,
        20, 162, 1, 0, 0, 0, 22, 168, 1, 0, 0, 0, 24, 170, 1, 0, 0, 0, 26, 185, 1, 0, 0, 0, 28, 191, 1, 0,
        0, 0, 30, 199, 1, 0, 0, 0, 32, 208, 1, 0, 0, 0, 34, 211, 1, 0, 0, 0, 36, 227, 1, 0, 0, 0, 38, 229,
        1, 0, 0, 0, 40, 249, 1, 0, 0, 0, 42, 251, 1, 0, 0, 0, 44, 255, 1, 0, 0, 0, 46, 263, 1, 0, 0, 0, 48,
        266, 1, 0, 0, 0, 50, 272, 1, 0, 0, 0, 52, 279, 1, 0, 0, 0, 54, 300, 1, 0, 0, 0, 56, 305, 1, 0, 0, 0,
        58, 307, 1, 0, 0, 0, 60, 312, 1, 0, 0, 0, 62, 314, 1, 0, 0, 0, 64, 327, 1, 0, 0, 0, 66, 352, 1, 0,
        0, 0, 68, 354, 1, 0, 0, 0, 70, 434, 1, 0, 0, 0, 72, 498, 1, 0, 0, 0, 74, 511, 1, 0, 0, 0, 76, 77, 5,
        15, 0, 0, 77, 81, 5, 5, 0, 0, 78, 80, 3, 2, 1, 0, 79, 78, 1, 0, 0, 0, 80, 83, 1, 0, 0, 0, 81, 79, 1,
        0, 0, 0, 81, 82, 1, 0, 0, 0, 82, 88, 1, 0, 0, 0, 83, 81, 1, 0, 0, 0, 84, 87, 3, 24, 12, 0, 85, 87, 3,
        4, 2, 0, 86, 84, 1, 0, 0, 0, 86, 85, 1, 0, 0, 0, 87, 90, 1, 0, 0, 0, 88, 86, 1, 0, 0, 0, 88, 89, 1, 0,
        0, 0, 89, 91, 1, 0, 0, 0, 90, 88, 1, 0, 0, 0, 91, 92, 5, 6, 0, 0, 92, 1, 1, 0, 0, 0, 93, 94, 5, 21, 0,
        0, 94, 95, 5, 22, 0, 0, 95, 98, 5, 56, 0, 0, 96, 97, 5, 45, 0, 0, 97, 99, 5, 56, 0, 0, 98, 96, 1, 0,
        0, 0, 98, 99, 1, 0, 0, 0, 99, 3, 1, 0, 0, 0, 100, 102, 5, 13, 0, 0, 101, 100, 1, 0, 0, 0, 101, 102,
        1, 0, 0, 0, 102, 103, 1, 0, 0, 0, 103, 104, 5, 7, 0, 0, 104, 109, 3, 6, 3, 0, 105, 106, 5, 64, 0,
        0, 106, 108, 3, 6, 3, 0, 107, 105, 1, 0, 0, 0, 108, 111, 1, 0, 0, 0, 109, 107, 1, 0, 0, 0, 109, 110,
        1, 0, 0, 0, 110, 5, 1, 0, 0, 0, 111, 109, 1, 0, 0, 0, 112, 116, 3, 8, 4, 0, 113, 116, 3, 18, 9, 0,
        114, 116, 3, 10, 5, 0, 115, 112, 1, 0, 0, 0, 115, 113, 1, 0, 0, 0, 115, 114, 1, 0, 0, 0, 116, 7,
        1, 0, 0, 0, 117, 120, 5, 56, 0, 0, 118, 119, 5, 31, 0, 0, 119, 121, 3, 70, 35, 0, 120, 118, 1, 0,
        0, 0, 120, 121, 1, 0, 0, 0, 121, 9, 1, 0, 0, 0, 122, 123, 5, 56, 0, 0, 123, 125, 5, 3, 0, 0, 124,
        126, 3, 14, 7, 0, 125, 124, 1, 0, 0, 0, 125, 126, 1, 0, 0, 0, 126, 127, 1, 0, 0, 0, 127, 128, 5,
        4, 0, 0, 128, 130, 5, 3, 0, 0, 129, 131, 3, 16, 8, 0, 130, 129, 1, 0, 0, 0, 130, 131, 1, 0, 0, 0,
        131, 132, 1, 0, 0, 0, 132, 135, 5, 4, 0, 0, 133, 134, 5, 31, 0, 0, 134, 136, 3, 12, 6, 0, 135, 133,
        1, 0, 0, 0, 135, 136, 1, 0, 0, 0, 136, 11, 1, 0, 0, 0, 137, 138, 5, 5, 0, 0, 138, 143, 3, 20, 10,
        0, 139, 140, 5, 64, 0, 0, 140, 142, 3, 20, 10, 0, 141, 139, 1, 0, 0, 0, 142, 145, 1, 0, 0, 0, 143,
        141, 1, 0, 0, 0, 143, 144, 1, 0, 0, 0, 144, 146, 1, 0, 0, 0, 145, 143, 1, 0, 0, 0, 146, 147, 5, 6,
        0, 0, 147, 13, 1, 0, 0, 0, 148, 149, 3, 22, 11, 0, 149, 15, 1, 0, 0, 0, 150, 151, 3, 22, 11, 0, 151,
        17, 1, 0, 0, 0, 152, 153, 5, 56, 0, 0, 153, 155, 5, 3, 0, 0, 154, 156, 3, 22, 11, 0, 155, 154, 1,
        0, 0, 0, 155, 156, 1, 0, 0, 0, 156, 157, 1, 0, 0, 0, 157, 160, 5, 4, 0, 0, 158, 159, 5, 31, 0, 0,
        159, 161, 3, 20, 10, 0, 160, 158, 1, 0, 0, 0, 160, 161, 1, 0, 0, 0, 161, 19, 1, 0, 0, 0, 162, 164,
        5, 5, 0, 0, 163, 165, 3, 72, 36, 0, 164, 163, 1, 0, 0, 0, 164, 165, 1, 0, 0, 0, 165, 166, 1, 0, 0,
        0, 166, 167, 5, 6, 0, 0, 167, 21, 1, 0, 0, 0, 168, 169, 3, 70, 35, 0, 169, 23, 1, 0, 0, 0, 170, 172,
        5, 14, 0, 0, 171, 173, 5, 7, 0, 0, 172, 171, 1, 0, 0, 0, 172, 173, 1, 0, 0, 0, 173, 174, 1, 0, 0,
        0, 174, 175, 5, 56, 0, 0, 175, 176, 3, 26, 13, 0, 176, 180, 5, 5, 0, 0, 177, 179, 3, 36, 18, 0,
        178, 177, 1, 0, 0, 0, 179, 182, 1, 0, 0, 0, 180, 178, 1, 0, 0, 0, 180, 181, 1, 0, 0, 0, 181, 183,
        1, 0, 0, 0, 182, 180, 1, 0, 0, 0, 183, 184, 5, 6, 0, 0, 184, 25, 1, 0, 0, 0, 185, 187, 5, 1, 0, 0,
        186, 188, 3, 28, 14, 0, 187, 186, 1, 0, 0, 0, 187, 188, 1, 0, 0, 0, 188, 189, 1, 0, 0, 0, 189, 190,
        5, 2, 0, 0, 190, 27, 1, 0, 0, 0, 191, 196, 3, 30, 15, 0, 192, 193, 5, 64, 0, 0, 193, 195, 3, 30,
        15, 0, 194, 192, 1, 0, 0, 0, 195, 198, 1, 0, 0, 0, 196, 194, 1, 0, 0, 0, 196, 197, 1, 0, 0, 0, 197,
        29, 1, 0, 0, 0, 198, 196, 1, 0, 0, 0, 199, 201, 5, 7, 0, 0, 200, 202, 5, 46, 0, 0, 201, 200, 1, 0,
        0, 0, 201, 202, 1, 0, 0, 0, 202, 203, 1, 0, 0, 0, 203, 206, 5, 56, 0, 0, 204, 207, 3, 32, 16, 0,
        205, 207, 3, 34, 17, 0, 206, 204, 1, 0, 0, 0, 206, 205, 1, 0, 0, 0, 206, 207, 1, 0, 0, 0, 207, 31,
        1, 0, 0, 0, 208, 209, 5, 3, 0, 0, 209, 210, 5, 4, 0, 0, 210, 33, 1, 0, 0, 0, 211, 212, 5, 3, 0, 0,
        212, 213, 5, 4, 0, 0, 213, 214, 5, 3, 0, 0, 214, 215, 5, 4, 0, 0, 215, 35, 1, 0, 0, 0, 216, 228,
        3, 4, 2, 0, 217, 228, 3, 44, 22, 0, 218, 228, 3, 48, 24, 0, 219, 228, 3, 50, 25, 0, 220, 228, 3,
        52, 26, 0, 221, 228, 3, 62, 31, 0, 222, 228, 3, 42, 21, 0, 223, 228, 3, 66, 33, 0, 224, 228, 3,
        38, 19, 0, 225, 228, 3, 40, 20, 0, 226, 228, 3, 70, 35, 0, 227, 216, 1, 0, 0, 0, 227, 217, 1, 0,
        0, 0, 227, 218, 1, 0, 0, 0, 227, 219, 1, 0, 0, 0, 227, 220, 1, 0, 0, 0, 227, 221, 1, 0, 0, 0, 227,
        222, 1, 0, 0, 0, 227, 223, 1, 0, 0, 0, 227, 224, 1, 0, 0, 0, 227, 225, 1, 0, 0, 0, 227, 226, 1, 0,
        0, 0, 228, 37, 1, 0, 0, 0, 229, 230, 3, 70, 35, 0, 230, 231, 5, 31, 0, 0, 231, 232, 3, 70, 35, 0,
        232, 39, 1, 0, 0, 0, 233, 234, 3, 70, 35, 0, 234, 235, 5, 47, 0, 0, 235, 236, 3, 70, 35, 0, 236,
        250, 1, 0, 0, 0, 237, 238, 3, 70, 35, 0, 238, 239, 5, 48, 0, 0, 239, 240, 3, 70, 35, 0, 240, 250,
        1, 0, 0, 0, 241, 242, 3, 70, 35, 0, 242, 243, 5, 49, 0, 0, 243, 244, 3, 70, 35, 0, 244, 250, 1,
        0, 0, 0, 245, 246, 3, 70, 35, 0, 246, 247, 5, 50, 0, 0, 247, 248, 3, 70, 35, 0, 248, 250, 1, 0,
        0, 0, 249, 233, 1, 0, 0, 0, 249, 237, 1, 0, 0, 0, 249, 241, 1, 0, 0, 0, 249, 245, 1, 0, 0, 0, 250,
        41, 1, 0, 0, 0, 251, 253, 5, 20, 0, 0, 252, 254, 3, 70, 35, 0, 253, 252, 1, 0, 0, 0, 253, 254, 1,
        0, 0, 0, 254, 43, 1, 0, 0, 0, 255, 256, 5, 11, 0, 0, 256, 257, 5, 1, 0, 0, 257, 258, 3, 70, 35, 0,
        258, 259, 5, 2, 0, 0, 259, 261, 3, 54, 27, 0, 260, 262, 3, 46, 23, 0, 261, 260, 1, 0, 0, 0, 261,
        262, 1, 0, 0, 0, 262, 45, 1, 0, 0, 0, 263, 264, 5, 12, 0, 0, 264, 265, 3, 54, 27, 0, 265, 47, 1,
        0, 0, 0, 266, 267, 5, 9, 0, 0, 267, 268, 5, 1, 0, 0, 268, 269, 3, 70, 35, 0, 269, 270, 5, 2, 0, 0,
        270, 271, 3, 54, 27, 0, 271, 49, 1, 0, 0, 0, 272, 273, 5, 8, 0, 0, 273, 274, 3, 54, 27, 0, 274,
        275, 5, 9, 0, 0, 275, 276, 5, 1, 0, 0, 276, 277, 3, 70, 35, 0, 277, 278, 5, 2, 0, 0, 278, 51, 1,
        0, 0, 0, 279, 280, 5, 10, 0, 0, 280, 282, 5, 1, 0, 0, 281, 283, 3, 56, 28, 0, 282, 281, 1, 0, 0,
        0, 282, 283, 1, 0, 0, 0, 283, 284, 1, 0, 0, 0, 284, 285, 5, 65, 0, 0, 285, 286, 3, 58, 29, 0, 286,
        287, 5, 65, 0, 0, 287, 288, 3, 60, 30, 0, 288, 289, 5, 2, 0, 0, 289, 290, 3, 54, 27, 0, 290, 53,
        1, 0, 0, 0, 291, 295, 5, 5, 0, 0, 292, 294, 3, 36, 18, 0, 293, 292, 1, 0, 0, 0, 294, 297, 1, 0, 0,
        0, 295, 293, 1, 0, 0, 0, 295, 296, 1, 0, 0, 0, 296, 298, 1, 0, 0, 0, 297, 295, 1, 0, 0, 0, 298, 301,
        5, 6, 0, 0, 299, 301, 3, 36, 18, 0, 300, 291, 1, 0, 0, 0, 300, 299, 1, 0, 0, 0, 301, 55, 1, 0, 0,
        0, 302, 306, 3, 38, 19, 0, 303, 306, 3, 4, 2, 0, 304, 306, 5, 56, 0, 0, 305, 302, 1, 0, 0, 0, 305,
        303, 1, 0, 0, 0, 305, 304, 1, 0, 0, 0, 306, 57, 1, 0, 0, 0, 307, 308, 3, 70, 35, 0, 308, 59, 1, 0,
        0, 0, 309, 313, 3, 70, 35, 0, 310, 313, 3, 40, 20, 0, 311, 313, 3, 38, 19, 0, 312, 309, 1, 0, 0,
        0, 312, 310, 1, 0, 0, 0, 312, 311, 1, 0, 0, 0, 313, 61, 1, 0, 0, 0, 314, 315, 5, 16, 0, 0, 315, 316,
        5, 1, 0, 0, 316, 317, 3, 70, 35, 0, 317, 318, 5, 2, 0, 0, 318, 322, 5, 5, 0, 0, 319, 321, 3, 64,
        32, 0, 320, 319, 1, 0, 0, 0, 321, 324, 1, 0, 0, 0, 322, 320, 1, 0, 0, 0, 322, 323, 1, 0, 0, 0, 323,
        325, 1, 0, 0, 0, 324, 322, 1, 0, 0, 0, 325, 326, 5, 6, 0, 0, 326, 63, 1, 0, 0, 0, 327, 330, 5, 17,
        0, 0, 328, 331, 5, 18, 0, 0, 329, 331, 3, 70, 35, 0, 330, 328, 1, 0, 0, 0, 330, 329, 1, 0, 0, 0,
        331, 332, 1, 0, 0, 0, 332, 347, 5, 66, 0, 0, 333, 335, 3, 36, 18, 0, 334, 333, 1, 0, 0, 0, 335,
        338, 1, 0, 0, 0, 336, 334, 1, 0, 0, 0, 336, 337, 1, 0, 0, 0, 337, 348, 1, 0, 0, 0, 338, 336, 1, 0,
        0, 0, 339, 343, 5, 5, 0, 0, 340, 342, 3, 36, 18, 0, 341, 340, 1, 0, 0, 0, 342, 345, 1, 0, 0, 0, 343,
        341, 1, 0, 0, 0, 343, 344, 1, 0, 0, 0, 344, 346, 1, 0, 0, 0, 345, 343, 1, 0, 0, 0, 346, 348, 5, 6,
        0, 0, 347, 336, 1, 0, 0, 0, 347, 339, 1, 0, 0, 0, 348, 350, 1, 0, 0, 0, 349, 351, 3, 66, 33, 0, 350,
        349, 1, 0, 0, 0, 350, 351, 1, 0, 0, 0, 351, 65, 1, 0, 0, 0, 352, 353, 5, 19, 0, 0, 353, 67, 1, 0,
        0, 0, 354, 355, 5, 3, 0, 0, 355, 356, 3, 70, 35, 0, 356, 357, 5, 4, 0, 0, 357, 69, 1, 0, 0, 0, 358,
        360, 6, 35, -1, 0, 359, 361, 3, 74, 37, 0, 360, 359, 1, 0, 0, 0, 360, 361, 1, 0, 0, 0, 361, 362,
        1, 0, 0, 0, 362, 363, 5, 56, 0, 0, 363, 365, 5, 1, 0, 0, 364, 366, 3, 72, 36, 0, 365, 364, 1, 0,
        0, 0, 365, 366, 1, 0, 0, 0, 366, 367, 1, 0, 0, 0, 367, 435, 5, 2, 0, 0, 368, 370, 3, 74, 37, 0, 369,
        368, 1, 0, 0, 0, 369, 370, 1, 0, 0, 0, 370, 371, 1, 0, 0, 0, 371, 372, 5, 56, 0, 0, 372, 435, 3,
        68, 34, 0, 373, 375, 3, 74, 37, 0, 374, 373, 1, 0, 0, 0, 374, 375, 1, 0, 0, 0, 375, 376, 1, 0, 0,
        0, 376, 377, 5, 56, 0, 0, 377, 379, 3, 68, 34, 0, 378, 380, 3, 68, 34, 0, 379, 378, 1, 0, 0, 0,
        379, 380, 1, 0, 0, 0, 380, 435, 1, 0, 0, 0, 381, 382, 5, 26, 0, 0, 382, 435, 3, 70, 35, 33, 383,
        384, 5, 27, 0, 0, 384, 435, 3, 70, 35, 32, 385, 386, 5, 23, 0, 0, 386, 435, 3, 70, 35, 31, 387,
        388, 5, 44, 0, 0, 388, 435, 3, 70, 35, 30, 389, 394, 5, 56, 0, 0, 390, 392, 3, 68, 34, 0, 391,
        393, 3, 68, 34, 0, 392, 391, 1, 0, 0, 0, 392, 393, 1, 0, 0, 0, 393, 395, 1, 0, 0, 0, 394, 390, 1,
        0, 0, 0, 394, 395, 1, 0, 0, 0, 395, 396, 1, 0, 0, 0, 396, 435, 5, 38, 0, 0, 397, 402, 5, 56, 0, 0,
        398, 400, 3, 68, 34, 0, 399, 401, 3, 68, 34, 0, 400, 399, 1, 0, 0, 0, 400, 401, 1, 0, 0, 0, 401,
        403, 1, 0, 0, 0, 402, 398, 1, 0, 0, 0, 402, 403, 1, 0, 0, 0, 403, 404, 1, 0, 0, 0, 404, 435, 5, 39,
        0, 0, 405, 406, 5, 38, 0, 0, 406, 411, 5, 56, 0, 0, 407, 409, 3, 68, 34, 0, 408, 410, 3, 68, 34,
        0, 409, 408, 1, 0, 0, 0, 409, 410, 1, 0, 0, 0, 410, 412, 1, 0, 0, 0, 411, 407, 1, 0, 0, 0, 411, 412,
        1, 0, 0, 0, 412, 435, 1, 0, 0, 0, 413, 414, 5, 39, 0, 0, 414, 419, 5, 56, 0, 0, 415, 417, 3, 68,
        34, 0, 416, 418, 3, 68, 34, 0, 417, 416, 1, 0, 0, 0, 417, 418, 1, 0, 0, 0, 418, 420, 1, 0, 0, 0,
        419, 415, 1, 0, 0, 0, 419, 420, 1, 0, 0, 0, 420, 435, 1, 0, 0, 0, 421, 423, 3, 74, 37, 0, 422, 421,
        1, 0, 0, 0, 422, 423, 1, 0, 0, 0, 423, 424, 1, 0, 0, 0, 424, 435, 5, 56, 0, 0, 425, 435, 7, 0, 0,
        0, 426, 435, 5, 57, 0, 0, 427, 435, 5, 51, 0, 0, 428, 435, 5, 54, 0, 0, 429, 435, 5, 55, 0, 0, 430,
        431, 5, 1, 0, 0, 431, 432, 3, 70, 35, 0, 432, 433, 5, 2, 0, 0, 433, 435, 1, 0, 0, 0, 434, 358, 1,
        0, 0, 0, 434, 369, 1, 0, 0, 0, 434, 374, 1, 0, 0, 0, 434, 381, 1, 0, 0, 0, 434, 383, 1, 0, 0, 0, 434,
        385, 1, 0, 0, 0, 434, 387, 1, 0, 0, 0, 434, 389, 1, 0, 0, 0, 434, 397, 1, 0, 0, 0, 434, 405, 1, 0,
        0, 0, 434, 413, 1, 0, 0, 0, 434, 422, 1, 0, 0, 0, 434, 425, 1, 0, 0, 0, 434, 426, 1, 0, 0, 0, 434,
        427, 1, 0, 0, 0, 434, 428, 1, 0, 0, 0, 434, 429, 1, 0, 0, 0, 434, 430, 1, 0, 0, 0, 435, 492, 1, 0,
        0, 0, 436, 437, 10, 25, 0, 0, 437, 438, 5, 28, 0, 0, 438, 491, 3, 70, 35, 26, 439, 440, 10, 24,
        0, 0, 440, 441, 5, 29, 0, 0, 441, 491, 3, 70, 35, 25, 442, 443, 10, 23, 0, 0, 443, 444, 5, 30,
        0, 0, 444, 491, 3, 70, 35, 24, 445, 446, 10, 22, 0, 0, 446, 447, 5, 27, 0, 0, 447, 491, 3, 70,
        35, 23, 448, 449, 10, 21, 0, 0, 449, 450, 5, 26, 0, 0, 450, 491, 3, 70, 35, 22, 451, 452, 10,
        20, 0, 0, 452, 453, 5, 32, 0, 0, 453, 491, 3, 70, 35, 21, 454, 455, 10, 19, 0, 0, 455, 456, 5,
        33, 0, 0, 456, 491, 3, 70, 35, 20, 457, 458, 10, 18, 0, 0, 458, 459, 5, 34, 0, 0, 459, 491, 3,
        70, 35, 19, 460, 461, 10, 17, 0, 0, 461, 462, 5, 35, 0, 0, 462, 491, 3, 70, 35, 18, 463, 464,
        10, 16, 0, 0, 464, 465, 5, 36, 0, 0, 465, 491, 3, 70, 35, 17, 466, 467, 10, 15, 0, 0, 467, 468,
        5, 37, 0, 0, 468, 491, 3, 70, 35, 16, 469, 470, 10, 14, 0, 0, 470, 471, 5, 24, 0, 0, 471, 491,
        3, 70, 35, 15, 472, 473, 10, 13, 0, 0, 473, 474, 5, 25, 0, 0, 474, 491, 3, 70, 35, 14, 475, 476,
        10, 12, 0, 0, 476, 477, 5, 42, 0, 0, 477, 491, 3, 70, 35, 13, 478, 479, 10, 11, 0, 0, 479, 480,
        5, 40, 0, 0, 480, 491, 3, 70, 35, 12, 481, 482, 10, 10, 0, 0, 482, 483, 5, 41, 0, 0, 483, 491,
        3, 70, 35, 11, 484, 485, 10, 9, 0, 0, 485, 486, 5, 46, 0, 0, 486, 491, 3, 70, 35, 10, 487, 488,
        10, 8, 0, 0, 488, 489, 5, 43, 0, 0, 489, 491, 3, 70, 35, 9, 490, 436, 1, 0, 0, 0, 490, 439, 1, 0,
        0, 0, 490, 442, 1, 0, 0, 0, 490, 445, 1, 0, 0, 0, 490, 448, 1, 0, 0, 0, 490, 451, 1, 0, 0, 0, 490,
        454, 1, 0, 0, 0, 490, 457, 1, 0, 0, 0, 490, 460, 1, 0, 0, 0, 490, 463, 1, 0, 0, 0, 490, 466, 1, 0,
        0, 0, 490, 469, 1, 0, 0, 0, 490, 472, 1, 0, 0, 0, 490, 475, 1, 0, 0, 0, 490, 478, 1, 0, 0, 0, 490,
        481, 1, 0, 0, 0, 490, 484, 1, 0, 0, 0, 490, 487, 1, 0, 0, 0, 491, 494, 1, 0, 0, 0, 492, 490, 1, 0,
        0, 0, 492, 493, 1, 0, 0, 0, 493, 71, 1, 0, 0, 0, 494, 492, 1, 0, 0, 0, 495, 499, 3, 70, 35, 0, 496,
        499, 3, 40, 20, 0, 497, 499, 3, 38, 19, 0, 498, 495, 1, 0, 0, 0, 498, 496, 1, 0, 0, 0, 498, 497,
        1, 0, 0, 0, 499, 508, 1, 0, 0, 0, 500, 504, 5, 64, 0, 0, 501, 505, 3, 70, 35, 0, 502, 505, 3, 40,
        20, 0, 503, 505, 3, 38, 19, 0, 504, 501, 1, 0, 0, 0, 504, 502, 1, 0, 0, 0, 504, 503, 1, 0, 0, 0,
        505, 507, 1, 0, 0, 0, 506, 500, 1, 0, 0, 0, 507, 510, 1, 0, 0, 0, 508, 506, 1, 0, 0, 0, 508, 509,
        1, 0, 0, 0, 509, 73, 1, 0, 0, 0, 510, 508, 1, 0, 0, 0, 511, 512, 5, 56, 0, 0, 512, 513, 5, 63, 0,
        0, 513, 75, 1, 0, 0, 0, 56, 81, 86, 88, 98, 101, 109, 115, 120, 125, 130, 135, 143, 155, 160,
        164, 172, 180, 187, 196, 201, 206, 227, 249, 253, 261, 282, 295, 300, 305, 312, 322, 330,
        336, 343, 347, 350, 360, 365, 369, 374, 379, 392, 394, 400, 402, 409, 411, 417, 419, 422,
        434, 490, 492, 498, 504, 508];
    PortugolParser.DecisionsToDFA = PortugolParser._ATN.decisionToState.map(function (ds, index) { return new antlr4_1.DFA(ds, index); });
    return PortugolParser;
}(antlr4_1.Parser));
exports.default = PortugolParser;
var ArquivoContext = /** @class */ (function (_super) {
    __extends(ArquivoContext, _super);
    function ArquivoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ArquivoContext.prototype.PROGRAMA = function () {
        return this.getToken(PortugolParser.PROGRAMA, 0);
    };
    ArquivoContext.prototype.ABRE_CHAVES = function () {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0);
    };
    ArquivoContext.prototype.FECHA_CHAVES = function () {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0);
    };
    ArquivoContext.prototype.inclusaoBiblioteca_list = function () {
        return this.getTypedRuleContexts(InclusaoBibliotecaContext);
    };
    ArquivoContext.prototype.inclusaoBiblioteca = function (i) {
        return this.getTypedRuleContext(InclusaoBibliotecaContext, i);
    };
    ArquivoContext.prototype.declaracaoFuncao_list = function () {
        return this.getTypedRuleContexts(DeclaracaoFuncaoContext);
    };
    ArquivoContext.prototype.declaracaoFuncao = function (i) {
        return this.getTypedRuleContext(DeclaracaoFuncaoContext, i);
    };
    ArquivoContext.prototype.listaDeclaracoes_list = function () {
        return this.getTypedRuleContexts(ListaDeclaracoesContext);
    };
    ArquivoContext.prototype.listaDeclaracoes = function (i) {
        return this.getTypedRuleContext(ListaDeclaracoesContext, i);
    };
    Object.defineProperty(ArquivoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_arquivo;
        },
        enumerable: false,
        configurable: true
    });
    ArquivoContext.prototype.enterRule = function (listener) {
        if (listener.enterArquivo) {
            listener.enterArquivo(this);
        }
    };
    ArquivoContext.prototype.exitRule = function (listener) {
        if (listener.exitArquivo) {
            listener.exitArquivo(this);
        }
    };
    // @Override
    ArquivoContext.prototype.accept = function (visitor) {
        if (visitor.visitArquivo) {
            return visitor.visitArquivo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArquivoContext;
}(antlr4_1.ParserRuleContext));
exports.ArquivoContext = ArquivoContext;
var InclusaoBibliotecaContext = /** @class */ (function (_super) {
    __extends(InclusaoBibliotecaContext, _super);
    function InclusaoBibliotecaContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    InclusaoBibliotecaContext.prototype.INCLUA = function () {
        return this.getToken(PortugolParser.INCLUA, 0);
    };
    InclusaoBibliotecaContext.prototype.BIBLIOTECA = function () {
        return this.getToken(PortugolParser.BIBLIOTECA, 0);
    };
    InclusaoBibliotecaContext.prototype.ID_list = function () {
        return this.getTokens(PortugolParser.ID);
    };
    InclusaoBibliotecaContext.prototype.ID = function (i) {
        return this.getToken(PortugolParser.ID, i);
    };
    InclusaoBibliotecaContext.prototype.OP_ALIAS_BIBLIOTECA = function () {
        return this.getToken(PortugolParser.OP_ALIAS_BIBLIOTECA, 0);
    };
    Object.defineProperty(InclusaoBibliotecaContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_inclusaoBiblioteca;
        },
        enumerable: false,
        configurable: true
    });
    InclusaoBibliotecaContext.prototype.enterRule = function (listener) {
        if (listener.enterInclusaoBiblioteca) {
            listener.enterInclusaoBiblioteca(this);
        }
    };
    InclusaoBibliotecaContext.prototype.exitRule = function (listener) {
        if (listener.exitInclusaoBiblioteca) {
            listener.exitInclusaoBiblioteca(this);
        }
    };
    // @Override
    InclusaoBibliotecaContext.prototype.accept = function (visitor) {
        if (visitor.visitInclusaoBiblioteca) {
            return visitor.visitInclusaoBiblioteca(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InclusaoBibliotecaContext;
}(antlr4_1.ParserRuleContext));
exports.InclusaoBibliotecaContext = InclusaoBibliotecaContext;
var ListaDeclaracoesContext = /** @class */ (function (_super) {
    __extends(ListaDeclaracoesContext, _super);
    function ListaDeclaracoesContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ListaDeclaracoesContext.prototype.TIPO = function () {
        return this.getToken(PortugolParser.TIPO, 0);
    };
    ListaDeclaracoesContext.prototype.declaracao_list = function () {
        return this.getTypedRuleContexts(DeclaracaoContext);
    };
    ListaDeclaracoesContext.prototype.declaracao = function (i) {
        return this.getTypedRuleContext(DeclaracaoContext, i);
    };
    ListaDeclaracoesContext.prototype.CONSTANTE = function () {
        return this.getToken(PortugolParser.CONSTANTE, 0);
    };
    ListaDeclaracoesContext.prototype.VIRGULA_list = function () {
        return this.getTokens(PortugolParser.VIRGULA);
    };
    ListaDeclaracoesContext.prototype.VIRGULA = function (i) {
        return this.getToken(PortugolParser.VIRGULA, i);
    };
    Object.defineProperty(ListaDeclaracoesContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_listaDeclaracoes;
        },
        enumerable: false,
        configurable: true
    });
    ListaDeclaracoesContext.prototype.enterRule = function (listener) {
        if (listener.enterListaDeclaracoes) {
            listener.enterListaDeclaracoes(this);
        }
    };
    ListaDeclaracoesContext.prototype.exitRule = function (listener) {
        if (listener.exitListaDeclaracoes) {
            listener.exitListaDeclaracoes(this);
        }
    };
    // @Override
    ListaDeclaracoesContext.prototype.accept = function (visitor) {
        if (visitor.visitListaDeclaracoes) {
            return visitor.visitListaDeclaracoes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListaDeclaracoesContext;
}(antlr4_1.ParserRuleContext));
exports.ListaDeclaracoesContext = ListaDeclaracoesContext;
var DeclaracaoContext = /** @class */ (function (_super) {
    __extends(DeclaracaoContext, _super);
    function DeclaracaoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    DeclaracaoContext.prototype.declaracaoVariavel = function () {
        return this.getTypedRuleContext(DeclaracaoVariavelContext, 0);
    };
    DeclaracaoContext.prototype.declaracaoArray = function () {
        return this.getTypedRuleContext(DeclaracaoArrayContext, 0);
    };
    DeclaracaoContext.prototype.declaracaoMatriz = function () {
        return this.getTypedRuleContext(DeclaracaoMatrizContext, 0);
    };
    Object.defineProperty(DeclaracaoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_declaracao;
        },
        enumerable: false,
        configurable: true
    });
    DeclaracaoContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaracao) {
            listener.enterDeclaracao(this);
        }
    };
    DeclaracaoContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaracao) {
            listener.exitDeclaracao(this);
        }
    };
    // @Override
    DeclaracaoContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaracao) {
            return visitor.visitDeclaracao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclaracaoContext;
}(antlr4_1.ParserRuleContext));
exports.DeclaracaoContext = DeclaracaoContext;
var DeclaracaoVariavelContext = /** @class */ (function (_super) {
    __extends(DeclaracaoVariavelContext, _super);
    function DeclaracaoVariavelContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    DeclaracaoVariavelContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    DeclaracaoVariavelContext.prototype.OP_ATRIBUICAO = function () {
        return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
    };
    DeclaracaoVariavelContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    Object.defineProperty(DeclaracaoVariavelContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_declaracaoVariavel;
        },
        enumerable: false,
        configurable: true
    });
    DeclaracaoVariavelContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaracaoVariavel) {
            listener.enterDeclaracaoVariavel(this);
        }
    };
    DeclaracaoVariavelContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaracaoVariavel) {
            listener.exitDeclaracaoVariavel(this);
        }
    };
    // @Override
    DeclaracaoVariavelContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaracaoVariavel) {
            return visitor.visitDeclaracaoVariavel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclaracaoVariavelContext;
}(antlr4_1.ParserRuleContext));
exports.DeclaracaoVariavelContext = DeclaracaoVariavelContext;
var DeclaracaoMatrizContext = /** @class */ (function (_super) {
    __extends(DeclaracaoMatrizContext, _super);
    function DeclaracaoMatrizContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    DeclaracaoMatrizContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    DeclaracaoMatrizContext.prototype.ABRE_COLCHETES_list = function () {
        return this.getTokens(PortugolParser.ABRE_COLCHETES);
    };
    DeclaracaoMatrizContext.prototype.ABRE_COLCHETES = function (i) {
        return this.getToken(PortugolParser.ABRE_COLCHETES, i);
    };
    DeclaracaoMatrizContext.prototype.FECHA_COLCHETES_list = function () {
        return this.getTokens(PortugolParser.FECHA_COLCHETES);
    };
    DeclaracaoMatrizContext.prototype.FECHA_COLCHETES = function (i) {
        return this.getToken(PortugolParser.FECHA_COLCHETES, i);
    };
    DeclaracaoMatrizContext.prototype.linhaMatriz = function () {
        return this.getTypedRuleContext(LinhaMatrizContext, 0);
    };
    DeclaracaoMatrizContext.prototype.colunaMatriz = function () {
        return this.getTypedRuleContext(ColunaMatrizContext, 0);
    };
    DeclaracaoMatrizContext.prototype.OP_ATRIBUICAO = function () {
        return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
    };
    DeclaracaoMatrizContext.prototype.inicializacaoMatriz = function () {
        return this.getTypedRuleContext(InicializacaoMatrizContext, 0);
    };
    Object.defineProperty(DeclaracaoMatrizContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_declaracaoMatriz;
        },
        enumerable: false,
        configurable: true
    });
    DeclaracaoMatrizContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaracaoMatriz) {
            listener.enterDeclaracaoMatriz(this);
        }
    };
    DeclaracaoMatrizContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaracaoMatriz) {
            listener.exitDeclaracaoMatriz(this);
        }
    };
    // @Override
    DeclaracaoMatrizContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaracaoMatriz) {
            return visitor.visitDeclaracaoMatriz(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclaracaoMatrizContext;
}(antlr4_1.ParserRuleContext));
exports.DeclaracaoMatrizContext = DeclaracaoMatrizContext;
var InicializacaoMatrizContext = /** @class */ (function (_super) {
    __extends(InicializacaoMatrizContext, _super);
    function InicializacaoMatrizContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    InicializacaoMatrizContext.prototype.ABRE_CHAVES = function () {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0);
    };
    InicializacaoMatrizContext.prototype.inicializacaoArray_list = function () {
        return this.getTypedRuleContexts(InicializacaoArrayContext);
    };
    InicializacaoMatrizContext.prototype.inicializacaoArray = function (i) {
        return this.getTypedRuleContext(InicializacaoArrayContext, i);
    };
    InicializacaoMatrizContext.prototype.FECHA_CHAVES = function () {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0);
    };
    InicializacaoMatrizContext.prototype.VIRGULA_list = function () {
        return this.getTokens(PortugolParser.VIRGULA);
    };
    InicializacaoMatrizContext.prototype.VIRGULA = function (i) {
        return this.getToken(PortugolParser.VIRGULA, i);
    };
    Object.defineProperty(InicializacaoMatrizContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_inicializacaoMatriz;
        },
        enumerable: false,
        configurable: true
    });
    InicializacaoMatrizContext.prototype.enterRule = function (listener) {
        if (listener.enterInicializacaoMatriz) {
            listener.enterInicializacaoMatriz(this);
        }
    };
    InicializacaoMatrizContext.prototype.exitRule = function (listener) {
        if (listener.exitInicializacaoMatriz) {
            listener.exitInicializacaoMatriz(this);
        }
    };
    // @Override
    InicializacaoMatrizContext.prototype.accept = function (visitor) {
        if (visitor.visitInicializacaoMatriz) {
            return visitor.visitInicializacaoMatriz(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InicializacaoMatrizContext;
}(antlr4_1.ParserRuleContext));
exports.InicializacaoMatrizContext = InicializacaoMatrizContext;
var LinhaMatrizContext = /** @class */ (function (_super) {
    __extends(LinhaMatrizContext, _super);
    function LinhaMatrizContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    LinhaMatrizContext.prototype.tamanhoArray = function () {
        return this.getTypedRuleContext(TamanhoArrayContext, 0);
    };
    Object.defineProperty(LinhaMatrizContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_linhaMatriz;
        },
        enumerable: false,
        configurable: true
    });
    LinhaMatrizContext.prototype.enterRule = function (listener) {
        if (listener.enterLinhaMatriz) {
            listener.enterLinhaMatriz(this);
        }
    };
    LinhaMatrizContext.prototype.exitRule = function (listener) {
        if (listener.exitLinhaMatriz) {
            listener.exitLinhaMatriz(this);
        }
    };
    // @Override
    LinhaMatrizContext.prototype.accept = function (visitor) {
        if (visitor.visitLinhaMatriz) {
            return visitor.visitLinhaMatriz(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LinhaMatrizContext;
}(antlr4_1.ParserRuleContext));
exports.LinhaMatrizContext = LinhaMatrizContext;
var ColunaMatrizContext = /** @class */ (function (_super) {
    __extends(ColunaMatrizContext, _super);
    function ColunaMatrizContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ColunaMatrizContext.prototype.tamanhoArray = function () {
        return this.getTypedRuleContext(TamanhoArrayContext, 0);
    };
    Object.defineProperty(ColunaMatrizContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_colunaMatriz;
        },
        enumerable: false,
        configurable: true
    });
    ColunaMatrizContext.prototype.enterRule = function (listener) {
        if (listener.enterColunaMatriz) {
            listener.enterColunaMatriz(this);
        }
    };
    ColunaMatrizContext.prototype.exitRule = function (listener) {
        if (listener.exitColunaMatriz) {
            listener.exitColunaMatriz(this);
        }
    };
    // @Override
    ColunaMatrizContext.prototype.accept = function (visitor) {
        if (visitor.visitColunaMatriz) {
            return visitor.visitColunaMatriz(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColunaMatrizContext;
}(antlr4_1.ParserRuleContext));
exports.ColunaMatrizContext = ColunaMatrizContext;
var DeclaracaoArrayContext = /** @class */ (function (_super) {
    __extends(DeclaracaoArrayContext, _super);
    function DeclaracaoArrayContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    DeclaracaoArrayContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    DeclaracaoArrayContext.prototype.ABRE_COLCHETES = function () {
        return this.getToken(PortugolParser.ABRE_COLCHETES, 0);
    };
    DeclaracaoArrayContext.prototype.FECHA_COLCHETES = function () {
        return this.getToken(PortugolParser.FECHA_COLCHETES, 0);
    };
    DeclaracaoArrayContext.prototype.tamanhoArray = function () {
        return this.getTypedRuleContext(TamanhoArrayContext, 0);
    };
    DeclaracaoArrayContext.prototype.OP_ATRIBUICAO = function () {
        return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
    };
    DeclaracaoArrayContext.prototype.inicializacaoArray = function () {
        return this.getTypedRuleContext(InicializacaoArrayContext, 0);
    };
    Object.defineProperty(DeclaracaoArrayContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_declaracaoArray;
        },
        enumerable: false,
        configurable: true
    });
    DeclaracaoArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaracaoArray) {
            listener.enterDeclaracaoArray(this);
        }
    };
    DeclaracaoArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaracaoArray) {
            listener.exitDeclaracaoArray(this);
        }
    };
    // @Override
    DeclaracaoArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaracaoArray) {
            return visitor.visitDeclaracaoArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclaracaoArrayContext;
}(antlr4_1.ParserRuleContext));
exports.DeclaracaoArrayContext = DeclaracaoArrayContext;
var InicializacaoArrayContext = /** @class */ (function (_super) {
    __extends(InicializacaoArrayContext, _super);
    function InicializacaoArrayContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    InicializacaoArrayContext.prototype.ABRE_CHAVES = function () {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0);
    };
    InicializacaoArrayContext.prototype.FECHA_CHAVES = function () {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0);
    };
    InicializacaoArrayContext.prototype.listaExpressoes = function () {
        return this.getTypedRuleContext(ListaExpressoesContext, 0);
    };
    Object.defineProperty(InicializacaoArrayContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_inicializacaoArray;
        },
        enumerable: false,
        configurable: true
    });
    InicializacaoArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterInicializacaoArray) {
            listener.enterInicializacaoArray(this);
        }
    };
    InicializacaoArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitInicializacaoArray) {
            listener.exitInicializacaoArray(this);
        }
    };
    // @Override
    InicializacaoArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitInicializacaoArray) {
            return visitor.visitInicializacaoArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InicializacaoArrayContext;
}(antlr4_1.ParserRuleContext));
exports.InicializacaoArrayContext = InicializacaoArrayContext;
var TamanhoArrayContext = /** @class */ (function (_super) {
    __extends(TamanhoArrayContext, _super);
    function TamanhoArrayContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    TamanhoArrayContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    Object.defineProperty(TamanhoArrayContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_tamanhoArray;
        },
        enumerable: false,
        configurable: true
    });
    TamanhoArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterTamanhoArray) {
            listener.enterTamanhoArray(this);
        }
    };
    TamanhoArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitTamanhoArray) {
            listener.exitTamanhoArray(this);
        }
    };
    // @Override
    TamanhoArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitTamanhoArray) {
            return visitor.visitTamanhoArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TamanhoArrayContext;
}(antlr4_1.ParserRuleContext));
exports.TamanhoArrayContext = TamanhoArrayContext;
var DeclaracaoFuncaoContext = /** @class */ (function (_super) {
    __extends(DeclaracaoFuncaoContext, _super);
    function DeclaracaoFuncaoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    DeclaracaoFuncaoContext.prototype.FUNCAO = function () {
        return this.getToken(PortugolParser.FUNCAO, 0);
    };
    DeclaracaoFuncaoContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    DeclaracaoFuncaoContext.prototype.parametroFuncao = function () {
        return this.getTypedRuleContext(ParametroFuncaoContext, 0);
    };
    DeclaracaoFuncaoContext.prototype.ABRE_CHAVES = function () {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0);
    };
    DeclaracaoFuncaoContext.prototype.FECHA_CHAVES = function () {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0);
    };
    DeclaracaoFuncaoContext.prototype.TIPO = function () {
        return this.getToken(PortugolParser.TIPO, 0);
    };
    DeclaracaoFuncaoContext.prototype.comando_list = function () {
        return this.getTypedRuleContexts(ComandoContext);
    };
    DeclaracaoFuncaoContext.prototype.comando = function (i) {
        return this.getTypedRuleContext(ComandoContext, i);
    };
    Object.defineProperty(DeclaracaoFuncaoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_declaracaoFuncao;
        },
        enumerable: false,
        configurable: true
    });
    DeclaracaoFuncaoContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaracaoFuncao) {
            listener.enterDeclaracaoFuncao(this);
        }
    };
    DeclaracaoFuncaoContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaracaoFuncao) {
            listener.exitDeclaracaoFuncao(this);
        }
    };
    // @Override
    DeclaracaoFuncaoContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaracaoFuncao) {
            return visitor.visitDeclaracaoFuncao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclaracaoFuncaoContext;
}(antlr4_1.ParserRuleContext));
exports.DeclaracaoFuncaoContext = DeclaracaoFuncaoContext;
var ParametroFuncaoContext = /** @class */ (function (_super) {
    __extends(ParametroFuncaoContext, _super);
    function ParametroFuncaoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ParametroFuncaoContext.prototype.ABRE_PARENTESES = function () {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
    };
    ParametroFuncaoContext.prototype.FECHA_PARENTESES = function () {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
    };
    ParametroFuncaoContext.prototype.listaParametros = function () {
        return this.getTypedRuleContext(ListaParametrosContext, 0);
    };
    Object.defineProperty(ParametroFuncaoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_parametroFuncao;
        },
        enumerable: false,
        configurable: true
    });
    ParametroFuncaoContext.prototype.enterRule = function (listener) {
        if (listener.enterParametroFuncao) {
            listener.enterParametroFuncao(this);
        }
    };
    ParametroFuncaoContext.prototype.exitRule = function (listener) {
        if (listener.exitParametroFuncao) {
            listener.exitParametroFuncao(this);
        }
    };
    // @Override
    ParametroFuncaoContext.prototype.accept = function (visitor) {
        if (visitor.visitParametroFuncao) {
            return visitor.visitParametroFuncao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParametroFuncaoContext;
}(antlr4_1.ParserRuleContext));
exports.ParametroFuncaoContext = ParametroFuncaoContext;
var ListaParametrosContext = /** @class */ (function (_super) {
    __extends(ListaParametrosContext, _super);
    function ListaParametrosContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ListaParametrosContext.prototype.parametro_list = function () {
        return this.getTypedRuleContexts(ParametroContext);
    };
    ListaParametrosContext.prototype.parametro = function (i) {
        return this.getTypedRuleContext(ParametroContext, i);
    };
    ListaParametrosContext.prototype.VIRGULA_list = function () {
        return this.getTokens(PortugolParser.VIRGULA);
    };
    ListaParametrosContext.prototype.VIRGULA = function (i) {
        return this.getToken(PortugolParser.VIRGULA, i);
    };
    Object.defineProperty(ListaParametrosContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_listaParametros;
        },
        enumerable: false,
        configurable: true
    });
    ListaParametrosContext.prototype.enterRule = function (listener) {
        if (listener.enterListaParametros) {
            listener.enterListaParametros(this);
        }
    };
    ListaParametrosContext.prototype.exitRule = function (listener) {
        if (listener.exitListaParametros) {
            listener.exitListaParametros(this);
        }
    };
    // @Override
    ListaParametrosContext.prototype.accept = function (visitor) {
        if (visitor.visitListaParametros) {
            return visitor.visitListaParametros(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListaParametrosContext;
}(antlr4_1.ParserRuleContext));
exports.ListaParametrosContext = ListaParametrosContext;
var ParametroContext = /** @class */ (function (_super) {
    __extends(ParametroContext, _super);
    function ParametroContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ParametroContext.prototype.TIPO = function () {
        return this.getToken(PortugolParser.TIPO, 0);
    };
    ParametroContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    ParametroContext.prototype.E_COMERCIAL = function () {
        return this.getToken(PortugolParser.E_COMERCIAL, 0);
    };
    ParametroContext.prototype.parametroArray = function () {
        return this.getTypedRuleContext(ParametroArrayContext, 0);
    };
    ParametroContext.prototype.parametroMatriz = function () {
        return this.getTypedRuleContext(ParametroMatrizContext, 0);
    };
    Object.defineProperty(ParametroContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_parametro;
        },
        enumerable: false,
        configurable: true
    });
    ParametroContext.prototype.enterRule = function (listener) {
        if (listener.enterParametro) {
            listener.enterParametro(this);
        }
    };
    ParametroContext.prototype.exitRule = function (listener) {
        if (listener.exitParametro) {
            listener.exitParametro(this);
        }
    };
    // @Override
    ParametroContext.prototype.accept = function (visitor) {
        if (visitor.visitParametro) {
            return visitor.visitParametro(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParametroContext;
}(antlr4_1.ParserRuleContext));
exports.ParametroContext = ParametroContext;
var ParametroArrayContext = /** @class */ (function (_super) {
    __extends(ParametroArrayContext, _super);
    function ParametroArrayContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ParametroArrayContext.prototype.ABRE_COLCHETES = function () {
        return this.getToken(PortugolParser.ABRE_COLCHETES, 0);
    };
    ParametroArrayContext.prototype.FECHA_COLCHETES = function () {
        return this.getToken(PortugolParser.FECHA_COLCHETES, 0);
    };
    Object.defineProperty(ParametroArrayContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_parametroArray;
        },
        enumerable: false,
        configurable: true
    });
    ParametroArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterParametroArray) {
            listener.enterParametroArray(this);
        }
    };
    ParametroArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitParametroArray) {
            listener.exitParametroArray(this);
        }
    };
    // @Override
    ParametroArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitParametroArray) {
            return visitor.visitParametroArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParametroArrayContext;
}(antlr4_1.ParserRuleContext));
exports.ParametroArrayContext = ParametroArrayContext;
var ParametroMatrizContext = /** @class */ (function (_super) {
    __extends(ParametroMatrizContext, _super);
    function ParametroMatrizContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ParametroMatrizContext.prototype.ABRE_COLCHETES_list = function () {
        return this.getTokens(PortugolParser.ABRE_COLCHETES);
    };
    ParametroMatrizContext.prototype.ABRE_COLCHETES = function (i) {
        return this.getToken(PortugolParser.ABRE_COLCHETES, i);
    };
    ParametroMatrizContext.prototype.FECHA_COLCHETES_list = function () {
        return this.getTokens(PortugolParser.FECHA_COLCHETES);
    };
    ParametroMatrizContext.prototype.FECHA_COLCHETES = function (i) {
        return this.getToken(PortugolParser.FECHA_COLCHETES, i);
    };
    Object.defineProperty(ParametroMatrizContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_parametroMatriz;
        },
        enumerable: false,
        configurable: true
    });
    ParametroMatrizContext.prototype.enterRule = function (listener) {
        if (listener.enterParametroMatriz) {
            listener.enterParametroMatriz(this);
        }
    };
    ParametroMatrizContext.prototype.exitRule = function (listener) {
        if (listener.exitParametroMatriz) {
            listener.exitParametroMatriz(this);
        }
    };
    // @Override
    ParametroMatrizContext.prototype.accept = function (visitor) {
        if (visitor.visitParametroMatriz) {
            return visitor.visitParametroMatriz(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParametroMatrizContext;
}(antlr4_1.ParserRuleContext));
exports.ParametroMatrizContext = ParametroMatrizContext;
var ComandoContext = /** @class */ (function (_super) {
    __extends(ComandoContext, _super);
    function ComandoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ComandoContext.prototype.listaDeclaracoes = function () {
        return this.getTypedRuleContext(ListaDeclaracoesContext, 0);
    };
    ComandoContext.prototype.se = function () {
        return this.getTypedRuleContext(SeContext, 0);
    };
    ComandoContext.prototype.enquanto = function () {
        return this.getTypedRuleContext(EnquantoContext, 0);
    };
    ComandoContext.prototype.facaEnquanto = function () {
        return this.getTypedRuleContext(FacaEnquantoContext, 0);
    };
    ComandoContext.prototype.para = function () {
        return this.getTypedRuleContext(ParaContext, 0);
    };
    ComandoContext.prototype.escolha = function () {
        return this.getTypedRuleContext(EscolhaContext, 0);
    };
    ComandoContext.prototype.retorne = function () {
        return this.getTypedRuleContext(RetorneContext, 0);
    };
    ComandoContext.prototype.pare = function () {
        return this.getTypedRuleContext(PareContext, 0);
    };
    ComandoContext.prototype.atribuicao = function () {
        return this.getTypedRuleContext(AtribuicaoContext, 0);
    };
    ComandoContext.prototype.atribuicaoComposta = function () {
        return this.getTypedRuleContext(AtribuicaoCompostaContext, 0);
    };
    ComandoContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    Object.defineProperty(ComandoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_comando;
        },
        enumerable: false,
        configurable: true
    });
    ComandoContext.prototype.enterRule = function (listener) {
        if (listener.enterComando) {
            listener.enterComando(this);
        }
    };
    ComandoContext.prototype.exitRule = function (listener) {
        if (listener.exitComando) {
            listener.exitComando(this);
        }
    };
    // @Override
    ComandoContext.prototype.accept = function (visitor) {
        if (visitor.visitComando) {
            return visitor.visitComando(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComandoContext;
}(antlr4_1.ParserRuleContext));
exports.ComandoContext = ComandoContext;
var AtribuicaoContext = /** @class */ (function (_super) {
    __extends(AtribuicaoContext, _super);
    function AtribuicaoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    AtribuicaoContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    AtribuicaoContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    AtribuicaoContext.prototype.OP_ATRIBUICAO = function () {
        return this.getToken(PortugolParser.OP_ATRIBUICAO, 0);
    };
    Object.defineProperty(AtribuicaoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_atribuicao;
        },
        enumerable: false,
        configurable: true
    });
    AtribuicaoContext.prototype.enterRule = function (listener) {
        if (listener.enterAtribuicao) {
            listener.enterAtribuicao(this);
        }
    };
    AtribuicaoContext.prototype.exitRule = function (listener) {
        if (listener.exitAtribuicao) {
            listener.exitAtribuicao(this);
        }
    };
    // @Override
    AtribuicaoContext.prototype.accept = function (visitor) {
        if (visitor.visitAtribuicao) {
            return visitor.visitAtribuicao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtribuicaoContext;
}(antlr4_1.ParserRuleContext));
exports.AtribuicaoContext = AtribuicaoContext;
var AtribuicaoCompostaContext = /** @class */ (function (_super) {
    __extends(AtribuicaoCompostaContext, _super);
    function AtribuicaoCompostaContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    Object.defineProperty(AtribuicaoCompostaContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_atribuicaoComposta;
        },
        enumerable: false,
        configurable: true
    });
    AtribuicaoCompostaContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return AtribuicaoCompostaContext;
}(antlr4_1.ParserRuleContext));
exports.AtribuicaoCompostaContext = AtribuicaoCompostaContext;
var AtribuicaoCompostaSomaContext = /** @class */ (function (_super) {
    __extends(AtribuicaoCompostaSomaContext, _super);
    function AtribuicaoCompostaSomaContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    AtribuicaoCompostaSomaContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    AtribuicaoCompostaSomaContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    AtribuicaoCompostaSomaContext.prototype.OP_MAIS_IGUAL = function () {
        return this.getToken(PortugolParser.OP_MAIS_IGUAL, 0);
    };
    AtribuicaoCompostaSomaContext.prototype.enterRule = function (listener) {
        if (listener.enterAtribuicaoCompostaSoma) {
            listener.enterAtribuicaoCompostaSoma(this);
        }
    };
    AtribuicaoCompostaSomaContext.prototype.exitRule = function (listener) {
        if (listener.exitAtribuicaoCompostaSoma) {
            listener.exitAtribuicaoCompostaSoma(this);
        }
    };
    // @Override
    AtribuicaoCompostaSomaContext.prototype.accept = function (visitor) {
        if (visitor.visitAtribuicaoCompostaSoma) {
            return visitor.visitAtribuicaoCompostaSoma(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtribuicaoCompostaSomaContext;
}(AtribuicaoCompostaContext));
exports.AtribuicaoCompostaSomaContext = AtribuicaoCompostaSomaContext;
var AtribuicaoCompostaSubtracaoContext = /** @class */ (function (_super) {
    __extends(AtribuicaoCompostaSubtracaoContext, _super);
    function AtribuicaoCompostaSubtracaoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    AtribuicaoCompostaSubtracaoContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    AtribuicaoCompostaSubtracaoContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    AtribuicaoCompostaSubtracaoContext.prototype.OP_MENOS_IGUAL = function () {
        return this.getToken(PortugolParser.OP_MENOS_IGUAL, 0);
    };
    AtribuicaoCompostaSubtracaoContext.prototype.enterRule = function (listener) {
        if (listener.enterAtribuicaoCompostaSubtracao) {
            listener.enterAtribuicaoCompostaSubtracao(this);
        }
    };
    AtribuicaoCompostaSubtracaoContext.prototype.exitRule = function (listener) {
        if (listener.exitAtribuicaoCompostaSubtracao) {
            listener.exitAtribuicaoCompostaSubtracao(this);
        }
    };
    // @Override
    AtribuicaoCompostaSubtracaoContext.prototype.accept = function (visitor) {
        if (visitor.visitAtribuicaoCompostaSubtracao) {
            return visitor.visitAtribuicaoCompostaSubtracao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtribuicaoCompostaSubtracaoContext;
}(AtribuicaoCompostaContext));
exports.AtribuicaoCompostaSubtracaoContext = AtribuicaoCompostaSubtracaoContext;
var AtribuicaoCompostaMultiplicacaoContext = /** @class */ (function (_super) {
    __extends(AtribuicaoCompostaMultiplicacaoContext, _super);
    function AtribuicaoCompostaMultiplicacaoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    AtribuicaoCompostaMultiplicacaoContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    AtribuicaoCompostaMultiplicacaoContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    AtribuicaoCompostaMultiplicacaoContext.prototype.OP_MULTIPLICACAO_IGUAL = function () {
        return this.getToken(PortugolParser.OP_MULTIPLICACAO_IGUAL, 0);
    };
    AtribuicaoCompostaMultiplicacaoContext.prototype.enterRule = function (listener) {
        if (listener.enterAtribuicaoCompostaMultiplicacao) {
            listener.enterAtribuicaoCompostaMultiplicacao(this);
        }
    };
    AtribuicaoCompostaMultiplicacaoContext.prototype.exitRule = function (listener) {
        if (listener.exitAtribuicaoCompostaMultiplicacao) {
            listener.exitAtribuicaoCompostaMultiplicacao(this);
        }
    };
    // @Override
    AtribuicaoCompostaMultiplicacaoContext.prototype.accept = function (visitor) {
        if (visitor.visitAtribuicaoCompostaMultiplicacao) {
            return visitor.visitAtribuicaoCompostaMultiplicacao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtribuicaoCompostaMultiplicacaoContext;
}(AtribuicaoCompostaContext));
exports.AtribuicaoCompostaMultiplicacaoContext = AtribuicaoCompostaMultiplicacaoContext;
var AtribuicaoCompostaDivisaoContext = /** @class */ (function (_super) {
    __extends(AtribuicaoCompostaDivisaoContext, _super);
    function AtribuicaoCompostaDivisaoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    AtribuicaoCompostaDivisaoContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    AtribuicaoCompostaDivisaoContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    AtribuicaoCompostaDivisaoContext.prototype.OP_DIVISAO_IGUAL = function () {
        return this.getToken(PortugolParser.OP_DIVISAO_IGUAL, 0);
    };
    AtribuicaoCompostaDivisaoContext.prototype.enterRule = function (listener) {
        if (listener.enterAtribuicaoCompostaDivisao) {
            listener.enterAtribuicaoCompostaDivisao(this);
        }
    };
    AtribuicaoCompostaDivisaoContext.prototype.exitRule = function (listener) {
        if (listener.exitAtribuicaoCompostaDivisao) {
            listener.exitAtribuicaoCompostaDivisao(this);
        }
    };
    // @Override
    AtribuicaoCompostaDivisaoContext.prototype.accept = function (visitor) {
        if (visitor.visitAtribuicaoCompostaDivisao) {
            return visitor.visitAtribuicaoCompostaDivisao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtribuicaoCompostaDivisaoContext;
}(AtribuicaoCompostaContext));
exports.AtribuicaoCompostaDivisaoContext = AtribuicaoCompostaDivisaoContext;
var RetorneContext = /** @class */ (function (_super) {
    __extends(RetorneContext, _super);
    function RetorneContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    RetorneContext.prototype.RETORNE = function () {
        return this.getToken(PortugolParser.RETORNE, 0);
    };
    RetorneContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    Object.defineProperty(RetorneContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_retorne;
        },
        enumerable: false,
        configurable: true
    });
    RetorneContext.prototype.enterRule = function (listener) {
        if (listener.enterRetorne) {
            listener.enterRetorne(this);
        }
    };
    RetorneContext.prototype.exitRule = function (listener) {
        if (listener.exitRetorne) {
            listener.exitRetorne(this);
        }
    };
    // @Override
    RetorneContext.prototype.accept = function (visitor) {
        if (visitor.visitRetorne) {
            return visitor.visitRetorne(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RetorneContext;
}(antlr4_1.ParserRuleContext));
exports.RetorneContext = RetorneContext;
var SeContext = /** @class */ (function (_super) {
    __extends(SeContext, _super);
    function SeContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    SeContext.prototype.SE = function () {
        return this.getToken(PortugolParser.SE, 0);
    };
    SeContext.prototype.ABRE_PARENTESES = function () {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
    };
    SeContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    SeContext.prototype.FECHA_PARENTESES = function () {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
    };
    SeContext.prototype.listaComandos = function () {
        return this.getTypedRuleContext(ListaComandosContext, 0);
    };
    SeContext.prototype.senao = function () {
        return this.getTypedRuleContext(SenaoContext, 0);
    };
    Object.defineProperty(SeContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_se;
        },
        enumerable: false,
        configurable: true
    });
    SeContext.prototype.enterRule = function (listener) {
        if (listener.enterSe) {
            listener.enterSe(this);
        }
    };
    SeContext.prototype.exitRule = function (listener) {
        if (listener.exitSe) {
            listener.exitSe(this);
        }
    };
    // @Override
    SeContext.prototype.accept = function (visitor) {
        if (visitor.visitSe) {
            return visitor.visitSe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SeContext;
}(antlr4_1.ParserRuleContext));
exports.SeContext = SeContext;
var SenaoContext = /** @class */ (function (_super) {
    __extends(SenaoContext, _super);
    function SenaoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    SenaoContext.prototype.SENAO = function () {
        return this.getToken(PortugolParser.SENAO, 0);
    };
    SenaoContext.prototype.listaComandos = function () {
        return this.getTypedRuleContext(ListaComandosContext, 0);
    };
    Object.defineProperty(SenaoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_senao;
        },
        enumerable: false,
        configurable: true
    });
    SenaoContext.prototype.enterRule = function (listener) {
        if (listener.enterSenao) {
            listener.enterSenao(this);
        }
    };
    SenaoContext.prototype.exitRule = function (listener) {
        if (listener.exitSenao) {
            listener.exitSenao(this);
        }
    };
    // @Override
    SenaoContext.prototype.accept = function (visitor) {
        if (visitor.visitSenao) {
            return visitor.visitSenao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SenaoContext;
}(antlr4_1.ParserRuleContext));
exports.SenaoContext = SenaoContext;
var EnquantoContext = /** @class */ (function (_super) {
    __extends(EnquantoContext, _super);
    function EnquantoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    EnquantoContext.prototype.ENQUANTO = function () {
        return this.getToken(PortugolParser.ENQUANTO, 0);
    };
    EnquantoContext.prototype.ABRE_PARENTESES = function () {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
    };
    EnquantoContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    EnquantoContext.prototype.FECHA_PARENTESES = function () {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
    };
    EnquantoContext.prototype.listaComandos = function () {
        return this.getTypedRuleContext(ListaComandosContext, 0);
    };
    Object.defineProperty(EnquantoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_enquanto;
        },
        enumerable: false,
        configurable: true
    });
    EnquantoContext.prototype.enterRule = function (listener) {
        if (listener.enterEnquanto) {
            listener.enterEnquanto(this);
        }
    };
    EnquantoContext.prototype.exitRule = function (listener) {
        if (listener.exitEnquanto) {
            listener.exitEnquanto(this);
        }
    };
    // @Override
    EnquantoContext.prototype.accept = function (visitor) {
        if (visitor.visitEnquanto) {
            return visitor.visitEnquanto(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnquantoContext;
}(antlr4_1.ParserRuleContext));
exports.EnquantoContext = EnquantoContext;
var FacaEnquantoContext = /** @class */ (function (_super) {
    __extends(FacaEnquantoContext, _super);
    function FacaEnquantoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    FacaEnquantoContext.prototype.FACA = function () {
        return this.getToken(PortugolParser.FACA, 0);
    };
    FacaEnquantoContext.prototype.listaComandos = function () {
        return this.getTypedRuleContext(ListaComandosContext, 0);
    };
    FacaEnquantoContext.prototype.ENQUANTO = function () {
        return this.getToken(PortugolParser.ENQUANTO, 0);
    };
    FacaEnquantoContext.prototype.ABRE_PARENTESES = function () {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
    };
    FacaEnquantoContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    FacaEnquantoContext.prototype.FECHA_PARENTESES = function () {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
    };
    Object.defineProperty(FacaEnquantoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_facaEnquanto;
        },
        enumerable: false,
        configurable: true
    });
    FacaEnquantoContext.prototype.enterRule = function (listener) {
        if (listener.enterFacaEnquanto) {
            listener.enterFacaEnquanto(this);
        }
    };
    FacaEnquantoContext.prototype.exitRule = function (listener) {
        if (listener.exitFacaEnquanto) {
            listener.exitFacaEnquanto(this);
        }
    };
    // @Override
    FacaEnquantoContext.prototype.accept = function (visitor) {
        if (visitor.visitFacaEnquanto) {
            return visitor.visitFacaEnquanto(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FacaEnquantoContext;
}(antlr4_1.ParserRuleContext));
exports.FacaEnquantoContext = FacaEnquantoContext;
var ParaContext = /** @class */ (function (_super) {
    __extends(ParaContext, _super);
    function ParaContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ParaContext.prototype.PARA = function () {
        return this.getToken(PortugolParser.PARA, 0);
    };
    ParaContext.prototype.ABRE_PARENTESES = function () {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
    };
    ParaContext.prototype.PONTOVIRGULA_list = function () {
        return this.getTokens(PortugolParser.PONTOVIRGULA);
    };
    ParaContext.prototype.PONTOVIRGULA = function (i) {
        return this.getToken(PortugolParser.PONTOVIRGULA, i);
    };
    ParaContext.prototype.condicao = function () {
        return this.getTypedRuleContext(CondicaoContext, 0);
    };
    ParaContext.prototype.incrementoPara = function () {
        return this.getTypedRuleContext(IncrementoParaContext, 0);
    };
    ParaContext.prototype.FECHA_PARENTESES = function () {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
    };
    ParaContext.prototype.listaComandos = function () {
        return this.getTypedRuleContext(ListaComandosContext, 0);
    };
    ParaContext.prototype.inicializacaoPara = function () {
        return this.getTypedRuleContext(InicializacaoParaContext, 0);
    };
    Object.defineProperty(ParaContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_para;
        },
        enumerable: false,
        configurable: true
    });
    ParaContext.prototype.enterRule = function (listener) {
        if (listener.enterPara) {
            listener.enterPara(this);
        }
    };
    ParaContext.prototype.exitRule = function (listener) {
        if (listener.exitPara) {
            listener.exitPara(this);
        }
    };
    // @Override
    ParaContext.prototype.accept = function (visitor) {
        if (visitor.visitPara) {
            return visitor.visitPara(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParaContext;
}(antlr4_1.ParserRuleContext));
exports.ParaContext = ParaContext;
var ListaComandosContext = /** @class */ (function (_super) {
    __extends(ListaComandosContext, _super);
    function ListaComandosContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ListaComandosContext.prototype.ABRE_CHAVES = function () {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0);
    };
    ListaComandosContext.prototype.FECHA_CHAVES = function () {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0);
    };
    ListaComandosContext.prototype.comando_list = function () {
        return this.getTypedRuleContexts(ComandoContext);
    };
    ListaComandosContext.prototype.comando = function (i) {
        return this.getTypedRuleContext(ComandoContext, i);
    };
    Object.defineProperty(ListaComandosContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_listaComandos;
        },
        enumerable: false,
        configurable: true
    });
    ListaComandosContext.prototype.enterRule = function (listener) {
        if (listener.enterListaComandos) {
            listener.enterListaComandos(this);
        }
    };
    ListaComandosContext.prototype.exitRule = function (listener) {
        if (listener.exitListaComandos) {
            listener.exitListaComandos(this);
        }
    };
    // @Override
    ListaComandosContext.prototype.accept = function (visitor) {
        if (visitor.visitListaComandos) {
            return visitor.visitListaComandos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListaComandosContext;
}(antlr4_1.ParserRuleContext));
exports.ListaComandosContext = ListaComandosContext;
var InicializacaoParaContext = /** @class */ (function (_super) {
    __extends(InicializacaoParaContext, _super);
    function InicializacaoParaContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    InicializacaoParaContext.prototype.atribuicao = function () {
        return this.getTypedRuleContext(AtribuicaoContext, 0);
    };
    InicializacaoParaContext.prototype.listaDeclaracoes = function () {
        return this.getTypedRuleContext(ListaDeclaracoesContext, 0);
    };
    InicializacaoParaContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    Object.defineProperty(InicializacaoParaContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_inicializacaoPara;
        },
        enumerable: false,
        configurable: true
    });
    InicializacaoParaContext.prototype.enterRule = function (listener) {
        if (listener.enterInicializacaoPara) {
            listener.enterInicializacaoPara(this);
        }
    };
    InicializacaoParaContext.prototype.exitRule = function (listener) {
        if (listener.exitInicializacaoPara) {
            listener.exitInicializacaoPara(this);
        }
    };
    // @Override
    InicializacaoParaContext.prototype.accept = function (visitor) {
        if (visitor.visitInicializacaoPara) {
            return visitor.visitInicializacaoPara(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InicializacaoParaContext;
}(antlr4_1.ParserRuleContext));
exports.InicializacaoParaContext = InicializacaoParaContext;
var CondicaoContext = /** @class */ (function (_super) {
    __extends(CondicaoContext, _super);
    function CondicaoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    CondicaoContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    Object.defineProperty(CondicaoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_condicao;
        },
        enumerable: false,
        configurable: true
    });
    CondicaoContext.prototype.enterRule = function (listener) {
        if (listener.enterCondicao) {
            listener.enterCondicao(this);
        }
    };
    CondicaoContext.prototype.exitRule = function (listener) {
        if (listener.exitCondicao) {
            listener.exitCondicao(this);
        }
    };
    // @Override
    CondicaoContext.prototype.accept = function (visitor) {
        if (visitor.visitCondicao) {
            return visitor.visitCondicao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CondicaoContext;
}(antlr4_1.ParserRuleContext));
exports.CondicaoContext = CondicaoContext;
var IncrementoParaContext = /** @class */ (function (_super) {
    __extends(IncrementoParaContext, _super);
    function IncrementoParaContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    IncrementoParaContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    IncrementoParaContext.prototype.atribuicaoComposta = function () {
        return this.getTypedRuleContext(AtribuicaoCompostaContext, 0);
    };
    IncrementoParaContext.prototype.atribuicao = function () {
        return this.getTypedRuleContext(AtribuicaoContext, 0);
    };
    Object.defineProperty(IncrementoParaContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_incrementoPara;
        },
        enumerable: false,
        configurable: true
    });
    IncrementoParaContext.prototype.enterRule = function (listener) {
        if (listener.enterIncrementoPara) {
            listener.enterIncrementoPara(this);
        }
    };
    IncrementoParaContext.prototype.exitRule = function (listener) {
        if (listener.exitIncrementoPara) {
            listener.exitIncrementoPara(this);
        }
    };
    // @Override
    IncrementoParaContext.prototype.accept = function (visitor) {
        if (visitor.visitIncrementoPara) {
            return visitor.visitIncrementoPara(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IncrementoParaContext;
}(antlr4_1.ParserRuleContext));
exports.IncrementoParaContext = IncrementoParaContext;
var EscolhaContext = /** @class */ (function (_super) {
    __extends(EscolhaContext, _super);
    function EscolhaContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    EscolhaContext.prototype.ESCOLHA = function () {
        return this.getToken(PortugolParser.ESCOLHA, 0);
    };
    EscolhaContext.prototype.ABRE_PARENTESES = function () {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
    };
    EscolhaContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    EscolhaContext.prototype.FECHA_PARENTESES = function () {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
    };
    EscolhaContext.prototype.ABRE_CHAVES = function () {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0);
    };
    EscolhaContext.prototype.FECHA_CHAVES = function () {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0);
    };
    EscolhaContext.prototype.caso_list = function () {
        return this.getTypedRuleContexts(CasoContext);
    };
    EscolhaContext.prototype.caso = function (i) {
        return this.getTypedRuleContext(CasoContext, i);
    };
    Object.defineProperty(EscolhaContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_escolha;
        },
        enumerable: false,
        configurable: true
    });
    EscolhaContext.prototype.enterRule = function (listener) {
        if (listener.enterEscolha) {
            listener.enterEscolha(this);
        }
    };
    EscolhaContext.prototype.exitRule = function (listener) {
        if (listener.exitEscolha) {
            listener.exitEscolha(this);
        }
    };
    // @Override
    EscolhaContext.prototype.accept = function (visitor) {
        if (visitor.visitEscolha) {
            return visitor.visitEscolha(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EscolhaContext;
}(antlr4_1.ParserRuleContext));
exports.EscolhaContext = EscolhaContext;
var CasoContext = /** @class */ (function (_super) {
    __extends(CasoContext, _super);
    function CasoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    CasoContext.prototype.CASO = function () {
        return this.getToken(PortugolParser.CASO, 0);
    };
    CasoContext.prototype.DOISPONTOS = function () {
        return this.getToken(PortugolParser.DOISPONTOS, 0);
    };
    CasoContext.prototype.CONTRARIO = function () {
        return this.getToken(PortugolParser.CONTRARIO, 0);
    };
    CasoContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    CasoContext.prototype.ABRE_CHAVES = function () {
        return this.getToken(PortugolParser.ABRE_CHAVES, 0);
    };
    CasoContext.prototype.FECHA_CHAVES = function () {
        return this.getToken(PortugolParser.FECHA_CHAVES, 0);
    };
    CasoContext.prototype.pare = function () {
        return this.getTypedRuleContext(PareContext, 0);
    };
    CasoContext.prototype.comando_list = function () {
        return this.getTypedRuleContexts(ComandoContext);
    };
    CasoContext.prototype.comando = function (i) {
        return this.getTypedRuleContext(ComandoContext, i);
    };
    Object.defineProperty(CasoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_caso;
        },
        enumerable: false,
        configurable: true
    });
    CasoContext.prototype.enterRule = function (listener) {
        if (listener.enterCaso) {
            listener.enterCaso(this);
        }
    };
    CasoContext.prototype.exitRule = function (listener) {
        if (listener.exitCaso) {
            listener.exitCaso(this);
        }
    };
    // @Override
    CasoContext.prototype.accept = function (visitor) {
        if (visitor.visitCaso) {
            return visitor.visitCaso(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CasoContext;
}(antlr4_1.ParserRuleContext));
exports.CasoContext = CasoContext;
var PareContext = /** @class */ (function (_super) {
    __extends(PareContext, _super);
    function PareContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    PareContext.prototype.PARE = function () {
        return this.getToken(PortugolParser.PARE, 0);
    };
    Object.defineProperty(PareContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_pare;
        },
        enumerable: false,
        configurable: true
    });
    PareContext.prototype.enterRule = function (listener) {
        if (listener.enterPare) {
            listener.enterPare(this);
        }
    };
    PareContext.prototype.exitRule = function (listener) {
        if (listener.exitPare) {
            listener.exitPare(this);
        }
    };
    // @Override
    PareContext.prototype.accept = function (visitor) {
        if (visitor.visitPare) {
            return visitor.visitPare(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PareContext;
}(antlr4_1.ParserRuleContext));
exports.PareContext = PareContext;
var IndiceArrayContext = /** @class */ (function (_super) {
    __extends(IndiceArrayContext, _super);
    function IndiceArrayContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    IndiceArrayContext.prototype.ABRE_COLCHETES = function () {
        return this.getToken(PortugolParser.ABRE_COLCHETES, 0);
    };
    IndiceArrayContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    IndiceArrayContext.prototype.FECHA_COLCHETES = function () {
        return this.getToken(PortugolParser.FECHA_COLCHETES, 0);
    };
    Object.defineProperty(IndiceArrayContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_indiceArray;
        },
        enumerable: false,
        configurable: true
    });
    IndiceArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterIndiceArray) {
            listener.enterIndiceArray(this);
        }
    };
    IndiceArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitIndiceArray) {
            listener.exitIndiceArray(this);
        }
    };
    // @Override
    IndiceArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitIndiceArray) {
            return visitor.visitIndiceArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndiceArrayContext;
}(antlr4_1.ParserRuleContext));
exports.IndiceArrayContext = IndiceArrayContext;
var ExpressaoContext = /** @class */ (function (_super) {
    __extends(ExpressaoContext, _super);
    function ExpressaoContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    Object.defineProperty(ExpressaoContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_expressao;
        },
        enumerable: false,
        configurable: true
    });
    ExpressaoContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ExpressaoContext;
}(antlr4_1.ParserRuleContext));
exports.ExpressaoContext = ExpressaoContext;
var ChamadaFuncaoContext = /** @class */ (function (_super) {
    __extends(ChamadaFuncaoContext, _super);
    function ChamadaFuncaoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    ChamadaFuncaoContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    ChamadaFuncaoContext.prototype.ABRE_PARENTESES = function () {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
    };
    ChamadaFuncaoContext.prototype.FECHA_PARENTESES = function () {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
    };
    ChamadaFuncaoContext.prototype.escopoBiblioteca = function () {
        return this.getTypedRuleContext(EscopoBibliotecaContext, 0);
    };
    ChamadaFuncaoContext.prototype.listaExpressoes = function () {
        return this.getTypedRuleContext(ListaExpressoesContext, 0);
    };
    ChamadaFuncaoContext.prototype.enterRule = function (listener) {
        if (listener.enterChamadaFuncao) {
            listener.enterChamadaFuncao(this);
        }
    };
    ChamadaFuncaoContext.prototype.exitRule = function (listener) {
        if (listener.exitChamadaFuncao) {
            listener.exitChamadaFuncao(this);
        }
    };
    // @Override
    ChamadaFuncaoContext.prototype.accept = function (visitor) {
        if (visitor.visitChamadaFuncao) {
            return visitor.visitChamadaFuncao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChamadaFuncaoContext;
}(ExpressaoContext));
exports.ChamadaFuncaoContext = ChamadaFuncaoContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    StringContext.prototype.STRING = function () {
        return this.getToken(PortugolParser.STRING, 0);
    };
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ExpressaoContext));
exports.StringContext = StringContext;
var NegacaoBitwiseContext = /** @class */ (function (_super) {
    __extends(NegacaoBitwiseContext, _super);
    function NegacaoBitwiseContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    NegacaoBitwiseContext.prototype.OP_NOT_BITWISE = function () {
        return this.getToken(PortugolParser.OP_NOT_BITWISE, 0);
    };
    NegacaoBitwiseContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    NegacaoBitwiseContext.prototype.enterRule = function (listener) {
        if (listener.enterNegacaoBitwise) {
            listener.enterNegacaoBitwise(this);
        }
    };
    NegacaoBitwiseContext.prototype.exitRule = function (listener) {
        if (listener.exitNegacaoBitwise) {
            listener.exitNegacaoBitwise(this);
        }
    };
    // @Override
    NegacaoBitwiseContext.prototype.accept = function (visitor) {
        if (visitor.visitNegacaoBitwise) {
            return visitor.visitNegacaoBitwise(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NegacaoBitwiseContext;
}(ExpressaoContext));
exports.NegacaoBitwiseContext = NegacaoBitwiseContext;
var ReferenciaArrayContext = /** @class */ (function (_super) {
    __extends(ReferenciaArrayContext, _super);
    function ReferenciaArrayContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    ReferenciaArrayContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    ReferenciaArrayContext.prototype.indiceArray = function () {
        return this.getTypedRuleContext(IndiceArrayContext, 0);
    };
    ReferenciaArrayContext.prototype.escopoBiblioteca = function () {
        return this.getTypedRuleContext(EscopoBibliotecaContext, 0);
    };
    ReferenciaArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterReferenciaArray) {
            listener.enterReferenciaArray(this);
        }
    };
    ReferenciaArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitReferenciaArray) {
            listener.exitReferenciaArray(this);
        }
    };
    // @Override
    ReferenciaArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitReferenciaArray) {
            return visitor.visitReferenciaArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferenciaArrayContext;
}(ExpressaoContext));
exports.ReferenciaArrayContext = ReferenciaArrayContext;
var NumeroRealContext = /** @class */ (function (_super) {
    __extends(NumeroRealContext, _super);
    function NumeroRealContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    NumeroRealContext.prototype.REAL = function () {
        return this.getToken(PortugolParser.REAL, 0);
    };
    NumeroRealContext.prototype.enterRule = function (listener) {
        if (listener.enterNumeroReal) {
            listener.enterNumeroReal(this);
        }
    };
    NumeroRealContext.prototype.exitRule = function (listener) {
        if (listener.exitNumeroReal) {
            listener.exitNumeroReal(this);
        }
    };
    // @Override
    NumeroRealContext.prototype.accept = function (visitor) {
        if (visitor.visitNumeroReal) {
            return visitor.visitNumeroReal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumeroRealContext;
}(ExpressaoContext));
exports.NumeroRealContext = NumeroRealContext;
var MaisUnarioContext = /** @class */ (function (_super) {
    __extends(MaisUnarioContext, _super);
    function MaisUnarioContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    MaisUnarioContext.prototype.OP_ADICAO = function () {
        return this.getToken(PortugolParser.OP_ADICAO, 0);
    };
    MaisUnarioContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    MaisUnarioContext.prototype.enterRule = function (listener) {
        if (listener.enterMaisUnario) {
            listener.enterMaisUnario(this);
        }
    };
    MaisUnarioContext.prototype.exitRule = function (listener) {
        if (listener.exitMaisUnario) {
            listener.exitMaisUnario(this);
        }
    };
    // @Override
    MaisUnarioContext.prototype.accept = function (visitor) {
        if (visitor.visitMaisUnario) {
            return visitor.visitMaisUnario(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MaisUnarioContext;
}(ExpressaoContext));
exports.MaisUnarioContext = MaisUnarioContext;
var OperacaoDiferencaContext = /** @class */ (function (_super) {
    __extends(OperacaoDiferencaContext, _super);
    function OperacaoDiferencaContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoDiferencaContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoDiferencaContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoDiferencaContext.prototype.OP_DIFERENCA = function () {
        return this.getToken(PortugolParser.OP_DIFERENCA, 0);
    };
    OperacaoDiferencaContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoDiferenca) {
            listener.enterOperacaoDiferenca(this);
        }
    };
    OperacaoDiferencaContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoDiferenca) {
            listener.exitOperacaoDiferenca(this);
        }
    };
    // @Override
    OperacaoDiferencaContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoDiferenca) {
            return visitor.visitOperacaoDiferenca(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoDiferencaContext;
}(ExpressaoContext));
exports.OperacaoDiferencaContext = OperacaoDiferencaContext;
var MenosUnarioContext = /** @class */ (function (_super) {
    __extends(MenosUnarioContext, _super);
    function MenosUnarioContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    MenosUnarioContext.prototype.OP_SUBTRACAO = function () {
        return this.getToken(PortugolParser.OP_SUBTRACAO, 0);
    };
    MenosUnarioContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    MenosUnarioContext.prototype.enterRule = function (listener) {
        if (listener.enterMenosUnario) {
            listener.enterMenosUnario(this);
        }
    };
    MenosUnarioContext.prototype.exitRule = function (listener) {
        if (listener.exitMenosUnario) {
            listener.exitMenosUnario(this);
        }
    };
    // @Override
    MenosUnarioContext.prototype.accept = function (visitor) {
        if (visitor.visitMenosUnario) {
            return visitor.visitMenosUnario(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MenosUnarioContext;
}(ExpressaoContext));
exports.MenosUnarioContext = MenosUnarioContext;
var AdicaoContext = /** @class */ (function (_super) {
    __extends(AdicaoContext, _super);
    function AdicaoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    AdicaoContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    AdicaoContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    AdicaoContext.prototype.OP_ADICAO = function () {
        return this.getToken(PortugolParser.OP_ADICAO, 0);
    };
    AdicaoContext.prototype.enterRule = function (listener) {
        if (listener.enterAdicao) {
            listener.enterAdicao(this);
        }
    };
    AdicaoContext.prototype.exitRule = function (listener) {
        if (listener.exitAdicao) {
            listener.exitAdicao(this);
        }
    };
    // @Override
    AdicaoContext.prototype.accept = function (visitor) {
        if (visitor.visitAdicao) {
            return visitor.visitAdicao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdicaoContext;
}(ExpressaoContext));
exports.AdicaoContext = AdicaoContext;
var OperacaoXorContext = /** @class */ (function (_super) {
    __extends(OperacaoXorContext, _super);
    function OperacaoXorContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoXorContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoXorContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoXorContext.prototype.OP_XOR = function () {
        return this.getToken(PortugolParser.OP_XOR, 0);
    };
    OperacaoXorContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoXor) {
            listener.enterOperacaoXor(this);
        }
    };
    OperacaoXorContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoXor) {
            listener.exitOperacaoXor(this);
        }
    };
    // @Override
    OperacaoXorContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoXor) {
            return visitor.visitOperacaoXor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoXorContext;
}(ExpressaoContext));
exports.OperacaoXorContext = OperacaoXorContext;
var OperacaoMaiorIgualContext = /** @class */ (function (_super) {
    __extends(OperacaoMaiorIgualContext, _super);
    function OperacaoMaiorIgualContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoMaiorIgualContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoMaiorIgualContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoMaiorIgualContext.prototype.OP_MAIOR_IGUAL = function () {
        return this.getToken(PortugolParser.OP_MAIOR_IGUAL, 0);
    };
    OperacaoMaiorIgualContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoMaiorIgual) {
            listener.enterOperacaoMaiorIgual(this);
        }
    };
    OperacaoMaiorIgualContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoMaiorIgual) {
            listener.exitOperacaoMaiorIgual(this);
        }
    };
    // @Override
    OperacaoMaiorIgualContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoMaiorIgual) {
            return visitor.visitOperacaoMaiorIgual(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoMaiorIgualContext;
}(ExpressaoContext));
exports.OperacaoMaiorIgualContext = OperacaoMaiorIgualContext;
var DecrementoUnarioPrefixadoContext = /** @class */ (function (_super) {
    __extends(DecrementoUnarioPrefixadoContext, _super);
    function DecrementoUnarioPrefixadoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    DecrementoUnarioPrefixadoContext.prototype.OP_DECREMENTO_UNARIO = function () {
        return this.getToken(PortugolParser.OP_DECREMENTO_UNARIO, 0);
    };
    DecrementoUnarioPrefixadoContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    DecrementoUnarioPrefixadoContext.prototype.indiceArray_list = function () {
        return this.getTypedRuleContexts(IndiceArrayContext);
    };
    DecrementoUnarioPrefixadoContext.prototype.indiceArray = function (i) {
        return this.getTypedRuleContext(IndiceArrayContext, i);
    };
    DecrementoUnarioPrefixadoContext.prototype.enterRule = function (listener) {
        if (listener.enterDecrementoUnarioPrefixado) {
            listener.enterDecrementoUnarioPrefixado(this);
        }
    };
    DecrementoUnarioPrefixadoContext.prototype.exitRule = function (listener) {
        if (listener.exitDecrementoUnarioPrefixado) {
            listener.exitDecrementoUnarioPrefixado(this);
        }
    };
    // @Override
    DecrementoUnarioPrefixadoContext.prototype.accept = function (visitor) {
        if (visitor.visitDecrementoUnarioPrefixado) {
            return visitor.visitDecrementoUnarioPrefixado(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecrementoUnarioPrefixadoContext;
}(ExpressaoContext));
exports.DecrementoUnarioPrefixadoContext = DecrementoUnarioPrefixadoContext;
var IncrementoUnarioPosfixadoContext = /** @class */ (function (_super) {
    __extends(IncrementoUnarioPosfixadoContext, _super);
    function IncrementoUnarioPosfixadoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    IncrementoUnarioPosfixadoContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    IncrementoUnarioPosfixadoContext.prototype.OP_INCREMENTO_UNARIO = function () {
        return this.getToken(PortugolParser.OP_INCREMENTO_UNARIO, 0);
    };
    IncrementoUnarioPosfixadoContext.prototype.indiceArray_list = function () {
        return this.getTypedRuleContexts(IndiceArrayContext);
    };
    IncrementoUnarioPosfixadoContext.prototype.indiceArray = function (i) {
        return this.getTypedRuleContext(IndiceArrayContext, i);
    };
    IncrementoUnarioPosfixadoContext.prototype.enterRule = function (listener) {
        if (listener.enterIncrementoUnarioPosfixado) {
            listener.enterIncrementoUnarioPosfixado(this);
        }
    };
    IncrementoUnarioPosfixadoContext.prototype.exitRule = function (listener) {
        if (listener.exitIncrementoUnarioPosfixado) {
            listener.exitIncrementoUnarioPosfixado(this);
        }
    };
    // @Override
    IncrementoUnarioPosfixadoContext.prototype.accept = function (visitor) {
        if (visitor.visitIncrementoUnarioPosfixado) {
            return visitor.visitIncrementoUnarioPosfixado(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IncrementoUnarioPosfixadoContext;
}(ExpressaoContext));
exports.IncrementoUnarioPosfixadoContext = IncrementoUnarioPosfixadoContext;
var MultiplicacaoContext = /** @class */ (function (_super) {
    __extends(MultiplicacaoContext, _super);
    function MultiplicacaoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    MultiplicacaoContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    MultiplicacaoContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    MultiplicacaoContext.prototype.OP_MULTIPLICACAO = function () {
        return this.getToken(PortugolParser.OP_MULTIPLICACAO, 0);
    };
    MultiplicacaoContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicacao) {
            listener.enterMultiplicacao(this);
        }
    };
    MultiplicacaoContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicacao) {
            listener.exitMultiplicacao(this);
        }
    };
    // @Override
    MultiplicacaoContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicacao) {
            return visitor.visitMultiplicacao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicacaoContext;
}(ExpressaoContext));
exports.MultiplicacaoContext = MultiplicacaoContext;
var OperacaoOuLogicoContext = /** @class */ (function (_super) {
    __extends(OperacaoOuLogicoContext, _super);
    function OperacaoOuLogicoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoOuLogicoContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoOuLogicoContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoOuLogicoContext.prototype.OP_OU_LOGICO = function () {
        return this.getToken(PortugolParser.OP_OU_LOGICO, 0);
    };
    OperacaoOuLogicoContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoOuLogico) {
            listener.enterOperacaoOuLogico(this);
        }
    };
    OperacaoOuLogicoContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoOuLogico) {
            listener.exitOperacaoOuLogico(this);
        }
    };
    // @Override
    OperacaoOuLogicoContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoOuLogico) {
            return visitor.visitOperacaoOuLogico(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoOuLogicoContext;
}(ExpressaoContext));
exports.OperacaoOuLogicoContext = OperacaoOuLogicoContext;
var OperacaoIgualdadeContext = /** @class */ (function (_super) {
    __extends(OperacaoIgualdadeContext, _super);
    function OperacaoIgualdadeContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoIgualdadeContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoIgualdadeContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoIgualdadeContext.prototype.OP_IGUALDADE = function () {
        return this.getToken(PortugolParser.OP_IGUALDADE, 0);
    };
    OperacaoIgualdadeContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoIgualdade) {
            listener.enterOperacaoIgualdade(this);
        }
    };
    OperacaoIgualdadeContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoIgualdade) {
            listener.exitOperacaoIgualdade(this);
        }
    };
    // @Override
    OperacaoIgualdadeContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoIgualdade) {
            return visitor.visitOperacaoIgualdade(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoIgualdadeContext;
}(ExpressaoContext));
exports.OperacaoIgualdadeContext = OperacaoIgualdadeContext;
var OperacaoShiftRightContext = /** @class */ (function (_super) {
    __extends(OperacaoShiftRightContext, _super);
    function OperacaoShiftRightContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoShiftRightContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoShiftRightContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoShiftRightContext.prototype.OP_SHIFT_RIGHT = function () {
        return this.getToken(PortugolParser.OP_SHIFT_RIGHT, 0);
    };
    OperacaoShiftRightContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoShiftRight) {
            listener.enterOperacaoShiftRight(this);
        }
    };
    OperacaoShiftRightContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoShiftRight) {
            listener.exitOperacaoShiftRight(this);
        }
    };
    // @Override
    OperacaoShiftRightContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoShiftRight) {
            return visitor.visitOperacaoShiftRight(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoShiftRightContext;
}(ExpressaoContext));
exports.OperacaoShiftRightContext = OperacaoShiftRightContext;
var DivisaoContext = /** @class */ (function (_super) {
    __extends(DivisaoContext, _super);
    function DivisaoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    DivisaoContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    DivisaoContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    DivisaoContext.prototype.OP_DIVISAO = function () {
        return this.getToken(PortugolParser.OP_DIVISAO, 0);
    };
    DivisaoContext.prototype.enterRule = function (listener) {
        if (listener.enterDivisao) {
            listener.enterDivisao(this);
        }
    };
    DivisaoContext.prototype.exitRule = function (listener) {
        if (listener.exitDivisao) {
            listener.exitDivisao(this);
        }
    };
    // @Override
    DivisaoContext.prototype.accept = function (visitor) {
        if (visitor.visitDivisao) {
            return visitor.visitDivisao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DivisaoContext;
}(ExpressaoContext));
exports.DivisaoContext = DivisaoContext;
var ExpressaoEntreParentesesContext = /** @class */ (function (_super) {
    __extends(ExpressaoEntreParentesesContext, _super);
    function ExpressaoEntreParentesesContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    ExpressaoEntreParentesesContext.prototype.ABRE_PARENTESES = function () {
        return this.getToken(PortugolParser.ABRE_PARENTESES, 0);
    };
    ExpressaoEntreParentesesContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    ExpressaoEntreParentesesContext.prototype.FECHA_PARENTESES = function () {
        return this.getToken(PortugolParser.FECHA_PARENTESES, 0);
    };
    ExpressaoEntreParentesesContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressaoEntreParenteses) {
            listener.enterExpressaoEntreParenteses(this);
        }
    };
    ExpressaoEntreParentesesContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressaoEntreParenteses) {
            listener.exitExpressaoEntreParenteses(this);
        }
    };
    // @Override
    ExpressaoEntreParentesesContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressaoEntreParenteses) {
            return visitor.visitExpressaoEntreParenteses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressaoEntreParentesesContext;
}(ExpressaoContext));
exports.ExpressaoEntreParentesesContext = ExpressaoEntreParentesesContext;
var OperacaoMenorIgualContext = /** @class */ (function (_super) {
    __extends(OperacaoMenorIgualContext, _super);
    function OperacaoMenorIgualContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoMenorIgualContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoMenorIgualContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoMenorIgualContext.prototype.OP_MENOR_IGUAL = function () {
        return this.getToken(PortugolParser.OP_MENOR_IGUAL, 0);
    };
    OperacaoMenorIgualContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoMenorIgual) {
            listener.enterOperacaoMenorIgual(this);
        }
    };
    OperacaoMenorIgualContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoMenorIgual) {
            listener.exitOperacaoMenorIgual(this);
        }
    };
    // @Override
    OperacaoMenorIgualContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoMenorIgual) {
            return visitor.visitOperacaoMenorIgual(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoMenorIgualContext;
}(ExpressaoContext));
exports.OperacaoMenorIgualContext = OperacaoMenorIgualContext;
var ReferenciaMatrizContext = /** @class */ (function (_super) {
    __extends(ReferenciaMatrizContext, _super);
    function ReferenciaMatrizContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    ReferenciaMatrizContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    ReferenciaMatrizContext.prototype.indiceArray_list = function () {
        return this.getTypedRuleContexts(IndiceArrayContext);
    };
    ReferenciaMatrizContext.prototype.indiceArray = function (i) {
        return this.getTypedRuleContext(IndiceArrayContext, i);
    };
    ReferenciaMatrizContext.prototype.escopoBiblioteca = function () {
        return this.getTypedRuleContext(EscopoBibliotecaContext, 0);
    };
    ReferenciaMatrizContext.prototype.enterRule = function (listener) {
        if (listener.enterReferenciaMatriz) {
            listener.enterReferenciaMatriz(this);
        }
    };
    ReferenciaMatrizContext.prototype.exitRule = function (listener) {
        if (listener.exitReferenciaMatriz) {
            listener.exitReferenciaMatriz(this);
        }
    };
    // @Override
    ReferenciaMatrizContext.prototype.accept = function (visitor) {
        if (visitor.visitReferenciaMatriz) {
            return visitor.visitReferenciaMatriz(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferenciaMatrizContext;
}(ExpressaoContext));
exports.ReferenciaMatrizContext = ReferenciaMatrizContext;
var OperacaoMaiorContext = /** @class */ (function (_super) {
    __extends(OperacaoMaiorContext, _super);
    function OperacaoMaiorContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoMaiorContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoMaiorContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoMaiorContext.prototype.OP_MAIOR = function () {
        return this.getToken(PortugolParser.OP_MAIOR, 0);
    };
    OperacaoMaiorContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoMaior) {
            listener.enterOperacaoMaior(this);
        }
    };
    OperacaoMaiorContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoMaior) {
            listener.exitOperacaoMaior(this);
        }
    };
    // @Override
    OperacaoMaiorContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoMaior) {
            return visitor.visitOperacaoMaior(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoMaiorContext;
}(ExpressaoContext));
exports.OperacaoMaiorContext = OperacaoMaiorContext;
var NumeroInteiroContext = /** @class */ (function (_super) {
    __extends(NumeroInteiroContext, _super);
    function NumeroInteiroContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    NumeroInteiroContext.prototype.INT = function () {
        return this.getToken(PortugolParser.INT, 0);
    };
    NumeroInteiroContext.prototype.HEXADECIMAL = function () {
        return this.getToken(PortugolParser.HEXADECIMAL, 0);
    };
    NumeroInteiroContext.prototype.enterRule = function (listener) {
        if (listener.enterNumeroInteiro) {
            listener.enterNumeroInteiro(this);
        }
    };
    NumeroInteiroContext.prototype.exitRule = function (listener) {
        if (listener.exitNumeroInteiro) {
            listener.exitNumeroInteiro(this);
        }
    };
    // @Override
    NumeroInteiroContext.prototype.accept = function (visitor) {
        if (visitor.visitNumeroInteiro) {
            return visitor.visitNumeroInteiro(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumeroInteiroContext;
}(ExpressaoContext));
exports.NumeroInteiroContext = NumeroInteiroContext;
var CaracterContext = /** @class */ (function (_super) {
    __extends(CaracterContext, _super);
    function CaracterContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    CaracterContext.prototype.CARACTER = function () {
        return this.getToken(PortugolParser.CARACTER, 0);
    };
    CaracterContext.prototype.enterRule = function (listener) {
        if (listener.enterCaracter) {
            listener.enterCaracter(this);
        }
    };
    CaracterContext.prototype.exitRule = function (listener) {
        if (listener.exitCaracter) {
            listener.exitCaracter(this);
        }
    };
    // @Override
    CaracterContext.prototype.accept = function (visitor) {
        if (visitor.visitCaracter) {
            return visitor.visitCaracter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaracterContext;
}(ExpressaoContext));
exports.CaracterContext = CaracterContext;
var ReferenciaParaVariavelContext = /** @class */ (function (_super) {
    __extends(ReferenciaParaVariavelContext, _super);
    function ReferenciaParaVariavelContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    ReferenciaParaVariavelContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    ReferenciaParaVariavelContext.prototype.escopoBiblioteca = function () {
        return this.getTypedRuleContext(EscopoBibliotecaContext, 0);
    };
    ReferenciaParaVariavelContext.prototype.enterRule = function (listener) {
        if (listener.enterReferenciaParaVariavel) {
            listener.enterReferenciaParaVariavel(this);
        }
    };
    ReferenciaParaVariavelContext.prototype.exitRule = function (listener) {
        if (listener.exitReferenciaParaVariavel) {
            listener.exitReferenciaParaVariavel(this);
        }
    };
    // @Override
    ReferenciaParaVariavelContext.prototype.accept = function (visitor) {
        if (visitor.visitReferenciaParaVariavel) {
            return visitor.visitReferenciaParaVariavel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferenciaParaVariavelContext;
}(ExpressaoContext));
exports.ReferenciaParaVariavelContext = ReferenciaParaVariavelContext;
var ValorLogicoContext = /** @class */ (function (_super) {
    __extends(ValorLogicoContext, _super);
    function ValorLogicoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    ValorLogicoContext.prototype.LOGICO = function () {
        return this.getToken(PortugolParser.LOGICO, 0);
    };
    ValorLogicoContext.prototype.enterRule = function (listener) {
        if (listener.enterValorLogico) {
            listener.enterValorLogico(this);
        }
    };
    ValorLogicoContext.prototype.exitRule = function (listener) {
        if (listener.exitValorLogico) {
            listener.exitValorLogico(this);
        }
    };
    // @Override
    ValorLogicoContext.prototype.accept = function (visitor) {
        if (visitor.visitValorLogico) {
            return visitor.visitValorLogico(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValorLogicoContext;
}(ExpressaoContext));
exports.ValorLogicoContext = ValorLogicoContext;
var OperacaoMenorContext = /** @class */ (function (_super) {
    __extends(OperacaoMenorContext, _super);
    function OperacaoMenorContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoMenorContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoMenorContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoMenorContext.prototype.OP_MENOR = function () {
        return this.getToken(PortugolParser.OP_MENOR, 0);
    };
    OperacaoMenorContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoMenor) {
            listener.enterOperacaoMenor(this);
        }
    };
    OperacaoMenorContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoMenor) {
            listener.exitOperacaoMenor(this);
        }
    };
    // @Override
    OperacaoMenorContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoMenor) {
            return visitor.visitOperacaoMenor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoMenorContext;
}(ExpressaoContext));
exports.OperacaoMenorContext = OperacaoMenorContext;
var OperacaoShiftLeftContext = /** @class */ (function (_super) {
    __extends(OperacaoShiftLeftContext, _super);
    function OperacaoShiftLeftContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoShiftLeftContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoShiftLeftContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoShiftLeftContext.prototype.OP_SHIFT_LEFT = function () {
        return this.getToken(PortugolParser.OP_SHIFT_LEFT, 0);
    };
    OperacaoShiftLeftContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoShiftLeft) {
            listener.enterOperacaoShiftLeft(this);
        }
    };
    OperacaoShiftLeftContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoShiftLeft) {
            listener.exitOperacaoShiftLeft(this);
        }
    };
    // @Override
    OperacaoShiftLeftContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoShiftLeft) {
            return visitor.visitOperacaoShiftLeft(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoShiftLeftContext;
}(ExpressaoContext));
exports.OperacaoShiftLeftContext = OperacaoShiftLeftContext;
var IncrementoUnarioPrefixadoContext = /** @class */ (function (_super) {
    __extends(IncrementoUnarioPrefixadoContext, _super);
    function IncrementoUnarioPrefixadoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    IncrementoUnarioPrefixadoContext.prototype.OP_INCREMENTO_UNARIO = function () {
        return this.getToken(PortugolParser.OP_INCREMENTO_UNARIO, 0);
    };
    IncrementoUnarioPrefixadoContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    IncrementoUnarioPrefixadoContext.prototype.indiceArray_list = function () {
        return this.getTypedRuleContexts(IndiceArrayContext);
    };
    IncrementoUnarioPrefixadoContext.prototype.indiceArray = function (i) {
        return this.getTypedRuleContext(IndiceArrayContext, i);
    };
    IncrementoUnarioPrefixadoContext.prototype.enterRule = function (listener) {
        if (listener.enterIncrementoUnarioPrefixado) {
            listener.enterIncrementoUnarioPrefixado(this);
        }
    };
    IncrementoUnarioPrefixadoContext.prototype.exitRule = function (listener) {
        if (listener.exitIncrementoUnarioPrefixado) {
            listener.exitIncrementoUnarioPrefixado(this);
        }
    };
    // @Override
    IncrementoUnarioPrefixadoContext.prototype.accept = function (visitor) {
        if (visitor.visitIncrementoUnarioPrefixado) {
            return visitor.visitIncrementoUnarioPrefixado(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IncrementoUnarioPrefixadoContext;
}(ExpressaoContext));
exports.IncrementoUnarioPrefixadoContext = IncrementoUnarioPrefixadoContext;
var OperacaoELogicoContext = /** @class */ (function (_super) {
    __extends(OperacaoELogicoContext, _super);
    function OperacaoELogicoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoELogicoContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoELogicoContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoELogicoContext.prototype.OP_E_LOGICO = function () {
        return this.getToken(PortugolParser.OP_E_LOGICO, 0);
    };
    OperacaoELogicoContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoELogico) {
            listener.enterOperacaoELogico(this);
        }
    };
    OperacaoELogicoContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoELogico) {
            listener.exitOperacaoELogico(this);
        }
    };
    // @Override
    OperacaoELogicoContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoELogico) {
            return visitor.visitOperacaoELogico(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoELogicoContext;
}(ExpressaoContext));
exports.OperacaoELogicoContext = OperacaoELogicoContext;
var DecrementoUnarioPosfixadoContext = /** @class */ (function (_super) {
    __extends(DecrementoUnarioPosfixadoContext, _super);
    function DecrementoUnarioPosfixadoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    DecrementoUnarioPosfixadoContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    DecrementoUnarioPosfixadoContext.prototype.OP_DECREMENTO_UNARIO = function () {
        return this.getToken(PortugolParser.OP_DECREMENTO_UNARIO, 0);
    };
    DecrementoUnarioPosfixadoContext.prototype.indiceArray_list = function () {
        return this.getTypedRuleContexts(IndiceArrayContext);
    };
    DecrementoUnarioPosfixadoContext.prototype.indiceArray = function (i) {
        return this.getTypedRuleContext(IndiceArrayContext, i);
    };
    DecrementoUnarioPosfixadoContext.prototype.enterRule = function (listener) {
        if (listener.enterDecrementoUnarioPosfixado) {
            listener.enterDecrementoUnarioPosfixado(this);
        }
    };
    DecrementoUnarioPosfixadoContext.prototype.exitRule = function (listener) {
        if (listener.exitDecrementoUnarioPosfixado) {
            listener.exitDecrementoUnarioPosfixado(this);
        }
    };
    // @Override
    DecrementoUnarioPosfixadoContext.prototype.accept = function (visitor) {
        if (visitor.visitDecrementoUnarioPosfixado) {
            return visitor.visitDecrementoUnarioPosfixado(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecrementoUnarioPosfixadoContext;
}(ExpressaoContext));
exports.DecrementoUnarioPosfixadoContext = DecrementoUnarioPosfixadoContext;
var OperacaoOrBitwiseContext = /** @class */ (function (_super) {
    __extends(OperacaoOrBitwiseContext, _super);
    function OperacaoOrBitwiseContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoOrBitwiseContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoOrBitwiseContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoOrBitwiseContext.prototype.OP_OU_BITWISE = function () {
        return this.getToken(PortugolParser.OP_OU_BITWISE, 0);
    };
    OperacaoOrBitwiseContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoOrBitwise) {
            listener.enterOperacaoOrBitwise(this);
        }
    };
    OperacaoOrBitwiseContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoOrBitwise) {
            listener.exitOperacaoOrBitwise(this);
        }
    };
    // @Override
    OperacaoOrBitwiseContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoOrBitwise) {
            return visitor.visitOperacaoOrBitwise(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoOrBitwiseContext;
}(ExpressaoContext));
exports.OperacaoOrBitwiseContext = OperacaoOrBitwiseContext;
var ModuloContext = /** @class */ (function (_super) {
    __extends(ModuloContext, _super);
    function ModuloContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    ModuloContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    ModuloContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    ModuloContext.prototype.OP_MOD = function () {
        return this.getToken(PortugolParser.OP_MOD, 0);
    };
    ModuloContext.prototype.enterRule = function (listener) {
        if (listener.enterModulo) {
            listener.enterModulo(this);
        }
    };
    ModuloContext.prototype.exitRule = function (listener) {
        if (listener.exitModulo) {
            listener.exitModulo(this);
        }
    };
    // @Override
    ModuloContext.prototype.accept = function (visitor) {
        if (visitor.visitModulo) {
            return visitor.visitModulo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuloContext;
}(ExpressaoContext));
exports.ModuloContext = ModuloContext;
var SubtracaoContext = /** @class */ (function (_super) {
    __extends(SubtracaoContext, _super);
    function SubtracaoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    SubtracaoContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    SubtracaoContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    SubtracaoContext.prototype.OP_SUBTRACAO = function () {
        return this.getToken(PortugolParser.OP_SUBTRACAO, 0);
    };
    SubtracaoContext.prototype.enterRule = function (listener) {
        if (listener.enterSubtracao) {
            listener.enterSubtracao(this);
        }
    };
    SubtracaoContext.prototype.exitRule = function (listener) {
        if (listener.exitSubtracao) {
            listener.exitSubtracao(this);
        }
    };
    // @Override
    SubtracaoContext.prototype.accept = function (visitor) {
        if (visitor.visitSubtracao) {
            return visitor.visitSubtracao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubtracaoContext;
}(ExpressaoContext));
exports.SubtracaoContext = SubtracaoContext;
var NegacaoContext = /** @class */ (function (_super) {
    __extends(NegacaoContext, _super);
    function NegacaoContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    NegacaoContext.prototype.OP_NAO = function () {
        return this.getToken(PortugolParser.OP_NAO, 0);
    };
    NegacaoContext.prototype.expressao = function () {
        return this.getTypedRuleContext(ExpressaoContext, 0);
    };
    NegacaoContext.prototype.enterRule = function (listener) {
        if (listener.enterNegacao) {
            listener.enterNegacao(this);
        }
    };
    NegacaoContext.prototype.exitRule = function (listener) {
        if (listener.exitNegacao) {
            listener.exitNegacao(this);
        }
    };
    // @Override
    NegacaoContext.prototype.accept = function (visitor) {
        if (visitor.visitNegacao) {
            return visitor.visitNegacao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NegacaoContext;
}(ExpressaoContext));
exports.NegacaoContext = NegacaoContext;
var OperacaoAndBitwiseContext = /** @class */ (function (_super) {
    __extends(OperacaoAndBitwiseContext, _super);
    function OperacaoAndBitwiseContext(parser, ctx) {
        var _this = _super.call(this, parser, ctx.parentCtx, ctx.invokingState) || this;
        _super.prototype.copyFrom.call(_this, ctx);
        return _this;
    }
    OperacaoAndBitwiseContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    OperacaoAndBitwiseContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    OperacaoAndBitwiseContext.prototype.E_COMERCIAL = function () {
        return this.getToken(PortugolParser.E_COMERCIAL, 0);
    };
    OperacaoAndBitwiseContext.prototype.enterRule = function (listener) {
        if (listener.enterOperacaoAndBitwise) {
            listener.enterOperacaoAndBitwise(this);
        }
    };
    OperacaoAndBitwiseContext.prototype.exitRule = function (listener) {
        if (listener.exitOperacaoAndBitwise) {
            listener.exitOperacaoAndBitwise(this);
        }
    };
    // @Override
    OperacaoAndBitwiseContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacaoAndBitwise) {
            return visitor.visitOperacaoAndBitwise(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacaoAndBitwiseContext;
}(ExpressaoContext));
exports.OperacaoAndBitwiseContext = OperacaoAndBitwiseContext;
var ListaExpressoesContext = /** @class */ (function (_super) {
    __extends(ListaExpressoesContext, _super);
    function ListaExpressoesContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ListaExpressoesContext.prototype.expressao_list = function () {
        return this.getTypedRuleContexts(ExpressaoContext);
    };
    ListaExpressoesContext.prototype.expressao = function (i) {
        return this.getTypedRuleContext(ExpressaoContext, i);
    };
    ListaExpressoesContext.prototype.atribuicaoComposta_list = function () {
        return this.getTypedRuleContexts(AtribuicaoCompostaContext);
    };
    ListaExpressoesContext.prototype.atribuicaoComposta = function (i) {
        return this.getTypedRuleContext(AtribuicaoCompostaContext, i);
    };
    ListaExpressoesContext.prototype.atribuicao_list = function () {
        return this.getTypedRuleContexts(AtribuicaoContext);
    };
    ListaExpressoesContext.prototype.atribuicao = function (i) {
        return this.getTypedRuleContext(AtribuicaoContext, i);
    };
    ListaExpressoesContext.prototype.VIRGULA_list = function () {
        return this.getTokens(PortugolParser.VIRGULA);
    };
    ListaExpressoesContext.prototype.VIRGULA = function (i) {
        return this.getToken(PortugolParser.VIRGULA, i);
    };
    Object.defineProperty(ListaExpressoesContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_listaExpressoes;
        },
        enumerable: false,
        configurable: true
    });
    ListaExpressoesContext.prototype.enterRule = function (listener) {
        if (listener.enterListaExpressoes) {
            listener.enterListaExpressoes(this);
        }
    };
    ListaExpressoesContext.prototype.exitRule = function (listener) {
        if (listener.exitListaExpressoes) {
            listener.exitListaExpressoes(this);
        }
    };
    // @Override
    ListaExpressoesContext.prototype.accept = function (visitor) {
        if (visitor.visitListaExpressoes) {
            return visitor.visitListaExpressoes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListaExpressoesContext;
}(antlr4_1.ParserRuleContext));
exports.ListaExpressoesContext = ListaExpressoesContext;
var EscopoBibliotecaContext = /** @class */ (function (_super) {
    __extends(EscopoBibliotecaContext, _super);
    function EscopoBibliotecaContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    EscopoBibliotecaContext.prototype.ID = function () {
        return this.getToken(PortugolParser.ID, 0);
    };
    EscopoBibliotecaContext.prototype.PONTO = function () {
        return this.getToken(PortugolParser.PONTO, 0);
    };
    Object.defineProperty(EscopoBibliotecaContext.prototype, "ruleIndex", {
        get: function () {
            return PortugolParser.RULE_escopoBiblioteca;
        },
        enumerable: false,
        configurable: true
    });
    EscopoBibliotecaContext.prototype.enterRule = function (listener) {
        if (listener.enterEscopoBiblioteca) {
            listener.enterEscopoBiblioteca(this);
        }
    };
    EscopoBibliotecaContext.prototype.exitRule = function (listener) {
        if (listener.exitEscopoBiblioteca) {
            listener.exitEscopoBiblioteca(this);
        }
    };
    // @Override
    EscopoBibliotecaContext.prototype.accept = function (visitor) {
        if (visitor.visitEscopoBiblioteca) {
            return visitor.visitEscopoBiblioteca(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EscopoBibliotecaContext;
}(antlr4_1.ParserRuleContext));
exports.EscopoBibliotecaContext = EscopoBibliotecaContext;
