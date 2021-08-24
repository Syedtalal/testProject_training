$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Login functionality",
  "description": "",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 78800,
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
  "duration": 10242719600,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.nav_to_homepage()"
});
formatter.result({
  "duration": 1337802800,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.userNameAndPassword()"
});
formatter.result({
  "duration": 232496100,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 1700416500,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.nav_homePage()"
});
formatter.result({
  "duration": 20936500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Account Login]\u003e but was:\u003c[My Account]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat pageFactory.login_Page.getTitle(login_Page.java:54)\r\n\tat StepDefinitions.loginSteps.nav_homePage(loginSteps.java:74)\r\n\tat ✽.Then Verify user is Navigate to the Your Store(Login.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("Browser is closed");
formatter.after({
  "duration": 1058326900,
  "status": "passed"
});
formatter.before({
  "duration": 108000,
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
  "duration": 5808620901,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.nav_to_homepage()"
});
formatter.result({
  "duration": 1277918101,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 1669738801,
  "status": "passed"
});
formatter.write("Browser is closed");
formatter.after({
  "duration": 736026501,
  "status": "passed"
});
});