import Image from "next/image";
import Login from "@/components/Login";
import styles from "../styles/sign.module.css";

export default function LoginPage() {
    return (
        <div className={styles.body}>
            <Login />
        </div>
    );
}
