import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { useContext } from 'react';
import {UserContext} from '../../context/user';

const Header = () =>{
    const { user } = useContext(UserContext);

    return(
      <div className={styles.module}>
        <nav className={styles.navigation}>
          <Link  to="/" className={styles.a}>Home Pages</Link>
          {user.name && (
            <>
              <Link to="/chat" className={styles.a}>Messages</Link>
              <Link to="/commands" className={styles.a}>List Commands</Link>
            </>
          )}
        </nav>
      </div>
    )
}

export default Header;