const showMoreBtn = document.getElementById("show-more-btn");
var imageContainer = document.getElementById("imageContainer");
imageContainer.innerHTML = "";

let page = 1;

async function searchImages() {
  var searchTerm = document.getElementById("searchTerm").value;

  var accessKey = Replace with your unsplash developer access key; 
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchTerm}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page == 1) {
    imageContainer.innerHTML = "";
  }
  const results = data.results;

  results.map((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.urls.small;
    const imgLink = document.createElement("a");
    imgLink.href = image.links.html;
    imgLink.target = "_blank";

    imgLink.appendChild(imgElement);
    imageContainer.appendChild(imgElement);
  });
}

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
