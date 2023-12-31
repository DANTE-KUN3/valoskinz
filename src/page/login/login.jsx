import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import './login.css';
import { useAuth } from '../../components/context/AuthContext';
import { Link,useNavigate} from 'react-router-dom';



export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
 
  const { login,currentUser} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  async function handleSubmit(e) {
    e.preventDefault();
    // Check if password and confirm password match before signup
   

   

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
      
      // Handle successful signup if needed
    } catch (error) {
      setError('failed to sign in');
      // Handle specific error cases or display error messages
    }

    setLoading(false);
  }

  return (
  
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'>Welcome back!!</h2>
               {currentUser && currentUser.email}
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} required />
                </Form.Group>
               
                <Button disabled={loading} className="w-100 text-center mt-2" type='submit'>Login</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/Signup">Signup</Link>
          </div>
        </div>
      </Container>
   
  );
};

export default Login;
