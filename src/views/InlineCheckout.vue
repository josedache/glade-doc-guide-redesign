<template>
  <document-section title="Glade Inline Checkout" :links="links">
    <div class="interface-gif">
      <img src="../assets/card-payment.gif" alt="card-payment" />
    </div>
    <p>
      The Inline Checkout solution provides quick access the API into any
      website, CMS, App or Platform. It requires an addon embed script.
    </p>
    <notice variant="warning">
      We recommend you don't cache the script in your project to avoid breaking
      changes when an update is introduced.
    </notice>
    <code-snippet
      title="Live Inline Script"
      code='<script type="text/javascript" src="https://api.glade.ng/checkout.js"></script>'
    />
    <code-snippet
      title="Demo Inline Script"
      code='<script type="text/javascript" src="http://demo.api.glade.ng/checkout.js"></script>'
    />
    <notice title="Tip" variant="success">
      You can have a see how the Inline Checkout looks and works from our demo
      page <a href="" class="content-link">Demo Page</a>
    </notice>
    <code-snippet
      title="Sample Configuration"
      code='initPayment({
    MID:"00",
    email: "hello@example.com",
    firstname:"John",
    lastname:"Doe",
    description: "",
    title: "",
    amount: 100,
    country: "NG",
    currency: "NGN",
    onclose: function() {

    },
    callback: function(response) {

    }
});'
    />
    <p>
      The checkout API is called directly from code using the initPayment
      function. It accepts the following the properties.
    </p>
    <api-param-table title="Embed Parameters" :data="embed_params.data" />
    <code-snippet
      title="Sample Response"
      code='{
    "status": 200,
    "txnStatus": "successful",
    "bank_message": "Successful",
    "fullname": "John Doe",
    "email": "demo@gmail.com",
    "txnRef": "GP82878898982497T",
    "chargedAmount": 1000,
    "fraudStatus": "ok"
}'
    />
    <p>
      The Inline Checkout can also be configured for advance requirements like
      Recurring <a class="content-link">payment</a> ,
      <a href="" class="content-link">Split payment</a> and
      <a href="" class="content-link">Installment payments</a>
    </p>

    <document-section title="Recurring Payment" :isSub="true">
      <p>
        A recurring payment can be configured directly into the payment system
        that will be carried out automatically by our system and send the
        results back to your Webhook as payment notification. To use the
        recurring feature within the inline checkout simply add these
        configuration options to the embedded inline checkout configurations.
      </p>
      <notice variant="warning">
        The recurring feature works only with card payments.
      </notice>
      <api-param-table title="For Recurrent" :data="recurrent_params.data" />
      <notice title="Sample Configuration">
        This configuration setup will charge the user every first day of the
        week the amount that has been set.
      </notice>
      <code-snippet
        code='initPayment({
    MID:"00",
    email: "hello@example.com",
    firstname:"John",
    lastname:"Doe",
    description: "",
    title: "",
    amount: 100,
    country: "NG",
    currency: "NGN",
    recurrent: {
        frequency: "weekly",
        value: "1"
    },
    onclose: function() {

    },
    callback: function(response) {

    }
});     '
      />
    </document-section>

    <document-section title="Installment Payment" :isSub="true">
      <p>
        Installment payment allows you to collect payment in bit's to reach
        accumulate to a final amount.
      </p>
      <api-param-table
        title="For installment"
        :data="installment_params.data"
      />
      <code-snippet
        title="Sample configuration initial installment payment"
        code='initPayment({
    MID:"00",
    email: "hello@example.com",
    firstname:"John",
    lastname:"Doe",
    description: "",
    title: "",
    amount: 1000,
    country: "NG",
    currency: "NGN",
    installment: {
      total: 40000,
      payment_schedule : {
          "31-11-2017" : 20,
          "31-12-2017" : 30,
          "30-01-2017" : 50
      }
    },
    onclose: function() {

    },
    callback: function(response) {

    }
});'
      />
      <notice variant="warning">
        This will initiate a payment request on the set date when its a card
        transaction that was used to initiate the transaction.
      </notice>

      <code-snippet
        title="Sample configuration to complete installment payment"
        code='initPayment({
    MID:"00",
    email: "hello@example.com",
    firstname:"John",
    lastname:"Doe",
    description: "",
    title: "",
    amount: 100,
    country: "NG",
    currency: "NGN",
    installment: {
      txnRef: "GP000KAJA"
    },
    onclose: function() {

    },
    callback: function(response) {

    }
});'
      />
      <notice variant="warning">
        This will initiate a payment request on the set date when its a card
        transaction that was used to initiate the transaction.
      </notice>
    </document-section>

    <document-section title="Split Payment" :isSub="true">
      <p>
        With split payments you can decide how you want the settlements to be
        handled when you provide a service to a third party. Before you can
        split payment you have generate a reference code on the dashboard that
        will be used to divide the payment into the account that was specified
        at the point of generating the code.
      </p>

      <api-param-table title="For Split" :data="split_params.data" />
    </document-section>
  </document-section>
