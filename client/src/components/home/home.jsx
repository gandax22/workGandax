import React, { useState, useContext } from "react"
import {UserContext} from '../../context/user';
import styles from "./styles.module.css"

const Home = () => {
	const {user, setUser, logoutUser} = useContext(UserContext); 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [flag, setFlag] = useState(false)

    const registerUsers = async () => {
        if (username && password !== '') {
             const response = await fetch('/register', {
	            method: 'POST',
	            headers: {
	                'Content-Type': 'application/json',
	            },
	            body: JSON.stringify({ username, password }),
	        });


	        if (response.ok) {
		        setUser({name: username, password: password})
	            alert('Пользователь успешно зарегистрирован');
	        } else {
	            alert('Ошибка при регистрации пользователя');
	        }
        }else{
            alert('Ошибка при регистрации пользователя, заполните все поля')
        }
       
    };

    const loginUsers = async () => {
       if (username && password !== '') {
          const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
	        setUser({name: username, password: password})
            alert(`Вы вошли в аккаунт под логином ${username}`)
        } else {
            alert('Неверные имя пользователя или пароль')
        }
       }else{
        alert('Ошибка при авторизации пользователя, заполните все поля')
       }
      
    };


    const Logout = () => {
	    logoutUser();
    };

    return (
        <div className={styles.page}>
            {!user.name ? (
                <div>
                    {!flag ? (
                        <div className={styles.body}>
                            <div className={styles.container}>
                            <h1 className={styles.head}>Регистрация</h1>
                            <input
                                type="text"
                                placeholder="Логин пользователя"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={styles.inputUser}
                            />
                            <input
                                type="password"
                                placeholder="Пароль пользователя"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.inputPassword}
                            />
                            <button onClick={registerUsers} className={styles.btn}>Регистрация</button>
                            <p className={styles.text}>Есть аккаунт?</p>
                            <button onClick={() => setFlag(true)} className={styles.btnLogIn}>Войти в аккаунт</button>
                            </div>
                        </div>
                    ) : (
                            <div className={styles.body}>
                                <div className={styles.container}>
                                <h1 className={styles.head}>Авторизация</h1>
                                <input
                                    type="text"
                                    placeholder="Логин пользователя"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={styles.inputUser}
                                />
                                <input
                                    type="password"
                                    placeholder="Пароль пользователя"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={styles.inputPassword}
                                />
                                <button onClick={loginUsers} className={styles.btn}>Авторизироваться</button>
                                <p className={styles.text}>Нет аккаунт?</p>
                                <button onClick={() => setFlag(false)} className={styles.btnLogIn}>Зарегистрировать аккаунт</button>
                                </div>
                            </div>
                    )}

                </div>

            ) : (
                <> 
                <div className={styles.cont}>
                <div className={styles.profile}>
                    <h1 className={styles.data}>Вы авторизовались под логином: {user.name}</h1>
                    <button onClick={Logout} className={styles.logout}>Выйти из аккаунта</button>
                </div>
                </div>
                    
                </>

            )}

        </div>
    )
}
export default Home