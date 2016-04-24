"use strict";

define([
    '../lib/ErmPageObject',
    '../lib/FormFillerHelper'
], function (ErmPageObject, FormHelper) {

    class LoginPage extends ErmPageObject {

        get uri() { return '/login' }

        static get selectors() {
            return {
                'form': '#loginButton',
                'errorContainer': '#loginErrorStandalone',
                'accountDropDown': '#account-dropdown'
            }
        }

        login(email, password) {
            var data = [
                {
                    name: 'inputUsername',
                    type: 'input',
                    value: email
                },
                {
                    name: 'inputPassword',
                    type: 'input',
                    value: password
                }
            ];

            var formHelper = new FormHelper(this.remote, LoginPage.selectors.form);
            return formHelper.fillTheFormWith(data)
                .then(() => formHelper.submit());

        }

        isLoginFailed() {
            var hasErrorContainer = false;

            return this.remote
                .findByCssSelector(LoginPage.selectors.errorContainer)
                .then(
                    () => { hasErrorContainer = true; },
                    () => { hasErrorContainer = false; }
                )
                .end()
                .then(() => hasErrorContainer);
        }

        isLoginSuccessful() {
            var hasAccountDropdown = false;

            return this.remote
                .findByCssSelector(LoginPage.selectors.accountDropDown)
                .then(
                    () => { hasAccountDropdown = true; },
                    () => { hasAccountDropdown = false; }
                )
                .end()
                .then(() => hasAccountDropdown);
        }

    }

    return LoginPage;
});