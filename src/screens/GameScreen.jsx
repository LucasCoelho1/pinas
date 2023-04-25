import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
  const [agente, setagente] = useState(null);
  const [totalPersonagens, setTotalPersonagens] = useState(1);
  const [resultado, setResultado] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents/")
      .then((response) => response.json())
      .then((json) => {
        setTotalPersonagens(json.info.count);
      });
  }, []);

  useEffect(() => {
    BuscarPerson();
  }, [totalPersonagens]);

  function BuscarPerson() {
    fetch("https://valorant-api.com/v1/agents/" + returnRandomName())
      .then((response) => response.json())
      .then((json) => {
        setagente(json);
        setResultado(null);
      });
  }

  async function handleagenteVivoOuMorto(resposta) {
    setIsLoading(true);
    const namecorreto = agente.name;
    if (resposta === namecorreto) {
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

  const returnRandomName = () => {
    let randomName = Math.floor(Math.random() * agente.name) + 1;

    if (randomName === 0) {
      return 1;
    }
    return randomName;
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
        <Text style={styles.title}>agente Game</Text>
        <Text style={styles.subtitle}>
          Você sabe o nome deste agente?
        </Text>
        {agente && (
          <View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Image
                source={{ uri: agente.image }}
                style={{ width: 200, height: 200, marginTop: 20, border: "5px black solid", borderRadius: 20 }}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <Button
                  mode="contained"
                  onPress={() => handleagenteVivoOuMorto(true)}
                  disabled={isLoading}
                >
                  {agente.name}
                </Button>
              </View>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <Button
                  mode="contained"
                  onPress={() => handleagenteVivoOuMorto(false)}
                  disabled={isLoading}
                >
                  {agente.name}
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
