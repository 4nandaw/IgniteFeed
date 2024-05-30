import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    const name = "Ananda Vilar Vidal";
    const career = "Web Developer";
    const cover = 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2831&auto=format&fit=crop&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const profile = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={cover}
            />
            <div className={styles.profile}>
                <Avatar src={profile} />
                <strong>{name}</strong>
                <span>{career}</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}