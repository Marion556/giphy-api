document.addEventListener("DOMContentLoaded", function(event) {     

    const form = document.getElementById("form");
    const submit = document.getElementById("submit");
    const images = document.getElementById("images");
    const remove = document.getElementById("remove");

    submit.addEventListener("click", async function fetch(e) {
    e.preventDefault();
    const keyword = document.getElementById("keyword").value;
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    let numResults = response.data.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);    
        const url = response.data.data[`${randomIdx}`].images.original.url;
        const newImage = document.createElement('img');
        newImage.src = url;
        images.append(newImage);
        form.reset();
    }
    });

    remove.addEventListener("click", function() {
        const allImages = document.querySelectorAll('img');
        let x = allImages.length;
        for (let i = 0; i < x; i++) {
            allImages[i].remove();
        }
    });

});