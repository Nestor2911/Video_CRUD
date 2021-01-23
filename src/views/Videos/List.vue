<template>
  <div class="view-list">
    <div v-if="!this.$store.state.videos.length" class="text-center">
      <Button event="click" :callback="redirectAdd" type="primary"
        >AGREGAR VIDEO</Button>
    </div>
    <div v-else>
      <h2>VIDEOS</h2>
      <div class="wrapp">
      <div v-for="video in videos" :key="video.id">       
          <Card
            :data="video"
            v-on:godelete="deleteItem"
            v-on:goedit="editItem"
            v-on:godetail="detailItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/ui/Button";
import Card from "@/components/Card";
import { mixin } from "@/mixin/mixin";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "VideoList",
  mixins: [mixin],
  components: {
    Button,
    Card,
  },
  data() {
    return {};
  },
  watch: {
    videos() {},
  },
  computed: {
    ...mapState({
      videos: (state) => {
        return state.videos;
      },
      count: (state) => state.count,
    }),
    ...mapGetters({
      getVideoId: "getVideoId",
    }),
  },
  methods: {
    ...mapActions({
      getVideos: "getVideos",
      deleteVideo: "deleteVideo",
    }),
    redirectAdd() {
      this.$router.push("add");
    },
    async deleteItem(id) {
      await this.deleteVideo(id);
      await this.getVideos();
    },
    editItem(id) {
      this.$router.push({ name: "VideoEdit", params: { id } });
    },
    detailItem(id) {
      this.$router.push({ name: "VideoDetail", params: { id } });
      // console.log('detalle',id);
    },
  },
  mounted() {
    this.getVideos();
  },
};
</script>
<style lang="scss">
.wrapp {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>