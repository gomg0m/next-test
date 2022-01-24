import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Grid} from 'semantic-ui-react';
import { isUnitless } from '@mui/material/styles/cssUtils';

export default function ActionAreaCard() {
  
  const [list, setListData] = useState([
    {
      img: "image/IU.jpg",
      title: "IU",
      name: "좋아 좋아"
    },
    {
      img: "image/BTS.jpg",
      title: "BTS",
      name: "가자~"
    },
    {
      img: "image/IU.jpg",
      title: "IU",
      name: "와우~~"
    },
    { 
      img:"image/BTS.jpg",
      title: "BTS",
      name: "힘차게!"
    }
  ]);

  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  
  function getData() {
    axios.get(API_URL).then(res=>{
      console.log(res.data);
      setListData(res.data);

    });
  }

  //useEffect(()=>{
  //  getData();
  //},[]);


  return (
    <div display="flex">

          { 
          list.map((item)=>(

              <Card sx={{ maxWidth: 345 }} display="flex">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="IU"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
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