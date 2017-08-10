/** Copyright 2016 Jim Armstrong (www.algorithmist.net)
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
// Specs for TSMT Basic Data Frame
var DataFrame_1 = require('../src/DataFrame');
var DataFrame_2 = require('../src/DataFrame');
var TableAnalysis_1 = require('../src/TableAnalysis');
var FrameStats_1 = require('../src/FrameStats');
var FrameStats_2 = require('../src/FrameStats');
var Chai = require('chai');
var CompareUtils_1 = require("../src/CompareUtils");
var expect = Chai.expect;
// Test Suites
describe('TSMT Data Frame Analysis Tests', function () {
    // dataset from 'Machine Learning in R' by Lantz
    var data = [];
    var types = [
        DataFrame_2.ColumnTypeEnum.NUMERIC,
        DataFrame_2.ColumnTypeEnum.CHARACTER,
        DataFrame_2.ColumnTypeEnum.NUMERIC,
        DataFrame_2.ColumnTypeEnum.NUMERIC,
        DataFrame_2.ColumnTypeEnum.CHARACTER,
        DataFrame_2.ColumnTypeEnum.CHARACTER
    ];
    data.push(["year", "model", "price", "mileage", "color", "transmission"]);
    data.push([2011, "SEL", 21992, 7413, "Yellow", "AUTO"]);
    data.push([2011, "SEL", 20995, 10926, "Gray", "AUTO"]);
    data.push([2011, "SEL", 19995, 7351, "Silver", "AUTO"]);
    data.push([2011, "SEL", 17809, 11613, "Gray", "AUTO"]);
    data.push([2012, "SE", 17500, 8367, "White", "AUTO"]);
    data.push([2010, "SEL", 17495, 25125, "Silver", "AUTO"]);
    data.push([2011, "SEL", 17000, 27393, "Blue", "AUTO"]);
    data.push([2010, "SEL", 16995, 21026, "Silver", "AUTO"]);
    data.push([2011, "SES", 16995, 32655, "Silver", "AUTO"]);
    data.push([2010, "SES", 16995, 36116, "Silver", "AUTO"]);
    data.push([2010, "SES", 16995, 40539, "Black", "AUTO"]);
    data.push([2011, "SES", 16992, 9199, "Silver", "AUTO"]);
    data.push([2011, "SEL", 16950, 9388, "Green", "AUTO"]);
    data.push([2010, "SES", 16950, 32058, "Red", "AUTO"]);
    data.push([2011, "SE", 16000, 15367, "White", "AUTO"]);
    data.push([2011, "SES", 15999, 16368, "Blue", "AUTO"]);
    data.push([2010, "SEL", 15999, 19926, "Silver", "AUTO"]);
    data.push([2010, "SES", 15995, 36049, "Silver", "AUTO"]);
    data.push([2011, "SEL", 15992, 11662, "Blue", "AUTO"]);
    data.push([2011, "SEL", 15992, 32069, "Silver", "AUTO"]);
    data.push([2010, "SES", 15988, 16035, "Silver", "MANUAL"]);
    data.push([2010, "SEL", 15980, 39943, "White", "AUTO"]);
    data.push([2011, "SE", 15899, 36685, "Silver", "AUTO"]);
    data.push([2010, "SEL", 15889, 24920, "Black", "AUTO"]);
    data.push([2009, "SEL", 15688, 20019, "Blue", "AUTO"]);
    data.push([2010, "SE", 15500, 29338, "Blue", "AUTO"]);
    data.push([2010, "SE", 15499, 7784, "Black", "AUTO"]);
    data.push([2010, "SE", 15499, 35636, "Black", "AUTO"]);
    data.push([2010, "SES", 15298, 22029, "Gray", "AUTO"]);
    data.push([2009, "SEL", 14999, 33107, "Silver", "AUTO"]);
    data.push([2010, "SES", 14999, 36306, "Red", "AUTO"]);
    data.push([2009, "SE", 14995, 34419, "Black", "MANUAL"]);
    data.push([2011, "SE", 14992, 4867, "Black", "AUTO"]);
    data.push([2011, "SEL", 14992, 18948, "Black", "AUTO"]);
    data.push([2009, "SES", 14992, 24030, "Red", "AUTO"]);
    data.push([2010, "SEL", 14990, 33036, "Black", "AUTO"]);
    data.push([2011, "SE", 14989, 23967, "White", "AUTO"]);
    data.push([2010, "SE", 14906, 37905, "Silver", "AUTO"]);
    data.push([2010, "SE", 14900, 28955, "White", "AUTO"]);
    data.push([2010, "SE", 14893, 11165, "White", "AUTO"]);
    data.push([2010, "SES", 14761, 44813, "Black", "AUTO"]);
    data.push([2010, "SES", 14699, 36469, "Gray", "AUTO"]);
    data.push([2010, "SES", 14677, 22143, "Black", "MANUAL"]);
    data.push([2009, "SES", 14549, 34046, "Silver", "AUTO"]);
    data.push([2010, "SE", 14499, 32703, "Red", "AUTO"]);
    data.push([2010, "SES", 14495, 35894, "Silver", "AUTO"]);
    data.push([2010, "SE", 14495, 38275, "Black", "AUTO"]);
    data.push([2010, "SE", 14480, 24855, "Blue", "AUTO"]);
    data.push([2009, "SEL", 14477, 29501, "Gray", "MANUAL"]);
    data.push([2009, "SEL", 14355, 35394, "Red", "AUTO"]);
    data.push([2010, "SE", 14299, 36447, "Black", "AUTO"]);
    data.push([2010, "SES", 14275, 35318, "Black", "AUTO"]);
    data.push([2010, "SES", 14000, 24929, "Silver", "AUTO"]);
    data.push([2009, "SE", 13999, 23785, "Red", "AUTO"]);
    data.push([2010, "SE", 13997, 15167, "Black", "MANUAL"]);
    data.push([2010, "SE", 13995, 13541, "Silver", "AUTO"]);
    data.push([2010, "SE", 13995, 20278, "Black", "MANUAL"]);
    data.push([2009, "SES", 13995, 46126, "Black", "AUTO"]);
    data.push([2009, "SES", 13995, 53733, "Silver", "AUTO"]);
    data.push([2009, "SES", 13992, 21108, "Silver", "AUTO"]);
    data.push([2010, "SE", 13992, 21721, "Green", "AUTO"]);
    data.push([2010, "SES", 13992, 26716, "Gray", "MANUAL"]);
    data.push([2009, "SES", 13992, 26887, "Black", "AUTO"]);
    data.push([2009, "SE", 13991, 36252, "Silver", "MANUAL"]);
    data.push([2009, "SE", 13950, 9450, "Black", "AUTO"]);
    data.push([2010, "SE", 13950, 31414, "Black", "AUTO"]);
    data.push([2010, "SE", 13950, 37185, "Blue", "AUTO"]);
    data.push([2010, "SE", 13895, 48174, "Gray", "AUTO"]);
    data.push([2009, "SE", 13888, 50533, "White", "AUTO"]);
    data.push([2009, "SE", 13845, 36713, "Blue", "AUTO"]);
    data.push([2009, "SES", 13799, 34888, "Black", "AUTO"]);
    data.push([2009, "SES", 13742, 38380, "Black", "AUTO"]);
    data.push([2010, "SEL", 13687, 35574, "Gray", "AUTO"]);
    data.push([2009, "SEL", 13663, 27528, "Silver", "AUTO"]);
    data.push([2010, "SES", 13599, 33302, "Red", "AUTO"]);
    data.push([2009, "SEL", 13584, 43369, "Red", "AUTO"]);
    data.push([2009, "SES", 13425, 64055, "Black", "AUTO"]);
    data.push([2010, "SE", 13384, 41342, "Gray", "AUTO"]);
    data.push([2010, "SE", 13383, 34503, "Black", "AUTO"]);
    data.push([2010, "SE", 13350, 16573, "Blue", "AUTO"]);
    data.push([2009, "SES", 12999, 32403, "Blue", "AUTO"]);
    data.push([2009, "SE", 12998, 34846, "Blue", "AUTO"]);
    data.push([2007, "SE", 12997, 39665, "Red", "AUTO"]);
    data.push([2010, "SE", 12995, 21325, "Black", "AUTO"]);
    data.push([2010, "SE", 12995, 32743, "Black", "MANUAL"]);
    data.push([2010, "SE", 12995, 40058, "White", "MANUAL"]);
    data.push([2009, "SE", 12995, 42325, "Blue", "AUTO"]);
    data.push([2009, "SE", 12995, 44518, "Red", "AUTO"]);
    data.push([2009, "SE", 12995, 53902, "Gray", "AUTO"]);
    data.push([2008, "SE", 12995, 127327, "Red", "AUTO"]);
    data.push([2009, "SE", 12992, 27136, "Gray", "AUTO"]);
    data.push([2009, "SES", 12990, 45813, "Silver", "AUTO"]);
    data.push([2009, "SE", 12988, 31538, "Gray", "AUTO"]);
    data.push([2010, "SE", 12849, 29517, "Silver", "AUTO"]);
    data.push([2010, "SE", 12780, 35871, "Black", "AUTO"]);
    data.push([2008, "SE", 12777, 49787, "Black", "MANUAL"]);
    data.push([2008, "SES", 12704, 36323, "Blue", "AUTO"]);
    data.push([2009, "SES", 12595, 39211, "Blue", "AUTO"]);
    data.push([2009, "SE", 12507, 44789, "Gray", "AUTO"]);
    data.push([2008, "SE", 12500, 45996, "White", "MANUAL"]);
    data.push([2009, "SE", 12500, 54988, "White", "MANUAL"]);
    data.push([2009, "SE", 12280, 29288, "Red", "AUTO"]);
    data.push([2009, "SE", 11999, 36124, "Blue", "AUTO"]);
    data.push([2009, "SE", 11992, 32559, "Black", "MANUAL"]);
    data.push([2009, "SES", 11984, 59048, "Black", "AUTO"]);
    data.push([2009, "SE", 11980, 55170, "Red", "AUTO"]);
    data.push([2010, "SE", 11792, 39722, "Green", "AUTO"]);
    data.push([2008, "SE", 11754, 38286, "Black", "AUTO"]);
    data.push([2008, "SES", 11749, 57341, "Red", "AUTO"]);
    data.push([2008, "SES", 11495, 82221, "Silver", "AUTO"]);
    data.push([2008, "SE", 11450, 85229, "Red", "MANUAL"]);
    data.push([2009, "SES", 10995, 42834, "Red", "AUTO"]);
    data.push([2005, "SES", 10995, 69415, "Blue", "AUTO"]);
    data.push([2009, "SEL", 10995, 78264, "Gray", "AUTO"]);
    data.push([2009, "SE", 10979, 60709, "Red", "AUTO"]);
    data.push([2008, "SE", 10955, 39643, "Gray", "AUTO"]);
    data.push([2009, "SE", 10955, 40180, "Gold", "AUTO"]);
    data.push([2008, "SE", 10836, 40330, "Green", "MANUAL"]);
    data.push([2007, "SES", 10815, 77231, "Red", "AUTO"]);
    data.push([2007, "SE", 10770, 72937, "Silver", "MANUAL"]);
    data.push([2010, "SE", 10717, 64199, "Black", "AUTO"]);
    data.push([2007, "SES", 10000, 63926, "Red", "AUTO"]);
    data.push([2007, "SES", 9999, 74427, "Silver", "AUTO"]);
    data.push([2007, "SES", 9999, 78948, "Black", "MANUAL"]);
    data.push([2006, "SE", 9995, 51311, "Silver", "AUTO"]);
    data.push([2008, "SE", 9995, 95364, "White", "AUTO"]);
    data.push([2008, "SE", 9992, 74109, "White", "AUTO"]);
    data.push([2007, "SE", 9651, 63296, "Blue", "AUTO"]);
    data.push([2007, "SES", 9000, 80605, "Red", "AUTO"]);
    data.push([2006, "SE", 8999, 49656, "Silver", "AUTO"]);
    data.push([2007, "SE", 8996, 48652, "Silver", "MANUAL"]);
    data.push([2006, "SE", 8800, 71331, "White", "AUTO"]);
    data.push([2008, "SE", 8495, 106171, "Black", "AUTO"]);
    data.push([2008, "SE", 8494, 68901, "Silver", "AUTO"]);
    data.push([2009, "SE", 8480, 70036, "White", "MANUAL"]);
    data.push([2007, "SES", 7999, 81596, "Yellow", "MANUAL"]);
    data.push([2006, "SES", 7995, 35000, "Black", "MANUAL"]);
    data.push([2006, "SES", 7995, 97987, "Red", "AUTO"]);
    data.push([2003, "SES", 7900, 96000, "White", "AUTO"]);
    data.push([2005, "SES", 7488, 59013, "Red", "AUTO"]);
    data.push([2004, "SE", 6999, 105714, "Silver", "AUTO"]);
    data.push([2007, "SE", 6995, 86862, "White", "AUTO"]);
    data.push([2000, "SE", 6980, 60161, "Green", "AUTO"]);
    data.push([2004, "SES", 6980, 101130, "Gray", "AUTO"]);
    data.push([2004, "SES", 6950, 119720, "Black", "AUTO"]);
    data.push([2006, "SES", 6200, 95000, "Silver", "AUTO"]);
    data.push([2002, "SE", 5995, 87003, "Red", "AUTO"]);
    data.push([2000, "SE", 5980, 96841, "Red", "AUTO"]);
    data.push([2001, "SE", 4899, 151479, "Yellow", "AUTO"]);
    data.push([2000, "SE", 3800, 109259, "Red", "AUTO"]);
    // this is indicative of what might be returned from a service
    var dataArray = [
        {
            "_id": "5988b305b649f6963b990a8e",
            "Year": 2011,
            "Model": "SEL",
            "Price": 21992,
            "Mileage": 7413,
            "Color": "Yellow",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a8f",
            "Year": 2011,
            "Model": "SEL",
            "Price": 20995,
            "Mileage": 10926,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a90",
            "Year": 2011,
            "Model": "SEL",
            "Price": 19995,
            "Mileage": 7351,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a91",
            "Year": 2011,
            "Model": "SEL",
            "Price": 17809,
            "Mileage": 11613,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a92",
            "Year": 2012,
            "Model": "SE",
            "Price": 17500,
            "Mileage": 8367,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a93",
            "Year": 2010,
            "Model": "SEL",
            "Price": 17495,
            "Mileage": 25125,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a94",
            "Year": 2011,
            "Model": "SEL",
            "Price": 17000,
            "Mileage": 27393,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a95",
            "Year": 2010,
            "Model": "SEL",
            "Price": 16995,
            "Mileage": 21026,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a96",
            "Year": 2011,
            "Model": "SES",
            "Price": 16995,
            "Mileage": 32655,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a97",
            "Year": 2010,
            "Model": "SES",
            "Price": 16995,
            "Mileage": 36116,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a98",
            "Year": 2010,
            "Model": "SES",
            "Price": 16995,
            "Mileage": 40539,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a99",
            "Year": 2011,
            "Model": "SES",
            "Price": 16992,
            "Mileage": 9199,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a9a",
            "Year": 2011,
            "Model": "SEL",
            "Price": 16950,
            "Mileage": 9388,
            "Color": "Green",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a9b",
            "Year": 2010,
            "Model": "SES",
            "Price": 16950,
            "Mileage": 32058,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a9c",
            "Year": 2011,
            "Model": "SE",
            "Price": 16000,
            "Mileage": 15367,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a9d",
            "Year": 2011,
            "Model": "SES",
            "Price": 15999,
            "Mileage": 16368,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a9e",
            "Year": 2010,
            "Model": "SEL",
            "Price": 15999,
            "Mileage": 19926,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990a9f",
            "Year": 2010,
            "Model": "SES",
            "Price": 15995,
            "Mileage": 36049,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aa0",
            "Year": 2011,
            "Model": "SEL",
            "Price": 15992,
            "Mileage": 11662,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aa1",
            "Year": 2011,
            "Model": "SEL",
            "Price": 15992,
            "Mileage": 32069,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aa2",
            "Year": 2010,
            "Model": "SES",
            "Price": 15988,
            "Mileage": 16035,
            "Color": "Silver",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990aa3",
            "Year": 2010,
            "Model": "SEL",
            "Price": 15980,
            "Mileage": 39943,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aa4",
            "Year": 2011,
            "Model": "SE",
            "Price": 15899,
            "Mileage": 36685,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aa5",
            "Year": 2010,
            "Model": "SEL",
            "Price": 15889,
            "Mileage": 24920,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aa6",
            "Year": 2009,
            "Model": "SEL",
            "Price": 15688,
            "Mileage": 20019,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aa7",
            "Year": 2010,
            "Model": "SE",
            "Price": 15500,
            "Mileage": 29338,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aa8",
            "Year": 2010,
            "Model": "SE",
            "Price": 15499,
            "Mileage": 7784,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aa9",
            "Year": 2010,
            "Model": "SE",
            "Price": 15499,
            "Mileage": 35636,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aaa",
            "Year": 2010,
            "Model": "SES",
            "Price": 15298,
            "Mileage": 22029,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aab",
            "Year": 2009,
            "Model": "SEL",
            "Price": 14999,
            "Mileage": 33107,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aac",
            "Year": 2010,
            "Model": "SES",
            "Price": 14999,
            "Mileage": 36306,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aad",
            "Year": 2009,
            "Model": "SE",
            "Price": 14995,
            "Mileage": 34419,
            "Color": "Black",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990aae",
            "Year": 2011,
            "Model": "SE",
            "Price": 14992,
            "Mileage": 4867,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aaf",
            "Year": 2011,
            "Model": "SEL",
            "Price": 14992,
            "Mileage": 18948,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ab0",
            "Year": 2009,
            "Model": "SES",
            "Price": 14992,
            "Mileage": 24030,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ab1",
            "Year": 2010,
            "Model": "SEL",
            "Price": 14990,
            "Mileage": 33036,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ab2",
            "Year": 2011,
            "Model": "SE",
            "Price": 14989,
            "Mileage": 23967,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ab3",
            "Year": 2010,
            "Model": "SE",
            "Price": 14906,
            "Mileage": 37905,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ab4",
            "Year": 2010,
            "Model": "SE",
            "Price": 14900,
            "Mileage": 28955,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ab5",
            "Year": 2010,
            "Model": "SE",
            "Price": 14893,
            "Mileage": 11165,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ab6",
            "Year": 2010,
            "Model": "SES",
            "Price": 14761,
            "Mileage": 44813,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ab7",
            "Year": 2010,
            "Model": "SES",
            "Price": 14699,
            "Mileage": 36469,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ab8",
            "Year": 2010,
            "Model": "SES",
            "Price": 14677,
            "Mileage": 22143,
            "Color": "Black",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990ab9",
            "Year": 2009,
            "Model": "SES",
            "Price": 14549,
            "Mileage": 34046,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aba",
            "Year": 2010,
            "Model": "SE",
            "Price": 14499,
            "Mileage": 32703,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990abb",
            "Year": 2010,
            "Model": "SES",
            "Price": 14495,
            "Mileage": 35894,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990abc",
            "Year": 2010,
            "Model": "SE",
            "Price": 14495,
            "Mileage": 38275,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990abd",
            "Year": 2010,
            "Model": "SE",
            "Price": 14480,
            "Mileage": 24855,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990abe",
            "Year": 2009,
            "Model": "SEL",
            "Price": 14477,
            "Mileage": 29501,
            "Color": "Gray",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990abf",
            "Year": 2009,
            "Model": "SEL",
            "Price": 14355,
            "Mileage": 35394,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ac0",
            "Year": 2010,
            "Model": "SE",
            "Price": 14299,
            "Mileage": 36447,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ac1",
            "Year": 2010,
            "Model": "SES",
            "Price": 14275,
            "Mileage": 35318,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ac2",
            "Year": 2010,
            "Model": "SES",
            "Price": 14000,
            "Mileage": 24929,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ac3",
            "Year": 2009,
            "Model": "SE",
            "Price": 13999,
            "Mileage": 23785,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ac4",
            "Year": 2010,
            "Model": "SE",
            "Price": 13997,
            "Mileage": 15167,
            "Color": "Black",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990ac5",
            "Year": 2010,
            "Model": "SE",
            "Price": 13995,
            "Mileage": 13541,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ac6",
            "Year": 2010,
            "Model": "SE",
            "Price": 13995,
            "Mileage": 20278,
            "Color": "Black",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990ac7",
            "Year": 2009,
            "Model": "SES",
            "Price": 13995,
            "Mileage": 46126,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ac8",
            "Year": 2009,
            "Model": "SES",
            "Price": 13995,
            "Mileage": 53733,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ac9",
            "Year": 2009,
            "Model": "SES",
            "Price": 13992,
            "Mileage": 21108,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aca",
            "Year": 2010,
            "Model": "SE",
            "Price": 13992,
            "Mileage": 21721,
            "Color": "Green",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990acb",
            "Year": 2010,
            "Model": "SES",
            "Price": 13992,
            "Mileage": 26716,
            "Color": "Gray",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990acc",
            "Year": 2009,
            "Model": "SES",
            "Price": 13992,
            "Mileage": 26887,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990acd",
            "Year": 2009,
            "Model": "SE",
            "Price": 13991,
            "Mileage": 36252,
            "Color": "Silver",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990ace",
            "Year": 2009,
            "Model": "SE",
            "Price": 13950,
            "Mileage": 9450,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990acf",
            "Year": 2010,
            "Model": "SE",
            "Price": 13950,
            "Mileage": 31414,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ad0",
            "Year": 2010,
            "Model": "SE",
            "Price": 13950,
            "Mileage": 37185,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ad1",
            "Year": 2010,
            "Model": "SE",
            "Price": 13895,
            "Mileage": 48174,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ad2",
            "Year": 2009,
            "Model": "SE",
            "Price": 13888,
            "Mileage": 50533,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ad3",
            "Year": 2009,
            "Model": "SE",
            "Price": 13845,
            "Mileage": 36713,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ad4",
            "Year": 2009,
            "Model": "SES",
            "Price": 13799,
            "Mileage": 34888,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ad5",
            "Year": 2009,
            "Model": "SES",
            "Price": 13742,
            "Mileage": 38380,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ad6",
            "Year": 2010,
            "Model": "SEL",
            "Price": 13687,
            "Mileage": 35574,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ad7",
            "Year": 2009,
            "Model": "SEL",
            "Price": 13663,
            "Mileage": 27528,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ad8",
            "Year": 2010,
            "Model": "SES",
            "Price": 13599,
            "Mileage": 33302,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ad9",
            "Year": 2009,
            "Model": "SEL",
            "Price": 13584,
            "Mileage": 43369,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ada",
            "Year": 2009,
            "Model": "SES",
            "Price": 13425,
            "Mileage": 64055,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990adb",
            "Year": 2010,
            "Model": "SE",
            "Price": 13384,
            "Mileage": 41342,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990adc",
            "Year": 2010,
            "Model": "SE",
            "Price": 13383,
            "Mileage": 34503,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990add",
            "Year": 2010,
            "Model": "SE",
            "Price": 13350,
            "Mileage": 16573,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ade",
            "Year": 2009,
            "Model": "SES",
            "Price": 12999,
            "Mileage": 32403,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990adf",
            "Year": 2009,
            "Model": "SE",
            "Price": 12998,
            "Mileage": 34846,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ae0",
            "Year": 2007,
            "Model": "SE",
            "Price": 12997,
            "Mileage": 39665,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ae1",
            "Year": 2010,
            "Model": "SE",
            "Price": 12995,
            "Mileage": 21325,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ae2",
            "Year": 2010,
            "Model": "SE",
            "Price": 12995,
            "Mileage": 32743,
            "Color": "Black",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990ae3",
            "Year": 2010,
            "Model": "SE",
            "Price": 12995,
            "Mileage": 40058,
            "Color": "White",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990ae4",
            "Year": 2009,
            "Model": "SE",
            "Price": 12995,
            "Mileage": 42325,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ae5",
            "Year": 2009,
            "Model": "SE",
            "Price": 12995,
            "Mileage": 44518,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ae6",
            "Year": 2009,
            "Model": "SE",
            "Price": 12995,
            "Mileage": 53902,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ae7",
            "Year": 2008,
            "Model": "SE",
            "Price": 12995,
            "Mileage": 127327,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ae8",
            "Year": 2009,
            "Model": "SE",
            "Price": 12992,
            "Mileage": 27136,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990ae9",
            "Year": 2009,
            "Model": "SES",
            "Price": 12990,
            "Mileage": 45813,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aea",
            "Year": 2009,
            "Model": "SE",
            "Price": 12988,
            "Mileage": 31538,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aeb",
            "Year": 2010,
            "Model": "SE",
            "Price": 12849,
            "Mileage": 29517,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aec",
            "Year": 2010,
            "Model": "SE",
            "Price": 12780,
            "Mileage": 35871,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aed",
            "Year": 2008,
            "Model": "SE",
            "Price": 12777,
            "Mileage": 49787,
            "Color": "Black",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990aee",
            "Year": 2008,
            "Model": "SES",
            "Price": 12704,
            "Mileage": 36323,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aef",
            "Year": 2009,
            "Model": "SES",
            "Price": 12595,
            "Mileage": 39211,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990af0",
            "Year": 2009,
            "Model": "SE",
            "Price": 12507,
            "Mileage": 44789,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990af1",
            "Year": 2008,
            "Model": "SE",
            "Price": 12500,
            "Mileage": 45996,
            "Color": "White",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990af2",
            "Year": 2009,
            "Model": "SE",
            "Price": 12500,
            "Mileage": 54988,
            "Color": "White",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990af3",
            "Year": 2009,
            "Model": "SE",
            "Price": 12280,
            "Mileage": 29288,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990af4",
            "Year": 2009,
            "Model": "SE",
            "Price": 11999,
            "Mileage": 36124,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990af5",
            "Year": 2009,
            "Model": "SE",
            "Price": 11992,
            "Mileage": 32559,
            "Color": "Black",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990af6",
            "Year": 2009,
            "Model": "SES",
            "Price": 11984,
            "Mileage": 59048,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990af7",
            "Year": 2009,
            "Model": "SE",
            "Price": 11980,
            "Mileage": 55170,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990af8",
            "Year": 2010,
            "Model": "SE",
            "Price": 11792,
            "Mileage": 39722,
            "Color": "Green",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990af9",
            "Year": 2008,
            "Model": "SE",
            "Price": 11754,
            "Mileage": 38286,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990afa",
            "Year": 2008,
            "Model": "SES",
            "Price": 11749,
            "Mileage": 57341,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990afb",
            "Year": 2008,
            "Model": "SES",
            "Price": 11495,
            "Mileage": 82221,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990afc",
            "Year": 2008,
            "Model": "SE",
            "Price": 11450,
            "Mileage": 85229,
            "Color": "Red",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990afd",
            "Year": 2009,
            "Model": "SES",
            "Price": 10995,
            "Mileage": 42834,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990afe",
            "Year": 2005,
            "Model": "SES",
            "Price": 10995,
            "Mileage": 69415,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990aff",
            "Year": 2009,
            "Model": "SEL",
            "Price": 10995,
            "Mileage": 78264,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b00",
            "Year": 2009,
            "Model": "SE",
            "Price": 10979,
            "Mileage": 60709,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b01",
            "Year": 2008,
            "Model": "SE",
            "Price": 10955,
            "Mileage": 39643,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b02",
            "Year": 2009,
            "Model": "SE",
            "Price": 10955,
            "Mileage": 40180,
            "Color": "Gold",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b03",
            "Year": 2008,
            "Model": "SE",
            "Price": 10836,
            "Mileage": 40330,
            "Color": "Green",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990b04",
            "Year": 2007,
            "Model": "SES",
            "Price": 10815,
            "Mileage": 77231,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b05",
            "Year": 2007,
            "Model": "SE",
            "Price": 10770,
            "Mileage": 72937,
            "Color": "Silver",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990b06",
            "Year": 2010,
            "Model": "SE",
            "Price": 10717,
            "Mileage": 64199,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b07",
            "Year": 2007,
            "Model": "SES",
            "Price": 10000,
            "Mileage": 63926,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b08",
            "Year": 2007,
            "Model": "SES",
            "Price": 9999,
            "Mileage": 74427,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b09",
            "Year": 2007,
            "Model": "SES",
            "Price": 9999,
            "Mileage": 78948,
            "Color": "Black",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990b0a",
            "Year": 2006,
            "Model": "SE",
            "Price": 9995,
            "Mileage": 51311,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b0b",
            "Year": 2008,
            "Model": "SE",
            "Price": 9995,
            "Mileage": 95364,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b0c",
            "Year": 2008,
            "Model": "SE",
            "Price": 9992,
            "Mileage": 74109,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b0d",
            "Year": 2007,
            "Model": "SE",
            "Price": 9651,
            "Mileage": 63296,
            "Color": "Blue",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b0e",
            "Year": 2007,
            "Model": "SES",
            "Price": 9000,
            "Mileage": 80605,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b0f",
            "Year": 2006,
            "Model": "SE",
            "Price": 8999,
            "Mileage": 49656,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b10",
            "Year": 2007,
            "Model": "SE",
            "Price": 8996,
            "Mileage": 48652,
            "Color": "Silver",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990b11",
            "Year": 2006,
            "Model": "SE",
            "Price": 8800,
            "Mileage": 71331,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b12",
            "Year": 2008,
            "Model": "SE",
            "Price": 8495,
            "Mileage": 106171,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b13",
            "Year": 2008,
            "Model": "SE",
            "Price": 8494,
            "Mileage": 68901,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b14",
            "Year": 2009,
            "Model": "SE",
            "Price": 8480,
            "Mileage": 70036,
            "Color": "White",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990b15",
            "Year": 2007,
            "Model": "SES",
            "Price": 7999,
            "Mileage": 81596,
            "Color": "Yellow",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990b16",
            "Year": 2006,
            "Model": "SES",
            "Price": 7995,
            "Mileage": 35000,
            "Color": "Black",
            "Transmission": "MANUAL"
        },
        {
            "_id": "5988b305b649f6963b990b17",
            "Year": 2006,
            "Model": "SES",
            "Price": 7995,
            "Mileage": 97987,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b18",
            "Year": 2003,
            "Model": "SES",
            "Price": 7900,
            "Mileage": 96000,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b19",
            "Year": 2005,
            "Model": "SES",
            "Price": 7488,
            "Mileage": 59013,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b1a",
            "Year": 2004,
            "Model": "SE",
            "Price": 6999,
            "Mileage": 105714,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b1b",
            "Year": 2007,
            "Model": "SE",
            "Price": 6995,
            "Mileage": 86862,
            "Color": "White",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b1c",
            "Year": 2000,
            "Model": "SE",
            "Price": 6980,
            "Mileage": 60161,
            "Color": "Green",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b1d",
            "Year": 2004,
            "Model": "SES",
            "Price": 6980,
            "Mileage": 101130,
            "Color": "Gray",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b1e",
            "Year": 2004,
            "Model": "SES",
            "Price": 6950,
            "Mileage": 119720,
            "Color": "Black",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b1f",
            "Year": 2006,
            "Model": "SES",
            "Price": 6200,
            "Mileage": 95000,
            "Color": "Silver",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b20",
            "Year": 2002,
            "Model": "SE",
            "Price": 5995,
            "Mileage": 87003,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b21",
            "Year": 2000,
            "Model": "SE",
            "Price": 5980,
            "Mileage": 96841,
            "Color": "Red",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b22",
            "Year": 2001,
            "Model": "SE",
            "Price": 4899,
            "Mileage": 151479,
            "Color": "Yellow",
            "Transmission": "AUTO"
        },
        {
            "_id": "5988b305b649f6963b990b23",
            "Year": 2000,
            "Model": "SE",
            "Price": 3800,
            "Mileage": 109259,
            "Color": "Red",
            "Transmission": "AUTO"
        }
    ];
    var __frame = new DataFrame_1.TSMT$DataFrame();
    __frame.fromArray(data, types);
    var __frame2 = new DataFrame_1.TSMT$DataFrame();
    __frame2.fromArrayObj(dataArray, types);
    var __stats = new FrameStats_1.TSMT$FrameStats();
    var __analysis = new TableAnalysis_1.TSMT$TableAnalysis();
    it('properly constructs a new data frame', function () {
        var frame = new DataFrame_1.TSMT$DataFrame();
        expect(frame.size).to.equal(0);
        expect(frame.categories.length).to.equal(0);
        expect(frame.dataTypes.length).to.equal(0);
    });
    it('properly computes price quartiles', function () {
        var q = __stats.getQuantiles(__frame, "price", 0.25);
        expect(q.length).to.equal(5);
        expect(q[0]).to.equal(3800);
        expect(q[1]).to.equal(10995);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(q[2], 13591.5, 2)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(q[3], 14904.5, 2)).to.be.true;
        expect(q[4]).to.equal(21992);
        q = __stats.getQuantiles(__frame2, "Price", 0.25);
        expect(q.length).to.equal(5);
        expect(q[0]).to.equal(3800);
        expect(q[1]).to.equal(10995);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(q[2], 13591.5, 2)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(q[3], 14904.5, 2)).to.be.true;
        expect(q[4]).to.equal(21992);
    });
    it('properly computes price quintiles', function () {
        var q = __stats.getQuantiles(__frame, "price", 0.2);
        expect(q.length).to.equal(6);
        expect(q[0]).to.equal(3800);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(q[1], 10759.4, 2)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(q[2], 12993.8, 2)).to.be.true;
        expect(q[3]).to.equal(13992);
        expect(q[4]).to.equal(14999);
        expect(q[5]).to.equal(21992);
        q = __stats.getQuantiles(__frame2, "Price", 0.2);
        expect(q.length).to.equal(6);
        expect(q[0]).to.equal(3800);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(q[1], 10759.4, 2)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(q[2], 12993.8, 2)).to.be.true;
        expect(q[3]).to.equal(13992);
        expect(q[4]).to.equal(14999);
        expect(q[5]).to.equal(21992);
    });
    it('properly computes price mean and std. dev.', function () {
        var mu = __stats.singleStat(__frame, "price", FrameStats_2.SingleStatEnum.MEAN);
        var std = __stats.singleStat(__frame, "price", FrameStats_2.SingleStatEnum.STDDEV);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(mu, 12961.9333, 3)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(std, 3122.48, 2)).to.be.true;
    });
    it('properly computes price min and max', function () {
        var min = __stats.singleStat(__frame, "price", FrameStats_2.SingleStatEnum.MIN);
        var max = __stats.singleStat(__frame, "price", FrameStats_2.SingleStatEnum.MAX);
        expect(min).to.equal(3800);
        expect(max).to.equal(21992);
    });
    it('properly computes median mileage', function () {
        var median = __stats.singleStat(__frame, "mileage", FrameStats_2.SingleStatEnum.MEDIAN);
        expect(median).to.equal(36385);
        median = __stats.singleStat(__frame2, "Mileage", FrameStats_2.SingleStatEnum.MEDIAN);
        expect(median).to.equal(36385);
    });
    it('reports correct covariance', function () {
        var frame = new DataFrame_1.TSMT$DataFrame();
        var types = [DataFrame_2.ColumnTypeEnum.NUMERIC, DataFrame_2.ColumnTypeEnum.NUMERIC];
        var data = [];
        data.push(['col1', 'col2']);
        data.push([2.1, 8]);
        data.push([2.5, 12]);
        data.push([4.0, 14]);
        data.push([3.6, 10]);
        frame.fromArray(data, types);
        var cov = __stats.doubleStat(frame, 'col1', 'col2', FrameStats_1.DoubleStatEnum.COVARIANCE);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(cov, 1.5333, 3)).to.be.true;
    });
    it('does one-way table analysis of year data', function () {
        var obj = __analysis.oneWayTable(__frame, "year");
        var tbl = __analysis.toArray(obj);
        expect(tbl.length).to.equal(13);
        var item = tbl[0];
        expect(item['item']).to.equal('2000');
        expect(+item['count']).to.equal(3);
        item = tbl[1];
        expect(item['item']).to.equal('2001');
        expect(+item['count']).to.equal(1);
        item = tbl[2];
        expect(item['item']).to.equal('2002');
        expect(+item['count']).to.equal(1);
        item = tbl[3];
        expect(item['item']).to.equal('2003');
        expect(+item['count']).to.equal(1);
        item = tbl[4];
        expect(item['item']).to.equal('2004');
        expect(+item['count']).to.equal(3);
        item = tbl[5];
        expect(item['item']).to.equal('2005');
        expect(+item['count']).to.equal(2);
        item = tbl[6];
        expect(item['item']).to.equal('2006');
        expect(+item['count']).to.equal(6);
        item = tbl[7];
        expect(item['item']).to.equal('2007');
        expect(+item['count']).to.equal(11);
        item = tbl[8];
        expect(item['item']).to.equal('2008');
        expect(+item['count']).to.equal(14);
        item = tbl[9];
        expect(item['item']).to.equal('2009');
        expect(+item['count']).to.equal(42);
        item = tbl[10];
        expect(item['item']).to.equal('2010');
        expect(+item['count']).to.equal(49);
        item = tbl[11];
        expect(item['item']).to.equal('2011');
        expect(+item['count']).to.equal(16);
        item = tbl[12];
        expect(item['item']).to.equal('2012');
        expect(+item['count']).to.equal(1);
    });
    it('does one-way table analysis of year data #2', function () {
        var obj = __analysis.oneWayTable(__frame2, "Year");
        var tbl = __analysis.toArray(obj);
        expect(tbl.length).to.equal(13);
        var item = tbl[0];
        expect(item['item']).to.equal('2000');
        expect(+item['count']).to.equal(3);
        item = tbl[1];
        expect(item['item']).to.equal('2001');
        expect(+item['count']).to.equal(1);
        item = tbl[2];
        expect(item['item']).to.equal('2002');
        expect(+item['count']).to.equal(1);
        item = tbl[3];
        expect(item['item']).to.equal('2003');
        expect(+item['count']).to.equal(1);
        item = tbl[4];
        expect(item['item']).to.equal('2004');
        expect(+item['count']).to.equal(3);
        item = tbl[5];
        expect(item['item']).to.equal('2005');
        expect(+item['count']).to.equal(2);
        item = tbl[6];
        expect(item['item']).to.equal('2006');
        expect(+item['count']).to.equal(6);
        item = tbl[7];
        expect(item['item']).to.equal('2007');
        expect(+item['count']).to.equal(11);
        item = tbl[8];
        expect(item['item']).to.equal('2008');
        expect(+item['count']).to.equal(14);
        item = tbl[9];
        expect(item['item']).to.equal('2009');
        expect(+item['count']).to.equal(42);
        item = tbl[10];
        expect(item['item']).to.equal('2010');
        expect(+item['count']).to.equal(49);
        item = tbl[11];
        expect(item['item']).to.equal('2011');
        expect(+item['count']).to.equal(16);
        item = tbl[12];
        expect(item['item']).to.equal('2012');
        expect(+item['count']).to.equal(1);
    });
    it('does one-way table analysis of color data (as percentage)', function () {
        var obj = __analysis.oneWayTable(__frame, "color", true);
        var tbl = __analysis.toArray(obj);
        expect(tbl.length).to.equal(9);
        var item = tbl[0];
        expect(item['item']).to.equal('Yellow');
        expect(+item['count']).to.equal(2);
        item = tbl[1];
        expect(item['item']).to.equal('Gray');
        expect(+item['count']).to.equal(10.67);
        item = tbl[2];
        expect(item['item']).to.equal('Silver');
        expect(+item['count']).to.equal(21.33);
        item = tbl[3];
        expect(item['item']).to.equal('White');
        expect(+item['count']).to.equal(10.67);
        item = tbl[4];
        expect(item['item']).to.equal('Blue');
        expect(+item['count']).to.equal(11.33);
        item = tbl[5];
        expect(item['item']).to.equal('Black');
        expect(+item['count']).to.equal(23.33);
        item = tbl[6];
        expect(item['item']).to.equal('Green');
        expect(+item['count']).to.equal(3.33);
        item = tbl[7];
        expect(item['item']).to.equal('Red');
        expect(+item['count']).to.equal(16.67);
        item = tbl[8];
        expect(item['item']).to.equal('Gold');
        expect(+item['count']).to.equal(0.67);
    });
    it('cross-table of model vs. color groups', function () {
        var output = __analysis.crossTable(__frame, "model", "color", ["Black Silver White Gray", "Blue Gold Green Red Yellow"], ["Simple-Color", "Bold-Color"]);
        expect(+output['df']).to.equal(149);
        expect(+output['q']).to.equal(1);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+output['chi2'], 0.1539563834046844, 4)).to.be.true;
        var table = output['table'];
        // since there are two groups, there are two summary columns and a row total column.  There are three rows, one
        // for each model type, 'SE', 'SEL', and 'SES'.
        var SEL = table['SEL'];
        var SE = table['SE'];
        var SES = table['SES'];
        expect(SEL.length).to.equal(3);
        var cell = SEL[0];
        expect(+cell['n']).to.equal(16);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.6956521739130435, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.16161616161616163, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.10666666666666667, 4)).to.be.true;
        cell = SEL[1];
        expect(+cell['n']).to.equal(7);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.30434782608695654, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.13725490196078433, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.04666666666666667, 4)).to.be.true;
        expect(+SEL[2]).to.equal(23);
        cell = SE[0];
        expect(+cell['n']).to.equal(51);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.6538461538461539, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.5151515151515151, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.34, 2)).to.be.true;
        cell = SE[1];
        expect(+cell['n']).to.equal(27);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.34615384615384615, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.5294117647058824, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.18, 2)).to.be.true;
        expect(+SE[2]).to.equal(78);
        cell = SES[0];
        expect(+cell['n']).to.equal(32);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.6530612244897959, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.32323232323232326, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.21333333333333335, 4)).to.be.true;
        cell = SES[1];
        expect(+cell['n']).to.equal(17);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.3469387755102041, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.3333333333333334, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.11333333333333334, 4)).to.be.true;
        expect(+SES[2]).to.equal(49);
    });
    it('cross-table of model vs. color groups #2', function () {
        var output = __analysis.crossTable(__frame2, "Model", "Color", ["Black Silver White Gray", "Blue Gold Green Red Yellow"], ["Simple-Color", "Bold-Color"]);
        expect(+output['df']).to.equal(149);
        expect(+output['q']).to.equal(1);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+output['chi2'], 0.1539563834046844, 4)).to.be.true;
        var table = output['table'];
        // since there are two groups, there are two summary columns and a row total column.  There are three rows, one
        // for each model type, 'SE', 'SEL', and 'SES'.
        var SEL = table['SEL'];
        var SE = table['SE'];
        var SES = table['SES'];
        expect(SEL.length).to.equal(3);
        var cell = SEL[0];
        expect(+cell['n']).to.equal(16);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.6956521739130435, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.16161616161616163, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.10666666666666667, 4)).to.be.true;
        cell = SEL[1];
        expect(+cell['n']).to.equal(7);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.30434782608695654, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.13725490196078433, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.04666666666666667, 4)).to.be.true;
        expect(+SEL[2]).to.equal(23);
        cell = SE[0];
        expect(+cell['n']).to.equal(51);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.6538461538461539, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.5151515151515151, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.34, 2)).to.be.true;
        cell = SE[1];
        expect(+cell['n']).to.equal(27);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.34615384615384615, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.5294117647058824, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.18, 2)).to.be.true;
        expect(+SE[2]).to.equal(78);
        cell = SES[0];
        expect(+cell['n']).to.equal(32);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.6530612244897959, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.32323232323232326, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.21333333333333335, 4)).to.be.true;
        cell = SES[1];
        expect(+cell['n']).to.equal(17);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.3469387755102041, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.3333333333333334, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.11333333333333334, 4)).to.be.true;
        expect(+SES[2]).to.equal(49);
    });
    it('cross-tab city vs. baseball teams', function () {
        var frame = new DataFrame_1.TSMT$DataFrame();
        var data = [];
        var types = [DataFrame_2.ColumnTypeEnum.CHARACTER,
            DataFrame_2.ColumnTypeEnum.NUMERIC,
            DataFrame_2.ColumnTypeEnum.NUMERIC,
            DataFrame_2.ColumnTypeEnum.NUMERIC];
        data.push(["City", "Blue Jays", "Red Socks", "Yankees"]);
        data.push(["Boston", 11, 33, 7]);
        data.push(["Montreal", 23, 14, 9]);
        data.push(["Montpellier", 22, 13, 14]);
        frame.fromArray(data, types);
        expect(frame.size).to.equal(3);
        var output = __analysis.crossTabulation(frame);
        expect(+output['df']).to.equal(4);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+output['q'], 0.0006703343353674507, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+output['chi2'], 19.35140903152151, 4)).to.be.true;
        var table = output['table'];
        // output table is 3x3, ordered by columns
        expect(table.length).to.equal(3);
        var column = table[0];
        var cell = column[0];
        expect(+cell['n']).to.equal(11);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.21568627450980393, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.19642857142857142, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.07534246575342465, 5)).to.be.true;
        cell = column[1];
        expect(+cell['n']).to.equal(23);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.5, 1)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.4107142857142857, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.15753424657534246, 5)).to.be.true;
        cell = column[2];
        expect(+cell['n']).to.equal(22);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.4489795918367347, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.39285714285714285, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.1506849315068493, 5)).to.be.true;
        column = table[1];
        cell = column[0];
        expect(+cell['n']).to.equal(33);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.6470588235294118, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.55, 2)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.22602739726027396, 5)).to.be.true;
        cell = column[1];
        expect(+cell['n']).to.equal(14);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.30434782608695654, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.23333333333333334, 4)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.0958904109589041, 5)).to.be.true;
        cell = column[2];
        expect(+cell['n']).to.equal(13);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.2653061224489796, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.21666666666666667, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.08904109589041095, 5)).to.be.true;
        column = table[2];
        cell = column[0];
        expect(+cell['n']).to.equal(7);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.13725490196078433, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.23333333333333334, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.04794520547945205, 5)).to.be.true;
        cell = column[1];
        expect(+cell['n']).to.equal(9);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.1956521739130435, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.3, 1)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.06164383561643835, 5)).to.be.true;
        cell = column[2];
        expect(+cell['n']).to.equal(14);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.2857142857142857, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.4666666666666667, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.0958904109589041, 5)).to.be.true;
    });
    it('cross-tab of watch type vs. age', function () {
        var frame = new DataFrame_1.TSMT$DataFrame();
        var data = [];
        var types = [DataFrame_2.ColumnTypeEnum.CHARACTER,
            DataFrame_2.ColumnTypeEnum.NUMERIC,
            DataFrame_2.ColumnTypeEnum.NUMERIC,
            DataFrame_2.ColumnTypeEnum.NUMERIC];
        data.push(["Age", "Digital", "Analog", "Undecided"]);
        data.push(["30-", 90, 40, 10]);
        data.push(["30+", 10, 40, 10]);
        frame.fromArray(data, types);
        expect(frame.size).to.equal(2);
        var output = __analysis.crossTabulation(frame);
        expect(Math.abs(+output['q']) < 0.000001).to.be.true;
        expect(+output['df']).to.equal(2);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+output['chi2'], 38.095238095238095, 3)).to.be.true;
        var table = output['table'];
        expect(table.length).to.equal(3);
        var column = table[0];
        var cell = column[0];
        expect(+cell['n']).to.equal(90);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.6428571428571429, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.9, 1)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.45, 2)).to.be.true;
        cell = column[1];
        expect(+cell['n']).to.equal(10);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.16666666666666666, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.1, 1)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.05, 2)).to.be.true;
        column = table[1];
        cell = column[0];
        expect(+cell['n']).to.equal(40);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.2857142857142857, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.5, 1)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.2, 1)).to.be.true;
        cell = column[1];
        expect(+cell['n']).to.equal(40);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.6666666666666666, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.5, 1)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.2, 1)).to.be.true;
        column = table[2];
        cell = column[0];
        expect(+cell['n']).to.equal(10);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.07142857142857142, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.5, 1)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.05, 2)).to.be.true;
        cell = column[1];
        expect(+cell['n']).to.equal(10);
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['r'], 0.16666666666666666, 5)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['c'], 0.5, 1)).to.be.true;
        expect(CompareUtils_1.TSMT$CompareUtils.compare(+cell['t'], 0.05, 2)).to.be.true;
    });
    it('correctly normalizes columns', function () {
        var frame = new DataFrame_1.TSMT$DataFrame();
        var data = [];
        var types = [DataFrame_2.ColumnTypeEnum.NUMERIC,
            DataFrame_2.ColumnTypeEnum.NUMERIC,
            DataFrame_2.ColumnTypeEnum.NUMERIC];
        data.push(["col1", "col2", "col3"]);
        data.push([3, 1, -3]);
        data.push([1, 2, -1]);
        data.push([2, 5, -2]);
        frame.fromArray(data, types);
        var output = __analysis.normalize(frame);
        // result by column: [ [ 1, 0, 0.5 ], [ 0, 0.25, 1 ], [ 0, 1, 0.5 ] ]
        var column = output[0];
        expect(column[0]).to.equal(1);
        expect(column[1]).to.equal(0);
        expect(column[2]).to.equal(0.5);
        column = output[1];
        expect(column[0]).to.equal(0);
        expect(column[1]).to.equal(0.25);
        expect(column[2]).to.equal(1);
        column = output[2];
        expect(column[0]).to.equal(0);
        expect(column[1]).to.equal(1);
        expect(column[2]).to.equal(0.5);
    });
});
