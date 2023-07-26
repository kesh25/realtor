import React from 'react';

import styles from "@/styles/components/Layout.module.css";

import Nav from "./common/Nav"; 

function Layout({children}) {
    const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
        const onScroll = () => setOffset(Math.ceil(window.pageYOffset));
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [])
   
    return (
        <div className={styles.container}>
            <Nav offset={offset}/> 
            <main>
                {children}
            </main>
    
                {/* footer <Footer />*/}
                 
             
        </div>
    );
}

export default Layout;