const getAuthToken = () => {
    const authToken = JSON.parse(localStorage.getItem('tkn'))
    if (authToken) return authToken['access_token']        
    return null
}

export default getAuthToken