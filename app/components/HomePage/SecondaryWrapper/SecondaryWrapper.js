import staticData from "@/app/utils/staticData";
import HamburgerMenu from "../../Navbar/HamburgerMenu/HamburgerMenu";
import styles from "./SecondaryWrapper.module.css";
import SideBarMenu from "./SideBarMenu/SideBarMenu";

const SecondaryWrapper = ({ topLeftComponent, rightComponent }) => {
  const {
    secondPreWrapperAssets: secondPreWrapperAssetsData,
    secondPreWrapperAssetsLinks: assetsLinkData,
  } = staticData.secondaryWrapper;
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.leftSubWrapper}>{topLeftComponent}</div>
        <div className={styles.leftSubWrapper}>
          <SideBarMenu
            secondPreWrapperAssetsData={secondPreWrapperAssetsData}
            assetsLinkData={assetsLinkData}
          />
        </div>
        <div className={styles.hamburgerMenuWrapper}>
          <HamburgerMenu />
        </div>
      </div>
      <div className={styles.rightWrapper}>{rightComponent}</div>
    </div>
  );
};

export default SecondaryWrapper;
