var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Autocomplete } from "./UI/autocomplete";
import { UI } from "./UI.js";
export class Game {
    constructor(user) {
        this.showEmoteGame = (emote) => {
            let output = `
        <a class="card">
    
            <img class="card--image4" src=${emote.image} alt=${emote.name} />
    
        </a>
        `;
            this.ui.app.innerHTML += output;
        };
        this.returnToHome = () => {
            this.acertos = 0;
            this.vidasRestantes = 4;
            this.ui.clear(this.ui.showAcertos);
            this.ui.clear(this.ui.app);
            this.ui.clear(this.ui.loading);
            this.ui.clear(this.ui.invalidChannel);
            this.ui.hideElement(this.ui.emoteTryContainer);
            this.ui.hideElement(this.ui.vidas.vidasUI);
            this.ui.showElement(this.user.recordeElement);
            this.ui.showElement(this.ui.peepoThink);
            this.ui.showElement(this.user.medalhas);
        };
        this.getEmotesGame = (channel) => __awaiter(this, void 0, void 0, function* () {
            console.log(channel);
            this.acertos = 0;
            try {
                const data = yield fetch(
                //pega os emotes do canal especificado
                `https://emotes.adamcy.pl/v1/channel/${channel}/emotes/twitch.7tv.bttv`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const emotes = yield data.json();
                //pega os emotes do canal especificado
                this.emotesList.length = 0;
                this.emoteNames.length = 0;
                emotes.forEach((emote) => {
                    //adicionar cada emote no array emotesList
                    const emoteData = {
                        name: emote.code,
                        image: emote.urls[2].url,
                    };
                    this.emotesList.push(emoteData);
                });
                this.ui.hideElement(this.user.recordeElement);
                this.getEmotenames(this.emotesList);
                this.emoteAtual = this.emotesList[Math.floor(Math.random() * this.emotesList.length)];
                this.autocomplete.loadEmotesList(this.emotesList);
                this.ui.clear(this.ui.app);
                this.ui.clear(this.ui.loading);
                this.showEmoteGame(this.emoteAtual);
                this.ui.showEmoteTry(this.autocomplete);
                this.ui.showAcertos.innerHTML = `${this.acertos}`;
                this.ui.showElement(this.ui.vidas.vidasUI);
            }
            catch (error) {
                console.log(error);
                this.ui.clear(this.ui.loading);
                this.ui.clear(this.ui.app);
                this.ui.clear(this.ui.showAcertos);
                this.ui.hideElement(this.ui.emoteTryContainer);
                this.ui.hideElement(this.ui.vidas.vidasUI);
                this.ui.showInvalidChannel(channel, this.ui.invalidChannel);
                this.ui.showElement(this.ui.peepoThink);
                this.ui.showElement(this.user.recordeElement);
            }
        });
        this.channel = "";
        this.emotesList = [];
        this.emoteNames = [];
        this.emoteAtual = { name: "", image: "" };
        this.acertos = 0;
        this.acertosSeguidos = 0;
        this.vidasRestantes = 4;
        this.ui = new UI();
        this.user = user;
        this.autocomplete = new Autocomplete(this);
        this.ui.inputChannel.addEventListener("change", () => {
            this.restartGame();
            this.ui.hideElement(this.ui.subtitle2);
        });
        this.ui.inputChannel.addEventListener("focus", () => {
            this.ui.showElement(this.ui.subtitle2);
        });
        this.ui.inputChannel.addEventListener("blur", () => {
            this.ui.hideElement(this.ui.subtitle2);
        });
    }
    getEmotenames(emote) {
        emote.forEach((emote) => {
            this.emoteNames.push(emote.name);
        });
    }
    restartGame() {
        this.emotesList.length = 0;
        this.acertos = 0;
        this.vidasRestantes = 4;
        this.ui.hideElement(this.ui.peepoThink);
        this.ui.hideElement(this.user.medalhas);
        this.ui.showLoading(this.ui.inputChannel.value, this.ui.loading);
        this.getEmotesGame(this.ui.inputChannel.value);
        this.ui.clear(this.ui.invalidChannel);
        this.ui.clear(this.ui.subtitle);
        this.ui.clear(this.ui.app);
        this.ui.vidas.resetVidas();
    }
}
//# sourceMappingURL=game.js.map