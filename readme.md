
## Context-Not-Found (Team-28)
# High Altitude Pligrimage and Army Safety Tracking

Develop a robust, weather-resistant tracking device for high-altitude pilgrimage sites like Kedarnath, Amarnath or for Indian military for their operations. The device ensures real-time location tracking, emergency communication by generating an alert message, and efficient power usage in harsh conditions with no mobile network or internet facility. It integrates seamlessly with existing emergency response networks for enhanced safety and well-being.

## Idea Presentation

To address this problem, we're leveraging LoRa technology and interfacing it with a Neo 6M GPS module using Arduino. This setup enables us to obtain live responses from the device even in areas with no mobile network or internet facility. By utilizing LoRa for long-range communication and the Neo 6M GPS module for accurate location tracking, we're able to ensure real-time tracking and emergency communication capabilities. This combination, along with the robustness of Arduino for hardware interfacing, forms the backbone of our solution for enhancing safety and emergency response in challenging high-altitude pilgrimage like Kedarnath, Amarnath, and Army in India.

Using this idea we have created a project named "SyncTrace".
## SyncTrace

SyncTrace is a hardware project aimed at facilitating real-time tracking and data collection using LoRa (Long Range Network) technology paired with Neo 6 GPS devices. It will be embodied in a wearable device resembling a wristband.

The system consists of a transmitter, receiver, and a web application with full authentication capabilities. 


#### Components:
Transmitter: Utilizes SX1278 LoRa Module along with the Neo 6 GPS device to collect location data and transmits it over the network to the receiver.

Receiver: Another SX1278 LoRa Module receives the data transmitted by the transmitter and sends data to store it in a database.

Database: Stores the received data in the form of latitude and longitude coordinates.

Web Application: Provides a user-friendly interface with full authentication to track the device and generate statistics based on the collected coordinates.


#### Features:
Real-time tracking of devices equipped with Neo 6 GPS devices using LoRawlan.
Secure access to tracking data via a web application with authentication.
Statistical analysis and visualization of location data using Map.

#### Explation
Our project utilizes two SX1278 LoRa Modules, one for transmission and the other for reception. The transmitter module is equipped with a Neo 6M GPS Module to gather GPS coordinates. These modules establish a connection between the transmitter and receiver, allowing the transmission of GPS coordinates.

#### Here's how it works:

##### Transmitter Setup: 
The transmitter module, containing the Neo 6M GPS Module, gathers real-time GPS coordinates of the device's location.
##### Transmission: 
The transmitter module sends these GPS coordinates to the receiver module using LoRa communication.
#####  Reception and Storage: 
The receiver module, connected to a laptop via Arduino Uno, receives the GPS coordinates and stores them in a database, in this case, "Supabase".
##### Web Application: 
A web application with user authentication capabilities provides a dashboard. Users can view information about available LoRaWAN routers and transmitters. Additionally, they can access a map feature displaying the current location of the transmitter, helping admin to track travelers' location.

This system enhances safety and tracking capabilities for travelers in remote areas, providing real-time location updates even where traditional communication methods are unavailable. The integration of LoRa technology with GPS modules ensures reliable communication and accurate positioning, while the web application offers an intuitive interface for users to access and visualize the data collected from the field.
#### Demo

SyncTrace WebApp : 


#### SnapShots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


#### TechStack

![Static Badge](https://img.shields.io/badge/NextJS-black)

![Static Badge](https://img.shields.io/badge/RestAPI-blue)

![Static Badge](https://img.shields.io/badge/SupaBase-green)

![Static Badge](https://img.shields.io/badge/Vercel-black)


## Deployment

To deploy this project run locally:

```bash
  npm run dev
```



## Team Members

We are a Team of four:

    1. Pushpak Kumawat 
    2. Tanmay Newatia
    3. Sankalp Tiwari
    4. Adarsh Rai