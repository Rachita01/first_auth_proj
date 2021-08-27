import auth0 from 'auth0-js';
import history from './history';
export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-0bfrswgs.us.auth0.com',
        clientID: '3sLdqdxajqY0zTTMmPTQVm9olOtmKM9O',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })
    
    login = () => {
    this.auth0.authorize()
    }

    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            console.log(authResult)
            if(authResult){
                localStorage.setItem('access_token', authResult.accessToken)
                localStorage.setItem('id_token',authResult.idToken)

                let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
                localStorage.setItem('expiresAt',expiresAt)
                setTimeout(() => {history.replace('/authcheck')}, 200);
            }
            else{
                console.log(err)
            }
        })
    }


    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
        return new Date().getTime() < expiresAt
    }

    logout = () => {
        
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expiresAt')
        setTimeout(() => { history.replace('/authcheck') }, 200);
    }
}