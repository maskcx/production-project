import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export default function App() {

    const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}> 

    <button onClick={toggleTheme}>TOGGLE</button>

    <Link to={'/'}>Main</Link>  
    <Link to={'/about'}>About</Link>  
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
                <Route path={'/'} element={<MainPage/>} />
                <Route path={'/about'} element={<AboutPage/>} />
        </Routes>
    </Suspense>
    </div>
  )
}
