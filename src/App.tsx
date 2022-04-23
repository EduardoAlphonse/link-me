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
        <LinkButton label="React Bootcamp" />
        <LinkButton label="Night coding playlist" />
        <LinkButton label="Vue.JS free course" />
        <LinkButton label="Mastering JavaScript course" />
      </div>

      <Section title="Social Media">
        <div className={styles.socialMediaContent}>
          <SocialMediaButton network="whatsapp" />
          <SocialMediaButton network="instagram" />
          <SocialMediaButton network="facebook" />
          <SocialMediaButton network="telegram" />
        </div>
      </Section>

      <Section title="Gallery">
        <div className={styles.galleryContent}>
          <img
            src="http://cdn.espn.com.br/image/wide/622_79f89a55-5124-4707-b156-49d19a25b4d6.jpg"
            alt="Foto"
          />
          <img
            src="https://i1.sndcdn.com/artworks-ScQ4Tiyhe2yQ9iJk-3kUe9g-t500x500.jpg"
            alt="Foto"
          />
          <img
            src="https://static.senpai.gg/lol/img/champion/tiles/Vayne_0.webp"
            alt="Foto"
          />
          <img
            src="http://cdn.espn.com.br/image/wide/622_79f89a55-5124-4707-b156-49d19a25b4d6.jpg"
            alt="Foto"
          />
        </div>
      </Section>
    </div>
  );
}

export default App;
