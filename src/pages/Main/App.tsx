import React from "react";
import { StartPlayGame } from "../../components/StartPlayGame/StartPlayGame";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";
import { BankCount } from "../../components/BankCount/BankCount";
import { Board } from "../../components/Board/Board";
import { Loader } from "../../components/LoaderCircle/Loader";
import { loadingType } from "../../store/reducers/gameReducer";

function App() {
  const { startGame } = useSelector((state: AppRootStateType) => state.main);
  const { loading } = useSelector((state: AppRootStateType) => state.game);

  return (
    <div>
      {loading === loadingType.loading && <Loader />}
      {startGame ? (
        <div>
          <BankCount />
          <Board />
        </div>
      ) : (
        <StartPlayGame />
      )}
    </div>
  );
}

export default App;
