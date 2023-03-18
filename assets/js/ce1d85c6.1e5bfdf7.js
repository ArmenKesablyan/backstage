/*! For license information please see ce1d85c6.1e5bfdf7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[126120],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},112838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(827378);var r=n(603905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"how-to-guides",title:"Search How-To guides",sidebar_label:"How-To guides",description:"Search How To guides"},l=void 0,c={unversionedId:"features/search/how-to-guides",id:"features/search/how-to-guides",title:"Search How-To guides",description:"Search How To guides",source:"@site/../docs/features/search/how-to-guides.md",sourceDirName:"features/search",slug:"/features/search/how-to-guides",permalink:"/docs/features/search/how-to-guides",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/how-to-guides.md",tags:[],version:"current",frontMatter:{id:"how-to-guides",title:"Search How-To guides",sidebar_label:"How-To guides",description:"Search How To guides"},sidebar:"docs",previous:{title:"Search Engines",permalink:"/docs/features/search/search-engines"},next:{title:"Overview",permalink:"/docs/features/techdocs/"}},u={},p=[{value:"How to implement your own Search API",id:"how-to-implement-your-own-search-api",level:2},{value:"How to index TechDocs documents",id:"how-to-index-techdocs-documents",level:2},{value:"How to customize fields in the Software Catalog index",id:"how-to-customize-fields-in-the-software-catalog-index",level:2},{value:"How to limit what can be searched in the Software Catalog",id:"how-to-limit-what-can-be-searched-in-the-software-catalog",level:2},{value:"How to customize search results highlighting styling",id:"how-to-customize-search-results-highlighting-styling",level:2},{value:"How to render search results using extensions",id:"how-to-render-search-results-using-extensions",level:2},{value:"1. Providing an extension in your plugin package",id:"1-providing-an-extension-in-your-plugin-package",level:3},{value:"2. Using an extension in your Backstage app",id:"2-using-an-extension-in-your-backstage-app",level:3}],h={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-implement-your-own-search-api"},"How to implement your own Search API"),(0,r.kt)("p",null,"The Search plugin provides implementation of one primary API by default: the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/db2666b980853c281b8fe77905d7639c5d255f13/plugins/search/src/apis.ts#L35"},"SearchApi"),",\nwhich is responsible for talking to the search-backend to query search results."),(0,r.kt)("p",null,"There may be occasions where you need to implement this API yourself, to\ncustomize it to your own needs - for example if you have your own search backend\nthat you want to talk to. The purpose of this guide is to walk you through how\nto do that in two steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchApi"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/db2666b980853c281b8fe77905d7639c5d255f13/plugins/search/src/apis.ts#L31"},"interface"),"\naccording to your needs."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class SearchClient implements SearchApi {\n  // your implementation\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Override the API ref ",(0,r.kt)("inlineCode",{parentName:"p"},"searchApiRef")," with your new implemented API in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiFactories"),".\n",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/api/utility-apis#app-apis"},"Read more about App APIs"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = createApp({\n  apis: [\n    // SearchApi\n    createApiFactory({\n      api: searchApiRef,\n      deps: { discovery: discoveryApiRef },\n      factory({ discovery }) {\n        return new SearchClient({ discoveryApi: discovery });\n      },\n    }),\n  ],\n});\n")))),(0,r.kt)("h2",{id:"how-to-index-techdocs-documents"},"How to index TechDocs documents"),(0,r.kt)("p",null,"The TechDocs plugin has supported integrations to Search, meaning that it\nprovides a default collator factory ready to be used."),(0,r.kt)("p",null,"The purpose of this guide is to walk you through how to register the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/techdocs-backend/src/search/DefaultTechDocsCollatorFactory.ts"},"DefaultTechDocsCollatorFactory"),"\nin your App, so that you can get TechDocs documents indexed."),(0,r.kt)("p",null,"If you have been through the\n",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/search/getting-started"},"Getting Started with Search guide"),",\nyou should have the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/search.ts")," file available. If\nso, you can go ahead and follow this guide - if not, start by going through the\ngetting started guide."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultTechDocsCollatorFactory")," from\n",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-techdocs-backend"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { DefaultTechDocsCollatorFactory } from '@backstage/plugin-techdocs-backend';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there isn't an existing schedule you'd like to run the collator on, be\nsure to create it first. Something like..."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Duration } from 'luxon';\n\nconst every10MinutesSchedule = env.scheduler.createScheduledTaskRunner({\n  frequency: Duration.fromObject({ seconds: 600 }),\n  timeout: Duration.fromObject({ seconds: 900 }),\n  initialDelay: Duration.fromObject({ seconds: 3 }),\n});\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Register the ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultTechDocsCollatorFactory")," with the IndexBuilder."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"indexBuilder.addCollator({\n  schedule: every10MinutesSchedule,\n  factory: DefaultTechDocsCollatorFactory.fromConfig(env.config, {\n    discovery: env.discovery,\n    logger: env.logger,\n    tokenManager: env.tokenManager,\n  }),\n});\n")))),(0,r.kt)("p",null,"You should now have your TechDocs documents indexed to your search engine of\nchoice!"),(0,r.kt)("p",null,"If you want your users to be able to filter down to the techdocs type when\nsearching, you can update your ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchPage.tsx")," file in\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/components/search")," by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"techdocs")," to the list of values\nof the ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchType")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="packages/app/src/components/search/SearchPage.tsx"',title:'"packages/app/src/components/search/SearchPage.tsx"'},"<Paper className={classes.filters}>\n  <SearchType\n    values={['techdocs', 'software-catalog']}\n    name=\"type\"\n    defaultValue=\"software-catalog\"\n  />\n  {/* ... */}\n</Paper>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Check out the documentation around ",(0,r.kt)("a",{parentName:"p",href:"/docs/plugins/integrating-search-into-plugins#create-a-collator"},"integrating search into plugins")," for how to create your own collator.")),(0,r.kt)("h2",{id:"how-to-customize-fields-in-the-software-catalog-index"},"How to customize fields in the Software Catalog index"),(0,r.kt)("p",null,"Sometimes you will might want to have ability to control\nwhich data passes to search index in catalog collator, or to customize data for specific kind.\nYou can easily do that by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"entityTransformer")," callback to ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultCatalogCollatorFactory"),".\nYou can either just simply amend default behaviour, or even to write completely new document\n(which should follow some required basic structure though)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," cannot be modified via a ",(0,r.kt)("inlineCode",{parentName:"p"},"entityTransformer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," can be modified only through ",(0,r.kt)("inlineCode",{parentName:"p"},"locationTemplate"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/plugins/search.ts"',title:'"packages/backend/src/plugins/search.ts"'},"const entityTransformer: CatalogCollatorEntityTransformer = (\n  entity: Entity,\n) => {\n  if (entity.kind === 'SomeKind') {\n    return {\n      // customize here output for 'SomeKind' kind\n    };\n  }\n\n  return {\n    // and customize default output\n    ...defaultCatalogCollatorEntityTransformer(entity),\n    text: 'my super cool text',\n  };\n};\n\nindexBuilder.addCollator({\n  collator: DefaultCatalogCollatorFactory.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n    /* highlight-add-next-line */\n    entityTransformer,\n  }),\n});\n")),(0,r.kt)("h2",{id:"how-to-limit-what-can-be-searched-in-the-software-catalog"},"How to limit what can be searched in the Software Catalog"),(0,r.kt)("p",null,"The Software Catalog includes a wealth of information about the components,\nsystems, groups, users, and other aspects of your software ecosystem. However,\nyou may not always want ",(0,r.kt)("em",{parentName:"p"},"every")," aspect to appear when a user searches the\ncatalog. Examples include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Entities of kind ",(0,r.kt)("inlineCode",{parentName:"li"},"Location"),", which are often not useful to Backstage users."),(0,r.kt)("li",{parentName:"ul"},"Entities of kind ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Group"),", if you'd prefer that users and groups be\nexposed to search in a different way (or not at all).")),(0,r.kt)("p",null,"It's possible to write your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/search/concepts#collators"},"Collator")," to control\nexactly what's available to search, (or a ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/search/concepts#decorators"},"Decorator"),"\nto filter things out here and there), but the ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultCatalogCollator")," that's\nprovided by ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-catalog-backend")," offers some configuration too!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/plugins/search.ts"',title:'"packages/backend/src/plugins/search.ts"'},"indexBuilder.addCollator({\n  defaultRefreshIntervalSeconds: 600,\n  collator: DefaultCatalogCollator.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n    /* highlight-add-start */\n    filter: {\n      kind: ['API', 'Component', 'Domain', 'Group', 'System', 'User'],\n    },\n    /* highlight-add-end */\n  }),\n});\n")),(0,r.kt)("p",null,"As shown above, you can add a catalog entity filter to narrow down what catalog\nentities are indexed by the search engine."),(0,r.kt)("h2",{id:"how-to-customize-search-results-highlighting-styling"},"How to customize search results highlighting styling"),(0,r.kt)("p",null,"The default highlighting styling for matched terms in search results is your\nbrowsers default styles for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<mark>")," HTML tag. If you want to customize\nhow highlighted terms look you can follow Backstage's guide on how to\n",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/getting-started/app-custom-theme"},"Customize the look-and-feel of your App"),"\nto create an override with your preferred styling."),(0,r.kt)("p",null,"For example, the following will result in highlighted terms to be bold & underlined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const highlightOverride = {\n  BackstageHighlightedSearchResultText: {\n    highlight: {\n      color: 'inherit',\n      backgroundColor: 'inherit',\n      fontWeight: 'bold',\n      textDecoration: 'underline',\n    },\n  },\n};\n")),(0,r.kt)("h2",{id:"how-to-render-search-results-using-extensions"},"How to render search results using extensions"),(0,r.kt)("p",null,"Extensions for search results let you customize components used to render search result items, It is possible to provide your own search result item extensions or use the ones provided by plugin packages:"),(0,r.kt)("h3",{id:"1-providing-an-extension-in-your-plugin-package"},"1. Providing an extension in your plugin package"),(0,r.kt)("p",null,"Using the example below, you can provide an extension to be used as a default result item:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="plugins/your-plugin/src/plugin.ts"',title:'"plugins/your-plugin/src/plugin.ts"'},"import { createPlugin } from '@backstage/core-plugin-api';\nimport { createSearchResultListItemExtension } from '@backstage/plugin-search-react';\n\nconst plugin = createPlugin({ id: 'YOUR_PLUGIN_ID' });\n\nexport const YourSearchResultListItemExtension = plugin.provide(\n  createSearchResultListItemExtension({\n    name: 'YourSearchResultListItem',\n    component: () =>\n      import('./components').then(m => m.YourSearchResultListItem),\n  }),\n);\n")),(0,r.kt)("p",null,"If your list item accept props, you can extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchResultListItemExtensionProps")," with your component specific props:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export const YourSearchResultListItemExtension: (\n  props: SearchResultListItemExtensionProps<YourSearchResultListItemProps>,\n) => JSX.Element | null = plugin.provide(\n  createSearchResultListItemExtension({\n    name: 'YourSearchResultListItem',\n    component: () =>\n      import('./components').then(m => m.YourSearchResultListItem),\n  }),\n);\n")),(0,r.kt)("p",null,"Additionally, you can define a predicate function that receives a result and returns whether your extension should be used to render it or not:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="plugins/your-plugin/src/plugin.ts"',title:'"plugins/your-plugin/src/plugin.ts"'},"import { createPlugin } from '@backstage/core-plugin-api';\nimport { createSearchResultListItemExtension } from '@backstage/plugin-search-react';\n\nconst plugin = createPlugin({ id: 'YOUR_PLUGIN_ID' });\n\nexport const YourSearchResultListItemExtension = plugin.provide(\n  createSearchResultListItemExtension({\n    name: 'YourSearchResultListItem',\n    component: () =>\n      import('./components').then(m => m.YourSearchResultListItem),\n    // Only results matching your type will be rendered by this extension\n    predicate: result => result.type === 'YOUR_RESULT_TYPE',\n  }),\n);\n")),(0,r.kt)("p",null,"Remember to export your new extension:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="plugins/your-plugin/src/index.ts"',title:'"plugins/your-plugin/src/index.ts"'},"export { YourSearchResultListItem } from './plugin.ts';\n")),(0,r.kt)("p",null,"For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/reference/plugin-search-react.createsearchresultlistitemextension"},"createSearchResultListItemExtension")," API reference."),(0,r.kt)("h3",{id:"2-using-an-extension-in-your-backstage-app"},"2. Using an extension in your Backstage app"),(0,r.kt)("p",null,"Now that you know how a search result item is provided, let's finally see how they can be used, for example, to compose a page in your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="packages/app/src/components/searchPage.tsx"',title:'"packages/app/src/components/searchPage.tsx"'},"import React from 'react';\n\nimport { Grid, Paper } from '@material-ui/core';\nimport BuildIcon from '@material-ui/icons/Build';\n\nimport {\n  Page,\n  Header,\n  Content,\n  DocsIcon,\n  CatalogIcon,\n} from '@backstage/core-components';\nimport { SearchBar, SearchResult } from '@backstage/plugin-search-react';\n\n// Your search result item extension\nimport { YourSearchResultListItem } from '@backstage/your-plugin';\n\n// Extensions provided by other plugin developers\nimport { ToolSearchResultListItem } from '@backstage/plugin-explore';\nimport { TechDocsSearchResultListItem } from '@backstage/plugin-techdocs';\nimport { CatalogSearchResultListItem } from '@internal/plugin-catalog-customized';\n\n// This example omits other components, like filter and pagination\nconst SearchPage = () => (\n  <Page themeId=\"home\">\n    <Header title=\"Search\" />\n    <Content>\n      <Grid container direction=\"row\">\n        <Grid item xs={12}>\n          <Paper>\n            <SearchBar />\n          </Paper>\n        </Grid>\n        <Grid item xs={12}>\n          <SearchResult>\n            <YourSearchResultListItem />\n            <CatalogSearchResultListItem icon={<CatalogIcon />} />\n            <TechDocsSearchResultListItem icon={<DocsIcon />} />\n            <ToolSearchResultListItem icon={<BuildIcon />} />\n          </SearchResult>\n        </Grid>\n      </Grid>\n    </Content>\n  </Page>\n);\n\nexport const searchPage = <SearchPage />;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important"),": A default result item extension should be placed as the last child, so it can be used only when no other extensions match the result being rendered. If a non-default extension is specified, the ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultResultListItem")," component will be used.")),(0,r.kt)("p",null,"As another example, here's a search modal that renders results with extensions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="packages/app/src/components/searchModal.tsx"',title:'"packages/app/src/components/searchModal.tsx"'},"import React from 'react';\n\nimport { DialogContent, DialogTitle, Paper } from '@material-ui/core';\nimport BuildIcon from '@material-ui/icons/Build';\n\nimport { DocsIcon, CatalogIcon } from '@backstage/core-components';\nimport { SearchBar, SearchResult } from '@backstage/plugin-search-react';\n\n// Your search result item extension\nimport { YourSearchResultListItem } from '@backstage/your-plugin';\n\n// Extensions provided by other plugin developers\nimport { ToolSearchResultListItem } from '@backstage/plugin-explore';\nimport { TechDocsSearchResultListItem } from '@backstage/plugin-techdocs';\nimport { CatalogSearchResultListItem } from '@internal/plugin-catalog-customized';\n\nexport const SearchModal = ({ toggleModal }: { toggleModal: () => void }) => (\n  <>\n    <DialogTitle>\n      <Paper>\n        <SearchBar />\n      </Paper>\n    </DialogTitle>\n    <DialogContent>\n      <SearchResult onClick={toggleModal}>\n        <CatalogSearchResultListItem icon={<CatalogIcon />} />\n        <TechDocsSearchResultListItem icon={<DocsIcon />} />\n        <ToolSearchResultListItem icon={<BuildIcon />} />\n        {/* As a \"default\" extension, it does not define a predicate function,\n        so it must be the last child to render results that do not match the above extensions */}\n        <YourSearchResultListItem />\n      </SearchResult>\n    </DialogContent>\n  </>\n);\n")),(0,r.kt)("p",null,"There are other more specific search results layout components that also accept result item extensions, check their documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/storybook/?path=/story/plugins-search-searchresultlist--with-result-item-extensions"},"SearchResultList")," and ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/storybook/?path=/story/plugins-search-searchresultgroup--with-result-item-extensions"},"SearchResultGroup"),"."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)r.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,s=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function f(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function y(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}f.prototype.isReactComponent={},f.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=f.prototype;var b=k.prototype=new y;b.constructor=k,r(b,f.prototype),b.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,r)&&!x.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:w.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+O(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),I(i,t,n,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+O(s=e[c],c);l+=I(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=I(s=s.value,t,n,u=r+O(s,c++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function P(e,t,n){if(null==e)return e;var r=[],o=0;return I(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function j(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function T(){var e=R.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);