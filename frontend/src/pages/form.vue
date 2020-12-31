<template>
  <div class="q-pa-md">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md car-inventory-form"
    >
    <!-- DOCUMENTATION: Do NOT wrap QInput, QFile or QSelect with QField as these components already inherit QField. -->
      <q-input
        filled
        v-model="form.company"
        label="Company"
        hint="Example: Toyota"
      />
      <q-input
        filled
        v-model="form.model"
        label="Model"
        hint="Example: Corolla"
      />
      <q-input
        filled
        v-model="form.color"
        label="Color"
        hint="Example: red"
      />

      <q-input
        filled
        type="number"
        v-model="form.yearsOld"
        label="How old is the car"
        hint="Number of years"
      />
      <q-field color="dark">
        <q-toggle v-model="form.passedInspection" label="Passed this years inspection?" />
      </q-field>

      <q-field color="dark">
        <q-checkbox v-model="form.premiumAvailability" label="Available only for premium members" />
      </q-field>

      <q-field color="dark">
        <q-radio v-model="form.vehicleType" val="car" label="Car" />
        <q-radio v-model="form.vehicleType" val="suv" label="SUV" />
        <q-radio v-model="form.vehicleType" val="van" label="Van" />
      </q-field>

      <q-field color="dark" label="comments">
        <q-editor style="margin-top: 25px;" v-model="form.comment" min-height="5rem" />
      </q-field>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

    </q-form>

  </div>
</template>

<script>
import axios from 'axios'
import store from 'src/store/store.js'

export default {
  data () {
    return {
      data: [],
      form: {
        company: null,
        model: null,
        color: null,
        yearsOld: null,
        passedInspection: false,
        premiumAvailability: false,
        vehicleType: 'car',
        comment: ''
      }
    }
  },
  methods: {

    onSubmit () {
      axios.post('http://localhost:8081/j', this.form)
        .then((response) => {
          var returnedCarObject = response.data

          store.dispatch('pushCar', returnedCarObject)

          store.dispatch('setIfNewCar', true)

          this.$router.push({ name: 'table' })
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
    },
    onReset () {
      this.form.company = null
      this.form.model = null
      this.form.color = null
      this.form.yearsOld = null
      this.form.passedInspection = false
      this.form.premiumAvailability = false
      this.form.vehicleType = 'car'
      this.form.comment = ''
    }
  }
}
</script>

<style scoped>
.car-inventory-form{
   max-width: 400px;
   margin: auto;
}
</style>
