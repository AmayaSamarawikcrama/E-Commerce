import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

export default function SignUp() {
  const [role, setRole] = useState('buyer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  // ✅ Google Auth
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Example: save user role somewhere
      console.log('Google User:', user.displayName, user.email, role);

      setMessage({ type: 'success', text: `✅ Signed up with Google as ${role}! Redirecting...` });
      setTimeout(() => navigate('/CusHomePage'), 2000);
    } catch (error) {
      console.error(error);
      setMessage({ type: 'danger', text: '❌ Google sign-in failed. Please try again.' });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setMessage({ type: 'danger', text: '❌ Please fill in all fields.' });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: 'danger', text: '❌ Passwords do not match.' });
      return;
    }

    setMessage({ type: 'success', text: `✅ ${role.charAt(0).toUpperCase() + role.slice(1)} account created! Redirecting...` });
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '100vh' }}>
      <Card style={{ maxWidth: '400px', width: '100%', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <h3 className="text-center mb-4 text-danger">Sign Up</h3>
          {message && <Alert variant={message.type}>{message.text}</Alert>}

          <div className="text-center mb-3">
            <ButtonGroup>
              <ToggleButton
                id="buyer-radio"
                type="radio"
                variant={role === 'buyer' ? 'danger' : 'outline-danger'}
                name="role"
                value="buyer"
                checked={role === 'buyer'}
                onChange={(e) => setRole(e.currentTarget.value)}
              >
                Buyer
              </ToggleButton>
              <ToggleButton
                id="seller-radio"
                type="radio"
                variant={role === 'seller' ? 'danger' : 'outline-danger'}
                name="role"
                value="seller"
                checked={role === 'seller'}
                onChange={(e) => setRole(e.currentTarget.value)}
              >
                Seller
              </ToggleButton>
            </ButtonGroup>
          </div>

          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100 mb-3">
              Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
            </Button>
          </Form>

          <div className="text-center mb-3">
            <span className="text-muted">or</span>
          </div>

          <Button variant="outline-danger" className="w-100 mb-3" onClick={handleGoogleSignIn}>
            <FaGoogle className="me-2" /> Sign Up with Google
          </Button>

          <div className="text-center">
            <small>
              Already have an account?{' '}
              <Button variant="link" size="sm" className="p-0" onClick={() => navigate('/login')}>
                Log in
              </Button>
            </small>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
