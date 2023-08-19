import React from 'react';
import styles from './styles.module.css'
import Footer from '../Reusable/Footer/Footer';

const Layout = ({children}) => {
    return (
        <div className={styles.Container}>
            {children}
            <Footer/>
        </div>

    );
};

export default Layout;