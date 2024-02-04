import Image from "next/image";
import SignUp from "@/components/SignUp";
import styles from "../styles/sign.module.css";

export default function SignUpPage() {
    return (
        <div className={styles.body}>
            <SignUp />
        </div>
    );
}
