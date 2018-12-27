// Lesson31 = Understanding the Document Object Model 6:17:34
// =========================================================


// tries too much

let a = 7 * undefined / 'panama';
console.log(a);

// Exception -- Error -- JS bailing out
// prepare for it, wrap try-catch


function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('this never runs');
}

// beforeTryCatch();

function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log('this never runs');
    }
    catch (error) {
        console.log('error caught');
        throw new Error('shit');

    } finally {
        console.log('this will happen no matter what');
    }
    console.log('App still running')
        ;
}

// afterTryCatch();

function performCalculation(obj) {
    if (!obj.hasOwnProperty('b')) {
        throw new Error('object missing property');
    }
    // continue
    return 100;
}

function performHigherLevelOperation() {
    let obj = {};
    let value = 0;
    try {
        value = performCalculation(obj);
    }
    catch (error) {
        console.log(error.message);
    }
    if (value == 0) {
        // contingenvy
    }
}

performHigherLevelOperation();