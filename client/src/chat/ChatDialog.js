import React, { useContext } from 'react'
import { Box, Dialog, styled } from '@mui/material'
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat'
import ChatBox from './chat/ChatBox'
import { AccountContext } from '../context/AccountProvider'


const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'none'
}

const Component = styled(Box)`
    display: flex;
    overflow: hidden;
`

const LeftComponent = styled(Box)`
    flex: 0.35;
`

const RightComponent = styled(Box)`
    flex: 0.65;
    min-width: 300px;
`

function ChatDialog() {


    const { person } = useContext(AccountContext);



  return (
    <Dialog open={true} 
    PaperProps={{sx: dialogStyle}}
    hideBackdrop={true}>
        <Component>
            <LeftComponent>
                <Menu />
            </LeftComponent>
            <RightComponent>
                { Object.keys(person).length ? <ChatBox /> : <EmptyChat /> }
            </RightComponent>
        </Component>

    </Dialog>
  )
}

export default ChatDialog