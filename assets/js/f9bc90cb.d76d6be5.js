/*! For license information please see f9bc90cb.d76d6be5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[987255],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=o,h=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},608110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>p});r(827378);var n=r(603905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"proxy",title:"Kubernetes Backend Proxy Endpoint",sidebar_label:"Proxy",description:"Interacting with the Kubernetes API in Backstage plugins"},c=void 0,u={unversionedId:"features/kubernetes/proxy",id:"features/kubernetes/proxy",title:"Kubernetes Backend Proxy Endpoint",description:"Interacting with the Kubernetes API in Backstage plugins",source:"@site/../docs/features/kubernetes/proxy.md",sourceDirName:"features/kubernetes",slug:"/features/kubernetes/proxy",permalink:"/docs/features/kubernetes/proxy",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/kubernetes/proxy.md",tags:[],version:"current",frontMatter:{id:"proxy",title:"Kubernetes Backend Proxy Endpoint",sidebar_label:"Proxy",description:"Interacting with the Kubernetes API in Backstage plugins"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/features/kubernetes/troubleshooting"},next:{title:"Overview",permalink:"/docs/features/software-templates/"}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Other known limitations",id:"other-known-limitations",level:2}],f={toc:p};function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/overview/glossary#backstage-user-profiles"},"Contributors")," wanting to\ncreate developer portal experiences based on data from Kubernetes (e.g. for\ninteracting with ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom\nResources"),"\nbeyond the default behaviors of the existing Kubernetes plugin) can leverage the\nKubernetes backend plugin's proxy endpoint to allow them to make arbitrary\nrequests to the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/"},"REST\nAPI"),"."),(0,n.kt)("p",null,"Here is a snippet fetching namespaces from a cluster configured with the\n",(0,n.kt)("inlineCode",{parentName:"p"},"google")," ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/kubernetes/configuration#clustersauthprovider"},"auth provider"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  discoveryApiRef,\n  googleAuthApiRef,\n  useApi,\n} from '@backstage/core-plugin-api';\n\nconst CLUSTER_NAME = ''; // use a known cluster name\n\n// get a bearer token from Google\nconst googleAuthApi = useApi(googleAuthApiRef);\nconst token = await googleAuthApi.getAccessToken(\n  'https://www.googleapis.com/auth/cloud-platform',\n);\n\nconst discoveryApi = useApi(discoveryApiRef);\nconst kubernetesBaseUrl = await discoveryApi.getBaseUrl('kubernetes');\nconst kubernetesProxyEndpoint = `${kubernetesBaseUrl}/proxy`;\n\n// fetch namespaces\nawait fetch(`${kubernetesProxyEndpoint}/api/v1/namespaces`, {\n  method: 'GET',\n  headers: {\n    'X-Kubernetes-Cluster': CLUSTER_NAME,\n    Authorization: `Bearer ${token}`,\n  },\n});\n")),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The proxy will interpret the\n",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/reference/plugin-kubernetes-backend.header_kubernetes_cluster"},(0,n.kt)("inlineCode",{parentName:"a"},"X-Kubernetes-Cluster"),"\nheader"),"\nas the name of the cluster to target. This name will be compared to each cluster\nreturned by all the configured ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/kubernetes/configuration#clusterlocatormethods"},"cluster\nlocators"),"\n-- the first cluster whose ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/kubernetes/configuration#clustersname"},(0,n.kt)("inlineCode",{parentName:"a"},"name")," field")," matches\nthe value in the header will be targeted."),(0,n.kt)("p",null,"Then the request will be forwarded verbatim (but with the endpoint's base URL\nprefix stripped) to the cluster."),(0,n.kt)("h2",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,"Until some security and permission decisions are made (see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/13026/files#r1029376939"},"this\nconversation"),"\nfor context), contributors consuming the proxy endpoint in their plugin code are\nresponsible for negotiating their own bearer token out-of-band. This requires\nknowing some auth details about the cluster being contacted -- in practice, only\nclusters with ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/kubernetes/authentication#client-side-providers"},"client side auth\nproviders")," can reasonably be reached."),(0,n.kt)("p",null,"The proxy has no provisions for mTLS, so it cannot be used to connect to\nclusters using the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#x509-client-certs"},"x509 Client\nCerts"),"\nauthentication strategy. ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#putting-a-bearer-token-in-a-request"},"Bearer\ntokens"),"\nwill be forwarded as-is."),(0,n.kt)("h2",{id:"other-known-limitations"},"Other known limitations"),(0,n.kt)("p",null,"The proxy as it was released in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/docs/releases/v1.9.0-changelog.md#patch-changes-15"},"Backstage\n1.9"),"\nhas a known bug:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/backstage/backstage/issues/15901"},"#15901")," - it cannot\nreliably target clusters who share the same name with another located cluster.")))}b.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,c=o(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))r.call(i,l)&&(c[l]=i[l]);if(t){s=t(i);for(var p=0;p<s.length;p++)n.call(i,s[p])&&(c[s[p]]=i[s[p]])}}return c}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,s=60110,c=60112;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function y(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||h}function g(){}function m(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var k=m.prototype=new g;k.constructor=m,n(k,y.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:v.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+A(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),_(i,t,r,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+A(s=e[u],u);c+=_(s,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=_(s=s.value,t,r,l=n+A(s,u++),i);else if("object"===s)throw t=""+e,Error(b(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function C(){var e=N.current;if(null===e)throw Error(b(321));return e}},827378:(e,t,r)=>{r(541535)}}]);