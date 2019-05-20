
window.addEventListener("resize", windowResize);

const DOMstrings = {
    wrapper: '.wrapper',
    header: '.header',
    footer: '.footer',
    navBtn: '.navigation__button',
    navLink: '.navigation__item',
    checkBtn: '.navigation__checkbox',
    logoLN: '.logo__link-s',
    logoFN: '.logo__link-n',
    logoLSVisible: 'logo__link-s-visible',
    logoFNMargin: 'logo__link-n-open',
    section: '.section',
    subPage: '.sub-page'
}
const skillsList = {
    mainContent: {
        heading: 'I have learned that I still have a lot to learn',
        paragraph: `ui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et`
    },
    javascript: {
        heading: 'New Javascript heading',
        paragraph: 'New Javascript paragraph'
    }
}



const keys = Object.entries(skillsList);
console.log(keys);




// Adding margin around container and update it on the 
function windowResize() {
    let  w, x, y, wrapperMargin, wrapperHeight, wrapperWidth, wrapper, footer ,section ;
     w = window;
     d = document;
     x = w.innerWidth;
     y = w.innerHeight;

     

    wrapperMargin = 40 ;
    if (x >= 1281) {
        wrapperMargin = 40;
    } else if (x >= 1200 ) {
        wrapperMargin = 20;
    } else if (x < 768) {
        wrapperMargin = 0;
    }

    wrapperHeight = y - (2* wrapperMargin);
    wrapperWidth = x - (2 * wrapperMargin) ;
    wrapper = document.querySelector(DOMstrings.wrapper);
    footer = document.querySelector(DOMstrings.footer);
    section = document.querySelector(DOMstrings.section);

    
    wrapper.style.height = wrapperHeight + "px";
    wrapper.style.width = wrapperWidth + "px";
    wrapper.style.margin = wrapperMargin + "px";
    
    section.style.width = wrapperWidth + 'px';
    // subPage.style.width = wrapperWidth + 'px';
    

    footer.style.height = wrapperMargin + 'px';
    footer.style.width = x + 'px';

    sectionLayout(wrapperWidth, 100);
    
}
windowResize();


// HIDING SCROLL BAR 
var container = document.querySelector('.container');
container.style.paddingRight = container.offsetWidth - container.clientWidth + 'px';


function sectionLayout(parentW, parentH ) {
    var container = document.querySelector('.container');
    var containerSections = container.querySelectorAll('.section');

    for(var i =0; i < containerSections.length; i++) {
        var currentSection = containerSections[i];
        currentSection.style.width = parentW  + 'px';
        currentSection.style.minHeight = parentH + 'px';
    }
}
// EVENTS

function showLogo() {
    var b = document.querySelector(DOMstrings.navBtn);
    b.addEventListener('click', showOpenLogo ) ;
}
function showOpenLogo() {
    setTimeout(() => {
        var logoLN = document.querySelector(DOMstrings.logoLN);
        logoLN.classList.toggle(DOMstrings.logoLSVisible);
        var logoFN = document.querySelector(DOMstrings.logoFN);
        logoFN.classList.toggle(DOMstrings.logoFNMargin);
        // logo
    }, 200)
}
showLogo();


function check() {
    document.querySelector(DOMstrings.checkBtn).checked = true;
    console.log('checkbock checked');
}
function unchecked() {
    document.querySelector(DOMstrings.checkBtn).checked = false;

}




