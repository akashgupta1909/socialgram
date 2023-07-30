"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./GridCard.module.css";
import staticData from "@/app/utils/staticData";
import { blurHashToDataURL } from "./helpers/blurHash";

const GridCard = ({
  cardAsset,
  profilePicture,
  userName,
  description,
  likedPhotoIndex,
  index,
  handleImagesClick,
  newLimit,
  isLast,
  blurHash,
}) => {
  const cardRef = useRef(null);
  const { thirdPreWrapperAssets: gridImagesAssetsData } =
    staticData.secondaryWrapper;

  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [isLast]);

  const gridImagesList = Object.keys(gridImagesAssetsData)
    .splice(0, 3)
    .map((item) => {
      const objectKeys = Object.keys(gridImagesAssetsData);
      return (
        <div className={styles.gridImageWrapper} key={item}>
          <Image
            src={
              item === objectKeys[0] && likedPhotoIndex?.includes(index)
                ? gridImagesAssetsData[objectKeys[3]]
                : gridImagesAssetsData[item]
            }
            alt="Grid Image"
            className={styles.gridImage}
            onClick={() => handleImagesClick(item, index)}
          />
        </div>
      );
    });
  return (
    <div className={styles.gridItem} ref={cardRef}>
      <div className={styles.cardAssetWrapper}>
        <Image
          src={cardAsset}
          alt="Grid Item"
          className={styles.gridItemAsset}
          fill={true}
          placeholder="blur"
          blurDataURL={blurHashToDataURL(blurHash)}
          layout="fill"
          loading="lazy"
        />
      </div>
      <div className={styles.gridItemCaption}>
        <div className={styles.upperWrapper}>
          <div className={styles.profilePictureWrapper}>
            <Link href={`/user/${userName}`}>
              <div className={styles.profileImageWrapper}>
                <Image
                  src={profilePicture}
                  alt="Profile Picture"
                  className={styles.profilePicture}
                  fill={true}
                />
              </div>
            </Link>
            <div>
              <Link href={`/user/${userName}`}>
                <div className={styles.userName}>@{userName}</div>
              </Link>
            </div>
          </div>
          <div className={styles.imagesWrapper}>{gridImagesList}</div>
        </div>
        <div className={styles.lowerWrapper}>{description}</div>
      </div>
    </div>
  );
};

export default GridCard;
