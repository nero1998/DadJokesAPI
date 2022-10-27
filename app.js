// fetch(`https://swapi.dev/api/people/1`)
//   .then((res) => {
//     console.log("resolved", res);
//     return res.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((e) => {
//     console.log("error", e);
//   });

// const loadStarWars = async (id) => {
//   try {
//     const res = await fetch(`https://swapi.dev/api/people/${id}`);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// loadStarWars(1);

// AXIOS PRACTICE

// axios
//   .get(`https://swapi.dev/api/people/1`)
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

// ASYNC AXIOS

// async function starWars(id) {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

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
