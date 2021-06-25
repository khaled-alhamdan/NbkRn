import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

// Importing splashscreen
import Splashscreen from "./src/screens/AuthPages/Splashscreen";

// Importing navigation
import Navigation from "./src/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) return <Splashscreen setIsLoading={setIsLoading} />;

  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
