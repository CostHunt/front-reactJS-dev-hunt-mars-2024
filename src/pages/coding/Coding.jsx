import React, { useState } from 'react'

import { Editor } from '@monaco-editor/react'

import { Select, MenuItem, Switch, TextField, Button } from '@mui/material'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { _http } from '../../utils/http';

import { getinitialC, getinitialJs } from './minimalCode';

import { LoadingButton } from '@mui/lab';

import './coding.css'

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
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Select
                        value={language}
                        onChange={handleLanguage}
                        sx={{ width: '125px' }}
                    >
                        <MenuItem value="javascript">Javascript</MenuItem>
                        <MenuItem value="c">C</MenuItem>
                        <MenuItem value="shell">Shell</MenuItem>
                        <MenuItem value="html">HTML</MenuItem>
                    </Select>
                </div>

                <div>
                    <LoadingButton
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        onClick={sendValue} endIcon={<PlayArrowIcon />}
                    >
                        Run Code
                    </LoadingButton>
                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: "#1E1E1E", justifyContent: 'space-between', alignContent: 'center' }}>
                <div style={{ width: '50%' }}>
                    <Editor
                        height="90vh"
                        language={language}
                        value={editorValue}
                        onChange={handleEditorChange}
                        theme={'vs-dark'}
                    />
                </div>
                <div style={{ color: 'white', width: '50%' }}>
                    <div style={{ width: '100%', marginTop: 10 }}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label='Input values'
                            InputLabelProps={{ style: { color: 'white' } }}
                            sx={{
                                input: {
                                    color: 'white', height: '35vh', borderRadius: "15px",
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'solid 1px white'
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'solid 1px white'
                                }
                            }}
                            fullWidth
                        />
                    </div>
                    <div style={{ marginTop: 10 }}>
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
                                    color: 'white', height: '35vh', borderRadius: "15px",
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'solid 1px white'
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'solid 1px white'
                                }
                            }}
                            fullWidth
                        />
                        {execTime / 1000} s
                    </div>
                </div>
            </div>
        </div>
    )
}
