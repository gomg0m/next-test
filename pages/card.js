import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="image/IU.jpg"
          alt="IU"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            IU
          </Typography>
          <Typography variant="body2" color="text.secondary">
            이쁜 아이유
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}