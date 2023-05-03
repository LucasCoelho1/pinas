import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { Text, Button} from "react-native-paper";

export default function GameQuiz() {

  const mock = [
    {
      id: 1,
      Name: "Gekko",
      Image:
        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png",
      respCorrect: 2,
    },
    {
      id: 2,
      Name: "Fade",
      Image:
        "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png",
      respCorrect: 2,
    },
    {
      id: 3,
      Name: "Breach",
      Image:
        "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png",
      respCorrect: 2,
    },
    {
      id: 4,
      Name: "Raze",
      Image:
        "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png",
      respCorrect: 1,
    },
    {
      id: 5,
      Name: "Chamber",
      Image:
        "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png",
      respCorrect: 2,
    },
    {
      id: 6,
      Name: "KAY/O",
      Image:
        "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png",
      respCorrect: 3,
    },
    {
      id: 7,
      Name: "Skye",
      Image:
        "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png",
      respCorrect: 3,
    },
    {
      id: 8,
      Name: "Cypher",
      Image:
        "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png",
      respCorrect: 3,
    },
    {
      id: 9,
      Name: "Sova",
      Image:
        "https://media.valorant-api.com/agents/ded3520f-4264-bfed-162d-b080e2abccf9/displayicon.png",
      respCorrect: 1,
    },
    {
      id: 10,
      Name: "Killjoy",
      Image:
        "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
      respCorrect: 1,
    },
    {
      id: 11,
      Name: "Harbor",
      Image:
        "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/displayicon.png",
      respCorrect: 1,
    },
    {
      id: 12,
      Name: "Viper",
      Image:
        "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
      respCorrect: 1,
    },
    {
      id: 13,
      Name: "Phoenix",
      Image:
        "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
      respCorrect: 2,
    },
    {
      id: 14,
      Name: "Astra",
      Image:
        "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png",
      respCorrect: 1,
    },
    {
      id: 15,
      Name: "Brimstone",
      Image:
        "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png",
      respCorrect: 3,
    },
    {
      id: 16,
      Name: "Neon",
      Image:
        "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayicon.png",
      respCorrect: 3,
    },
    {
      id: 17,
      Name: "Yoru",
      Image:
        "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png",
      respCorrect: 1,
    },
    {
      id: 18,
      Name: "Sage",
      Image:
        "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png",
      respCorrect: 3,
    },
    {
      id: 19,
      Name: "Reyna",
      Image:
        "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png",
      respCorrect: 3,
    },
    {
      id: 20,
      Name: "Omen",
      Image:
        "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png",
      respCorrect: 2,
    },
    {
      id: 21,
      Name: "Jett",
      Image:
        "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
      respCorrect: 2,
    },
  ];
  const [agent, setAgent] = useState(0);
  const [valorAleatorio, setValorAleatorio] = useState(0);
  const [buttonValues, setButtonValues] = useState([0, 0, 0]);
  const [buttonNames, setButtonNames] = useState(["", "", ""]);
  const [correctButton, setCorrectButton] = useState(0);

  const generateRandomNumber = () => {
    const len = mock.length;
    return Math.floor(Math.random() * len);
  };

  const randomAgent = e => {
    const len = mock.length;
    setValorAleatorio(Math.floor(Math.random() * len));
    setAgent(valorAleatorio);
    setCorrectButton(valorAleatorio);
    generateButtonValues();
  };

  const generateButtonValues = (correctButton) => {
    // const len = mock.length;
    const values = [0, 0, 0];
    values[correctButton] = agent;
    for (let i = 0; i < 3; i++) {
      if (values[i]===0) {
        let newValue = generateRandomNumber();
        while (values.includes(newValue)) {
          newValue = generateRandomNumber();
        }
        values[i] = newValue;
      }
    }
    setButtonValues(values);
    setButtonNames(values.map((value) => mock[value].Name));
  };

  const handleButtonPress = (buttonValue) => {
    if (buttonValue === correctButton) {
      alert('Parabéns!');
    } else {
      alert('Que pena, tente novamente.');
    }
    randomAgent();
    setCorrectButton(agent);
  };

  function handleButtonNone() {
    if (buttonValues[0] !== correctButton && buttonValues[1] !== correctButton && buttonValues[2] !== correctButton) {
      alert('Parabéns!');
    } else {
      alert('Que pena, tente novamente.');
    }
    randomAgent();
    setCorrectButton(agent);
  }


  return (
    <View>
      <Text>GameQuiz</Text>
      <Image source={{uri:mock[agent].Image}} style={{ width:100, height:100 }}/>
      <Button onPress={randomAgent} mode="contained">pogsawf</Button>
      <Button onPress={() => handleButtonPress(buttonValues[0])}>{buttonNames[0]}</Button>
      <Button onPress={() => handleButtonPress(buttonValues[1])}>{buttonNames[1]}</Button>
      <Button onPress={() => handleButtonPress(buttonValues[2])}>{buttonNames[2]}</Button>
      <Button onPress={() => handleButtonNone()}>Nenhuma das opções</Button>
    </View>

  ); 

}

// url:[mock[agent].Image]