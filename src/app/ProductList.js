// ProductList.js
'use client'
import React, { useState } from 'react';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px', // Espaciado entre productos
  marginBottom: '20px',
});

const ProductInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ProductTitle = styled('div')({
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '5px',
});

const ProductImage = styled('img')({
  width: '100%',
  maxWidth: '150px',
  borderRadius: '8px',
  marginBottom: '10px',
});

const ProductPrice = styled('div')({
  color: '#4caf50',
  fontSize: '14px',
  marginTop: '5px',
});

const Discount = styled('div')({
  color: '#f44336',
  fontSize: '14px',
  marginTop: '5px',
});

const Actions = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Pagination = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
});

const ProductList = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  // Páginas de la paginación (simuladas)
  const pages = Array.from({ length: 5 }, (_, i) => i + 1);

  const products = [
    { id: 1, name: 'Producto 1', image: 'https://via.placeholder.com/150?text=Product1', price: 20.0, discount: 10 },
    { id: 2, name: 'Producto 2', image: 'https://via.placeholder.com/150?text=Product2', price: 15.0, discount: 5 },
    { id: 3, name: 'Producto 3', image: 'https://via.placeholder.com/150?text=Product3', price: 25.0, discount: 15 },
    { id: 4, name: 'Producto 4', image: 'https://via.placeholder.com/150?text=Product4', price: 18.0, discount: 8 },
    { id: 5, name: 'Producto 5', image: 'https://via.placeholder.com/150?text=Product5', price: 22.0, discount: 12 },
    { id: 6, name: 'Producto 6', image: 'https://via.placeholder.com/150?text=Product6', price: 30.0, discount: 20 },
    // Agregar más productos según sea necesario
  ];

  return (
    <div>
      <ProductContainer>
        {products.map((product) => (
          <ProductInfo key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <div>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <Discount>Descuento: {product.discount}%</Discount>
            </div>
            <Actions>
              <IconButton color="primary" onClick={handleAddToCart}>
                <AddIcon />
              </IconButton>
              <span>{cartCount}</span>
              <IconButton color="secondary" onClick={handleRemoveFromCart}>
                <RemoveIcon />
              </IconButton>
            </Actions>
          </ProductInfo>
        ))}
      </ProductContainer>

      <Pagination>
        {pages.map((page) => (
          <span key={page} style={{ margin: '0 5px', cursor: 'pointer' }}>
            {page}
          </span>
        ))}
      </Pagination>
    </div>
  );
};

export default ProductList;
