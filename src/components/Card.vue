<template>
  <article class="card">
    <h2>{{ data.title }}</h2>
    <hr>
    <br>
    <br> 
    <iframe
      width="280"
      height="157"
      :src="data.url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br>
    <p>{{ data.description }}</p>
    <ul class="d-flex list">
      <li class="me-4">
        <Button
          event="click"
          :callback="
            () => {
              goEdit(data.id);
            }
          "
          type="primary"
          >Editar</Button
        >
      </li>
      <li class="me-4">
        <Button
          event="click"
          :callback="
            () => {
              goDelete(data.id);
            }
          "
          type="primary"
          >Eliminar</Button
        >
      </li>
      <li class="me-4">
        <Button
          event="click"
          :callback="
            () => {
              goDetail(data.id);
            }
          "
          type="primary"
          >IR A DETALLE</Button
        >
      </li>
    </ul>
  </article>
</template>
<script>
import Button from "@/ui/Button";
export default {
  name: "card",
  props: {
    data: {
      type: Object,
    },
  },
  components: {
    Button,
  },
  methods: {
    goDetail(id) {
      this.$emit("godetail", id);
    },
    goDelete(id) {
      console.log("edit!!");
      this.$emit("godelete", id);
    },
    goEdit(id) {
      this.$emit("goedit", id);
    },
  },
};
</script>
<style lang="scss">
.card {
  border: 1px solid #cdcdcd;
  padding: 20px;
  margin-bottom: 40px;
}
.list {
  list-style: none;
  padding: 0;
}
</style>