import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const SidebarContainer = styled('div')(({ theme }) => ({
  width: '250px',
  padding: '16px',
  background: 'linear-gradient(135deg, #6a5acd, #8a2be2)', // Gradient background
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  transition: 'background-color 0.3s',
}));

const Title = styled('h2')(({ theme }) => ({
  margin: 0,
  fontSize: '1.5rem',
  color: '#fff', // Changed to white for better contrast
  fontWeight: 'bold',
}));

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  backgroundColor: selected ? '#5f4b8c' : 'transparent', // Slightly darker for selected
  color: selected ? '#fff' : '#fff',
  '&:hover': {
    backgroundColor: selected ? '#5f4b8c' : '#4b3d68', // Darker on hover
    color: '#fff',
  },
  transition: 'background-color 0.3s, color 0.3s',
}));

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <SidebarContainer>
      <Title>Categories</Title>
      <Divider />
      <List>
        {categories.map((category) => (
          <StyledListItem
            button
            key={category.value}
            selected={selectedCategory === category.value}
            onClick={() => onSelectCategory(category.value)}
          >
            <ListItemText primary={category.label} />
          </StyledListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
