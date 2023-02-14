const imgRef = document.querySelector(".image-root");

let position = 0;
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sirius_A_and_B_artwork.jpg/640px-Sirius_A_and_B_artwork.jpg",
  "https://im.indiatimes.in/content/2022/Nov/nasa-vhSz50AaFAs-unsplash_637735d413edb.jpg?w=640&h=480&cc=1",
  "https://look.com.ua/pic/201507/640x480/look.com.ua-124811.jpg",
  "https://img2.goodfon.ru/original/640x480/a/59/solar-system-mercury-planet.jpg",
  "https://im.indiatimes.in/content/2022/Jan/Jupiter-1_61e5290213353.jpg?w=640&h=480&cc=1",
];

imgRef.src = images[position];

function changePhoto() {
  position >= images.length - 1 ? (position = 0) : ++position;
  imgRef.src = images[position];
}

setInterval(changePhoto, 1000);
