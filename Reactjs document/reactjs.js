                                             React Js
==========================================================================================================================================
							 Introduction
1 Node js & NPM Installation
2 React JS Introduction
3 Virtual DOM in react js
4 How to add React DEV tool extension in chrome
5 How to add React to website without installing Node JS
6 How to create React App in visual studio code
7 React JS Folder Structure
8 Import React project from visual studio code to GitHub
9 How to dowload react project from GitHub to visual studio code
10 ECMA Script - ES6 in react js
-----
11 Javascript XML - JSX in react js
12 Props in react js
13 State in react js
14 Difference between Props and State in react js
15 Lifecycle methods in react js
16 This keyword in react js
17 Event Handling in react js
18 CSS in react js
19 Sass in react js // additional
20 React Forms
21 Fragments in react js
22 List method in react js
23 React Keys
24 React Hooks
25 usestate in react js
26 useeffect in react js
27 React Router
28 Redux in react js
29 React Bootstrap						

===============
Next level live time project topic for reactjs beginner 100%


(00:00:00) Intro
(00:07:19) Why React?
(00:24:12) Setup
(00:43:07) JSX
(01:05:00) React_Functional Components
(01:20:35) React_Applying CSS Styles
(01:32:05) React_Click Events
(01:46:40) React_useState Hook
(02:15:32) React_List and Keys
(02:32:15) React_Icons.
(03:13:35) React_Props & Prop Drilling
(03:42:33) React_Controlled Inputs
(04:28:53) React_Project Challenge 1
(04:45:19) React_UseRef Hook.
(04:50:31) React_UseEffect Hook.
(04:59:33) React_Local Storage.
(05:03:27) React_Fetch API DATA.
(05:44:22) React_CRUD Operations.
(06:16:26) React_Project Challenge 2 Fetch Data
(06:42:24) React_Router_V6.
(08:21:56) React_CSS.
(08:29:34) React_Axios API Requests
(09:10:17) React_Custom Hooks.
(09:38:35) React_Context API & useContext Hook.
(10:05:58) Deploy Your React Apps
	 
==========================================================================================================================================						  
*) React is javascript libary for bulding user interface(bond between two thinks)
*) It is MVC(model view controller)						  
*) ReactJS is a open source component base frontend libary responsible for  only for view layer of the application
*) create by facebook
*)react use to build single page application
                        Single Page Application
				      -----------------------------		
						
*)Is the web application that interact with web browser(Dynamicaly rewrite the current web page with new data from web server)
Instead(பதிலாக) of the default method of browser loading entire new page
*)the goal is faster transition that make the websit feel more like a nagitve app


                        Native App
					  -------------- 
					   
*)A negative app once is installed directly on the smartphone and can work in most cases with no imternet connectivity depending on the nature app
		
                       ReactJs Virtual DOM
					 ------------------------  
					   
*)React only change what need to be change	
*)React create virtual DOM in memory(Document Object Model (DOM))
*)Real DOM is much slower than manipulation of virtual DOM because noting get drawn on screen
				
                     REACT ES6
				-----------------	 
					 
*)ES6 stand for ECMA script 6 version 	()	
*)ECMAScript is standarization of java script program language
*) use ES6 FEATURE we write less and DoMore

some new feature like
*)class
*)arrow function
*)variable(let,const,var)	

class   : object act like variable of the class
ARREO   : Line of code we using shortly	(syntax)
variable: outside function is caled global variable.Inside function is valled local variable
const   : once we assign variable we cannot change
let     : loop variable print itself loop only not outside 
==========================================================================================================================================-------------------------------------------------------------------------------------------------------------------------------------
                                             first class (introtuction)
										--------------------------------------	
import './App.css';
//import image1 from './logo.svg'

//const name = 'sundar';
//const hello = <h1>Hello {name}</h1> 
//const hello = <h1>Hello {1+1}</h1> // thise is expression evolution

function functionName(user) {
  if(user) {
  return user.fname + ' ' +user.lname;
  }
  else {
    return 'user';
  }
}

const user = {
  fname: 'shunmuga',
  lname: 'sundaram',
 // image: image1
};

//const hello =<h1>Hello {functionName()}</h1>;
//const hello =<img src = {user.image}></img>
const hello =<h1>Hello {functionName(user)}</h1>;
function App() {
  return (
     <div>
      {hello}  we want to pass the expression than only print
      {hello}
      </div>

      
  );
}

export default App;
---------------------------------------------------------------------------------------------------------------------------		
                            (second class)  Elements
---------------------------------------------------------------------------------------------------------------------------
Element is smallest  Building block	
Element is made up compountes
React element are immutable			

