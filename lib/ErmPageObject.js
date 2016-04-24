"use strict";

define([
    'intern/dojo/node!url'
], function (urlHelper) {

    class ErmPageObject {
        constructor (remote) {
            this.remote = remote;
        }

        // Extended class should specify this, if neccessary
        get uri() { return '' }

        static get url() { return 'http://uk.easyroommate.com/' }

        navigate() {
            return this.remote.get(ErmPageObject.url + this.uri);
        }
    }

    return ErmPageObject;
});