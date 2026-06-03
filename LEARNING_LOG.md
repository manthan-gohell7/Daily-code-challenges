# Learning Log

A record of what I learned while solving daily coding challenges.

## 2026-06-02 ~ Vowel Balance
Platform: freeCodeCamp

I first thought the total vowel count being even was enough, but that was only checking parity, not balance between halves.

What I learned:
- Odd-length strings need the center character removed first
- Vowel counts must be compared per half
- A solution can pass platform tests and still be logically incomplete if the explanation is wrong

Mistake:
I initially checked total vowel parity instead of left-half vs right-half equality.

Fix:
Split the adjusted string into two halves, count vowels in each half, and compare directly.

## 2026-06-03 ~ Base Check
Platform: freeCodeCamp

This challenge helped me think more carefully about input validation and digit ranges in different numeral systems.

What I learned:
- Validation should happen before logic checks
- The allowed digits depend on the base
- Case-insensitive comparison matters when letters are allowed
- Regex and string methods are useful for simple validation tasks

Mistake:
I had to be careful not to confuse general alphanumeric characters with characters that are actually valid for a specific base.

Fix:
Check the input string properly, then compare each character against the valid digit range for the given base.