import Image from "next/image";
import Link from "next/link";
import staticData from "@/app/utils/staticData";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { navbar: navBarData } = staticData;

  const rightComponentAssets = Object.keys(navBarData.rightComponentAssets).map(
    (key) => {
      return (
        <div className={styles.imageWrapper} key={key}>
          <Image
            src={navBarData.rightComponentAssets[key]}
            alt={`${key} icon`}
            fill={true}
            loading="lazy"
            className={styles.rightComponentIndividualAsset}
          />
        </div>
      );
    }
  );

  return (
    <nav className={styles.wrapper}>
      <Link href="/">
        <div className={styles.leftComponent}>{navBarData.logoText}</div>
      </Link>
      <div className={styles.centerComponent}>
        <input type="text" placeholder={navBarData.searchBarPlaceholder} />
      </div>
      <div className={styles.rightComponent}>
        <div className={styles.rightComponentAssets}>
          {rightComponentAssets}
        </div>
        <div className={styles.newPostWrapper}>{navBarData.newPostText}</div>
      </div>
    </nav>
  );
};

export default Navbar;
