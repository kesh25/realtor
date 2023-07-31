import Link from "next/link"; 

import {BiMapPin} from 'react-icons/bi';
import {BsFillBuildingFill}  from "react-icons/bs"; 
import {FaLayerGroup} from 'react-icons/fa';
import {FaShop} from "react-icons/fa6"
import {MdOutlineApartment, MdVilla} from "react-icons/md";
import {IoBedOutline} from "react-icons/io5"; 
import {LiaBathSolid, LiaRulerCombinedSolid} from "react-icons/lia";

import {Button, Image } from '@/components';
import styles from '@/styles/Home.module.css';

import {Head} from '@/utils'
import { IMAGES } from '@/assets';


export default function Home() {
  return (
    <>
      <Head />
      <Hero />
      <div
        style={{
          width: "var(--page-width)",
          margin: "0 auto"
        }}
      >
        <Icons />
        <Featured item={featured}/>
        <MidBanner />
        <Featured item={featured}/>
        <Popular />
        <Spacer />
      </div>
    </>
  )
}

// hero
const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.hero_text}>
      <h1 >Looking for <br /> your next home?</h1>
      <p className={styles.para}>Whether you are looking to rent or buy, our catalogue will help you help you find a place to call home.</p>
      <AlternateButton 
        text="View Catalog"
        link="/properties"
      />
    </div>
    <div className={styles.hero_image}>
      <Image 
        src={IMAGES.HERO}
        alt={"Hero image"}
        width={1200}
        height={900}
      />
    </div>
  </div>
);
const AlternateButton = ({text, link}) => <Link href={link} className={styles.hero_btn}>{text}</Link>

// icons section
const Icons = () => (
  <div className={styles.icons}>
    {
      icons.map((icon, index) => <Link href={icon.link} key={index}><span className={styles.icon}>{icon.icon}</span>&nbsp;<span className={styles.title_icon}>{icon.title}</span></Link>)
    }
  </div>
);
const icons = [
  {
    title: "All",
    icon: <FaLayerGroup size={25}/>,
    link: "/properties"
  },
  {
    title: "Land",
    icon: <BiMapPin size={25} />,
    link: "/properties?q=land"
  },
  {
    title: "Offices",
    icon: <BsFillBuildingFill size={25}/>,
    link: "/properties?q=office"
  },
  {
    title: "Stores",
    icon: <FaShop size={25} />,
    link: "/properties?q=stores"
  },
  {
    title: "Apartments",
    icon: <MdOutlineApartment size={25}/>,
    link: "/properties?q=apartments"
  },
  {
    title: "Villas",
    icon: <MdVilla size={25}/>,
    link: "/properties?q=villas"
  }
]; 

// featured section
const calculateHeight = (curr, total) => {
  let value = (total - curr) * 0.1; 
  let height = 1 - value; 
  return height * 100; 
}
 

const Featured = ({item}) => (
  <div className={styles.featured}>
    <div className={styles.images}>
      {
        item.images.map((img, index) => (
          <div 
            className={styles.featured_image} 
            key={index} 
            style={{
              height: `${calculateHeight(index, item.images.length)}%`,
              marginLeft: `-${index === 0 ? 0: 25}%`
            }}>
            <Image 
              src={img}
              alt="house"
              width={300}
              height={400}
            />
          </div>
        ))
      }
    </div>
    <Features item={item}/>
  </div>
); 

const Features = ({item}) => (
  <div className={styles.details_featured}>
      {item && <h2>{item.title}</h2>}
      {item.price && <h3>{item.price}</h3>}
      {item.context && <p>{item.context}</p>}
      <div className={styles.features}>
        {
          Object.keys(item.features).map((value, index) => <RenderFeature val={value} item={item.features[value]} key={index}/>)
        }
      </div>
      {item.description && <p className={styles.description}>{item.description}</p>}
  </div>
)
const RenderFeature = ({val, item}) =>  <span className={styles.feature_icon}>{getIcon(val)}&nbsp; {item}</span>
 

const featured = {
  images: [
    IMAGES.HOUSE001,
    IMAGES.HOUSE002,
    IMAGES.HOUSE003,
  ],
  title: "Orchid Residency", 
  price: "KES 1.2 Million",
  context: "Spacious apartments",
  features: {
    size: "100 m2",
    bedrooms: "2 bedrooms", 
    bathrooms: "2 bathrooms",
  },
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
}

const getIcon = (item) => {
  switch (item) {
    case "bedrooms":
      return <IoBedOutline size={25}/>; 
    case "bathrooms":
      return <LiaBathSolid size={25}/>;
    case "size":
        return <LiaRulerCombinedSolid size={25}/>;
    default: 
      return false
  }
}


// minor banner
const MidBanner = () => (
  <div className={styles.mid_banner}>
    <div className={styles.text__banner}>
      <h2>Find 
      <br />your next home
      <br />
      <AlternateButton 
        text="Explore"
        link={"/search"}
      />

      </h2>
    </div>
    <Image 
      src={IMAGES.BANNER}
      alt="banner"
      width={400}
      height={400}
    />
  </div>
); 

// popular 
const Popular = () => (
  <>
    <h2 style={{textAlign: "center"}}>Popular</h2>

    <div className={styles.popular_section}>
      <div className={styles.popular_container}>
        {
          popular.map((item, index) => (
            <div key={index} className={styles.popular_item}>
              <Image 
                src={item.image}
                alt="listing"
                width={200}
                height={150}
              />
              <Features item={item}/>
            </div>
          ))
        }

      </div>
    </div>
    <div
      className={styles.subscribe}
    >

    </div>
  </>
); 

const popular = [
  {
    image: IMAGES.HOUSE001,
    price: "KES: 4.5 Million",
    features: {
      size: "100 m2",
      bedrooms: "2 bedrooms", 
      bathrooms: "2 bathrooms",
    },
    context: "Spacious apartments",
  },
  {
    image: IMAGES.HOUSE002,
    price: "KES: 4.5 Million",
    features: {
      size: "100 m2",
      bedrooms: "2 bedrooms", 
      bathrooms: "2 bathrooms",
    },
    context: "Spacious apartments",
  },
  {
    image: IMAGES.HOUSE003,
    price: "KES: 4.5 Million",
    features: {
      size: "100 m2",
      bedrooms: "2 bedrooms", 
      bathrooms: "2 bathrooms",
    },
    context: "Spacious apartments",
  },
  {
    image: IMAGES.HOUSE001,
    price: "KES: 4.5 Million",
    features: {
      size: "100 m2",
      bedrooms: "2 bedrooms", 
      bathrooms: "2 bathrooms",
    },
    context: "Spacious apartments",
  }
]




// spacer - for adding some margin
const Spacer = () => (
  <div style={{margin: "3rem"}}/>
)