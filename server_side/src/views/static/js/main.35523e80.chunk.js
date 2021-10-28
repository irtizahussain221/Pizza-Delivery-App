(this.webpackJsonppizza_delivery_app=this.webpackJsonppizza_delivery_app||[]).push([[0],{160:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(31),s=a.n(c),i=(a(160),a(3)),l=a(144),o=a.n(l),d=(a(161),a(153)),m=a(12),j=a(34),u=a.n(j),h=a(55),b=a(18),p=a.n(b),O=a(51),g=a(14),x=a(1);var v=function(){var e=Object(O.a)({initialValues:{name:"",smallPrice:0,mediumPrice:0,largePrice:0,category:"",image:"",description:""},onSubmit:function(){var e=Object(h.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:t.name,variant:["small","medium","large"],prices:[{small:t.smallPrice,medium:t.mediumPrice,large:t.largePrice}],category:t.category,image:t.image,description:t.description,userid:JSON.parse(localStorage.getItem("currentUser"))._id},e.prev=1,e.next=4,p.a.post("http://localhost:5000/addPizza",a,{headers:{"auth-token":"".concat(localStorage.getItem("jwt-token"))}});case 4:alert("Pizza Added!"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),alert("Something bad happened!"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),validationSchema:g.b({name:g.c().required().min(3,"Minimum 3 characters required"),smallPrice:g.a().min(10).required(),mediumPrice:g.a().min(10).required(),largePrice:g.a().min(10).required(),category:g.c().oneOf(["veg","nonveg"]).required(),image:g.c().url().required(),description:g.c().required()})});return Object(x.jsx)("div",{className:"row justify-content-center mt-5",children:Object(x.jsxs)("div",{className:"col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white-rounded",style:{backgroundColor:"white"},children:[Object(x.jsx)("h2",{className:"text-center m-2",style:{fontSize:"35px"},children:"Add Pizza"}),Object(x.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(x.jsx)("input",{className:e.errors.name?"form-control is-invalid":"form-control",type:"text",required:!0,id:"name",value:e.values.name,placeholder:"Enter pizza name",onChange:e.handleChange}),e.errors.name?Object(x.jsx)("div",{className:"invalid-feedback",children:e.errors.name}):null,Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",required:!0,className:e.errors.category?"form-control is-invalid":"form-control",id:"category",placeholder:"Enter category",value:e.values.category,onChange:e.handleChange}),e.errors.category?Object(x.jsx)("div",{className:"invalid-feedback",children:e.errors.category}):null,Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",required:!0,className:e.errors.description?"form-control is-invalid":"form-control",id:"description",placeholder:"Enter description",value:e.values.description,onChange:e.handleChange}),e.errors.description?Object(x.jsx)("div",{className:"invalid-feedback",children:e.errors.description}):null,Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",placeholder:"Enter pizza image's url",required:!0,className:e.errors.image?"form-control is-invalid":"form-control",id:"image",value:e.values.image,onChange:e.handleChange}),e.errors.image?Object(x.jsx)("div",{className:"invalid-feedback",children:e.errors.image}):null,Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsxs)("div",{className:"w-100 text-center",children:[Object(x.jsx)("input",{type:"number",placeholder:"Small Price",required:!0,className:e.errors.smallPrice?"form-control is-invalid":"form-control",id:"smallPrice",value:e.values.smallPrice,onChange:e.handleChange}),e.errors.smallPrice?Object(x.jsx)("div",{className:"invalid-feedback",children:e.errors.smallPrice}):null]}),Object(x.jsxs)("div",{className:"w-100 text-center",children:[Object(x.jsx)("input",{type:"number",placeholder:"Medium Price",required:!0,className:e.errors.mediumPrice?"form-control is-invalid":"form-control",id:"mediumPrice",value:e.values.mediumPrice,onChange:e.handleChange}),e.errors.mediumPrice?Object(x.jsx)("div",{className:"invalid-feedback",children:e.errors.mediumPrice}):null]}),Object(x.jsxs)("div",{className:"w-100 text-center",children:[Object(x.jsx)("input",{type:"number",placeholder:"Large Price",required:!0,className:e.errors.largePrice?"form-control is-invalid":"form-control",id:"largePrice",value:e.values.largePrice,onChange:e.handleChange}),e.errors.largePrice?Object(x.jsx)("div",{className:"invalid-feedback",children:e.errors.largePrice}):null]})]}),Object(x.jsx)("input",{type:"submit",value:"ADD PIZZA",className:"btn"})]})]})})};var f=function(e){var t=Object(m.f)(),a=Object(O.a)({initialValues:{email:"",password:""},onSubmit:function(a){p.a.post("http://localhost:5000/login",a).then((function(a){localStorage.setItem("jwt-token","".concat(a.headers["auth-token"])),p.a.get("http://localhost:5000/getUserDetails",{headers:{"auth-token":"".concat(a.headers["auth-token"])}}).then((function(a){localStorage.setItem("currentUser",JSON.stringify(a.data)),localStorage.setItem("isAdmin",JSON.stringify(JSON.parse(localStorage.getItem("currentUser")).isAdmin)),e.setLoggedIn(!0),t.push("/")})).catch(console.log)})).catch((function(e){alert("Something bad happened!"),console.log(e)}))},validationSchema:g.b({email:g.c().min(6,"Type a valid email address!").email("Type a valid email address!").required("This field is required!"),password:g.c().min(6,"Password is too short.").max(12,"Password is too long.").required("This field is required.")})});return Object(x.jsx)("div",{className:"login","data-aos":"fade-up",children:Object(x.jsx)("div",{className:"row justify-content-center mt-5",children:Object(x.jsxs)("div",{className:"col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white-rounded",style:{backgroundColor:"white"},children:[Object(x.jsx)("h2",{className:"text-center m-2",style:{fontSize:"35px"},children:"Login"}),Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(x.jsx)("input",{type:"email",placeholder:"email",required:!0,className:a.errors.email?"form-control is-invalid":"form-control",id:"email",value:a.values.email,onChange:function(e){a.handleChange(e)}}),a.errors.email?Object(x.jsx)("div",{className:"invalid-feedback",children:a.errors.email}):null,Object(x.jsx)("input",{type:"password",placeholder:"password",required:!0,className:a.errors.password?"form-control is-invalid":"form-control",id:"password",value:a.values.password,onChange:a.handleChange}),a.errors.password?Object(x.jsx)("div",{className:"invalid-feedback",children:a.errors.password}):null,Object(x.jsx)("input",{className:"btn mt-3 mb-3",type:"submit",value:"LOGIN"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"/signin",style:{color:"black"},children:"Click Here to Register"})]})})]})})})},N=a(296),S=a(297),w=a(294);var y=function(e){return Object(x.jsxs)(N.a,{collapseOnSelect:!0,expand:"lg",className:"Navbar",children:[Object(x.jsx)(N.a.Brand,{href:"/",children:"SHEY PIZZA"}),Object(x.jsx)(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsx)(N.a.Collapse,{id:"responsive-navbar-nav",children:Object(x.jsxs)(S.a,{className:"ms-auto",children:[e.isLoggedIn?Object(x.jsxs)(w.a,{title:"".concat(JSON.parse(localStorage.getItem("currentUser")).name.split(" ")[0]),id:"basic-nav-dropdown",className:"Menu-Link",children:[Object(x.jsx)(w.a.Item,{className:"Menu-Link",onClick:function(){localStorage.removeItem("currentUser"),localStorage.removeItem("jwt-token"),localStorage.setItem("isAdmin",JSON.stringify(!1)),e.setLoggedIn(!1)},children:"Logout"}),Object(x.jsx)(w.a.Item,{href:"/orders",className:"Menu-Link",children:"Orders"})]}):Object(x.jsx)(S.a.Link,{href:"/login",className:"Menu-Link",children:"Login"}),Object(x.jsx)(S.a.Link,{href:"/cart",className:"Menu-Link",children:"Cart"}),JSON.parse(localStorage.getItem("isAdmin"))?Object(x.jsx)(S.a.Link,{href:"/addPizza",className:"Menu-Link",children:"Add Pizza"}):null,JSON.parse(localStorage.getItem("isAdmin"))?Object(x.jsx)(S.a.Link,{href:"/allOrders",className:"Menu-Link",children:"Orders"}):null]})})]})};var z=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(m.f)(),s=Object(O.a)({initialValues:{name:"",email:"",password:"",confirmPassword:""},onSubmit:function(e){if(e.confirmPassword!==e.password)return n(!1);e.confirmPassword===e.password&&n(!0),p.a.post("http://localhost:5000/register",{name:e.name,email:e.email,password:e.password}).then((function(){c.push("/login")})).catch((function(e){console.log(e),alert("Something bad happened!")}))},validationSchema:g.b({name:g.c().required("This field is required!").min(6,"Too short"),email:g.c().min(6,"Type a valid email address!").email("Type a valid email address!").required("This field is required."),password:g.c().min(6,"Password is too short.").max(12,"Password is too long.").required("This field is required."),confirmPassword:g.c().min(6,"Password is too short.").max(12,"Password is too long.").required("This field is required.")})});return Object(x.jsx)("div",{className:"register","data-aos":"fade-up",children:Object(x.jsx)("div",{className:"row justify-content-center mt-5",children:Object(x.jsxs)("div",{className:"col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white-rounded",style:{backgroundColor:"white"},children:[Object(x.jsx)("h2",{className:"text-center m-2",style:{fontSize:"35px"},children:"Register"}),Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(x.jsx)("input",{type:"text",placeholder:"name",required:!0,className:s.errors.name?"form-control is-invalid":"form-control",id:"name",value:s.values.name,onChange:s.handleChange}),s.errors.name?Object(x.jsx)("div",{className:"invalid-feedback",children:s.errors.name}):null,Object(x.jsx)("input",{type:"email",placeholder:"email",required:!0,className:s.errors.email?"form-control is-invalid":"form-control",id:"email",value:s.values.email,onChange:s.handleChange}),s.errors.email?Object(x.jsx)("div",{className:"invalid-feedback",children:s.errors.email}):null,Object(x.jsx)("input",{type:"password",placeholder:"password",required:!0,className:s.errors.password?"form-control is-invalid":"form-control",id:"password",value:s.values.password,onChange:s.handleChange}),s.errors.password?Object(x.jsx)("div",{className:"invalid-feedback",children:s.errors.password}):null,Object(x.jsx)("input",{type:"password",placeholder:"confirm password",required:!0,className:s.errors.confirmPassword?"form-control is-invalid":"form-control",id:"confirmPassword",value:s.values.confirmPassword,onChange:s.handleChange}),s.errors.confirmPassword?Object(x.jsx)("div",{className:"invalid-feedback",children:s.errors.confirmPassword}):null,Object(x.jsx)("input",{className:"btn mt-3 mb-3",type:"submit",value:"REGISTER"}),Object(x.jsx)("br",{}),a?null:Object(x.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Passwords donot match"}),Object(x.jsx)("a",{href:"/login",style:{color:"black"},children:"Click Here to Login"})]})})]})})})},I=a(58),k=a(57);var P=function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"text-left m-1 w-100",children:[Object(x.jsxs)("h1",{children:[e.item.name," [",e.item.variant,"]"]}),Object(x.jsxs)("h1",{children:["Price: ",e.item.quantity," x"," ",e.item.prices[0][e.item.variant||"medium"]]}),Object(x.jsxs)("h1",{children:["Quantity:"," ",Object(x.jsx)(k.a,{className:"hover-item",style:{color:"green"},icon:I.c,onClick:function(){e.addQuantity(e.item)}})," ",e.item.quantity," ",Object(x.jsx)(k.a,{className:"hover-item",style:{color:"red"},icon:I.b,onClick:function(){e.removeQuantity(e.item)}})]})]}),Object(x.jsx)("div",{className:"m-1 w-100",children:Object(x.jsx)("img",{src:e.item.image,className:"img-fluid",alt:"",style:{width:"80px",height:"80px"}})}),Object(x.jsx)("div",{className:"m-1 w-100",children:Object(x.jsx)(k.a,{icon:I.d,style:{color:"red"},className:"mt-5 hover-item",onClick:function(){e.deleteAnItem(e.item)}})})]})};var C=function(e){for(var t=e.isLoggedIn,a=Object(r.useState)(JSON.parse(localStorage.getItem("cart"))),n=Object(i.a)(a,2),c=n[0],s=n[1],l=0,o=0;o<c.length;o++)l+=c[o].price;var d=function(e,t){return e.filter((function(e){return e!==t}))},m=function(e){s(d(c,e)),c=d(c,e),localStorage.setItem("cart",JSON.stringify(c))},j=function(e){c=d(c,e),e.quantity+=1,e.price+=e.prices[0][e.variant||"medium"],c.push(e),s(c),localStorage.setItem("cart",JSON.stringify(c))},u=function(e){c=d(c,e),e.quantity-=1,e.price-=e.prices[0][e.variant||"medium"],c.push(e),s(c),localStorage.setItem("cart",JSON.stringify(c))};return Object(x.jsx)("div",{style:{textAlign:"center",marginTop:"50px"},children:Object(x.jsxs)("div",{className:"row justify-content-center p-2","data-aos":"fade-down",style:{marginRight:"-15px"},children:[Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsx)("h2",{style:{fontSize:"40px"},children:"My Cart"}),c.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"flex-container","data-aos":"fade-up",children:Object(x.jsx)(P,{item:e,deleteAnItem:m,addQuantity:j,removeQuantity:u})}),Object(x.jsx)("hr",{})]})}))]}),Object(x.jsxs)("div",{className:"col-md-4 text-right",children:[Object(x.jsxs)("h2",{style:{fontSize:"45px"},children:["Subtotal: Rs. ",l,"/-"]}),Object(x.jsx)("div",{children:Object(x.jsx)("span",{children:Object(x.jsx)("button",{className:"btn",onClick:function(){!function(){if(!1===t)return alert("You must be logged in to proceed!");var e={email:JSON.parse(localStorage.getItem("currentUser")).email,name:JSON.parse(localStorage.getItem("currentUser")).name,userid:JSON.parse(localStorage.getItem("currentUser"))._id,orderItems:c,orderAmount:l};p.a.post("http://localhost:5000/postOrders",e,{headers:{"auth-token":"".concat(localStorage.getItem("jwt-token"))}}).then((function(){alert("Your order has been placed!")})).catch(console.log)}()},children:"Order now"})})})]})]})})},q=a(72),L="SET_PIZZAS",A=a(295);var U=function(e){return Object(x.jsxs)(A.a,{show:e.show,onHide:e.handleShow,children:[Object(x.jsx)(A.a.Header,{closeButton:!0,children:Object(x.jsx)(A.a.Title,{children:e.name})}),Object(x.jsxs)(A.a.Body,{style:{textAlign:"center"},children:[Object(x.jsx)("img",{src:e.image,alt:e.name,className:"img-fluid",style:{height:"400px"}}),Object(x.jsx)("p",{children:e.description})]}),Object(x.jsx)(A.a.Footer,{children:Object(x.jsx)("button",{className:"btn",onClick:e.handleShow,children:"CLOSE"})})]})};var J=function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{onClick:function(){return e.handleShow()},className:"hover-item",children:[Object(x.jsx)("h1",{children:e.pizza.name}),Object(x.jsx)("img",{src:e.pizza.image,alt:e.pizza.name,className:"img-fluid",style:{height:"200px",width:"200px"}})]}),Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsxs)("div",{className:"m-1 w-100",children:[Object(x.jsx)("p",{children:"Variants"}),Object(x.jsx)("select",{className:"form-control",value:e.variant,onChange:function(t){e.setVariant(t.currentTarget.value)},children:e.pizza.variant.map((function(e,t){return Object(x.jsx)("option",{children:e},t)}))})]}),Object(x.jsxs)("div",{className:"m-1 w-100",children:[Object(x.jsx)("p",{children:"Quantity"}),Object(x.jsx)("select",{className:"form-control",value:e.quantity,onChange:function(t){e.setQuantity(Number(t.currentTarget.value))},children:[1,2,3,4,5,6,7,8,9,10].map((function(e,t){return Object(x.jsx)("option",{children:e},t)}))})]})]}),Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsx)("div",{className:"m-1 w-100",children:Object(x.jsxs)("h1",{className:"mt-1",children:["Price : ",e.pizza.prices[0][e.variant]*e.quantity]})}),Object(x.jsx)("div",{className:"m-1 w-100",children:Object(x.jsx)("button",{className:"btn",onClick:function(){e.addToCart(e.pizza),alert("Added to Cart!")},children:"ADD TO CART"})})]}),JSON.parse(localStorage.getItem("isAdmin"))?Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsx)("div",{className:"m-1 w-100",children:Object(x.jsx)(k.a,{icon:I.d,style:{color:"red"},className:"hover-item",onClick:function(){e.deletePizza()}})}),Object(x.jsx)("div",{className:"m-1 w-100",children:Object(x.jsx)(k.a,{icon:I.a,style:{color:"green"},className:"hover-item",onClick:function(){e.handleUpdateModalShow()}})})]}):null]})};var T=function(e){var t=Object(O.a)({initialValues:{name:""},onSubmit:function(){var t=Object(h.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.put("http://localhost:5000/updatePizza",{updatedPizza:{name:a.name},_ids:{userid:JSON.parse(localStorage.getItem("currentUser"))._id,pizzaID:e.pizzaID}},{headers:{"auth-token":"".concat(localStorage.getItem("jwt-token"))}});case 3:alert("Item updated!"),e.setScreenUpdated(!0),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),alert("Something bad happened!"),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),validationSchema:g.b({name:g.c().min(5,"Name is too short!").required("This field is required")})});return Object(x.jsxs)(A.a,{show:e.showUpdateModal,onHide:e.handleUpdateModalShow,children:[Object(x.jsx)(A.a.Header,{closeButton:!0,children:Object(x.jsx)(A.a.Title,{children:"Update Pizza"})}),Object(x.jsx)(A.a.Body,{style:{textAlign:"center"},children:Object(x.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(x.jsx)("input",{required:!0,type:"text",placeholder:"Enter the updated name",className:t.errors.name?"form-control is-invalid text-center":"form-control text-center",id:"name",value:t.values.name,onChange:t.handleChange}),t.errors.name?Object(x.jsx)("div",{className:"invalid-feedback",children:t.errors.name}):null,Object(x.jsx)("input",{type:"submit",value:"Update Pizza",className:"btn"})]})}),Object(x.jsx)(A.a.Footer,{})]})};var _=function(e){var t=Object(r.useState)("small"),a=Object(i.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(1),l=Object(i.a)(s,2),o=l[0],d=l[1],m=Object(r.useState)(!1),j=Object(i.a)(m,2),u=j[0],h=j[1],b=Object(r.useState)(!1),O=Object(i.a)(b,2),g=O[0],v=O[1],f=function(){h(!u)},N=function(){v(!g)};return Object(x.jsxs)("div",{style:{margin:"70px",textAlign:"center"},className:"shadow-lg p-3 mb-5 bg-white rounded",children:[Object(x.jsx)(J,{pizza:e.pizza,handleShow:f,variant:n,setVariant:c,quantity:o,setQuantity:d,addToCart:function(e){var t,a,r={_id:e._id,quantity:o,name:e.name,image:e.image,price:e.prices[0][n],prices:e.prices,variant:n},c=JSON.parse(localStorage.getItem("cart")),s=c.filter((function(e){return e._id===r._id&&e.variant===r.variant}));if(0===s.length)c.push(r),localStorage.setItem("cart",JSON.stringify(c));else{r.quantity=s[0].quantity+r.quantity,r.price=r.quantity*r.price;var i=(t=c,a=s[0],t.filter((function(e){return e!==a})));i.push(r),localStorage.setItem("cart",JSON.stringify(i))}},deletePizza:function(){p.a.post("http://localhost:5000/deletePizza",{pizzaID:e.pizza._id,userid:JSON.parse(localStorage.getItem("currentUser"))._id},{headers:{"auth-token":"".concat(localStorage.getItem("jwt-token"))}}).then((function(t){200===t.status&&(alert("Item Deleted"),e.setScreenUpdated(!0))})).catch((function(e){alert("Something bad happened"),console.log(e)}))},handleUpdateModalShow:N}),Object(x.jsx)(U,{name:e.pizza.name,description:e.pizza.description,show:u,handleShow:f,image:e.pizza.image}),Object(x.jsx)(T,{pizzaID:e.pizza._id,showUpdateModal:g,handleUpdateModalShow:N,setScreenUpdated:e.setScreenUpdated})]})};var M=function(){var e=Object(q.c)((function(e){return e.allPizzas.pizzas})),t=Object(q.b)(),a=Object(r.useState)([]),n=Object(i.a)(a,2),c=n[0],s=n[1],l=Object(r.useState)(!1),o=Object(i.a)(l,2),d=o[0],m=o[1],j=Object(r.useState)("all"),u=Object(i.a)(j,2),h=u[0],b=u[1],O=Object(r.useState)(!1),g=Object(i.a)(O,2),v=g[0],f=g[1];function N(){p.a.get("http://localhost:5000/getPizzas").then((function(e){t(function(e){return{type:L,payload:e}}(e.data)),f(!1)})).catch((function(e){alert("something bad happened!"),console.log(e),m(!0)}))}return Object(r.useEffect)((function(){N()}),[v]),e[0]||d?e[0]?Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"row mt-5 bg-white rounded shadow-lg p-3 mb-5 justify-content-center",children:Object(x.jsx)("div",{className:"col-md-4 m-3",children:Object(x.jsxs)("select",{className:"form-select",onChange:function(t){!function(t){b(t.currentTarget.value),t.currentTarget.value,s(e.filter((function(e){return e.category===t.currentTarget.value})))}(t)},children:[Object(x.jsx)("option",{value:"all",children:"All"}),Object(x.jsx)("option",{value:"veg",children:"Veg"}),Object(x.jsx)("option",{value:"nonveg",children:"Non Veg"})]})})}),Object(x.jsx)("div",{className:"row",children:"all"===h?e.map((function(e,t){return Object(x.jsx)("div",{className:"col-md-6 row-eq-height","data-aos":"fade-up",children:Object(x.jsx)(_,{pizza:e,setScreenUpdated:f})},t)})):c.map((function(e,t){return Object(x.jsx)("div",{className:"col-md-6 row-eq-height","data-aos":"fade-up",children:Object(x.jsx)(_,{pizza:e,setScreenUpdated:f})},t)}))})]})}):Object(x.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Oops! unable to load data! Maybe, you have lost your internet connection"}):Object(x.jsx)("div",{className:"d-flex mt-5 justify-content-center",children:Object(x.jsx)("div",{className:"spinner-border",role:"status"})})};var D=function(e){var t=e.order;return Object(x.jsx)("div",{className:"col-md-4 row-eq-height m-2 p-1","data-aos":"fade-up",style:{backgroundColor:"red",color:"white"},children:Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsxs)("div",{className:"text-center w-100 m-1",children:[Object(x.jsx)("h2",{style:{fontSize:"25px"},children:"Items"}),Object(x.jsx)("hr",{}),t.orderItems.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsxs)("p",{children:[e.name," [",e.variant,"] * ",e.quantity," ="," ",e.price]})},t)}))]}),Object(x.jsxs)("div",{className:"text-center w-100 m-1",children:[Object(x.jsx)("h2",{style:{fontSize:"25px"},children:"Order Info"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("p",{children:["Order Amount : ",t.orderAmount]}),Object(x.jsxs)("p",{children:["Date : ",new Date(t.createdAt).toDateString()]}),Object(x.jsxs)("p",{children:["Order Id : ",t._id]}),Object(x.jsxs)("p",{children:["Delivery Status :"," ",t.isDelivered?Object(x.jsx)(x.Fragment,{children:"Delivered"}):Object(x.jsx)(x.Fragment,{children:"Undelivered"})]})]})]})})};var E=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("currentUser"))._id;p.a.post("http://localhost:5000/getOrders",{userid:e},{headers:{"auth-token":"".concat(localStorage.getItem("jwt-token"))}}).then((function(e){n(e.data)})).catch((function(e){console.log(e),alert("Something bad happened!")}))}()}),[]),a[0]?Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{className:"text-center mt-5 mb-3",style:{fontSize:"35px"},children:"My Orders"}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{className:"row justify-content-center",children:a.map((function(e,t){return Object(x.jsx)(D,{order:e},t)}))})]}):Object(x.jsx)(x.Fragment,{children:"...Loading"})};var F=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),s=Object(i.a)(c,2),l=s[0],o=s[1],d=function(){var e=Object(h.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("http://localhost:5000/getOrders/".concat(JSON.parse(localStorage.getItem("currentUser"))._id),{headers:{"auth-token":"".concat(localStorage.getItem("jwt-token"))}});case 3:t=e.sent,a=t.data,n(a),o(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Something bad happened!"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={orderID:t,userid:JSON.parse(localStorage.getItem("currentUser"))._id},e.prev=1,e.next=4,p.a.put("http://localhost:5000/updateOrderStatus",a,{headers:{"auth-token":"".concat(localStorage.getItem("jwt-token"))}});case 4:alert("Updated!"),o(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){d()}),[l]),a[0]?Object(x.jsx)("div",{children:a.map((function(e,t){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)(D,{order:e})}),Object(x.jsx)("div",{className:"m-2",children:Object(x.jsx)("button",{className:"btn",onClick:function(){return m(e._id)},children:"Mark as delivered"})}),Object(x.jsx)("hr",{})]},t)}))}):Object(x.jsx)("div",{children:"Loading..."})};var V=function(e){return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(y,{isLoggedIn:e.isLoggedIn,setLoggedIn:e.setLoggedIn}),Object(x.jsxs)(m.c,{children:[Object(x.jsx)(m.a,{exact:!0,path:"/",children:Object(x.jsx)(M,{})}),Object(x.jsx)(m.a,{exact:!0,path:"/cart",children:Object(x.jsx)(C,{isLoggedIn:e.isLoggedIn})}),e.isLoggedIn?Object(x.jsx)(m.a,{exact:!0,path:"/orders",children:Object(x.jsx)(E,{})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{exact:!0,path:"/login",children:Object(x.jsx)(f,{isLoggedIn:e.isLoggedIn,setLoggedIn:e.setLoggedIn})}),Object(x.jsx)(m.a,{exact:!0,path:"/signin",children:Object(x.jsx)(z,{})})]}),JSON.parse(localStorage.getItem("isAdmin"))?Object(x.jsx)(m.a,{exact:!0,path:"/addPizza",children:Object(x.jsx)(v,{})}):null,JSON.parse(localStorage.getItem("isAdmin"))?Object(x.jsx)(m.a,{exact:!0,path:"/allOrders",children:Object(x.jsx)(F,{})}):null]})]})};o.a.init();var Q=function(){var e=Object(r.useState)(!(null===localStorage.getItem("currentUser"))),t=Object(i.a)(e,2),a=t[0],n=t[1];return null===localStorage.getItem("cart")&&localStorage.setItem("cart",JSON.stringify([])),null===localStorage.getItem("isAdmin")&&localStorage.setItem("isAdmin",JSON.stringify(!1)),Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(V,{isLoggedIn:a,setLoggedIn:n})})},H=a(97),R=a(2),B={pizzas:[]},Z=Object(H.a)({allPizzas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;return a===L?Object(R.a)(Object(R.a)({},e),{},{pizzas:r}):e}}),Y=Z,G=Object(H.b)(Y);a(287);s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(q.a,{store:G,children:Object(x.jsx)(Q,{})})}),document.getElementById("root"))}},[[288,1,2]]]);
//# sourceMappingURL=main.35523e80.chunk.js.map