<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Name_FR">
          <b-input v-model="oil_f.name_FR"></b-input>
        </b-field>
        <b-field label="Name_EN">
          <b-input v-model="oil_f.name_EN"></b-input>
        </b-field>
        <b-field label="Name_LAT">
          <b-input v-model="oil_f.name_LAT"></b-input>
        </b-field>
        <b-field label="Image">
          <b-input v-model="oil_f.img"></b-input>
        </b-field>
        <b-field label="Description">
          <b-input type="textarea" v-model="oil_f.description"></b-input>
        </b-field>
        <b-field label="Properties">
          <b-taginput
            v-model="oil_f.properties"
            ellipsis
            placeholder="Add a property">
          </b-taginput>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary">
          Submit
        </button>
        <button class="button" @click.prevent="cancel_f">
          Cancel
        </button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  props: ['oil_f', 'title', 'cancel'],
  methods: {
    onSubmit() {
      if (this.title === 'Add an oil') {
        this.$emit('add-oil', this.oil_f);
      } else if (this.title === 'Edit an oil') {
        this.$emit('edit-oil', this.oil_f);
      }
    },
    cancel_f() {
      this.$emit('cancel');
    },
  },
};
</script>
