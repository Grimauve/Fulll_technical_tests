export class Vehicle {
    constructor(vehiclePlateNumber) {
        this.vehiclePlateNumber = vehiclePlateNumber;
        this.fleets = [];
    }
}

export function registerVehicle(vehicle, fleet) {
    vehicle.fleets.push(fleet);
}

export function parkVehicle(vehicle, location) {
    vehicle.location = location;
}