import React from 'react'; 
import Link from "next/link"; 
import { useRouter } from 'next/router';

import {IoSearchSharp} from "react-icons/io5"; 

import styles from "@/styles/components/Nav.module.css"; 
import Image from "./Image"; 
import { IMAGES } from '@/assets';


function Nav({offset}) {
    const router = useRouter(); 

    return (
        <div className={styles.container}>
            <div className={`${styles.nav} ${offset > 70 ? styles.scrolled: ""}`}>
                <div className={styles.logo}>
                    <Image 
                        src={IMAGES.LOGO}
                        alt={'Logo'}
                        width={40}
                        height={40}
                    />
                    <h2>&nbsp;Realtor</h2>
                </div>
                {/* nav */}
                <Navigation path={router.pathname} offset={offset}/>
                <Search offset={offset}/>
            </div>
        </div>
    )
}; 


export default Nav; 

const Navigation = ({path, offset}) => (
    <div className={`${styles.navigation} ${offset > 70 ? styles.scrolled: ""}`}>
        {["Home", "Properties", "Service", "About", "Contact"].map(nav => <Link href={`/${nav !== "Home" ? nav.toLowerCase(): ""}`} key={nav} className={`${(path === ('/' + nav.toLowerCase()) || path === "/" && nav === "Home") ? styles.active: ""}`}>{nav}</Link>)}
    </div>
)
const Search = ({offset}) => (
    <Link href="/search" className={`${styles.search} ${offset > 70 ? styles.scrolled: ""}`}><IoSearchSharp size={20} />&nbsp;Search</Link>
)