import Styled from "styled-components";
import {
  AppGrid,
  Logo,
  Menu,
  Search,
  SearchWhite,
  MenuWhite,
  AppGridWhite,
  Sun,
  Moon,
} from "../../lib/assets";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/UseTheme";
import { Container } from "../shared/Container";
import { toggleTheme } from "../../redux/slices/themeSlice";

const IconButton = Styled.button`
  border:none;
  outline:none;
  background:inherit;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`;
const NavbarWrapper = Styled.div`
  padding:0.8rem 0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  .nav__links{
    display:flex;
    align-items:center;
    gap:1.5rem;
  }
`;

function Icon({
  Image,
  Alt,
  OnClick,
}: {
  Image: string;
  Alt: string;
  OnClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <IconButton onClick={OnClick} type="button">
        <img src={Image} alt={Alt} />
      </IconButton>
    </>
  );
}

function Navbar() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  return (
    <>
      <header>
        <Container>
          <NavbarWrapper>
            {/* Navbar left Container  */}
            <div className="navbar__left nav__links">
              <Icon
                Image={theme == "light" ? Menu : MenuWhite}
                Alt="nav_menu"
              />
              <Icon Image={Logo} Alt="DoIt" />
            </div>
            {/* Navbar right Container  */}
            <div className="navbar__right nav__links">
              <Icon
                Image={theme == "light" ? Search : SearchWhite}
                Alt="search"
              />
              <Icon
                Image={theme == "light" ? AppGrid : AppGridWhite}
                Alt="app_grid"
              />
              <Icon
                OnClick={() => {
                  dispatch(toggleTheme());
                }}
                Image={theme == "light" ? Moon : Sun}
                Alt="Theme"
              />
            </div>
          </NavbarWrapper>
        </Container>
      </header>
    </>
  );
}

export default Navbar;
