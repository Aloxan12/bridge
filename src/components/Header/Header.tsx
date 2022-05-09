import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { NavLink, useMatch, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";
import { actions } from "../../store/reducers/mainReducer";
import { actions as gameActions } from "../../store/reducers/gameReducer";

export const Header = () => {
  const isAuth = useSelector<AppRootStateType, boolean>(
    (state) => state.main.isAuth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSameUrl = !!useMatch("login");
  const sameUrl = !!useMatch("bridge");

  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      navigate("/login");
      dispatch(actions.loginAC(false));
    } else {
      dispatch(actions.loginAC(true));
      if (isSameUrl || sameUrl) {
        navigate("/");
      }
    }
  }, [isAuth]);

  const logoutHandler = () => {
    dispatch(actions.logoutAC(false));
    dispatch(actions.setStartGameAC(false));
    dispatch(gameActions.setUserAC({ username: "", count: 0, deckId: "" }));
    dispatch(gameActions.setGameDataAC(null));
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <div className={styles.mainHeaderWrap}>
      <div className={styles.mainHeaderTitle}>Bridge</div>
      <div className={styles.mainHeaderAuth}>
        {isAuth ? (
          <div className={styles.mainHeaderIsAuth}>
            <span>
              <a className={styles.loginLink} onClick={logoutHandler}>
                Выйти
              </a>
            </span>
          </div>
        ) : (
          <div className={styles.mainHeaderIsLogout}>
            <NavLink className={styles.loginLink} to={"/login"}>
              Войти
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
