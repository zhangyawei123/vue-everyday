export default {
  state: {
    txt: 'mainState words'
  },
  getters: {
    mainTxt: state => {
      return state.txt + ' mian的getter'
    }
  },
  mutations: {}
}
