import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';

export default function Notification() {
  // Dummy notification data
  const notifications = [
    {
      id: 1,
      title: 'Order Shipped',
      message: 'Your order #1234 has been shipped and is on its way!',
      date: 'July 8, 2025',
    },
    {
      id: 2,
      title: 'Exclusive Offer!',
      message: 'Get 20% off on your next purchase. Limited time only!',
      date: 'July 7, 2025',
    },
    {
      id: 3,
      title: 'Account Update',
      message: 'Your account details were successfully updated.',
      date: 'July 6, 2025',
    },
    {
      id: 4,
      title: 'Welcome to Be Big!',
      message: 'Thank you for joining our store. Happy shopping!',
      date: 'July 5, 2025',
    },
  ];

  return (
    <>
    <div className="luxury-home-page" bg color='white'>
      <NavBar />

      <Container className="my-5" style={{ maxWidth: '900px' }}>
        <h1 className="text-center mb-4 " style={{ color: '#FF5656' }}>Notifications</h1>
        <p className="text-center mb-5">
          Stay up to date with your latest notifications and special offers.
        </p>

        <Row className="justify-content-center">
          {notifications.map((note) => (
            <Col key={note.id} xs={12} className="mb-3">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-2" style={{ color: '#FF5656' }}>{note.title}</Card.Title>
                  <Card.Text>{note.message}</Card.Text>
                  <small className="text-muted">{note.date}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
    </>
  );
}
