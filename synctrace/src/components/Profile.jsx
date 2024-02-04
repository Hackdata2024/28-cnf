'use client'
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import { useState, useEffect } from "react";
import { supabase } from "@/pages/api/supabase";
import styles from "@/styles/sign.module.css";


export default function Profile() {
    const [account, setAccount] = useState(false);
    const [session, setSession] = useState(false);

    const fetchData = async () => {
        try {
            const { data, error } = await supabase.auth.getSession();
            setSession(data);
            setAccount(session.session.user.user_metadata);
        } catch (error) {
            console.error("Error fetching session:", error);
        }
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.form_container}>
            <h2 className="text-center text-2xl">Profile</h2>
            {(account) ?
                <>
                    <p>Name: <span>{account.first_name + " " + account.last_name}</span></p>
                    <p>Email: <span>{session.session.user.email}</span></p>
                    <p>Phone Number: <span>{account.phone}</span></p>
                </> : <></>
            }
        </div>
    );
}
