import { Autocomplete } from "./UI/autocomplete";
import { Emote } from "./Game/emote";
import { UI } from "./UI.js";
import { User } from "./user.js";
export declare class Game {
    channel: string;
    emotesList: Emote[];
    emoteNames: string[];
    emoteAtual: Emote;
    acertos: number;
    acertosSeguidos: number;
    vidasRestantes: number;
    autocomplete: Autocomplete;
    user: User;
    ui: UI;
    constructor(user: User);
    getEmotenames(emote: Emote[]): void;
    showEmoteGame: (emote: Emote) => void;
    returnToHome: () => void;
    restartGame(): void;
    getEmotesGame: (channel: string) => Promise<void>;
}