</template>

<script>
import ApiParamTable from "../components/APIParamTable.vue";
import CodeSnippet from "../components/CodeSnippet.vue";
import DocumentSection from "../components/DocumentSection.vue";
import Notice from "../components/Notice.vue";

export default {
  components: { ApiParamTable, Notice, CodeSnippet, DocumentSection },
  data: function () {
    return {
      links: ["Recurring Payment", "Installment Payment", "Split Payment"],
      embed_params: {
        title: "",
        data: [
          { name: "MID", meaning: "Merchant ID", option: "Required" },
          {
            name: "amount",
            meaning: "Amount to charge the customer.",
            option: "Required",
          },
          { name: "currency", meaning: "default is NGN.", option: "Optional" },
          { name: "country", meaning: "default is NG.", option: "Optional" },
          {
            name: "email",
            meaning: "email of the customer.",
            option: "Required",
          },
          {
            name: "firstname",
            meaning: "First name of the customer.",
            option: "Optional",
          },
          {
            name: "lastname",
            meaning: "Last name of the customer.",
            option: "Optional",
          },
          {
            name: "phone",
            meaning: "Phone number of the customer.",
            option: "Optional",
          },
          {
            name: "title",
            meaning: "Text to be displayed as the title of the payment modal.",
            option: "Optional",
          },
          {
            name: "description",
            meaning: "	Text to be displayed as a short modal description.",
            option: "Optional",
          },
          {
            name: "meta_data",
            meaning:
              "	When you need to pass extra data to the API. The value should be a string stringify the value if its a JSON value.",
            option: "Optional",
          },
          {
            name: "payment_method",
            meaning:
              "	You can select which payment method you want available on the checkout, pass array of the payment methods you want available e.g ['card', 'bank', 'ussd', 'qr', 'mobilemoney']",
            option: "Optional",
          },
          {
            name: "bearer",
            meaning:
              "	You can use this option to determine who pay for the charges on the transaction default is set to the merchant's account. customer or account",
            option: "Optional",
          },
          {
            name: "logo",
            meaning: "	Link to the Logo image.",
            option: "Optional",
          },
          {
            name: "is_recurring",
            meaning:
              "	The is_recurring field default value is false, setting it to true will make the transaction recurrent and will generate a token",
            option: "Optional",
          },
          {
            name: "customer_txnref",
            meaning:
              "	Unquie reference you generate such as an order number, which can be used to verify transaction at a later time",
            option: "Optional",
          },
        ],
      },
      recurrent_params: {
        title: "recurrent",
        data: [
          {
            name: "recurrent",
            meaning: "JSON which holds the config of the recurrent setup",
            option: "Optional",
          },
          {
            name: "frequency",
            meaning:
              "The frequency at which the recurring payment should occurs options available are daily or weekly or monthly",
            option: "Optional",
          },
          {
            name: "value",
            meaning:
              "	The value will determine when the charge should occur based on the frequency that has been set. \n Daily (Hours): 0 - 23 \n Weekly (Day): 1 - 7 \n Monthly (Day): 1 - 30",
            option: "Optional",
          },
          {
            name: "is_recurring",
            meaning:
              "	The is_recurring field default value is false, setting it to true will make the transaction recurrent and will generate a token which can charge the card at the required time.",
            option: "Required",
          },
        ],
      },
      installment_params: {
        title: "For installment",
        data: [
          {
            name: "payment_schedule",
            meaning:
              "	This option will be used to determine how the system will handle the installments. This option should be used for initial transaction.",
            option: "Dependent",
          },
          {
            name: "total",
            meaning:
              "	The total amount to be collect over a period of time. This option should be used for initial transaction.",
            option: "Dependent",
          },
          {
            name: "txnRef",
            meaning:
              "	The reference of the initial transaction that you want the user or customer to complete to the total amount.",
            option: "Dependent",
          },
        ],
      },
      split_params: {
        data: [
          {
            name: "ref_code",
            meaning:
              "Reference code that was generated at the point of setting up the split payment accounts.",
            option: "Required",
          },
          {
            name: "percentage",
            meaning:
              "The percentage of the transaction to be settled in the account.",
            option: "Required",
          },
          {
            name: "fixed",
            meaning:
              "A fixed amount of the transaction to be settled in the account.",
            option: "Required",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.interface-gif {
  border-radius: 8px;
  overflow: hidden;
  margin: auto;

  & > img {
    max-width: 100%;
    vertical-align: middle;
  }
}
</style>