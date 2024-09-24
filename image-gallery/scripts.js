const url = "https://api.unsplash.com/search/photos?query=spring&client_id=gl2ROvG6eEHQ_sRkXSHi4fE7i3rxrNfSwLAavbVm60E";
const img = document.querySelector(".img");

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data);
}
getData();
function showData(data){
    const imageUrl = data.results[0].urls.regular;
    return img.src = `${imageUrl}`
}