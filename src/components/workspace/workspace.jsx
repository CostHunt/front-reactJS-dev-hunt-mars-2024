import React from 'react'
import Layout from '../../Layout'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OneDoc from './oneDoc';



function Workspace() {
  const Group=()=>{
    return (
      <div className="dossierwrapper">
        <OneDoc id='1' title='Centrer un div' description='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all '/>
      </div>
    )
  }
  return (
    <Layout Children={<Group/>}></Layout>
  )
}

export default Workspace