function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#userInput");

  let key = "fa01ob92afac42305bb6e069bt2408b4";
  let prompt = `Write a haiku poem about ${userInput.value}. Remember, haikus are no more than 17 syllable and they are composed of 3 lines. The first line has 5 syllables, the second line has 7 syllables, and the third has 5 syllables. Please answer with just the haiku and nothing else. Please write your poem in English. Please seperate your poem into three lines with <br/> in between. Add a <br/> after the last line of the poem and then sign the poem "-SheCodes AI" in <strong>.`;
  let context = "You are a creative AI assistant that loves to write poetry!";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Generating.. please wait..";

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit", generatePoem);
