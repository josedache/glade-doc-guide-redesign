<template>
  <guide-section title="Account Setup" :links="links">
    <guide-section title="Test Accounts" :isSub="true">
      <ul>
        <li>
          <p>Merchant ID: GP0000001</p>
          <p>Merchant Key: 123456789</p>
        </li>
      </ul>
    </guide-section>
    <guide-section title="Live Account" :isSub="true">
      <p>
        Sign up for a live account here: https://glade.ng (opens new window)You
        can start accepting realtime payments with your live account. Create one
        now. Your API Credentials are in Merchant Credentials on the dashboard.
      </p>
    </guide-section>
    <notice />
    <guide-section title="Using the Glade Payment Services" :isSub="true">
      <p>
        The Glade inline checkout is the simplest and easiest way to start
        accepting payments on your platform. This payment solution provides a
        secure and convenient flow for users. Payments are processed on the go
        without having to navigate customers to another page to complete their
        transactions. #
      </p>
    </guide-section>
  </guide-section>
</template>

<script>
import GuideSection from "../components/GuideSection.vue";
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
    GuideSection,
  },
};
</script>

<style lang="scss" scoped>
/* @use '../utils' as *; */
</style>