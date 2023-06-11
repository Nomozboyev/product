import { useContext } from "react"
import { NotesProvider } from "../../context"
import { ThemeContext } from "../../context/theme"
import { Footer } from "../footer"
import { Header } from "../header"
import { Main } from "../main"
import './layout.css'
export const Layout=()=>{
  const {theme} = useContext(ThemeContext);
    return (
        <>
        <div className={theme? 'container darc':'container'}>
          <Header/>
          <NotesProvider><Main/></NotesProvider>
          <Footer/>
        </div>
        </>
    )
}