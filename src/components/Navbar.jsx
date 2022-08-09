import React from 'react'
import styled from 'styled-components'
import {Search} from '@material-ui/icons';

const Container = styled.div`
height: 60px;
/* background-color:black; */
`
const Wrapper = styled.div`
padding:10px 20px;
display: flex;
justify-content:space-between;
align-items:center;
`
const Left = styled.div`
flex:1;
display: flex;
align-items:center;
`
const Languages = styled.span`
font-size:14px;
cursor: pointer;
`
const SearchContainer = styled.div`
border:1px solid lightgrey;
display: flex;
align-items:center;
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
`


const Navbar = () => {
  return (
    <Container>
    <Wrapper>
        <Left>
            <Languages>EN</Languages>
            <SearchContainer>
                input
                <Search/>
            </SearchContainer>
            
        </Left>
        <Center>center</Center>
        <Right>right</Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar