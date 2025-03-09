import { AppGrid, Logo, Menu, Search } from "../../lib/assets";
import "../../lib/utills.css";
import Styles from "./Navbar.module.css";

function Icon({ Image, Alt }: { Image: string; Alt: string }) {
  return (
    <>
      <button
        type="button"
        className={`${Styles.NavButton} flex items-center justify-center`}
      >
        <img src={Image} alt={Alt} />
      </button>
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
            <div className="nav_left_container flex items-center">
              <Icon Image={Menu} Alt="nav_menu" />
              <Icon Image={Logo} Alt="DoIt" />
            </div>
            {/* Navbar right Container  */}
            <div className="nav_right_container flex items-center">
              <Icon Image={Search} Alt="search" />
              <Icon Image={AppGrid} Alt="app_grid" />
              {/* <Icon Image={} */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
