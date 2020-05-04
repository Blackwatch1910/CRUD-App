const express = require('express');

let helloWorldFunction = (req, res) => res.send('Hello Mr. Stark');

let printExample = (req, res) => res.send('print example');

let addition = (req, res) => res.send('Addition:' +(3+5));

module.exports = {
    helloWorld: helloWorldFunction,
    print: printExample,
    add: addition
}