let section = document.querySelector("#display-info")

fetch("https://ghibliapi.herokuapp.com/films")

.then((res) =>{
    return res.json();
})
.then((movies) =>{
    console.log(movies)
    let movieSelect = document.querySelector("select");
    for(let movie of movies){
    let option = document.createElement("option");
      option.setAttribute("value", movie.title);
      option.textContent = movie.title;
      movieSelect.append(option);
    }

    //Display info of movie
    let movieTitle = document.createElement("h3");
    let movieYear = document.createElement("p");
    let description = document.createElement("p");

    let selectedMovie;

    movieSelect.addEventListener("change", ()=>{
        for(let movie of movies){
            if(movieSelect.value === movie.title){
                selectedMovie = movie;
                movieTitle.textContent = movie.title;
                movieYear.textContent = movie.release_date;
                description.textContent = movie.description;
            
            }
            
        }
        section.innerHTML =
        `<section id="display-info">
         <h3>${movieTitle.textContent}</h3>
         <br>
         ${movieYear.textContent}
         <p>${description.textContent}</p>
        `;
    });
    
    
    let submitForm = document.querySelector("form");
    submitForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let formValue = e.target["your-review"].value;
        console.log(formValue)
        let reviewUL = document.querySelector("ul");
        let newReviewLi = document.createElement("li");
        newReviewLi.textContent = formValue;
        reviewUL.append(newReviewLi);

      });
    
});