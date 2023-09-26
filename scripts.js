document.addEventListener('DOMContentLoaded', () => {

    //top bar variables
    let searchbar = document.getElementById("search");
    let searchbar2 = document.getElementById("search2");

    //info panel variables
    let infoButtonOne = document.getElementById("infoButtonOne");
    let infoButtonTwo = document.getElementById("infoButtonTwo");
    let infoButtonThree = document.getElementById("infoButtonThree");

    let infoCatagories = document.getElementById("catagories");

    let backgroundCats = document.getElementById("backgroundCats");
    let apperanceCats = document.getElementById("apperanceCats");

    let apperanceAnswers = document.getElementById("apperanceAnswers");
    let backgroundAnswers = document.getElementById("backgroundAnswers");
    let affiliationAnswers = document.getElementById("affiliationAnswers");

    let infoPhotos = document.getElementById("infoPic");
    let currentImageIndex = 0;

    let infoDisplayed = 2;

    const backGPhotos = ["photos/backgroundPhoto2.png", "photos/csilla.png",];
    const appearPhotos = ["photos/appearPhoto1.png", "photos/appearPhoto2.png", "photos/appearPhoto3.png"];
    const afillPhotos = ["photos/afillPhoto1.png", "photos/afillPhoto2.png"];

    //bio panel variables

    let bioContainer = document.getElementById("bioContainer");
    let bioTitle = document.getElementById("bioTitle");

    let personalityButton = document.getElementById("bioButtonOne");
    let personalityDropdown = document.getElementById("personalityOptions");

    const personalityButtonWidth = window.getComputedStyle(personalityButton).width;

    let bioButton = document.getElementById("bioButtonTwo");
    let bioDropdown = document.getElementById("bioOptions");

    const BioButtonWidth = window.getComputedStyle(bioButton).width;

    let textArea = document.getElementById("bioText");

    let bioNextPage = document.getElementById("bioNextPage");
    let bioLastPage = document.getElementById("bioPreviousPage");

    let bioPageNumber = document.getElementById("bioPageNumber");

    let originsButton = document.getElementById("originsButton");
    let legacyButton = document.getElementById("legacyButton");
    let btsButton = document.getElementById("bioButtonThree")

    let originsText = "Mitth'raw'nuruodo was born on the planet Csilla during the final decades of the Galactic Republic. His species, the Chiss, controlled an area of space in the part of the galaxy known to those in the Republic as the Unknown Regions. He and his brother, Mitth'ras'safis, were born to a family of commoners, but, after joining the Chiss Expansionary Fleet, Mitth'raw'nuruodo was taken as a merit adoptive in the Eighth Ruling Family of Chiss society. Mitth'ras'safis also joined the Eight Ruling Family, eventually becoming a Syndic within the family. Though the practice of military officers becoming merit adoptives in the Ruling Families, and taking on the colors of their adoptive family, was common, they usually ceased belonging to the family upon leaving the military. Mitth'raw'nuruodo, however, soon reached the rank of Force Commander—the youngest Chiss ever to achieve the rank—and impressed the Eighth Ruling Family enough during his early career to be considered a trial-born, with the possibility of becoming a permanent member of the family. His work with the Expansionary Fleet gave him the opportunity to learn to speak several languages used throughout the Unknown Regions, including the trade languages Sy Bisti and Minnisiat, in addition to his native Cheunh."
    let legacyText = "After his death, Thrawn would be remembered as the genius tactician, consummate strategist, and Imperial leader who nearly brought down the New Republic. Thrawn was viewed as a hero by some members of the Empire of the Hand, including one of Baron Fel's sons, the Chiss-raised Jagged Fel. However, most of his own people still intensely disliked him. During a battle between Chiss forces and a group of pirates at the Syndic Mitth'raw'nuruodo training academy on Rhigar, Lieutenant Jagged Fel used Thrawn's tactics as an inspiration as he and the surviving Chiss cadets defeated the pirates. Fel would go on to become the Galactic Emperor of a revived empire."
    let btsText = "Grand Admiral Thrawn first appeared in Timothy Zahn's Heir to the Empire, the first book of The Thrawn Trilogy named for the Grand Admiral. The trilogy marked the dawn of a new era in the Star Wars Expanded Universe, and Thrawn's character is considered a contributing factor.[70] Author Timothy Zahn has stated that Thrawn's character is a composite of various historical and fictional personalities, including Erwin Rommel, Robert E. Lee, Hannibal Barca, Alexander the Great and Sherlock Holmes, to name a few.[71] Another loose inspiration for Thrawn was the character of General Maximilian Veers from the 1980 film Star Wars: Episode V The Empire Strikes Back, who had the distinction of being one of the few highly competent Imperial officers from the original trilogy. In a 2007 interview, Timothy Zahn explained that he could bring another clone of Thrawn to life if the Grand Admiral's ability is an absolute necessity to solve future galactic crisis. However, to escape the traditional archetypes of clones, Zahn stated that that clone would be aware that he was not Thrawn, and would be aware of immense pressure to live up to the original. Thrawn's possible return was hinted at in Zahn's novel Survivor's Quest, where great changes in the behavior of Chaf'orm'bintrano lead Mara Jade Skywalker to suspect that another clone of Thrawn existed and may be behind the events of the novel."
    //appearance Panel Variables

    let appearancesButton = document.getElementById("appearancesButton");
    let MentionedButton = document.getElementById("MentionedButton");

    let appearancesContainer = document.getElementById("appearances");
    let mentionsContainer = document.getElementById("mentions");

    //---------------------------------------------------------

    //functions
    function updatePlaceholder() {
        if (window.innerWidth <= 1500) {
            searchbar.placeholder = "A long time ago...";
            searchbar2.placeholder = "A long time ago...";
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

    function updateDropdownSize(){
        const personalityButtonWidth = window.getComputedStyle(personalityButton).width;
        const BioButtonWidth = window.getComputedStyle(bioButton).width;
        personalityDropdown.style.width = personalityButtonWidth;
        bioDropdown.style.width = BioButtonWidth;
    }

    function divideText(text){
        let pages = [];
        let minimumCharacterLimit = 0;
        let maximumCharacterLimit = 200;

        while (minimumCharacterLimit < text.length) {
            while (maximumCharacterLimit < text.length && text[maximumCharacterLimit] !== '.') {
                maximumCharacterLimit++;
            }
            maximumCharacterLimit++;
            pages.push(text.slice(minimumCharacterLimit, maximumCharacterLimit));
            minimumCharacterLimit = maximumCharacterLimit;
            maximumCharacterLimit += 200;
        }

        return pages;
    }

    let devidedPages = divideText(originsText);

    let currentPage = 0;
    function displaySinglePage(pageNumber) {
        textArea.innerHTML = `<p>${devidedPages[pageNumber]}</p>`;
        bioPageNumber.innerText = pageNumber + 1;
    }

    //calls
    updatePlaceholder();

    updateInfoDisplay();

    window.addEventListener('resize', updatePlaceholder);

    setInterval(changeImage, 10000);

    personalityDropdown.style.width = personalityButtonWidth;
    bioDropdown.style.width = BioButtonWidth;

    window.addEventListener('resize', updateDropdownSize);

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

    //bio Panel

    bioButton.style.backgroundColor = "rgb(57, 57, 57)"

    displaySinglePage(currentPage)

    bioNextPage.addEventListener('click', () => {
        currentPage++;
        if (currentPage >= devidedPages.length) {
            currentPage = 0;
        }
        displaySinglePage(currentPage);
    });

    bioLastPage.addEventListener('click', () => {
        currentPage--;
        if (currentPage < 0) {
            currentPage = devidedPages.length - 1;
        }
        displaySinglePage(currentPage);
    });

    originsButton.addEventListener('click', () => {      
        devidedPages = divideText(originsText);
        currentPage = 0;
        displaySinglePage(currentPage); 
        bioButton.style.backgroundColor = "rgb(57, 57, 57)"
        personalityButton.style.backgroundColor = "rgb(83, 83, 83)"
        btsButton.style.backgroundColor = "rgb(83, 83, 83)"
        bioTitle.textContent = "Origins"
        bioContainer.style.background = "linear-gradient(rgba(164, 164, 164, 0.5), rgba(164, 164, 164, 0.5)), url(photos/testBackground.jpg)"
        bioContainer.style.backgroundSize = "cover"

    });

    legacyButton.addEventListener('click', () => {      
        devidedPages = divideText(legacyText);
        currentPage = 0;
        displaySinglePage(currentPage);
        bioButton.style.backgroundColor = "rgb(83, 83, 83)"
        btsButton.style.backgroundColor = "rgb(83, 83, 83)"
        personalityButton.style.backgroundColor = "rgb(57, 57, 57)"
        bioTitle.textContent = "Legacy"
        bioContainer.style.background = "linear-gradient(rgba(164, 164, 164, 0.5), rgba(164, 164, 164, 0.5)), url(photos/Media1.jpg)"
        bioContainer.style.backgroundSize = "cover"
    });

    btsButton.addEventListener('click', () => {
        devidedPages = divideText(btsText)
        currentPage = 0;
        displaySinglePage(currentPage);
        btsButton.style.backgroundColor = "rgb(57, 57, 57)"
        bioButton.style.backgroundColor = "rgb(83, 83, 83)"
        personalityButton.style.backgroundColor = "rgb(83, 83, 83)"
        bioTitle.textContent = "Behind the Scenes"
        bioTitle.style.whiteSpace = "nowrap"
        if (window.innerWidth <= 1500) {
            bioTitle.style.whiteSpace = "normal"
            bioTitle.style.textAlign = "center"
        }

    })     

    //appearance Panel
    appearancesButton.addEventListener('click', () => {
        appearancesButton.style.backgroundColor = "rgb(57, 57, 57)"
        appearancesContainer.style.display = "flex"
        mentionsContainer.style.display = "none"
        MentionedButton.style.backgroundColor = "rgb(83, 83, 83)"
    })

    MentionedButton.addEventListener('click', () => {
        appearancesButton.style.backgroundColor = "rgb(83, 83, 83)"
        appearancesContainer.style.display = "none"
        mentionsContainer.style.display = "flex"
        MentionedButton.style.backgroundColor = "rgb(57, 57, 57)"
    })

});  
