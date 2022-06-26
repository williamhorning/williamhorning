<template>
  <h2>DNS Lookup App</h2>
  <br />
  <form method="GET" id="dnsLookupForm">
    <input id="domain" name="domain" type="text" placeholder="example.com" />
    <input id="dohURI" name="dohURI" type="text" placeholder="DoH URI (optional)" />
    <input type="submit" />
  </form>
  <br />
  <h3>Records for {{ domain }}</h3>
  <br />
  <ul>
    <li v-for="record in records">
      <h4>{{record.type}}</h4>
      <ul>
        <li v-for="item in record.data">
          <code>{{item}}</code>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
  async function lookup(dohURI, domain, type) {
    var result = [];
    var dns = await fetch(
      `${dohURI}?name=${domain}&type=${type}`,
      {
        headers: {
          accept: 'application/dns-json',
        },
      }
    ).then((res) => res.json());
    if (dns.Answer) {
      dns.Answer.forEach((item) => {
        result.push(item.data);
      });
    }
    if (result.length == 0) {
      result = [];
    }
    return result;
  }

  async function lookupAll(dohURI, domain) {
    let types = ["A", "AAAA", "AFSDB", "APL", "CAA", "CDNSKEY", "CDS", "CERT", "CNAME", "CSYNC", "DHCID", "DLV", "DNAME", "DNSKEY", "DS", "EUI48", "EUI64", "HINFO", "HIP", "HTTPS", "IPSECKEY", "KEY", "KX", "LOC", "MX", "NAPTR", "NS", "NSEC", "NSEC3", "NSEC3PARAM", "OPENPGPKEY", "PTR", "RRSIG", "RP", "SIG", "SMIMEA", "SOA", "SRV", "SSHFP", "SVCB", "TA", "TKEY", "TLSA", "TSIG", "TXT", "URI", "ZONEMD"];
    let results = [];
    for (let type of types) {
      let data = await lookup(dohURI, domain, type);
      if (data.length > 0) {
        results.push({ type, data });
      }
    }
    return results;
  }

  export default {
    data() {
      return {
        records: [],
        domain:
          new URLSearchParams(location.search).get('domain') || 'example.com',
        dohURI: new URLSearchParams(location.search).get('dohURI') || 'https://dns.cloudflare.com/dns-query',
      };
    },
    async mounted() {
      console.log(this.data);
      this.records = await lookupAll(this.dohURI, this.domain);
    },
  };
</script>
