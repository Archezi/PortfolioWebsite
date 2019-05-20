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
    var selectedDivPosition = selectedDivOffset - 40;
    window.scrollTo(0, selectedDivPosition);
    setTimeout( function() {
        document.querySelector("#navi-toggle").checked = false;
        console.log('link clicked');
        fadeIn('#container');
    }, 200 );
    
    console.log(selectedDivOffset);
    console.log(selectedDivPosition);
    console.log(selectedDiv);
}



