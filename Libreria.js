const booksURL = " https://striveschool-api.herokuapp.com/books";

const getBook = function () {
  fetch(booksURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella risposta!");
      }
    })
    .then((books) => {
      console.log("books:", books);
      books.forEach((singleBook) => {
        // CREO GLI LI
        // 1o li) TITOLO
        let newTitle = document.createElement("li");
        newTitle.classList.add("text-decoration-none");
        newTitle = singleBook.title;

        // 2o li) PREZZO
        let newPrice = document.createElement("li");
        newPrice.classList.add("text-decoration-none");
        newPrice = singleBook.price;

        // CREO LA UL
        let newUl = document.createElement("ul");
        newUl.classList.add("text-center");
        newUl.appendChild(newTitle);
        newUl.appendChild(newPrice);

        // CREO IL DIV DEL BODY DELLA CARD
        let newCardBody = document.createElement("div");
        newCardBody.classList.add("card-body");
        newCardBody.appendChild(newUl);

        // CREO L'IMMAGINE DEL LIBRO
        let newImg = document.createElement("img");
        newImg.classList.add("img-fluid");
        newImg = singleBook.img;

        //CREO LA CARD
        let newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.appendChild(newImg);
        newCard.appendChild(newCardBody);

        // CREO LA COL
        let newCol = document.createElement("div");
        newCol.classList.add("col col-3 col-md-3 col-lg-4");
        newCol.appendChild(newCard);

        // APPENDO LA COL CON DENTRO LA CARD COMPLETA ALLA ROW
        let row = document.getElementById("row");
        row.appendChild(newCol);
      });
    })
    .catch((error) => {
      console.log("ERRORE!", error);
    });
};

getBook();
