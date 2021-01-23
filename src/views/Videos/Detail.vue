<template>
  <div class="view-datail">
    <article>
      <h2>Detalle del Video</h2>
      <div class="card" style="width: 100%">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <iframe
              width="100%"
              height="600"
              :src="form.url"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
          <h3>Título</h3>
          <li class="list-group-item">
            <h4>{{ form.title }}</h4>
          </li>
          <h3>Descripción del Video</h3>
          <li class="list-group-item">{{ form.description }}</li>
        </ul>
      </div>
    </article>
    <div class="d-flex justify-content-center">
      <Button event="click" type="primary" :callback="redirectRoot">OK</Button>
    </div>
  </div>
</template>
<script>
import Button from "@/ui/Button";
import { mapState, mapActions } from "vuex";
export default {
  name: "VideoDetail",
  components: {
    Button,
  },
  data() {
    return {
      form: {},
    };
  },
  computed: {
    ...mapState({
      video: (state) => {
        return state.video;
      },
    }),
  },
  methods: {
    redirectRoot() {
      this.$router.push("/");
    },
    ...mapActions({
      getVideo: "getVideo",
    }),
  },
  async mounted() {
    await this.getVideo(this.$route.params.id);
    this.form = this.video;
  },
};
</script>
<style lang="scss">
h3 {
  font-style: italic;
  margin-bottom: 25px;
  color: rgb(8, 44, 44);
  margin: auto;
}

li {
  font-style: oblique;
}
</style>