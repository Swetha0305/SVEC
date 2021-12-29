### Front-end Technologies
- HTML
- CSS
- JavaScript
- Bootstrap framework
- Angular
- ReactJS

### Backend Technologies
- Node.js
	- express.js
	- nodemoon
	- cors
	- dotenv
- PHP
- C#
- Java
- Phython

### Databases

- Mongodb
- Mysql
- SQLite
- Firebase
- Postgressql
- Oracle

- VCS(source code Management)
	- Distributed VCS
		- Git,Mercurial
	- Remote(Central) VCS(internet is used)
		- Github,Bitbucket

### git
- git init
- git add filename
- git add filename1 filename5 filename100
- git add . or git add --all
- git status
- Do git configurations (set user.name and user.email)
- commit data with commit message
- push the code into github

### HTML5

- Hyper Text Markup Language
- we have three categories
	- seamantic Elements(There is no effect on output)
		- header
		- section
		- article
		- aside
		- footer
		- table
	- Block level Elements(It will occupy entire width of browser)
		- h1 to h6(range of headings)
		- p
		- div
		- all semantic elements(all semantic elements are block level elements but all block level elements are not semantic elements)
		- text will start from new line
	- Inline Elements
		- span
		- img
		- a
		- nav
		- form
		- input
		- textarea
		- legend
		- sup
		- sub
		- u1

### Task
- audio
- video
- canvas
- progress
- meter
- data list
- select(drop down)
- By using Html we display our project in browser

### CSS
- Cascading Style Sheets-to beautify the project
- there are three ways
	- Inline CSS
	- Internal CSS
	- External CSS
+ Syntax of CSS(for internal and external)
...
selector{
	css properties
}
...
### Selectors
- simple selectors
	- universal selector(*)
	- By element name
	- Grouping Selector(, - as seperator)
	- Class Selector(.)
	- Id selector(#)
- Combinators
	 - Descendant Selector( ) to apply styles for particular element
	 - child selector(>)
	 - Adjacent sibling selector(+)
	 - General sibling selector(~)
- Psuedo code selector
- Psuedo element selector
- Attribute selector

### Box Modal
- margin
- border
- padding
	- padding :10px(for all adjacent sides)
	- padding :10px 30px(10px for top & bottom;30px for left &right)
	- padding :10px 300px 50px(10px for top;300px for left & right;50px for bottom)
	- padding :10px 30px 4px 50px(top;right;bottom;left)
- width
- 1rem:16px
### task 2
### Animations
### responsive web design 
### flex box
- display
    - flex
		- flex wrap
		- justify content
		- flex-direction
		- flex-flow
	- none
	- inline
	- block
	- inline-block
- position
	- static
	- relative
	- absolute
	- fixed
	- sticky
- align content
- align items
- align self
### Task2
- index.html
- Register.html
- Login.html
### Media Queries
- Extra small devices(Mobiles)
	- max-width:600px
- small devices(Large phones)
	- min-width:600px
	- max-width:768px
- Medium devices(Small Laptops)
	- min-width:768px
	- max-width:992px
- Large devices(Large Laptops or Desktops)
	- min-width:992px
- Extra large devices(LED Displays)
	- min-width:1200px

```
@media only screen(max-width:320px){
	CSS code
}
```
``` if we want to take more break points then
@media only screen(min-width:320px) and (max-width:500px){
	CSS code
}
```
### Bootstrap 4.6

- It is a CSS framework(client side)

Task3:
====
 	- Navbar with Responsive
- module(collection of functions and we can maintain classes and objects also)
- Package(collection of modules)
- Library(collection of packages)
	- Reactjs is a Library
- framework(collection of library)
+ module-->Package-->Library-->Framework

+ Type of Modes
	- offline
	- online
		- CDN links

+ background-color - bg-clor
+ text-white
+ Margin in Bootstrap(m-*(0,5))
	- 0 --> 0rem
	- 1 --> 0.25rem(4 px)
	- 2 -->0.5rem(8 px)
	- 3 --> 1 rem(16px)
	- 4 --> 1.5rem(24px)
	- 5 -->3rem(48px)
	-  ml-5(Margin-left)
	-  m(margin in all diections)
	- mb (margin-bottom)
	- mt(margin-top)
	- mr (margin -right)
+ Padding (Padding-left-->pl-5)
+ colors
	- primary
	- secondary
	- info
	- success
	- warning
	- danger
	- light
	- dark
	- white
+ we can use color classes for
	- Buttons (btn btn- primary)
	- text (text-white)
	- background (bg-secondary)
	- alerts (alert alert-primary)
### reference links for images
- flaticon
- color codes[https://htmlcolorcodes.com/]
- webaim[https://webaim.org/resources/contrastchecker/](contrast checker)
- svgicons
- https://getbootstrap.com/(for bootstrap)