import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
` 
export const SearchContatiner = styled.div`
   border: 0.5px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 5px;
    width: auto;
    /* ${props => props.direction === "left" && "10px"}; */
    margin-right: 30px;
    background: #eaeaec;
    cursor: pointer;
    
    &:focus-within {
        background: white;
        width: 230px;
    }
` 

export const Input = styled.input`
flex: 1;
    border: none;
    background: #eaeaec;
    
    &:focus-visible{
        outline: none;
    }

    &:focus{
        background: white;
    }

    
    
` 

export const Feature = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  /* object-fit: cover; */
`

export const Films = styled.div`
padding: 20px;
background-color: #333154;
height: ${props => props.ht === 0 ? '100vh' : 'auto'}; 
`

export const Trend = styled.div`
font-size: 15px;
font-weight: 700;
text-transform: uppercase;
display: flex;
letter-spacing: 0.13rem;
margin-bottom: 10px;
margin-top: 10px;
color: white;
`

export const Page = styled.div`
padding: 20px;
`