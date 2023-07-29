import cameraIcon from "../assets/Navbar/cameraIcon.svg";
import settingIcon from "../assets/Navbar/settingIcon.svg";
import shareIcon from "../assets/Navbar/shareIcon.svg";
import exploreIcon from "../assets/SecondaryWrapper/exploreIcon.svg";
import homeIcon from "../assets/SecondaryWrapper/homeIcon.svg";
import igtvIcon from "../assets/SecondaryWrapper/igtvIcon.svg";
import likeIcon from "../assets/SecondaryWrapper/likeIcon.svg";
import likeHollowIcon from "../assets/SecondaryWrapper/likeHollowIcon.svg";
import notificationIcon from "../assets/SecondaryWrapper/notificationIcon.svg";
import reelsIcon from "../assets/SecondaryWrapper/reelsIcon.svg";
import userIcon from "../assets/SecondaryWrapper/userIcon.svg";
import verifiedIcon from "../assets/SecondaryWrapper/verifiedIcon.svg";
import commentIcon from "../assets/SecondaryWrapper/commentIcon.svg";
import searchIcon from "../assets/SecondaryWrapper/searchIcon.svg";

const staticData = {
  navbar: {
    logoText: "SocialGram",
    searchBarPlaceholder: "Username, Hastag, Location",
    newPostText: "New Post",
    rightComponentAssets: {
      cameraIcon,
      settingIcon,
      shareIcon,
    },
  },
  secondaryWrapper: {
    firstPreWrapperAssets: {
      verifiedIcon,
      userIcon,
      likeIcon,
    },
    secondPreWrapperAssets: {
      Home: homeIcon,
      Explore: exploreIcon,
      Reels: reelsIcon,
      iGTV: igtvIcon,
      Notification: notificationIcon,
      Profile: userIcon,
    },
    secondPreWrapperAssetsLinks: {
      Home: "/",
      Explore: "/",
      Reels: "/",
      iGTV: "/",
      Notification: "/",
      Profile: "/user/akashgupta1909",
    },
    thirdPreWrapperAssets: {
      likeHollowIcon,
      commentIcon,
      shareIcon,
      likeIcon,
    },
  },
  hamBurgerMenuItems: {
    Home: homeIcon,
    Explore: exploreIcon,
    Reels: reelsIcon,
    iGTV: igtvIcon,
    Notification: notificationIcon,
    Profile: userIcon,
    Settings: settingIcon,
    Search: searchIcon,
  },
  hamBurgerMenuItemsLinks: {
    Home: "/",
    Explore: "/",
    Reels: "/",
    iGTV: "/",
    Notification: "/",
    Profile: "/user/akashgupta1909",
    Settings: "/",
    Search: "/",
  },
  userProfile: {
    extraAssets: {
      igtvIcon,
    },
    buttons: ["Edit Profile", "Edit Bio"],
  },
  toggleButton: ["Grid", "List"],
};

export default staticData;
