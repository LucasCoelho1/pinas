import { DefaultTheme, Provider as NativeProvider } from "react-native-paper";
import RootNavigation from "./src";

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#FFFFFF",
      accent: "#FFFFFF",
      onSurfaceVariant: "#ffffff",
      text: "#ffffff",
      placeholder: "#ffffff",
  },
};
  return (
  <NativeProvider theme={theme}>
    <RootNavigation />
  </NativeProvider>);
}