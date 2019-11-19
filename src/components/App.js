import React, { useState, useEffect } from "react";
import axios from "axios";
// import { makestyles } from "@material-ui/core/styles";
import { SCFlexContainer, SCImageContainer } from "./styles";
import { SCBackground } from "../generalStyles";
import { Button } from "@material-ui/core";

function App() {
  const [dogBreedState, setDogBreedState] = useState(false);
  //   const [forceRerender, setForceRerender] = React.useState(true);

  //   By using this Hook, you tell React that your component needs to do something after render.
  //   React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
  //   In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://dog.ceo/api/breeds/image/random");
      //data är nyckelord därför inte ändrat namn.
      setDogBreedState(result.data);
      console.log("result.data before render " + result.data);
    };

    fetchData();
    console.log("dogbreedState " + dogBreedState);
    console.log("Component mounted");
  }, []);

  const newBreed = async () => {
    const result = await axios("https://dog.ceo/api/breeds/image/random");
    //data är nyckelord därför inte ändrat namn.
    setDogBreedState(result.data);
  };

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  const ResponseURL = String(dogBreedState.message);
  const breedName = ResponseURL.split("/");

  console.log(
    String(breedName[breedName.length - 2])
      .replace("-", " ")
      .capitalize()
  );

  return (
    <SCBackground>
      <SCFlexContainer>
        <h2>Thinking about getting a dog but not sure what breed? </h2>
        <h1>
          Let the <span>Dog Breed Picker</span> guide you to your final
          decision.
        </h1>

        <h2>
          {String(breedName[breedName.length - 2])
            .replace("-", " ")
            .capitalize() + " 🐾"}
        </h2>
        <SCImageContainer>
          <img alt="" src={dogBreedState.message} />
        </SCImageContainer>
        <Button
          className="submitButton"
          variant="contained"
          color="primary"
          type="button"
          size="large"
          onClick={newBreed}
        >
          Next breed
        </Button>
      </SCFlexContainer>
    </SCBackground>
  );
}
export default App;

// 1. Trigga en ny hämtning med knappen = ändra statet, vad som helst som triggar en omrendering.
// 2. Hämtningen borde inte göras på render.
// 3. Placeholder typ Tryck på knappen för att generera en hundras.
// 4. Ändra bakgrund
// 5. Samma storlek på image container
