<template>
  <div class="container">
    <h1 class="title">Add</h1>
    <addForm @save-oil="addOil" :oil="oil"></addForm>
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
    addOil(oil) {
      const newOil = oil;
      if (newOil.img === '') {
        delete newOil.img;
      }
      // eslint-disable-next-line
      axios.post('http://localhost:8081/huiles', newOil)
        .then((response) => {
          // eslint-disable-next-line
          console.log(response);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
      this.$router.push('../../huiles/all');
      this.$root.$emit('added');
    },
  },
  components: {
    addForm,
  },
};
</script>
