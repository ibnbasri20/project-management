import axios from 'axios'
import router from '../../router/index'
export default {
    get_surah({commit},id){
        axios.get('http://staging.quran.com:3000/api/v3/chapters')
        .then((res) => {
            commit('surah', res.data.chapters)
        })
    },
    read({dispatch},id){
        router.push({
             name: 'read_surah', params: { id: id }
        })
        dispatch('get_read_surah', id)
    },
    get_read_surah({commit},id){
        axios.get(`http://staging.quran.com:3000/api/v3/chapters/${id}/verses?recitation=1&translations=21&language=en&text_type=words`)
        .then((res) => {
            commit('get_read_surah',res.data.verses)
        })
    }
}