import { Box } from '@mui/system'
import React, { memo } from 'react'
import TicketSearchButton from '../../../Utils/TicketSearchButton/TicketSearchButton'
import TicketSearchingButtonGroup from '../TicketSearchingButtonGroup/TicketSearchingButtonGroup'
import TicketSearchingInputs from '../TicketSearchingInputs/TicketSearchingInputs'
import TicketSearchingRadioButton from '../TicketSearchingRadioButton/TicketSearchingRadioButton'

function TicketSearchSection() {
  return (
    <>
    <Box sx={{height: "2.5%",backgroundColor: "rgba(0, 0, 0, 0.3)",borderRadius: "35px",zIndex: "0"}}>
      <Box sx={{width: "1260px",backgroundColor: "#fff", borderRadius:"30px",padding: "25px",display:"flex", flexDirection:"column"}}>
        <Box sx={{width:"97%",borderRadius: "15px",padding: "20px",background: "#f6f6f6",display:"flex",justifyContent:"Space-between",flexDirection:"row-reverse"}}>
          <TicketSearchingButtonGroup />
          <TicketSearchingRadioButton />
        </Box>
        <Box sx={{display:"flex",flexDirection:"row-reverse", gap:"0.5rem"}}>
          <TicketSearchingInputs inputWidth="190px" containerWidth="504px" text1="مبدا" text2="مقصد" />
          <TicketSearchingInputs inputWidth="155px" containerWidth="403px" text1="تاریح برگشت" text2="تاریح رفت" />
          <TicketSearchingInputs inputWidth="198px" containerWidth="282px" text1="تعداد مسافر" text2="icon" />
        </Box>
        <TicketSearchButton />
      </Box>
    </Box>
    </>
  )
}

export default memo(TicketSearchSection)