function greetingFcn(name, greetingMsg) {
    const greeting = `${name}, ${greetingMsg}`;
    return greeting;
}

let result = greetingFcn("Hello everyone my name is", "Bips")
console.log(result);