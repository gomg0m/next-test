import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Grid} from 'semantic-ui-react';
import { isUnitless } from '@mui/material/styles/cssUtils';

export default function ActionAreaCard() {
  
  const [list, setListData] = useState(["image/IU.jpg","image/BTS.jpg","image/IU.jpg","image/BTS.jpg"]);

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
    <div>
      <Grid columns={3}>
        <Grid.Row>
          { 
          list.map((item)=>(
            <Grid.Column>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item}
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
            </Grid.Column>
          )) }
        </Grid.Row>
      </Grid>
    </div>
  );
} 