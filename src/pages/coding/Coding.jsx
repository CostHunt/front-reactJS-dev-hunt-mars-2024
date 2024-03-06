import React, { useState } from 'react'

import { Editor } from '@monaco-editor/react'

import { Select, MenuItem, Switch, TextField } from '@mui/material'

export default function Coding() {

    const [languange, setLanguage] = useState("c")

    const [dark, setDark] = useState(true)

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
                <div>
                    <Switch
                        checked={dark}
                        onChange={(e) => setDark(e.target.checked)}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: (dark) ? "#1E1E1E" : "", justifyContent: 'space-between' }}>
                <div style={{ width: '50%' }}>
                    <Editor
                        height="90vh"
                        language={languange}
                        defaultValue="// some comment"
                        theme={(dark) ? 'vs-dark' : null}
                    // onMount={handleEditorDidMount}
                    />
                </div>
                <div style={{ color: 'white', width: '50%' }}>
                    <div style={{ width: '100%' }}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            placeholder='Add input here...'
                            sx={{
                                input: {
                                    color: 'white', height: '45vh', border: "solid 1px white", borderRadius: "15px",
                                    // "&:hover": { border: "solid 1px white" }
                                }
                            }}
                            fullWidth
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
