import { useSSRContext, ref, withAsyncContext, unref, mergeProps } from "vue";
import { u as useStorage } from "./useStorage.8eb0f3ec.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as useCartStore, g as getPosts } from "./cartStore.8cb27db3.js";
import { _ as _export_sfc } from "../server.mjs";
import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
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
const ProductCard_vue_vue_type_style_index_0_scoped_86c50c0d_lang = "";
const _sfc_main$1 = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: ["product"],
  async setup(__props) {
    let __temp, __restore;
    const { product } = __props;
    useCartStore();
    const loading = ref(false);
    const { filePath, url, uploadImage, deleteImage } = useStorage();
    loading.value = true;
    [__temp, __restore] = withAsyncContext(() => uploadImage(product.img)), await __temp, __restore();
    loading.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(loading)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "card flex items-center gap-8" }, _attrs))} data-v-86c50c0d><img${ssrRenderAttr("src", unref(url))}${ssrRenderAttr("alt", __props.product.title)} data-v-86c50c0d><div data-v-86c50c0d><p class="text-2xl text-secondary" data-v-86c50c0d>${ssrInterpolate(__props.product.title)}</p><p class="text-xl text-gray-50" data-v-86c50c0d>${ssrInterpolate(__props.product.description)}</p><p class="text-lg text-secondary my-3" data-v-86c50c0d>${ssrInterpolate(__props.product.price)} Silver Coins </p><button class="btn" data-v-86c50c0d><span data-v-86c50c0d>Add to Basket</span></button></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader" }, _attrs))} data-v-86c50c0d>Loading...</div>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-86c50c0d"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { posts, error, load } = getPosts("products");
    [__temp, __restore] = withAsyncContext(() => load()), await __temp, __restore();
    const products = posts.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-white text-2xl text-center my-8">Products</h2><div class="grid lg:grid-cols-2 grid-cols-1 gap-7"><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ProductCard, { product }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.f894cc8f.js.map
