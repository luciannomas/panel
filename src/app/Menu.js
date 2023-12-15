// CategoryMenu.js
import React from 'react';
import Link from 'next/link';
import { styled } from '@mui/system';

const CategoryContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const CategoryLink = styled('a')({
  textDecoration: 'none',
  color: '#333',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '5px',
  cursor: 'pointer',
  '&:hover': {
    color: '#4caf50',
  },
});

const CategoryMenu = () => {
  return (
    <CategoryContainer>
      <Link href="/categoria1" passHref>
        <CategoryLink>Cat 1</CategoryLink>
      </Link>
      <Link href="/categoria2" passHref>
        <CategoryLink>Cat 2</CategoryLink>
      </Link>
      <Link href="/categoria3" passHref>
        <CategoryLink>Cat 3</CategoryLink>
      </Link>
      <Link href="/categoria4" passHref>
        <CategoryLink>Cat 4</CategoryLink>
      </Link>
    </CategoryContainer>
  );
};

export default CategoryMenu;
