import Image from "next/image";
import { FaHome, FaRegBookmark } from "react-icons/fa";
import { BsBarChart, BsThreeDots } from "react-icons/bs";
import { CiMap, CiLogout } from "react-icons/ci";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import styles from "../styles/home.module.css";
import { supabase } from "@/pages/api/supabase";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Link from "next/link";

export default function Sidebar() {
    const [session, setSession] = useState(false);
    const router = useRouter();

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

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        toast("Logout Successfull!");
        router.push('/')
    }
    return (
        <aside className={styles.sidebar + " flex l-0 absolute w-[180px]"}>
            <nav className="h-4/6 flex my-auto bg-black w-full rounded-xl">
                <ul className="h-full flex flex-col justify-evenly pl-2">
                    <li>
                        <Link href="/">
                            <div className="flex ">
                                <FaHome className="text-3xl" />
                                <span className="px-2">Home</span>
                            </div>
                        </Link>
                    </li>
                    {/* <li>
                        <div className="flex">
                            <FaRegBookmark className="text-3xl" />
                            <span className="px-2">Saved</span>
                        </div>
                    </li> */}
                    <li>
                        <Link href="/map">
                            <div className="flex">
                                <CiMap className="text-3xl" />
                                <span className="px-2">Map</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stats">
                            <div className="flex">
                                <BsBarChart className="text-3xl" />
                                <span className="px-2">Stats</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className="flex">
                            <HiClipboardDocumentList className="text-3xl" />
                            <span className="px-2">Activity</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex">
                            <IoIosSettings className="text-3xl" />
                            <span className="px-2">Settings</span>
                        </div>
                    </li>
                    {/* <li>
                        <div className="flex">
                            <BsThreeDots className="text-3xl" />
                        </div>
                    </li> */}
                    {(session.session) ?
                        <li onClick={() => { handleLogout() }}>
                            <div className="flex">
                                <CiLogout className="text-3xl" />
                                <span className="px-2">Log Out</span>
                            </div>
                        </li> : <></>
                    }
                </ul>
            </nav>
            <ToastContainer />
        </aside>
    );
}
