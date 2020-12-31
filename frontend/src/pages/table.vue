<template>
  <div class="q-pa-md">
    <h4> Click field to edit </h4>
    <q-table
      title="Inventory"
      :data="carsInventory"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="company" :props="props">
            {{ props.row.company }}
            <q-popup-edit @save="updateStoreInventory" v-model="props.row.company" title="Update company" buttons>
              <q-input v-model="props.row.company" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="model" :props="props">
            {{ props.row.model }}
            <q-popup-edit @save="updateStoreInventory" v-model="props.row.model" title="Update model" buttons>
              <q-input v-model="props.row.model" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="color" :props="props">
            <div class="text-pre-wrap">{{ props.row.color }}</div>
            <q-popup-edit @save="updateStoreInventory" v-model="props.row.color" title="Update color" buttons>
              <q-input  v-model="props.row.color" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="yearsOld" :props="props">
            {{ props.row.yearsOld }}
            <q-popup-edit @save="updateStoreInventory" v-model="props.row.yearsOld" title="Update years old" buttons>
              <q-input type="number" v-model="props.row.yearsOld" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="passedInspection" :props="props">
            <span v-if="props.row.passedInspection == true"> Yes </span>
            <span v-else> No </span>
            <q-popup-edit @save="updateStoreInventory" v-model="props.row.passedInspection" title="Update passed inspection" buttons>
               <q-toggle v-model="props.row.passedInspection" label="Passed this years inspection?" />
            </q-popup-edit>
            </q-td>
          <q-td key="premiumAvailability" :props="props">
            <span v-if="props.row.passedInspection == true"> Yes </span>
            <span v-else> No </span>
           <q-popup-edit @save="updateStoreInventory" v-model="props.row.premiumAvailability" title="Update premium available" buttons>
               <q-checkbox left-label v-model="props.row.premiumAvailability" label="Available only for premium members" />
            </q-popup-edit>
          </q-td>
          <q-td key="vehicleType" :props="props">
            {{ props.row.vehicleType }}
            <q-popup-edit @save="updateStoreInventory" v-model="props.row.vehicleType" title="Update vehicle type" buttons>
              <q-radio v-model="props.row.vehicleType" val="car" label="Car" />
              <q-radio v-model="props.row.vehicleType" val="suv" label="SUV" />
              <q-radio v-model="props.row.vehicleType" val="van" label="Van" />
            </q-popup-edit>
            </q-td>

            <q-td key="comment" :props="props">
              <div v-html="props.row.comment" >  </div>
              <q-popup-edit @save="updateStoreInventory" v-model="props.row.comment" title="Update comment" buttons>
                  <q-editor v-model="props.row.comment" />
              </q-popup-edit>
              </q-td>
        </q-tr>
      </template>
    </q-table>

        <q-dialog v-model="displayPopup">
      <q-card>
        <q-card-section>
          <div class="text-h6">content loaded</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import store from 'src/store/store.js'

export default {
  data () {
    return {
      columns: [
        { name: 'company', align: 'center', label: 'Company', field: 'company' },
        { name: 'model', label: 'Model', field: 'model' },
        { name: 'color', label: 'Color', field: 'color' },
        { name: 'yearsOld', label: 'Years old', field: 'yearsOld' },
        { name: 'passedInspection', label: 'Passed inspection', field: 'passedInspection' },
        { name: 'premiumAvailability', label: 'Only premium members', field: 'premiumAvailability' },
        { name: 'vehicleType', label: 'Vehicle type', field: 'vehicleType' },
        { name: 'comment', label: 'Comment', field: 'comment' }
      ],
      displayPopup: false
    }
  },
  mounted () {
    if (store.state.carsInventory.isThereNewCar === true) {
      this.displayPopup = true

      store.dispatch('setIfNewCar', false)
    }
  },
  computed: {

    carsInventory () {
      return store.state.carsInventory.carsInventory
    }
  },
  methods: {
    updateStoreInventory () {
      store.dispatch('updateInventory', this.carsInventory)
    }
  }
}

</script>

<style>

</style>
