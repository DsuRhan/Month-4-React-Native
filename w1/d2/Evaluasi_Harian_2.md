# Evaluasi Harian - React Native

## 1. Konsep Dasar React Native & Peran New Architecture

React Native adalah framework **cross-platform** yang memungkinkan pengembang membangun aplikasi **mobile (Android & iOS)** menggunakan JavaScript dan React.  
Berbeda dengan React untuk web yang merender ke DOM, React Native merender ke **komponen native (UIView di iOS, View di Android)** melalui **bridge**.

### Perbedaan utama React Native vs React Web
| Aspek | React Web | React Native |
|-------|------------|---------------|
| Target Render | Browser DOM | Native UI Components |
| Styling | CSS / Tailwind | StyleSheet (mirip CSS-in-JS) |
| Routing | React Router | React Navigation |
| Output | Web App | APK / IPA (mobile app) |

### Peran New Architecture (React Native v0.80)
New Architecture memperkenalkan tiga komponen utama:
- **Fabric**: sistem rendering baru yang lebih cepat & sinkron dengan native UI.
- **TurboModules**: menggantikan bridge lama untuk komunikasi JS ke native lebih efisien.
- **Codegen**: menghasilkan binding otomatis antara JS dan native code.

**Dampak:** Mengurangi latency, mempercepat startup, dan meningkatkan performa saat berinteraksi dengan komponen native.

---

## 2. Perbandingan React Native CLI vs Expo

| Aspek | React Native CLI | Expo |
|-------|------------------|------|
| Arsitektur | Akses penuh ke native code (Android/iOS) | Abstraksi tinggi dengan SDK milik Expo |
| Proses Build | Menggunakan Gradle/Xcode langsung | Menggunakan server Expo atau EAS Build |
| Kelebihan | Fleksibel dan bisa ubah native module | Setup cepat, cocok untuk prototipe |
| Kekurangan | Setup dan debugging lebih rumit | Terbatas pada modul bawaan Expo |

### Skenario
- **Pilih CLI:** jika proyek membutuhkan **custom native module** (misalnya kamera AR).  
- **Pilih Expo:** untuk **MVP** atau **demo cepat** tanpa konfigurasi berat.

---

## 3. Komponen Penting dalam Setup Android SDK

| Komponen | Fungsi | Dampak Jika Tidak Ada |
|-----------|---------|------------------------|
| **SDK Platforms (android-35)** | Menyediakan API level Android yang digunakan untuk build | Proyek gagal dikompilasi karena target API tidak ditemukan |
| **Build Tools (35.0.0)** | Menyediakan compiler (aapt, dx) dan alat packaging | Error “Build tools not found” saat `gradlew assembleDebug` |
| **Platform Tools** | Berisi adb, fastboot, dan alat komunikasi perangkat | VS Code tidak bisa mendeteksi emulator / perangkat fisik |

**Kesimpulan:** Ketiga komponen ini saling melengkapi agar React Native dapat membangun, menjalankan, dan menguji aplikasi di perangkat Android.

---

## 4. Prasyarat Setup React Native CLI v0.80

| Komponen | Fungsi | Alasan Penting |
|-----------|---------|----------------|
| **Node.js** | Menjalankan runtime JavaScript | Menjalankan Metro bundler & script npm |
| **Watchman** | Memantau perubahan file secara real-time | Mempercepat reload saat pengembangan |
| **Yarn** | Manajer paket cepat dan konsisten | Mengelola dependensi proyek dan skrip build |

Ketiganya membentuk jembatan dari dunia **JavaScript ke native runtime**, memastikan perubahan kode segera tercermin di aplikasi.

---

## 5. Struktur Folder Proyek React Native CLI

```bash
myApp/
├── android/          # Proyek native Android (Gradle, Manifest, dll)
├── ios/              # Proyek native iOS (Xcode, Info.plist, dll)
├── app/ atau src/    # Folder logika React & komponen
├── App.js            # Entry point utama aplikasi
├── index.js          # Menghubungkan App ke registerRootComponent
├── metro.config.js   # Konfigurasi bundler Metro
├── package.json      # Dependensi & script proyek
└── node_modules/     # Pustaka npm
```

### Fungsi Struktur Ini
- Folder `android/` & `ios/` memungkinkan build native spesifik platform.
- File JS (`App.js`, `index.js`) tetap lintas platform.
- `metro.config.js` memastikan asset (gambar, JS) terbundle efisien.

Struktur ini mendukung **pengembangan lintas platform**, di mana satu basis kode JS dapat berjalan di dua sistem operasi dengan tampilan native.

---
**Selesai — Evaluasi Harian Sesi 2**
