import React from 'react';
import { Oval } from  'react-loader-spinner'

import styles from "@/styles/components/AppInput.module.css"; 
import { useRouter } from 'next/router';

function AppButton({onClick, text, icon, type}) {
    const router = useRouter(); 
    const [loading, setLoading] = React.useState(false); 

    const handleClick = () => {
        if (loading) return; 
        let {redirect} = router.query; 
        setLoading(true); 
        setTimeout( () => {
            
            setLoading(false); 
            let fn = onClick(); 
            if (text === 'Submit') router.push(redirect || "/gigs"); 
        }, 2500)
    }

    return (
        <div className={styles.button} onClick={handleClick}>
            {
                !loading ? (
                    <>
                        {text && <p>{text}&nbsp;</p>}
                        {icon && icon}
                    </>
                ): (
                    <>
                        <Oval
                            height={25}
                            width={25}
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#4fa94d"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />
                    </>
                )
            }
        </div>
    );
}

export default AppButton;