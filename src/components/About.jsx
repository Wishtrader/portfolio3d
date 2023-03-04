import React from 'react';
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  width: 1440px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  position: relative;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 5rem;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
 height: 5px;
`

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #da4ea2;
`

const Desc = styled.p`
  font-size: 1.6rem;
  color: lightgray;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 3rem;
  text-transform: uppercase;
`

const About = () => {
  return (
    <Section>
      <Container>
        <Left>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="public/image/line.png" />
            <Subtitle>Who We Are</Subtitle>
          </WhatWeDo>
          <Desc>a creative group of designers and developers with a passion for the arts.</Desc>
          <Button>See Our Works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
