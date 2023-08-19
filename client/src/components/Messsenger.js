import React, { useContext } from 'react'
import LoginDialog from './account/LoginDialog'
import {AppBar, Toolbar, styled, Box} from '@mui/material'
import { AccountContext } from '../context/AccountProvider'
import ChatDialog from '../chat/ChatDialog'

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`

const Header = styled(AppBar)`
    height: 125px;
    background-color: #00A884;
    box-shadow: none;
`


const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none;
`



function Messsenger() {

  const { account } = useContext(AccountContext);


  return (
    <Component>
      {
        account ?
        <>
          <Header>
              <Toolbar>
              </Toolbar>
          </Header>
          <ChatDialog />
        </>
        :
        <>
          <LoginHeader>
              <Toolbar>
              </Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      }
    </Component>
  )
}

export default Messsenger