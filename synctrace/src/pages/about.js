import Image from "next/image";
import * as React from "react"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import styles from "../styles/home.module.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function About() {

    return (
        <div className={styles.body}>
            <Navbar />
            <Sidebar />
            <div className={styles.main_div}>
                <h2 className="text-center text-3xl my-5">About Us</h2>
                <p className="w-8/12 mx-auto">In the realm of emerging technologies, our location tracking system harnesses the power of the NEO-6M GPS module seamlessly integrated with Arduino, complemented by robust LoRa (Long Range) communication for reliable data transmission.</p>
                <div className="flex gap-2 justify-center flex-wrap">
                    <Card className="w-[300px]">
                        <CardHeader>
                            <CardTitle>Unveiling Precision Positioning</CardTitle>
                            <CardDescription>At the heart of our solution lies the NEO-6M GPS module, a highly efficient and cost-effective GPS receiver. This module provides accurate latitude, longitude, altitude, and time data, allowing for precise location tracking in real-time. Whether in urban environments or remote landscapes, the NEO-6M ensures consistent and reliable satellite signal reception.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[300px]">
                        <CardHeader>
                            <CardTitle>Arduino Intelligence</CardTitle>
                            <CardDescription>Powered by the versatility of Arduino, our location tracking system efficiently processes GPS data, making it accessible and ready for transmission. Arduino's flexibility and ease of programming enable users to customize tracking parameters, update rates, and integrate additional sensors seamlessly.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[300px]">
                        <CardHeader>
                            <CardTitle>LoRa - Bridging Distances</CardTitle>
                            <CardDescription>The integration of LoRa technology extends the capabilities of our location tracking system. LoRa facilitates long-range communication, ensuring that location data can be transmitted over extended distances with minimal power consumption. This wireless communication protocol is ideal for applications requiring low-power, wide-area networking, making it suitable for tracking assets, vehicles, or even wildlife in expansive terrains.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
                <h2 className="text-center text-2xl my-5">Key Features</h2>
                <div className="flex gap-2 justify-center flex-wrap">
                    <Card className="w-[300px]">
                        <CardHeader>
                            <CardTitle>Real-Time Tracking</CardTitle>
                            <CardDescription>Receive precise location updates in real-time, enabling dynamic monitoring and responsive decision-making.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[300px]">
                        <CardHeader>
                            <CardTitle>Low Power Consumption</CardTitle>
                            <CardDescription>LoRa's efficiency ensures prolonged battery life, making the system suitable for long-term deployment without frequent maintenance.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[300px]">
                        <CardHeader>
                            <CardTitle>Customizable Parameters</CardTitle>
                            <CardDescription>Tailor tracking settings and update rates to meet specific project requirements, offering adaptability for diverse applications.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[300px]">
                        <CardHeader>
                            <CardTitle>Versatile Integration</CardTitle>
                            <CardDescription>The Arduino platform allows seamless integration with other sensors or actuators, enabling a comprehensive approach to data collection and response.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    );
}