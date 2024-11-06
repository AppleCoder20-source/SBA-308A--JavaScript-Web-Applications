import {POST} from './POST.js'
const getJoke1 = document.getElementById("myBtn");
const jokeDisplay = document.getElementById("jokeDisplay");

const getJokes = async (count) => {
    jokeDisplay.innerHTML = ""; // Clear previous jokes
    const jokes = [];

    for (let i = 0; i < count; i++) {
        try {
            const config = { headers: { Accept: 'application/json' } };
            const res = await axios.get("https://icanhazdadjoke.com/", config);
            console.log(res.data) //show the json form of jokes
            
            const Joker = res.data.joke
            jokes.push(Joker)
            await POST(Joker)

        } catch (e) {
            jokes.push("Invalid request"); // Add error message if request fails
        }
    }
    jokes.forEach(joke => {
        const jokeElement = document.createElement("p"); 
        jokeElement.innerText = joke;
        jokeDisplay.appendChild(jokeElement); 
    });
};

getJoke1.addEventListener("click", () => getJokes(10)); 
