
import React from 'react'
import { Typography, Box, Button } from "@mui/material";
import { padding } from '@mui/system';
import { IoCloudUploadSharp } from "react-icons/io5";
import Search from "../components/search/search";
import File from "../components/file/file";

function SearchPage() {

    const styles = {
        paperContainer: {
            backgroundImage: `url(${"https://res.cloudinary.com/damhcnu7n/image/upload/v1675960653/uploader/8619_Converted_tfmma0.jpg"})`,
            height: '100%',
            width: '100%',
            backgroundSize: "cover",
            //  minHeight:'100vh'
            overFlow: 'hidden',
            borderRadius: "20px",
            padding: '20px',
            boxSizing: 'border-box',
            position:'relative'
        }
    };


    return (
        <div style={styles.paperContainer} className="shade">
           
            <Box sx={{position:'inherit',height:'100%' ,display: 'flex', alignItems: 'center',
                    flexDirection: 'column'}}>
                {/* <Typography variant='h4' align="center" sx={{ mt: 4, mb: 4,color:'#fff' }}>Upload your file here</Typography> */}
                <Search/>
            <File/>
            </Box>
        </div>
    )
}

export default SearchPage