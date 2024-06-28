import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helper/classNames/classNames";

export default function App() {

    const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}> 

    <button onClick={toggleTheme}>TOGGLE</button>

    <Link to={'/'}>Main</Link>  
    <Link to={'/about'}>About</Link>  
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
                <Route path={'/'} element={<MainPageAsync/>} />
                <Route path={'/about'} element={<AboutPageAsync/>} />
        </Routes>
    </Suspense>
    </div>
  )
}
