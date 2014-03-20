var lookupTable = {
    l_0_0: 0, l_0_1: 1, l_0_2: 2, l_0_3: 3, l_0_4: 14, l_0_5: 12,
    l_1_0: 6, l_1_1: 7, l_1_2: 8, l_1_3: 5, l_1_4: 4, l_1_5: 9,
    l_2_0: 17, l_2_1: 16, l_2_2: 15, l_2_3: 13, l_2_4: 11, l_2_5: 10
};

function map(key) {
    if (lookupTable[key] !== undefined) return lookupTable[key];

    return null;
}

function mapAll(definition) {
    var result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    Object.keys(definition).forEach(function (key) {
        var index;
        if ((index = map(key)) !== null) {
            result[index] = definition[key];
        }
    });

    return result;
}

module.exports = {
    map: map,
    mapAll: mapAll
};