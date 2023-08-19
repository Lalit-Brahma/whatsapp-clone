import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { qrCodeImage } from '../../constants/data'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';

const Component = styled(Box)`
    display: flex;
`
const Container= styled(Box)`
    padding: 56px 0 50px 56px;
`

const Title = styled(Typography)`
    font-size: 26px;
    color:  #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px
`

const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`

const QRcode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 50px 0px 20px',
})


const dialogStyle = {
    height: '95%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'none'
}

function LoginDialog() {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }

    const onLoginError = (res) => {
        console.log('Login error', res);
    }
    

  return (
    <Dialog open={true} 
    PaperProps={{sx: dialogStyle}}
    hideBackdrop={true}>
        <Component>
            <Container>
                <Title>To use Whatsapp on your computer:</Title>
                <StyledList>
                    <ListItem>1. Open whatsapp on phone</ListItem>
                    <ListItem>2. Menu the settings the whatsapp web</ListItem>
                    <ListItem>3 Scan the code</ListItem>
                </StyledList>
            </Container>
            <Box style={{position: 'relative'}}>
                <QRcode src={qrCodeImage} alt="qr code" />
                <Box style={{position: 'absolute', top: '50%', transform: 'translateX(30%)'}}>
                    <GoogleLogin 
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </Box>
            </Box>
        </Component>

    </Dialog>
  )
}

export default LoginDialog