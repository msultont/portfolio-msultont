/* eslint-disable class-methods-use-this */
class ScrollToTopBtn {
  /** Used to register the scroll event handler */
  Initialize() {
    /** When the user scrolls down 300px from the top of the document, show the buttons */
    window.addEventListener('scroll', this.ToggleButtons);
    document.getElementById('scroll-btn').addEventListener('click', this.ScrollToTop);
  }

  /** Displays/Hides the buttons */
  ToggleButtons() {
    /** If the current current scroll is 300px or more */
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      /** The scroll to top button is displayed */
      document.getElementById('scroll-btn').style.display = 'block';
    } else {
      /** The scroll to top button is hidden */
      document.getElementById('scroll-btn').style.display = 'none';
    }
  }

  ScrollToTop() {
    document.getElementById('projects').scrollTo(0, 0);
    document.getElementById('about').scrollTo(0, 0);
  }
}

exports.onRouteUpdate = () => {
  /** The SideBarBtns object is created */
  const scrollToTopBtn = new ScrollToTopBtn();
  /** If the current page is an article page */
  if (document.getElementById('scroll-btn')) {
    /** The SideBarBtns object is initialized */
    scrollToTopBtn.Initialize();
  }
};
