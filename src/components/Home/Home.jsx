import React from "react";
import "./Home.css";
import introBG from "../../assets/home-intro-bg.gif";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CardActionArea } from "@mui/material";

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <div className="introInfo">
          <h1>Google Developer Student Clubs</h1>
          <span>
            <h2>Techno India University</h2>
          </span>
          <p>Helping students bridge the gap between theory and practice</p>
          {/* <Button className='intro-login-btn' variant="contained"  sx={{
                width:'103px',
                backgroundColor:"#4285f4",
                
                cursor:'pointer',
                '&:hover': {
                  backgroundColor: '#e2aa00',
                  color: 'white',
                },
                
              }}>Login</Button> */}
          <button className="intro-login">Sign In</button>
        </div>

        <img src={introBG} alt="" />
      </div>

      <div className="events">
        <Typography variant="h4" component={'span'} sx={{
          fontWeight: '600',
          color: '#299c65',
          borderBottom: '2px solid #4285f4',
          fontSize: '1.6rem',
          
  fontFamily: "Open Sans, sans-serif"
        }}>
          Events
        </Typography>

        <Grid container spacing={6} sx={{paddingTop:"2rem"}}>
  
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}  elevation={5}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.unsplash.com/photo-1590488395599-1299b500d29b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2dsZSUyMGV2ZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="event"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Android Basics
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    aperiam consectetur necessitatibus error itaque, cumque,
                    natus sint minus sequi quia ullam, molestiae alias quis
                    ipsam. Natus iste numquam iusto harum.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            
          </Grid> <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}  elevation={5}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.unsplash.com/photo-1590488395599-1299b500d29b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2dsZSUyMGV2ZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="event"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Android Basics
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    aperiam consectetur necessitatibus error itaque, cumque,
                    natus sint minus sequi quia ullam, molestiae alias quis
                    ipsam. Natus iste numquam iusto harum.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            
          </Grid> <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}  elevation={5}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.unsplash.com/photo-1590488395599-1299b500d29b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2dsZSUyMGV2ZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="event"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Android Basics
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    aperiam consectetur necessitatibus error itaque, cumque,
                    natus sint minus sequi quia ullam, molestiae alias quis
                    ipsam. Natus iste numquam iusto harum.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            
          </Grid>

          <Grid item display={'flex'} alignItems={"center"} sx={{
            width:{
              xs:'100%',
              sm:'20%',
              // sm:'100%',

            },
            justifyContent:{
              xs:'flex-end',
              sm:'center'

              // sm:'flex-end',
            }
            
          }}>
            <Button sx={{
                width:'150px',
               
                color:'#299c65',
                
                cursor:'pointer',
                '&:hover': {
                  backgroundColor: '#d7ffec',
                  color: 'rgb(87 87 87 / 73%)',
                },
                
              }}>View All <ArrowRightIcon></ArrowRightIcon></Button>
          </Grid>
        </Grid>
      </div>

      div.
    </div>
  );
}
        

export default Home;
