import mainLogo from '../images/mrmrschefs_logo.png';
import styles from '../styles/my-style.module.css';

const Header = () => {
  return (
    <>
      <div className='row shadow-sm p-2'>
        <div className='col'>
          <img src={mainLogo} alt='Main Logo' className={styles.imagelogo}/>
        </div>
        <div className='col p-3'>
          <h3 className='h3 text-end'>Login</h3>
        </div>
      </div>
    </>
  )
}

export { Header };