'use client'
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import { useState, useEffect } from "react";
import { supabase } from "@/pages/api/supabase";
import styles from "@/styles/home.module.css";


export default function Profile() {
    const [account, setAccount] = useState(false);
    const [session, setSession] = useState(false);

    const fetchData = async () => {
        try {
            const { data, error } = await supabase.auth.getSession();
            setSession(data);
        } catch (error) {
            console.error("Error fetching session:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.form_container}>
            <h2 className="text-center text-2xl">Profile</h2>
            <p>Name: <span>{session}</span></p>
            <p>Email: <span></span></p>
            <p>Phone Number: <span></span></p>
        </div>
    );
}
