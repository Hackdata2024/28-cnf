#include <SPI.h> //SPI Library 

#include <LoRa.h> //LoRa Library 


void setup() {

  Serial.begin(9600); //Serial for Debugging 

  
  Serial.print("LoRa Receiver Started");
  


  Serial.print("Receiver"); //Intro Message line 2

  delay(2000);

  

  if (!LoRa.begin(433E6)) { //Operate on 433MHz

    Serial.println("Starting LoRa failed!");

    Serial.print("LoRa Failed");

    while (1);

  }

}


void loop() {


  int packetSize = LoRa.parsePacket();

  

  if (packetSize) {     // If packet received

    Serial.print("Received packet '");

   


    while (LoRa.available()) {

      char incoming = (char)LoRa.read();

      if (incoming == 'c')

      {

         Serial.print(incoming);

      }

      

    }


  }

}
