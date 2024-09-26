let url =
  "https://api.unsplash.com/search/photos?query=spring&client_id=gl2ROvG6eEHQ_sRkXSHi4fE7i3rxrNfSwLAavbVm60E";
const button = document.getElementById("button");
const mySearch = document.getElementById("mySearch");

const img_container = document.getElementById("img-container");

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  while (img_container.childElementCount > 1) {
    img_container.removeChild(img_container.childNodes[0]);
  }
  const img = document.querySelector(".img");
  for (let i = 0; i < data.results.length - 1; i++) {
    img_container.innerHTML += img.outerHTML;
    console.log(img_container);
  }
  for (let i = 0; i <= data.results.length - 1; i++) {
    showData(img_container.children[i], data.results[i]);
  }
}
getData();

function showData(element, dataResult) {
  const imageUrl = dataResult.urls.regular;
  return (element.src = `${imageUrl}`);
}

button.addEventListener("click", () => {
  const querysearch = mySearch.value?.trim();
  if(querysearch){
    url = `https://api.unsplash.com/search/photos?query=${querysearch}&client_id=gl2ROvG6eEHQ_sRkXSHi4fE7i3rxrNfSwLAavbVm60E`;
    getData();
  }
 
});
// при открытии страницы курсор в поле ввода
document.addEventListener('DOMContentLoaded', () =>{
    mySearch.focus();
})
// отправка поискового запроса по нажатию enter
mySearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
     const querysearch = mySearch.value?.trim();
     if(querysearch){
        url = `https://api.unsplash.com/search/photos?query=${querysearch}&client_id=gl2ROvG6eEHQ_sRkXSHi4fE7i3rxrNfSwLAavbVm60E`;
        getData();
      }
    }
})