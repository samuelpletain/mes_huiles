<template>
  <div class="container">
    <h1 class="title">Edit</h1>
    <addForm @save-oil="updateOil" :oil="oil"></addForm>
  </div>
</template>

<script>
import axios from 'axios';
import addForm from '../../components/Form';

export default {
  data() {
    return {
      oil: {
        name_FR: '',
        name_EN: '',
        name_LAT: '',
        img: '',
        description: '',
        properties: '',
      },
    };
  },
  methods: {
    updateOil(oil) {
      axios.put(`http://localhost:8081/huiles/${this.$route.params.id}`, oil)
        .then((response) => {
          // eslint-disable-next-line
          console.log(response);
          this.$router.push('../../huiles/all');
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
  },
  components: {
    addForm,
  },
  mounted() {
    const url = `http://localhost:8081/huiles/${this.$route.params.id}`;
    axios.get(url)
      .then((response) => {
        this.oil = response.data;
      });
  },
};
</script>
