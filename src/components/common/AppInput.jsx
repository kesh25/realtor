import React from 'react';

import styles from "@/styles/components/AppInput.module.css"; 

function AppInput({type, value, setValue, err, icon, label, validate}) {
    const [error, setError] = React.useState(err || "");
    const inputRef = React.useRef(); 

    return (
        <>
            <div className={`${styles.input}`} ref={inputRef}>
                {label && label}
                <input 
                    type={type || "text"} 
                    value={value} 
                    onChange={e => setValue(e.target.value)} 
                    onFocus={e => inputRef.current.className = `${styles.input} ${styles.active}`}
                    onBlur={e => inputRef.current.className = `${styles.input}`}
                />
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </>
            
    );
}

export default AppInput;