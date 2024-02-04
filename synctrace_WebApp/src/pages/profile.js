import Image from "next/image";
import Profile from "@/components/Profile";
import styles from "../styles/sign.module.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ProfilePage() {
    return (
        <div className={styles.body}>
            <Navbar />
            <Sidebar />
            <Profile />
        </div>
    );
}
