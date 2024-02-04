'use client'
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import { useState, useEffect } from "react";
import { supabase } from "@/pages/api/supabase";
import styles from "@/styles/home.module.css";


export default function Navbar() {
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
        <header className={styles.header + " w-screen flex justify-between px-5 items-center h-[80px] bg-black"}>
            <div className="w-2/12">
                <a href="/"><Image src={logo2} alt="logo" width="200" height="80" /></a>
            </div>
            <nav className={styles.nav + " w-4/12"}>
                <ul className="w-full flex justify-evenly">
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.acc_section + " w-3/12 flex justify-end mr-10"}>
                <div className="flex text-2xl px-5">
                    <IoMdNotificationsOutline className="mx-1" />
                    {session.session ?
                        <RiAccountCircleLine className="mx-1" /> : <button className={styles.login + " text-sm"}><a href="/login">Log In</a></button>
                    }
                </div>
            </div>
        </header>
    );
}
