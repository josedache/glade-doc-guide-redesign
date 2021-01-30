<template>
  <document-section title="Account Setup" :links="links">
    <document-section title="Test Accounts" :isSub="true">
      <ul>
        <li class="code">Merchant ID: GP0000001</li>
        <li class="code">Merchant Key: 123456789</li>
      </ul>
    </document-section>
    <document-section title="Live Account" :isSub="true">
      <p>
        Sign up for a live account here:
        <a href="https://glade.ng" class="content-link">https://glade.ng</a>
        You can start accepting realtime payments with your
        live account. Create one now. Your API Credentials are in Merchant
        Credentials on the dashboard.
      </p>
    </document-section>
    <notice variant="warning">
      Your Merchant Key should not be shared with a third party.
    </notice>
    <document-section title="Using the Glade Payment Services" :isSub="true">
      <p>
        The Glade inline checkout is the simplest and easiest way to start
        accepting payments on your platform. This payment solution provides a
        secure and convenient flow for users. Payments are processed on the go
        without having to navigate customers to another page to complete their
        transactions.
      </p>
    </document-section>
  </document-section>
</template>

<script>
import DocumentSection from "../components/DocumentSection.vue";
import Notice from "../components/Notice.vue";

export default {
  name: "AccountSetup",
  data: function () {
    return {
      links: [
        "Test Accounts",
        "Live Accounts",
        "Using the Glade Payment Services",
      ],
    };
  },
  components: {
    DocumentSection,
    Notice,
  },
};
</script>

<style lang="scss" scoped>
</style>