import Image from "next/image";
import styles from "./ProfileSection.module.css";
import staticData from "@/app/utils/staticData";
import { fixedUserName } from "@/app/utils/config";
// Temp Data
import profilePicture from "@/app/assets/TempAssets/profilePicture.png";

const tempProfileData = {
  profilePicture,
  userName: "akashgupta1909",
  fullName: "Akash Gupta",
  followers: "121K",
  likes: "900K",
  posts: "100",
  description: "Eyes are never quiet.",
};

const ProfileSection = ({ isUserProfile, userData }) => {
  const { secondaryWrapper: secondaryWrapperData } = staticData;
  const { userProfile: userProfileData } = staticData;

  const buttonList = userProfileData.buttons.map((item) => {
    return (
      <button key={item} className={styles.button}>
        {item}
      </button>
    );
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.profilePictureWrapper}>
        <Image
          src={userData?.profile_image?.large || tempProfileData.profilePicture}
          alt="Profile Picture"
          className={styles.profilePicture}
          width={100}
          height={100}
        />
      </div>
      <div className={styles.fullNameWrapper}>
        <span className={styles.fullName}>
          {(userData?.first_name || " ") + " " + (userData?.last_name || " ")}
        </span>
        <span>
          <Image
            src={secondaryWrapperData.firstPreWrapperAssets.verifiedIcon}
            alt="Verified Icon"
            className={styles.verifiedIcon}
          />
        </span>
      </div>
      <div className={styles.userNameWrapper}>
        @{userData?.username || tempProfileData.userName}
      </div>
      {isUserProfile && (
        <div className={styles.descriptionWrapper}>
          {userData?.bio || tempProfileData.description}
        </div>
      )}
      <div className={styles.followersWrapper}>
        <div>
          <Image
            src={secondaryWrapperData.firstPreWrapperAssets.userIcon}
            alt="Like Icon"
            className={styles.followersIcon}
          />
          <span className={styles.followersCount}>
            {userData?.followers_count ?? tempProfileData.followers}
          </span>
        </div>
        <div>
          <Image
            src={secondaryWrapperData.firstPreWrapperAssets.likeIcon}
            alt="Like Icon"
            className={styles.followersIcon}
          />
          <span className={styles.followersCount}>
            {userData?.total_likes ?? tempProfileData.likes}
          </span>
        </div>
        {isUserProfile && (
          <div>
            <Image
              src={userProfileData.extraAssets.igtvIcon}
              alt="IGTV Icon"
              className={styles.followersIcon}
            />
            <span className={styles.followersCount}>
              {userData?.total_photos ?? tempProfileData.posts}
            </span>
          </div>
        )}
      </div>

      {isUserProfile && userData?.username === fixedUserName && (
        <div className={styles.buttonWrapper}>{buttonList}</div>
      )}
    </div>
  );
};

export default ProfileSection;
