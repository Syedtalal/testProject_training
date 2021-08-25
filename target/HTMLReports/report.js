$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Login functionality",
  "description": "",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 81000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Check Login Functionality with valid Credentials",
  "description": "",
  "id": "test-login-functionality;check-login-functionality-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User will be open browser and launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User will be click on My Account tab and click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User will be enter ID and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify user is Navigate to the Your Store",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.launchBrowser()"
});
formatter.result({
  "duration": 6075852100,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.nav_to_homepage()"
});
formatter.result({
  "duration": 1394588100,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.userNameAndPassword()"
});
formatter.result({
  "duration": 158015300,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 2431517700,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.nav_homePage()"
});
formatter.result({
  "duration": 16971300,
  "status": "passed"
});
formatter.write("Browser is closed");
formatter.after({
  "duration": 683518300,
  "status": "passed"
});
formatter.before({
  "duration": 80400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check Login Functionality with Invalid ID and Password",
  "description": "",
  "id": "test-login-functionality;check-login-functionality-with-invalid-id-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User will be open browser and launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User will be click on My Account tab and click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User will be enter invalid ID and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.launchBrowser()"
});
formatter.result({
  "duration": 3498212100,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.nav_to_homepage()"
});
formatter.result({
  "duration": 1401033200,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.invalid_userNameAndPassword()"
});
formatter.result({
  "duration": 165840000,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 1455983400,
  "status": "passed"
});
formatter.write("Browser is closed");
formatter.after({
  "duration": 665643300,
  "status": "passed"
});
formatter.before({
  "duration": 37400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Check Login Functionality without Credentials",
  "description": "",
  "id": "test-login-functionality;check-login-functionality-without-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User will be open browser and launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User will be click on My Account tab and click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.launchBrowser()"
});
formatter.result({
  "duration": 3188317700,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.nav_to_homepage()"
});
formatter.result({
  "duration": 1332965200,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 1501473400,
  "status": "passed"
});
formatter.write("Browser is closed");
formatter.after({
  "duration": 679979500,
  "status": "passed"
});
});