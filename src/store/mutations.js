export default {
  setUserData(state, data) {
    state.user = {
      displayName: data.displayName,
      email: data.email,
      photoURL: data.photoURL,
      emailVerified: data.emailVerified,
      phoneNumber: data.phoneNumber,
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      uid: data.uid,
    };
  },
  updateUser(state, modifiedData) {
    state.user = {...state.user,...modifiedData}
  }
};
