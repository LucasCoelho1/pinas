import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
  const [personagem, setPersonagem] = useState(null);
  const [totalPersonagens, setTotalPersonagens] = useState(1);
  const [resultado, setResultado] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.api-onepiece.com/characters")
      .then((response) => response.json())
      .then((json) => {
        setTotalPersonagens(json.info.count);
      });
  }, []);

  useEffect(() => {
    BuscarPerson();
  }, [totalPersonagens]);

  function BuscarPerson() {
    fetch("https://api.api-onepiece.com/characters/" + returnRandomNumber())
      .then((response) => response.json())
      .then((json) => {
        setPersonagem(json);
        setResultado(null);
      });
  }

  async function handlePersonagemVivoOuMorto(resposta) {
    setIsLoading(true);
    const isvivant = personagem.status === "vivant";
    if (resposta === isvivant) {
      setResultado("Parabéns, você acertou!");
      setPontuacao(pontuacao + 1);
    } else {
      setResultado("Que pena, você errou!");
      setPontuacao(pontuacao - 1);
    }
    setTimeout(() => {
      BuscarPerson();
      setIsLoading(false);
    }, 500);
  }

  const returnRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * totalPersonagens) + 1;

    // canoot return 0
    if (randomNumber === 0) {
      return 1;
    }
    return randomNumber;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          border: "7px double black",
          alignItems: "Center",
          padding: 30,
          borderRadius: 10,
        }}
      >
        <Text style={styles.title}>One Piece Game</Text>
        <Text style={styles.subtitle}>
          Você sabe o nome deste personagem?
        </Text>
        {personagem && (
          <View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Image
                source={{ uri: personagem.image }}
                style={{ width: 200, height: 200, marginTop: 20, border: "5px black solid", borderRadius: 20 }}
              />
            </View>
            <Text
              style={{ fontSize: 25, textAlign: "center", marginVertical: 20 }}
            >
              Como o/a {personagem.name} está?
            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <Button
                  mode="contained"
                  onPress={() => handlePersonagemVivoOuMorto(true)}
                  disabled={isLoading}
                >
                  Vivo
                </Button>
              </View>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <Button
                  mode="contained"
                  onPress={() => handlePersonagemVivoOuMorto(false)}
                  disabled={isLoading}
                >
                  Morto
                </Button>
              </View>
            </View>
            {resultado && (
              <Text style={{ textAlign: "center", marginVertical: 20 }}>
                {resultado}
              </Text>
            )}
            <Text style={{ textAlign: "center", marginVertical: 20 }}>Pontuação: {pontuacao}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
