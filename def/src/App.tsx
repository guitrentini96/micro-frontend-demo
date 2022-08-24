import React from 'react'
import {v4 as uuid} from 'uuid'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://wjwrqziunvlinozkewqy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqd3Jxeml1bnZsaW5vemtld3F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk4OTE0MzksImV4cCI6MTk3NTQ2NzQzOX0.jK9pjbmQnVM9GxaUz-GuG1P-HvpbkPK-9yDYMQxBkbc')

const App = ({name}) => {
  const [music, setMusic] = React.useState('')

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setMusic(event.target.value)
  }

  const postMusic = async(musicName:string) => {
      const { data, error } = await supabase
      .from('musics')
      .insert([
        { id: uuid(), music: musicName },
      ])
    
  }

  const handleSubmit = (event:React.FormEvent) => {
      event.preventDefault()
      postMusic(music);
      setMusic('');
  }

  return (
      <>
          <h1>Delivery Feed</h1>
          <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={music} />
              <button>Add</button>
          </form>
      </>
  )
}

export default App