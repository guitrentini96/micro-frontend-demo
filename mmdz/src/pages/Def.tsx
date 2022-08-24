import React from 'react'
import ToolbarWrapper from '../layouts/ToolbarWrapper'

import  Parcel  from 'single-spa-react/parcel';

const Def = () => {
  return (
    <ToolbarWrapper>
        <Parcel config={() => System.import('@gui/def')} />
    </ToolbarWrapper>
  )
}

export default Def