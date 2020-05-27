<template>
  <div>
    <div
      class="q-mb-xl"
      style="margin-top: -2.5rem"
    >
      <h1 class="setup ">
        {{ $t('accountRecovery') }}
      </h1>
      <div class="text-center">
        Select an account recovery method
      </div>
    </div>

    <div class="container q-px-md">
      <div>
        <div class="q-mb-md q-pl-sm">
          <div class="text-h6 text-weight-bold">
            {{ $t('Basic Security') }}
          </div>
          <div class="text-caption">
            Enter your email address and receive a magic link
          </div>
        </div>
        <q-list>
          <q-item>
            <q-item-section
              avatar
              top
              class="q-pt-md"
            >
              <q-radio
                v-model="recoveryType"
                dark
                val="email"
                color="primary"
              />
            </q-item-section>
            <q-item-section class=" recovery-option q-pa-md">
              <q-item-label>
                <q-icon name="fas fa-at" />
                Email Recovery
              </q-item-label>
              <div class="account-email-input-wrapper">
                <q-input
                  v-model.trim="accountEmail"
                  autofocus
                  outlined
                  dark
                  dense
                  color="primary"
                  placeholder="email@example.com"
                />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="q-mt-xl">
        <div class="q-mb-md q-pl-sm">
          <div class="text-h6 text-weight-bold">
            {{ $t('Advanced Security') }}
          </div>
          <div class="text-caption">
            Write down a 12 word recovery phrase and store it securely.
          </div>
        </div>
        <q-list>
          <q-item>
            <q-item-section
              avatar
              top
            >
              <q-radio
                v-model="recoveryType"
                dark
                val="recoveryPhrase"
                color="primary"
              />
            </q-item-section>
            <q-item-section class=" recovery-option q-pa-md">
              <q-item-label>
                <q-icon name="far fa-list-alt" />

                Recovery Phrase
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <!-- <div class="account-name-input-wrapper">
      <q-input
        v-model.trim="accountEmail"
        outlined
        dark
        color="primary"
        placeholder="email@example.com"
      />
    </div> -->
      <div class="btns-wrapper q-mt-lg">
        <q-btn
          color="primary"
          text-color="blueish"
          label="Next"
          @click="validate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  required,
  email,
} from 'vuelidate/lib/validators';

export default {
  name: 'AccountRecovery',
  data() {
    return {
      accountEmail: '',
      recoveryType: 'email',
    };
  },
  validations: {
    accountEmail: {
      required,
      email,
    },
  },
  computed: {
    ...mapState({
      delay: (state) => { return state.settings.delay; },
    }),
  },
  methods: {
    async validate() {
      if (this.recoveryType === 'recoveryPhrase') {
        this.$router.push({ path: '/setup/2' });
        return true;
      }
      if (!this.$v.accountEmail.required) {
        this.$toast.create(10, this.$t('enterAccountEmail'), this.delay.normal);
        return false;
      }

      if (!this.$v.accountName.email) {
        this.$toast.create(10, this.$t('invalidAccountEmail'), this.delay.normal);
        return false;
      }

      if (this.$magic.isLoggedIn()) {
        this.$magic.logout();
      }
      await this.$magic.login(this.accountEmail);
      const mnemonic = await this.$magic.getMnemonic();
      const mnemonicArray = mnemonic.split(' ');
      this.$store.dispatch('setup/setSeed', mnemonicArray);
      this.$store.dispatch('setup/setSeedString', mnemonic);
      this.$router.push({ path: '/setup/4' });
      return true;
    },
  },
};

</script>

<style scoped>
.account-email-input-wrapper {
  margin-top: 1rem;
  padding: 0 1em 0, 0;
}
.recovery-option {
  border: 1px solid lightgrey;
  border-radius: 5px;
}
</style>
