# Evaluasi Harian - Mobile App Development (React Native, TypeScript & TailwindCSS)

## 1. Definisi Mobile App Development
Mobile App Development adalah proses merancang, membangun, dan merilis aplikasi yang berjalan di perangkat mobile seperti Android dan iOS. Fokus utamanya mencakup **pengalaman pengguna (UX)**, **efisiensi performa**, serta **kompatibilitas platform**.  
Output teknisnya berupa **aplikasi yang dapat diinstal** dan dijalankan secara native (APK/IPA), berbeda dari web app yang diakses melalui browser.

---

## 2. Perbedaan Web vs Mobile Development
| Aspek | Web Development | Mobile App Development |
|-------|------------------|-------------------------|
| **Target Eksekusi** | Browser (Chrome, Safari, dll.) | Sistem operasi mobile (Android/iOS) |
| **Distribusi** | Dapat diakses langsung via URL | Dirilis lewat Play Store / App Store |
| **Akses Hardware** | Terbatas (melalui API browser) | Langsung ke hardware seperti kamera, GPS, sensor, dll |

**Implikasi Praktis:** Misalnya, web app tidak bisa mengakses sensor accelerometer secara penuh, sementara aplikasi mobile bisa menggunakannya untuk fitur seperti langkah kaki atau orientasi layar.

---

## 3. Tahapan Discovery & Requirement
Tahap ini berfungsi untuk mengidentifikasi **tujuan bisnis**, **target pengguna**, dan **fitur utama**. Hasil dari tahap ini menentukan:  
- Platform target (Android/iOS) berdasarkan demografi pengguna.  
- Kebutuhan **offline/online** misalnya aplikasi kasir perlu mode offline.  

Tahap ini seperti fondasi — salah menentukan arah, seluruh proyek bisa melenceng.

---

## 4. Perancangan Arsitektur & Teknologi
Pada tahap ini, pengembang menentukan **struktur data**, **alur navigasi**, dan **teknologi pendukung**.  
Dalam konteks **React Native**, keputusan penting meliputi:  
- **State Management:** Memilih antara Redux, Zustand, Recoil, atau Context API untuk efisiensi data.  
- **Navigasi:** Memakai `react-navigation` agar transisi halaman konsisten.  

Kesalahan dalam perancangan ini bisa memengaruhi kinerja dan skalabilitas aplikasi.

---

## 5. Native vs Hybrid Development
| Aspek | Native | Hybrid |
|-------|---------|---------|
| **Bahasa Pemrograman** | Swift (iOS), Kotlin (Android) | JavaScript/TypeScript (satu basis kode) |
| **Kinerja** | Optimal (langsung ke sistem) | Sedikit lebih lambat |
| **Akses Hardware** | Langsung & penuh | Melalui jembatan API |
| **Biaya & Waktu** | Lebih mahal & lama | Lebih cepat & efisien |

**Contoh Framework Hybrid:** Ionic, Flutter, Apache Cordova.

---

## 6. Cross-Platform Native Development
Pendekatan ini memungkinkan satu basis kode untuk dua platform, tapi tetap menghasilkan **aplikasi native**.  
**Keuntungan:**  
- Pengembangan cepat.  
- Konsistensi UI dan logika.  
**Kekurangan:**  
- Integrasi plugin kadang terbatas.  
- Performa bisa menurun untuk animasi kompleks.  

Contoh framework: **React Native, Flutter**.

---

## 7. Posisi React Native dalam Ekosistem
React Native adalah framework **cross-platform native** yang menggunakan JavaScript/TypeScript untuk menghasilkan aplikasi Android & iOS.  

| Aspek | ReactJS | React Native |
|--------|----------|--------------|
| **Target** | Browser | Android/iOS |
| **Sintaks JSX** | Menggunakan elemen HTML | Menggunakan komponen `View`, `Text`, `Image` |
| **Styling** | CSS / TailwindCSS | StyleSheet (mirip CSS-in-JS) atau library seperti `nativewind` |

Contoh gaya dengan Tailwind Nativewind:
```tsx
import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-white text-lg">Hello, Master 👋</Text>
    </View>
  );
}
```

---

## 8. Tantangan Utama & Solusi Cross-Platform
**Tantangan Mobile:**  
- Fragmentasi perangkat.  
- Optimasi performa dan memori.  
- UI konsisten antar platform.  

**Solusi React Native:**  
- Satu basis kode untuk Android & iOS.  
- Hot Reloading mempercepat iterasi.  
- Plugin komunitas untuk akses native API seperti kamera, lokasi, sensor, dll.

---

## 9. Pengujian & Release React Native
1. **Testing:** Menggunakan Jest, React Native Testing Library, atau Expo Go.  
2. **Build:** `npx react-native run-android` atau `run-ios`.  
3. **Signing:** Menggunakan keystore (Android) atau provisioning profile (iOS).  
4. **Release:** Upload ke Play Store / App Store melalui CI/CD atau manual upload.

---

## 10. Mengapa React Native Populer?
- **Efisiensi waktu dan biaya:** satu kode untuk dua platform.  
- **Komunitas besar & dukungan library luas.**  
- **Integrasi mudah dengan TypeScript dan TailwindCSS.**  
- **Performa hampir setara native.**  
- **Hot reload mempercepat pengembangan UI.**  

React Native menjadi jembatan ideal antara performa native dan kecepatan web development.
