import { ReactNode } from 'react';

import { useColors } from '../../hooks/useColors';

import styles from './styles.module.scss';

type SectionProps = {
  title: string;
  children: ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  const { primary } = useColors();

  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      {children}
    </div>
  );
};
