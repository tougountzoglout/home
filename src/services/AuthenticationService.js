

class AuthenticationService {





    login (username, password)  {
        sessionStorage.setItem('username', username)
    }

    checklogin()  {

        if (sessionStorage.getItem('username') === null)
            return false
        else
            return true
    }

    logout () { sessionStorage.removeItem('username') }

}

export default new AuthenticationService()