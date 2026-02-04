import { Button } from "@react-navigation/elements";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import App_bg from "../components/_app_bg";

export default function Home() {
  const { name } = useLocalSearchParams();
  const btTExt = "Let's Play";
  const router = useRouter();

  const goNext = () => {
    // if (!.trim()) return; 
    router.push({
      pathname: "/player",
      params: { name },
    });
  };
  return (
    <App_bg>
      <View
        style={{

          flex: 1,
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "times", fontWeight: "bold", textAlign: "center", fontSize: 32, color: "#273a16" }}>
          Hello, {name}!
        </Text>
        <Button onPress={goNext} style={{width: "200px"}}>{btTExt}</Button>
      </View>
    </App_bg>
  );
}