function isotopeInit() {
    var elem = document.querySelector('.grid');
    var iso = new Isotope( elem, {
      // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });
    
    // element argument can be a selector string
    //   for an individual element
    var iso = new Isotope( '.grid', {
      // options
    });
}

// isotopeInit();




function fadeOut(el) {
    var element = document.querySelector(el);
    element.style.transition = 'opacity 0.5s linear 0s';
    element.style.opacity = 0;
}
function fadeIn(el) {
    var element = document.querySelector(el);
    element.style.transition = 'opacity 0.5s linear 0s';
    element.style.opacity = 1;
}

function toggleCheckbox() {
    var elm = document.getElementById('navi-toggle');
    // elm.checked = !elm.checked;
    console.log('CHECKED');
    
    if(elm.checked) {
        fadeOut('#container');
    } else  {
        fadeIn('#container');

    }
}


function replaceMain(obj) {

    fadeOut('#description__heading');
    fadeOut('#description__text');

    setTimeout(function(){
        var hText = document.querySelector('#description__heading').innerHTML;
        var pText = document.querySelector('#description__text').innerHTML;

        var hTextReplace = hText.replace(hText, skillsList[obj].heading);
        var pTextReplace = pText.replace(pText, skillsList[obj].paragraph);

        document.querySelector('#description__heading').innerHTML = hTextReplace;
        document.querySelector('#description__text').innerHTML = pTextReplace;

        fadeIn('#description__heading');
        fadeIn('#description__text');
    },1000) 
    
    

}

function modalContent(obj) {
    document.querySelector('.swiper-slide-heading').innerHTML = skillsList[obj].heading;
    document.querySelector('.swiper-slide-content').innerHTML = skillsList[obj].paragraph;
    document.querySelector('.swiper-slide-footer').innerHTML = skillsList[obj].footer;
}

function swiperContent() {

}


function originalText() {
    var hText = document.querySelector('#description__heading').innerHTML;
    var pText = document.querySelector('#description__text').innerHTML;
    
    var hTextReplace = hText.replace(hText, skillsList.mainContent.heading);
    var pTextReplace = pText.replace(pText, skillsList.mainContent.paragraph);

    document.querySelector('#description__heading').innerHTML = hTextReplace;
    document.querySelector('#description__text').innerHTML = pTextReplace;
}

var javascriptHover = document.querySelector('#skill-javascript');
// javascriptHover.addEventListener('mouseover', replaceText);
javascriptHover.addEventListener('mouseout', function (){
    
    setTimeout(originalText, 15000) ;
    
});




function sliderAttr() {
    var x = document.getElementsByClassName('swiper-slide');
    console.log(x);
    var attr = x.getAttribute('data-swiper-slide-index');
    console.log(attr);


}
sliderAttr();

































// function replaceText(e) {

//     var hText = document.querySelector('#description__heading').innerHTML;
//     var pText = document.querySelector('#description__text').innerHTML;
    
//     var hTextReplace = hText.replace(hText, skillsList.javascript.heading);
//     var pTextReplace = pText.replace(pText, skillsList.javascript.paragraph);

//     document.querySelector('#description__heading').innerHTML = hTextReplace;
//     document.querySelector('#description__text').innerHTML = pTextReplace;
    
    
// }


















// (function () {
//     'use strict';
//         window.addEventListener("DOMContentLoaded", function() {
//             const bodyNode = document.body || document.getElementsByTagName('body')[0];
//             const pages = document.querySelectorAll(".page");
//             const navPoint = document.querySelectorAll(".nav_point");
//             let lastScrolled = 0;
//             let pageIndex = 0;
//             bodyNode.style.right = bodyNode.clientWidth - bodyNode.offsetWidth + "px";
//             bodyNode.addEventListener("scroll", eventScroll);
            
//             function showPage() {
//                 [].forEach.call(pages, function(el, i, p) {
            
//                     if (i == pageIndex){
//                         el.classList.add("active"); 
//                         bodyNode.removeEventListener("scroll", eventScroll);
//                         bodyNode.classList.add("hidden");
//                         setTimeout(function(){
//                               bodyNode.addEventListener("scroll", eventScroll);
//                         }, 200);
//                         setTimeout(function(){
//                                 bodyNode.classList.remove("hidden");
//                         }, 150);
//                     } else {
//                         el.classList.remove("active");
//                     }
//                 });
//                 const active = document.querySelector('.active'); 
//                 active && active.scrollIntoView(true);
//                 window.addEventListener("resize", myFunction);
//                 function myFunction() {active && active.scrollIntoView(true);}
                
//                 [].forEach.call(navPoint, function(el, i, p) {
//                     el.onclick = function (e) {
//                         if(p[0].contains(e.target) && pageIndex != 0){
//                             pageIndex = 0;
//                             showPage();
//                         }
//                         if(p[1].contains(e.target) && pageIndex != 1){
//                             pageIndex = 1;
//                             showPage();
//                         }
//                         if(p[2].contains(e.target) && pageIndex != 2){
//                             pageIndex = 2;
//                             showPage();
//                         }
//                         if(p[3].contains(e.target) && pageIndex != 3){
//                             pageIndex = 3;
//                             showPage();
//                         }
//                         let scrolled = bodyNode.pageYOffset || bodyNode.scrollTop;
//                         lastScrolled = scrolled;
//                         colorNav();
//                     };
                    
//                     colorNav();	
//                     function colorNav() {
//                         p[i].classList.remove("active_point");
//                         if (pageIndex == 0) {
//                             p[0].classList.add("active_point");
//                         }
//                         if (pageIndex == 1) {
//                             p[1].classList.add("active_point");
//                         } 
//                         if (pageIndex == 2) {
//                             p[2].classList.add("active_point");
//                         } 
//                         if (pageIndex == 3) {
//                             p[3].classList.add("active_point");
//                         }
//                     }
//                 });
//             }
            
//             showPage();
//             function eventScroll() {
//                 let scrolled = bodyNode.pageYOffset || bodyNode.scrollTop;
//                 if (scrolled < lastScrolled) {
//                     --pageIndex;
//                 } else {
//                     ++pageIndex;
//                 };
//                 pageIndex < 0 && (pageIndex = 0);
//                 pageIndex > pages.length - 1 && (pageIndex = pages.length - 1);
//                 showPage();
//                 setTimeout(function(){
//                         let scrolled = bodyNode.pageYOffset || bodyNode.scrollTop;
//                         lastScrolled = scrolled;
//                 }, 250);	
//             }
//         });
//     })();



// document.querySelector(".logo").addEventListener('mouseover', logoOver);
// document.querySelector(".logo").addEventListener('mouseout', logoOut);

// function logoOver() {

// }

// function logoOut() {

// }