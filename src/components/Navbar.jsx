import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1430px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 3%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./image/logo.png" />
          <List>
            <ListItem><Link href="./#home">Home</Link></ListItem>
            <ListItem><Link href="./#about">About</Link></ListItem>
            <ListItem><Link href="./#works">Works</Link></ListItem>
            <ListItem><Link href="./#contact">Contact</Link></ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./image/search.png" />
          <Button><Link href="./#contact">Hire Now</Link></Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
