import React, { useState } from 'react'; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton'; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import crow from '../assets/crow-48179_640.png';
import '../stylesheets/header.css';
import { Box } from '@mui/material';

export default function Nav() {
    const [anchorEl, setAnchorEl] = useState(null); 

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: theme => theme.palette.secondary.main }}>
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ color: 'black' }}>
                            <img className='logo' src={crow} alt='Images of crow' />
                        </Typography>
                        <Typography sx={{
                            fontFamily: 'Amatic SC', fontSize: '2rem', color: 'primary.contrastText', marginLeft: 1
                        }}>
                            Datura's Crow Games
                        </Typography>
                    </Box>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleMenuOpen}
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                            Home
                        </MenuItem>
                        <MenuItem component={Link} to="/stonewood" onClick={handleMenuClose}>
                            StoneWood Forest
                        </MenuItem>
                        <MenuItem component={Link} to="/contactus" onClick={handleMenuClose}>
                            Contact Us
                        </MenuItem>
                        <MenuItem component={Link} to="/theteam" onClick={handleMenuClose}>
                            Meet The Team
                        </MenuItem>
                        <MenuItem component={Link} to="/contentwarnings" onClick={handleMenuClose}>
                            Content Warnings
                        </MenuItem>
                        <MenuItem component={Link} to="/supportus" onClick={handleMenuClose}>
                            Support Us
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    );
}
