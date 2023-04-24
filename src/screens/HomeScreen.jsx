import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Essa é a Home Screen</Text>
      <Button
        mode="contained"
        style={styles.distBottomHome}
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        Faça o login
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("RegisterScreen");
        }}
      >
        Faça o registro
      </Button>
    </View>
  );
}
