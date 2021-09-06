export default {
    fetchUserData({commit}, data) {
        commit('setUserData',data)
    },
    updateUser({commit}, data) {
        commit('updateUserData',data)
    }
};