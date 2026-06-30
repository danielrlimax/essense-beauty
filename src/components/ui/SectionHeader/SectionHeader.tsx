import styles from './SectionHeader.module.css';

type SectionHeaderAlign = 'left' | 'center';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: SectionHeaderAlign;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const headerClassName = [styles.header, styles[align]]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={headerClassName}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

      <h2 className={styles.title}>{title}</h2>

      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}