DOMLinks = {
    landingPageSection: "#landingPage",
    portfolioSection: "#portfolio",
    skillsSection: "#skills",
    aboutMeSection:  "#aboutMe",
    contactSection: "#contact"
}

function moveTo(id) {
    var selectedDiv = document.querySelector(id);
    var selectedDivOffset = selectedDiv.offsetTop;
    var selectedDivPosition = selectedDivOffset - 220;
    window.scrollTo(0, selectedDivPosition);
    setTimeout( function() {
        document.getElementById("navi-toggle").checked = false;
        console.log('link clicked');
        UIController.fadeIn('#container');
    }, 200 );
}



