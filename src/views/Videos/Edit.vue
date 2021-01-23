<template>
  <div class="view-edit">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label">Título</label>
        <input v-model="form.title" class="form-control" type="text" />
      </div>
      <div class="mb-3">
        <label class="form-label">URL Video</label>
        <input v-model="form.url" class="form-control" type="text" />
      </div>
      <div class="mb-3">
        <label class="form-label">Descripción</label>
        <textarea
          v-model="form.description"
          rows="6"
          class="form-control"
        ></textarea>
      </div>
      <div class="d-flex justify-content-center">
        <Button class="me-4" type="primary" type-button="submit"
          >ACTUALIZAR</Button
        >
        <Button>CANCELAR</Button>
      </div>
    </form>
  </div>
</template>
<script>
import Button from "@/ui/Button";
import { mixin } from "@/mixin/mixin";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "VideoEdit",
  mixins: [mixin],
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
    ...mapGetters({
      getVideoId: "getVideoId",
    }),
  },
  methods: {
    ...mapActions({
      getVideo: "getVideo",
      updateVideo: "updateVideo",

    }),
    async handleSubmit() {
      console.log('submit!!!')
        await this.updateVideo({
        id: this.$route.params.id,
        body: this.form,
      });
      //alert("Se actualizó correctamente el video");
      //this.$router.push("/");
    },
  },
  async mounted() {
    await this.getVideo(this.$route.params.id);
    this.form = this.video;
  },
};
</script>
<style lang="scss">
</style>