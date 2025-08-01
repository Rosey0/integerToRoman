# Interger to Roman

Convert a number given as a string into its Roman representation.

## How it works

Convert the input string to a number and extract each digit by dividing with powers of 10 and modulo 10.
Use predefined Roman numeral pairs for each digit place to build the Roman numeral string.
Handle subtractive cases explicitly by checking digits equal to 4 or 9.

## Note

`num` extracts the digit for each place value.
`if-else` conditions explicitly handle special Roman cases using combined symbols.

## Complexity

Time: O(d), where d is the number of digits.
Space: O(d), for the output string.