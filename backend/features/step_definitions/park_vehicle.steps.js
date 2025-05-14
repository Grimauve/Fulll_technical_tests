const { parkVehicle } = require('../../src/Domain/Vehicle.js');
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('my fleet', function () {
    this.myFleet = {
        fleetId: 1,
    }
});

Given('a vehicle', function () {
    this.vehicle1 = {
        vehiclePlateNumber: 'AAA',
        fleets: [],
    }
});

Given('I have registered this vehicle into my fleet', function () {
    this.vehicle1.fleets = [1];
});

Given('my vehicle has been parked into this location', function () {
    this.vehicle1.location = [48.8530, 2.3499];
});

Given('a location', function () {
    this.location = [48.8530, 2.3499];
});

When('I park my vehicle at this location', function () {
    parkVehicle(this.vehicle1, this.location);
});

When('I try to park my vehicle at this location', function () {
    parkVehicle(this.vehicle1, this.location);
});


Then('the known location of my vehicle should verify this location', function () {
    // TODO should i add an error message ?
    assert.equal(this.vehicle1.location, this.location);
});

Then('I should be informed that my vehicle is already parked at this location', function () {
    // TODO should i add an error message ?
    assert.equal(this.vehicle1.location, this.location);

    // TODO Check that an exception has been thrown
    // Check error code
    // Check error message 
});