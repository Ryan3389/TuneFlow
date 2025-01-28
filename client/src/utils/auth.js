class AuthService {
    // Store user token in local storage and redirect them to the home page
    login(idToken) {
        localStorage.setItem("id_token", idToken)
        window.location.assign("/")
    }

    logout() {
        localStorage.removeItem("id_token")
        window.location.assign("/")
    }


    loggedIn() {
        const token = localStorage.getItem("id_token")
        return token ? true : false
    }
}

export default new AuthService()