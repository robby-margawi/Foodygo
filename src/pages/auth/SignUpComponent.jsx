import { Form, FloatingLabel, Button } from 'react-bootstrap'
const SignUpComponent = () => {

    return (
        <div className='d-flex justify-content-center align-item-center'>
        <main className="form-signin">
            <Form>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <FloatingLabel className="form-floating" controlId="floatingEmail" label="Enter your email">
                    <Form.Control type="email" className="form-control" placeholder="Email Address"></Form.Control>
                </FloatingLabel>
                <FloatingLabel className="form-floating" controlId="floatingPassword" label="Password">
                    <Form.Control type="password" className="form-control" placeholder="Password"></Form.Control>
                </FloatingLabel>
                <Button className="w-100 btn btn-lg btn-primary my-3" type="button">Sign in</Button>
            </Form>
        </main>
        </div>
    );
}

export default SignUpComponent