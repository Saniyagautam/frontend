import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Stack
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 2}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={() => navigate('/dashboard')}
        >
          <HomeIcon />
        </IconButton>
        
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: 'bold',
            mr: 2
          }}
        >
          CRM
        </Typography>

        <Button 
          color="inherit" 
          onClick={() => navigate('/campaigns')}
          startIcon={<CampaignIcon />}
        >
          Campaigns
        </Button>
        <Button 
          color="inherit" 
          onClick={() => navigate('/customers')}
          startIcon={<PeopleIcon />}
        >
          Customers
        </Button>
        <Button 
          color="inherit" 
          onClick={() => navigate('/orders')}
          startIcon={<ShoppingCartIcon />}
        >
          Orders
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 