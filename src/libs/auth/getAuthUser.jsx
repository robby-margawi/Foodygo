const getAuthUser = () => {
    const authToken = JSON.parse(localStorage.getItem('tkn'))
    if (authToken) {
        return { 
            'name' : authToken['name'], 
            'email' : authToken['email']
        }
    }
    return null
}

export default getAuthUser