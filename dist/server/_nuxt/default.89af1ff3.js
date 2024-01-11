import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, unref, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { u as useCartStore } from "./cartStore.8cb27db3.js";
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
const default_vue_vue_type_style_index_0_scoped_7699c940_lang = "";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    cartStore.getCart();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-8" }, _attrs))} data-v-7699c940><header class="wrapper flex justify-between" data-v-7699c940>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-secondary text-5xl" data-v-7699c940${_scopeId}>Adventure Store</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-secondary text-5xl" }, "Adventure Store")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative" data-v-7699c940${_scopeId}><span class="material-icons-outlined text-secondary text-5xl relative" data-v-7699c940${_scopeId}> shopping_bag </span>`);
            if (unref(cartStore).length) {
              _push2(`<span class="cartNum flex justify-center items-center bg-white" data-v-7699c940${_scopeId}>${ssrInterpolate(unref(cartStore).length)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode("span", { class: "material-icons-outlined text-secondary text-5xl relative" }, " shopping_bag "),
                unref(cartStore).length ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "cartNum flex justify-center items-center bg-white"
                }, toDisplayString(unref(cartStore).length), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><div class="wrapper" data-v-7699c940>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7699c940"]]);
export {
  _default as default
};
//# sourceMappingURL=default.89af1ff3.js.map
