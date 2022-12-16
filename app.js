const jokes = document.querySelector("#jokes");
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    console.log("API Working");
    return res.data.joke;
  } catch (error) {
    console.log("Error", error);
    return "No jokes available";
  }
};

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("li");
  newLi.append(jokeText);
  jokes.append(newLi);
};

const btn = document.querySelector("button");
btn.addEventListener("click", addNewJoke);
