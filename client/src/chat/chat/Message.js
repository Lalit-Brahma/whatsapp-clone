import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { downloadMedia, formatDate } from '../../utils/common-utils'
import { AccountContext } from '../../context/AccountProvider'
import { GetApp } from '@mui/icons-material'
import { iconPDF } from '../../constants/data'


const Own = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding; 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`

const Other = styled(Box)`
    background: #FFFFFF;
    max-width: 60%;
    padding; 5px;
    width: fit-content;
    display: flex;
    border-radius: 8px;
    word-break: break-word;
`

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    padding-right: 3px;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`




function Message({ message }) {


    const { account } = useContext(AccountContext);



  return (
    <>
    {
        account.sub === message.senderId ?
        <Own>
            {
                message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
            }
        </Own>
        :
        <Other>
            {
                message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
            }
        </Other>
    }
    </>
  )
}


const ImageMessage = ({ message }) => {
    return (
        <Box style={{position: 'relative', display: 'flex', flexDirection: 'column'}}>
            {
                message?.text?.includes('.pdf') ?
                <Box style={{display: 'flex'}}>
                    <img src={iconPDF} alt='pdf' style={{width: 80}} />
                    <Typography>{message.text.split('/').pop()}</Typography>
                </Box>
                :
                <img style={{ width: 300, height: '100%', padding: 7, marginBottom: 30}} src={message.text} alt={message.text} />
            }
            <Time style={{marginTop: 10, position: 'absolute', bottom: 0, right: 0}}>
                <GetApp 
                onClick={(e) => downloadMedia(e, message.text)}
                style={{marginRight: 10, border:  '1px solid grey', borderRadius: '50%'}}
                fontSize='small'
                />
                {formatDate(message.createdAt)}
            </Time>
        </Box>

    )
}

const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}

export default Message;