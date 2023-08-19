import React, { useContext, useState } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box, IconButton, styled } from '@mui/material';
import { Chat, DonutLarge} from '@mui/icons-material'
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../components/drawer/InfoDrawer';


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
    }
`


const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})


function Header() {

    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }


  return (
    <>
    <Component>
        <Image src={account.picture} alt='dp'onClick={() => toggleDrawer()} />
        <Wrapper>
            <IconButton>
                <DonutLarge />
            </IconButton>
            <IconButton>
                <HeaderMenu setOpenDrawer={setOpenDrawer} />
            </IconButton>
            <IconButton>
                <Chat />
            </IconButton>
        </Wrapper>
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  )
}

export default Header