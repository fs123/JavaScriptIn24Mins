'use strict';

var expect = require('chai').expect;

var functions = require('../app/Calculator');

describe("The module 'functions'", function() {
    it("can add 2+3", function() {
        expect(functions.add(2,3)).to.equal(5);
    });

    it("can add 3+4", function() {
        expect(functions.add(3,4)).to.equal(7);
    });
});