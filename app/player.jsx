import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import App_bg from "../components/_app_bg";

export default function Player() {
  const { name } = useLocalSearchParams();

  const [num, setNum] = useState("");
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState("");
  const [buttonText, setButtonText] = useState("Play");

  const Hell = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(randomNumber);

    const userNum = parseInt(num, 10);

    if (userNum === randomNumber) {
      setResult("You Win!");
    } else {
      setResult("You lose, try again");
    }

    setButtonText("Rolling...");
    setTimeout(() => {
      setButtonText("Play");
    }, 800);
  };

  return (
    <App_bg>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Text style={{ color: "red", fontSize: 30 }}>
          {number ?? "?"}
        </Text>

        <Text style={{ color: "orange", fontSize: 30 }}>
          Hello <Text style={{ color: "black" }}>{name}</Text>
        </Text>

        <TextInput
          placeholder="Enter a number (1–6)"
          value={num}
          onChangeText={(text) => setNum(text.replace(/[^0-9]/g, ""))}
          keyboardType="numeric"
          inputMode="numeric"
          maxLength={1}
          style={{
            width: "100%",
            maxWidth: 200,
            backgroundColor: "#fff",
            padding: 12,
            borderRadius: 8,
            fontSize: 16,
            textAlign: "center",
          }}
        />

        <View style={{ width: 200 }}>
          <Button title={buttonText} onPress={Hell} />
        </View>

        {!!result && (
          <Text style={{ color: "#421111", fontSize: 22, marginTop: 10 }}>
            {result}
          </Text>
        )}
      </View>
    </App_bg>
  );
}
