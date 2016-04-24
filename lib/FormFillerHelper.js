define([
    'intern/dojo/node!lodash'
], function (_) {

    function FormFillerHelper(remote, formSelector) {
        this.remote = remote;
        this.formSelector = formSelector || null;
    }

    FormFillerHelper.prototype = {
        constructor: FormFillerHelper,

        createFieldFiller: function (command) {
            return {
                input: function (field) {
                    return command.findByCssSelector('#' + field.name)
                        .click()
                        .clearValue()
                        .type(field.value)
                        .end()
                }
            }
        },

        /**
         * @param {{name: string, type: string, value: string|bool}[]} data
         * @returns {Promise}
         */
        fillTheFormWith: function (data) {
            var fillTheField = this.createFieldFiller(this.remote);

            var fillAllFields = _.map(data, function (field) {
                return fillTheField[field.type](field);
            });

            return Promise.all(fillAllFields);
        },

        submit: function () {
            if (!this.formSelector) {
                throw new Error('FormFillerHelper::submit() method can be used only if formSelector was set via constructor');
            }

            return this.remote
                .findByCssSelector(this.formSelector)
                .click()
                .end()
        }

    };

    return FormFillerHelper;
});