---------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
---------------------------------------------
//const elem = <h1>Hello</h1>
//const elem = <h1>Time is {new Date().toLocaleTimeString()}</h1>

function showtime()
{
  const elem = (
    <div>
    <h1>Time is {new Date().toLocaleTimeString()}</h1>
    <h1>someting</h1>
    </div>
  );


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    elem
);
}
setInterval(showtime,1000);
-----------------------------------------------------
  
                     compontents
*) It just javascript functiom
Two type of compount 

*)Function compount
*)class compount
------------------------------------------------------------
Function compount
------------------
import logo from './logo.svg';
import './App.css';

function App(props) { // is function compounts
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {props.name}//
        </p>
        <a
          classN ame="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


===========================================================================================

class component and prpos
-------------------------------
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component { // class compount
  render()
  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {this.props.name} 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;

-------------------------------------------------------------			
how we can use app.js as a element
--------------------------------
const elem = <App name="Hello world me"/>;
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   elem
  //<React.StrictMode>
    //<App name="ABC"/>
  //</React.StrictMode>
);								   

-----------------------------------------------------------------
import logo from './logo.svg';
import './App.css';


function DisplayImage(props)
{
  return(
    <img src={logo} className="App-logo" alt="logo" />
  )
}
function Greet(props)
{
  return(
    <p>
          Hello, {props.name}//
        </p>
  )
}
---  
function App(props) { // is function compounts
  return (
       <div>
        <DisplayImage/>
        <Greet name={props.name}/>
    
        </div>
  );
}
function add(a,b)  //pure function
{
  return a+b;
}

function add(bal,amount)  //impure function
{
  return bal-amount;     
}
  //  all react  compount   act like prue compountns
export default App;

==========================================================================================================================================
                        State
                     ==========						
*)state is mutable
*)If you want to change the object -- this.setState()	
***********
import React from 'react';
import ReactDOM from 'react-dom';

class Reactstate extends React.Component{
     constructor(){
      super();   //  we passing artibute and value it will intizal when using (super key word)
      this.state={initalvalue:"welcome",name:"boyss"}
    }
    changevalue = () =>
    {
      this.setState({initalvalue:"Thanks for watching"}); // use to change the value
    }
    render(){    // render method  use disply in html page
         return<div><h1>{this.state.initalvalue} {this.state.name}</h1>     
        <br/>
          <button type="button" onClick={this.changevalue}>Exit</button>
          </div>
    } 
}
ReactDOM.render(<Reactstate />,document.getElementById('root'));

*********
---------------------------------------------------------------------------------
props                                   state      
----------------------------------------------------------------------------------
props is immutable                        state is mutable.

props allow you to pass one compount      sate hold the information
to other compounts as an argument

Can acces by child class                  Cannot acces by child class

use to communicate between two compount   Redering dynamic change with the compount

==========================================================================================================================================
						 React Lifecycle
					============================	 
*)React every compount have various lifecycle method
*)Lifecycle come under four phase

1)Inital Phase
2)Mounting Phase
3)Updating Phase
4)Unmounting Phase
 
						 Inital Phase
						 =============
*)in thise phase developer has define props and intial state of the compount
thise generly done in constructor of the compont

1)getDefaultProps()
* it is use to default value of props
* it invoked before creation of the  compount

2)getintiaState()
*it is use to default value of state
*it invoked befeore the creation of the compount
---------------------
class Reactstate extends React.Component{
     constructor(){
      super();   //  we passing artibute and value it will intizal when using (super key word)
      this.state={initalvalue:"welcome",name:"boyss"
	  render(){   
      return <div> <h1>{this.state.initalvalue} {this.state.name}</h1>  
==================================================================================================           
                        Mounting Phase
						===============
*)After the initialization of the component is completd than compount is mounted on the DOM  and render first time is the webpage

1)componentWillMount()Function: The function is invoked before the component mounted is DOM 
*)The function get invoked once before the render() function
is execute for first time
*)In thise case you call setState() inside method the compunt will not re render
------------
 componentWillMount()
    {
      alert("Learn Reactjs lifecycle"); // only for first time
    }
-------------------------------------------------------------------------------------------------
2)componentDidMount()Function: Thise function is invoked after component mounted on the DOM
*)This function get invoked once after render() function is executed for first time
*)Now you can do any DOM querying operation
--------------
componentDidMount()
   {
    setTimeout(()=>{
     this.setState({value:"thank you"})},5000) 
   } 
=================================================================================================	   
                         Updating Phase
						 ===============
