import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from '../../providers/AuthProvider';

import { getAllDocs } from '../../utils/workspace';


export default function OneDoc({id,title,description}) {
    const user = useAuth();
    const fetchDocs = async () => {
        try {
            const response = await axios.get(`https://costhunt-back.onrender.com/api`);
            if (response.status === 200) {
                setEtats(response.data.etats);
                // console.log(response)
            }
        } catch (error) {
          console.error("Erreur lors de la récupération du paquet :", error);
        }
      };
    
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="public/assets/other/logoHtml.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color='error'>Supprimer</Button>
          <Button size="small">Reprendre</Button>
        </CardActions>
      </Card>
  )
}
