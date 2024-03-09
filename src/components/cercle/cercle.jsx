import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import OneDoc from './oneDoc';
import { getAllDocs } from '../../utils/workspace';
import { useAuth } from '../../providers/AuthProvider';
import RecipeReviewCard from './oneCard';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import './cercle.css'


function Cercle() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Group = () => {
    return (
      <div className="dossierwrapper">
        <RecipeReviewCard photoUrl='assets/other/lmd.jpg' titre='Le système LMD' desc='C quoi le système LMD?' descriptionLong='La réforme licence-master-doctorat, ou réforme LMD, est un ensemble de mesures modifiant le système d enseignement supérieur français pour l adapter aux standards européens de la réforme BMD.'/>
        <RecipeReviewCard photoUrl='assets/other/aeeni.jpg' titre='AEENI' desc='C quoi AEENI?' descriptionLong='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum maximus lectus at maximus. Aenean est odio, fringilla a faucibus nec, feugiat non tellus. Proin odio lacus, blandit sed sapien id, tincidunt suscipit lorem. Suspendisse ut elementum ex. Nam tincidunt suscipit ex a auctor. Sed sit amet eleifend tortor. Mauris aliquet nunc vitae nibh congue, nec eleifend nisi tincidunt. Phasellus tincidunt, urna id euismod volutpat, leo elit sagittis metus, eget posuere arcu eros in nunc. Ut scelerisque lacinia mi id posuere. Vivamus quis porttitor nisl, sit amet pellentesque enim. Fusce dignissim sodales consectetur.'/>
        <RecipeReviewCard photoUrl='assets/other/cercle.jpg' titre={"\"Cercle d'étude\""} desc='Savoir plus sur le cercle d étude' descriptionLong='Le cercle d étude est un dispositif d apprentissage volontaire destiné aux adultes. Le principe est de se retrouver pour échanger sur un sujet commun et partager son expérience, afin de développer ses connaissances et/ou trouver une solution à un problème.'/>
        <RecipeReviewCard photoUrl='assets/other/gbSR.jpg' titre='Les parcours GB et SR' desc='Découvrir vos futurs parcours' descriptionLong='Vivamus ac eros justo. Aenean vestibulum, nisi nec commodo iaculis, massa risus ornare libero, at mollis dolor libero quis ipsum. Curabitur varius metus non augue sollicitudin dignissim. Etiam accumsan purus id posuere laoreet. Nam euismod ante quis scelerisque eleifend. Pellentesque tristique diam id rhoncus vulputate. Donec metus lacus, commodo quis odio vitae, ullamcorper aliquam libero. Cras lacinia ex ac tempor lobortis. Fusce maximus mattis enim.'/>
      </div>
    )
  }
  return (
    <>
      <Layout Children={<Group />}></Layout>
      
    </>
    
    
  )
}

export default Cercle