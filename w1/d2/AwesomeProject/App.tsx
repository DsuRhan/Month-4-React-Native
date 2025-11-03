// App.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Modal,
  StatusBar,
  Switch,
  Pressable,
  StyleSheet,
} from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar barStyle="dark-content" backgroundColor="#f1f5f9" />

      {/* ImageBackground */}
      <ImageBackground
        source={{ uri: "https://picsum.photos/400/300" }}
        resizeMode="cover"
        style={styles.headerBg}
        imageStyle={styles.headerImage}
      >
        <Text style={styles.headerText}>React Native Core Components</Text>
      </ImageBackground>

      {/* Text */}
      <Text style={styles.description}>
        Halo, ini contoh penggunaan komponen dasar React Native.
      </Text>

      {/* Image */}
      <Image
        source={{ uri: "https://picsum.photos/100" }}
        style={styles.avatar}
        resizeMode="cover"
      />

      {/* TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Ketik sesuatu di sini..."
        value={inputValue}
        onChangeText={setInputValue}
      />

      {/* Switch */}
      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>Aktifkan Mode</Text>
        <Switch
          value={isEnabled}
          onValueChange={setIsEnabled}
          thumbColor={isEnabled ? "#6366f1" : "#f4f3f4"}
          trackColor={{ false: "#a1a1aa", true: "#c7d2fe" }}
        />
      </View>

      {/* Tombol Modal */}
      <Pressable
        onPress={() => setIsModalVisible(true)}
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.8 },
        ]}
      >
        <Text style={styles.buttonText}>Tampilkan Modal</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Ini adalah Modal ✨</Text>
            <Text style={styles.modalText}>
              Kamu mengetik: "{inputValue || "belum ada input"}"
            </Text>
            <Pressable
              onPress={() => setIsModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Tutup</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f5f9",
    padding: 16,
  },
  headerBg: {
    width: 320,
    height: 180,
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  headerImage: {
    borderRadius: 16,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  description: {
    color: "#1e293b",
    fontSize: 14,
    marginBottom: 8,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#94a3b8",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 260,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  switchLabel: {
    marginRight: 8,
    color: "#334155",
  },
  button: {
    backgroundColor: "#6366f1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: 280,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 8,
  },
  modalText: {
    color: "#475569",
    marginBottom: 16,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#ef4444",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  closeText: {
    color: "#fff",
    fontWeight: "500",
  },
});
