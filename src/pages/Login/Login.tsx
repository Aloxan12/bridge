import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../store/reducers/mainReducer";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const loginHandler = async (username: string, password: string) => {
    try {
      if (username === "" || password === "") {
        setError("Все поля должны быть заполнены!");
      } else if (username !== "admin" || password !== "123456") {
        setError("Имя пользователя или пароль введены не верно");
      } else {
        dispatch(actions.loginAC(true));
        localStorage.setItem("isAuth", "true");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="auth_wrap">
        <div className="registration-block">
          <div className="header-block">
            <span>Добро пожаловать</span>
          </div>
          <div className="form-block">
            <div className="form-item">
              <label htmlFor="username">Введите username:</label>

              <input
                type="text"
                value={username}
                placeholder="Введите свой username"
                onChange={(e) => {
                  setError("");
                  setUsername(e.currentTarget.value);
                }}
                name="username"
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Введите пароль:</label>
              <input
                type="password"
                value={password}
                placeholder="Введите пароль"
                onChange={(e) => {
                  setError("");
                  setPassword(e.currentTarget.value);
                }}
                name="password"
              />
            </div>
            <div className="form-item btn-block">
              <button
                className="btn"
                onClick={() => loginHandler(username, password)}
              >
                Войти
              </button>
              {error && <div className="error-text">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
