const POST = async (joke) => {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", { joke });
        console.log("Response data:", response.data);
        
        return response.data; 
    } catch (e) {
        console.error("Failed to log the joke:", e); // Log POST error
    }
};

export { POST };