*)Updating is the phase where state and props of a component are updated follow by some user events such as click or push button
1)ComponentWillUpade()Function 	
------------------------
	componentWillUpdate()
   {
    alert("Did you want to update value");
   }
  
2) CompountDidUpadate() Function

 componentDidUpdate()
   document.getElementById("root").innerHTML="new value updated succesfully"+this.state.value;{
    
   }
   
3)render()	
----------
		 render(){   
         return <div> <h1>{this.state.initalvalue} {this.state.name}</h1>  
         <br/>
         <button type="button" onClick={this.changevalue}>ChangeValue</button>     
        <button type='button' onClick={this.deleteheder}> Deleteheder</button>
         </div>
    } 	 
4)shouldCompountUpade()Function
---------
 shouldComponentUpdate()
   {
    return true;
    //return false;
   }
               ---------------------------------
			     Unmounting Phase
*componentWillUnmount()
 use to delete
 -----------------
 componentWillUnmount()
    {
      alert("header delete")
    } 
-==========================================================================================================================================
                                                  React lifecycle
				                            ========================

import React from 'react';
import ReactDOM from 'react-dom';

class Reactstate extends React.Component{
     constructor(){
      super();   //  we passing artibute and value it will intizal when using (super key word)
      this.state={initalvalue:"welcome",name:"boyss"}
    }
    componentWillMount()
    {
      alert("Learn Reactjs lifecycle"); // only for first time
    }
   
   
    render(){   
         return <div> <h1>{this.state.initalvalue} {this.state.name}</h1>  
         <br/>
         <button type="button" onClick={this.changevalue}>ChangeValue</button>     
        <button type='button' onClick={this.deleteheder}> Deleteheder</button>
         </div>
    } 
    changevalue = () =>
    {
      this.setState({value:'learn react tamil'});
    }
   componentDidMount()
   {
    setTimeout(()=>{
     this.setState({value:"thank you"})},5000) 
   } 
   componentWillUpdate()
   {
    alert("Did you want to update value");
   }
   componentDidUpdate()
   {
    document.getElementById("root").innerHTML="new value updated succesfully"+this.state.value;
   }
   shouldComponentUpdate()
   {
    return true;
    //return false;
   }
   deleteheder=()=>
   {
    this.setState({value:false,name:false})
   }
    componentWillUnmount()
    {
      alert("header delete")
    } 
}
ReactDOM.render(<Reactstate />,document.getElementById('root'));
============================================================================================================================================
                                             This keyword in react js
									       ===========================
									 
Regular Function:
The "this" respresent the object that called the function
*)It means there is an different object depending on how the function was called which could be the window,the document,a button or whatever
Arrow Function:
The "This" keyword always represent the object that define arrow function
*)No matter who call the function
=========================================================================================================================================
                                            Event Handling in react js
									       ============================  		  
*An event is an action that could be triggerd as a result of the user or system generate event
1)ex mouse click ,loading of a webpage ther interaction call events.
*use camelCasse
*In react help of JSX you pass a function as even handeler rather than a string   
 ex: onClick ="string()"

Argument calling:
clickEvent =(a) =>{
    this.setState({msg:a})
  }
return{
<button onClick={()=>this.clickEvent("Helo World")}>Click</button>
}

Useing Bind key word
-------------------
<button onClick={this.clickEvent.bind(this,"  hello World")}>Click</button>
=========================================================================================================================================
                                           React CSS
							              ===========			  
*CSS Cascading Style Sheet
*In React we use CSS
* Three type
1)Inline Styling
2)CSS styleSheets
3)CSS Module

