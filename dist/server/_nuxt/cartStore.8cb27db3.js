import { d as defineStore } from "../server.mjs";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { ref } from "vue";
const firebaseConfig = {
  apiKey: "AIzaSyAfAdJa0TnQe95YNI5mDTuqSQPIWErl4EE",
  authDomain: "yousef-firebase-ae727.firebaseapp.com",
  projectId: "yousef-firebase-ae727",
  storageBucket: "yousef-firebase-ae727.appspot.com",
  messagingSenderId: "805319693962",
  appId: "1:805319693962:web:90d5e2ae6e3d97d0a17f73"
};
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
firebase.firestore.FieldValue.serverTimestamp;
const projectStorage = firebase.storage();
const getPosts = (coll) => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      const res = await projectFirestore.collection(coll).get();
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};
const useCartStore = defineStore("cart", {
  state: () => ({
    cart: []
  }),
  actions: {
    async getCart() {
      const { posts, error, load } = getPosts("cart");
      await load();
      this.cart = posts.value;
    },
    async deleteFromCart(p) {
      this.cart = this.cart.filter((e) => e.id != p.id);
      await projectFirestore.collection("cart").doc(p.id).delete();
    },
    async addToCart(p) {
      if (this.cart.find((e) => e.id == p.id)) {
        this.incQuantity(p);
        console.log("found");
      } else {
        this.cart.push({ ...p, quantity: 1 });
        await projectFirestore.collection("cart").add({ ...p, quantity: 1 });
        console.log("added");
      }
    },
    async incQuantity(p) {
      let newQ;
      this.cart = this.cart.map((e) => {
        if (e.id == p.id) {
          e.quantity++;
          newQ = e;
        }
        return e;
      });
      await projectFirestore.collection("cart").doc(p.id).update({ quantity: newQ.quantity });
    },
    async decQuantity(p) {
      if (p.quantity <= 1) {
        this.deleteFromCart(p);
      }
      p.quantity -= 1;
      projectFirestore.collection("cart").doc(p.id).update({ quantity: p.quantity });
    }
  },
  getters: {
    total() {
      return this.cart.reduce((p, c) => {
        return p + c.price * c.quantity;
      }, 0);
    },
    length() {
      return this.cart.reduce((p, c) => {
        return p + c.quantity;
      }, 0);
    }
  }
});
export {
  getPosts as g,
  projectStorage as p,
  useCartStore as u
};
//# sourceMappingURL=cartStore.8cb27db3.js.map
