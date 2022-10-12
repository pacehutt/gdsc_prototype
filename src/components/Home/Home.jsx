import React from "react";
import "./Home.css";
import introBG from "../../assets/home-intro-bg.gif";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { Typography,Box } from "@mui/material";
import ScrollAnimation from 'react-animate-on-scroll';
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import bodyBG from "../../assets/home-body-bg.gif";


// import "animate.css/animate.min.css";


function Home() {


   const CustomBox=styled(Box)`
    background-color: white;
    // color: rgb(87 87 87 / 73%);
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    
    width: {
      xs: 100%;
      sm: 100%;
      md: 50%;
    }
    gap: 2rem;
    display: flex;
    // gap: 1rem;
    flex-direction: column;

   `
   const CustomGridItem= styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
    // paddingTop: 5rem;
    xs={12}
    `
    
    const CustomButton=styled(Button)`
    background-color: #4285f4;
    color: white;
    font-weight: 600;
    width: '150px',
    // font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius:7px;
    `

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
           <div className="home-main-body">
         
               <img className="body_bg" src={bodyBG} alt="" />
                  
                <Grid container>

               
                <ScrollAnimation animatePreScroll='false' animateIn="fadeInUp" animateOut="fadeOutUp">
 

            

                <CustomGridItem item>
                       <CustomBox>
                       <ScrollAnimation animatePreScroll='false' animateIn="fadeInUp" >

                        <Typography variant="h4" component="h3"  >Our Motive</Typography>
                       </ScrollAnimation>
                        <ScrollAnimation className="motive_para" 
                       animatePreScroll='false' animateIn="fadeInUp" delay={0}>
                        <Typography variant="subtitle" sx={{
                          width:{
                           
                            xs:'120%',
                            sm:'80%',
                            md:'50%',
                          },
                          fontSize:'1.1rem',
                        }}>

                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo impedit ipsum ullam modi dolore exercitationem error ratione facilis aliquid fugiat nemo, vero vitae et iste. Voluptatibus ab minima suscipit atque?
                        </Typography>
                         

                        <Typography variant="subtitle" sx={{
                          width:{
                            xs:'120%',
                            sm:'90%',
                            md:'50%',
                            
                          }
                          ,
                          fontSize:'1.1rem',
                        }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo impedit ipsum ullam  suscipit atque?
                        </Typography>
                          </ScrollAnimation>
                       </CustomBox>
                </CustomGridItem> 
                </ScrollAnimation>
 
 <ScrollAnimation animatePreScroll='false' animateIn="fadeInLeft"  >

  
                <CustomGridItem item>
                       <CustomBox>
                        <Typography variant="h4" component="h3" >Events</Typography>
                        <Typography variant="subtitle"  sx={{
                          width:{
                            xs:'120%',
                            sm:'90%',
                            md:'50%',
                            
                          }
                        ,
                          fontSize:'1.1rem',
                        }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo impedit ipsum ullam modi dolore exercitationem error ratione facilis aliquid fugiat nemo, vero vitae et iste. Voluptatibus ab minima suscipit atque?
                        </Typography>
                       <CustomButton sx={{
                          width: '150px',
                        
                       ' &:hover':{
                         backgroundColor: 'white',
                         color: '#4285f4',
                        }

                       }}>Know More <SearchIcon sx={{
                        marginLeft: '0.5rem',
                       }}></SearchIcon></CustomButton>
                       </CustomBox>
                </CustomGridItem> 
               
                        </ScrollAnimation>
                
                        <ScrollAnimation animatePreScroll='false' animateIn="fadeInRight"  >

                <CustomGridItem item>
                       <CustomBox>
                        <Typography variant="h4" component="h3" >Our Team</Typography>
                        <Typography variant="subtitle"  sx={{
                          width:{
                            xs:'120%',
                            sm:'90%',
                            md:'50%',
                            
                          }
                        ,
                          fontSize:'1.1rem',
                        }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo impedit ipsum ullam modi dolore exercitationem error ratione facilis aliquid fugiat nemo, vero vitae et iste. Voluptatibus ab minima suscipit atque?
                        </Typography>
                        <Button sx={{
                         fontWeight: '600',
                         width: '150px',
                         // font-size: 1rem;
                         padding: '0.5rem 1rem',
                         borderRadius:'7px',
                         backgroundColor: '#e2aa00',
                          color: 'white',

                       '&:hover':{
                          backgroundColor: 'white',
                          color: '#e2aa00',
                        }

                       }}>The Team <PeopleAltIcon sx={{
                        marginLeft: '0.5rem',
                       }}></PeopleAltIcon></Button>
                       </CustomBox>
                </CustomGridItem>
          
                
                </ScrollAnimation>

                <ScrollAnimation animatePreScroll='false' animateIn="fadeInLeft"  >

                <CustomGridItem item>
                       <CustomBox>
                        <Typography variant="h4" component="h3" >Our Blogs</Typography>
                        <Typography variant="subtitle"  sx={{
                          width:{
                            xs:'120%',
                            sm:'90%',
                            md:'50%',
                            
                          }
                        ,
                          fontSize:'1.1rem',
                        }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo impedit ipsum ullam modi dolore exercitationem error ratione facilis aliquid fugiat nemo, vero vitae et iste. Voluptatibus ab minima suscipit atque?
                        </Typography>
                        <Button sx={{
                         fontWeight: '600',
                         width: '150px',
                       // font-size: 1rem;
                       padding: '0.5rem 1rem',
                       borderRadius:'7px',
                       backgroundColor: '#299c65',
                       color: 'white',
                       '&:hover':{
                          backgroundColor: 'white',
                          color: '#299c65',

                        }

                       }}>Let's Read <AutoStoriesIcon sx={{
                        marginLeft: '0.5rem',
                       }}></AutoStoriesIcon> </Button>
                       </CustomBox>
                </CustomGridItem>
                         </ScrollAnimation>
                <ScrollAnimation className="contact_scroll_div" animatePreScroll='false' animateIn="fadeInUp"  >

                <CustomGridItem item>
                       <CustomBox>
                        <Typography variant="h4" component="h3" >Contact Us</Typography>
                        <Typography variant="subtitle"  sx={{
                          width:{
                            xs:'120%',
                            sm:'90%',
                            md:'50%',
                            
                          }
                        ,
                          fontSize:'1.1rem',
                        }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo impedit ipsum ullam  minima suscipit atque?
                        </Typography>
                        <Typography variant="subtitle">
                  Links with logos to be given here
                        </Typography>
                       </CustomBox>
                </CustomGridItem>
                            </ScrollAnimation>
               
                </Grid>

           </div>
      
    </div>
               
  );
}
        

export default Home;
