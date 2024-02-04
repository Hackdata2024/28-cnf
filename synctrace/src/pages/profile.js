import Image from "next/image";
import Profile from "@/components/Profile";
import styles from "../styles/sign.module.css";

export default function ProfilePage() {
    return (
        <div className={styles.body}>
            <Navbar />
            <Sidebar />
            <Profile />
        </div>
    );
}
