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

What I Learned:
- Validation should happen before logic checks.
- The allowed digits depend on the selected base.
- Case-insensitive comparison matters when alphabetic characters are allowed.
- Regex and string methods are useful for simple validation tasks.

Challenge:
- Determining whether each character falls within the valid digit range for the given base.

Takeaway:
- Breaking the problem into two steps—input validation and digit-range validation—made the solution easier to reason about and implement.

## 2026-06-04 ~ Fibonacci Sequence
Platform: freeCodeCamp

This challenge helped me understand how to generate values based on previously computed results.

What I learned:
- Fibonacci sequences can be generated iteratively without recursion
- Array indices can be used to access previously generated values
- Edge cases such as length 0 or lengths smaller than the starting sequence should be handled first

Challenge:
Determining how to continue the sequence while supporting different target lengths.

Takeaway:
Breaking the problem into base cases and sequence generation made the implementation straightforward.