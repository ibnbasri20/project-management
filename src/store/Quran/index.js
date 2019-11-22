import actions from './actions'
import mutations from './mutations'

const namespaced = true

const state = {
    surah:[],
    read_surah:[]
}

export default{
    namespaced,
    state,
    actions,
    mutations
}