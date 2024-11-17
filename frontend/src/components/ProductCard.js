import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2 style={styles.name}>{product.name}</h2>
      <p style={styles.description}>{product.description}</p>
      <p style={styles.price}>${product.price}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    width: '200px',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '8px',
  },
  name: {
    fontSize: '1.2rem',
  },
  description: {
    fontSize: '0.9rem',
    color: '#555',
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
  },
};

export default ProductCard;
