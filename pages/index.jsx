import Head from "next/head";
import Link from "next/link";
import homeStyle from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SmartTop X2 Launch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeStyle.main}>
        <div className={homeStyle.container}>
          <h1 id="intro" className={homeStyle.intro}>
            The brand new line of mobile work is arriving soon!
          </h1>

          <Link href="/productinfo" passHref>
            <button className={homeStyle.startBtn}>Find Out More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
