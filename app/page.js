"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import usePhotos from "./hooks/usePhotos";
import { fixedUserName } from "./utils/config";
import useUser from "./hooks/useUser";
import styles from "./styles/page.module.css";
import Navbar from "./components/Navbar/Navbar";
import SecondaryWrapper from "./components/HomePage/SecondaryWrapper/SecondaryWrapper";
import ProfileSection from "./components/HomePage/SecondaryWrapper/ProfileSection/ProfileSection";
import GridComponent from "./components/GridComponent/GridComponent";
import Loader from "./components/Loader/Loader";

export default function Home() {
  const {
    loading: photosLoading,
    photos: randomPhotos,
    currPageNo,
    isMorePhotos,
  } = useSelector((state) => state.photos);
  const { isFixedUserLoading: userLoading, fixedUser: userData } = useSelector(
    (state) => state.user
  );
  const perPage = 10;
  const [currPage, setCurrPage] = useState(currPageNo + 1);
  const { fetchUserHook } = useUser();
  const { fetchRandomPhotosHook } = usePhotos();

  useEffect(() => {
    if (!photosLoading && isMorePhotos) {
      fetchRandomPhotosHook(currPage, perPage);
    }
  }, [currPage, fetchRandomPhotosHook]);

  useEffect(() => {
    if (!userLoading && !userData) fetchUserHook(fixedUserName, true);
  }, [fetchUserHook, userLoading, userData]);

  return (
    <main className={styles.wrapper}>
      {!userData ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <SecondaryWrapper
            topLeftComponent={<ProfileSection userData={userData} />}
            rightComponent={
              <GridComponent
                isListView={true}
                photosData={randomPhotos}
                page={currPage}
                setPage={setCurrPage}
                isPhotosLoading={photosLoading}
              />
            }
          />
        </>
      )}
    </main>
  );
}
