const Joke = document.getElementById("GenerateJoke");
const Button = document.getElementById("btn");

Button.addEventListener("click", getJoke);
getJoke();

async function getJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json",
    },
  });

  const jokeobj = await res.json();
  const randomJoke = jokeobj.joke;
  Joke.innerHTML = randomJoke;
  console.log (jokeobj.joke);
}
