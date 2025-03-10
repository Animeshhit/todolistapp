import Styled from "styled-components";
import { AppGrid, Logo, Menu, Search } from "../../lib/assets";

function Icon({ Image, Alt }: { Image: string; Alt: string }) {
  return (
    <>
      <IconButton type="button">
        <img src={Image} alt={Alt} />
      </IconButton>
    </>
  );
}

function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Navbar left Container  */}
            <NavbarLeft>
              <Icon Image={Menu} Alt="nav_menu" />
              <Icon Image={Logo} Alt="DoIt" />
            </NavbarLeft>
            {/* Navbar right Container  */}
            <NavbarRight>
              <Icon Image={Search} Alt="search" />
              <Icon Image={AppGrid} Alt="app_grid" />
              {/* <Icon Image={} */}
            </NavbarRight>
          </div>
        </div>
      </header>
    </>
  );
}

const IconButton = Styled.button`


`;

const NavbarLeft = Styled.div`
 display:flex;
 

`;

const NavbarRight = Styled.div``;

export default Navbar;
