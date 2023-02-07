declare const app: HTMLElement;
declare const loading: HTMLElement;
declare const showAcertos: HTMLElement;
declare const showTentativas: HTMLElement;
declare const score: HTMLElement;
declare const container2: HTMLElement;
declare const invalidChannel: HTMLElement;
declare const emotesList: Emote[];
declare const emoteNames: string[];
declare var tentativas: number;
declare var emoteAtual: Emote;
declare var acertos: number;
declare const inputChannel: HTMLInputElement;
declare const inputEmote: HTMLInputElement;
declare function showEmoteTry(): void;
interface Emote {
    name: string;
    image: string;
}
interface GameRound {
    emotes: Emote[];
    acertos: number;
    tentativas: number;
    completo: boolean;
}
declare const getEmotesGame: (channel: string) => Promise<void>;
declare const continueGame: (emotesList: Emote[]) => void;
declare const gameplay: () => void;
declare const showEmote: (emote: Emote) => void;
declare const showEmoteGame: (emote: Emote) => void;
declare const showEmoteGame2: (emote: Emote) => void;
declare const showEmoteGame3: (emote: Emote) => void;
declare const showEmoteGame4: (emote: Emote) => void;
declare const showLoading: (channel: string) => void;
declare const showInvalidChannel: (channel: string) => void;
declare const getEmotenames: (emote: Emote[]) => void;
declare const clear: (container: HTMLElement) => void;
