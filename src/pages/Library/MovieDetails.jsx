import React from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


export const Container = styled.div`
    user-select: none;
    color: rgb(248,248,242);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 100%;
    background: cadetblue;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`

const MovieImage = styled.div`
height: 80%;
flex-wrap: wrap;
`

const MovieDescription = styled.div`
display: flex;
flex-direction: row;
height: 100%;
`

const MovieLeft = styled.div`
    width: 100%;
    display: flex;
    
    flex-direction: column;
    
`

const MovieTitle = styled.div`
flex: 1;
   align-items: center;
   justify-content: flex-start;
`

const MovieRating = styled.div`
flex: 1;
   align-items: center;
   justify-content: flex-start;
`

const MovieRight = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MovieDetails = ({obj}) => {
  return (
    <Container>
      <MovieImage>
        <img src={obj.poster_path} alt="Norway" style={{width:'100%',height:'100%',objectfit:'contain'}}/>
      </MovieImage>
      <MovieDescription>
        <MovieLeft>
            <MovieTitle>
              {obj.original_title}
            </MovieTitle>
            <MovieRating>
              <Rating name="customized-10" defaultValue={1} readOnly max={1} />  {obj.vote_average} /10
            </MovieRating>
           
        </MovieLeft>
        <MovieRight>
            <PlayCircleIcon/>
        </MovieRight>
            
      </MovieDescription>
    </Container>
  )
}

export default MovieDetails