Inline Styling:
 <h1 style={{color:"red",textAlign:'center'}}>Hello World</h1>
 ---------------------
 Another method using javascript object:
 render()
  {
   const mystyle ={
    color:"blue",
    fontFamily:"Arial"

   }; 
   
 return(
 <h1 style={mystyle}>Welcome</h1>
)
----------------------------------------
External stylesheet:
import the file :
import './App.css';
We import from app.css is thise file
.App {
  text-align: center;
  color: yellow;
  background-color: brown;
}


return(
<h1 className='App'>Thank you</h1>
)						
==========================================================================================================================================
                           CSS Module
			           =================
*We want to create file using filename.module.css
* Then import the file:
import styles from './demo.module.css';
return(				
<h1 className={styles.heading}>Thank you</h1>
)
==========================================================================================================================================
                         React Sass
					====================
*Sass - Syntactically Awesome Stylesheet	
*Sass reduces repetition of CSS therefore Save time
*Sass have lot of feature that do not exist in css like variable,nested,rule,imports,inheritance,buil-in function etc.
*Ehant to install in react command in yor therminal:
   -----npm install node-sass---
*To save file has the .scss file extension
*A browser does not understand sass code .Therefore you will need  a sass pre-processor to convert sass code into standard css .Thise process is call transplling
*Transpiling is a term for taking a source code written in one language and transfrom into another language

------------------
*to create file filename.scss
* next import the file:
import './mystyle,css';

Thise is the file:

$colorvar:#a2b9bc;
$backcolor:#a2b8;
h1{
    color:$colorvar;
}
h2{
    color:&$colorvar;
}
h3{
    color: $backcolor;
}
==========================================================================================================================================
                              React forms
						    ================
* Forms play major role in any websit for login signup etc.
*HTML forms data usely handled by DOM
*HTML elememt like input tag the value of input file is change whemenver the user type
*React form data is usaly handled by the components and state
*But  in react whenever the value user type we save it in state and pass the same value to input tag
as its value show here value is not change by DOM is it control by react state
 import React from 'react';
import ReactDOM from 'react-dom';

                                   ------------------
class Eventbind extends React.Component{
  constructor(){                              // method 
  super();
  this.state={username:"",age:null,errmsg:""}; // variable 
  }
uservalue = (event) =>    // function
{
let n=event.target.name; // USING LET key is show inside the block
let v=event.target.value;
let err="";
if(n==="age"){
  if(v!="" && !Number(v))
  {
    err = <strong>Invalid value,Your age must be a number</strong>
  }
}
this.setState({errmsg:err});
this.setState({[n]:v});
}
formsubmit =(event) =>    
{
 event.preventDefault(); // to check before submit
 alert ("your name"+this.state.username);
}
 render()
   {
    return(
      <form onSubmit={this.formsubmit}>
      <h2>Welcome you {this.state.username}</h2>
      <h2>Your Age{this.state.age}</h2>
      Enter Your Name: <input type ="text" name="username" onChange={this.uservalue}/>
      Enter Your Age:  <input type ="text" name="age" onChange={this.uservalue}/> {this.state.errmsg}
      <input type ="submit"/>
      </form>
    )
   }  
  }
ReactDOM.render(<Eventbind/>,document.getElementById('root'));										
==========================================================================================================================================
                              React Fragments (துண்டுகள்)
                             ===========================
*In React whenever you want render something on the screen you need to use a render method inside the component
*Render method will only render a single root node inside it at a time
*If you want to render multiple element in render method will required div tag and put entire content or element inside it
*Is a WRONG formating of your html output is not good sematic html code
*Advantage using react fragments is take lesser menory and quicker execution
 				           *******************************
import React from 'react';
import ReactDOM from 'react-dom';



class Rowcreation extends React.Component{
  render(){
    return(
      <React.Fragment>   // it have short cut key <>...</>
      <td>hii</td>
      <td>bro</td>
      </React.Fragment>
      
    )
  }
}

ReactDOM.render(<Tablecreation/>,document.getElementById("root"))

==========================================================================================================================================				
						   React List
                          ============	
*List are use to display mainly used to display menu on website like navigation bar,menu bar etc
* In react  we creat list we use javascript map() and  enclose between list tag <li></li>
* Finaly render in Dom we use unorder list
                 
normal list			
import React from 'react';
import ReactDOM from 'react-dom';
		
const newlist = [1,2,3,4,5,"hii","bro"]
 const rl = newlist.map((listvalue) => {
   return<li>{listvalue +""+newlist}</li>
 });		// in react every action done with compounent
 ReactDOM.render(<ul>{rl}</ul>,document.getElementById("root"))

using function compounent:
function Menubar()
{
 const newlist = [1,2,3,4,5,"hii","bro"]
 const rl = newlist.map((listvalue) => {
   return<li>{listvalue +""+newlist}</li>
 });
 return <ul>{rl}</ul>
}
 ReactDOM.render(<Menubar newlist/>,document.getElementById("root"))
------------------------------------------------------------------------------------------
                       props
					   
--------------------------------------------------------------
                          React keys
				      ==================
*In list we will newely  add delete update  alert ext.. using key
*We give like primary or unquekey it will use to get values and acess easy	
*React keys advantage in compountes use more collection of list we use number of values in particular compounent or value 
we want to change we not want to re-render	entire components we use specific item than only re-render
*Time and memory will save 
                  
				   
==========================================================================================================================================
	                    React Hooks
                   ====================
*React hook allows you to use state and other react feature without writing a class			
*is dose not work inside class .It work inside the function only
Rules os Hook:
1)only call Hook at the top level
 *Do not call inside loop,condition,or nested function
