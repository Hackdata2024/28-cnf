import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { supabase } from "@/pages/api/supabase";
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from "../styles/home.module.css";
import Link from 'next/link';

export default function BasicTable() {
    const [data, setData] = useState([]);
    const [session, setSession] = useState();
    const fetchSession = async () => {
        try {
            const { data, error } = await supabase.auth.getSession();
            setSession(data);
            fetchData();
        } catch (error) {
            console.error("Error fetching session:", error);
        }
    };
    const fetchData = async () => {
        try {
            let { data: coordinates, error } = await supabase
                .from('coordinates')
                .select('*');
            if (!error) {
                setData(coordinates);
                toast.success('Coordinates Updated!')
            } else {
                console.error('Error fetching data:', error);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchSession();
        const intervalId = setInterval(fetchSession, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Navbar />
            <Sidebar />
            {(session?.session) ?
                <TableContainer sx={{ marginY: 10, minWidth: 300, maxWidth: 650, margin: "0 auto", maxHeight: 700, height: 700, overflowY: "scroll" }} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Time</TableCell>
                                <TableCell>Latitude</TableCell>
                                <TableCell>Longitude</TableCell>
                                <TableCell>Map Link</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.toReversed().map((data) => (
                                <TableRow
                                    key={data.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{new Date(data.created_at).toLocaleString()}</TableCell>
                                    <TableCell>{data.latitude}</TableCell>
                                    <TableCell>{data.longitude}</TableCell>
                                    <TableCell><Link to={`https://www.google.co.in/maps/search/${data.latitude},${data.longitude}`} target="_blank">Map Link</Link></TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Toaster />
                </TableContainer> :
                <p className={styles.unavailable}>No Data available as no user Logged In!</p>
            }
        </>
    );
}
