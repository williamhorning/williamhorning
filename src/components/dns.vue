<template>
	<h2>DNS lookup tool</h2>
	<br />
	<form id="dnsLookupForm" @submit.prevent="this.dnsLookup()">
		<input v-model="domain" type="text" placeholder="example.com" />
		<input
			id="dohURI"
			name="dohURI"
			type="text"
			placeholder="DoH URI (optional)"
		/>
		<input type="submit" />
	</form>
	<div v-if="this.records.length > 0">
		<br />
		<h3>Records for {{ domain }}</h3>
		<br />
		<ul>
			<li v-for="record in this.records">
				<h4>{{ record.type }}</h4>
				<ul>
					<li v-for="item in record.data">
						<code>{{ item.data }}</code>
					</li>
				</ul>
			</li>
		</ul>
		<button @click="this.records = []">Hide this list</button>
	</div>
	<br />
</template>
<script lang="ts">
	export default {
		data() {
			return {
				records: [],
				domain: 'example.com',
				dohURI: 'https://dns.cloudflare.com/dns-query',
			};
		},
		methods: {
			async dnsLookup() {
				this.records = [];
				let types = [
					'A',
					'AAAA',
					'AFSDB',
					'APL',
					'CAA',
					'CDNSKEY',
					'CDS',
					'CERT',
					'CNAME',
					'CSYNC',
					'DHCID',
					'DLV',
					'DNAME',
					'DNSKEY',
					'DS',
					'EUI48',
					'EUI64',
					'HINFO',
					'HIP',
					'HTTPS',
					'IPSECKEY',
					'KEY',
					'KX',
					'LOC',
					'MX',
					'NAPTR',
					'NS',
					'NSEC',
					'NSEC3',
					'NSEC3PARAM',
					'OPENPGPKEY',
					'PTR',
					'RRSIG',
					'RP',
					'SIG',
					'SMIMEA',
					'SOA',
					'SRV',
					'SSHFP',
					'SVCB',
					'TA',
					'TKEY',
					'TLSA',
					'TSIG',
					'TXT',
					'URI',
					'ZONEMD',
				];
				for (let type of types) {
					let dns = await (
						await fetch(`${this.dohURI}?name=${this.domain}&type=${type}`, {
							headers: {
								accept: 'application/dns-json',
							},
						})
					).json();
					if (dns.Answer) {
						this.records.push({
							type,
							data: dns.Answer,
						});
					}
				}
			},
		},
	};
</script>
