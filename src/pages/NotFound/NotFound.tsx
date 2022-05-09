import React from "react";
import styles from "./NotFound.module.css";
import paper from "../../utils/images/paper.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";

const arrNotFoundText = [
  "page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404",
  "page not found 404 page not found 404 page not error error 404 404 404 404 404 404 error error found 404 page not found 404 page not found 404 page not found 404 error 404 error page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page 404 404 404 404 404 404 404 not found 404",
  "error page not found error page not found error page not found  e404 404 404 404 404 404 404 not found error page not found e404 404 404 404 404 404 404 not found error page not found e404 404 404 404 404 404 404 not found error page not found e404 404 404 404 404 404 404 not found error page not found",
  "404 404 404 404 404 404 404 page not found 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 error error error error 404 404 404 404 error error error error 404 404 404 404 404 404 404 404  404 page not found 404 page not found 404  404 page not found 404 page not found 404",
  "page not found 404 page not found 404 page not found 404  404 404 404 404 404 404 404 page not found 404 page not found 404 page not found 404",
  "error error error error error error page not found 404 page not found error error error 404 page not found 404 page not found 404 page not found 404 page not found 404",
  "404 404 404 404 404 404 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 404 page not found 404 page not found 404 page not found 404 page 404 404 404 404 404 404 404 not found 404 404 page not found 404 page not found 404 page not found 404 page 404 404 404 404 404 404 404 not found 404 ",
  "found error page not found error 404 404 404 404 404 404 404 page not found error 404 404 404 404 404 404 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404",
  "page not found 404 page not found 404 page not found 404  404 404 404 404 404 404 404 404 404 404 404 404 404 404 page not found 404 page not found 404 page not found 404 404 404 404 404 404 404 404",
  "  404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404",
  "404 page not found 404 page not found 404 page not found 404 page not 404 page not found 404 found 404 page not found 404 page not found 404  404 found 404 page not found 404 page not found 404  404 found 404 page not found 404 page not found 404  404 found 404 page not found 404 page not found 404  404 found 404 page not found 404 page not found 404",
  "error error page not found 404 page not found 404 page not found 404 page not found 404 404 404 404 404 404 404 404 page not found 404 page not found 404",
  "404 page not found 404 404 404 404 404 404 404 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404  404 found 404 page not found 404 page not found 404",
  "page not found 404 page not found 404 page not found 404 page not found 404 404 page not found 404 page not found 404 page not found 404  404 found 404 page not found 404 page not found 404  404 found 404 page not found 404 page not found 404",
  "error 404 error page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page 404 404 404 404 404 404 404 not found 404",
  " 404 page not found 404 page not found 404 page not found 404 page not found 404 404 page 404 page not found 404 404 404 404 404 404 404 404 not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found 404 page not found",
];

export const NotFound = () => {
  const navigate = useNavigate();
  const isAuth = useSelector<AppRootStateType, boolean>(
    (state) => state.main.isAuth
  );
  return (
    <div className={styles.NotFoundWrap}>
      <img src={paper} alt={"not found"} />
      <div className={styles.NotFoundText}>404</div>
      <div className={styles.runningStringBlock}>
        {arrNotFoundText.map((item, i) => (
          <div key={`not found key ${i}`}>
            <span className={styles.runningStringText}>{item}</span>
          </div>
        ))}
        <div>
          <span>not found 404</span>
        </div>
      </div>
      <div className={styles.onGoMainBtn}>
        <div
          className={styles.redTablet}
          onClick={() => navigate(isAuth ? "/" : "/login")}
        ></div>
      </div>
      <div className={styles.onClosesBtn}>
        <div
          className={styles.blueTablet}
          onClick={() => navigate(isAuth ? "/" : "/login")}
        ></div>
      </div>
    </div>
  );
};
