import { Form, FloatingLabel, Button} from 'react-bootstrap'
// import  { useState } from 'react'

const Login = () => {
    // const [email, setEmail] = useState(null)
    // const [password, setPassword] = useState(null)

    return (
        <body className="text-center">
            <main className="form-signin">
                <Form>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <FloatingLabel className="form-floating" controlId="floatingEmail" label="Enter your email">
                        <Form.Control id="email" type="email" className="form-control" placeholder="Email Address"></Form.Control>
                    </FloatingLabel>
                    <FloatingLabel className="form-floating" controlId="floatingPassword" label="Password">
                        <Form.Control id="password" type="password" className="form-control" placeholder="Password"></Form.Control>
                    </FloatingLabel>
                    <Button className="w-100 btn btn-lg btn-primary" type="button">Sign in</Button>
                </Form>
            </main>
        </body>);
    


    
  



    // return (
    //     <div>            
    //         <header className="w-100 min-vh-100"></header>
    //         <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh">
    //             <div className="rounded">
    //                 <Form>
    //                 <Form.Group className="mb-3" controlId="formBasicEmail">
    //                 <Form.Label>Email address</Form.Label>
    //                 <Form.Control type="email" placeholder="Enter email" />
    //                 <Form.Text className="text-muted">
    //                 </Form.Text>
    //                 </Form.Group>
            
    //                 <Form.Group className="mb-3" controlId="formBasicPassword">
    //                 <Form.Label>Password</Form.Label>
    //                 <Form.Control type="password" placeholder="Password" />
    //                 </Form.Group>
    //                 <Button variant="primary" type="submit">
    //                 Submit
    //                 </Button>
    //                 </Form>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Login