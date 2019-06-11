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
    console.log(selectedDivOffset);
    var selectedDivPosition = selectedDivOffset + 120 ;
    console.log(selectedDivPosition);
    window.scrollTo({
        top:  selectedDivPosition,
        left: 0,
        behavior: "smooth"
        
    });
    setTimeout( function() {
        document.getElementById("navi-toggle").checked = false;
        console.log('link clicked');
        UIController.fadeIn('#container');
        UIController.showOpenLogo();
    }, 200 );
}



