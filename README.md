# Intro
The purpose of this project is to build a Amazon.com like ecommerce website using the front end skills that we should possess by now.
We do not have any backend skills so we are going to build 
this project using a technique called [serverless architecture](https://martinfowler.com/articles/serverless.html)

We do not know how to build a backend server yet but that does not matter. 
There are plenty of companies who have already built servers and will rent them out to anyone who signs up.
We are going to use a website called [backendless](https://backendless.com) to be our server. 
Eventually we will need to learn how to build our own server so we dont' rely on another company.


# Setup
## backendless
* Sign up for [backendless](https://backendless.com) which just requires an email address. 
* [Get your application id and rest api key](https://develop.backendless.com/MyStore/manage/settings/api-keys)


# Instructions
## Insert your information
* Populate the application id and apikey variables in index.html

## Products
* Look at main.js. This code is uploading a hard coded array of products to your server. This is just to give you some data to get started with.
* Look at products.js. There is a function `getProducts`. Use this function to retrieve a list of all the products on your server and save them in a variable.
* 


## UI
* All UI decisions are up to you. You can make it as styled or unstyled as you want.
* Decide how you would like to display the products in your web page. Use `<div> <ul>` or `<ol>`. Show the product name, description price. Include a link or button that should be clicked on so that you can see the details of the product. Use the array of products to dynamically create the html however you see fit. Think about using appendChild or innerHtml. 
* Create a textbox that is going to be used to type in a product to search for. 


## Open the page
* Simply open the index.html file in a chrome browser window. Double click on the file or use the menu -> file -> open file
* Refresh the browser whenever you make changes to see if they worked.