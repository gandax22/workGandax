import styles from "./styles.module.css"
const Comment = (props) => {
    return (
        <div className="comment">
            <div className={styles.wrapper}>
            <input
                value={props.inputValue}
                onChange={(e) => props.setInputValue(e.target.value)}
                className={styles.input}
                placeholder="Напиши сообщение"
            />
            <button onClick={props.changeChat} className={styles.btn}>Отправить</button>
            <button onClick={props.deleteHistory} className={styles.btn}>Удалить</button>
        </div>
        </div>
        

    );
};

export default Comment;
