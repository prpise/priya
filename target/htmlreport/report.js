$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/skeleton/Register.feature");
formatter.feature({
  "name": "Test Register",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TestMe app Registeration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens signup page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters the un as \u003c\"Username\"\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the fn as \u003c\"Firstname\"\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the Ln as \u003c\"Lastname\"\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the pwd as \u003c\"password\"\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the confirmpwd as \u003c\"confirm password\"\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User select the gender",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the mail as \u003c\"Email\"\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the mobile as \u003c\"Mobile\"\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enters dob as \u003c\"DOB\"\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enters add as \u003c\"Address\"\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enters ans as \u003c\"Answer\"\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click submit button as \u003c\"Register\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify signup success message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Firstname",
        "Lastname",
        "password",
        "confirm Password",
        "Email",
        "Mobile",
        "DOB",
        "Address",
        "Answer"
      ]
    },
    {
      "cells": [
        "priyaselvam",
        "padma",
        "priya",
        "abc@123",
        "abc@123",
        "priyaselvam0209@gmail.com",
        "9344635597",
        "09/02/1997",
        "senthilNagar",
        "padhu"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TestMe app Registeration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens signup page",
  "keyword": "Given "
});
formatter.match({
  "location": "Registr.user_opens_signup_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the un as \u003c\"Username\"\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "Registr.user_enters_the_un_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the fn as \u003c\"Firstname\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.user_enters_the_fn_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the Ln as \u003c\"Lastname\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.user_enters_the_Ln_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the pwd as \u003c\"password\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.user_enters_the_pwd_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the confirmpwd as \u003c\"confirm password\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.user_enters_the_confirmpwd_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the gender",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.user_select_the_gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the mail as \u003c\"Email\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.user_enters_the_mail_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the mobile as \u003c\"Mobile\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.user_enters_the_mobile_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters dob as \u003c\"DOB\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.user_enters_dob_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters add as \u003c\"Address\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.user_enters_add_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters ans as \u003c\"Answer\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.user_enters_ans_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit button as \u003c\"Register\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "Registr.click_submit_button_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify signup success message",
  "keyword": "And "
});
formatter.match({
  "location": "Registr.verify_signup_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/skeleton/casestudy4.feature");
formatter.feature({
  "name": "Searching product",
  "description": "Description: Registered user can login into application using valid username and valid password",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid credentials and search for a product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user open login page in TestMee application",
  "keyword": "Given "
});
formatter.match({
  "location": "Withoutproduct.user_open_login_page_in_TestMee_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr enter un as \"lalitha\"",
  "keyword": "When "
});
formatter.match({
  "location": "Withoutproduct.userr_enter_un_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr enter pd  as \"password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Withoutproduct.userr_enter_pd_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click signinn button",
  "keyword": "And "
});
formatter.match({
  "location": "Withoutproduct.click_signinn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr searche for headphones in sb as \"head\"",
  "keyword": "And "
});
formatter.match({
  "location": "Withoutproduct.userr_searche_for_headphones_in_sb_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr select headphones from suggestion list",
  "keyword": "And "
});
formatter.match({
  "location": "Withoutproduct.userr_select_headphones_from_suggestion_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "Withoutproduct.userr_click_on_find_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on cart button",
  "keyword": "And "
});
formatter.match({
  "location": "Withoutproduct.click_on_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify cart is empty or not",
  "keyword": "Then "
});
formatter.match({
  "location": "Withoutproduct.verify_cart_is_empty_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/skeleton/scen1.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "valid login application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens signin page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters un as \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters pwd as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.step({
  "name": "verify login success",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ]
    },
    {
      "cells": [
        "lalitha",
        "password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "valid login application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens signin page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginsce1.user_opens_signin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters un as \"lalitha\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginsce1.user_enters_un_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters pwd as \"password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginsce1.user_enters_pwd_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.match({
  "location": "loginsce1.user_clicks_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify login success",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsce1.verify_login_success()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/skeleton/scenar4.feature");
formatter.feature({
  "name": "purchase product",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "valid purchase in Testme App",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcart.user_opens_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter un as \"lalitha\"",
  "keyword": "When "
});
formatter.match({
  "location": "Addcart.user_enter_un_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter pwd as \"password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_enter_pwd_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signin button",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_clicks_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for the product as \"headphone\"",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_search_for_the_product_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click purchase button",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.click_purchase_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify purchase success",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcart.verify_purchase_success()"
});
formatter.result({
  "status": "passed"
});
});