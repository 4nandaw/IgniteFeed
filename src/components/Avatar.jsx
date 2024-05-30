import styles from "./Avatar.module.css";

export function Avatar({ src, hasBorder }) {
    const border = hasBorder !== false;
  return (
    <img
      className={border ? styles.avatar : styles.avatarWithoutBorder}
      src={src}
    />
  );
}
