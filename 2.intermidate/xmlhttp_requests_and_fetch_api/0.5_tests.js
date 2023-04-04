
function run_tests(test_func_list) {
    let test_reports = [];
    let errors = [];
    for (let i = 0; i < test_func_list.length; i++) {
        let test = test_func_list[i];
        let test_res = test();
        let report = { ...test_res, test, index: i };
        test_reports.push(report);
        if (!test_res.pass) {
            errors.push({ report });
        }
    }
    return { test_reports, errors }
}

function testLogger(pass, message) {
    const style = `padding: 2px 5px; font-weight: bold;`;
    const passStyle = `color: #008000; background-color: #C2DFFF; ${style}`;
    const failedStyle = `color: white; background-color: #DC143C; ${style}`;

    if (pass) {
        console.log(`%c* TEST --- ${message}: PASS`, passStyle);
    } else {
        console.log(`%c* TEST --- ${message}: FAILED!!`, failedStyle);
    }

    return { pass, message };
}

// function getEventListeners(target, eventName) {
//     // Create a dummy event
//     const event = new Event(eventName);

//     // Dispatch the event to the target
//     target.dispatchEvent(event);

//     // Return the event listeners for the target and event name
//     return getListeners(target, eventName);
// }

// function testFunctionExistsInEventListeners(targetSelector, eventName, callback) {
//     const target = document.querySelector(targetSelector);

//     // Get all event listeners for the target and event name
//     const eventListeners = getEventListeners(target, eventName);

//     // Check if any of the event listeners have the same callback function
//     for (let i = 0; i < eventListeners.length; i++) {
//         if (eventListeners[i].listener === callback) {
//             return true;
//         }
//     }

//     return false;
// }

function testHTMLElementExists(selector, message) {
    const element = document.querySelector(selector);
    const pass = !!element;
    message = message || `Expected the element "${selector}" to exist.`;
    return testLogger(pass, message);
}

function testHTMLElementEqualsHTML(selector, html, message) {
    const test_exists = testHTMLElementExists(selector);
    if (test_exists.pass) {
        const elHTML = document.querySelector(selector)
            .outerHTML.trim().replace(/[\t\n\s]+/g, '');
        const exHTML = html.trim().replace(/[\t\n\s]+/g, '');
        const pass = elHTML === exHTML;        
        message = message || `Expected the HTML of the element "${selector}" to EQUAL the HTML ${html}.`;
        return testLogger(pass, message);
    }
    return test_exists;
}

function testHTMLElementExistsAndContainsHTML(selector, html, message) {
    const element = document.querySelector(selector);
    const pass = !!element;
    const test_exists = testHTMLElementExists(selector);
    if (test_exists.pass) {
        message = message || `Expected the element "${selector}" to contain the HTML ${html}.`;
        return testLogger(pass, message);
    } else {
        return test_exists;
    }
}

// Test that two objects are deeply equal
function testObjectsEqual(actual, expected, message) {
    const a = JSON.stringify(actual);
    const b = JSON.stringify(expected);
    const pass = (a === b);
    message = message || `Expected ${a} to equal ${b}`;

    return testLogger(pass, message);
}

// Test a function with expected result
function testFunction(expected, func, message) {
    const result = func();
    const pass = (result === expected);
    message = message || `Expected ${result} to equal ${expected}`;

    return testLogger(pass, message);
}

// Test that two arrays contain the same elements (in any order)
function testArraysEqual(actual, expected, message) {
    const a = JSON.stringify(actual.sort());
    const b = JSON.stringify(expected.sort());
    const pass = (a === b);
    message = message || `Expected ${a} to equal ${b}`;

    return testLogger(pass, message);
}

// Test that a value is within a range
function testRange(value, min, max, message) {
    const pass = (value >= min && value <= max);
    message = message || `Expected ${value} to be between ${min} and ${max}`;

    return testLogger(pass, message);
}

// Test that two values are of the same type
function testSameType(actual, expected, message) {
    const pass = typeof actual === typeof expected;
    message = message || `Expected ${typeof actual} to equal ${typeof expected}`;

    return testLogger(pass, message);
}
