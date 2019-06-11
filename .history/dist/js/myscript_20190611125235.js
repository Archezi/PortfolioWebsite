// import { listeners } from "cluster";


var UIController = (function(){
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
        showLogo: function() {
            var b = document.querySelector(DOMstrings.navBtn);
            b.addEventListener('click', UIController.showOpenLogo ) ;
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
        windowResize: function() {
            UIController.layoutSetup();
            UIController.hidingScroll();
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
    // On click
    // 1. navigation 
    // document.querySelector(DOM.navigationBtn).addEventListener('click', UICtrl.toggleCheckbox);
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



