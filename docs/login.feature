@Login
Feature: Login to Easyroommate.com
  In order to use the website
  As an existing user
  I want to login successfully

  Scenario: Successfully Logging in to Easyroommate.com
    Given I enter a valid username
    And a valid password
    When I click 'Login'
    Then I should see the landing page

  Scenario: Failing to log in to Easyroommate.com
    Given I enter an invalid username
    And an invalid password
    When I click 'Login'
    Then I should see an error message