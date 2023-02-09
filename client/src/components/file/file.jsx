import React from 'react'
import axios from "axios";
import axiose from "axios";
import { Box } from "@mui/material";
import { MdAssignment ,MdDownload } from "react-icons/md";
var fileDownload = require('js-file-download');

function file({ file }) {

  const download = (file) => {
    console.log(file);
    axiose({
      url: `http://localhost:8080/download/${file}`,
      method: "GET",
      responseType: "blob"
    }).then((res) => {
      console.log(res);
      fileDownload(res.data, file)
    })
  }


  {
    return (
      file && <div className='files'>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width:{md:'8vw',xs:'15%'},display:'flex',alignItems:"center" }}>
            <MdAssignment style={{marginLeft:"10px",fontSize:'25px'}}/>
          </Box>
          <Box sx={{ width:{md:'20vw',xs:'60%'} }}>
            <p>{file}</p>
          </Box>
          <Box sx={{ width:{md:'8vw',xs:'15%'} ,display:'flex',alignItems:"center",justifyContent:'end'}}>
            <MdDownload  onClick={() => { download(file) }} style={{marginRight:"10px",fontSize:'25px',cursor:'pointer'}}/>
          </Box>
        </Box>
      </div>
    )
  }
}

export default file