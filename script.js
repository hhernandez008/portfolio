

$("document").ready(function () {
    $("body").scrollspy({
        target: ".navbar",
        offset: 250
    });
    $("li.active > a").addClass("currentSection");
    $(".navbar").on("activate.bs.scrollspy", function () {
        var $activeSection = $("li.active > a");
        $(".active").parent(".links")
            .find(".currentSection")
            .removeClass("currentSection");
        $($activeSection).addClass("currentSection");
    });


    //Display the project buttons on hover
    $(".project").mouseenter(function(){
       $(this).find(".projectButtons").attr("style", "opacity: 1");
    });

    //Remove the mouse buttons when not hovered
    $(".project").mouseleave(function(){
        $(this).find(".projectButtons").attr("style", "opacity: 0");
    });

    $(".infoBtn").click(function(){
        displayProjectInfo(this);
    });

});

function displayProjectInfo(button){
    var clickedProjectID = $(button).parents(".project").attr("id");
    var projectIndex = _.findIndex(projects, function(n) {
        return n.id == clickedProjectID;
    });
    //Insert the project Title
    $(".modal-title.projectTitle").text(projects[projectIndex].name);

    //Insert the project Description
    var descriptionParagraphs = projects[projectIndex].description;
    var breakStartIndex = descriptionParagraphs.search("(BREAK)");
    var breakEndIndex = breakStartIndex + 6;
    if( breakStartIndex == -1){
        descriptionParagraphs = "<p>" + descriptionParagraphs + "</p>";
    }else{
        descriptionParagraphs = "<p>" + descriptionParagraphs.slice(0, breakStartIndex - 1) + "</p><p>" +
            descriptionParagraphs.slice(breakEndIndex + 1, descriptionParagraphs.length) + "</p>";
    }
    $(".modal-body>.projectDescription").html(descriptionParagraphs);

    //Insert the Languages Used
    $(".modal-body>.languagesUsed").text(projects[projectIndex].developmentLanguages);

    //Insert the image of the project on device screens
    $(".projectImages>.devices").attr("src", projects[projectIndex].screenImagesSrc);

}

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
        screenImagesSrc: "images/ProjectScreens/sgtScreens.jpg"
    },
    {
        id: "memoryMatch",
        name: "Memory Match",
        description: "The web application is a classic card matching game. It is based on the BBC series Sherlock and " +
        "follows the theme of solving cases. To start the game the user selects which case they would like to solve. " +
        "As the user makes matches the number of clues found increase until the case is solved (the game is won). The " +
        "user is then given the option to solve a new case or resolve the current case.",
        developmentLanguages: "HTML, CSS, Bootstrap, Javascript, and jQuery",
        screenImagesSrc: ""
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
        screenImagesSrc: "images/ProjectScreens/tictactoeScreens.jpg"
    },
    {
        id: "calculator",
        name: "Calculator",
        description: "",
        developmentLanguages: "HTML, CSS, Bootstrap, Javascript, and jQuery",
        screenImagesSrc: "images/ProjectScreens/calcScreens.jpg"
    }
];
