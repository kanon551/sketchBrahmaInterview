import React from 'react'
import {SearchContatiner,Input} from '../pages/HomeStyles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const Header = (props) => {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Sketch Brahma Interview
                </Typography>
                <SearchContatiner >
                    <Input color="action" placeholder='Search...' onChange={(e)=>props.filter(e)} onKeyDown={(e)=>props.filter(e)}></Input>
                    <SearchIcon color="action"/>
                </SearchContatiner>
                </Toolbar>
            </AppBar>
            </Box>
    </div>
  )
}

export default Header
