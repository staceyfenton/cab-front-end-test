window.app = {
  vars: {
    resizeTimer: null,
    header: null,
    menuBtn: null
  },

  init: function () {
    // cache selectors
    this.vars.header = document.querySelector('.site-header');
    this.vars.menuBtn = this.vars.header.querySelector('.site-header__menu-btn');

    // assign menu button click event
    this.vars.menuBtn.addEventListener('click', window.app.Events.toggleNav);

    // prevent navigation flashing open on screen resize
    window.addEventListener('resize', window.app.Events.hideNav);
  },

  Events: {
    toggleNav: function(e) {
      e.preventDefault();
      // Sadly, classList is not supported in IE9 so we need to do some checks
      window.app.Helpers.toggleClass(window.app.vars.header, 'site-header--nav-open');
    },

    hideNav: function() {
      clearTimeout(window.app.vars.resizeTimer);
      window.app.Helpers.addClass(window.app.vars.header, 'site-header--nav-hidden');

      window.app.vars.resizeTimer = setTimeout(function() {
        // Resizing has stopped
        window.app.Helpers.removeClass(window.app.vars.header, 'site-header--nav-hidden');
      }, 500);
    }
  },

  Helpers: {
    toggleClass: function(el, nameOfClass) {
      if (el.classList) {
        // toggle class 
        el.classList.toggle(nameOfClass);
      } else {
        // check if class already exists
        var classes = el.className.split(' ');
        if(classes.indexOf(nameOfClass) === -1) {
          classes.push(nameOfClass); // add it to the list
        } else {
          classes.splice(classes.indexOf(nameOfClass), 1); // remove the class       
        }
        el.className = classes.join(' ');
      }
    },

    addClass: function(el, nameOfClass) {
      if (el.classList) {
        el.classList.add(nameOfClass);
      } else {
        el.className += ' ' + nameOfClass;
      }      
    },

    removeClass: function(el, nameOfClass) {
      if (el.classList) {
        el.classList.remove(nameOfClass);
      } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + nameOfClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  }
}

window.app.init();