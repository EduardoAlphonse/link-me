import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src="https://i1.sndcdn.com/artworks-Zg2yezSG5RRY-0-t500x500.jpg"
          alt="Foto de usuário"
        />
        <h1 style={{ color: '#f00 ' }}>@_username</h1>
      </div>
    </div>
  );
}

export default App;
