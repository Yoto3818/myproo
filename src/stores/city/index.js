const state = {
        nm : window.localStorage.getItem("nowNm") || "北京",
        id : window.localStorage.getItem("nowId") || 1
}
const actions = {

}
const mutations = {
    //   payload是commit传过来的参数
        CITY_INFO(state,payload){
            state.nm = payload.nm,
            state.id = payload.id
        }
}

export default {
    namespaced : true,
    state,
    actions,
    mutations
}