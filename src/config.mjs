const mode = 0;

export default {
  get backend() {
    switch (mode) {
      case 1:
        return "https://beon-api-portal-dev.mybluemix.net/";
      default:
        return "http://localhost:10000/";
    }
  },

  get catalog() {
    switch (mode) {
      case 1:
        return "https://beon-app-catalog-browser-static-dev.mybluemix.net/";
      default:
        return "http://localhost:12002/";
    }
  },

  get context() {
    switch (mode) {
      case 1:
        return "https://beon-app-context-browser-static-dev.mybluemix.net/";
      default:
        return "http://localhost:12001/";
    }
  }
};
