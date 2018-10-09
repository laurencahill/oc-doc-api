(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){e.exports=a(63)},34:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(27),s=a.n(c),o=(a(34),a(3)),r=a(4),i=a(6),m=a(5),u=a(7),h=(a(20),a(65)),d=a(8),p=a.n(d),g=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,a,n,l,c,s){return t.service.post("/signup",{username:e,password:a,emailAddress:n,firstName:l,lastName:c,userLocation:s}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var a=p.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL,withCredentials:!0});this.service=a},f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).logout=function(){a.service.logout().then(function(){a.props.setTheUserInTheAppComponent(null)})},a.state={loggedInUser:null},a.service=new g,a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({loggedInUser:e.userInSession})}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"./images/ocdoc3.png",width:"150px",alt:"OcDoc"})),l.a.createElement("nav",{className:"nav-style"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.a,{to:"/doctors",activeStyle:{fontWeight:"bold",color:"blue"}},"Find an ocularist")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/doctors/create",activeStyle:{fontWeight:"bold",color:"blue"}},"Add your ocularist")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/account/:id",activeStyle:{fontWeight:"bold",color:"blue"}},"View account")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/logout",activeStyle:{fontWeight:"bold",color:"blue"},onClick:function(){return e.logout()}},"Logout"))))):l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"./images/ocdoc3.png",width:"150px",alt:"OcDoc"})),l.a.createElement("nav",{className:"nav-style"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.a,{to:"/doctors",activeStyle:{fontWeight:"bold",color:"blue"}},"Find an ocularist")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/doctors/create",activeStyle:{fontWeight:"bold",color:"blue"}},"Add your ocularist")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/account/:id",activeStyle:{fontWeight:"bold",color:"blue"}},"View account")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/signup",activeStyle:{fontWeight:"bold",color:"blue"}},"Signup")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/login",activeStyle:{fontWeight:"bold",color:"blue"}},"Login")))))}}]),t}(n.Component),E=a(59),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).getAllDoctors=function(){p.a.get(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/doctors").then(function(t){e.setState({listOfDocs:t.data.listOfDocs})}).catch(function(e){console.log(e)})},e.state={listOfDocs:[]},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getAllDoctors()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,this.state.listOfDocs.map(function(e,t){return l.a.createElement("div",{key:e._id},l.a.createElement("img",{src:"{doctor.docImage}",alt:"docImage"}),l.a.createElement(E.a,{to:"/doctors/".concat(e._id)},l.a.createElement("h3",null,e.docName)),l.a.createElement("p",null,"Average Rating: ",e.avgRating),l.a.createElement("p",null,"Specialties: ",e.specialties),l.a.createElement("p",null,"Details: ",e.docDetails," "))})))}}]),t}(n.Component),b=a(13),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.docName,n=a.state.specialties,l=a.state.docDetails;p.a.post(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/doctors/create",{docName:t,specialties:n,docDetails:l}).then(function(){a.props.getData(),a.setState({docName:"",specialties:[],docDetails:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(b.a)({},n,l))},a.state={docName:"",specialties:[],docDetails:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"docName",value:this.state.docName,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Specialties:"),l.a.createElement("input",{type:"text",name:"specialties",value:this.state.specialties,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Details:"),l.a.createElement("input",{type:"text",name:"docDetails",value:this.state.docDetails,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Submit Doctor"})))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.docName,n=a.state.specialties,l=a.state.docDetails;p.a.put(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/doctors/edit/".concat(a.state._id),{docName:t,specialties:n,docDetails:l},{withCredentials:!0}).then(function(e){a.getDoc(),a.props.history.push("/doctors")}).catch(function(e){return console.log(e)})},a.getDoc=function(){var e=a.props.match.params;p.a.get(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/doctors/edit/".concat(e.id)).then(function(e){var t=e.data;a.setState(t)}).catch(function(e){console.log(e)})},a.handleChangeDocName=function(e){a.setState({docName:e.target.value})},a.handleChangeSpecialties=function(e){a.setState({specialties:e.target.value})},a.handleChangeDocDetails=function(e){a.setState({docDetails:e.target.value})},a.state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getDoc()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"docName",value:this.state.docName,onChange:function(t){return e.handleChangeDocName(t)}}),l.a.createElement("label",null,"Specialties:"),l.a.createElement("input",{type:"text",name:"specialties",value:this.state.specialties,onChange:function(t){return e.handleChangeSpecialties(t)}}),l.a.createElement("label",null,"Details:"),l.a.createElement("textarea",{name:"details",value:this.state.docDetails,onChange:function(t){return e.handleChangeDocDetails(t)}}),l.a.createElement("input",{type:"submit",value:"Save Changes"})))}}]),t}(n.Component),O=(a(26),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).showComments=function(){if(a.props.theDoc.docComments)return a.props.theDoc.docComments.map(function(e,t){return l.a.createElement("div",{key:e._id,className:"comment-info"},l.a.createElement("div",{className:"form-container"},l.a.createElement("div",{className:"comment-details"},l.a.createElement("div",{className:"comment"},l.a.createElement("p",{className:"label-full"},"Author:")," ",l.a.createElement("p",null,e.author)),l.a.createElement("div",{className:"comment"},l.a.createElement("p",{className:"label-full"},"Upload Date:")," ",l.a.createElement("p",null," ",e.uploadDate))),l.a.createElement("div",{className:"comment-details"},l.a.createElement("div",{className:"comment"},l.a.createElement("p",{className:"label-full"},"Visit Date:")," ",l.a.createElement("p",null," ",e.visitDate," ")),l.a.createElement("div",{className:"comment"},l.a.createElement("p",{className:"label-full"},"Rating: ")," ",l.a.createElement("p",null,e.rating))),l.a.createElement("div",{className:"comment"},l.a.createElement("p",{className:"label-full"},"Reason for Visit:")," ",l.a.createElement("p",null," ",e.visitReason," ")),l.a.createElement("div",{className:"comment"},l.a.createElement("p",{className:"label-full"},"Comments:")," ",l.a.createElement("p",null," ",e.comment))))})},a.state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(this.props.theDoc.docComments),l.a.createElement("div",null,this.showComments())}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.visitDate,n=a.state.rating,l=a.state.visitReason,c=a.state.comment;p.a.post(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/doctors/".concat(a.props.theDoc._id),{visitDate:t,rating:n,visitReason:l,comment:c},{withCredentials:!0}).then(function(e){console.log("-------------",e),a.props.getData(),a.setState({visitDate:"",rating:"",visitReason:"",comment:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(b.a)({},n,l))},a.state={visitDate:"",rating:"",visitReason:"",comment:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"comment-container"},l.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"form-container"},l.a.createElement("h2",null,"LEAVE A COMMENT:"),l.a.createElement("div",{className:"comment-row"},l.a.createElement("label",{className:"label-full"},"Visit Date:"),l.a.createElement("input",{type:"date",name:"visitDate",className:"comment-input",value:this.state.visitDate,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("div",{className:"comment-row"},l.a.createElement("label",{className:"label-full"},"Rating:"),l.a.createElement("input",{type:"number",name:"rating",className:"comment-input",value:this.state.rating,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("div",{className:"comment-row"},l.a.createElement("label",{className:"label-full"},"Reason for Visit:"),l.a.createElement("input",{type:"text",name:"visitReason",className:"comment-input",value:this.state.visitReason,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("div",{className:"comment-row"},l.a.createElement("label",{className:"label-full"},"Comment:"),l.a.createElement("input",{type:"text",name:"comment",className:"comment-input",value:this.state.comment,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("div",{className:"comment-row"},l.a.createElement("input",{type:"submit",value:"Submit Comment",className:"comment-input"})))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getDoc=function(){var e=a.props.match.params;p.a.get(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/doctors/".concat(e.id)).then(function(e){var t=e.data;a.setState(t),console.log(">>>>>",a.state)}).catch(function(e){console.log(e)})},a.deleteDoc=function(){var e=a.props.match.params;p.a.delete(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/doctors/delete/".concat(e.id)).then(function(e){a.props.history.push("/doctors")}).catch(function(e){console.log(e)})},a.state={avgRating:0},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getDoc()}},{key:"render",value:function(){var e=this,t=this.state.avgRating;return console.log(t.toFixed(1)),l.a.createElement("div",null,l.a.createElement("h1",null,this.state.docName),l.a.createElement("p",null,"Rating: ",this.state.avgRating.toFixed(1)),l.a.createElement("p",null,"Specialties: ",this.state.specialties),l.a.createElement("p",null,"Details: ",this.state.docDetails),l.a.createElement("button",{onClick:function(){return e.deleteDoc()}},"Delete Doctor"),l.a.createElement(E.a,{to:"/doctors/edit/".concat(this.state._id)},"Edit Doctor"),l.a.createElement("div",null,l.a.createElement(O,{theDoc:this.state})),l.a.createElement("div",null,l.a.createElement(D,{theDoc:this.state})))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,l=a.state.emailAddress,c=a.state.firstName,s=a.state.lastName,o=a.state.userLocation;a.service.signup(t,n,l,c,s,o).then(function(e){a.setState({username:"",password:"",emailAddress:"",firstName:"",lastName:"",userLocation:""}),a.props.setTheUserInTheAppComponent(e),a.props.history.push("/doctors")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(b.a)({},n,l))},a.state={username:"",password:"",emailAddress:"",firstName:"",lastName:"",userLocation:""},a.service=new g,a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"page-info"},l.a.createElement("div",{className:"container-info"},l.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"form-container"},l.a.createElement("div",{className:"login-column"},l.a.createElement("label",{className:"label-full"},"Username:"),l.a.createElement("input",{type:"text",name:"username",className:"apply-input",value:this.state.username,placeholder:"johndoe",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",{className:"label-full"},"Password:"),l.a.createElement("input",{name:"password",className:"apply-input",value:this.state.password,placeholder:"*******",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",{className:"label-full"},"Email Address:"),l.a.createElement("input",{type:"email",name:"emailAddress",className:"apply-input",value:this.state.emailAddress,placeholder:"john@doe.com",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",{className:"label-full"},"First Name:"),l.a.createElement("input",{type:"text",name:"firstName",className:"apply-input",value:this.state.firstName,placeholder:"John",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",{className:"label-full"},"Last Name:"),l.a.createElement("input",{type:"text",name:"lastName",className:"apply-input",value:this.state.lastName,placeholder:"Doe",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",{className:"label-full"},"Location:"),l.a.createElement("input",{type:"text",name:"userLocation",className:"apply-input",value:this.state.userLocation,placeholder:"city, state, country",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Signup"}))),l.a.createElement("p",null,"Already have account?",l.a.createElement(E.a,{to:"/login"}," Login"))))}}]),t}(n.Component),y=(a(61),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:"",password:""}),a.props.setTheUserInTheAppComponent(e)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(b.a)({},n,l))},a.state={username:"",password:""},a.service=new g,a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"page-info"},l.a.createElement("div",{className:"container-info"},l.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"form-container"},l.a.createElement("div",{className:"login-column"},l.a.createElement("div",{className:"login-row"},l.a.createElement("label",{className:"label-full"},"Username:"),l.a.createElement("input",{type:"text",name:"username",className:"login-input",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("div",{className:"login-row"},l.a.createElement("label",{className:"label-full"},"Password:"),l.a.createElement("input",{name:"password",className:"login-input",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("input",{type:"submit",value:"Login"}))),l.a.createElement("p",null,"Don't have an account? ",l.a.createElement(E.a,{to:"/signup"}," Signup"))))}}]),t}(n.Component)),U=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).getAccountDetails=function(){p.a.get(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/account/".concat(e.state._id),{withCredentials:!0}).then(function(t){e.setState({userImage:t.data.theUser.userImage,username:t.data.theUser.username,emailAddress:t.data.theUser.emailAddress,firstName:t.data.theUser.firstName,lastName:t.data.theUser.lastName,userLocation:t.data.theUser.userLocation})}).catch(function(e){console.log(e)})},e.deleteUser=function(){var t=e.props.match.params;console.log(">>>>>>>>>>>>>>calling delete function"),p.a.delete(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/delete/".concat(t.id)).then(function(t){console.log("/////////////the response from delete",t),e.props.history.push("/signup")}).catch(function(e){console.log(e)})},e.state={},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getAccountDetails()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"page-info"},l.a.createElement("div",{className:"container-info"},l.a.createElement("div",{className:"login-column"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:this.state.userImage,alt:"userImage"})),l.a.createElement("label",{className:"label-full"},"Username:"),this.state.username,l.a.createElement("label",{className:"label-full"},"Email Address:"),this.state.emailAddress,l.a.createElement("label",{className:"label-full"},"First Name:"),this.state.firstName,l.a.createElement("label",{className:"label-full"},"Last Name:"),this.state.lastName,l.a.createElement("label",{className:"label-full"},"Location:"),this.state.userLocation),l.a.createElement("button",{onClick:function(){return e.deleteUser()}},"Delete Account"),l.a.createElement(E.a,{to:"/edit"},"Edit Account")))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.userImage,n=a.state.username,l=a.state.emailAddress,c=a.state.firstName,s=a.state.lastName,o=a.state.userLocation;console.log("~~~~~~~~~~~~updating user info"),p.a.post(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/edit/".concat(a.state._id),{userImage:t,username:n,emailAddress:l,firstName:c,lastName:s,userLocation:o},{withCredentials:!0}).then(function(e){console.log("```````````````response from update",e),a.getUser(),a.props.history.push("/account")}).catch(function(e){return console.log(e)})},a.getUser=function(){var e=a.props.match.params;p.a.post(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/edit/".concat(e.id)).then(function(e){var t=e.data;a.setState(t)}).catch(function(e){console.log(e)})},a.handleChangeUserImage=function(e){a.setState({userImage:e.target.value})},a.handleChangeUsername=function(e){a.setState({username:e.target.value})},a.handleChangeEmailAddress=function(e){a.setState({emailAddress:e.target.value})},a.handleChangeFirstName=function(e){a.setState({firstName:e.target.value})},a.handleChangeLastName=function(e){a.setState({lastName:e.target.value})},a.handleChangeUserLocation=function(e){a.setState({userLocation:e.target.value})},a.state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"User Image:"),l.a.createElement("input",{type:"file",name:"userImage"}),l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChangeUsername(t)}}),l.a.createElement("label",null,"Email Address:"),l.a.createElement("input",{type:"text",name:"emailAddress",value:this.state.emailAddress,onChange:function(t){return e.handleChangeEmailAddress(t)}}),l.a.createElement("label",null,"First Name:"),l.a.createElement("input",{type:"text",name:"firstName",value:this.state.firstName,onChange:function(t){return e.handleChangeFirstName(t)}}),l.a.createElement("label",null,"Last Name:"),l.a.createElement("input",{type:"text",name:"lastName",value:this.state.lastName,onChange:function(t){return e.handleChangeLastName(t)}}),l.a.createElement("label",null,"Location:"),l.a.createElement("input",{type:"text",name:"userLocation",value:this.state.location,onChange:function(t){return e.handleChangeUserLocation(t)}}),l.a.createElement("input",{type:"submit",value:"Save Changes"})))}}]),t}(n.Component),A=a(67),w=a(64),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).logMeIn=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null},a.service=new g,a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),l.a.createElement("div",{className:"App"},l.a.createElement(f,{setTheUserInTheAppComponent:this.logMeIn,userInSession:this.state.loggedInUser}),l.a.createElement("div",{className:"page"},l.a.createElement(A.a,null,l.a.createElement(w.a,{exact:!0,path:"/doctors",component:v}),l.a.createElement(w.a,{exact:!0,path:"/doctors/create",component:N}),l.a.createElement(w.a,{exact:!0,path:"/doctors/:id",component:j}),l.a.createElement(w.a,{exact:!0,path:"/doctors/edit/:id",component:C}),l.a.createElement(w.a,{exact:!0,path:"/login",render:function(){return l.a.createElement(y,Object.assign({},e.props,{setTheUserInTheAppComponent:e.logMeIn}))}}),l.a.createElement(w.a,{exact:!0,path:"/signup",render:function(){return l.a.createElement(S,Object.assign({},e.props,{setTheUserInTheAppComponent:e.logMeIn}))}}),l.a.createElement(w.a,{exact:!0,path:"/edit",component:L}),l.a.createElement(w.a,{exact:!0,path:"/account",component:U}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(66);s.a.render(l.a.createElement(_.a,null,l.a.createElement(w.a,{component:I})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.3d4f4c97.chunk.js.map