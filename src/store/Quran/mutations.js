export default{
    surah : (state, payload) => {
        state.surah = payload
    },
    get_read_surah: (state, payload) => {
        state.read_surah = payload
    }
}