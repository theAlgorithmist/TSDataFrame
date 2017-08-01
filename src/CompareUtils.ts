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

/**
 * Typescript Math Toolkit:  Some utilities for making approximate element/vector comparsions.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

export class TSMT$CompareUtils
{
  constructor()
  {
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
  public static compare(a: number, b: number, d: number): boolean
  {
    d = Math.max(Math.abs(d), 1);

    const tol: number = Math.pow(10, -d);

    return Math.abs(a-b) < tol;
  }

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
  public static containsApproximately(value: number, compare: Array<number>, epsilon: number = 0.01): boolean
  {
    let i: number;
    let r: number;
    const len: number = compare.length;

    for (i = 0; i < len; ++i)
    {
      r = Math.abs((value - compare[i]) / value);
      if (r <= epsilon)
      {
        return true;
      }
    }

    return false;
  }

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
  public static vectorCompare(vector1: Array<number>, vector2: Array<number>, epsilon: number = 0.01): boolean
  {
    const n1: number = vector1.length;
    const n2: number = vector2.length;

    if (n1 != n2) {
      return false;
    }

    let i: number;
    let v: number;

    for (i = 0; i < n1; ++i)
    {
      v = Math.abs((vector1[i] - vector2[i]) / vector1[i]);
      if (v > epsilon) {
        return false;
      }
    }

    return true;
  }
}