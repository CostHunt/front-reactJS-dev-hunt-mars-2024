import React, { useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { Select, MenuItem, Switch, TextField, Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { _http } from '../../utils/http';
import { getinitialC, getinitialJs } from './minimalCode';
import { LoadingButton } from '@mui/lab';
import './coding.css'
import {motion} from 'framer-motion' 

export default function Coding() {

    const [language, setLanguage] = useState("c")

    const [output, setOutput] = useState("")

    const [editorValue, setEditorValue] = useState(getinitialC())

    const [loading, setLoading] = useState(false)

    const [execTime, setExecTime] = useState(null)

    const handleEditorChange = (e) => {
        setEditorValue(e);
    }

    function sendValue() {
        let currentLanguage = 'c'
        if (language == "javascript") {
            currentLanguage = 'js'
        }

        const dateDeb = new Date();

        setLoading(true)

        const body = {
            code: editorValue,
            language: currentLanguage
        }
        _http.post('/project/run/code/', body, {
            headers: {
                'X-access-token': "xxx"
            },
        }).then((resp) => {
            // console.log(resp)
            if (resp.data.res.error == "") {
                setOutput(resp.data.res.output)
            } else {
                setOutput(resp.data.res.error)
            }
            setLoading(false)
            setExecTime(new Date() - dateDeb)
        }).catch(() => {
            console.log("erreur du compilateur")
            setLoading(false)
        })

    }

    const handleLanguage = (e) => {
        setLanguage(e.target.value)
        setOutput("")
        // console.log(e.target.value)
        if (e.target.value == 'c') setEditorValue(getinitialC())
        else if (e.target.value == 'javascript') setEditorValue(getinitialJs())
        else setEditorValue("")
    }

    // const [dark, setDark] = useState(true)

    return (
        <div >
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Anta&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap')
            </style>

            <div style={{ display: 'flex', alignItems: 'center' , marginLeft : "19%"}}>
            <motion.img
                width="52"
                height="52"
                src="https://img.icons8.com/fluency/48/laptop-coding.png"
                alt="laptop-coding"
                animate={{ y: [0, -8, 0, 8, 0], transition: { repeat: Infinity, duration: 2 } }}
            />
            <motion.p className='Name'
                style={{ marginLeft: '10px' }}
                animate={{ y: [0, -8, 0, 8, 0], transition: { repeat: Infinity, duration: 2 } }}
            >
                CODING SPACE
            </motion.p>
            </div>
          
            <div style={{width: '80%', marginTop : '1%', float :'right', marginRight : '1%'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        style={{marginBottom : '1%'}}
                    >
                        <Select
                            value={language}
                            onChange={handleLanguage}
                            sx={{ width: '125px', borderRadius :"10px" }}
                        >
                            <MenuItem value="javascript">Javascript</MenuItem>
                            <MenuItem value="c">C</MenuItem>
                            <MenuItem value="shell">Shell</MenuItem>
                            <MenuItem value="html">HTML</MenuItem>
                        </Select>
                    </motion.div>
                    <img style={{width : "3%"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
                    <img style={{width : "3%"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                    <img style={{width : "3%"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                    <img style={{width : "3%"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" />          
                    <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        style={{marginTop: "1%"}}>
                        <LoadingButton
                            loading={loading}
                            loadingPosition="end"
                            variant="contained"
                            onClick={sendValue} endIcon={<PlayArrowIcon />}
                        >
                            Run Code
                        </LoadingButton>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    style={{ display: 'flex', backgroundColor: "#1E1E1E", justifyContent: 'space-between', alignContent: 'center'}}>
                    <div style={{ width: '60%', borderRadius :'10px' }}>
                        <Editor
                            height="80vh"
                            language={language}
                            value={editorValue}
                            onChange={handleEditorChange}
                            theme={'vs-dark'}
                        />
                    </div>
                    <div style={{ color: 'white', width: '40%' , margin : "2%", padding:"1%"}}>
                        <div style={{ width: '100%', marginTop: 10 }}>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label='Input values'
                                InputLabelProps={{ style: { color: 'white' } }}
                                sx={{
                                    input: {
                                        color: 'white', height: '30vh', borderRadius: "15px",
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'solid 1px white'
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: 'solid 1px cyan'
                                    }
                                }}
                                fullWidth
                            />
                        </div>
                        <div style={{ marginTop: '5%' }}>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label='Output'
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={output}
                                InputLabelProps={{ style: { color: 'white' } }}
                                sx={{
                                    input: {
                                        color: 'white', height: '30vh', borderRadius: "15px",
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'solid 1px white'
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: 'solid 1px cyan'
                                    }
                                }}
                                fullWidth
                            />
                            {execTime / 1000} s
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}