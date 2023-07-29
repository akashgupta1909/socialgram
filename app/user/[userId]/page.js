"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GridComponent from "@/app/components/GridComponent/GridComponent";
import ProfileSection from "@/app/components/HomePage/SecondaryWrapper/ProfileSection/ProfileSection";
import SecondaryWrapper from "@/app/components/HomePage/SecondaryWrapper/SecondaryWrapper";
import Navbar from "@/app/components/Navbar/Navbar";
import useUser from "@/app/hooks/useUser";
import styles from "./page.module.css";
import staticData from "@/app/utils/staticData";
import { fetchUserPhotosSuccess } from "@/app/redux/user/actions";
import Loader from "@/app/components/Loader/Loader";

const UserProfile = ({ params }) => {
  const dispatch = useDispatch();
  const {
    loading: userLoading,
    user: userData,
    photos: userPhotos,
    userPhotosLoading,
    currPageNo,
    isMorePhotos,
  } = useSelector((state) => state.user);

  const { toggleButton: toggleButtonData } = staticData;
  const perPage = 10;
  const isNewUser =
    userPhotos[0]?.user?.username !== params.userId ? true : false;
  const [currPage, setCurrPage] = useState(isNewUser ? 1 : currPageNo + 1);
  const [isToggled, setIsToggled] = useState(false);

  const { fetchUserHook, fetchUserPhotosHook } = useUser();

  useEffect(() => {
    if (!userLoading && (!userData || isNewUser)) fetchUserHook(params.userId);
  }, [fetchUserHook, params.userId, isNewUser]);

  useEffect(() => {
    if (isNewUser && currPage === 1) {
      dispatch(fetchUserPhotosSuccess([], currPage));
    }
    if (!userPhotosLoading && (isMorePhotos || isNewUser)) {
      fetchUserPhotosHook(params.userId, currPage, perPage, isNewUser);
    }
  }, [currPage, fetchUserPhotosHook]);

  const handleToggleChange = (e) => {
    setIsToggled(e.target.checked);
  };

  return (
    <div className={styles.wrapper}>
      {userLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <SecondaryWrapper
            topLeftComponent={<></>}
            rightComponent={
              <div className={styles.rightComponentWrapper}>
                <ProfileSection isUserProfile={true} userData={userData} />
                <div className={styles.toggleButtonWrapper}>
                  <div>{toggleButtonData[0]}</div>
                  <label className={styles.switch}>
                    <input type="checkbox" onChange={handleToggleChange} />
                    <span className={styles.slider + " " + styles.round} />
                  </label>
                  <div>{toggleButtonData[1]}</div>
                </div>
                <GridComponent
                  isListView={isToggled ? true : false}
                  photosData={userPhotos}
                  page={currPage}
                  setPage={setCurrPage}
                  isPhotosLoading={userPhotosLoading}
                />
              </div>
            }
          />
        </>
      )}
    </div>
  );
};

export default UserProfile;
