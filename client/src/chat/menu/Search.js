import { SearchOutlined } from '@mui/icons-material'
import { Box, InputBase, styled } from '@mui/material'
import React from 'react'

const Component = styled(Box)`
    background: #fff;
    height: 40px;
    border-bottom: 1px solid #F2F2F2;
    padding: 8px;
    align-items: center;
`

const Wrapper = styled(Box)`
    background: #f0f2f5;
    position: relative;
    margin: 0 13px;
    flex: 1;
    border-radius: 30px;
`

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 5px;
    color: #919191;
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 40px;
    height: 20px;
    font-size: 14px;
`


function Search({ setText }) {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchOutlined />
            </Icon>
            <InputField 
            placeholder='Search or start new chat'
            onChange={(e) => setText(e.target.value)} 
            />
        </Wrapper>
    </Component>
  )
}

export default Search