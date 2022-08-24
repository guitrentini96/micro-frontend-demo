import { AppBar, Box, Stack, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const ToolbarWrapper = ({ children }) => {
  return (
    <main>
        <Stack direction="row">
            <Stack direction="column" className='appbar'>
                <ul>
                    <li>
                        <Link to="/" className='Link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/def" className='Link'>Delivery Feed</Link>
                    </li>
                    <li>
                        <Link to="/musics" className='Link'>Musics</Link>
                    </li>
                </ul>
            </Stack>
            <Box padding={2}>
            {children}
            </Box>
        </Stack>
    </main>
  )
}

export default ToolbarWrapper