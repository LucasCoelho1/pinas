import * as React from "react";
import { View } from "react-native";
import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../utils/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Login realizado com sucesso!");
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log("Erro ao logar: ", error);
        const errorCode = error.code; 
        auth/weak-password;
        // Mensagem de erro
        if (errorCode === "auth/invalid-email") {
          console.log("Email inválido!");
        }
        if (errorCode === "auth/user-not-found") {
          console.log("Usuário não encontrado!");
        }
        if (errorCode === "auth/wrong-password") {
          console.log("Senha incorreta!");
        }
      });
  };


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          label="Email"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <View style={styles.distBottom}>
          <TextInput
            label="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            mode="outlined"
          />
        </View>
        <Button mode="contained" onPress={handleLogin}>
          Login
        </Button>
      </View>
    );
  }
