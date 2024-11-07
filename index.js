import { POST } from './POST.js';

const getJokes = async (count) => {
    const jokes = []; 

    for (let i = 0; i < count; i++) {
        try {
            const config = { headers: { Accept: 'application/json' } };
            const res = await axios.get("https://icanhazdadjoke.com/", config);
            const jokeText = res.data.joke;  // Extract the joke text
            jokes.push(jokeText);  
            await POST(jokeText); 
        } catch (e) {
            jokes.push("Failed to fetch joke"); 
        }
    }

    return jokes; 
};

export { getJokes };
