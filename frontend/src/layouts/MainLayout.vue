<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/home" label="Home"  />
        <q-route-tab to="/form" label="Form"  />
        <q-route-tab to="/table" label="Table" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="left" side="left" overlay bordered>
      <q-tabs vertical>
       <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/form" label="Form"  />
        <q-route-tab to="/table" label="Table" />
       </q-tabs>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
        <q-tabs align="center">
          <q-route-tab to="/home" label="Home" />
          <q-route-tab to="/form" label="Form" />
          <q-route-tab to="/table" label="Table" />
        </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
