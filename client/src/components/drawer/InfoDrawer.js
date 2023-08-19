import { ArrowBack } from '@mui/icons-material';
import { Box, Drawer, Typography, styled } from '@mui/material'
import React from 'react'
import Profile from './Profile';

const Header = styled(Box)`
    background: #008069;
    height: 115px;
    color: #FFFFFF;
    display: flex;
    & > svg, & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`

const Component = styled(Box)`
    background: #ededed;
    height: 85%;
`


const drawerStyle = {
    left: 20,
    top: 16,
    height: '95%', 
    width: '34%',
    boxShadow: 'none'
}



function InfoDrawer({open, setOpen}) {

    const handleClose = () => {
        setOpen(false);
    }


  return (
    <Drawer
    open={open}
    onClose={handleClose}
    PaperProps={{ sx: drawerStyle }}
    style={{zIndex: 1500}}
    >
        <Header>
            <ArrowBack onClick ={ () => setOpen(false) } />
            <Typography>Profile</Typography>
        </Header>
        <Component>
            <Profile />
        </Component>

    </Drawer>
  )
}

export default InfoDrawer