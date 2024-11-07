import { getJokes } from './index.js';

document.addEventListener("DOMContentLoaded", () => {
    const jokeCarouselInner = document.querySelector(".carousel-inner");
    const jokeButton = document.getElementById("myBtn");

    async function displayJokesInCarousel(count) {
        jokeCarouselInner.innerHTML = ''; 

        try {
            const jokes = await getJokes(count);
            let jokeRow;
            let jokeCounter = 0;

            jokes.forEach((joke, index) => {
                if (jokeCounter === 0) {
                    const carouselItem = document.createElement("div");
                    carouselItem.classList.add("carousel-item");
                    if (index === 0) carouselItem.classList.add("active"); // Make the first item active

                    jokeRow = document.createElement("div");
                    jokeRow.classList.add("row", "g-2");
                    carouselItem.appendChild(jokeRow);
                    jokeCarouselInner.appendChild(carouselItem);
                }

                const jokeCol = document.createElement("div");
                jokeCol.classList.add("col-md-4");
                jokeCol.style.margin = "20px"; //Used for spacing between cards

                jokeCol.innerHTML = `
                    <div class="card text-center p-3" style="background-color: #f9f9f9; border: 1px solid #ccc; border-radius: 8px;">
                        <p>${joke}</p>
                    </div>
                `;
                jokeRow.appendChild(jokeCol);

                jokeCounter++;

                // Reset cards after every 10 jokes
                if (jokeCounter === 10) {
                    jokeCounter = 0;
                }
            });
            console.log("Jokes loaded successfully into carousel");
        } catch (error) {
            console.error("Error displaying jokes:", error);
        }
    }

    jokeButton.addEventListener("click", () => displayJokesInCarousel(10));
});
