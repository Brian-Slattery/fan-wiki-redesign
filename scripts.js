document.addEventListener('DOMContentLoaded', () => {

    //top bar variables
    let searchbar = document.getElementById("search")

    //info panel variables
    let infoButtonOne = document.getElementById("infoButtonOne")
    let infoButtonTwo = document.getElementById("infoButtonTwo")
    let infoButtonThree = document.getElementById("infoButtonThree")

    let infoCatagories = document.getElementById("catagories")
    let infoAnswers = document.getElementById("answers")

    let backgroundCats = document.getElementById("backgroundCats")
    let apperanceCats = document.getElementById("apperanceCats")

    let apperanceAnswers = document.getElementById("apperanceAnswers")
    let backgroundAnswers = document.getElementById("backgroundAnswers")
    let affiliationAnswers = document.getElementById("affiliationAnswers")

    let infoPhotos = document.getElementById("infoPic")
    let currentImageIndex = 0;

    let infoDisplayed = 2;

    const backGPhotos = ["photos/backgroundPhoto2.png", "photos/csilla.png",];
    const appearPhotos = ["photos/appearPhoto1.png", "photos/appearPhoto2.png", "photos/appearPhoto3.png"];
    const afillPhotos = ["photos/afillPhoto1.png", "photos/afillPhoto2.png"];
    //---------------------------------------------------------

    //functions
    function updatePlaceholder() {
        if (window.innerWidth <= 1500) {
            searchbar.placeholder = "A long time ago...";
        } else {
            searchbar.placeholder = "A long time ago, in a galexy far, far away...";
        }
    }

    function updateInfoDisplay() {
        if (infoDisplayed === 2) {
            backgroundCats.style.display = "block";
            apperanceCats.style.display = "none";
            apperanceAnswers.style.display = "none";
            backgroundAnswers.style.display = "block";
            affiliationAnswers.style.display = "none";

        }
        else if (infoDisplayed === 1) {
            backgroundCats.style.display = "none";
            apperanceCats.style.display = "block";
            apperanceAnswers.style.display = "block";
            backgroundAnswers.style.display = "none";
            affiliationAnswers.style.display = "none";
        }

        else if (infoDisplayed === 3) {
            backgroundCats.style.display = "none";
            apperanceCats.style.display = "none";
            apperanceAnswers.style.display = "none";
            backgroundAnswers.style.display = "none";
            affiliationAnswers.style.display = "block";
        }
    }

    function changeImage() {
        currentImageIndex++;
    
        let currentArray;

        if (infoDisplayed === 2) {
            currentArray = backGPhotos;
        }
        else if (infoDisplayed === 1) {
            currentArray = appearPhotos;
        }
        else if (infoDisplayed === 3) {
            currentArray = afillPhotos;
        }
    
        if (currentImageIndex >= currentArray.length) {
            currentImageIndex = 0;
        }
    
        infoPhotos.src = currentArray[currentImageIndex];
    }

    //calls
    updatePlaceholder();

    updateInfoDisplay();

    window.addEventListener('resize', updatePlaceholder);

    setInterval(changeImage, 10000);

    //info panel
    infoButtonOne.addEventListener('click', () => {

        infoDisplayed = 1;
        currentImageIndex = 0;
        changeImage();  
        updateInfoDisplay();

        infoButtonOne.style.backgroundColor = "rgb(57, 57, 57)"
        infoButtonTwo.style.backgroundColor = "rgb(83, 83, 83)"
        infoButtonThree.style.backgroundColor = "rgb(83, 83, 83)"

        infoCatagories.style.borderRight = "2px solid white"
    })

    infoButtonTwo.addEventListener('click', () => {

        infoDisplayed = 2;
        currentImageIndex = 0;  
        changeImage(); 
        updateInfoDisplay();

        infoButtonTwo.style.backgroundColor = "rgb(57, 57, 57)"
        infoButtonOne.style.backgroundColor = "rgb(83, 83, 83)"
        infoButtonThree.style.backgroundColor = "rgb(83, 83, 83)"

        infoCatagories.style.borderRight = "2px solid white"
    })

    infoButtonThree.addEventListener('click', () => {

        infoDisplayed = 3;
        currentImageIndex = 0;  
        changeImage(); 
        updateInfoDisplay();

        infoButtonThree.style.backgroundColor = "rgb(57, 57, 57)"
        infoButtonTwo.style.backgroundColor = "rgb(83, 83, 83)"
        infoButtonOne.style.backgroundColor = "rgb(83, 83, 83)"

        infoCatagories.style.borderRight = "none"
    })

});
