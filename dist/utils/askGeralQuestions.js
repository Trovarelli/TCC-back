"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askGeralQuestions = void 0;
const axios_1 = __importDefault(require("axios"));
function askGeralQuestions(sourceId) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = {
            headers: {
                "x-api-key": process.env.CHATPDF_API_KEY,
                "Content-Type": "application/json",
            },
        };
        const data = {
            sourceId,
            "messages": [
                {
                    "role": "user",
                    "content": `Esse é um curriculo de uma pessoa, quero que voce pegue o nome, email e telefone (esse campo deve ser um array), genero (se nao for informado, leve em consideração o nome, se é um nome feminino ou masculino, ele deve ser representado pela siga M ou F), e se a pessoa se identifica como LGBTQ  e se a pessoa é uma PCD nivel profissional, caso nao seja informado, leve em consideração o tempo de experiencia na area (sendo que estagiario é 0 a 1 ano de experiencia, junior de 6 meses a 2 anos, pleno de 2 a 4 anos e senior a cima de 4 anos) e escreva como se fosse um json no seguinte formato:
        {
          nome?: string
          idade: number
          favorito?: boolean
          experiencia?: string[] 'esse campo deve ser um resumo da experiencia profissional da pessoa, precisa ser um array de string'
          telefone?: string[]
          genero?: string
          pcd?: boolean
          lgbtq?: boolean
          nivelProfissional?: 'estagiario' | 'junior' | 'pleno' | 'senior'
        }

        DETALHE IMPORTANTE: Caso alguma informação nao seja encontrada, apenas nao colocar no json, nao precisa colocar como null ou undefined, e voce nao deve dizer mais nada, apenas pegar as informações que precisa e retornar igual ao modelo a cima
        `
                }
            ]
        };
        const retorno = axios_1.default
            .post("https://api.chatpdf.com/v1/chats/message", data, config)
            .then((response) => {
            var _a, _b, _c, _d, _e, _f;
            console.log(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.content.split('')[0]) !== '{' ? '{' + ((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.content.split('{')[1]) : (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.content);
            return JSON.parse(((_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.content.split('')[0]) !== '{' ? '{' + ((_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e.content.split('{')[1]) : (_f = response === null || response === void 0 ? void 0 : response.data) === null || _f === void 0 ? void 0 : _f.content);
        })
            .catch((error) => {
            throw new Error(error.message);
        });
        return retorno;
    });
}
exports.askGeralQuestions = askGeralQuestions;
//# sourceMappingURL=askGeralQuestions.js.map