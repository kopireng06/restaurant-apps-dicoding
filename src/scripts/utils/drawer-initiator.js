const DrawerInitiator = {
  clicked: false,
  init({ button, drawer, bgContent }) {
    button.addEventListener('click', () => {
      if (this.clicked) {
        this._closeDrawer(drawer, bgContent);
        this.clicked = !this.clicked;
      } else {
        this._openDrawer(drawer, bgContent);
        this.clicked = !this.clicked;
      }
    });
  },

  _openDrawer(drawer, bgContent) {
    drawer.style.left = '0px';
    bgContent.style.display = 'block';
  },

  _closeDrawer(drawer, bgContent) {
    drawer.style.left = '-250px';
    bgContent.style.display = 'none';
  },
};

export default DrawerInitiator;
