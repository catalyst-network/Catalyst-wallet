import { Magic } from 'magic-sdk';

const m = new Magic('pk_test_4431477E0967CCCC', 'kovan'); // ✨

m.preload().then(() => { return console.log('Magic <iframe> loaded.'); });

const magic = {
  async loginWithMagic() {
    // log in a user by their email
    try {
      await m.auth.loginWithMagicLink({ email: 'hello@example.com' });
    } catch {
    // Handle errors if required!
    }
  },

  async isLoggedIn() {
    try {
      const isLoggedIn = await m.user.isLoggedIn();
      console.log(isLoggedIn); // => `true` or `false`
    } catch {
      // Handle errors if required!
    }
  },

  async getUser() {
    // Assumes a user is already logged in
    try {
      const { email, publicAddress } = await m.user.getMetadata();
      console.log(email, publicAddress);
    } catch {
      // Handle errors if required!
    }
  },
};

export default ({ Vue }) => {
  Vue.prototype.$magic = magic;
};
