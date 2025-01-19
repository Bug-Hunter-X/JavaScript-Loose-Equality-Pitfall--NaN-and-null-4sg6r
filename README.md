# JavaScript Loose Equality Pitfall: NaN and null

This repository demonstrates a subtle but common error in JavaScript related to loose equality (`==`) when dealing with `NaN` and `null`.

The `bug.js` file contains a function that attempts to handle `null` values.  However, due to the use of loose equality, it incorrectly treats `NaN` (Not a Number) as equivalent to `null`, returning 0 in both cases.

The `bugSolution.js` file provides a corrected version using strict equality (`===`) to resolve this issue, ensuring that `NaN` and `null` are handled distinctly.