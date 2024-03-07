import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OneDoc from './oneDoc';
import { getAllDocs } from '../../utils/workspace';
import { useAuth } from '../../providers/AuthProvider';


function Workspace() {

  const { token, user } = useAuth()

  const [projets, setProjet] = useState([])

  useEffect(() => {
    getAllDocs(token, user.id).then((resp) => {
      setProjet(resp)
    })
  }, [])

  const Group = () => {
    return (
      <div className="dossierwrapper">
        {projets.map((projet) =>
          <OneDoc id={projet.id} title={projet.nom_project} categorie={projet.categorie} code={projet.code} />
        )}
      </div>
    )
  }
  return (
    <Layout Children={<Group />}></Layout>
  )
}

export default Workspace