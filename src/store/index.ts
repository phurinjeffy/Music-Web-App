import { createStore } from 'vuex';

interface Music {
  index: number;
  name: string;
  artist: string;
  album: string;
  file: any;
  cover: any;
}

interface State {
  musics: Music[];
  bookMarksMusicsIndex: number[];
  activeMusic: { index: number; music: Music };
  isPlay: boolean;
  activePlayList: string;
}

export default createStore({
  state: (): State => ({
    musics: [
      { index: 0, name: 'I Always Wanna Die (Sometimes)', artist: 'The 1975', album: 'A Brief Inquiry into Online Relationships', file: 'src/assets/musics/always-wanna-die.mp3', cover: 'src/assets/musics/sample.jpeg' },
      { index: 1, name: 'TEST', artist: 'TEST', album: 'TEST', file: 'src/assets/musics/always-wanna-die.mp3', cover: 'src/assets/musics/sample.jpeg' },
    ],
    bookMarksMusicsIndex: JSON.parse(localStorage.getItem('bookMarks') || '[]'),
    activeMusic: { index: -1, music: {} as Music },
    isPlay: false,
    activePlayList: 'all',
  }),
  mutations: {
    setActiveMusic(state: State, music: Music): void {
      state.activeMusic = { index: music.index, music };
    },
  },
});