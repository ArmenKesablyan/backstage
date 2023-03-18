/*! For license information please see 38965726.0bf36860.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[658449],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},209716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(827378);var a=n(603905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"writing-templates",title:"Writing Templates",description:"Details around creating your own custom Software Templates"},l=void 0,p={unversionedId:"features/software-templates/writing-templates",id:"features/software-templates/writing-templates",title:"Writing Templates",description:"Details around creating your own custom Software Templates",source:"@site/../docs/features/software-templates/writing-templates.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/writing-templates",permalink:"/docs/features/software-templates/writing-templates",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/writing-templates.md",tags:[],version:"current",frontMatter:{id:"writing-templates",title:"Writing Templates",description:"Details around creating your own custom Software Templates"},sidebar:"docs",previous:{title:"Adding your own Templates",permalink:"/docs/features/software-templates/adding-templates"},next:{title:"Input Examples",permalink:"/docs/features/software-templates/input-examples"}},u={},c=[{value:"<code>spec.parameters</code> - <code>FormStep | FormStep[]</code>",id:"specparameters---formstep--formstep",level:2},{value:"Hide or mask sensitive data on Review step",id:"hide-or-mask-sensitive-data-on-review-step",level:3},{value:"Custom step layouts",id:"custom-step-layouts",level:3},{value:"Remove sections or fields based on feature flags",id:"remove-sections-or-fields-based-on-feature-flags",level:3},{value:"The Repository Picker",id:"the-repository-picker",level:3},{value:"Using the Users <code>oauth</code> token",id:"using-the-users-oauth-token",level:4},{value:"Accessing the signed-in users details",id:"accessing-the-signed-in-users-details",level:3},{value:"The Owner Picker",id:"the-owner-picker",level:3},{value:"<code>spec.steps</code> - <code>Action[]</code>",id:"specsteps---action",level:2},{value:"Outputs",id:"outputs",level:2},{value:"The templating syntax",id:"the-templating-syntax",level:2}],m={toc:c};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Templates are stored in the ",(0,a.kt)("strong",{parentName:"p"},"Software Catalog")," under a kind ",(0,a.kt)("inlineCode",{parentName:"p"},"Template"),". You\ncan create your own templates with a small ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," definition which describes the\ntemplate and its metadata, along with some input variables that your template\nwill need, and then a list of actions which are then executed by the scaffolding\nservice."),(0,a.kt)("p",null,"Let's take a look at a simple example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Notice the v1beta3 version\napiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\n# some metadata about the template itself\nmetadata:\n  name: v1beta3-demo\n  title: Test Action template\n  description: scaffolder v1beta3 template demo\nspec:\n  owner: backstage/techdocs-core\n  type: service\n\n  # these are the steps which are rendered in the frontend with the form input\n  parameters:\n    - title: Fill in some steps\n      required:\n        - name\n      properties:\n        name:\n          title: Name\n          type: string\n          description: Unique name of the component\n          ui:autofocus: true\n          ui:options:\n            rows: 5\n        owner:\n          title: Owner\n          type: string\n          description: Owner of the component\n          ui:field: OwnerPicker\n          ui:options:\n            catalogFilter:\n              kind: Group\n    - title: Choose a location\n      required:\n        - repoUrl\n      properties:\n        repoUrl:\n          title: Repository Location\n          type: string\n          ui:field: RepoUrlPicker\n          ui:options:\n            allowedHosts:\n              - github.com\n\n  # here's the steps that are executed in series in the scaffolder backend\n  steps:\n    - id: fetch-base\n      name: Fetch Base\n      action: fetch:template\n      input:\n        url: ./template\n        values:\n          name: ${{ parameters.name }}\n          owner: ${{ parameters.owner }}\n\n    - id: fetch-docs\n      name: Fetch Docs\n      action: fetch:plain\n      input:\n        targetPath: ./community\n        url: https://github.com/backstage/community/tree/main/backstage-community-sessions\n\n    - id: publish\n      name: Publish\n      action: publish:github\n      input:\n        allowedHosts: ['github.com']\n        description: This is ${{ parameters.name }}\n        repoUrl: ${{ parameters.repoUrl }}\n\n    - id: register\n      name: Register\n      action: catalog:register\n      input:\n        repoContentsUrl: ${{ steps['publish'].output.repoContentsUrl }}\n        catalogInfoPath: '/catalog-info.yaml'\n\n  # some outputs which are saved along with the job for use in the frontend\n  output:\n    links:\n      - title: Repository\n        url: ${{ steps['publish'].output.remoteUrl }}\n      - title: Open in catalog\n        icon: catalog\n        entityRef: ${{ steps['register'].output.entityRef }}\n")),(0,a.kt)("p",null,"Let's dive in and pick apart what each of these sections do and what they are."),(0,a.kt)("h2",{id:"specparameters---formstep--formstep"},(0,a.kt)("inlineCode",{parentName:"h2"},"spec.parameters")," - ",(0,a.kt)("inlineCode",{parentName:"h2"},"FormStep | FormStep[]")),(0,a.kt)("p",null,"These ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters")," are template variables which can be modified in the frontend\nas a sequence. It can either be one ",(0,a.kt)("inlineCode",{parentName:"p"},"Step")," if you just want one big list of\ndifferent fields in the frontend, or it can be broken up into multiple different\nsteps which would be rendered as different steps in the scaffolder plugin\nfrontend."),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Step")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONSchema")," with some extra goodies for styling what it might\nlook like in the frontend. For these steps we rely very heavily on this\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"library"),". They have some\n",(0,a.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form/docs/"},"great docs")," and a\n",(0,a.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form"},"playground")," where you can\nplay around with some examples."),(0,a.kt)("p",null,"There's another option for that library called ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema")," which we've taken\nadvantage of, and we've merged it with the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONSchema")," that you\nprovide to the library. These are the little ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:*")," properties that you can see\nin the step definitions."),(0,a.kt)("p",null,"For example if we take the ",(0,a.kt)("strong",{parentName:"p"},"simple")," example from the playground it looks like\nthis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// jsonSchema:\n{\n  "title": "A registration form",\n  "description": "A simple form example.",\n  "type": "object",\n  "required": [\n    "firstName",\n    "lastName"\n  ],\n  "properties": {\n    "firstName": {\n      "type": "string",\n      "title": "First name",\n      "default": "Chuck"\n    },\n    "lastName": {\n      "type": "string",\n      "title": "Last name"\n    },\n    "nicknames":{\n      "type": "array",\n      "items": {\n        "type": "string"\n      }\n    },\n    "telephone": {\n      "type": "string",\n      "title": "Telephone",\n      "minLength": 10\n    }\n  }\n}\n\n// uiSchema:\n{\n  "firstName": {\n    "ui:autofocus": true,\n    "ui:emptyValue": "",\n    "ui:autocomplete": "given-name"\n  },\n  "lastName": {\n    "ui:emptyValue": "",\n    "ui:autocomplete": "family-name"\n  },\n  "nicknames": {\n    "ui:options":{\n      "orderable": false\n    }\n  },\n  "telephone": {\n    "ui:options": {\n      "inputType": "tel"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"It would look something like the following in a template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\nmetadata:\n  name: v1beta3-demo\n  title: Test Action template\n  description: scaffolder v1beta3 template demo\nspec:\n  owner: backstage/techdocs-core\n  type: service\n\n  parameters:\n    - title: A registration form\n      description: A simple form example.\n      type: object\n      required:\n        - firstName\n        - lastName\n      properties:\n        firstName:\n          type: string\n          title: First name\n          default: Chuck\n          ui:autofocus: true\n          ui:emptyValue: ''\n          ui:autocomplete: given-name\n        lastName:\n          type: string\n          title: Last name\n          ui:emptyValue: ''\n          ui:autocomplete: family-name\n        nicknames:\n          type: array\n          items:\n            type: string\n          ui:options:\n            orderable: false\n        telephone:\n          type: string\n          title: Telephone\n          minLength: 10\n          ui:options:\n            inputType: tel\n")),(0,a.kt)("h3",{id:"hide-or-mask-sensitive-data-on-review-step"},"Hide or mask sensitive data on Review step"),(0,a.kt)("p",null,"Sometimes, specially in custom fields, you collect some data on Create form that\nmust not be shown to the user on Review step. To hide or mask this data, you can\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:widget: password")," or set some properties of ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:backstage"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- title: Hide or mask values\n  properties:\n    password:\n      title: Password\n      type: string\n      ui:widget: password # will print '******' as value for property 'password' on Review Step\n    masked:\n      title: Masked\n      type: string\n      ui:backstage:\n        review:\n          mask: '<some-value-to-show>' # will print '<some-value-to-show>' as value for property 'Masked' on Review Step\n    hidden:\n      title: Hidden\n      type: string\n      ui:backstage:\n        review:\n          show: false # won't print any info about 'hidden' property on Review Step\n")),(0,a.kt)("h3",{id:"custom-step-layouts"},"Custom step layouts"),(0,a.kt)("p",null,"If you find that the default layout of the form used in a particular step does not meet your needs then you can supply your own ",(0,a.kt)("a",{parentName:"p",href:"/docs/features/software-templates/writing-custom-step-layouts"},"custom step layout"),"."),(0,a.kt)("h3",{id:"remove-sections-or-fields-based-on-feature-flags"},"Remove sections or fields based on feature flags"),(0,a.kt)("p",null,"Based on feature flags you can hide sections or even only fields of your\ntemplate. This is a good use case if you want to test experimental parameters in\na production environment. To use it let's look at the following template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  type: website\n  owner: team-a\n  parameters:\n    - name: Enter some stuff\n      description: Enter some stuff\n      backstage:featureFlag: experimental-feature\n      properties:\n        inputString:\n          type: string\n          title: string input test\n        inputObject:\n          type: object\n          title: object input test\n          description: a little nested thing never hurt anyone right?\n          properties:\n            first:\n              type: string\n              title: first\n              backstage:featureFlag: nested-experimental-feature\n            second:\n              type: number\n              title: second\n")),(0,a.kt)("p",null,"If you have a feature flag ",(0,a.kt)("inlineCode",{parentName:"p"},"experimental-feature")," active then\nyour first step would be shown. The same goes for the nested properties in the\nspec. Make sure to use the key ",(0,a.kt)("inlineCode",{parentName:"p"},"backstage:featureFlag")," in your templates if\nyou want to use this functionality."),(0,a.kt)("h3",{id:"the-repository-picker"},"The Repository Picker"),(0,a.kt)("p",null,"In order to make working with repository providers easier, we've built a custom\npicker that can be used by overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:field")," option in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema"),"\nfor a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," field. Instead of displaying a text input block it will render\nour custom component that we've built which makes it easy to select a repository\nprovider, and insert a project or owner, and repository name."),(0,a.kt)("p",null,"You can see it in the above full example which is a separate step and it looks a\nlittle like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- title: Choose a location\n  required:\n    - repoUrl\n  properties:\n    repoUrl:\n      title: Repository Location\n      type: string\n      ui:field: RepoUrlPicker\n      ui:options:\n        allowedHosts:\n          - github.com\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"allowedHosts")," part should be set to where you wish to enable this template\nto publish to. And it can be any host that is listed in your ",(0,a.kt)("inlineCode",{parentName:"p"},"integrations"),"\nconfig in ",(0,a.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),"."),(0,a.kt)("p",null,"Besides specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"allowedHosts")," you can also restrict the template to publish to\nrepositories owned by specific users/groups/namespaces by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"allowedOwners"),"\noption. With the ",(0,a.kt)("inlineCode",{parentName:"p"},"allowedRepos")," option you are able to narrow it down further to a\nspecific set of repository names. A full example could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- title: Choose a location\n  required:\n    - repoUrl\n  properties:\n    repoUrl:\n      title: Repository Location\n      type: string\n      ui:field: RepoUrlPicker\n      ui:options:\n        allowedHosts:\n          - github.com\n        allowedOwners:\n          - backstage\n          - someGithubUser\n        allowedRepos:\n          - backstage\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RepoUrlPicker")," is a custom field that we provide part of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"plugin-scaffolder"),". You can provide your own custom fields by\n",(0,a.kt)("a",{parentName:"p",href:"/docs/features/software-templates/writing-custom-field-extensions"},"writing your own Custom Field Extensions")),(0,a.kt)("h4",{id:"using-the-users-oauth-token"},"Using the Users ",(0,a.kt)("inlineCode",{parentName:"h4"},"oauth")," token"),(0,a.kt)("p",null,"There's a little bit of extra magic that you get out of the box when using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"RepoUrlPicker")," as a field input. You can provide some additional options under\n",(0,a.kt)("inlineCode",{parentName:"p"},"ui:options")," to allow the ",(0,a.kt)("inlineCode",{parentName:"p"},"RepoUrlPicker")," to grab an ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth")," token for the user\nfor the required ",(0,a.kt)("inlineCode",{parentName:"p"},"repository"),"."),(0,a.kt)("p",null,"This is great for when you are wanting to create a new repository, or wanting to\nperform operations on top of an existing repository."),(0,a.kt)("p",null,"A sample template that takes advantage of this is like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\nmetadata:\n  name: v1beta3-demo\n  title: Test Action template\n  description: scaffolder v1beta3 template demo\nspec:\n  owner: backstage/techdocs-core\n  type: service\n\n  parameters:\n    ...\n\n    - title: Choose a location\n      required:\n        - repoUrl\n      properties:\n        repoUrl:\n          title: Repository Location\n          type: string\n          ui:field: RepoUrlPicker\n          ui:options:\n            # Here's the option you can pass to the RepoUrlPicker\n            requestUserCredentials:\n              secretsKey: USER_OAUTH_TOKEN\n              additionalScopes:\n                github:\n                  - workflow\n            allowedHosts:\n              - github.com\n    ...\n\n  steps:\n    ...\n\n    - id: publish\n      name: Publish\n      action: publish:github\n      input:\n        allowedHosts: ['github.com']\n        description: This is ${{ parameters.name }}\n        repoUrl: ${{ parameters.repoUrl }}\n        # here's where the secret can be used\n        token: ${{ secrets.USER_OAUTH_TOKEN }}\n\n    ...\n")),(0,a.kt)("p",null,"You will see from above that there is an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"requestUserCredentials"),"\nobject that is passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"RepoUrlPicker"),". This object defines what the\nreturned ",(0,a.kt)("inlineCode",{parentName:"p"},"secret")," should be stored as when accessing using\n",(0,a.kt)("inlineCode",{parentName:"p"},"${{ secrets.secretName }}"),", in this case it is ",(0,a.kt)("inlineCode",{parentName:"p"},"USER_OAUTH_TOKEN"),". And then you\nwill see that there is an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," field into the ",(0,a.kt)("inlineCode",{parentName:"p"},"publish:github"),"\naction called ",(0,a.kt)("inlineCode",{parentName:"p"},"token"),", in which you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"secret")," like so:\n",(0,a.kt)("inlineCode",{parentName:"p"},"token: ${{ secrets.USER_OAUTH_TOKEN }}"),"."),(0,a.kt)("p",null,"There's also the ability to pass additional scopes when requesting the ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth"),"\ntoken from the user, which you can do on a per-provider basis, in case your\ntemplate can be published to multiple providers."),(0,a.kt)("p",null,"Note, that you will need to configure an ",(0,a.kt)("a",{parentName:"p",href:"/docs/auth/#configuring-authentication-providers"},"authentication provider"),", alongside the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/auth/#scaffolder-configuration-software-templates"},(0,a.kt)("inlineCode",{parentName:"a"},"ScmAuthApi"))," for your source code management (SCM) service to make this feature work."),(0,a.kt)("h3",{id:"accessing-the-signed-in-users-details"},"Accessing the signed-in users details"),(0,a.kt)("p",null,"Sometimes when authoring templates, you'll want to access the user that is running the template, and get details from the profile or the users ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," in the Catalog."),(0,a.kt)("p",null,"If you have enabled a sign in provider and have a ",(0,a.kt)("a",{parentName:"p",href:"/docs/auth/identity-resolver"},"sign in resolver")," that points to a user in the Catalog, then you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"${{ user.entity }}")," templating expression to access the raw entity from the Catalog."),(0,a.kt)("p",null,"This can be particularly useful if you have processors setup in the Catalog to write ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.profile.email")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"User Entities")," to reference them and pass them into actions like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  steps:\n    action: publish:github\n    ...\n    input:\n        ...\n        gitAuthorName: ${{ user.entity.metadata.name }}\n        gitAuthorEmail: ${{ user.entity.spec.profile.email }}\n")),(0,a.kt)("p",null,"You also have access to ",(0,a.kt)("inlineCode",{parentName:"p"},"user.entity.metadata.annotations")," too, so if you have some other additional information stored in there, you reference those too."),(0,a.kt)("h3",{id:"the-owner-picker"},"The Owner Picker"),(0,a.kt)("p",null,"When the scaffolder needs to add new components to the catalog, it needs to have\nan owner for them. Ideally, users should be able to select an owner when they go\nthrough the scaffolder form from the users and groups already known to\nBackstage. The ",(0,a.kt)("inlineCode",{parentName:"p"},"OwnerPicker")," is a custom field that generates a searchable list\nof groups and/or users already in the catalog to pick an owner from. You can\nspecify which of the two kinds (or both) are listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"catalogFilter.kind")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    catalogFilter:\n      kind: [Group, User]\n")),(0,a.kt)("h2",{id:"specsteps---action"},(0,a.kt)("inlineCode",{parentName:"h2"},"spec.steps")," - ",(0,a.kt)("inlineCode",{parentName:"h2"},"Action[]")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"steps")," is an array of the things that you want to happen part of this\ntemplate. These follow the same standard format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: fetch-base # A unique id for the step\n  name: Fetch Base # A title displayed in the frontend\n  if: ${{ parameters.name }} # Optional condition, skip the step if not truthy\n  action: fetch:template # An action to call\n  input: # Input that is passed as arguments to the action handler\n    url: ./template\n    values:\n      name: ${{ parameters.name }}\n")),(0,a.kt)("p",null,"By default we ship some ",(0,a.kt)("a",{parentName:"p",href:"/docs/features/software-templates/builtin-actions"},"built in actions")," that you can\ntake a look at, or you can\n",(0,a.kt)("a",{parentName:"p",href:"/docs/features/software-templates/writing-custom-actions"},"create your own custom actions"),"."),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"Each individual step can output some variables that can be used in the\nscaffolder frontend for after the job is finished. This is useful for things\nlike linking to the entity that has been created with the backend, and also\nlinking to the created repository."),(0,a.kt)("p",null,"The main two that are used are the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"output:\n  links:\n    - title: Repository\n      url: ${{ steps['publish'].output.remoteUrl }} # link to the remote repository\n    - title: Open in catalog\n      icon: catalog\n      entityRef: ${{ steps['register'].output.entityRef }} # link to the entity that has been ingested to the catalog\n")),(0,a.kt)("h2",{id:"the-templating-syntax"},"The templating syntax"),(0,a.kt)("p",null,"You might have noticed variables wrapped in ",(0,a.kt)("inlineCode",{parentName:"p"},"${{ }}")," in the examples. These are\ntemplate strings for linking and gluing the different parts of the template\ntogether. All the form inputs from the ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters")," section will be available by\nusing this template syntax (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"${{ parameters.firstName }}")," inserts\nthe value of ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," from the parameters). This is great for passing the\nvalues from the form into different steps and reusing these input variables.\nThese template strings preserve the type of the parameter."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"${{ parameters.firstName }}")," pattern will work only in the template file.\nIf you want to start using values provided from the UI in your code, you will have to use\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"${{ values.firstName }}")," pattern. Additionally, you have to pass\nthe parameters from the UI to the input of the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch:template")," step."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\nmetadata:\n  name: v1beta3-demo\n  title: Test Action\n  description: scaffolder v1beta3 template demo\nspec:\n  owner: backstage/techdocs-core\n  type: service\n  parameters:\n    - title: Fill in some steps\n      required:\n        - name\n      properties:\n        name:\n          title: Name\n          type: string\n          description: Unique name of your project\n        urlParameter:\n          title: URL endpoint\n          type: string\n          description: URL endpoint at which the component can be reached\n          default: 'https://www.example.com'\n        enabledDB:\n          title: Enable Database\n          type: boolean\n          default: false\n  ...\n  steps:\n    - id: fetch-base\n      name: Fetch Base\n      action: fetch:template\n      input:\n        url: ./template\n        values:\n          name: ${{ parameters.name }}\n          url: ${{ parameters.urlParameter }}\n          enabledDB: ${{ parameters.enabledDB }}\n")),(0,a.kt)("p",null,"Afterwards, if you are using the builtin templating action, you can start using\nthe variables in your code. You can use also any other templating functions from\n",(0,a.kt)("a",{parentName:"p",href:"https://mozilla.github.io/nunjucks/templating.html#tags"},"Nunjucks")," as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "Hi my name is ${{ values.name }}, and you can fine me at ${{ values.url }}!"\n{% if values.enabledDB %}\necho "You have enabled your database!"\n{% endif %}\n')),(0,a.kt)("p",null,"As you can see above in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs")," section, ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"steps")," can also\noutput things. You can grab that output using ",(0,a.kt)("inlineCode",{parentName:"p"},"steps.$stepId.output.$property"),"."),(0,a.kt)("p",null,"You can read more about all the ",(0,a.kt)("inlineCode",{parentName:"p"},"inputs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"outputs")," defined in the actions in\ncode part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONSchema"),", or you can read more about our\n",(0,a.kt)("a",{parentName:"p",href:"/docs/features/software-templates/builtin-actions"},"built in actions"),"."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,o){for(var i,s,l=r(e),p=1;p<arguments.length;p++){for(var u in i=Object(arguments[p]))n.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var c=0;c<s.length;c++)a.call(i,s[c])&&(l[s[c]]=i[s[c]])}}return l}},541535:(e,t,n)=>{var a=n(862525),r=60103,o=60106;var i=60109,s=60110,l=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;r=c("react.element"),o=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),i=c("react.provider"),s=c("react.context"),l=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),u=c("react.lazy")}var m="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}function g(){}function k(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var b=k.prototype=new g;b.constructor=k,a(b,y.prototype),b.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var a,o={},i=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,a)&&!N.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];o.children=p}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:r,type:e,key:i,ref:s,props:o,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case o:l=!0}}if(l)return i=i(l=e),e=""===a?"."+T(l,0):a,Array.isArray(i)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),P(i,t,n,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=a+T(s=e[p],p);l+=P(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(s=e.next()).done;)l+=P(s=s.value,t,n,u=a+T(s,p++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function S(e,t,n){if(null==e)return e;var a=[],r=0;return P(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function U(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function R(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);