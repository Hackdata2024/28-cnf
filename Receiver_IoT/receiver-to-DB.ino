#include <WiFiClient.h>

const char* ssid = "pushpak-m32";
const char* password = "kumawat@20028";
const char* server = "192.168.186.17";
const int port = 80;

void setup() {
  Serial.begin(115200);
  delay(10);

  // Connect to Wi-Fi
  Serial.println();
  Serial.println("Connecting to Wi-Fi");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
}

void loop() {
  // Sample data to send
  float latitude;
  float longitude;

  // Create HTTP client
  WiFiClient client;
  if (!client.connect(server, port)) {
    Serial.println("Connection failed");
    return;
  }

  // Construct the HTTP request
  String url = "/api/data"; // Endpoint on the server
  String data = "Longitute=" + String(longitute) + "&latitude=" + String(latitude);
  String request = "POST " + url + " HTTP/1.1\r\n" +
                   "Host: " + String(server) + "\r\n" +
                   "Content-Type: application/x-www-form-urlencoded\r\n" +
                   "Content-Length: " + String(data.length()) + "\r\n" +
                   "\r\n" +
                   data;

  
  Serial.println("Coordinates updated to DataBase");
  client.print(request);

  delay(1000);

  
  while (client.available()) {
    String line = client.readStringUntil('\r');
    Serial.print(line);
  }
}
