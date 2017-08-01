/**
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
/**
 * Typescript Math Toolkit:  Some utilities for making approximate element/vector comparsions.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
var TSMT$CompareUtils = (function () {
    function TSMT$CompareUtils() {
        // empty
    }
    /**
     * perform a quick absolute comparison vs. to a specified number of digits
     *
     * @param a: number First number
     *
     * @param b: number Second number
     *
     * @param d: number: Number of digits for comparison
     *
     * @returns boolean  True if |a-b| < 10^-d .  This is suitable for a quick comparsion betweeen floating-point numbers
     * in specs
     */
    TSMT$CompareUtils.compare = function (a, b, d) {
        d = Math.max(Math.abs(d), 1);
        var tol = Math.pow(10, -d);
        return Math.abs(a - b) < tol;
    };
    /**
     * does a value exist in an array to the specified relative error?
     *
     * @param value: number Test value
     *
     * @param compare: Array<number> List of numbers to test against
     *
     * @param epsilion: Approximate relative error tolerance
     * @default 0.01
     *
     * @returns boolean true if the input value is contained in the array to within the specified tolerance
     */
    TSMT$CompareUtils.containsApproximately = function (value, compare, epsilon) {
        if (epsilon === void 0) { epsilon = 0.01; }
        var i;
        var r;
        var len = compare.length;
        for (i = 0; i < len; ++i) {
            r = Math.abs((value - compare[i]) / value);
            if (r <= epsilon) {
                return true;
            }
        }
        return false;
    };
    /**
     * compare two vectors (array of numbers) against the specified relative error
     *
     * @param vector1: Array<number> First vector
     *
     * @param vector2: Array<number> Second vector
     *
     * @param epsilion: Approximate relative error tolerance
     * @default 0.01
     *
     * @returns boolean true if an elementwise comparsion of the two vectors is within the specified tolerance for
     * every element in both vectors or false otherwise.  Returns false if vector lengths do not match.
     */
    TSMT$CompareUtils.vectorCompare = function (vector1, vector2, epsilon) {
        if (epsilon === void 0) { epsilon = 0.01; }
        var n1 = vector1.length;
        var n2 = vector2.length;
        if (n1 != n2) {
            return false;
        }
        var i;
        var v;
        for (i = 0; i < n1; ++i) {
            v = Math.abs((vector1[i] - vector2[i]) / vector1[i]);
            if (v > epsilon) {
                return false;
            }
        }
        return true;
    };
    return TSMT$CompareUtils;
}());
exports.TSMT$CompareUtils = TSMT$CompareUtils;
