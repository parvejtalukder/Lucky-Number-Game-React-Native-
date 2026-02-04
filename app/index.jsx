import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import App_bg from "../components/_app_bg";

export default function Index() {
  const [name, setName] = useState("");
  const router = useRouter();

  const goNext = () => {
    if (!name.trim()) return; 
    router.push({
      pathname: "/home",
      params: { name },
    });
  };

  return (
    <App_bg>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#410c0c" }}>
          What’s your name?
        </Text>

        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={{
            width: "100%",
            maxWidth: 200,
            backgroundColor: "#fff",
            padding: 12,
            borderRadius: 8,
            fontSize: 16,
          }}
        />

        <View style={{ width: 200 }}>
          <Button title="Continue" onPress={goNext} />
        </View>
      </View>
    </App_bg>
  );
}
