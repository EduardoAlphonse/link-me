import styles from './App.module.scss';
import { LinkButton } from './components/LinkButton';
import { Section } from './components/Section';
import { SocialMediaButton } from './components/SocialMediaButton';

import { useColors } from './hooks/useColors';

function App() {
  const colors = useColors();

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: colors.background }}
    >
      <div className={styles.header}>
        <img
          src="https://i1.sndcdn.com/artworks-Zg2yezSG5RRY-0-t500x500.jpg"
          alt="Foto de usuário"
        />
        <h1 style={{ color: colors.secondary }}>@_wiegraf</h1>
      </div>

      <div className={styles.linkButtonList}>
        <LinkButton
          label="React Bootcamp"
          iconBackgroundColor={colors.secondary}
        />
        <LinkButton
          label="Night coding playlist"
          iconBackgroundColor={colors.secondary}
        />
        <LinkButton
          label="Vue.JS free course"
          iconBackgroundColor={colors.secondary}
        />
        <LinkButton
          label="Mastering JavaScript course"
          iconBackgroundColor={colors.secondary}
        />
      </div>

      <Section title="Social Media">
        <div className={styles.socialMediaContent}>
          <SocialMediaButton network="whatsapp" />
          <SocialMediaButton network="instagram" />
          <SocialMediaButton network="facebook" />
          <SocialMediaButton network="telegram" />
        </div>
      </Section>
    </div>
  );
}

export default App;
