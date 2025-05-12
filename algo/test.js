import { fizzBuzz } from "./fizzbuzz.js";


function testFizzBuzzOutput(input, expectedOutput) {
    const logs = [];
    const originalLog = console.log;

    // Capture console.log output
    console.log = (msg) => logs.push(msg);

    fizzBuzz(input);

    // Restore console.log
    console.log = originalLog;

    // Rebuild output
    const res = logs.join("\n");

    if (res === expectedOutput) {
        console.log(`✓ Test with ${input} passed`);
    } else {
        console.log(`X Test with ${input} failed`);
        console.log(`GOT :\n${res}\nEXPECTED :\n${expectedOutput}`);
    };
}

testFizzBuzzOutput(1, '1');
testFizzBuzzOutput(3, '1\n2\nFizz');
testFizzBuzzOutput(5, '1\n2\nFizz\n4\nBuzz');
testFizzBuzzOutput(10, '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz');
testFizzBuzzOutput(15, '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz');