import React from 'react'
import ToolbarWrapper from '../layouts/ToolbarWrapper'

import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const Musics = () => {
  const [musics, setMusics] = React.useState([])

  React.useEffect(() => {
    window.addEventListener('@gui/def/music/add-music', (event:any) => {
      console.log(event.detail)
      console.log(musics)
      setMusics(event.detail)
    })
    console.log("carregou")
  }, [])

  return (
    <ToolbarWrapper>
        <h1>Musics</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {musics.map(music => (
                <TableRow key={music.id}>
                  <TableCell>{music.name}</TableCell>
                  <TableCell>{music.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </TableContainer>
    </ToolbarWrapper>
    
  )
}

export default Musics