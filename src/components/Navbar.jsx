import React from 'react';
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  text-transform: uppercase;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Logo = styled.img`
  height: 80px;
  border-radius: 100%;
  border: 1px solid rgba(255,255,255,0.2);
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`

const ListItem = styled.li`
  cursor: pointer;
`

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
`

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./image/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="/image/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
