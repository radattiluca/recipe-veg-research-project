//footer component that will be carried across all pages

//import style component footer
import {
  LeftContainer,
  RightContainer,
  CenterContainer,
  FooterLink,
} from "./Footer.style";

function Footer({ className, children }) {
  return (
    <div className={className}>
      <LeftContainer>
        <FooterLink>Privacy Policy</FooterLink>
      </LeftContainer>
      <CenterContainer>
        <FooterLink>Informativa Cookie©</FooterLink>
      </CenterContainer>
      <RightContainer>
        <FooterLink>Eggplant Srl</FooterLink>
      </RightContainer>
    </div>
  );
}

export default Footer;
