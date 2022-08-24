import React from 'react'
import ToolbarWrapper from '../layouts/ToolbarWrapper'

import  Parcel  from 'single-spa-react/parcel';

const MusicsMF = () => {
  return (
    <ToolbarWrapper>
        <Parcel config={() => System.import('@gui/musics')} />
    </ToolbarWrapper>
  )
}

export default MusicsMF