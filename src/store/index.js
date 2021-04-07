import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    articles: []
  },
  mutations: {
    articlesMutation(state, data) {
      state.articles = data
    }
  },
  actions: {
    async getArticles({ commit }) {
      await axios
        .get("https://hramovportfolio-default-rtdb.firebaseio.com/articles.json")
        .then((data) => {
          commit('articlesMutation', data.data)
          console.log(data.data)
        });
    }
  },
  getters: {
    articlesGetter: state => state.articles
  },
  modules: {
  }
})
