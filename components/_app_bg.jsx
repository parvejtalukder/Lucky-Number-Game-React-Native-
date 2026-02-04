import { ImageBackground, StyleSheet } from "react-native";

const App_bg = ({ children }) => {
  return (
    <ImageBackground
      source={{uri: "https://images.pexels.com/photos/7134992/pexels-photo-7134992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}  
      style={styles.background}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default App_bg;
