import { AttachFile, EmojiEmotionsOutlined, Mic } from '@mui/icons-material'
import { Box, InputBase, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { uploadFile } from '../../service/api'


const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 100%;
    padding: 0 8px;
    align-items: center;
    & > * {
        margin: 5px;
        color: #919191;
    }
`

const Search = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 14px;
    width: calc(94% - 100px);
`

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
`


const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;;
`


function Footer({ sendText, setValue, value, file, setFile, setImage }) {

    useEffect(() => {
        const getImage = async () => {
            if(file) {
                const data = new FormData();
                data.append('name', file.name);
                data.append('file', file);

                let res = await uploadFile(data);
                setImage(res.data);
            }
        }
        getImage();
    }, [file])


    const onFileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }


    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            sendText(e);
        }
    }

  return (
    <Container>
        <EmojiEmotionsOutlined />
        <label htmlFor='fileInput'>
            <ClipIcon />
        </label>
        <input
        type='file'
        id='fileInput'
        style={{display: 'none'}}
        onChange={(e) => onFileChange(e)}
        />
        <Search>
            <InputField
            placeholder='Type a message...' 
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            value={value}
            />
        </Search>
        <Mic />
    </Container>
  )
}

export default Footer