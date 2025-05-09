import { fizzBuzz } from "./fizzbuzz.js";


function testFizzBuzzOutput(input, expectedOutput) {
    const logs = [];
    const originalLog = console.log;
    
    console.log = (msg) => logs.push(msg);
    
    fizzBuzz(input);
    
    console.log = originalLog;
    
    if (logs[0] === expectedOutput) {
        console.log(`Test with ${input} passed`);
    } else {
        console.log(`Test with ${input} failed`);
        console.log(`GOT :\n${logs[0]}\nEXPECTED :\n${expectedOutput}`);
    };
}

testFizzBuzzOutput(1, '1');