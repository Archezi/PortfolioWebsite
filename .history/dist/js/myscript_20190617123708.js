// import { listeners } from "cluster";
var windowWidth = document.documentElement.clientWidth;
var windowHeight = document.documentElement.clientHeight;

var UIController = (function(){

    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;

    var DOMstrings = {
        container: '.container',
        wrapper: '.wrapper',
        header: '.header',
        footer: '.footer',
        navigationBtn: '#navigationBtn',
        navBtn: '.navigation__button',
        navLink: '.navigation__item',
        checkBtn: '.navigation__checkbox',
        logoLN: '.logo__link-s',
        logoFN: '.logo__link-n',
        logoLSVisible: 'logo__link-s-visible',
        logoFNMargin: 'logo__link-n-open',
        section: '.section',
        subPage: '.sub-page',
        expIntroduction: '.exploreapp__introduction',
        expWireFrame: '.exploreapp__wireframes',
        expTypographySection: '.exploreapp__typography',
        expStyleGuide: '.exploreapp__colorPalette',
        expProjectInfo: '.exploreapp__projectInfo',
        expProjectDescription: '.exploreapp__projectInfo-description',
        boxSize: '.boxSample',
       
    };

    function squareBox(boxSize) {
        // var box = document.querySelector(DOMstrings.+`${boxSize} `);
    }

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

            UIController.sectionLayout(wrapperWidth,100);
        },
        sectionLayout: function(parentW, parentH) {
            
            var container = document.querySelector(DOMstrings.container);
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
        // showLogo: function() {
        //     var b = document.querySelector(DOMstrings.navBtn);
        //     b.addEventListener('click', UIController.showOpenLogo() ) ;
        // },
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
            element.style.transition = 'opacity 0.2s linear 0s';
            element.style.opacity = 0;
        },
        fadeIn: function(el) {
            var element = document.querySelector(el);
            element.style.transition = 'opacity 0.2s linear 0s';
            element.style.opacity = 1;
        },
        toggleCheckbox: function() {
            var elm = document.getElementById('navi-toggle');
            // console.log('CHECKED');
            if(elm.checked) {
                UIController.fadeOut('#container');
            } else  {
                UIController.fadeIn('#container');
            }
        },
        exploreAppRowHeight: function(sample, parent, repeat, auto) {
            var elm = document.querySelector(sample);
            var elementHeight = elm.offsetWidth / 10 + "rem";
            var parentElement = document.querySelector(parent);
            console.log(parentElement);
            if(auto && repeat) {
                parentElement.style.gridTemplateRows = `${auto} repeat(${repeat}, ${elementHeight})` ;
            } else if (repeat && !auto) {
                parentElement.style.gridTemplateRows = `repeat(${repeat}, ${elementHeight})` ;
            } else {
                parentElement.style.gridTemplateRows = `auto` ;
            }
            
            
        },
        
        windowResize: function() {
            UIController.layoutSetup();
            UIController.hidingScroll();
            UIController.exploreAppRowHeight(DOMstrings.boxSize, DOMstrings.expIntroduction, 2);
            UIController.exploreAppRowHeight(DOMstrings.boxSize, DOMstrings.expWireFrame, 2, "auto");
            UIController.exploreAppRowHeight(DOMstrings.boxSize, DOMstrings.expTypographySection, 2, "auto");
            UIController.exploreAppRowHeight(DOMstrings.boxSize, DOMstrings.expStyleGuide, 1 );
            UIController.exploreAppRowHeight(DOMstrings.expProjectDescription, DOMstrings.expProjectInfo, 1, 'auto');
            if(windowWidth > 1200) {
                UIController.exploreAppRowHeight(DOMstrings.expProjectDescription, DOMstrings.expProjectInfo);
            }

        },
        getDOMstrings: function() {
            return DOMstrings;
        }

    }

})();

var controller = (function(UICtrl){
    var DOM;
    DOM = UICtrl.getDOMstrings();

    // Set up event listeners
    var setupEventListeners = function() {
        document.querySelector(DOM.navBtn).addEventListener('click', UICtrl.showOpenLogo);
        // nav links

        window.onload = function() {
            UICtrl.windowResize();
            
            // UICtrl.exploreAppRowHeight(DOM.boxSize, DOM.expStyleGuide, 1);
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



