<template>
  <div class="container">
    <div>
      <h1 class="setup">
        {{ $t('setAccountName') }}
      </h1>
    </div>
    <div class="account-name-input-wrapper">
      <q-input
        v-model.trim="accountName"
        :float-label="$t('accountName')"
        outlined
        dark
        color="primary"
      />
    </div>
    <div class="btns-wrapper">
      <q-btn
        color="primary"
        text-color="blueish"
        label="Next"
        @click="validate"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  required,
  alphaNum,
} from 'vuelidate/lib/validators';

export default {
  name: 'AccountName',
  data() {
    return {
      accountName: '',
    };
  },
  validations: {
    accountName: {
      required,
      alphaNum,
    },
  },
  computed: {
    ...mapState({
      delay: (state) => { return state.settings.delay; },
    }),
  },
  methods: {
    validate() {
      if (!this.$v.accountName.required) {
        this.$toast.create(10, this.$t('enterAccountName'), this.delay.normal);
        return false;
      }

      if (!this.$v.accountName.alphaNum) {
        this.$toast.create(10, this.$t('invalidAccountName'), this.delay.normal);
        return false;
      }

      const accounts = this.$store.getters['entities/account/query']().get();
      const nameAlreadyInUse = accounts.find((account) => {
        return account.name === this.accountName;
      });

      if (nameAlreadyInUse) {
        this.$toast.create(10, this.$t('accountNameTaken'), this.delay.normal);
        return false;
      }

      this.$store.dispatch('setup/setAccountName', this.accountName);
      this.$router.push({ path: '/setup/7' });
      return true;
    },
  },
};

</script>

<style scoped>
.account-name-input-wrapper {
  margin-top: 1rem;
  padding: 0 1em;
}
</style>
