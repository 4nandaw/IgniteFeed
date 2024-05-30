import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment({ author, profile }) {
    return (
        <div className={styles.comment}>
            <img src={profile} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author}</strong>
                            <time title='29 de maio às 20:30' dateTime='2024-05-29'>Cerca de 1hr atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={22}/>
                        </button>
                    </header>

                    <p>Adorei seu novo portifa Devon!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}