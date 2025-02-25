//this is the about us page view component

import React from "react";

//import style
import {
  StyledContainer,
  StyledTitle,
  StyledParagraphOne,
  StyledParagraphTwo,
  StyledContainerValues,
  StyedContainerTitleValues,
  StyledSpanValues,
  StyledDivValues,
  StyledTitleCommunity,
  StyledParagraphCommunity,
  LinkCommunity,
  ExtraDiv,
} from "./styleComponents/ComponentAboutUs.style";

function ComponentAboutUs({ className, children }) {
  return (
    <div className={className}>
      <StyledContainer>
        <StyledTitle>Welcome to Eggplant!</StyledTitle>
        <StyledParagraphOne>
          Eggplant is the perfect place for those who love vegetarian and vegan
          cuisine. Our mission is to make healthy, sustainable, and delicious
          food accessible to everyone.
        </StyledParagraphOne>
        <StyledParagraphTwo>
          We believe that cooking with fresh, seasonal ingredients can improve
          not only our health but also the planet. Discover creative, simple,
          and tasty recipes for every occasion!
        </StyledParagraphTwo>
        <StyledContainerValues>
          <StyedContainerTitleValues>Our Values</StyedContainerTitleValues>
          <StyledSpanValues>🌿 Sustainability</StyledSpanValues>
          <StyledDivValues>Low environmental impact recipes</StyledDivValues>
          <StyledSpanValues>🍏 Well-being</StyledSpanValues>
          <StyledDivValues>Healthy and nutritious food</StyledDivValues>
          <StyledSpanValues>👨‍🍳 Community</StyledSpanValues>
          <StyledDivValues>A space for food lovers</StyledDivValues>
        </StyledContainerValues>
        <StyledTitleCommunity>Join Us!</StyledTitleCommunity>
        <StyledParagraphCommunity>
          Are you ready to explore the world of vegetarian cooking? Share your
          recipes and get inspired by our community!
        </StyledParagraphCommunity>

        <LinkCommunity href="#">👉 Join the community</LinkCommunity>
      </StyledContainer>
      <ExtraDiv>{children}</ExtraDiv>
    </div>
  );
}

export default ComponentAboutUs;
