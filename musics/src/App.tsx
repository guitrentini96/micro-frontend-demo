import React from 'react'

import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const Musics = () => {
  const [musics, setMusics] = React.useState([])

  React.useEffect(() => {
    const url = "https://wjwrqziunvlinozkewqy.supabase.co/rest/v1/musics?select=*";
    fetch(url, {
    method: "GET",
    headers: {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqd3Jxeml1bnZsaW5vemtld3F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk4OTE0MzksImV4cCI6MTk3NTQ2NzQzOX0.jK9pjbmQnVM9GxaUz-GuG1P-HvpbkPK-9yDYMQxBkbc"
    }
    })
    .then(res => res.json())
    .then(musics => setMusics(musics))
  }, [])

  return (
    <>
      <h1>Musics</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {musics.map(music => (
              <TableRow key={music.id}>
                <TableCell>{music.music}</TableCell>
                <TableCell>{music.id}</TableCell>
                <TableCell>{music.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Musics