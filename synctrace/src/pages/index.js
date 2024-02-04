import Image from "next/image";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import styles from "../styles/home.module.css";
import { MdDevices, MdRouter } from "react-icons/md";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className={styles.body}>
      <Navbar />
      <Sidebar />
      <div className={styles.main_div2 + " flex flex-col justify-evenly items-center"}>
        <div>
          <h1 className="text-3xl font-bold text-center my-2">Welcome!</h1>
          <h1 className="text-2xl font-bold text-center my-2">Number of Device Details</h1>
        </div>
        <div className="w-full flex justify-evenly">
          <div>
            <MdDevices fontSize={100} />
            <p className="text-xl">Device Count: 1</p>
          </div>
          <div>
            <MdRouter fontSize={100} />
            <p className="text-xl">Router Count: 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
