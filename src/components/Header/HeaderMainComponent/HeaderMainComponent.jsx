import { Box } from '@mui/material'
import React from 'react'

function HeaderMainComponent() {
  return (
    <Box sx={{position:"absolute",top:"0",right:"-15%", width:"130%",height:"450px",borderRadius:"0px 0 80% 80%", boxShadow:"inset 0px -14px 30px 0px rgba(0, 0, 0, 0.205)",background:"url(https://st.rogo.ir/assets/images/header-back/W-3.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover",overflow:"hidden"}}>
        <div>hi</div>
    </Box>
  )
}

export default HeaderMainComponent