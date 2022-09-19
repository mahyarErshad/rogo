import { Box } from '@mui/system'
import React from 'react'
import TicketSearchingButton from '../TicketSearchingButton/TicketSearchingButton'

function TicketSearchSection() {
  return (
    <>
    <Box sx={{height: "2.5%",backgroundColor: "rgba(0, 0, 0, 0.3)",borderRadius: "35px",zIndex: "0"}}>
      <Box sx={{width: "1260px",backgroundColor: "#fff", borderRadius:"30px",padding: "25px"}}>
        <Box sx={{width:"97%",borderRadius: "15px",padding: "20px",background: "#f6f6f6",display:"flex",justifyContent:"flex-end"}}>
          <Box sx={{transition: "all 0.3s ease-in-out 0.01s",backgroundColor:"#fff",display:"flex",flexDirection:"row"}}>
          <TicketSearchingButton text="پرواز داخلی" />
          <TicketSearchingButton text="پرواز خارجی" />
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default TicketSearchSection