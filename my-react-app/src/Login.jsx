import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [role, setRole] = useState('buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!email.trim() || !password.trim()) {
      setMessage({ type: 'danger', text: '❌ Please enter both email and password.' });
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setMessage({ type: 'success', text: `✅ Logged in as ${role}. Redirecting...` });

      setTimeout(() => {
        if (role === 'seller') {
          navigate('/seller/home');
        } else {
          navigate('/CusHomePage');
        }
      }, 1500);
    } catch (error) {
      setMessage({ type: 'danger', text: `❌ ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '100vh' }}>
      <Card style={{ maxWidth: '400px', width: '100%', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <h3 className="text-center mb-4 text-danger">Log In</h3>
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
                disabled={loading}
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
                disabled={loading}
              >
                Seller
              </ToggleButton>
            </ButtonGroup>
          </div>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100 mb-3" disabled={loading}>
              {loading ? 'Logging in...' : `Log In as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
            </Button>
          </Form>

          <div className="text-center">
            <small>
              Don't have an account?{' '}
              <Button variant="link" size="sm" className="p-0" onClick={() => navigate('/SignUp')}>
                Sign up
              </Button>
            </small>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
