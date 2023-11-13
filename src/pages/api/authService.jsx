const SignInUser = async (request, response) => {

    const method = 'POST'    

    let formBody = []
    for (var property in request) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(request[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    // formBody = formBody.join("&");

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    }

    try{    
        const url = 'https://favorestodevapi.azurewebsites.net/token'

        const response = await fetch(url, options)
        const data = await response.json()
        .then(console.log(data))     
    
        return response.end(JSON.stringify(data))
    }
    catch(error)
    {
        return response.end(JSON.stringify({'error': error.message}))
    }
}

export default SignInUser