webpackJsonp([0],{Cs4I:function(t,e){},E95K:function(t,e){},FUOx:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("MMSg"),r=s.n(i),n=(s("doPI"),{name:"App",methods:{toggleMenu:function(t){alert(t)}}}),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("div",{staticClass:"navbar-burger",attrs:{role:"button","data-target":"mainMenu","aria-label":"menu","aria-expanded":"false"},on:{click:t.toggleMenu}},[s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),s("div",{staticClass:"navbar-menu",attrs:{id:"mainMenu"}},[s("div",{staticClass:"navbar-start"}),t._v(" "),s("div",{staticClass:"navbar-end"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/survey"}},[t._v("Survey")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/hamburgers"}},[t._v("Hamburgers")])],1)])]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var u=s("VU/8")(n,o,!1,function(t){s("rP+G")},null,null).exports,c=s("/ocq"),l={name:"Home",data:function(){return{msg:Date(),totalBurgers:5,yourName:""}},methods:{startSurvey:function(){var t=this.yourName&&this.yourName.trim()||null;t&&this.$router.push({name:"Survey",params:{name:t}})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hero is-primary"},[a("div",{staticClass:"hero-body image"},[a("img",{attrs:{src:s("mXZL"),alt:""}}),t._v(" "),a("div",{attrs:{id:"hero-title"}},[a("h1",{staticClass:"title is-size-1-desktop is-size-3-mobile"},[t._v("Hamburger Adoption Agency")]),t._v(" "),a("h2",{staticClass:"subtitle is-size-5-desktop is-size-7-mobile"},[t._v("est. "+t._s(t.msg))])])])]),t._v(" "),a("section",{staticClass:"section"},[a("p",[t._v("Welcome to the one and only Hamburger adoption Agency!\n      We currently have "+t._s(t.totalBurgers)+" burgers ready to take home!")]),t._v(" "),a("p",[a("b-field",[a("b-input",{attrs:{type:"text",placeholder:"Enter your name to begin..."},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.startSurvey(e):null}},model:{value:t.yourName,callback:function(e){t.yourName=e},expression:"yourName"}})],1)],1)])])},staticRenderFns:[]};var d=s("VU/8")(l,v,!1,function(t){s("u+f/")},"data-v-5cd94287",null).exports,m={name:"Survey",data:function(){return{visible:!0}},methods:{startQuiz:function(){this.visible=!this.visible,this.$router.push({path:this.$route.path+"/questions"})}},computed:{hasName:function(){return null!=this.$route.params.name}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"section"},[s("h1",[t._v("Hamburger Adoption Survey")]),t._v(" "),s("p",[t._v("Dear "+t._s(t.$route.params.name||"unknown user")+",\n   ")]),t._v(" "),s("p",[t._v("It's very important that we only allow the adoption of our burgers by compatible clients.\n   ")]),t._v(" "),t.hasName?s("div",[t._v("\n     Please complete the short quiz to see whether we have one that fits your lifestyle.\n     "),t.visible?s("div",[s("button",{staticClass:"button is-success",attrs:{id:"startQuiz"},on:{click:t.startQuiz}},[t._v("Start Quiz")])]):t._e()]):s("div",[s("b-message",{attrs:{title:"I know there's a link but...",type:"is-danger","has-icon":""}},[t._v("\n       Please go to the home page and enter your name at the bottom of the page.\n     ")])],1)]),t._v(" "),s("div",{staticClass:"section"},[s("router-view")],1)])},staticRenderFns:[]};var h=s("VU/8")(m,p,!1,function(t){s("oJvP")},"data-v-e22ee28e",null).exports,b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition-group",{staticClass:"columns is-multiline",attrs:{name:"list",tag:"div"}},t._l(t.visibleBurgers(t.burgers),function(e){return s("div",{key:e.name,staticClass:"column is-6-tablet is-4-desktop is-3-fullhd"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image"}})])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48"},[s("img",{attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])]),t._v(" "),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"subtitle is-6"},[t._v("A "+t._s(e.patty)+" burger")])])]),t._v(" "),s("div",{staticClass:"content"},[t._v("\n"+t._s(e.description)+"\n    ")])])])])}))},staticRenderFns:[]};var g={name:"Hamburgers",computed:{burgers:{get:function(){return this.$store.getters.burgers}}},methods:{showAll:function(){this.$store.commit("setAllBurgersVisible")}},components:{hamburger:s("VU/8")({name:"Hamburger",props:["burgers"],methods:{visibleBurgers:function(t){return t.filter(function(t){return t.visible})}}},b,!1,function(t){s("E95K")},"data-v-347d8aff",null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("p",[this._v("Here is our list of Hamburgers.\n  Incompatible burgers are hidden if you've just done the quiz.\n  "),e("button",{staticClass:"button alert",on:{click:this.showAll}},[this._v("Clear")])]),this._v(" "),e("hamburger",{attrs:{burgers:this.burgers}})],1)},staticRenderFns:[]};var _=s("VU/8")(g,f,!1,function(t){s("FUOx")},"data-v-2dc25bf9",null).exports,y=[{text:"What kind of patty?",type:"radio",resp:[{text:"Vegan"},{text:"Vegetarian"},{text:"Carnivore"}],answer:""},{text:"What cosmetics should your ideal burger wear?",type:"checkbox",resp:[{text:"Tomato"},{text:"Cheese"},{text:"Lettuce"},{text:"Bacon"},{text:"Mushroom"}],answer:[]},{text:"Many burgers come wet with lotions. Which lotions are the good lotions?",type:"checkbox",resp:[{text:"Ketchup"},{text:"Mustard"},{text:"Mayonnaise"},{text:"Sriracha"},{text:"Salsa"}],answer:[]}],x={name:"Questions",data:function(){return{msg:Date(),totalBurgers:5,yourName:"",questions:y,currentQuestion:0,answers:Array(y.length).fill([])}},methods:{nextQuestion:function(){this.currentQuestion+=1},previousQuestion:function(){this.currentQuestion-=1},submit:function(){this.$store.commit("submitAnswers",this.answers),this.$store.commit("updateBurgerVisibility"),this.$router.push({path:"/hamburgers"})}},computed:{questionCount:function(){return y.length}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-ancestor",attrs:{id:"outer"}},[t._m(0),t._v(" "),t._l(t.questions,function(e,a){return s("div",{key:e.text},[a===t.currentQuestion?s("div",[s("div",{staticClass:"tile is-parent is-8"},[s("div",{staticClass:"tile is-child box"},[s("p",{staticClass:"title"},[t._v(t._s(e.text))]),t._v(" "),s("ul",[s("transition",{attrs:{name:"slide-fade"}},["checkbox"==e.type?s("div",t._l(e.resp,function(e,i){return s("li",{key:e.text},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[a],expression:"answers[q_index]"}],attrs:{type:"checkbox",id:i},domProps:{value:e.text,checked:Array.isArray(t.answers[a])?t._i(t.answers[a],e.text)>-1:t.answers[a]},on:{change:function(s){var i=t.answers[a],r=s.target,n=!!r.checked;if(Array.isArray(i)){var o=e.text,u=t._i(i,o);r.checked?u<0&&t.$set(t.answers,a,i.concat([o])):u>-1&&t.$set(t.answers,a,i.slice(0,u).concat(i.slice(u+1)))}else t.$set(t.answers,a,n)}}}),t._v("\n                "+t._s(i)+": "+t._s(e.text)+"\n              ")])})):t._e()]),t._v(" "),s("transition",{attrs:{name:"slide-fade",mode:"out-in"}},["radio"==e.type?s("div",t._l(e.resp,function(e,i){return s("li",{key:e.text},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[a],expression:"answers[q_index]"}],attrs:{type:"radio",id:i},domProps:{value:e.text,checked:t._q(t.answers[a],e.text)},on:{change:function(s){t.$set(t.answers,a,e.text)}}}),t._v(" "),s("label",{attrs:{for:e.text}},[t._v(t._s(i)+": "+t._s(e.text))])])})):t._e()])],1),t._v("\n          "+t._s(t.currentQuestion+1)+" / "+t._s(t.questionCount)+"\n          "),t.currentQuestion>0?s("button",{staticClass:"button is-dark",on:{click:t.previousQuestion}},[t._v("\n            Back")]):t._e(),t._v(" "),t.currentQuestion+1<t.questionCount?s("button",{staticClass:"button is-dark",on:{click:t.nextQuestion}},[t._v("Next")]):t._e(),t._v(" "),t.currentQuestion+1===t.questionCount?s("button",{staticClass:"button is-success",on:{click:t.submit}},[t._v("Submit")]):t._e()])])]):t._e()])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tile is-parent is-vertical is-4"},[e("div",{staticClass:"tile is-child box"}),this._v(" "),e("div",{staticClass:"tile is-child box"})])}]};var w=s("VU/8")(x,C,!1,function(t){s("Cs4I")},"data-v-5afed6e7",null).exports;a.a.use(c.a);var k=new c.a({routes:[{path:"/",name:"Home",component:d},{path:"/survey/:name",name:"Survey",component:h,children:[{path:"questions",name:"questions",component:w}]},{path:"/survey",name:"Survey",component:h},{path:"/hamburgers",name:"Hamburgers",component:_}]}),B=s("NYxO");a.a.use(B.a);var A=new B.a.Store({state:{burgers:[{name:"Eco Burger",description:"Organic vegetables on the most eco-friendly patty available.",patty:"Vegan",topping:["Lettuce","Tomato"],sauce:["Sriracha"],visible:!0},{name:"Greener Burger",description:"Pretty nice greens atop our pure vegan patty.",patty:"Vegan",topping:["Lettuce","Mushroom"],sauce:["Salsa","Sriracha"],visible:!0},{name:"Sustainy Burger",description:"Flavourless lettuce atop a patty made of twigs.",patty:"Vegan",topping:["Lettuce"],sauce:["Salsa"],visible:!0},{name:"Life Burger",description:"Freshest vegetables on a meat flavoured tofu slab.",patty:"Vegetarian",topping:["Tomato","Mushroom","Lettuce"],sauce:["Mayonnaise","Salsa"],visible:!0},{name:"Peace Burger",description:"For those darned kids, a tofu slab with cheese and tomatoes.",patty:"Vegetarian",topping:["Tomato","Cheese"],sauce:["Ketchup"],visible:!0},{name:"Green Burger",description:"The sauciest of vegetarian burgers, this tofu brick tastes just like your childhood.",patty:"Vegetarian",topping:["Lettuce","Tomato"],sauce:["Ketchup","Mustard"],visible:!0},{name:"Bessie Burger",description:"So tasty you might forget how bad beef farms are!",patty:"Carnivore",topping:["Lettuce","Tomato","Cheese"],sauce:["Ketchup","Mustard"],visible:!0},{name:"Wilbur Burger",description:"Why stop at one species! Add bacon for more fun.",patty:"Carnivore",topping:["Lettuce","Bacon"],sauce:["Ketchup"],visible:!0},{name:"Multispecies Grease Burger",description:"You will probably have a heart attack, but it will be the best heart attack ever!",patty:"Carnivore",topping:["Lettuce","Cheese","Bacon","Mushroom"],sauce:["Mayonnaise","Sriracha"],visible:!0}],answers:[]},getters:{answers:function(t){return t.answers},burgers:function(t){return t.burgers}},mutations:{setAllBurgersVisible:function(t){t.burgers.forEach(function(t,e,s){t.visible=!0})},updateBurgerVisibility:function(t){t.burgers.forEach(function(e,s,a){switch(!0){case e.patty===t.answers[0]:e.visible=!0;break;default:e.visible=!1}})},submitAnswers:function(t,e){t.answers=e}},actions:{showAll:function(){this.setAllBurgersVisible(state)}}});a.a.config.productionTip=!1,a.a.use(r.a),new a.a({el:"#app",router:k,store:A,components:{App:u},template:"<App/>"})},doPI:function(t,e){},mXZL:function(t,e,s){t.exports=s.p+"static/img/hero.3ec8255.png"},oJvP:function(t,e){},"rP+G":function(t,e){},"u+f/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b8235345874c2bf63f5a.js.map