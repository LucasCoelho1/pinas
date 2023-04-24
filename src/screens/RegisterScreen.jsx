import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "../utils/styles";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // função para lidar com o registro do usuário
  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso!");
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário: ", error);
        const errorCode = error.code; // auth/weak-password
        // Mensagem de erro
        if (errorCode === "auth/weak-password") {
          console.log("A senha é muito fraca.");
        }
        if (errorCode === "auth/invalid-email") {
          console.log("Email inválido!");
        }
        if (errorCode === "auth/email-already-exists") {
          console.log("Email ja cadastrado!");
        }
        if (errorCode === "auth/auth/invalid-password") {
          console.log("Senha inválida!");
        }
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph> Realize o seu cadastro {email}</Paragraph>
        <TextInput
          label={"Email"}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <TextInput
          label={"Senha"}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
          mode="outlined"
        />
        <Button mode="contained" onPress={handleRegister}>
          Registre-se
        </Button>
      </View>
    </View>
  );
}
