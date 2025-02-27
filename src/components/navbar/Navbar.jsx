//navbar component that will be carried across all pages

//import store
import { useContext } from "react";
import { RecipesContext } from "../../stores/RecipesContext";

//import style component
import {
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  LogoEgg,
  OpenLinksButton,
  NavbarLinkExtends,
  EggLinkToHome,
} from "./Navbar.style";

//import logo
import logoEgg from "../../assets/image/EggPlant-Logo.png";

function Navbar({ className, children }) {
  const { extendNavbar, setExtendNavbar } = useContext(RecipesContext);

  function handleClickExtendNavbar() {
    console.log(extendNavbar);
    setExtendNavbar((curr) => !curr);
  }

  function closeExtendNavbar() {
    setExtendNavbar((curr) => !curr);
  }

  return (
    <div className={className}>
      <NavbarInnerContainer>
        <LeftContainer>
          <EggLinkToHome to="/">
            <LogoEgg src={logoEgg} alt="egg" />
          </EggLinkToHome>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/contactUs">Contact Us</NavbarLink>
            <NavbarLink to="/aboutUs">About Us</NavbarLink>
            <OpenLinksButton onClick={handleClickExtendNavbar}>
              {extendNavbar ? "x" : "☰"}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtends to="/" onClick={closeExtendNavbar}>
            Home
          </NavbarLinkExtends>
          <NavbarLinkExtends to="/contactUs" onClick={closeExtendNavbar}>
            Contact Us
          </NavbarLinkExtends>
          <NavbarLinkExtends to="/aboutUs" onClick={closeExtendNavbar}>
            About Us
          </NavbarLinkExtends>
        </NavbarExtendedContainer>
      )}
    </div>
  );
}

export default Navbar;
