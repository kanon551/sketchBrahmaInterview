import React, { useState } from 'react'
import {Container,Feature,Films,Trend,Page} from '../pages/HomeStyles';
import Grid from '@mui/material/Grid';
import {Library} from '../pages/Library/MovieLibraryData';
import MovieDetails from './Library/MovieDetails';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import '../pages/Nation.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Home = () => {

    const navigate = useNavigate();

    const [library, setLibrary] = useState(Library['results'])

  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 4;
  const moviesVisited = pageNumber * moviesPerPage;
  const moviesCount = Math.ceil(library.length / moviesPerPage);
  const changePage = (event, value) => {
    setPageNumber(value-1);
  };




  const checkLibrary = (e)=>{
    if(e.keyCode === 8){
        //console.log("backward filtering")
        const noBackCharecter = e.target.value.slice(0, -1)
        const p = Array.from(noBackCharecter).reduce((a, v, i) => `${a}[^${noBackCharecter.substr(i)}]*?${v}`, '');
        const re = RegExp(p);
        setLibrary(Library['results'].filter(v => v.original_title.toLowerCase().match(re)))
    }
    else if(e.target.value !== ""){
        //console.log("forward filtering")
        setPageNumber(0)
        const p = Array.from(e.target.value).reduce((a, v, i) => `${a}[^${e.target.value.substr(i)}]*?${v}`, '');
        const re = RegExp(p);
        setLibrary((prev)=>
    [...prev].filter(v => v.original_title.toLowerCase().match(re)))
    }
    else{
        setLibrary(Library['results'])
    }
    
  }

  console.log(library)

  return (
    <Container>
            <Header filter={(value)=>checkLibrary(value)}/>
            <Feature>
                <img src="https://www.movienewsnet.com/wp-content/uploads/2018/07/Stranger-Things.jpg" alt="Norway" style={{width:'100%',height:'100%',objectfit:'cover'}}/>
            </Feature>

            <Films ht={library.length}>
                <Trend>
                    {
                            library.length === 0 ? "No Movies matching the keyword" : "Trending"
                    }
                </Trend>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    library.slice(moviesVisited, moviesVisited + moviesPerPage)
                    .map((obj)=> (
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} key={obj.id} 
                        onClick={()=>navigate('/movieProfile' ,{
                            state: {
                                data: obj
                            }
                         })}>
                            <MovieDetails obj={obj} />
                        </Grid>
                    ))
                    
                }
                </Grid>
                  
                <Page>
                    <Stack spacing={2} >
                      <Pagination count={moviesCount}  variant="outlined" shape="rounded" color="primary" onChange={changePage}/>
                    </Stack>
                </Page>
            </Films>
    </Container>
  )
}

export default Home
