"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import styles from "./SideBarMenu.module.css";
import Image from "next/image";

const SideBarMenu = ({ secondPreWrapperAssetsData, assetsLinkData }) => {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(
    pathname.includes("user")
      ? Object.keys(secondPreWrapperAssetsData)[5]
      : Object.keys(secondPreWrapperAssetsData)[0]
  );
  const handleMenuItemClick = (item) => {
    setCurrentTab(item);
  };

  const menuItemList = Object.keys(secondPreWrapperAssetsData).map((item) => {
    return (
      <Link key={item} href={assetsLinkData[item]}>
        <div
          className={
            styles.menuItem + " " + (currentTab === item && styles.activeItem)
          }
          onClick={() => handleMenuItemClick(item)}
        >
          <div className={styles.menuItemIconWrapper}>
            <Image
              src={secondPreWrapperAssetsData[item]}
              alt="Menu Item Icon"
              className={styles.menuItemIcon}
            />
          </div>
          <div className={styles.menuItemText}>{item}</div>
        </div>
      </Link>
    );
  });

  return <div className={styles.wrapper}>{menuItemList}</div>;
};

export default SideBarMenu;
