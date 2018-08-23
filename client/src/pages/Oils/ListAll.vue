<template>
  <div class="container">
    <h1 class="title">Les huiles</h1>
    <button class="button is-info"
            @click="reset">
            <b-icon icon="plus"></b-icon>
            <span>Add an oil</span>
    </button>
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="oil in oils" :key="oil._id">
          <div class="card" :to="'/huiles/' + oil._id" tag="div">
            <div class="card-image">
              <figure class="image is-3by2">
                <img :src="oil.img" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ oil.name_FR }} ({{ oil.name_EN }})</p>
                  <p class="subtitle is-6">{{ oil.name_LAT }}</p>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <router-link class="card-footer-item" :to="'huiles/' + oil.name_FR">
                More
              </router-link>
              <a class="card-footer-item"
            @click="editForm(oil)">
            Edit
              </a>
              <a class="card-footer-item" @click="deleteOil(oil._id)" style="color: red">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-modal :active.sync="isComponentModalActive"
    has-modal-card>
      <addForm @add-oil="addOil(oil_f)"
      @edit-oil="updateOil"
      @cancel="cancel()"
      :title="title"
      :oil_f="oil_f"></addForm>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
import addForm from '../../components/Form';

const editOil = '';

function compareNameFR(a, b) {
  const nameA = a.name_FR;
  const nameB = b.name_FR;

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

export default {
  name: 'OilIndex',
  components: {
    addForm,
  },
  data() {
    return {
      isComponentModalActive: false,
      oils: null,
      oil_f: {
        name_FR: '',
        name_EN: '',
        name_LAT: '',
        img: '',
        description: '',
        properties: [],
        _id: '',
      },
      title: '',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get('http://localhost:8081/huiles')
        .then((response) => {
          this.oils = response.data.sort(compareNameFR);
        });
    },
    editForm(oil) {
      this.isComponentModalActive = true;
      this.oil_f = oil;
      this.title = 'Edit an oil';
    },
    deleteOil(oil) {
      const url = `http://localhost:8081/huiles/${oil}`;
      this.$dialog.confirm({
        title: 'Deleting oil',
        message: 'Are you sure you want to <b>delete</b> this oil? This action cannot be undone.',
        confirmText: 'Delete Oil',
        icon: 'delete',
        hasIcon: true,
        type: 'is-danger',
        onConfirm: () => {
          this.$toast.open({
            message: 'Oil deleted!',
            type: 'is-danger',
          });
          axios
            .delete(url)
            .then(() => {
              this.fetchData();
            })
            .catch((error) => {
              // eslint-disable-next-line
              console.log(error);
            });
        },
      });
    },
    addOil(oil) {
      const newOil = oil;
      if (newOil.img === '') {
        delete newOil.img;
      }
      // eslint-disable-next-line
      delete newOil._id;
      axios.post('http://localhost:8081/huiles', newOil)
        .then((response) => {
          // eslint-disable-next-line
          console.log(response);
          this.isComponentModalActive = false;
          this.fetchData();
          this.$toast.open({
            message: 'Oil added!',
            type: 'is-info',
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    updateOil() {
      // eslint-disable-next-line
      console.log(this.oil_f);
      // eslint-disable-next-line
      axios.put(`http://localhost:8081/huiles/${this.oil_f._id}`, this.oil_f)
        .then((response) => {
          // eslint-disable-next-line
          console.log(response);
          // eslint-disable-next-line
          console.log(editOil);
          this.isComponentModalActive = false;
          this.fetchData();
          this.$toast.open({
            message: 'Oil editted!',
            type: 'is-info',
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    cancel() {
      Object.assign(this.$data, this.$options.data());
      this.fetchData();
    },
    reset() {
      this.cancel();
      this.isComponentModalActive = true;
      this.title = 'Add an oil';
    },
  },
};
</script>
