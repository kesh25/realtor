import Image from 'next/image';

import styles from "@/styles/components/Image.module.css"; 
 

function AppImage({src, alt, width, height, onClick, blur, internal, style}) {
    return (
       <>
          {
             src && (
                <Image
                  src={src}   
                  alt={alt}
                  width={width || 95}
                  height={height || 95}
                  className={styles.image}
                  onClick={onClick}
                  style={{...style}}
                />
             )
          }
       </>
    );
 }
 
 export default AppImage;