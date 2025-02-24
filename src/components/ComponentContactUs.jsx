//questo è il componente che porta lo stile nella pagina contactus

import React from "react";
import { useContext } from "react";
import { RecipesContext } from "../stores/RecipesContext";

//import style
import {
  StyledContainer,
  ExtraDiv,
  StyledTitle,
  StyledSubTitle,
  StyledParagraph,
  StyledContainerForm,
  StyledMyForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledContainerInfo,
  StyledInfo,
} from "./styleComponents/ComponentContactUs.style";
import { Link } from "react-router-dom";

function ComponentContactUs({ className, children }) {
  const { name, setName, email, setEmail, message, setMessage } =
    useContext(RecipesContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Messaggio inviato ${name} ${email} ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <div className={className}>
      <StyledContainer>
        <StyledTitle> 📩 Contact Us - Eggplant</StyledTitle>
        <StyledSubTitle>Have inquiries or suggestions for us?</StyledSubTitle>
        <StyledParagraph>
          Contact us! We will be happy to answer your questions, listen to your
          suggestions or listen to your suggestions
        </StyledParagraph>
        <StyledContainerForm>
          <StyledMyForm onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
              required
            ></StyledInput>
            <StyledInput
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Email"
              required
            ></StyledInput>
            <StyledTextArea
              type="text"
              value={message}
              onChange={handleMessage}
              placeholder="Your Message"
              required
            ></StyledTextArea>
            <StyledButton type="submit">Send</StyledButton>
          </StyledMyForm>
        </StyledContainerForm>
        <StyledContainerInfo>
          <StyledInfo>
            📧 Email:
            <Link href="#">info@eggplant.com</Link>
          </StyledInfo>
          <StyledInfo>
            📍 Andress: Street of the vegetables, Olive, New York USA
          </StyledInfo>
          <StyledInfo>📞 Phone: +39 012 345</StyledInfo>
        </StyledContainerInfo>
      </StyledContainer>
      <ExtraDiv>{children}</ExtraDiv>
    </div>
  );
}

export default ComponentContactUs;
