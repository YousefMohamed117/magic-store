import { u as useStorage } from "./useStorage.8eb0f3ec.js";
import { useSSRContext, withAsyncContext, unref } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as useCartStore } from "./cartStore.8cb27db3.js";
import "../server.mjs";
import "ohmyfetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@vueuse/shared";
import "vue-router";
import "@vue/devtools-api";
import "defu";
import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const _sfc_main$1 = {
  __name: "ProductCart",
  __ssrInlineRender: true,
  props: ["product"],
  async setup(__props) {
    let __temp, __restore;
    const { product } = __props;
    useCartStore();
    const { filePath, url, uploadImage, deleteImage } = useStorage();
    [__temp, __restore] = withAsyncContext(() => uploadImage(product.img)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><img${ssrRenderAttr("src", unref(url))}${ssrRenderAttr("alt", __props.product.title)}><p class="text-white flex-1">${ssrInterpolate(__props.product.title)}</p><div class="flex"><button class="btn">-</button><p class="py-1 px-4 mx-1 rounded-sm text-lg bg-gray-200">${ssrInterpolate(__props.product.quantity)}</p><button class="btn">+</button></div><p class="text-white">${ssrInterpolate(__props.product.price * __props.product.quantity)} coins</p><button class="ml-auto"><span class="material-icons-outlined text-white">delete</span></button><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    useStorage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCart = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-white text-2xl text-center my-8">Your Basket</h2>`);
      if (unref(cartStore).cart.length) {
        _push(`<div class="card text-xl"><!--[-->`);
        ssrRenderList(unref(cartStore).cart, (product) => {
          _push(`<div class="flex gap-8 items-center sm:flex-row flex-col">`);
          _push(ssrRenderComponent(_component_ProductCart, { product }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--><div class="text-right pt-4 mt-4 border-t-2"><span class="text-white">Total amount to pay: </span><span class="text-secondary">${ssrInterpolate(unref(cartStore).total)} Silver Coins</span></div></div>`);
      } else {
        _push(`<div class="card text-xl"><p class="text-white">There are no items in your basket.</p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=cart.c0f6488d.js.map
