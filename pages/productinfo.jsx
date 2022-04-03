import Head from "next/head";
import Image from "next/image"
import StockImg from "../img/kari-shea-1SAnrIxw5OY-unsplash.jpg";
import piStyle from "../styles/Productinfo.module.css";

const Productinfo = () => {
  return (
    <div>
      <Head>
        <title>SmartTop X2 Product Infos</title>
      </Head>
      <main className={piStyle.main}>
        <Image src={StockImg} width={600} height={480} alt="StockImg2" />
        <h1 className={piStyle.heading}>PRODUCT INFORMATION</h1>
        <div className={piStyle.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Spec.</th>
              </tr>
            </thead>
            <tbody>
              <tr className={piStyle.tableRows}>
                <td>Central Processing Unit</td>
                <td>
                  AMD Ryzen™ 7 4800U-CPU (1,80 GHz, max. Boost
                  up to 4,20 GHz, 8 Cores, 16 Threads, 4 MB Cache L2 / 8 MB
                  Cache L3)
                </td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>
                  8 GB DDR4 3200MHz
                </td>
              </tr>
              <tr>
                <td>Hard drive</td>
                <td>
                  512 GB M.2 2280 SSD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Productinfo;
