define([
    'intern!object',
    'intern/chai!assert',
    'intern!bdd',
    '../../pages/SignupPage'
], function (
    registerSuite,
    assert,
    bdd,
    SignupPage
) {

    registerSuite(() => {

        bdd.describe('User signs up to easyroommate.com', function () {

            var signupPage;

            bdd.before(() => {
                signupPage = new SignupPage(this.remote);
            });

            bdd.it('Selects a location', () => {
                //TODO: Step implementation
            });

            bdd.it('Specifies it needs a room', () => {
                //TODO: Step implementation
            });

            bdd.it('Fills in the form', () => {
                //TODO: Step implementation
            });

            bdd.it('clicks Create Profile', () => {
                //TODO: Step implementation
            });

            bdd.it('Should be on the landing page', () => {
                //TODO: Step implementation
            });

        });

    });

});