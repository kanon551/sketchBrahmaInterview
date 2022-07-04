import React from 'react'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom';
import Header from './Header';

const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
`
const ImgBack = styled.div`
background-image: url(${props => props.img });
    background-repeat:no-repeat;
    background-size: 100% 100%;
  width: 100%;
  height: auto;
 
  position: relative;
  object-fit: cover;
`

const Details = styled.div`
width: 40%;
 display: flex;
  flex-direction: column;
padding: 60px;
  height: 100vh;

`

const MovieTitle = styled.div`
    font-size: xx-large;
    font-weight: 1000;
    color: white;
`

const MovieRating = styled.div`
margin-top: 20px;
    font-size: large;
    font-weight: 400;
    color: white;
    margin-top: 20px;
`

const MovieDescription = styled.div`
    margin-top: 20px;
    font-size: medium;
    font-weight: 400;
    color: white;
    margin-top: 20px;
`

const MovieDate = styled.div`
    margin-top: 20px;
    font-size: medium;
    font-weight: 700;
    color: white;
    margin-top: 20px;
`

const MovieLanguge = styled.div`
    margin-top: 20px;
    font-size: medium;
    font-weight: 700;
    color: white;
    margin-top: 20px;
`


const MovieProfile = () => {
const location = useLocation();
const data = location.state['data']
  return (
    <Container>
       <Header/>
       <ImgBack img={data.poster_path}>

            <Details>
                <MovieTitle>
                    {data.original_title}
                </MovieTitle>
                <MovieRating>
                    Rating:  {data.vote_average} / 10
                </MovieRating>
                <MovieDescription>
                        {data.overview}
                </MovieDescription>
                <MovieDate>
                       Release Date: {data.release_date}
                </MovieDate>
                <MovieLanguge>
                        Original language: {data.original_language}
                </MovieLanguge>
            </Details>
           
            
       </ImgBack>
     
      
    </Container>
  )
}

export default MovieProfile
