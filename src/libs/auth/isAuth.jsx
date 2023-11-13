const isAuth = () => {
    const authToken = JSON.parse(localStorage.getItem('tkn'))
    if (authToken){        
        const stringDateTime = authToken['.expires']
        const expiredDate = new Date(stringDateTime)
        const today = new Date()

        const loggedIn = today < expiredDate ? true : false
        return loggedIn
    }
    return false
}

export default isAuth
