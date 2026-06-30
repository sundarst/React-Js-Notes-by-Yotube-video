                                              Spring boot
											 ==============
Default html are in get maping we change to post maping
<form method ="POST" action="logincheck">

Server  --client
* server who provite services to work web page
* client people around  world use the web page

*IP-- Internet Protocol (IP) address

use:
we can conntect  through world wide help ip adress number

*port num:
use:
one system one server we can use multiple application to specify the application using thise

DNS:
Domain Name System

www.abc.com --- IP address------

CRUD:
Create
Read
Update
Delete

Timelife use panding javadata to html (Template rendering)
spring web and time use to simple project
------------------------------------------
Annotations
we write above the method
1)Controller
the work in angular maping

MVC Framework --
model(data) view(html,css,javascript) controller(business logic)

 To over come JSP work load ---Spring frame work
 
 Spring Mvc:
* it implements all the basic feature of core spring framework like inversion controllel Dependency injection
             |-----web browser -------|                                             
			 |						  ^
			 |						  |
 front controllel---->controllel--->view
 
 -----------------------------------------------------
 Dispatch servaley another name(front controller)
 
                        ------------------------->(2)
                       |                    Handler Mapping
					   |					      (3)
					   |---------------------------->|					
    (1)                |                             |
Request---->Dispatch servlet<--Modelandview---controller
                      |                  (4)        
					  |         (5)
                      |------------------->|					  
					  |					ViewResolver
					  |	      (6)				
                      -------------->view

Spring Boot topic:

spring data JPA(hibernate) --> data processing

controllel only mapping 
* when we give  anatation to controllel theny onle it change
ctrl+shift+f---- correct aligment
thymelefe is a template engine work in both web and non web enviroment
*in html use acces java whant to print $ symbool to get * symbool 
=======================================================================
 crud operation:
 We need four Dependency
 1)Spring web: 
  * we give to get spring frame work to package
 2)Thymelefe:(server side template)
  *Binding jave to to front end 
 3)Connect data base:
 which drive you have ex: oracal drive
 4)Spring data jpa:
  * leading hibernate framework inside hibernate frame work have ORM to push object to work
5)H2 database
  *Build in data base in spring frame work  default data base h2
  Disdvantage:
   *we can not store more data
   *some time it will erase when it restart.Mostly use for tempery table
==========================================================================================================================================
 Must create four layer for crud operation
 1) Controller (package)
    HomeController.java
 2) Model(package)
   filename.java
 3) Repository(package)
 filename Repository.java(interface)
 4) service (package)
   filenameService.java (interface)
   filenameServiceImpl(class)
5) View (template)
   index.html
   add.html
==========================================================================================================================================
Mavan is Build in  automation tool
 Annotation is must
 Step1:
 @controller
 Step2: Create model class 
 *Give pojo class
 1)use Encaplusation -- create get and set method
 2)Next step create  two string
 
 Thse pojo come as table form say as @Entity
 next annotation give for uniquie field
 3)@Id
 
 *Not only pojo class
 *NTT as relation data convert to table using ORM
 
Step 3:Repository(interface)

 public interface filenameRespository exdends jpaRepository<T,ID>
Two type Repository
1)Get repository
2)JpaRepository(T,ID)

Two interface 
parent and child interface
1) T  - For type (which pojo class)
2) ID - unique field
-------------------------------------------------------------------------
Get Repository                 jpaRepository
-------------------------------------------------------------------------
 1)For:create Delete Update   1)support get also 2)support extrad feature
 
 -------------------------------------------------------------------------
 Step 4 service
 filenameService(interface)
 filenameServiceImpl(class)
 
 * filenameServiceImpl Implements filenameService*
 
step 5 Got to controller to negative the page 

Details
In angular mapping like give add /update 
*Notice and point flech it 
 step1: First meet dispacher servlate(main security)
 step2: It allow is called angular mapping
 step3: Next coming place  controller 
        *Her only method invoke
		*we don't wend to called we give annotation automaticaly called
*After creating POJO give data type base connction*

Step 6:write Getting for add page 
Before write in service layer
next unimplement serviceImpl
Step 7: we need repository help injected annotation @Autowired

step 8: Add new html
Form table
<form th:action ="@{/add}" th:object ="${trainobj}" method ="POST">

*We send data to server use POST mapping 
*When server send data  to user Get mapping


Next mention field
 ex: What name POJO class give th:field ="*{trainNo}"
     What name POJO class give th:field ="*{From}"
	 What name POJO class give th:field ="*{To}"
1) put * get value
2) To show value $
             
                            Model layer
							    pojo class
controller-->servicelayer-->Repository-->DB

step 9 :delete:

step 10: view
==============================
 applicationproperty
 
 server.port=8081


spring.datasource.url=jdbc:oracle:thin:@localhost:1521:xe
spring.datasource.username=system
spring.datasource.password=open

spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.Oracle10gDialect
spring.jpa.hibernate.ddl-auto=update

management.endpoint.web.exposure.include=*

spring.security.user.name=admin
spring.security.use.password=123
 
 =========================================================================================================================================
 Rest API
 one server depend with orther server is called RestAPI

 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 








