import {
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
  FaDiscord,
} from 'react-icons/fa';

import { useColors } from '../../hooks/useColors';

import styles from './styles.module.scss';

type Network = 'whatsapp' | 'instagram' | 'telegram' | 'facebook' | 'discord';

type SocialMediaButtonProps = {
  network: Network;
};

export const SocialMediaButton = ({ network }: SocialMediaButtonProps) => {
  const { primary } = useColors();

  const icons = {
    whatsapp: <FaWhatsapp size={20} color={primary} />,
    instagram: <FaInstagram size={20} color={primary} />,
    telegram: <FaTelegramPlane size={20} color={primary} />,
    facebook: <FaFacebook size={20} color={primary} />,
    discord: <FaDiscord size={20} color={primary} />,
  };

  return <button className={styles.container}>{icons[network]}</button>;
};
