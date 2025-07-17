import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';

export default function SellerHome() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Red Summer Dress',
      Category: 'Women',
      price: 49.99,
      description: 'A beautiful summer dress in bright red.',
      image: 'https://i.pinimg.com/736x/82/e7/04/82e7042a7e5aafcd91482880905bc27e.jpg',
    },
    {
      id: 2,
      title: 'Blue Jeans',
      Category: 'Women',
      price: 39.99,
      description: 'Comfortable and stylish blue jeans.',
      image: 'https://i.pinimg.com/736x/54/24/03/54240377c738fd6e2774958cabbe52a1.jpg',
    },
    {
      id: 3,
      title: 'Leather Wallet',
      Category: 'Accessories',
      price: 19.99,
      description: 'Classic leather wallet for everyday use.',
      image: 'https://i.pinimg.com/736x/49/42/9f/49429fbb17d005a92fe379d33ff5d105.jpg',
    },
  ]);

  // Modals
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    Category: '',
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    Category: '',
  });

  const categories = ['Women', 'Men', 'Kids', 'Accessories'];

  // Add Product
  const handleAddProduct = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setNewProduct({ title: '', price: '', description: '', image: '', Category: '' });
  };

  const handleSaveNewProduct = () => {
    if (!newProduct.title.trim() || !newProduct.price || !newProduct.Category) {
      alert('Please enter a title, price, and category.');
      return;
    }

    const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const productToAdd = {
      id: newId,
      title: newProduct.title,
      price: parseFloat(newProduct.price),
      description: newProduct.description,
      image: newProduct.image || 'https://via.placeholder.com/300x300?text=New+Product',
      Category: newProduct.Category,
    };

    setProducts([...products, productToAdd]);
    handleCloseAddModal();
  };

  // View
  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  // Edit
  const handleEditModal = () => {
    setEditProduct({
      title: selectedProduct.title,
      price: selectedProduct.price,
      description: selectedProduct.description,
      image: selectedProduct.image,
      Category: selectedProduct.Category,
    });
    setShowModal(false);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditProduct({ title: '', price: '', description: '', image: '', Category: '' });
  };

  const handleSaveEdit = () => {
    setProducts(prev =>
      prev.map(p =>
        p.id === selectedProduct.id
          ? {
              ...p,
              title: editProduct.title,
              price: parseFloat(editProduct.price),
              description: editProduct.description,
              image: editProduct.image,
              Category: editProduct.Category,
            }
          : p
      )
    );
    setShowEditModal(false);
    setSelectedProduct(null);
  };

  // Delete
  const handleDeleteModal = () => {
    setShowModal(false);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      setProducts(prev => prev.filter(p => p.id !== selectedProduct.id));
      setSelectedProduct(null);
      setShowDeleteModal(false);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedProduct(null);
  };

  return (
    <>
     <div className="seller-home-page bg-light">

      <Container className="my-5" style={{ maxWidth: '1200px' }}>
        <h1 className="text-center mb-4 text-danger">Welcome Seller!</h1>
        <p className="text-center mb-4">
          Manage your products, view listings, and grow your store on <strong>Be Big</strong>.
        </p>

        <div className="text-center mb-5">
          <Button variant="danger" onClick={handleAddProduct}>
            Add New Product
          </Button>
        </div>

        <h3 className="mb-4 text-danger">Your Products</h3>
        <Row className="justify-content-center">
          {products.length === 0 ? (
            <p className="text-center text-danger">You have no products listed.</p>
          ) : (
            products.map(item => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4 ">
                <Card style={{ width: '18rem', boxShadow: '0 2px 5px rgba(1, 1, 1, 0.1)' }}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="text-danger">{item.title}</Card.Title>
                    <Card.Text>
                      <strong>${item.price.toFixed(2)}</strong><br/>
                      <em className="text-muted">{item.Category}</em>
                    </Card.Text>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleViewProduct(item)}
                    >
                      View
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    
      <Footer />
          </div>
      {/* Add New Product Modal */}
      <Modal show={showAddModal} onHide={handleCloseAddModal} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={newProduct.Category}
                onChange={(e) => setNewProduct({ ...newProduct, Category: e.target.value })}
              >
                <option value="">Select Category</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>Cancel</Button>
          <Button variant="danger" onClick={handleSaveNewProduct}>Save Product</Button>
        </Modal.Footer>
      </Modal>

      {/* View Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static">
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="text-danger">{selectedProduct.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <h5 className="text-danger">${selectedProduct.price.toFixed(2)}</h5>
              <p className="text-muted">Category: {selectedProduct.Category}</p>
              <p>{selectedProduct.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
              <Button variant="outline-danger" onClick={handleEditModal}>Edit</Button>
              <Button variant="danger" onClick={handleDeleteModal}>Delete</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                type="text"
                value={editProduct.title}
                onChange={(e) => setEditProduct({ ...editProduct, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                value={editProduct.price}
                onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={editProduct.Category}
                onChange={(e) => setEditProduct({ ...editProduct, Category: e.target.value })}
              >
                <option value="">Select Category</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editProduct.description}
                onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={editProduct.image}
                onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>Cancel</Button>
          <Button variant="danger" onClick={handleSaveEdit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleCancelDelete} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Are you sure you want to delete <strong>{selectedProduct?.title}</strong>?</p>
          <p className="text-muted">This action cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>Cancel</Button>
          <Button variant="danger" onClick={handleConfirmDelete}>Yes, Delete</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  );
}
