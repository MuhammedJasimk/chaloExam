
import React ,{useState} from 'react'
import { Typography, Box, Button } from "@mui/material";
import { padding } from '@mui/system';
import { IoCloudUploadSharp } from "react-icons/io5";
import axiose from "axios";

function FileUpload() {

    const [invalidImage,setinvalidImage]=useState('')
    const [message,setMessage]=useState('')
    const styles = {
        paperContainer: {
            backgroundImage: `url(${"https://res.cloudinary.com/damhcnu7n/image/upload/v1675932087/uploader/fileUpload_bsgszb.png"})`,
            height: '100%',
            width: '100%',
            backgroundSize: "cover",
            //  minHeight:'100vh'
            overFlow: 'hidden',
            borderRadius: "20px",
            padding: '20px',
            boxSizing: 'border-box',
            position: 'relative'
        }
    };

    const fileHandleChange = (e)=>{

        setinvalidImage('')
        setMessage('')

        const imageFile = e.target.files[0];
        console.log(imageFile);

        if (!imageFile) {
            setinvalidImage('Please select image.');
             return false;
           }
       
           if (!imageFile.name.match(/\.(docx)$/)) {
            setinvalidImage('Please select valid .DOCX file ');
             return false;
           }

           const data = new FormData()
           data.append('file',imageFile)

           axiose.post('http://localhost:8080/addFile',data).then((response)=>{
            if(response.data.status){
                setMessage(response.data.message)
            }
           })

    }


    return (
        <div style={styles.paperContainer} className="shade">
            <Box sx={{
                position: 'inherit', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Typography variant='h4' align="center" sx={{ mt: 4, mb: 4, color: '#fff' }}>Upload your file here</Typography>

                <Box sx={{
                    border: '1px dashed #fff', px:{xs:'30px',md:'200px'}, height: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <IoCloudUploadSharp className='uploadIcon' />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input
                            type="file"
                            hidden

                            onChange={fileHandleChange}
                        />
                    </Button>
                </Box>
                    <Typography variant='h6' align="center" sx={{color:'red', mt: 4, mb: 4, }}>{invalidImage}</Typography>
                    <Typography variant='h6' align="center" sx={{color:'green', mt: 4, mb: 4, }}>{message}</Typography>
            </Box>
        </div>
    )
}

export default FileUpload