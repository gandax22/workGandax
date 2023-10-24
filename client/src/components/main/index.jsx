import { Route, Routes } from "react-router-dom"
import styles from "./styles.module.css"
import Home from "../home/home"
import Chat from "../chat"
import Commands from "../api/commands"
const Main = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/commands" element={<Commands />} />
            </Routes>
        </div>

    )
}
export default Main