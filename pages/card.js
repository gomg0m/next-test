import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ActionAreaCard() {
  
  const [list, setListData] = useState([]);

  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  
  function getData() {
    axios.get(API_URL).then(res=>{
      console.log(res.data);
      setListData(res.data);

    });
  }

  useEffect(()=>{
    getData();
  },[]);

  list.slice(0,1);

  return (
    <div>
    { list.map((item)=>(
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.image_link}
            alt="IU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              IU
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      )) }
      </div>
  );
} 