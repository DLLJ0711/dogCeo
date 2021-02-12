const dogButton = document.getElementById("dogButton");

dogButton.addEventListener("click", () => {
    dogButton.textContent = 'Generating Doggo...';
  //  https://dog.ceo/api/breeds/image/random Fetch!
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const dogImg = document.createElement("img");
      dogImg.setAttribute("src", data.message);
      dogImg.setAttribute("width", 100);
      
      document.body.append(dogImg);
    })
    .catch((error) => {
      console.log(error);
    });
});

