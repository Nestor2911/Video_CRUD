import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "@/api";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    video: {},
    videos: [],
    error: false
  },
  mutations: {
    SET_ERROR(state, flag) {
      state.error = flag;
    },
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SET_VIDEO(state, video) {
      state.video = video;
    }
  },
  actions: {
    incrementCount({ commit }) {
      commit("INCREMENT_COUNT");
    },
    decrementCount({ commit }) {
      commit("DECREMENT_COUNT");
    },
    async getVideos({ commit }) {
      try {
        const videos = await api().get("videos"); //consumo de api       
        commit('SET_VIDEOS', videos);//mutación
        commit("SET_ERROR", false);
      } catch (e) {
        commit("SET_ERROR", true);
      }
    },
    async deleteVideo({ commit }, id) {
      try {
        await api().deleteEnd({
          id,
        });
        alert("Se eliminó el Video");
      this.$router.push("/");
        commit("SET_ERROR", false);
      } catch (e) {
        commit("SET_ERROR", true);
      }
    },
    async getVideo({ commit }, id) {
      try {
        const video = await api().get(`videos/${id}`);
        console.log("video", video);
        commit("SET_VIDEO", video);//mutación
        commit("SET_ERROR", false);
      } catch (e) {
        commit("SET_ERROR", true);
      }
    },
    async updateVideo({ commit }, { body, id }){
      try{
        await api().put({
          url: "videos",
          body,
          id,
        });//consumo de api
        commit("SET_ERROR", false);
      }catch (e){
        commit("SET_ERROR", true);
      }
    },
  },
  getters: {
    getVideoId: (state) => (id) => {
      return state.videos.filter((video) => video.id == id);
    },
  },
  modules: {},
});
