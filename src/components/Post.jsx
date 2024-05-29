import styles from './Post.module.css';

export function Post( {author, career} ) {
    const profile = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src={profile} />
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>{career}</span>
                    </div>
                </div>

                <time title='29 de maio às 20:30' dateTime='2024-05-29'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=''>jane.design/doctorcare</a></p>
                <p><a href=''>#novoprojeto</a> <a href=''>#nlw</a> <a href=''>#rocketseat</a></p>
            </div>
        </article>
    );
}