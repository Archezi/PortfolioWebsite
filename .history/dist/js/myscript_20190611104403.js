// import { listeners } from "cluster";


var UIController = (function(){
    var DOMstrings = {
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
    };

    return {
        layoutSetup: function() {
            let  w, x, y, wrapperMargin, wrapperHeight, wrapperWidth, wrapper, footer ,section ;
            w = window;
            d = document;
            x = w.innerWidth;
            y = w.innerHeight;
            wrapper = document.querySelector(DOMstrings.wrapper);
            footer = document.querySelector(DOMstrings.footer);
            section = document.querySelector(DOMstrings.section);

            // wrapperMargin = 40 ;
            if (x >= 1281) {
                wrapperMargin = 40;
            } else if (x >= 1200 ) {
                wrapperMargin = 20;
            } else if (x < 1200 && x > 769 ) {
                wrapperMargin = 20;
            } else if (x < 768) {
                wrapperMargin = 0;
            }
            wrapperHeight = y - (2* wrapperMargin);
            wrapperWidth = x - (2 * wrapperMargin) ;
            wrapper.style.height = wrapperHeight + "px";
            wrapper.style.width = wrapperWidth + "px";
            wrapper.style.margin = wrapperMargin + "px";
            section.style.width = wrapperWidth + 'px';
            footer.style.height = wrapperMargin + 'px';
            footer.style.width = x + 'px';
        },
        sectionLayout: function(parentW, parentH) {
            var container = document.querySelector('.container');
            var containerSections = container.querySelectorAll('.section');

            for(var i =0; i < containerSections.length; i++) {
                var currentSection = containerSections[i];
                currentSection.style.width = parentW  + 'px';
                currentSection.style.minHeight = parentH + 'px';
            }
        },
        hidingScroll: function() {
            var container = document.querySelector('.container');
            container.style.paddingRight = container.offsetWidth - container.clientWidth + 'px';
        },
        showLogo: function() {
            var b = document.querySelector(DOMstrings.navBtn);
            b.addEventListener('click', showOpenLogo ) ;
        },
        showOpenLogo: function() {
            setTimeout(() => {
                var logoLN = document.querySelector(DOMstrings.logoLN);
                logoLN.classList.toggle(DOMstrings.logoLSVisible);
                var logoFN = document.querySelector(DOMstrings.logoFN);
                logoFN.classList.toggle(DOMstrings.logoFNMargin);
                // logo
            }, 200)
        },
        fadeOut: function(el) {
            var element = document.querySelector(el);
            element.style.transition = 'opacity 0.5s linear 0s';
            element.style.opacity = 0;
        },
        fadeIn: function(el) {
            var element = document.querySelector(el);
            element.style.transition = 'opacity 0.5s linear 0s';
            element.style.opacity = 1;
        },
        toggleCheckbox: function() {
            var elm = document.getElementById('navi-toggle');
            // console.log('CHECKED');
            if(elm.checked) {
                fadeOut('#container');
            } else  {
                fadeIn('#container');
            }
        },
        windowResize: function() {
            layoutSetup();
            hidingScroll();
            sectionLayout(wrapperWidth, 100);
        }

    }

})();

var controller = (function(UICtrl){

    // Set up event listeners
    var setupEventListeners = function() {
        window.onload = function() {
            UICtrl.windowResize();
        }
        window.addEventListener('resize', UICtrl.windowResize);
    }
    return {
        init: function() {
            console.log('Portfolio Website: started');
            setupEventListeners();
        }
    }

})(UIController);
controller.init();
// window.addEventListener("resize", windowResize);


// const skillsList = {
//     mainContent: {
//         heading: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
//         p1: `I aim for performance, simplicity, and integrity in my work. I'm a stickler for a slick build process, whether that's planning application structure, linting integrations,  unit testing and so on. I write CSS modules predominately in SASS and when not working vanilla HTML, solutions such as AngularJs are my choice for DOM manipulation.`,
//         p2: `I am currently able to create small scale applications both in vanilla JavaScript and popular framework such as AngularJs.  I hope I can progress to more challenging projects in the near future.`,
//         p3: `Combined my skills of design tools such as PS, AI, and others with an understanding of UX and design means I can take web applications from start to finish.`
//     },
//     javascript: {
//         heading: 'New Javascript heading',
//         p1: `I aim for performance, simplicity, and integrity in my work. I'm a stickler for a slick build process, whether that's planning application structure, linting integrations,  unit testing and so on. I write CSS modules predominately in SASS and when not working vanilla HTML, solutions such as AngularJs are my choice for DOM manipulation.`,
//         p2: `I am currently able to create small scale applications both in vanilla JavaScript and popular framework such as AngularJs.  I hope I can progress to more challenging projects in the near future.`,
//         p3: `Combined my skills of design tools such as PS, AI, and others with an understanding of UX and design means I can take web applications from start to finish.`
//     }
// }



// const keys = Object.entries(skillsList);
// console.log(keys);




// // Adding margin around container and update it on the 
// function windowResize() {
    

//     sectionLayout(wrapperWidth, 100);
    
// }
// windowResize();

// HIDING SCROLL BAR 



// function sectionLayout(parentW, parentH ) {
    
// }
// // EVENTS

// function showLogo() {
    
// }
// function showOpenLogo() {
    
// }
// showLogo();

// function check() {
//     document.querySelector(DOMstrings.checkBtn).checked = true;
// }
// function unchecked() {
//     document.querySelector(DOMstrings.checkBtn).checked = false;

// }

// function isotopeInit() {
//     var elem = document.querySelector('.grid');
//     var iso = new Isotope( elem, {
//       // options
//       itemSelector: '.grid-item',
//       layoutMode: 'fitRows'
//     });
//     // element argument can be a selector string
//     //   for an individual element
//     var iso = new Isotope( '.grid', {
//       // options
//     });
// }
// isotopeInit();

// function fadeOut(el) {
    
// }
// function fadeIn(el) {
    
// }

// function toggleCheckbox() {
//     var elm = document.getElementById('navi-toggle');
//     // elm.checked = !elm.checked;
//     console.log('CHECKED');
    
//     if(elm.checked) {
//         fadeOut('#container');
//     } else  {
//         fadeIn('#container');
//     }
// }
// function replaceMain(obj) {
//     fadeOut('#description__heading');
//     fadeOut('#description__text');
//     setTimeout(function(){
//         var hText = document.querySelector('#description__heading').innerHTML;
//         var pText1 = document.querySelector('#paragraph-1').innerHTML;
//         var pText2 = document.querySelector('#paragraph-2').innerHTML;
//         var pText3 = document.querySelector('#paragraph-3').innerHTML;
//         var hTextReplace = hText.replace(hText, skillsList[obj].heading);
//         var pTextReplace = pText.replace(pText, skillsList[obj].paragraph);

//         document.querySelector('#description__heading').innerHTML = hTextReplace;
//         document.querySelector('#description__text').innerHTML = pTextReplace;
//         fadeIn('#description__heading');
//         fadeIn('#description__text');
        
//     },1000) 
// }

// function modalContent(obj) {
//     document.querySelector('.swiper-slide-heading').innerHTML = skillsList[obj].heading;
//     document.querySelector('.swiper-slide-content').innerHTML = skillsList[obj].paragraph;
//     document.querySelector('.swiper-slide-footer').innerHTML = skillsList[obj].footer;
// }
// function swiperContent() {

// }

// function sliderAttr() {
//     let x = document.getElementsByClassName('swiper-slide');
//     let attr = x.getAttribute("data-swiper-slide-index");
//     console.log(x.data-swiper-slide-index);

// }
// sliderAttr();


