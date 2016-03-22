

$("document").ready(function () {

    //Open/Close the slide out nav menu when the hamburger button is clicked
    $("#menuToggle").click(function(){
       //check if the menu is open or closed
        if($(this).hasClass("open")){
            //close the menu
            $(this).removeClass("open").addClass("closed");
        } else {
            //open the menu
            $(this).removeClass("closed").addClass("open");
        }

    });

    //Active scroll spy to show user which section they are viewing
    $("body").scrollspy({
        target: ".navCol",
        offset: 250
    });

    //Add the currentSection class to the section opened on page load
    $("li.active > a").addClass("currentSection");

    //Change current section arrow indicator on scroll into new section
    $(".navCol").on("activate.bs.scrollspy", function () {
        var $activeSection = $("li.active > a");
        $(".active").parent(".links")
            .find(".currentSection")
            .removeClass("currentSection");
        $($activeSection).addClass("currentSection");
    });

    //TODO: Add when a user clicks for mobile and tablets (need to use a visibility hidden so buttons not accidently activated)
    //Display the project buttons on hover
    $(".project").mouseenter(function(){
       $(this).find(".projectButtons").attr("style", "opacity: 1");
    });
    //Remove the project buttons when not hovered
    $(".project").mouseleave(function(){
        $(this).find(".projectButtons").attr("style", "opacity: 0");
    });

    //Open the project info modal
    $(".infoBtn").click(function(){
        displayProjectInfo(this);
    });

    //Submit contact form
    $("#submitMsg").click(function(){
        submitMessage();
    });
});

/**
 * Find the corresponding data to be entered into a modal window showing the project information
 * based on the project info button pressed.
 * @param button
 */
function displayProjectInfo(button){
    //Determine the project id
    var clickedProjectID = $(button).parents(".project").attr("id");
    //Find the corresponding project object
    var projectIndex = _.findIndex(projects, function(n) {
        return n.id == clickedProjectID;
    });
    //Insert the project Title
    $(".modal-title.projectTitle").text(projects[projectIndex].name);

    //Insert the project Description
    var descriptionParagraphs = projects[projectIndex].description;
    var breakStartIndex = descriptionParagraphs.search("(BREAK)");
    var breakEndIndex = breakStartIndex + 6;
    //Edit the description to be inserted as html
    if( breakStartIndex == -1){
        descriptionParagraphs = "<p>" + descriptionParagraphs + "</p>";
    }else{
        //if the keyword (BREAK) was in the description a new paragraph needs to be started in its place
        descriptionParagraphs = "<p>" + descriptionParagraphs.slice(0, breakStartIndex - 1) + "</p><p>" +
            descriptionParagraphs.slice(breakEndIndex + 1, descriptionParagraphs.length) + "</p>";
    }
    //Insert the newly created html description
    $(".modal-body>.projectDescription").html(descriptionParagraphs);

    //Insert the Languages Used
    $(".modal-body>.languagesUsed").text(projects[projectIndex].developmentLanguages);

    //Insert the project on device screen shots
    $(".projectImages>.devices").attr("src", projects[projectIndex].screenImagesSrc);

    //Insert the project link
    $("#projectLink").attr("href", projects[projectIndex].projectLink);

    //Insert the project github link
    $("#projectGithubLink").attr("href", projects[projectIndex].githubLink);

}

//database to collect user submited contact forms
var firebaseDataRef = new Firebase("https://portfoliomessages.firebaseio.com/");

/**
 * Submit the user entered information from the contact form to the firebase database.
 */
function submitMessage(){
    //TODO: verify the user entered information in all sections.

    var msgName = $("#nameId").val();
    var msgEmail = $("#emailAddress").val();
    var message = $("#message").val();
    var data = {
        "name": msgName,
        "email": msgEmail,
        "message": message
    };
    //Push to the firebase array
    firebaseDataRef.push(data);
}


// Project information objects
var projects = [
    {
        id: "studentGradeTable",
        name: "Student Grade Table",
        description: "The web application is designed as a way for schools to add, review, and delete student courses " +
        "and grades. On initialization the website collects the student data from the database and displays it in the " +
        "table for the user to review. The user can then add students' courses and grades to the table or delete " +
        "previously entered data. The user can also filter the table to show only the desired student, course, or " +
        "grade. Or sort the table in ascending and descending order.",
        developmentLanguages: "HTML, CSS, Bootstrap, Javascript, and AngularJS",
        screenImagesSrc: "images/ProjectScreens/sgtScreens.jpg",
        projectLink: "http://www.heatherscodes.com/studentGradeTable",
        githubLink: "https://github.com/hhernandez008/studentGradeTable"
    },
    {
        id: "memoryMatch",
        name: "Memory Match",
        description: "The web application is a classic card matching game. It is based on the BBC series Sherlock and " +
        "follows the theme of solving cases. To start the game the user selects which case they would like to solve. " +
        "As the user makes matches the number of clues found increase until the case is solved (the game is won). The " +
        "user is then given the option to solve a new case or resolve the current case.",
        developmentLanguages: "HTML, CSS, Bootstrap, Javascript, and jQuery",
        screenImagesSrc: "images/ProjectScreens/memoryMatchScreens.jpg",
        projectLink: "http://www.heatherscodes.com/memoryMatch",
        githubLink: "https://github.com/hhernandez008/memoryMatch"
    },
    {
        id: "ticTacToe",
        name: "Tic-Tac-Toe",
        description: "The web application was built as a one day hackathon project at LearningFuze. The goal was to " +
        "create a tic-tac-toe game with multiple game sizes and that could check dynamically check if a player has won. " +
        "As the team lead I helped to organize and break down tasks, review submitted work, and assists team members " +
        "troubleshoot and complete tasks. My group bested four other teams to win first place. (BREAK) The game is simply " +
        "to be the first player to get three in a row. Each player's turn is indicated by the highlighted barrel in the " +
        "top corners. Players can choose between a three in a row game or a five in a row game.",
        developmentLanguages: "HTML, CSS, Bootstrap, Javascript, and jQuery",
        screenImagesSrc: "images/ProjectScreens/tictactoeScreens.jpg",
        projectLink: "http://www.heatherscodes.com/tic-tac-toe",
        githubLink: "https://github.com/hhernandez008/tic-tac-toe"
    },
    {
        id: "calculator",
        name: "Calculator",
        description: "The calculator web application provides the user with the ability to complete simple mathematical " +
        "operations. The application was built as a way to develop my Javascript logic. ",
        developmentLanguages: "HTML, CSS, Bootstrap, Javascript, and jQuery",
        screenImagesSrc: "images/ProjectScreens/calcScreens.jpg",
        projectLink: "http://www.heatherscodes.com/calculator",
        githubLink: "https://github.com/hhernandez008/calculator"
    }
];