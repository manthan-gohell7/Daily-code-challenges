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

## 2026-06-04 ~ Space Jam
Platform: freeCodeCamp

This challenge helped me practice manual string transformation and character-by-character processing.

What I Learned:
- Spaces can be removed using direct character inspection
- Uppercase conversion can be handled manually with character codes
- Rebuilding a string step by step improves understanding of iteration and accumulation

Challenge:
- Transforming the string in the correct order while preserving non-alphabetical characters

Takeaway:
- Even simple string problems are useful for practicing low-level logic instead of depending only on built-in methods

## 2026-06-09 ~ Jumbled Text
Platform: freeCodeCamp

This challenge helped me practice sorting letters inside each word while preserving the word boundaries.

What I Learned:
- The first and last letters can be kept fixed while processing the middle part separately
- Sorting the inner characters of a word is easier once the word is converted into an array
- Rebuilding the final sentence word by word keeps the logic clean

Challenge:
- Handling each word independently while preserving the original sentence structure

Takeaway:
- Breaking the problem into smaller steps made the transformation easier to reason about

## 2026-06-10 ~ Anagram Checker
Platform: freeCodeCamp

This challenge helped me practice frequency counting and character comparison.

What I Learned:
- Anagrams can be verified by comparing character frequencies instead of checking every possible arrangement.
- Normalizing input first simplifies the comparison logic.
- Hash maps are useful for tracking occurrences of characters efficiently.

Challenge:
- Ensuring that both character existence and character counts matched between the two strings.

Takeaway:
- Frequency counting is a powerful pattern that can be reused in many string and validation problems.