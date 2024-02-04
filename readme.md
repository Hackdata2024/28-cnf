
## Context-Not-Found (Team-28)
# High Altitude Pligrimage Tracking

Develop a robust, weather-resistant tracking device for high-altitude pilgrimage sites like Kedarnath, Amarnath. The device ensures real-time location tracking, emergency communication by generating an alert message, and efficient power usage in harsh conditions with no mobile network or internet facility. It integrates seamlessly with existing emergency response networks for enhanced safety and well-being.

## Idea Presentation

To address this problem, we're leveraging LoRa technology and interfacing it with a Neo 6M GPS module using Arduino. This setup enables us to obtain live responses from the device even in areas with no mobile network or internet facility. By utilizing LoRa for long-range communication and the Neo 6M GPS module for accurate location tracking, we're able to ensure real-time tracking and emergency communication capabilities. This combination, along with the robustness of Arduino for hardware interfacing, forms the backbone of our solution for enhancing safety and emergency response in challenging high-altitude pilgrimage like Kedarnath, Amarnath, and Army in India.

Using this idea we have created a project named "SyncTrace".
# SyncTrace

SyncTrace is a hardware project aimed at facilitating real-time tracking and data collection using LoRa (Long Range Network) technology paired with Neo 6 GPS devices. It will be embodied in a wearable device resembling a wristband.

The system consists of a transmitter, receiver, and a web application with full authentication capabilities. 


## Components:
**Transmitter:** Utilizes SX1278 LoRa Module along with the Neo 6 GPS device to collect location data and transmits it over the network to the receiver.

**Receiver:** Another SX1278 LoRa Module receives the data transmitted by the transmitter and sends data to store it in a database.

**Database:** Stores the received data in the form of latitude and longitude coordinates.

**Web Application:** Provides a user-friendly interface with full authentication to track the device and generate statistics based on the collected coordinates.


## Features:
Real-time tracking of devices equipped with Neo 6 GPS devices using LoRawlan.
Secure access to tracking data via a web application with authentication.
Statistical analysis and visualization of location data using Map.

## Explation
Our project utilizes two SX1278 LoRa Modules, one for transmission and the other for reception. The transmitter module is equipped with a Neo 6M GPS Module to gather GPS coordinates. These modules establish a connection between the transmitter and receiver, allowing the transmission of GPS coordinates.

**Here's how it works:**
### Transmitter Setup: 
The transmitter module, containing the Neo 6M GPS Module, gathers real-time GPS coordinates of the device's location.
### Transmission: 
The transmitter module sends these GPS coordinates to the receiver module using LoRa communication.
###  Reception and Storage: 
The receiver module, connected to a laptop via Arduino Uno, receives the GPS coordinates and stores them in a database, in this case, "Supabase".
### Web Application: 
A web application with user authentication capabilities provides a dashboard. Users can view information about available LoRaWAN routers and transmitters. Additionally, they can access a map feature displaying the current location of the transmitter, helping admin to track travelers' location.

This system enhances safety and tracking capabilities for travelers in remote areas, providing real-time location updates even where traditional communication methods are unavailable. The integration of LoRa technology with GPS modules ensures reliable communication and accurate positioning, while the web application offers an intuitive interface for users to access and visualize the data collected from the field.

#### Demo

SyncTrace WebApp : 


#### SnapShots

### Homepage
![home page ](https://github.com/Hackdata2024/28-cnf/assets/101463523/59295f17-22d5-4150-b439-3758ef12385d)
### Sign Up Page
![sign up page](https://github.com/Hackdata2024/28-cnf/assets/101463523/2652b5f3-397a-4b05-ad5a-3f5bcd3c296f)
### Login Page
![login page](https://github.com/Hackdata2024/28-cnf/assets/101463523/3ca1a05c-bdf0-40c5-b9df-dce27d7872eb)
### Coordinate Update Page
![coordinate update ](https://github.com/Hackdata2024/28-cnf/assets/101463523/574e4ff2-9087-4048-bb0a-10cd8ac0e9a6)
### Map Page
![map link](https://github.com/Hackdata2024/28-cnf/assets/101463523/558ad9d0-b5f4-4db3-894b-fdba8298a708)
### Receiver
![IMG20240204111455](https://github.com/Hackdata2024/28-cnf/assets/101463523/850462ad-dc15-4cb8-83e0-779be138c37a)
### Transmitter
![IMG20240204111441](https://github.com/Hackdata2024/28-cnf/assets/101463523/9a11ee4e-9007-4593-acea-90dc3012c03f)


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

    1. Pushpak Kumawat a computer science student at SRM University, specialising in machine learning and generative AI. His passion is using advanced technologies to create intelligent systems. He is currently 
    pursuing my Bachelor's in Computer Science, focusing on machine learning, deep learning, and AI. He is skilled in implementing various ML algorithms, deep learning frameworks like TensorFlow and PyTorch, and 
    generative AI techniques, including GANs and VAEs. He has worked on projects like image synthesis, text generation, and video prediction. He aspire to build a career at the intersection of machine learning \
    and generative AI, pushing the boundaries of AI creativity. With respect to the project at hand, Pushpak has worked on the Hardware prototype of the LORA based tracking device.
    2. Tanmay Newatia an Undergrad Student pursuing B. Tech in CSE at SRM University. As a person, he is a Tech and Data enthusiast, along with a very keen interest in learning new things. He has built my web-
    development base with HTML, CSS, Javascript and Bootstrap, ReactJS and Supabase. Further, he have a good knowledge of programming languages such as Python, C++, and C. He has worked on the Frontend and 
    Backend of the web application host on [link](https://www.snu-hackathon.vercel.app.com) .
    3. Sankalp Tiwari a third-year undergraduate student majoring in Computer Science Engineering at SRM Institute of Science and Technology (SRMIST). My academic journey has been fueled by a deep passion for 
    exploring the ever-evolving landscape of technology. Eager to understand the intricacies of computer science, I am committed to achieving excellence in both theory and practical application. Throughout my 
    studies, He have actively sought opportunities to engage in challenging projects, allowing me to hone my problem-solving skills and contribute meaningfully to the field. With a solid foundation in computer 
    science principles, I am excited about the potential to make significant contributions to the world of technology in the near future. He, worked on the arduino coding and documentation of the project.
    4. Adarsh Rai currently Pursuing My Degree of B.Tech in Computer Science And Engineering. A personality with quick learning skills, target achieving thinking. He have a keen interest in C++ and Java 
    Programming. He worked on the designing of the website and video creation for the project.
