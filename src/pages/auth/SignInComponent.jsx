import { useState } from 'react';
import { Form, FloatingLabel, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import { json } from 'react-router-dom';
// import { useState } from 'react';

async function SignInUser (request){

    const method = 'POST'    

    const formBody = Object.keys(request).map(
        key => encodeURIComponent(key) + '=' + encodeURIComponent(request[key])).join('&');

    const options = {
        mode: 'cors',
        method: method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Access-Control-Allow-Origin': 'foodygo'
        },
        body: formBody
    }

    try{    
        // const url = 'https://localhost:63916/token'

        const url = 'https://favorestodevapi.azurewebsites.net/token'

        return await fetch(url, options)
        .then(data => data.json())    
    }
    catch(error)
    {
        return JSON.stringify({'error': error.message})
    }
}

function SignInComponent () {
    // const [form, setForm] = useState({})
    // const [errors, setErrors] = useState({})

    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const HandleSubmit = async (event) => {
        event.preventDefault()

        const credentials = {
            'grant_type': 'password',
            'username' : email,
            'password' : password,
            'client_id' : '64001261-259A-4BB9-A60E-2179DF74FC58'
        } 
        try
        {
            await SignInUser(credentials)
            .then (response => {
                if ('access_token' in response) {
                    const json = JSON.stringify(response)
                    localStorage.setItem('tkn', json)  
                    console.log(json)
                    navigate("/")
                } else if ('message' in response) {
                    alert(response.message)
                }
                new useNavigate("/")
            })    
            
        }
        catch(err)
        {
            console.log(err.message)
        }
    }

    return (        
            <main className="form-signin w-100 m-auto">
                <Form noValidate onSubmit={HandleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <FloatingLabel className="form-floating" controlId="floatingEmail" label="Enter your email">
                        <Form.Control type="email" className="form-control" placeholder="Email Address" required
                        onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </FloatingLabel>
                    <FloatingLabel className="form-floating" controlId="floatingPassword" label="Password">
                        <Form.Control type="password" className="form-control" placeholder="Password" required
                        onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </FloatingLabel>
                    <Button className="w-100 btn btn-lg btn-primary my-3" type="submit">Sign in</Button>
                </Form>
            </main>
        );
    }

export default SignInComponent