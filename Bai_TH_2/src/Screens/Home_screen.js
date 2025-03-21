import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const insights = [
    { id: "1", title: "Scan new", count: 483, icon: "scan-outline", color: "#D1C4E9" },
    { id: "2", title: "Counterfeits", count: 32, icon: "alert-circle-outline", color: "#FFCCBC" },
    { id: "3", title: "Success", count: 8, icon: "checkmark-circle-outline", color: "#B2DFDB" },
    { id: "4", title: "Directory", count: 26, icon: "calendar-outline", color: "#BBDEFB" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
          style={styles.avatar}
        />
      </View>

      {/* Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.gridContainer}>
        {insights.map((item) => (
          <TouchableOpacity key={item.id} style={[styles.card, { backgroundColor: item.color }]}>
            <Ionicons name={item.icon} size={30} color="#333" />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardCount}>{item.count}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Explore More */}
      <Text style={styles.sectionTitle}>Explore More</Text>
      <View style={styles.exploreMore}>
        <Text>...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, justifyContent: "center" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 30, paddingTop: 20 },
  greeting: { fontSize: 20, fontWeight: "bold" },
  name: { fontSize: 18, color: "gray" },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  gridContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", paddingVertical: 20 },
  card: { width: "48%", height: 120, borderRadius: 15, padding: 10, justifyContent: "center", alignItems: "center", marginVertical: 10 },
  cardTitle: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  cardCount: { fontSize: 14, color: "gray", marginTop: 3 },
  exploreMore: { height: 100, backgroundColor: "#eee", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" },
});

export default HomeScreen;