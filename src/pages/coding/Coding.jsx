import React, { useState, useEffect } from 'react'
import { Editor } from '@monaco-editor/react'
import { Modal, Select, MenuItem, Switch, TextField, Button, Box } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { _http } from '../../utils/http';
import { LoadingButton } from '@mui/lab';
import './coding.css'
import { motion } from 'framer-motion'
import Layout from '../../Layout';
import { auto } from '@popperjs/core';
import SaveIcon from '@mui/icons-material/Save';
import { createDocs, updateDocs } from '../../utils/workspace';
import { useAuth } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { useAnimation } from 'framer-motion';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function getinitialC() {
    return "#include <stdio.h>\n#include <stdlib.h>\n\nint main()\n{\n\tprintf(\"Hello World!\");\n\treturn 0;\n}"
}

function getinitialJs() {
    return "console.log(\"Hello World!\");"
}

const WaveIcon = ({ src, alt, delay }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            x: [0, 0, 0, 0, 0],
            scale: [1, 1.4, 1, 1, 1],
            transition: {
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                delay,
            },
        });
    }, [controls, delay]);

    return (
        <motion.img
            style={{ width: "3%", marginRight: '10%' }}
            src={src}
            alt={alt}
            animate={controls}
        />
    );
};

export default function Coding() {

    const { token } = useAuth()

    const [output, setOutput] = useState("")

    const val = (localStorage.getItem('code') != null) ? localStorage.getItem('code') : getinitialC()
    const lan = (localStorage.getItem('language') != null) ? localStorage.getItem('language') : 'c'

    const [editorValue, setEditorValue] = useState(val)
    const [language, setLanguage] = useState(lan)

    const [loading, setLoading] = useState(false)

    const [execTime, setExecTime] = useState(null)

    const [open, setOpen] = React.useState(false);

    const [input, setInput] = useState(null)

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleEditorChange = (e) => {
        setEditorValue(e);
    }

    const { register, handleSubmit } = useForm()
    const { user } = useAuth()

    const handleSave = (data) => {
        data['categorie'] = language
        data['code'] = editorValue
        if (localStorage.getItem('id_project') != null) {
            updateDocs(token, data, localStorage.getItem('id_project')).then(() => {
                console.log("updated")
            })
        } else {
            data['id_account'] = user.id
            createDocs(token, data).then(() => {
                console.log("created")
            })
        }
        console.log(data)
        handleClose()
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
            language: currentLanguage,
            input: input
        }
        _http.post('/run/code/', body, {
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
        }).catch((e) => {
            console.log(e)
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


    return (
        <Layout Children={
            <div style={{ marginLeft: '5%' }}>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Anta&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap')
                </style>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    <LoadingButton color='success' variant='contained' onClick={handleOpen} endIcon={<SaveIcon />}> Save </LoadingButton>
                </div>

                <div style={{ width: '95%', marginTop: '1%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <motion.div
                            initial={{ opacity: 0, y: -150 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            style={{ marginBottom: '1%' }}
                        >
                            <Select
                                value={language}
                                onChange={handleLanguage}
                                sx={{ width: '125px', borderRadius: "10px" }}
                            >
                                <MenuItem value="javascript">Javascript</MenuItem>
                                <MenuItem value="c">C</MenuItem>
                                <MenuItem value="shell" disabled>Shell</MenuItem>
                                <MenuItem value="html" disabled>HTML</MenuItem>
                            </Select>
                        </motion.div>

                        <div className='icons' style={{ justifyContent: "center" }}>
                            <WaveIcon
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
                                alt="Bash Icon"
                                delay={0}
                            />
                            <WaveIcon
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                                alt="C Icon"
                                delay={0.5}
                            />
                            <WaveIcon
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
                                alt="JavaScript Icon"
                                delay={1}
                            />
                            <WaveIcon
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
                                alt="HTML5 Icon"
                                delay={1.5}
                            />
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            style={{ marginTop: "1%" }}>
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
                        className="editorWrapper"
                        style={{ backgroundColor: "#1E1E1E", justifyContent: 'space-between', alignContent: 'center', flexWrap: 'wrap' }}>
                        <div className="editor" style={{ borderRadius: '10px' }}>
                            <Editor
                                height="80vh"
                                language={language}
                                value={editorValue}
                                onChange={handleEditorChange}
                                theme={'vs-dark'}
                            />
                        </div>
                        <div className='puts' style={{ color: 'white', margin: "2%", padding: "1%" }}>
                            <div className='input' style={{ marginTop: 10 }}>
                                Input Values
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
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
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                            </div>
                            <div className='output' style={{ marginTop: '5%', }}>
                                Output
                                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', width: '100%', border: '1px solid white', height: '30vh', borderRadius: '3px' }}>
                                    {output.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div style={{ marginTop: '10px' }} >
                                    {execTime / 1000} s
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </ div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <TextField label="Nom du projet" fullWidth {...register("nom_project", { required: true })} defaultValue={localStorage.nom_project} />
                        <LoadingButton color='success' variant='contained' onClick={handleSubmit(handleSave)} endIcon={<SaveIcon />}> Save </LoadingButton>
                    </Box>
                </Modal>
            </ div>
        } />

    )
}
