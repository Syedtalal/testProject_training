$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Login functionality",
  "description": "",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 88000,
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
  "duration": 9531401600,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.nav_to_homepage()"
});
formatter.result({
  "duration": 2263039500,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.userNameAndPassword()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 674774801,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 91743750099,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.nav_homePage()"
});
formatter.result({
  "duration": 16649500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("Browser is closed");
formatter.after({
  "duration": 1036301801,
  "status": "passed"
});
formatter.before({
  "duration": 45700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check Login Functionality with invalid Credentials",
  "description": "",
  "id": "test-login-functionality;check-login-functionality-with-invalid-credentials",
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
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.launchBrowser()"
});
formatter.result({
  "duration": 4436604600,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.nav_to_homepage()"
});
formatter.result({
  "duration": 1525499599,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 1562856900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("Browser is closed");
formatter.after({
  "duration": 1031379301,
  "status": "passed"
});
});