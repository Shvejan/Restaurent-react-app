(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),s=t.n(l),c=(t(100),t(101),t(16)),o=t(17),m=t(19),i=t(18),u=(t(102),t(153)),d=t(154),E=t(155),f=t(156),p=t(157),h=t(158),g=t(9),N=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},b="https://shvejan.github.io/json-server-for-confusion-react/",v=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.id},r.a.createElement(u.a,null,r.a.createElement(g.b,{to:"/menu/".concat(e.id)},r.a.createElement(d.a,{width:"100%",src:b+e.image,alt:e.name}),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement("h3",null,e.name))))))}));return this.props.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):this.props.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,this.props.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(h.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"alert alert-primary",role:"alert"},"Explore more by clicking on the images!"),r.a.createElement("div",{className:"row"},e))}}]),t}(n.Component),y=function(){return{type:"DISHES_LOADING"}},M=function(e){return{type:"DISHES_FAILED",payload:e}},w=function(e){return{type:"ADD_DISHES",payload:e}},O=function(e){return{type:"COMMENTS_FAILED",payload:e}},L=function(e){return{type:"ADD_COMMENTS",payload:e}},k=function(e){return{type:"ADD_LEADERS",payload:e}},j=function(){return{type:"LEADERS_LOADING"}},S=function(e){return{type:"LEADERS_FAILED",payload:e}},D=function(){return{type:"PROMOS_LOADING"}},C=function(e){return{type:"PROMOS_FAILED",payload:e}},F=function(e){return{type:"ADD_PROMOS",payload:e}},x=t(159),A=t(160),R=t(161),T=t(180),I=t(162),_=t(163),q=t(164),P=t(165),H=t(166),z=t(8),G=t(26),W=function(e){return function(a){return!a||a.length<=e}},B=function(e){return e&&e.length&&"--Rating--"!==e},U=function(e){return e.isLoading?r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.comments},r.a.createElement(N,null)):e.errMess?r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.comments},r.a.createElement("h4",null,e.errMess)):null!=e.comments?r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.comments},r.a.createElement("h4",null,"Comments"),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(G.Stagger,{in:!0},e.comments.map((function(e){return r.a.createElement(G.Fade,{in:!0},r.a.createElement("ul",{className:"list-unstyled",key:e.author},r.a.createElement("li",null,e.comment),r.a.createElement("li",null,"-- ",e.author," ,"," ",new Date(e.date).toDateString().substring(4)),r.a.createElement("br",null)))}))))),r.a.createElement(x.a,{className:"form-group"},r.a.createElement(A.a,{md:{size:10}},r.a.createElement(R.a,{onClick:e.togleModel},r.a.createElement("i",{class:"fa fa-pencil"})," Submit Comment"))),r.a.createElement(T.a,{isOpen:e.isModelOpen,toggle:e.togleModel},r.a.createElement(I.a,{toggle:e.togleModel},"Submit Comment"),r.a.createElement(_.a,null,r.a.createElement(z.LocalForm,{onSubmit:function(a){return e.handleSubmit(a,e.dishId,e.postComment)}},r.a.createElement(x.a,{className:"form-group"},r.a.createElement(q.a,{htmlFor:"rating",md:{size:12,offset:1}},"Rating"),r.a.createElement(A.a,{md:{size:10,offset:1}},r.a.createElement(z.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control",default:"5",validators:{required:B}},r.a.createElement("option",null,"--Rating--"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"1")),r.a.createElement(z.Errors,{className:"text-danger",model:".rating",show:"touched",messages:{required:"Required"}}))),r.a.createElement(x.a,{className:"form-group"},r.a.createElement(q.a,{htmlFor:"name",md:{size:12,offset:1}},"Name"),r.a.createElement(A.a,{md:{size:10,offset:1}},r.a.createElement(z.Control.text,{model:".name",id:"name",name:"name",placeholder:"Name",className:"form-control",validators:{required:B,minLength:(a=2,function(e){return e&&e.length>a}),maxLength:W(15)}}),r.a.createElement(z.Errors,{className:"text-danger",show:"touched",model:".name",messages:{required:"Required ",maxLength:"length must be less than 15 characters",minLength:"length must be more than 2 characters"}}))),r.a.createElement(x.a,{className:"form-group"},r.a.createElement(q.a,{htmlFor:"comment",md:{size:12,offset:1}},"Comment"),r.a.createElement(A.a,{md:{size:10,offset:1}},r.a.createElement(z.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"5",className:"form-control"}))),r.a.createElement(x.a,{className:"form-group"},r.a.createElement(A.a,{md:{size:10,offset:1}},r.a.createElement(R.a,{color:"primary",type:"submit"},"Submit"))))))):r.a.createElement("div",null);var a},K=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.dish.name},r.a.createElement(G.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{top:!0,src:b+e.dish.image,alt:e.dish.name}),r.a.createElement(P.a,null,r.a.createElement(f.a,null,r.a.createElement("h4",null,e.dish.name)),r.a.createElement(H.a,null,e.dish.description))))):r.a.createElement("div",null)},Y=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).togleModel=function(){n.setState({isModelOpen:!n.state.isModelOpen})},n.handleSubmit=function(e,a,t){n.togleModel(),t(a,e.rating,e.name,e.comment)},n.state={isModelOpen:!1},n}return Object(o.a)(t,[{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):this.props.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,this.props.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"justify-content-center"}),r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(h.a,null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement(h.a,{active:!0},this.props.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,this.props.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(K,{dish:this.props.dish,isLoading:this.props.isLoading,errMess:this.props.errMess}),r.a.createElement(U,{comments:this.props.comments,dishId:this.props.dish.id,postComment:this.props.postComment,togleModel:this.togleModel,handleSubmit:this.handleSubmit,isModelOpen:this.state.isModelOpen,errMess:this.props.commentsErrMess,isLoading:this.props.isLoading})))}}]),t}(n.Component),J=t(56),Z=t(167),$=t(168),Q=t(169),V=t(170),X=t(171),ee=t(172),ae=t(173),te=t(174),ne=t(175),re=t(176),le=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).toggleModal=function(){n.setState({isModalOpen:!n.state.isModalOpen})},n.handleLogin=function(e){n.toggleModal(),alert("Username: "+n.username.value+" Password: "+n.password.value+" Remember: "+n.remember.checked),e.preventDefault()},n.toggleNav=n.toggleNav.bind(Object(J.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Z.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement($.a,{onClick:this.toggleNav}),r.a.createElement(Q.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:b+"images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(V.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(X.a,{navbar:!0},r.a.createElement(ee.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/Restaurent-react-app"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(ee.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/Restaurent-react-app/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(ee.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/Restaurent-react-app/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(ee.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/Restaurent-react-app/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(X.a,{className:"ml-auto",navbar:!0},r.a.createElement(ee.a,null,r.a.createElement(R.a,{outline:!0,onClick:this.toggleModal,className:"btn btn-success btn-outline-light"},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(ae.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"The Grand Restaurent"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(T.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(I.a,{toggle:this.toggleModal},"Login"),r.a.createElement(_.a,null,r.a.createElement(te.a,{onSubmit:this.handleLogin},r.a.createElement(ne.a,null,r.a.createElement(q.a,{htmlFor:"username"},"Username"),r.a.createElement(re.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(ne.a,null,r.a.createElement(q.a,{htmlFor:"password"},"Password"),r.a.createElement(re.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(ne.a,{check:!0},r.a.createElement(q.a,{check:!0},r.a.createElement(re.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(R.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);function se(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))}var ce=t(177);function oe(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(N,null):n?r.a.createElement("h4",null,n):r.a.createElement(G.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:b+a.image,alt:a.name}),r.a.createElement(P.a,null,r.a.createElement(f.a,null,a.name),a.designation?r.a.createElement(ce.a,null,a.designation):null,r.a.createElement(H.a,null,a.description))))}var me=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(oe,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(oe,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(oe,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},ie=function(e){return e&&e.length},ue=function(e){return function(a){return!a||a.length<=e}},de=function(e){return function(a){return a&&a.length>=e}},Ee=function(e){return!isNaN(Number(e))},fe=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},pe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).handleSubmit=function(a){e.props.resetFeedbackForm(),e.props.postFeedback(a)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(h.a,{active:!0},"Contact"))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",href:"skype.com",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(z.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(x.a,{className:"form-group"},r.a.createElement(q.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(A.a,{md:10},r.a.createElement(z.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ie,minLength:de(3),maxLength:ue(15)}}),r.a.createElement(z.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(x.a,{className:"form-group"},r.a.createElement(q.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(A.a,{md:10},r.a.createElement(z.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ie,minLength:de(3),maxLength:ue(15)}}),r.a.createElement(z.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(x.a,{className:"form-group"},r.a.createElement(q.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(A.a,{md:10},r.a.createElement(z.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:ie,minLength:de(3),maxLength:ue(15),isNumber:Ee}}),r.a.createElement(z.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(x.a,{className:"form-group"},r.a.createElement(q.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(A.a,{md:10},r.a.createElement(z.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ie,validEmail:fe}}),r.a.createElement(z.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(x.a,{className:"form-group"},r.a.createElement(A.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(q.a,{check:!0},r.a.createElement(z.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(A.a,{md:{size:3,offset:1}},r.a.createElement(z.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(x.a,{className:"form-group"},r.a.createElement(q.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(A.a,{md:10},r.a.createElement(z.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(x.a,{className:"form-group"},r.a.createElement(A.a,{md:{size:10,offset:2}},r.a.createElement(R.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),he=t(31),ge=t(24),Ne=t(178),be=t(179),ve=function(e){return r.a.createElement(G.Fade,{in:!0},r.a.createElement("div",{key:e.leader.id,className:"col-12 mt-5"},r.a.createElement(Ne.a,{className:"row"},r.a.createElement(Ne.a,{left:!0,middle:!0,className:"col-12 col-sm-2"},r.a.createElement("img",{className:"img-fluid",src:b+e.leader.image})),r.a.createElement(Ne.a,{body:!0,className:" col-12 col-sm"},r.a.createElement(Ne.a,{heading:!0},e.leader.name),r.a.createElement("h6",null,e.leader.designation),r.a.createElement("p",{className:"mt-4"},e.leader.description)))))},ye=function(e){return e.leaders.isLoading?r.a.createElement(N,null):e.leaders.errMess?r.a.createElement("h5",null,e.leaders.errMess):r.a.createElement(G.Stagger,{in:!0},r.a.createElement(ve,{leader:e.leaders.leaders[0]}))};var Me=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(h.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to"," ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(be.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(P.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(P.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(Ne.a,{list:!0},r.a.createElement(ye,{leaders:e.leaders})))))},we=t(55),Oe=t(88),Le=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(we.a,null,r.a.createElement(Oe.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(he.c,null,r.a.createElement(he.a,{path:"/Restaurent-react-app",component:function(){return r.a.createElement(me,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderErrMess:e.props.leaders.errMess,leaderLoading:e.props.leaders.isLoading})}}),r.a.createElement(he.a,{exact:!0,path:"/Restaurent-react-app/menu",component:function(){return r.a.createElement(v,{dishes:e.props.dishes})}}),r.a.createElement(he.a,{exact:!0,path:"/Restaurent-react-app/aboutus",component:function(){return r.a.createElement(Me,{leaders:e.props.leaders})}}),r.a.createElement(he.a,{exact:!0,path:"/Restaurent-react-app/contactus",component:function(){return r.a.createElement(pe,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),"} />",r.a.createElement(he.a,{path:"/Restaurent-react-app/menu/:id",component:function(a){var t=a.match;return r.a.createElement(Y,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.id,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.id,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}})))),r.a.createElement(se,null))}}]),t}(n.Component),ke=Object(he.f)(Object(ge.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch("https://shvejan.github.io/json-server-for-confusion-react/comments.json",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("this feature is under development")}))}}(a,t,n,r))},postFeedback:function(a){return e(function(e){return function(a){var t={firstname:e.firstname,lastname:e.lastname,telnum:e.telnum,email:e.email,agree:e.agree,contactType:e.contactType,message:e.message};return fetch(b+"feedback.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert("Feedback recieved")})).catch(alert("this feature is under development"))}}(a))},fetchDishes:function(){e((function(e){return e(y(!0)),fetch(b+"dishes.json").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(w(a))})).catch((function(a){return e(M(a.message))}))}))},resetFeedbackForm:function(){e(z.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(b+"comments.json").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(L(a))})).catch((function(a){return e(O(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(D()),fetch(b+"promotions.json").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(F(a))})).catch((function(a){return e(C(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(j()),fetch(b+"leaders.json").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(k(a))})).catch((function(a){return e(S(a.message))}))}))}}}))(Le)),je=t(11),Se=t(25),De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(je.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(je.a)({},e,{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(je.a)({},e,{errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return Object(je.a)({},e,{comments:e.comments.concat(t)});default:return e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(je.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(je.a)({},e,{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Ae=t(92),Re=t(93),Te=t.n(Re),Ie={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},_e=Object(Se.createStore)(Object(Se.combineReducers)(Object(je.a)({dishes:De,comments:Ce,promotions:Fe,leaders:xe},Object(z.createForms)({feedback:Ie}))),Object(Se.applyMiddleware)(Ae.a,Te.a)),qe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(ge.Provider,{store:_e},r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(ke,null))))}}]),t}(n.Component);t(150),t(151);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,null)),document.getElementById("root"))},95:function(e,a,t){e.exports=t(152)}},[[95,1,2]]]);
//# sourceMappingURL=main.a6568c9a.chunk.js.map