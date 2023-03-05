import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
`

const Container = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin: auto;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 25px;
`

const Title = styled.h1`
  
`

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  outline: none;
`

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  outline: none;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;
`

const Contact = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_ev6jt31', 'template_9pk3l1k', ref.current, 'm4crKC4pex3Gh_9_0')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input type="text" placeholder="Name" name="name"/>
            <Input type="email" placeholder="Email" name="email"/>
            <TextArea placeholder="Write your message" rows={10} name="message"></TextArea>
            <Button type="submit">Send</Button>
            {success && "Your message has been sent. We'll get back to you soon."}
          </Form>
        </Left>
      </Container>
      <Right />
      <Map />
    </Section>
  );
};

export default Contact;
