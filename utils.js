/**
 * Created by maxime on 6/15/14.
 */


function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

/**
 * Checks wether given array is rectangular. And of given width and height
 * (if provided). First dimension ist considered as width, second as height.
 * Array is supposed to be of the form a[x][y], x in width direction. y in
 * height direction.
 *
 * @param {Array} a
 * @param {number} [width]
 * @param {number} [height]
 * @returns {boolean}
 */
function isRectArray(a, width, height) {
    if (!isArray(a)) {
        return false;
    }
    if (typeof(width)!=='undefined' && a.length != width) {
        return false;
    }
    for (var i=0; i<a.length; i++) {
        if (!isArray(a[i])) {
            return false;
        }
        if (typeof(height)!=='undefined' && a[i].length != height) {
            return false;
        }
    }
    return true;
}


function transpose(a) {
    if (!isRectArray(a)) {
        throw 'Unable to transpose argument. Invalid format.';
    }
    at = [];
    for (var j=0; j<a[0].length; j++) {
        at[j] = [];
        for (var i=0; i<a.length; i++) {
            at[j][i] = a[i][j];
        }
    }

    return at;
}


/**
 * Copys every enumerable property of the second object to
 * the first object.
 *
 * @param {Object} obj1
 * @param {Object} obj2
 */
function copyProperties(obj1, obj2) {
    for (var prop in obj2) {
        obj1[prop] = obj2[prop];
    }
}


/**
 * Copys every enumerable property of the second arguments prototype to
 * the prototype of the first argument.
 *
 * @param {function} constr1
 * @param {function} constr2
 */
function copyPrototype(constr1, constr2) {
    proto1 = constr1.prototype;
    proto2 = constr2.prototype;
    for (var prop in proto2) {
        proto1[prop] = proto2[prop];
    }
}