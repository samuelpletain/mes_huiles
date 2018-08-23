<template>
  <div class="container">
    <section class="section">
      <button class="button is-primary is-medium"
            @click="isComponentModalActive = true; title = 'Edit an oil'">
            Edit an oil
      </button>
      <button class="button is-primary is-medium"
            @click="isComponentModalActive = true; title = 'Add an oil'">
            Add an oil
      </button>

      <b-modal :active.sync="isComponentModalActive" has-modal-card>
        <addForm @save-oil="test" :title="title" :oil="oil"></addForm>
      </b-modal>
    </section>
  </div>
</template>

<script>
import addForm from '../components/Form';

export default {
  components: {
    addForm,
  },
  data() {
    return {
      isComponentModalActive: false,
      oil: {
        name_FR: '',
        name_EN: '',
        name_LAT: '',
        img: '',
        description: '',
        properties: [],
      },
      title: '',
    };
  },
  methods: {
    test() {
      // eslint-disable-next-line
      console.log(this.oil);
    },
  },
};
</script>
