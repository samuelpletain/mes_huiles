<template>
  <div>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body"
        :style="{
          backgroundImage: 'url(' + oil.img + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          }">
        <div class="container">
          <h1 class="title">{{ oil.name_FR }} ({{ oil.name_EN }})</h1>
          <h2 class="subtitle">{{ oil.name_LAT }}</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <b-taglist>
          <b-tag
            v-for="tag in oil.properties"
            :key="tag"
            type="is-warning"
            size="is-medium">
            {{ tag }}
          </b-tag>
        </b-taglist>
        <div class="content">
          <h3>Description</h3>
          <p>{{ oil.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Oil',
  data() {
    return {
      oil: {},
    };
  },
  mounted() {
    const url = `http://localhost:8081/huiles/${this.$route.params.id}`;

    axios
      .get(url)
      .then((response) => {
        this.oil = response.data;
      });
  },
};
</script>
