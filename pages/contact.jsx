import contactStyle from "../styles/Contact.module.css";
// import dynamic from 'next/dynamic'

function Contact() {
  return (
    <main className={contactStyle.main}>
      <div className={contactStyle.contactContainer}>
        <h1 className={contactStyle.heading}>How to find us</h1>
        <p>P. Sherman Ltd.</p>
        <p>42 Wallaby way</p>
        <p>Sydney, NSW</p>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252255.51889328138!2d150.89596730203277!3d-33.82813162965652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20New%20South%20Wales%2C%20Australien!5e0!3m2!1sde!2sde!4v1649010918464!5m2!1sde!2sde" className={contactStyle.mapFrame} loading="lazy" ></iframe>
      </div>
    </main>
  )
  // const Map = dynamic(
  //   () => import('../components/Map.jsx'), // replace '@components/map' with your component's location
  //   { 
  //     loading: () => <p>A map is loading</p>,
  //     ssr: false // This line is important. It's what prevents server-side render
  //   }
  // )
  // return <Map />
}

export default Contact;
