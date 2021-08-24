Feature: Test Login functionality


  Scenario: Check Login Functionality with valid Credentials
    Given User will be open browser and launch Application
    When User will be click on My Account tab and click on Login
    Then User will be enter ID and Password
    And Click on Login Button
    Then Verify user is Navigate to the Your Store

    Scenario: Check Login Functionality with invalid Credentials
      Given User will be open browser and launch Application
      When User will be click on My Account tab and click on Login
      And Click on Login Button




