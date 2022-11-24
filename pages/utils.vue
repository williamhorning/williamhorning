<template>
	<h1>Utilities</h1>
	<br />
  <DNSLookup/>
  <Clock/>
</template>
<script lang="ts">
  import DNSLookup from '../src/components/dns.vue';
  import Clock from '../src/components/clock.vue';
	export default {
    components: {
      DNSLookup,
      Clock
    },
  }
</script>
