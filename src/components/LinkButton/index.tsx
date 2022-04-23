import { BiRightArrowAlt } from 'react-icons/bi';

import { useColors } from '../../hooks/useColors';

import styles from './styles.module.scss';

type LinkButtonProps = {
  label: string;
};

export const LinkButton = ({ label }: LinkButtonProps) => {
  const { secondary } = useColors();

  return (
    <button className={styles.container}>
      <span className={styles.label}>{label}</span>
      <span
        className={styles.iconWrapper}
        style={{ backgroundColor: secondary }}
      >
        <BiRightArrowAlt size={36} color={'#FFFFFF'} />
      </span>
    </button>
  );
};
