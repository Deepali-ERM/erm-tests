define([
    'intern!object',
    'intern/chai!assert',
    'intern!bdd',
    '../../pages/LoginPage'
], function (
    registerSuite,
    assert,
    bdd,
    LoginPage
) {

    var validCredentials = {
        login: 'deepaligambhir@yahoo.com',
        password: 'testing10g',
        toString() {
            return this.login + '/' + this.password;
        }
    };

    var invalidCredentials = {
        login: 'derp',
        password: 'oops',
        toString() {
            return this.login + '/' + this.password;
        }
    };

    registerSuite(() => {

        bdd.describe('User tries to login using both valid and invalid credentials.', function () {

            var loginPage, useCase;

            bdd.before(() => {
                loginPage = new LoginPage(this.remote);
            });

            bdd.it('should not be able to login with invalid credentials: (' + invalidCredentials + ')', () => {
                useCase = loginPage.navigate()
                    .then(() => loginPage.login(invalidCredentials.login, invalidCredentials.password))
                    .then(() => loginPage.isLoginFailed())
                    .then((isLoginFailed) => { assert.isTrue(isLoginFailed) });
                return useCase;
            });

            bdd.it('should be able to login with valid credentials: (' + validCredentials + ')', () => {
                useCase = loginPage.navigate()
                    .then(() => loginPage.login(validCredentials.login, validCredentials.password))
                    .then(() => loginPage.navigate())
                    .then(() => loginPage.isLoginSuccessful())
                    .then((isLoginSuccessful) => { assert.isTrue(isLoginSuccessful) });
                return useCase;
            });

        });

    });

});