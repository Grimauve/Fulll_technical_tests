const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('the fleet of another user', function () {
    this.anotherFleet = {
        fleetId: 2,
    }
});

Given('this vehicle has been registered into the other user\'s fleet', function () {
    this.vehicle1.fleets = [2];
});

When('I register this vehicle into my fleet', function () {
    registerVehicle(this.vehicle1, this.myFleet);
});

When('I try to register this vehicle into my fleet', function () {
    registerVehicle(this.vehicle1, myFleet);
});

When('I try register this vehicle into my fleet', function () {
    registerVehicle(this.vehicle1, this.myFleet);
});

Then('this vehicle should be part of my vehicle fleet', function () {
    //TODO should i leave this error message ?
    assert.ok(this.vehicle1.fleets.includes(this.myFleet.fleetId), `Vehicle has not been registered as part of my fleet`);
});

Then('I should be informed this this vehicle has already been registered into my fleet', function () {
    // TODO leave this check ?
    assert.ok(this.vehicle1.fleets.includes(this.myFleet.fleetId), `Vehicle has not been registered as part of my fleet`);

    // TODO Check that an exception has been thrown
    // Check error code
    // Check error message 
});