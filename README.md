# Typescript Math Toolkit Data Frame Analysis

I am currently working on an extension to the Typescript Math Toolkit that will be for clients only.  This extension will enable front- or back-end (via NodeJS) developers to move analysis performed in _R_ into browser-based, client-facing applications with minimal coding effort.

This is an alpha release of some of the (scaled-down) low-level utilities involved in that project.  I wanted to at least share some of the development with the open-source community.  Even if you are not interested in statistics, data science, or _R_, you might find something of interest here.

Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Typescript: 2.0.3

Version: 1.0


## Installation

Installation involves all the usual suspects

  - npm and gulp installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)


### Building and running the tests

1. gulp compile

2. gulp test

The test suite is in Mocha/Chai and specs reside in the _test_ folder.


### Contents

The current distribution consists of seven classes,

- _TSMT$Chi2_
- _TSMT$DataStats_ (frequent visitors to my repos have seen this one)
- _TSMT$Spcfcn_
- _TSMT$DataFrame_
- _TSMT$FrameStats_
- _TSMT$TableAnalysis_
- _TSMT$CompareUtils_  (you may find some useful utils for specs in this class)


Here is the public API for each class

**TSMT$Chi2**

```
get nu(): number
set nu(value: number)
p(x2: number): number
cdf(x2: number): number
q(x2: number): number
invCDF(p: number): number
```

**TSMT$CompareUtils**

```
static compare(a: number, b: number, d: number): boolean
static containsApproximately(value: number, compare: Array<number>, epsilon: number = 0.01): boolean
static vectorCompare(vector1: Array<number>, vector2: Array<number>, epsilon: number = 0.01): boolean
```

**TSMT$DataFrame**

The _TSMT$DataFrame_ class also exports a union type for data that may be store in columns of a data frame.

```
export type tableData = string | number | boolean;
```

Methods:

```
fromArray(data: Array<Array<any>>, dataTypes: Array<number>): void
get categories(): Array<string>
get dataTypes(): Array<number>
get table(): Array<Array<tableData>>
get size(): number
getColumn(category: string): Array<tableData>
removeColumn(category: string): void
split(row: number, data?: Array<Array<any>>): Object
```

**TSMT$DataStats**

```
isEven(n: number): boolean
get samples(): number
get min(): number
get max(): number
get fiveNumbers(): Array<number>
get fences(): Object
getQuantile(p: number): Array<number>
get mean(): number
get geometricMean(): number
get harmonicMean(): number
get std(): number
get cv(): number
get median(): number
get mode(): number
getConfidenceInterval(_t: number): Object
get skewness(): number
get kurtosis(): number
covariance(x: Array<number>, y: Array<number>): number
correlation(x: Array<number>, y: Array<number>): number
```

**TSMT$FrameStats**

This class exports two enums that are used to describe statistics with one or two data columns as input and return a single number.  The _TSMT$DataStats_ class is used as a utility, but is never directly called by data frame code.

```
export enum SingleStatEnum
{
  MIN,
  MAX,
  RANGE,
  MEAN,
  MEDIAN,
  MODE,
  HARMONIC_MEAN,
  GEOMETRIC_MEAN,
  STDDEV,
  SKEWNESS,
  KURTOSIS
}

export enum DoubleStatEnum
{
  CORRELATION,
  COVARIANCE
}
```

Methods:

```
getSummary(frame: TSMT$DataFrame, category: string): Array<number>
singleStat(frame: TSMT$DataFrame, category: string, type: number): number
doubleStat(frame: TSMT$DataFrame, category1: string, category2: string, type: number): number
getFences(frame: TSMT$DataFrame, category: string): Object
getQuantiles(frame: TSMT$DataFrame, category: string, q: number): Array<number>
zScore(frame: TSMT$DataFrame): Array<Array<number>>
```

**TSMT$Spcfcn**

It is highly unlikely that any user would directly work with this class; its methods are provided for completeness.

All I have to say is thank God for 'Numerical Recipes' and numerous other publications on the numerical analysis and approximation of special functions :)


```
static incompleteBeta(a: number, b: number, x: number): number
static betacf(a: number, b: number, x:number ): number
static betaiapprox(a: number, b: number, x: number): number
static gammaln(_x: number): number
static gammp(a: number, x: number): number
static gammaq(a: number, x: number)
static gammapapprox(a: number, x: number, psig: number): number
static gser(a: number, x: number): number
static gcf(a: number, x: number): number
static invgammp(p: number, a: number): number
```

**TSMT$TableAnalysis**

```
oneWayTable(frame: TSMT$DataFrame, category: string, _asPercentage: boolean=false): Object
crossTable(frame: TSMT$DataFrame, category1: string, category2: string, grouping: Array<string>, colNames: Array<string>): Object
crossTabulation(frame: TSMT$DataFrame): Object
normalize(frame: TSMT$DataFrame): Array<Array<number>>
toArray(obj: Object): Array<Object>
```

### Usage

A 'data frame' in rough _R_ terms is akin to a 2D table of variant data.  For purposes of this distribution, the top row of the table is the (string) name of each column.  Cell data may be of type _string_, _number_, or _boolean_, although numeric data is the most common (and interesting).

A data frame is typically loaded into an instance of _TSMT$DataFrame_ using the _fromArray()_ method.  Various statistical operations and analysis may be performed on columns of the table or across the entire table.

For demonstration purposes, I took the 'used cars' dataset used in the book 'Machine Learning in R' by Lantz and loaded it into a data frame, then performed some of the analysis that was done in the book.

NOTE: Category names are case sensitive!

Refer to the specs in the _test_ folder for examples of using each of the classes.


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <http://algorithmist.net>

