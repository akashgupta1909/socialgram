"use client";
import { useState } from "react";
import styles from "./HamburgerMenu.module.css";
import Hamburger from "hamburger-react";
import staticData from "@/app/utils/staticData";
import SideBarMenu from "../../HomePage/SecondaryWrapper/SideBarMenu/SideBarMenu";

const HamburgerMenu = () => {
  const { hamBurgerMenuItems, hamBurgerMenuItemsLinks } = staticData;
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.hamburgerMenuWrapper}>
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      <div
        className={
          styles.sideMenuWrapper + " " + (isOpen && styles.sideMenuWrapperOpen)
        }
      >
        <SideBarMenu
          secondPreWrapperAssetsData={hamBurgerMenuItems}
          assetsLinkData={hamBurgerMenuItemsLinks}
        />
      </div>
    </div>
  );
};

export default HamburgerMenu;
