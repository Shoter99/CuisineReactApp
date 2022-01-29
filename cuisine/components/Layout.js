import NavBar from './NavBar';
import styles from '../styles/Home.module.css'

const Layout = ({children}) => {
  return (
      <>
    <NavBar />
    <div className={styles.container}>
        <main className={styles.main}>
            {children}
        </main>
    </div>
    
    </>
  );
};

export default Layout;

