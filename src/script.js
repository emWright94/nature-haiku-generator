function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Generating haiku...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit", generatePoem);
