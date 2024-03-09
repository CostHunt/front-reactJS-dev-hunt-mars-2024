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
import { Stack, Skeleton } from '@mui/material';

import './workspace.css'


function Workspace() {

  const { token, user } = useAuth()

  const [projets, setProjet] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllDocs(token, user.id).then((resp) => {
      setProjet(resp)
      setLoading(false)
    })
  }, [])

  const Group = () => {
    if (loading) {
      return <div>
        {/* <Share setPosts={setPosts} /> */}
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="rectangular" width={700} height={60} />
          <Skeleton variant="rounded" width={700} height={60} />
        </Stack>
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="rectangular" height={60} />
          <Skeleton variant="rounded" height={60} />
        </Stack>
      </div>
    }
    return (
      <div className="dossierwrapper">
        {console.log(projets.length)}
        {(projets.length > 0) ?
          projets.map((projet) =>
            <OneDoc nom={projet.nom_project} id={projet.id} title={projet.nom_project} categorie={projet.categorie} code={projet.code} />
          )
          : "Aucun Projet"}
      </div>
    )
  }
  return (
    <Layout Children={<Group />}></Layout>
  )
}

export default Workspace