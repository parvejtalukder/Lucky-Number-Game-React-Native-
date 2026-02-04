import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: "visible",
    // resizeMode="cover",
        width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width: "200px",
  }
});
