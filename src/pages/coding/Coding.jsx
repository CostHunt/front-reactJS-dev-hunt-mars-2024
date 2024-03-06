import React, { useState } from 'react'

import { Editor } from '@monaco-editor/react'

import { Select, MenuItem, Switch, TextField, Button } from '@mui/material'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import './coding.css'

export default function Coding() {

    const [languange, setLanguage] = useState("c")

    // const [dark, setDark] = useState(true)

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Select
                        value={languange}
                        onChange={(e) => setLanguage(e.target.value)}
                        sx={{ width: '125px' }}
                    >
                        <MenuItem value="javascript">Javascript</MenuItem>
                        <MenuItem value="c">C</MenuItem>
                        <MenuItem value="shell">Shell</MenuItem>
                        <MenuItem value="html">HTML</MenuItem>
                    </Select>
                </div>

                {/* <div>
                    <Switch
                        checked={dark}
                        onChange={(e) => setDark(e.target.checked)}
                    />
                </div> */}

                <div>
                    <Button variant='contained' endIcon={<PlayArrowIcon />}> Run Code </Button>
                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: "#1E1E1E", justifyContent: 'space-between', alignContent: 'center' }}>
                <div style={{ width: '50%' }}>
                    <Editor
                        height="90vh"
                        language={languange}
                        defaultValue="// some comment"
                        theme={'vs-dark'}
                    // onMount={handleEditorDidMount}
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
                                    border: 'solid 1px #1976D2'
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
                            InputLabelProps={{ style: { color: 'white' } }}
                            sx={{
                                input: {
                                    color: 'white', height: '35vh', borderRadius: "15px",
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'solid 1px white'
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'solid 1px #1976D2'
                                }
                            }}
                            fullWidth
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
