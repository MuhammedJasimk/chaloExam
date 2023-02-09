import React, { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { Typography } from "@mui/material";
import File from "../file/file";


function Search() {

    const [search, setSearch] = useState('')
    const [data, setData] = useState('')
    const [Err, setErr] = useState('')

    const handleChange = (e) => {
        setData('')
        setErr('')
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    const handleKeypress = (e) => {
        if (e.charCode === 13) {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        console.log(search);
        axios.post('http://localhost:8080/search', { search: search }).then((response) => {
            if (response.data.length >= 1) {
                console.log(response.data);
                setData(response.data)
            } else {
                setErr("0 file found")
            }

        })
    }



    return (
        <div className='scroll'>

            <FormControl sx={{ m: 1, width:{md:'40vw',xs:'90vw'},position:"fixed",left:{md:"30%",xs:'5%'}  }} variant="outlined">
                <OutlinedInput inputProps={{ onChange: handleChange, onKeyPress: handleKeypress }} sx={{ borderColor: "#fff" }}
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end"><IoSearch style={{color:'#fff'}}/></InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"

                />
            </FormControl>


            <Typography variant='h6' align="center" sx={{ color: 'red', mt: 8, mb: 4, }}>{Err}</Typography>
            <div style={{marginTop:"80px"}}>
                {
                    data && data.map((item, index) => {
                        return (
                            <File file={item.file} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search