2)only call Hook from react function
 *You cannot call Hook from regular javascript  function
 *Hook can also be call from custom Hooks.

                    ------------------------
					  React useState
				    =========================
*Hook state is new way of declaring a state in react app
*Hook use useState()function component for setting and retrieving state
*We call inside function compount syantax us pair use to  store intial value and curent value second function 
*Call arrow function by even handling	
*The useState is similar to this.setState in class
--------------- 
import React,{ useState}from 'react';
import ReactDOM from 'react-dom';

                          React useEffect
                         ====================
*The Effect Hook allows use to perfrom side effect(an action) in function components
*In react Hook we use without using lifecycle method					   
*EffectHook is equal to 
1)compounenDidMount(),
2)compounenDidUpade(),
3)compounenWillUnmount(), lifecycle method 
-----Both react hook and react effect are like did Mount and DidUpdate----

-----------
Both react Hook and react hook efect:

import React,{ useState,useEffect}from 'react'; // also usinf useEffect
import ReactDOM from 'react-dom';

function ReactHook(){
  const [count, update] = useState(0); // in hook we wand to give pair value
  useEffect(()=>{
    alert("Hello welcome")             // useEffect
  })
  return(                              // count is use store intial vale and current value
                                      // update call arrrow function
    <div>
      <p> you click the above button {count}</p>
      <button onClick={() => update(count + 1)}>
       Click Me
      </button>
    </div>
  );
}
ReactDOM.render(<ReactHook/>,document.getElementById("root"))
====================================================================
                             React Router
						 =====================
URL--Just as buildings and houses have a street address, webpages
also have unique addresses to help people locate them.* On the Internet, these addresses are called URLs (Uniform Resource Locators).	
----------------------------					
*React router is mainly used for developing a single page web application
*Routing is a process in which a user is directed to different pages base on their action 
*where user go to one webpage to another web page help of URL routing is help full
*Most of social media Websit like facebook,instgram, use of react Rouder for rendering multiple view(without reloading webpage)

browser Router: 
*For example (forwar and backward button)is will seing withuser URL like history
*So only not  memory as the  browser router(Because it will store in memory not in browser history if store in memory not go forward backward)
*In html we use <link> tag	but 
.React we use  navigate link URLs and render its content without realoding the webpage
*switch	-The <switch> compounent is use to render component only wehen the path will  match	.otherwise.it return not found
---------------------------------------------------------------------------------------------------------------------------------------
index.js:
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Join from './joinus';
import Notfount from './NotFount';
const routing = (
  <Router>
    <div>
      <h1>React router example</h1>
      <ul>
        <li>
          <Navlink to="/" exact activeStyle={{color:"red"}}>Home</Navlink>
        </li>
        <li>
        <Navlink to="/a" exact activeStyle={{color:"red"}}>About</Navlink>
        </li>
        <li>
        <Navlink to="/j" exact activeStyle={{color:"red"}}>Joinus</Navlink>
        </li>
      </ul>
      <Switch>
      <Route exact path="/"  component={Home} />
      <Route path="/a" component={About} />
      <Route path="/j" component={Join} />
      <Route component={Notfount} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
-------------------------------------------------------------------
Home.js:
import React from 'react';
import ReactDOM from 'react-dom';
 
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to VJ Techro Wixard</h1>
            </div>
        )
    }
}
export default Home;
----------------------------------------------------
About.js:
import React from 'react';
import  ReactDOM  from 'react-dom';

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>In thide channel we learn program language in tamil</h1>
            </div>
        )
    }
}
export default About;
-----------------------------------------------------
Joinsus.js:
import React from 'react';
class Join extends React.Component {
    render() {
        return <div>
                <h1>Youtube - <i>Sundar</i></h1>
                <h1>Instagram - <i>Sundar</i></h1>
                <h1>Whatapp - <i>Sundar</i></h1>
            </div>
    }
}
export default Join;


------------------------------------------------------
Notfounr.js:
import React from "react"
const Notfount = () => <h1>Not Fount</h1>
export default Notfount
=====================================================================================================================================
                                React + Redux
						      =================
*Redux is open source javascribt libary for mananging application state and building user interface
*You can write Redux app with React,Angular,jouery,javascript
*Noraml we send one compount to other compount we use props and state
*But will send multiple compounts like (100 and 1000 compount )
*Will send one compount(parent compunt) to another compount (Child compount)where some complexing accures take more execustion time		
*so only every state and props has store in store property it will automaticall go there just we can call it.
Redux:
Has four step like(Action, Reducers, Store, View)
Action - what to do
Reducers - how to do will .pass two parameter
===================================================================================================================================
                              React+Bootstrap
							 ------------------
							 






































  