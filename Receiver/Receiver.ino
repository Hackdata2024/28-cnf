#include <SPI.h> //SPI Library 

#include <LoRa.h> //LoRa Library 

#include <LiquidCrystal.h> //Library for LCD


const int rs = 8, en = 7, d4 = 6, d5 = 5, d6 = 4, d7 = 3; //Mention the pin number for LCD connection

LiquidCrystal lcd(rs, en, d4, d5, d6, d7);//Initialize LCD method


void setup() {

  Serial.begin(9600); //Serial for Debugging 

  
  Serial.print("LoRa Receiver Started");
  
  lcd.setCursor(0, 1);

  lcd.print("Receiver"); //Intro Message line 2

  delay(2000);

  

  if (!LoRa.begin(433E6)) { //Operate on 433MHz

    Serial.println("Starting LoRa failed!");

    lcd.print("LoRa Failed");

    while (1);

  }

}


void loop() {


  int packetSize = LoRa.parsePacket();

  

  if (packetSize) {     // If packet received

    Serial.print("Received packet '");

    lcd.clear();


    while (LoRa.available()) {

      char incoming = (char)LoRa.read();

      if (incoming == 'c')

      {

        lcd.setCursor(0, 1);

      }

      else

      {

        lcd.print(incoming);

      }

      

    }


  }

}
