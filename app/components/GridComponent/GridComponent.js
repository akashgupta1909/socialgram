"use client";
import { useState } from "react";
import styles from "./GridComponent.module.css";
import staticData from "@/app/utils/staticData";
import Image from "next/image";

// Temp Assets
import DogImage from "@/app/assets/TempAssets/dog.png";
import BadmintonImage from "@/app/assets/TempAssets/badminton.png";
import ProfilePitcture from "@/app/assets/TempAssets/profilePicture.png";
import GridCard from "./GridCard/GridCard";
import Loader from "../Loader/Loader";

const tempGridData = [
  {
    asset: DogImage,
    profilePicture: ProfilePitcture,
    userName: "akashgupta1909",
    description: "This is a description",
  },
  {
    asset: BadmintonImage,
    profilePicture: ProfilePitcture,
    userName: "akashgupta1909",
    description: "This is a description",
  },
  {
    asset: DogImage,
    profilePicture: ProfilePitcture,
    userName: "akashgupta1909",
    description: "This is a description",
  },
  {
    asset: BadmintonImage,
    profilePicture: ProfilePitcture,
    userName: "akashgupta1909",
    description: "This is a description",
  },
  {
    asset: DogImage,
    profilePicture: ProfilePitcture,
    userName: "akashgupta1909",
    description: "This is a description",
  },
  {
    asset: BadmintonImage,
    profilePicture: ProfilePitcture,
    userName: "akashgupta1909",
    description: "This is a description",
  },
];

const noPhotosMessage = "No Photos Found";

const GridComponent = ({
  isListView,
  photosData = tempGridData,
  page,
  setPage,
  isPhotosLoading,
}) => {
  const { thirdPreWrapperAssets: gridImagesAssetsData } =
    staticData.secondaryWrapper;

  const [likedPhotosIndex, setLikedPhotosIndex] = useState([0, 2]);

  const handleImagesClick = (item, index) => {
    if (item !== Object.keys(gridImagesAssetsData)[0]) return;
    if (likedPhotosIndex.includes(index)) {
      const tempLikedPhotosIndex = likedPhotosIndex.filter(
        (likedPhotoIndex) => likedPhotoIndex !== index
      );
      setLikedPhotosIndex(tempLikedPhotosIndex);
      return;
    }
    setLikedPhotosIndex([...likedPhotosIndex, index]);
  };

  const gridItems = photosData?.map((item, index) => {
    return (
      <GridCard
        key={index}
        cardAsset={item?.urls?.regular || item?.asset}
        userName={item?.user?.username || item?.userName}
        description={item?.description}
        profilePicture={
          item?.user?.profile_image?.medium || item.profilePicture
        }
        likedPhotoIndex={likedPhotosIndex}
        index={index}
        handleImagesClick={handleImagesClick}
        isLast={index === photosData.length - 1 ? true : false}
        newLimit={() => setPage(page + 1)}
        blurHash={item?.blur_hash}
      />
    );
  });

  return (
    <div className={isListView ? styles.listWrapper : styles.gridWrapper}>
      {photosData.length > 0 ? (
        gridItems
      ) : (
        <div className={styles.noPhotosWrapper}>{noPhotosMessage}</div>
      )}
      {isPhotosLoading && <Loader />}
    </div>
  );
};

export default GridComponent;
