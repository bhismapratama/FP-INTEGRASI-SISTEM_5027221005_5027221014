# Sensor Suhu dan Kelembapan ESP8266 dengan MQTT

Proyek ini menggunakan mikrokontroler ESP8266 untuk membaca data suhu dan kelembapan dari sensor DHT11 dan mempublikasikan data tersebut ke broker MQTT. Data kemudian ditampilkan di halaman web.

## Daftar Isi

- [Persyaratan Perangkat Keras](#persyaratan-perangkat-keras)
- [Persyaratan Perangkat Lunak](#persyaratan-perangkat-lunak)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Konfigurasi](#konfigurasi)
- [Dokumentasi](#dokumentasi)
- [Lisensi](#lisensi)

## Persyaratan Perangkat Keras

- Mikrokontroler ESP8266
- Sensor suhu dan kelembapan DHT11
- Breadboard dan kabel jumper

## Persyaratan Perangkat Lunak

- Arduino IDE
- Pustaka PubSubClient
- Pustaka sensor DHT
- Pustaka ESP8266WiFi
- Pustaka Adafruit Unified Sensor
- Server web untuk meng-host file HTML

## Instalasi

### Setup ESP8266

1. **Clone repository**:

   ```bash
   git clone https://github.com/bhismapratama/FP-INTEGRASI-SISTEM_5027221005_5027221014.git
   ```

2. **Buka proyek di Arduino IDE**:

   - Jalankan Arduino IDE.
   - Buka file `.ino` dari repository yang telah di-clone.

3. **Install pustaka yang diperlukan**:

   - Pergi ke `Sketch` > `Include Library` > `Manage Libraries`.
   - Install pustaka berikut:
     - PubSubClient
     - DHT sensor library
     - ESP8266WiFi
     - Adafruit Unified Sensor

4. **Konfigurasi kode**:

   - Perbarui kredensial WiFi di dalam kode:
     ```cpp
     const char* ssid = "your_SSID";
     const char* pswd = "your_PASSWORD";
     ```
   - Perbarui detail broker MQTT:
     ```cpp
     const char* mqtt_server = "your_MQTT_BROKER_IP";
     const char* topic = "your_TOPIC";
     const char* username = "your_USERNAME";
     const char* password = "your_PASSWORD";
     ```

5. **Upload kode ke ESP8266**:
   - Hubungkan ESP8266 ke komputer Anda.
   - Pilih board dan port yang benar dari menu `Tools`.
   - Klik tombol upload.

### Setup HTML

1. **Host file HTML**:

   - Salin kode HTML yang diberikan ke dalam file bernama `index.html`.
   - Host file ini di server web lokal atau remote.

2. **Konfigurasi pengaturan MQTT di HTML**:
   - Perbarui detail broker MQTT di bagian `<script>` dari `index.html`:
     ```javascript
     Server = "your_MQTT_BROKER_IP";
     Port = "your_MQTT_PORT";
     Topic = "your_TOPIC";
     MQTTUserName = "your_USERNAME";
     MQTTPassword = "your_PASSWORD";
     ```

## Penggunaan

### ESP8266

Setelah kode di-upload dan ESP8266 dinyalakan, perangkat akan:

1. Terhubung ke jaringan WiFi yang ditentukan.
2. Terhubung ke broker MQTT.
3. Membaca data suhu dan kelembapan dari sensor DHT11.
4. Mempublikasikan data sensor ke topik MQTT yang ditentukan secara berkala.

Anda dapat memantau output serial menggunakan Serial Monitor di Arduino IDE untuk melihat status koneksi dan pembacaan sensor.

### Halaman Web

1. Buka file `index.html` yang telah di-host di browser web.
2. Halaman web akan menampilkan data suhu dan kelembapan terbaru yang diterima dari broker MQTT.

## Konfigurasi

Anda dapat menyesuaikan parameter berikut dalam kode:

### ESP8266

- **Kredensial WiFi**:
  ```cpp
  const char* ssid = "your_SSID";
  const char* pswd = "your_PASSWORD";
  ```
- **Detail broker MQTT**:
  ```cpp
  const char* mqtt_server = "your_MQTT_BROKER_IP";
  const char* topic = "your_TOPIC";
  const char* username = "your_USERNAME";
  const char* password = "your_PASSWORD";
  ```
- **Interval pembacaan sensor**:
  ```cpp
  long timeBetweenMessages = 1000 * 20 * 1; // Sesuaikan interval sesuai kebutuhan
  ```

### HTML

- **Detail broker MQTT**:
  ```javascript
  Server = "your_MQTT_BROKER_IP";
  Port = "your_MQTT_PORT";
  Topic = "your_TOPIC";
  MQTTUserName = "your_USERNAME";
  MQTTPassword = "your_PASSWORD";
  ```

## Dokumentasi

Berikut adalah beberapa gambar dokumentasi dari proyek ini:

- **Gambar 1: Skema Rangkaian**
  <br><br>
  ![Skema Rangkaian](https://github.com/bhismapratama/FP-INTEGRASI-SISTEM_5027221005_5027221014/assets/104546173/07e04ec3-8b5d-4450-aae0-d07362c0fe94)


- **Gambar 2: Tampilan Serial Monitor**  
  ![Tampilan Serial Monitor](URL_GAMBAR_2)

- **Gambar 3: Tampilan Halaman Web**
  <br><br>
  ![Tampilan Halaman Web](https://github.com/bhismapratama/FP-INTEGRASI-SISTEM_5027221005_5027221014/assets/104546173/288c345f-3eed-406d-815c-f55dc1511ed3)
