import { Link } from "expo-router";
import { Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const name: string = "Chanie";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        <Text className="font-semibold text-black">Welcome, {name}</Text>
        <Text className="text-black">Hello World! Expo!</Text>
      </ScrollView>
      <Link href={"/task"}>
        <Text>Move to About!</Text>
      </Link>
    </SafeAreaView>
  );
}