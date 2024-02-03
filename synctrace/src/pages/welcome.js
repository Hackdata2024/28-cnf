import Image from "next/image";
import Welcome from "@/components/Welcome";
import styles from "../styles/sign.module.css";

export default function WelcomePage() {
    return (
        <div className={styles.body}>
            <Welcome />
        </div>
    );
}
