<template>
  <document-section title="Prerequisites / Requirements" :links="links">
    <p>Pass the following with the header request made to the endpoint</p>
    <ol>
      <li>
        Check our acceptable use policy if you have any questions about your
        business and its acceptability please send an email to support@glade.ng.
        The team is available to provide feedback on any inquiry.
      </li>
      <li>
        Get familiar with our API by reading these pages in the API Overview
        section: Introduction, Payment Collection and Money Transfer.
      </li>
    </ol>
    <notice>
      You need to provide a business CAC Certificate or National Identification
      (International Passport, Driving Licence, or National Identity Card) and
      then fill all the required details for your account to be activated and
      ready to receive payment.
    </notice>

    <document-section :isSub="true" title="HTTPS requirements">
      <p>
        All requests to using the Checkout are made via a secure HTTPS
        connection. However, in order to protect yourself from certain forms of
        man-in-the-middle attacks, you must serve the page containing the
        payment form over HTTPS. e.g https://yourdomain.com/paymentpage If you
        are not familiar with setting up SSL certificates follow this guide to
        setup on a free SSL certificate your server to enable a secure HTTPS
        connection.
      </p>
    </document-section>
  </document-section>
</template>

<script>
import DocumentSection from "../components/DocumentSection.vue";
import Notice from "../components/Notice.vue";
export default {
  components: {
    DocumentSection,
    Notice,
  },
  data: function () {
    return {
      links: ['Prerequisites / Requirements', "HTTPS requirements"],
    };
  },
};
</script>