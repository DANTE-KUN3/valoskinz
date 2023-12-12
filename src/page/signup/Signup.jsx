import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import './signup.css';
import { useAuth } from '../../components/context/AuthContext';
import { Link } from 'react-router-dom';


export const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmRef = useRef();
  const { signup,currentUser} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // Check if password and confirm password match before signup
    if (passwordRef.current.value !== passwordconfirmRef.current.value) {
      // Handle password mismatch error (display error message, etc.)
      return setError('Passwords do not match');
    }

    try {
      
    setError('');
    setLoading(true);

      await signup(emailRef.current.value, passwordRef.current.value);
      // Handle successful signup if needed
    } catch (error) {
      setError('failed to create an account');
      // Handle specific error cases or display error messages
    }

    setLoading(false);
  }

  return (
    <>
  
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'>Sign Up</h2>
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
                <Form.Group id="password-confirm">
                  <Form.Label>Password confirm</Form.Label>
                  <Form.Control type='password' ref={passwordconfirmRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100 text-center mt-2" type='submit'>Sign up</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/Login">Log in</Link>
          </div>
        </div>
      </Container>
      </>
   
  );
};

export default Signup;
