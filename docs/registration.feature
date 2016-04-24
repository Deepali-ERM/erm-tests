@Registration
Feature: Register to Easyroommate.com
  In order to use the website
  As a new user
  I want to register to the website

  Scenario: Register to Easyroommate.com
    Given I select a location
    And I specify I need a room
    And I fill in the form
    When I click 'Create Profile'
    Then I should see the landing page