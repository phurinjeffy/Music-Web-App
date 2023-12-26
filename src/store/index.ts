import { createStore } from 'vuex';

export interface Music {
  index: number;
  name: string;
  artist: string;
  album: string;
  file: any;
  cover: any;
}

export interface State {
  musics: Music[];
  bookMarksMusicsIndex: number[];
  activeMusic: { index: number; music: Music };
  isPlay: boolean;
  activePlayList: string;
  isMenu: boolean;
}

export default createStore({
  state: (): State => ({
    musics: [
      { index: 0, name: 'I Always Wanna Die (Sometimes)', artist: 'The 1975', album: 'A Brief Inquiry into Online Relationships', file: 'src/assets/musics/always-wanna-die.mp3', cover: 'src/assets/musics/1975.jpeg' },
      { index: 1, name: 'ฤดู', artist: 'Dept', album: 'Cycle of Love', file: 'src/assets/musics/dept.mp3', cover: 'src/assets/musics/sample.jpeg' },
    ],
    bookMarksMusicsIndex: JSON.parse(localStorage.getItem('bookMarks') || '[]'),
    activeMusic: { index: -1, music: {} as Music },
    isPlay: false,
    activePlayList: 'all',
    isMenu: true,
  }),
  mutations: {
    toggleMenu(state: State): void {
      state.isMenu = !state.isMenu;
    },
    setActiveMusic(state: State, music: Music): void {
      state.activeMusic = { index: music.index, music };
    },
    updatePlayStatus(state: State): void {
      state.isPlay = !state.isPlay;
    },
    addBookMarkMusic(state: State, index: number): void {
      state.bookMarksMusicsIndex.push(index);
      localStorage.setItem('bookMarks', JSON.stringify(state.bookMarksMusicsIndex));
    },
    removeBookMarkMusic(state: State, index: number): void {
      state.bookMarksMusicsIndex = state.bookMarksMusicsIndex.filter(item => item !== index);
      localStorage.setItem('bookMarks', JSON.stringify(state.bookMarksMusicsIndex));
    },
    updatePlayList(state: State, playList: string): void {
      state.activePlayList = playList;
    },
  },
});