import{u as v}from"./useStorage.0a483334.js";import{u as f,g as y}from"./cartStore.72ada58f.js";import{i as C,f as S,w as h,u as d,o as a,a as r,b as e,t as i,p as k,j as w,F as I,r as P,e as B}from"./entry.aebadb58.js";const $=t=>(k("data-v-86c50c0d"),t=t(),w(),t),b={key:0,class:"card flex items-center gap-8"},A=["src","alt"],F={class:"text-2xl text-secondary"},L={class:"text-xl text-gray-50"},N={class:"text-lg text-secondary my-3"},V=$(()=>e("span",null,"Add to Basket",-1)),j=[V],D={key:1,class:"loader"},E={__name:"ProductCard",props:["product"],async setup(t){let s,o;const{product:n}=t,_=f(),c=S(!1),{filePath:u,url:p,uploadImage:m,deleteImage:x}=v();return c.value=!0,[s,o]=h(()=>m(n.img)),await s,o(),c.value=!1,(l,g)=>d(c)?(a(),r("div",D,"Loading...")):(a(),r("div",b,[e("img",{src:d(p),alt:t.product.title},null,8,A),e("div",null,[e("p",F,i(t.product.title),1),e("p",L,i(t.product.description),1),e("p",N,i(t.product.price)+" Silver Coins ",1),e("button",{class:"btn",onClick:g[0]||(g[0]=G=>d(_).addToCart(t.product))},j)])]))}},T=C(E,[["__scopeId","data-v-86c50c0d"]]),q=e("h2",{class:"text-white text-2xl text-center my-8"},"Products",-1),z={class:"grid lg:grid-cols-2 grid-cols-1 gap-7"},M={__name:"index",async setup(t){let s,o;const{posts:n,error:_,load:c}=y("products");[s,o]=h(()=>c()),await s,o();const u=n.value;return(p,m)=>{const x=T;return a(),r("div",null,[q,e("div",z,[(a(!0),r(I,null,P(d(u),l=>(a(),r("div",{key:l.id},[B(x,{product:l},null,8,["product"])]))),128))])])}}};export{M as default};
