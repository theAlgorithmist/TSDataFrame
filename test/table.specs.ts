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

// Specs for TSMT Basic Data Frame
import {TSMT$DataFrame    } from '../src/DataFrame';
import {ColumnTypeEnum    } from '../src/DataFrame';
import {TSMT$TableAnalysis} from '../src/TableAnalysis';
import {DoubleStatEnum
     , TSMT$FrameStats    } from '../src/FrameStats';
import {SingleStatEnum    } from '../src/FrameStats';

import {tableData} from '../src/DataFrame';

import * as Chai from 'chai';
import {TSMT$CompareUtils} from "../src/CompareUtils";
const expect = Chai.expect;

// Test Suites
describe('TSMT Data Frame Analysis Tests', () =>
{
  // dataset from 'Machine Learning in R' by Lantz
  const data: Array<Array<tableData>> = [];
  const types: Array<number>          = [
    ColumnTypeEnum.NUMERIC,
    ColumnTypeEnum.CHARACTER,
    ColumnTypeEnum.NUMERIC,
    ColumnTypeEnum.NUMERIC,
    ColumnTypeEnum.CHARACTER,
    ColumnTypeEnum.CHARACTER
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

  const __frame: TSMT$DataFrame = new TSMT$DataFrame();
  __frame.fromArray(data, types);

  const __stats: TSMT$FrameStats = new TSMT$FrameStats();

  const __analysis: TSMT$TableAnalysis = new TSMT$TableAnalysis();

  it('properly constructs a new data frame', function ()
  {
    const frame: TSMT$DataFrame = new TSMT$DataFrame();
    expect(frame.size).to.equal(0);
    expect(frame.categories.length).to.equal(0);
    expect(frame.dataTypes.length).to.equal(0);
  });

  it('properly computes price quartiles', function ()
  {
    const q: Array<number> = __stats.getQuantiles(__frame, "price", 0.25);

    expect(q.length).to.equal(5);
    expect(q[0]).to.equal(3800);
    expect(q[1]).to.equal(10995);
    expect(TSMT$CompareUtils.compare(q[2], 13591.5, 2)).to.be.true;
    expect(TSMT$CompareUtils.compare(q[3], 14904.5, 2)).to.be.true;
    expect(q[4]).to.equal(21992);
  });

  it('properly computes price quintiles', function ()
  {
    const q: Array<number> = __stats.getQuantiles(__frame, "price", 0.2);

    expect(q.length).to.equal(6);
    expect(q[0]).to.equal(3800);
    expect(TSMT$CompareUtils.compare(q[1], 10759.4, 2)).to.be.true;
    expect(TSMT$CompareUtils.compare(q[2], 12993.8, 2)).to.be.true;
    expect(q[3]).to.equal(13992);
    expect(q[4]).to.equal(14999);
    expect(q[5]).to.equal(21992);
  });

  it('properly computes price mean and std. dev.', function ()
  {
    const mu: number  = __stats.singleStat(__frame, "price", SingleStatEnum.MEAN);
    const std: number = __stats.singleStat(__frame, "price", SingleStatEnum.STDDEV);

    expect(TSMT$CompareUtils.compare(mu, 12961.9333, 3)).to.be.true;
    expect(TSMT$CompareUtils.compare(std, 3122.48, 2)).to.be.true;
  });

  it('properly computes price min and max', function ()
  {
    const min: number = __stats.singleStat(__frame, "price", SingleStatEnum.MIN);
    const max: number = __stats.singleStat(__frame, "price", SingleStatEnum.MAX);

    expect(min).to.equal(3800);
    expect(max).to.equal(21992);
  });

  it('properly computes median mileage', function ()
  {
    const median: number = __stats.singleStat(__frame, "mileage", SingleStatEnum.MEDIAN);

    expect(median).to.equal(36385);
  });

  it('reports correct covariance', function() {
    const frame: TSMT$DataFrame     = new TSMT$DataFrame();
    const types: Array<number>      = [ColumnTypeEnum.NUMERIC, ColumnTypeEnum.NUMERIC];

    const data: Array<Array<tableData>> = [];
    data.push( ['col1', 'col2'] );
    data.push( [2.1, 8] );
    data.push( [2.5, 12] );
    data.push( [4.0, 14] );
    data.push( [3.6, 10] );

    frame.fromArray(data, types);
    let cov: number = __stats.doubleStat(frame, 'col1', 'col2', DoubleStatEnum.COVARIANCE);

    expect(TSMT$CompareUtils.compare(cov, 1.5333, 3)).to.be.true;
  });

  it('does one-way table analysis of year data', function ()
  {
    const obj: Object        = __analysis.oneWayTable(__frame, "year");
    const tbl: Array<Object> = __analysis.toArray(obj);

    expect(tbl.length).to.equal(13);

    let item: Object = tbl[0];
    expect(<string> item['item']).to.equal('2000');
    expect(+item['count']).to.equal(3);

    item = tbl[1];
    expect(<string> item['item']).to.equal('2001');
    expect(+item['count']).to.equal(1);

    item = tbl[2];
    expect(<string> item['item']).to.equal('2002');
    expect(+item['count']).to.equal(1);

    item = tbl[3];
    expect(<string> item['item']).to.equal('2003');
    expect(+item['count']).to.equal(1);

    item = tbl[4];
    expect(<string> item['item']).to.equal('2004');
    expect(+item['count']).to.equal(3);

    item = tbl[5];
    expect(<string> item['item']).to.equal('2005');
    expect(+item['count']).to.equal(2);

    item = tbl[6];
    expect(<string> item['item']).to.equal('2006');
    expect(+item['count']).to.equal(6);

    item = tbl[7];
    expect(<string> item['item']).to.equal('2007');
    expect(+item['count']).to.equal(11);

    item = tbl[8];
    expect(<string> item['item']).to.equal('2008');
    expect(+item['count']).to.equal(14);

    item = tbl[9];
    expect(<string> item['item']).to.equal('2009');
    expect(+item['count']).to.equal(42);

    item = tbl[10];
    expect(<string> item['item']).to.equal('2010');
    expect(+item['count']).to.equal(49);

    item = tbl[11];
    expect(<string> item['item']).to.equal('2011');
    expect(+item['count']).to.equal(16);

    item = tbl[12];
    expect(<string> item['item']).to.equal('2012');
    expect(+item['count']).to.equal(1);
  });

  it('does one-way table analysis of color data (as percentage)', function ()
  {
    const obj: Object        = __analysis.oneWayTable(__frame, "color", true);
    const tbl: Array<Object> = __analysis.toArray(obj);

    expect(tbl.length).to.equal(9);

    let item: Object = tbl[0];
    expect(<string> item['item']).to.equal('Yellow');
    expect(+item['count']).to.equal(2);

    item = tbl[1];
    expect(<string> item['item']).to.equal('Gray');
    expect(+item['count']).to.equal(10.67);

    item = tbl[2];
    expect(<string> item['item']).to.equal('Silver');
    expect(+item['count']).to.equal(21.33);

    item = tbl[3];
    expect(<string> item['item']).to.equal('White');
    expect(+item['count']).to.equal(10.67);

    item = tbl[4];
    expect(<string> item['item']).to.equal('Blue');
    expect(+item['count']).to.equal(11.33);

    item = tbl[5];
    expect(<string> item['item']).to.equal('Black');
    expect(+item['count']).to.equal(23.33);

    item = tbl[6];
    expect(<string> item['item']).to.equal('Green');
    expect(+item['count']).to.equal(3.33);

    item = tbl[7];
    expect(<string> item['item']).to.equal('Red');
    expect(+item['count']).to.equal(16.67);

    item = tbl[8];
    expect(<string> item['item']).to.equal('Gold');
    expect(+item['count']).to.equal(0.67);
  });

  it('cross-table of model vs. color groups', function ()
  {
    const output: Object = __analysis.crossTable(__frame, "model", "color",
      ["Black Silver White Gray", "Blue Gold Green Red Yellow"],
      ["Simple-Color", "Bold-Color"]);

    expect(+output['df']).to.equal(149);
    expect(+output['q']).to.equal(1);
    expect(TSMT$CompareUtils.compare(+output['chi2'], 0.1539563834046844, 4)).to.be.true;

    const table: Object = output['table'];

    // since there are two groups, there are two summary columns and a row total column.  There are three rows, one
    // for each model type, 'SE', 'SEL', and 'SES'.

    let SEL: Array<Object | number> = table['SEL'];
    let SE: Array<Object | number> = table['SE'];
    let SES: Array<Object | number> = table['SES'];

    expect(SEL.length).to.equal(3);

    let cell: Object = SEL[0];
    expect(+cell['n']).to.equal(16);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.6956521739130435, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.16161616161616163, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.10666666666666667, 4)).to.be.true;

    cell = SEL[1];
    expect(+cell['n']).to.equal(7);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.30434782608695654, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.13725490196078433, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.04666666666666667, 4)).to.be.true;

    expect(+SEL[2]).to.equal(23);

    cell = SE[0];
    expect(+cell['n']).to.equal(51);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.6538461538461539, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.5151515151515151, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.34, 2)).to.be.true;

    cell = SE[1];
    expect(+cell['n']).to.equal(27);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.34615384615384615, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.5294117647058824, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.18, 2)).to.be.true;

    expect(+SE[2]).to.equal(78);

    cell = SES[0];
    expect(+cell['n']).to.equal(32);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.6530612244897959, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.32323232323232326, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.21333333333333335, 4)).to.be.true;

    cell = SES[1];
    expect(+cell['n']).to.equal(17);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.3469387755102041, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.3333333333333334, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.11333333333333334, 4)).to.be.true;

    expect(+SES[2]).to.equal(49);
  });

  it('cross-tab city vs. baseball teams', function ()
  {
    const frame: TSMT$DataFrame = new TSMT$DataFrame();

    const data: Array<Array<string | number>> = [];
    const types: Array<number> = [ColumnTypeEnum.CHARACTER,
                                  ColumnTypeEnum.NUMERIC,
                                  ColumnTypeEnum.NUMERIC,
                                  ColumnTypeEnum.NUMERIC];

    data.push(["City", "Blue Jays", "Red Socks", "Yankees"]);
    data.push(["Boston", 11, 33, 7]);
    data.push(["Montreal", 23, 14, 9]);
    data.push(["Montpellier", 22, 13, 14]);

    frame.fromArray(data, types);

    expect(frame.size).to.equal(3);

    const output: Object = __analysis.crossTabulation(frame);

    expect(+output['df']).to.equal(4);
    expect(TSMT$CompareUtils.compare(+output['q'], 0.0006703343353674507, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+output['chi2'], 19.35140903152151, 4)).to.be.true;

    const table: Array<Array<Object>> = output['table'];

    // output table is 3x3, ordered by columns
    expect(table.length).to.equal(3);

    let column: Array<Object> = table[0];
    let cell: Object = column[0];

    expect(+cell['n']).to.equal(11);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.21568627450980393, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.19642857142857142, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.07534246575342465, 5)).to.be.true;

    cell = column[1];
    expect(+cell['n']).to.equal(23);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.5, 1)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.4107142857142857, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.15753424657534246, 5)).to.be.true;

    cell = column[2];
    expect(+cell['n']).to.equal(22);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.4489795918367347, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.39285714285714285, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.1506849315068493, 5)).to.be.true;

    column = table[1];
    cell = column[0];

    expect(+cell['n']).to.equal(33);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.6470588235294118, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.55, 2)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.22602739726027396, 5)).to.be.true;

    cell = column[1];
    expect(+cell['n']).to.equal(14);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.30434782608695654, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.23333333333333334, 4)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.0958904109589041, 5)).to.be.true;

    cell = column[2];
    expect(+cell['n']).to.equal(13);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.2653061224489796, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.21666666666666667, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.08904109589041095, 5)).to.be.true;

    column = table[2];
    cell = column[0];

    expect(+cell['n']).to.equal(7);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.13725490196078433, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.23333333333333334, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.04794520547945205, 5)).to.be.true;

    cell = column[1];
    expect(+cell['n']).to.equal(9);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.1956521739130435, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.3, 1)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.06164383561643835, 5)).to.be.true;

    cell = column[2];
    expect(+cell['n']).to.equal(14);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.2857142857142857, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.4666666666666667, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.0958904109589041, 5)).to.be.true;
  });

  it('cross-tab of watch type vs. age', function ()
  {
    const frame: TSMT$DataFrame = new TSMT$DataFrame();

    const data: Array<Array<string | number>> = [];
    const types: Array<number>                = [ColumnTypeEnum.CHARACTER,
                                                 ColumnTypeEnum.NUMERIC,
                                                 ColumnTypeEnum.NUMERIC,
                                                 ColumnTypeEnum.NUMERIC];

    data.push(["Age", "Digital", "Analog", "Undecided"]);
    data.push(["30-", 90, 40, 10]);
    data.push(["30+", 10, 40, 10]);

    frame.fromArray(data, types);

    expect(frame.size).to.equal(2);

    const output: Object = __analysis.crossTabulation(frame);

    expect(Math.abs(+output['q']) < 0.000001).to.be.true;
    expect(+output['df']).to.equal(2);
    expect(TSMT$CompareUtils.compare(+output['chi2'], 38.095238095238095, 3)).to.be.true;

    const table: Array<Array<Object>> = output['table'];
    expect(table.length).to.equal(3);

    let column: Array<Object> = table[0];
    let cell: Object = column[0];


    expect(+cell['n']).to.equal(90);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.6428571428571429, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.9, 1)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.45, 2)).to.be.true;

    cell = column[1];
    expect(+cell['n']).to.equal(10);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.16666666666666666, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.1, 1)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.05, 2)).to.be.true;

    column = table[1];
    cell = column[0];

    expect(+cell['n']).to.equal(40);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.2857142857142857, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.5, 1)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.2, 1)).to.be.true;

    cell = column[1];
    expect(+cell['n']).to.equal(40);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.6666666666666666, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.5, 1)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.2, 1)).to.be.true;

    column = table[2];
    cell = column[0];

    expect(+cell['n']).to.equal(10);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.07142857142857142, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.5, 1)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.05, 2)).to.be.true;

    cell = column[1];
    expect(+cell['n']).to.equal(10);
    expect(TSMT$CompareUtils.compare(+cell['r'], 0.16666666666666666, 5)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['c'], 0.5, 1)).to.be.true;
    expect(TSMT$CompareUtils.compare(+cell['t'], 0.05, 2)).to.be.true;
  });

  it('correctly normalizes columns', function ()
  {
    const frame: TSMT$DataFrame = new TSMT$DataFrame();

    const data: Array<Array<string | number>> = [];
    const types: Array<number>                = [ColumnTypeEnum.NUMERIC,
                                                 ColumnTypeEnum.NUMERIC,
                                                 ColumnTypeEnum.NUMERIC];

    data.push(["col1", "col2", "col3"]);
    data.push([3, 1, -3]);
    data.push([1, 2, -1]);
    data.push([2, 5, -2]);

    frame.fromArray(data, types);

    const output: Array<Array<number>> = __analysis.normalize(frame);

    // result by column: [ [ 1, 0, 0.5 ], [ 0, 0.25, 1 ], [ 0, 1, 0.5 ] ]
    let column: Array<number> = output[0];

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
