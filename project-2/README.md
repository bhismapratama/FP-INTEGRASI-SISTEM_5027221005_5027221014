# Sensor Suhu dan Kelembapan Raspberry Pi dengan MQTT

Project 2 menggunakan MQTT untuk memonitor dan mengendalikan suhu, kelembapan, dan lampu pada sebuah ruangan. Data suhu dan kelembapan dibaca dari sensor dan dipublikasikan ke broker MQTT. Selain itu, sebuah halaman web digunakan untuk menampilkan data dan mengontrol lampu.

## Daftar Isi

- [Persyaratan Perangkat Keras](#persyaratan-perangkat-keras)
- [Persyaratan Perangkat Lunak](#persyaratan-perangkat-lunak)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Konfigurasi](#konfigurasi)
- [Dokumentasi](#dokumentasi)
- [Lisensi](#lisensi)

## Persyaratan Perangkat Keras

- Mikrokontroler (Raspberry Pi)
- Sensor suhu dan kelembapan (DHT11)
- Breadboard dan kabel jumper
- LED dan resistor
- Raspberry Pi (untuk program kontrol LED)

## Persyaratan Perangkat Lunak

- Python 3
- Pustaka Paho MQTT untuk Python
- Arduino IDE
- Server web untuk meng-host file HTML
- Pustaka RPi.GPIO untuk Raspberry Pi

## Instalasi

### Setup Python MQTT Client

1. **Install pustaka yang diperlukan**:

   ```bash
   pip install paho-mqtt RPi.GPIO
   ```

2. **Clone repository**:

   ```bash
   git clone https://github.com/bhismapratama/FP-INTEGRASI-SISTEM_5027221005_5027221014.git
   ```

3. **Konfigurasi kode**:

   - Buka file Python pertama (`mqtt_pub.py`):

     ```python
     client.username_pw_set(username="bhiss",password="ell")
     client.connect("198.148.113.137", 1883, 60)
     ```

   - Buka file Python kedua (`mqtt_sub.py`):
     ```python
     client.username_pw_set(username="bhiss",password="ell")
     client.connect("198.148.113.137", 1883, 60)
     ```

4. **Jalankan program**:
   - Jalankan kedua file Python secara terpisah di terminal:
     ```bash
     python3 mqtt_pub.py
     python3 mqtt_sub.py
     ```

### Setup HTML

1. **Host file HTML**:

   - Salin kode HTML yang diberikan ke dalam file bernama `index.html`.
   - Host file di server web lokal atau remote.

2. **Konfigurasi pengaturan MQTT di HTML**:
   - Perbarui detail broker MQTT di bagian `<script>` dari `index.html`:
     ```javascript
     Server = "198.148.113.137";
     Port = "9000";
     Topic = "/kel3/room/temperature";
     LedTopic = "/kel3/room/led";
     MQTTUserName = "bhiss";
     MQTTPassword = "ell";
     ```

## Penggunaan

### Python MQTT Client

1. **Program `mqtt_pub.py`**:

   - Program akan memeriksa suhu ruangan.
   - Jika suhu melebihi 30°C, program akan mengirim pesan ke topik `/kel3/room/led` untuk menyalakan LED.
   - Jika suhu di bawah 30°C, program akan mengirim pesan untuk mematikan LED.

2. **Program `mqtt_sub.py`**:
   - Program akan berlangganan ke topik `/kel3/room/led`.
   - Jika menerima pesan "On", program akan menyalakan LED.
   - Jika menerima pesan "Off", program akan mematikan LED.

### Halaman Web

1. **Tampilan dan kontrol**:
   - Buka file `index.html` yang telah di-host di browser web.
   - Halaman web akan menampilkan data suhu dan kelembapan terbaru yang diterima dari broker MQTT.
   - Tombol di halaman web dapat digunakan untuk mengontrol status LED.

## Konfigurasi

Dapat menyesuaikan parameter berikut dalam kode:

### Python

- **Detail broker MQTT**:
  ```python
  client.username_pw_set(username="bhiss",password="ell")
  client.connect("198.148.113.137", 1883, 60)
  ```

### HTML

- **Detail broker MQTT**:
  ```javascript
  Server = "198.148.113.137";
  Port = "9000";
  Topic = "/kel3/room/temperature";
  LedTopic = "/kel3/room/led";
  MQTTUserName = "bhiss";
  MQTTPassword = "ell";
  ```

## Dokumentasi

Berikut adalah beberapa gambar dokumentasi dari project 2:

- **Gambar 1: Contoh LED**
  <br><br>
  ![Skema Rangkaian](isi)

- **Gambar 2: Tampilan Halaman Web**
  <br><br>
  ![Tampilan Halaman Web](isi)

---
