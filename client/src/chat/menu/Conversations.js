import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../service/api'
import { Box, Divider, styled } from '@mui/material';
import Conversation from './Conversation';
import { AccountContext } from '../../context/AccountProvider';


const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`

const StyledDivider = styled(Divider)`
    margin: 0 50px 0 50px;
    background-color: #e9edef;
    opacity: .6;
`



function Conversations({ text }) {

    const [users, setUsers] = useState([]);

    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let res = await getUsers();
            const filteredData = res.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData);
        }
        fetchData();
    }, [text])


    useEffect(() => {
        socket.current.emit('addUsers', account);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    }, [account])



  return (
    <Component>
        {
            users.map(user => (
                user.sub !== account.sub &&
                <>
                <Conversation user={user} />
                <StyledDivider />
                </>
            ))
        }
    </Component>
  )
}

export default Conversations