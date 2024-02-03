import Image from "next/image";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import styles from "../styles/home.module.css";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className={styles.body}>
      <Navbar />
      <Sidebar />
    </div>
  );
}
