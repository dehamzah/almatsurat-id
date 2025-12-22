// export const BASE_AUDIO_URL = "https://github.com/dehamzah/almatsurat-audio/raw/refs/heads/main/aac";
export const BASE_AUDIO_URL = "/audio";


export interface AudioTrack {
    id: string;
    label: string;
    filename: string;
    mode: 'pagi' | 'petang';
    size: 'sughro' | 'kubro';
}

export const AUDIO_TRACKS: AudioTrack[] = [
    {
        id: "pagi-sughro",
        label: "Dzikir Pagi Sughro",
        filename: "al_matsurat_pagi_sughro.m4a",
        mode: "pagi",
        size: "sughro"
    },
    {
        id: "pagi-kubro",
        label: "Dzikir Pagi Kubro",
        filename: "al_matsurat_pagi_kubro.m4a",
        mode: "pagi",
        size: "kubro"
    },
    {
        id: "petang-sughro",
        label: "Dzikir Petang Sughro",
        filename: "al_matsurat_petang_sughro.m4a",
        mode: "petang",
        size: "sughro"
    },
    {
        id: "petang-kubro",
        label: "Dzikir Petang Kubro",
        filename: "al_matsurat_petang_kubro.m4a",
        mode: "petang",
        size: "kubro"
    }
];

export function getAudioUrl(track: AudioTrack): string {
    return `${BASE_AUDIO_URL}/${track.filename}`;
}

export function getAudioUrlById(id: string): string | null {
    const track = AUDIO_TRACKS.find(t => t.id === id);
    if (!track) return null;
    return getAudioUrl(track);
}
