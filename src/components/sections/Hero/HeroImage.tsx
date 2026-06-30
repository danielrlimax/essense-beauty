import styles from './Hero.module.css';

type HeroImageProps = {
  src: string;
  alt: string;
};

export function HeroImage({ src, alt }: HeroImageProps) {
  return <img className={styles.image} src={src} alt={alt} />;
}