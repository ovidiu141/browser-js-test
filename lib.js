const tests = [];

function test(description, callback) {
    tests.push({ description, callback });
}

function run() {

    if (window.location.hostname !== 'localhost') {
        console.log("Tests are disabled in non-localhost environments.");
        return;
    }

    let passed = 0;
    let failed = 0;

    tests.forEach(({ description, callback }) => {

        try {
            callback();
            console.log(`✅ ${description}`);
            passed++;
        } catch (error) {
            console.error(`❌ ${description}`);
            console.error(error);
            failed++;
        }

    });

    console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
}

function assertEqual(actual, expected, message = "Values should be equal") {
    if (actual !== expected) {
        throw new Error(`${message} - Expected: ${expected}, Got: ${actual}`);
    }
}

function assertDeepEqual(actual, expected, message = "Values should be equal") {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`${message} - Expected: ${expected}, Got: ${actual}`);
    }
}