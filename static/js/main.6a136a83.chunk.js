(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),n=c(19),s=c.n(n),a=(c(26),c(4)),j=c(5),o=c(7),l=c(6),d=(c(27),c(20)),b=c(11),h=c.p+"static/media/Yuliya.4c458d01.jpg",p=c.p+"static/media/Button.804d7836.jpg",O=c(0),x=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={aboutStyle:{},projectsStyle:{},resumeStyle:{},blogStyle:{},contactStyle:{},dropdownStyle:{},clicked:!1},e.clickHandler=function(t){window.innerWidth>600&&(e.setState({aboutStyle:{},projectsStyle:{},resumeStyle:{},blogStyle:{},contactStyle:{}}),e.setState(Object(d.a)({},t,{fontSize:"23px",backgroundColor:"rgb(212, 169, 25)",border:"1px solid white",borderRadius:"5px"}))),window.innerWidth<600&&e.setState({dropdownStyle:{display:"none"}})},e.showDropdown=function(){e.props.style(),e.setState({dropdownStyle:{}})},e.hideDropdown=function(){e.setState({clicked:!e.state.clicked})},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{id:"nav-bar",children:[Object(O.jsx)("img",{id:"avatar",src:h,alt:"yulia-picture"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{id:"large",className:"white",children:"Yuliya Yurkevich"}),Object(O.jsx)("p",{id:"small",className:"white",children:"Fullstack Software Engineer"})]}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("div",{class:"dropdown",children:[Object(O.jsx)("img",{class:"dropbtn",src:p,onMouseOver:this.showDropdown,onClick:this.hideDropdown}),Object(O.jsxs)("div",{class:"dropdown-content",style:this.state.dropdownStyle,children:[Object(O.jsx)(b.b,{to:"/",style:this.state.aboutStyle,onClick:function(){return e.clickHandler("aboutStyle")},children:"About "}),Object(O.jsx)(b.b,{to:"/projects",style:this.state.projectsStyle,onClick:function(){return e.clickHandler("projectsStyle")},children:"Projects "}),Object(O.jsx)(b.b,{to:"/blog",style:this.state.blogStyle,onClick:function(){return e.clickHandler("blogStyle")},children:"Blog "}),Object(O.jsx)(b.b,{to:"/resume",style:this.state.resumeStyle,onClick:function(){return e.clickHandler("resumeStyle")},children:"Resume "}),Object(O.jsx)(b.b,{to:"/contact",style:this.state.contactStyle,onClick:function(){return e.clickHandler("contactStyle")},children:"Contact "})]})]})]})}}]),c}(i.Component),u=c.p+"static/media/Photo.f4d515a2.jpg",m=c.p+"static/media/Photo1.f920714e.jpg",y=c.p+"static/media/Photo2.7b28bc7d.jpg",g=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={photo:u,dot1Style:{backgroundColor:"white"},dot2Style:{},dot3Style:{}},e.nextPhoto=function(){e.state.photo===u&&e.setState({photo:m,dot1Style:{},dot2Style:{backgroundColor:"white"}}),e.state.photo===m&&e.setState({photo:y,dot2Style:{},dot3Style:{backgroundColor:"white"}}),e.state.photo===y&&e.setState({photo:u,dot3Style:{},dot1Style:{backgroundColor:"white"}})},e.prevPhoto=function(){e.state.photo===u&&e.setState({photo:y,dotStyle:{},dot3Style:{backgroundColor:"white"},btnStyle:{opacity:"0.6"}}),e.state.photo===y&&e.setState({photo:m,dot3Style:{},dot2Style:{backgroundColor:"white"},btnStyle:{opacity:"0.6"}}),e.state.photo===m&&e.setState({photo:u,dot2Style:{},dot1Style:{backgroundColor:"white"},btnStyle:{opacity:"0.6"}})},e}return Object(j.a)(c,[{key:"render",value:function(){return console.log("2",this.props.style),Object(O.jsxs)("div",{id:"main-container",children:[Object(O.jsxs)("div",{id:"header",children:[Object(O.jsx)("h1",{children:"About me"}),Object(O.jsx)("p",{children:"Get to know me"}),Object(O.jsx)("hr",{id:"width-100"})]}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("div",{id:"flex",children:[Object(O.jsxs)("div",{id:"picture-container",style:this.props.style,children:[Object(O.jsx)("img",{id:"picture",src:this.state.photo,alt:"yuliya-pict"}),Object(O.jsx)("button",{id:"next",alt:"prev button",onClick:this.nextPhoto,children:" NEXT "}),Object(O.jsx)("button",{id:"prev",alt:"prev button",onClick:this.prevPhoto,children:" PREV "}),Object(O.jsx)("button",{id:"dot1",style:this.state.dot1Style}),Object(O.jsx)("button",{id:"dot2",style:this.state.dot2Style}),Object(O.jsx)("button",{id:"dot3",style:this.state.dot3Style})]}),Object(O.jsxs)("div",{id:"text-container",children:[Object(O.jsx)("p",{id:"no-margin",children:"Hello! My name is Yuliya and I am a Full Stack Software Engineer with a Bachelor\u2019s degree in Law and over five years of customer service and hospitality experience. A year ago I moved into a new career that will always keep me learning. In October 2020 I have graduated from Flatiron School as a Software Engineer. I am open to a job, collaboration and startups."}),Object(O.jsx)("h4",{className:"center",children:"Tech Stack"}),Object(O.jsxs)("div",{id:"flex-tech-stack",children:[Object(O.jsxs)("div",{id:"tech-flex-item",children:[Object(O.jsx)("p",{children:"HTML"})," ",Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"CSS"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Ruby"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"API"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Ruby on Rails"})]}),Object(O.jsxs)("div",{id:"tech-flex-item",children:[Object(O.jsx)("p",{children:"JavaScript"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"React.js"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Material UI"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"React Router"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"React Native"})]}),Object(O.jsxs)("div",{id:"tech-flex-item",children:[Object(O.jsx)("p",{children:"PostgreSQL"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"SQLite"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Heroku"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"GitHub"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Cloudinary Storage"})]})]})]})]})]})}}]),c}(i.Component),f=c.p+"static/media/Rails.42896fb7.jpeg",v=c.p+"static/media/Star.a0be86cf.jpg",S=c.p+"static/media/Gitignore.089770c4.jpg",w=c.p+"static/media/Heroku.77998fdd.jpg",k=c.p+"static/media/User.2f8f6c36.jpeg",R=c.p+"static/media/PGAdmin.f6c11166.jpg",C=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{id:"main-container",children:[Object(O.jsxs)("div",{id:"header",children:[Object(O.jsx)("h1",{children:"Blog"}),Object(O.jsxs)("p",{children:["I enjoy writing technical blogs about programming tools and techniques that I have learned. You can find all my blogs on",Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/",target:"_blank",children:" medium.com"})]}),Object(O.jsx)("hr",{})]}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("div",{id:"grid-container",children:[Object(O.jsxs)("div",{id:"grid-item",children:[Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:Object(O.jsx)("img",{id:"blog-pic",src:f})})," ",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:"Rails. Polymorphic Association."}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Going deep into Active Record associations, exploring relationship where a model can belong to one OR another model. "}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Oct 13, 2020"})]}),Object(O.jsxs)("div",{id:"grid-item",children:[Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:Object(O.jsx)("img",{id:"blog-pic",src:k})})," ",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:"Uploading User Picture."}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Detailed tutorial in 3 parts that will teach you how to upload a profile picture from a user local machine to React.js App with Rail backend."})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Nov  1, 2020 "})]}),Object(O.jsxs)("div",{id:"grid-item",children:[Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:Object(O.jsx)("img",{id:"blog-pic",src:v})})," ",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:"Integrating 5-Star Rating into React App."}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Material UI is a great Library for React.js. Learn how to use its components."})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Now, 25, 2020"})]}),Object(O.jsxs)("div",{id:"grid-item",children:[Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:Object(O.jsx)("img",{id:"blog-pic",src:w})}),"  ",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:"Deploying Rails and React App to Heroku."}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"In this blog I am writing about my experience of deploying React APP to Heroku Hosting."})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Dec, 30, 2020"})]}),Object(O.jsxs)("div",{id:"grid-item",children:[Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:Object(O.jsx)("img",{id:"blog-pic",src:R})})," ",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:"Heroku $ pgAdmin"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"In this blog I teach how to to access and manage your PostgreSQL database after you deployed your App to Heroku. "})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Jan, 10 2020"})]}),Object(O.jsxs)("div",{id:"grid-item",children:[Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:Object(O.jsx)("img",{id:"blog-pic",src:S})})," ",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774",target:"_blank",children:"How to remove credentials from GitHub."}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"What to do if you found out that you accidently pushed file that has credentials or keys to GitHub? Here you will find a great solution to fix it."})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Feb, 7, 2020"})]})]})]})}}]),c}(i.Component),P=c.p+"static/media/Certificate.0612734a.jpg",I=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsx)("div",{id:"main-container",children:Object(O.jsxs)("div",{id:"width-70",children:[Object(O.jsxs)("div",{className:"center",children:[Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("h3",{id:"no-margin",children:"Yuliya Yurkevich"}),Object(O.jsx)("p",{className:"center",children:"Fullstack Software Engineer"}),Object(O.jsxs)("div",{id:"flex-resume",children:[Object(O.jsxs)("div",{id:"flex-item",children:[Object(O.jsx)("p",{children:" (1) 347-357-5454 "}),Object(O.jsx)("p",{children:" juliana.ny@gmail.com"}),Object(O.jsx)("p",{children:"Brooklyn, NY 11223 "})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("a",{href:"https://github.com/yulia-2008",children:" GitHub"})]}),Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("a",{href:"https://www.linkedin.com/in/yuliya-yurkevich-b82a591b8/",children:" LinkedIn"})]}),Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("a",{href:"https://juliana-ny2008.medium.com/",target:"_blank",children:" Blog"})," "]})]})]})]}),Object(O.jsx)("p",{children:"Experienced in Ruby on Rails and JavaScript based programming. With a Bachelor\u2019s degree in Law and over five years of customer service and hospitality experience, I bring strong skills in team work, collaboration and working independently. Results-oriented with a positive attitude. Looking forward to applying my software engineering skills to help your business grow. "}),Object(O.jsx)("h3",{className:"center",children:"Technical Skills"}),Object(O.jsxs)("div",{id:"flex-tech-stack",children:[Object(O.jsxs)("div",{id:"tech-flex-item",children:[Object(O.jsx)("p",{children:"HTML"})," ",Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"CSS"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Ruby"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"API"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Ruby on Rails"})]}),Object(O.jsxs)("div",{id:"tech-flex-item",children:[Object(O.jsx)("p",{children:"JavaScript"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"React.js"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Material UI"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"React Router"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"React Native"})]}),Object(O.jsxs)("div",{id:"tech-flex-item",children:[Object(O.jsx)("p",{children:"PostgreSQL"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"SQLite"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Heroku"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"GitHub"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Cloudinary Storage"})]})]}),Object(O.jsx)("h3",{className:"center",children:"Technical Projects"}),Object(O.jsxs)("b",{children:[Object(O.jsx)("a",{href:"http://www.nycable.net/",children:" NYCABLE"})," \xa0 | \xa0",Object(O.jsx)("a",{href:"https://www.youtube.com/watch?v=ST63TI827O8",children:"DEMO"})]}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"\u2022 An Info-Portal about all internet & TV providers in NYC, including payment plans, latest deals and more."}),Object(O.jsx)("p",{children:"\u2022 Built with React.js, Ruby on Rails, PostgreSQL"}),Object(O.jsx)("p",{children:"\u2022 Technologies used: Nested React Routes, Cloudinary Storage, Material UI, Browser Local Storage, JWT, Serializer, CSS"}),Object(O.jsx)("p",{children:"\u2022 Hosted on Heroku, Google DNS"}),Object(O.jsx)("br",{}),Object(O.jsxs)("b",{children:[" MY KITHEN  \xa0 | \xa0",Object(O.jsx)("a",{href:"https://www.youtube.com/watch?v=1pHGREsQpdU",children:"DEMO"})]}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:" \u2022 Recipes App. Users can add recipes, select and search ingredients."}),Object(O.jsx)("p",{children:"\u2022 Used Spoonacular open data source API for recipe content "}),Object(O.jsx)("p",{children:"\u2022 React.js and React Router for Frontend"}),Object(O.jsx)("p",{children:"\u2022 Ruby on Rails, PostgresSQL for Backend "}),Object(O.jsx)("br",{}),Object(O.jsxs)("b",{children:["PONDER  \xa0 | \xa0",Object(O.jsx)("a",{href:"https://www.youtube.com/watch?v=1pHGREsQpdU",children:"DEMO"})]}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"\u2022 Single page Park Aplication. Browse parks by choosing a US State, add likes, leave comments."}),Object(O.jsx)("p",{children:"\u2022 Built with Vanila JavaScript, Ruby on Rails and PostgreSQL"}),Object(O.jsx)("h3",{className:"center",children:"Work experience"}),Object(O.jsx)("b",{children:"Nomadic Hospitality LLC (Za-Ya Ramen Restaurant)"}),Object(O.jsx)("p",{children:"Cook, Waiter (09/2018 - 03/2020)"}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"\u2022 Ensured exceptional quality food preparation by cooking and serving all menu items and specials"}),Object(O.jsx)("p",{children:"\u2022 Maintained store inventory levels by following company procedures, placed orders as needed"}),Object(O.jsx)("p",{children:"\u2022 Performed daily tasks including opening/closing restaurant, customer service, ensuring accurate orders"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"Juice Generation Inc"}),Object(O.jsx)("p",{children:"Sales team member  (10/2011 - 07/2017)"}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"\u2022 Provided excellent customer service by engaging customers and accurately processing their orders"}),Object(O.jsx)("p",{children:"\u2022 Operate point of service terminal and consult appropriate team members for troubleshooting, maintenance"}),Object(O.jsx)("p",{children:"\u2022 Participated in daily activities including opening the store, making bank deposits, food preparation and more"})]}),Object(O.jsx)("h3",{className:"center",children:"Education"}),Object(O.jsx)("b",{children:"Flatiron School "}),Object(O.jsx)("p",{children:"   New York, NY "}),Object(O.jsx)("p",{children:"06/ 2020 - 10/2020"}),Object(O.jsx)("p",{children:"Full Stack Web Development, Ruby on Rails and JavaScript program"}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"International Humanitarian and Economic Institute "}),Object(O.jsx)("p",{children:"Minsk, Belarus "}),Object(O.jsx)("p",{children:"09/2002 - 06/ 2007"}),Object(O.jsx)("p",{children:"Bachelor's Degree, Jurisprudence "}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("img",{id:"certificate",src:P})]})})}}]),c}(i.Component),H=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{id:"main-container",children:[Object(O.jsxs)("div",{id:"header",children:[Object(O.jsx)("h1",{children:"Projects"}),Object(O.jsx)("p",{children:" Currently I am working on a new project (Android Application) and plan to publish it on Play Store. Demo is coming soon, come back to see it."}),Object(O.jsx)("hr",{})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{id:"width",children:[Object(O.jsx)("b",{id:"medium",children:"NYCABLE"})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{id:"medium",children:[" ",Object(O.jsx)("a",{href:"http://www.nycable.net/",children:" www.nycable.net"})," "]}),Object(O.jsxs)("p",{children:[" GitHub: ",Object(O.jsx)("a",{href:"https://github.com/yulia-2008/nycable_frontend",children:"Frontend"})," \xa0",Object(O.jsx)("a",{href:"https://github.com/yulia-2008/nycable_backend",children:"Backend"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"An Info-Portal about all internet & TV providers in NYC, payment plans, latest deals, areas of coverage and available technicians. "}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{id:"flex",children:[Object(O.jsxs)("div",{id:"flex-item",children:[Object(O.jsx)("iframe",{src:"https://www.youtube.com/embed/ST63TI827O8/"}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("b",{id:"medium",children:"Features"}),Object(O.jsx)("p",{children:"\u2022 Creating an account (as a client or technician)."}),Object(O.jsx)("p",{children:"\u2022 Logging in/Logging out."}),Object(O.jsx)("p",{children:"\u2022 Editing User Profile."}),Object(O.jsx)("p",{children:"\u2022 Uploading User Profile Picture from user machine."}),Object(O.jsx)("p",{children:"\u2022 Filtered search of technicians (base on city and company)."}),Object(O.jsx)("p",{children:"\u2022 Rating Internet Provider or Technician."}),Object(O.jsx)("p",{children:"\u2022 Writing a review about Internet Provider or Technician"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{id:"medium",children:"Frontend"}),Object(O.jsx)("p",{children:"\u2022 Built with React.js"}),Object(O.jsx)("p",{children:"\u2022 Used Browser Local Storage for making easier user experience during login process."}),Object(O.jsx)("p",{children:"\u2022 Utilized React Router (Nested Routing) to establish a dynamic routing system through the web app."}),Object(O.jsx)("p",{children:"\u2022 Integrated  Progress Spinner and Rating Components from Material UI library."}),Object(O.jsx)("p",{children:"\u2022 Styling with CSS. Responsive web design makes easy navigation on different devices."}),Object(O.jsx)("p",{children:"\u2022 Hosted on Heroku, Google DNS."}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{id:"medium",children:"Backend"}),Object(O.jsx)("p",{children:"\u2022 Built with Ruby on Rails and PostgreSQL database. "}),Object(O.jsx)("p",{children:"\u2022 Integrated Active Storage and Cloudinary Storage for uploading and storing users profile pictures."}),Object(O.jsx)("p",{children:"\u2022 Models Serializer for rendering necessary data."}),Object(O.jsx)("p",{children:"\u2022 Models relationship set up using Polymorphic Association, that way one model can belong one OR another model."}),Object(O.jsx)("p",{children:"\u2022 JWT for securely transmitting information."}),Object(O.jsx)("p",{children:"\u2022 Created custom routes help to handles all incoming requests from the frontend of the app."})]})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("b",{id:"medium",children:"MY KITCHEN"}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("p",{children:["GitHub: \xa0",Object(O.jsx)("a",{href:"https://github.com/yulia-2008/my-kitchen-frontend",children:"Frontend"})," \xa0",Object(O.jsx)("a",{href:"https://github.com/yulia-2008/MyKitchen-backend",children:"Backend"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Cooking Application that allows you to search and celect ingredients and the app will find the recipes for you to cook. App was built during Flatiron School study in a collaboration with Roman Opalacz. "}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{id:"flex",children:[Object(O.jsxs)("div",{id:"flex-item",children:[Object(O.jsx)("iframe",{src:"https://www.youtube.com/embed/uw5Jd1ter0g/"}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("b",{id:"medium",children:"Features"}),Object(O.jsx)("p",{children:"\u2022 Users can search and select ingredients."}),Object(O.jsx)("p",{children:"\u2022 Find recipes with selected ingredients."}),Object(O.jsx)("p",{children:"\u2022 Add / Delete recipes to user 's  favorites."}),Object(O.jsx)("p",{children:"\u2022 Editing User Profile."})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{id:"medium",children:"Frontend"}),Object(O.jsx)("p",{children:"\u2022 Built with React.js, React Router, Spoonacular API"}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{id:"medium",children:"Backend"}),Object(O.jsx)("p",{children:"\u2022 Built with Ruby on Rails, PostgreSQL"})]})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("b",{id:"medium",children:"PONDER"}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("p",{children:["GitHub: \xa0",Object(O.jsx)("a",{href:"https://github.com/yulia-2008/ponder_frontend",children:"Frontend"})," \xa0",Object(O.jsx)("a",{href:"https://github.com/yulia-2008/ponder_backend",children:"Backend"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Single page Park App. App was built during Flatiron School study in a collaboration with Taevon Jordan. "}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{id:"flex",children:[Object(O.jsxs)("div",{id:"flex-item",children:[Object(O.jsx)("iframe",{src:"https://www.youtube.com/embed/1pHGREsQpdU/"}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsx)("b",{id:"medium",children:"Features"}),Object(O.jsx)("p",{children:"\u2022 Leave/Delete comments."}),Object(O.jsx)("p",{children:"\u2022 Add likes"}),Object(O.jsx)("p",{children:"\u2022 Leave/Delete comments."})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{id:"medium",children:"Frontend"}),Object(O.jsx)("p",{children:"\u2022 Built with Vanilla JavaScript"}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{id:"medium",children:"Backend"}),Object(O.jsx)("p",{children:"\u2022 Built with Ruby on Rails and PostgreSQL"})]})]})]})]})}}]),c}(i.Component),A=c.p+"static/media/GitHubLogo.3b46725c.png",L=c.p+"static/media/LinkedInLogo.a29f1b11.png",N=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{id:"main-container",children:[Object(O.jsxs)("div",{id:"header",children:[Object(O.jsx)("h1",{children:"Contact"}),Object(O.jsx)("p",{children:"Feel free to contact me anytime."}),Object(O.jsx)("hr",{id:"width-100"})]}),Object(O.jsxs)("div",{className:"center",children:[Object(O.jsx)("h3",{children:"juliana.ny2008@gmail.com"}),Object(O.jsx)("h3",{children:"+1(347)3575454"}),Object(O.jsx)("a",{href:"https://github.com/yulia-2008",children:Object(O.jsx)("img",{className:"logo",src:A})}),Object(O.jsx)("a",{href:"https://www.linkedin.com/in/yuliya-yurkevich-b82a591b8/",children:Object(O.jsx)("img",{className:"logo",src:L})})]})]})}}]),c}(i.Component),B=c(2),F=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={pictureStyle:{}},e.pictureStyle=function(){e.setState({pictureStyle:{zIndex:"-1"}}),console.log("1",e.state.pictureStyle)},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return console.log("2",this.state.pictureStyle),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(b.a,{hashType:"noslash",children:Object(O.jsxs)("div",{id:"flex",children:[Object(O.jsx)(x,{style:this.pictureStyle}),Object(O.jsx)(B.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(g,{style:e.state.pictureStyle})}}),Object(O.jsx)(B.a,{exact:!0,path:"/projects",component:H}),Object(O.jsx)(B.a,{exact:!0,path:"/blog",component:C}),Object(O.jsx)(B.a,{exact:!0,path:"/resume",component:I}),Object(O.jsx)(B.a,{exact:!0,path:"/contact",component:N})]})})})}}]),c}(r.a.Component),E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),i(e),r(e),n(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),E()}},[[34,1,2]]]);
//# sourceMappingURL=main.6a136a83.chunk.js.map