import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function OneDoc({ id, title, description, categorie, code }) {

  let image = ''
  if (categorie == 'c') image = '/assets/other/c.png'
  else if (categorie == 'javascript') image = '/assets/other/js.png'

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
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
        <Link to='/Coding'> <Button size="small" onClick={() => {
          localStorage.setItem('code', code)
          localStorage.setItem('language', categorie)
          localStorage.setItem('id_project', id)
        }}>Reprendre</Button> </Link>
      </CardActions>
    </Card>
  )
}
