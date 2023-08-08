import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getNameSymbols } from "../../redux/slices/symbolsSlice";
import { Header } from "../Header/Header";
import { MainPage } from "../../pages/MainPage/MainPage";
import { StocksPage } from "../../pages/StocksPage/StocksPage";
import { TAppDispatch } from "../../redux/store";

import "./App.scss";

function App() {
  const dispatch = useDispatch<TAppDispatch>();
  useEffect(() => {
    dispatch(getNameSymbols());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path="quotes" element={<StocksPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
