export default {
    loggedIn(state) {
        const isUserLogged = state.user.uid ? true : false
        return isUserLogged
    }
};