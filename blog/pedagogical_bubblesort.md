# In Defence of Teaching Bubble Sort

## 2020-02-02
*(Happy Unviersal Palindrome Day!)*

*Bubble sort is a terribly inefficient and ugly algorithm. Teaching it could corrupt a beginner programmer's conception of best practices. Or, worse, damage their very understanding of what an algorithm is.*

Okay, yes: the above is a caricature of a position against bubble sort. Nonetheless, people really do hold the belief that inefficient algorithms should not be taught. Owen Astrachan [argues](https://users.cs.duke.edu/~ola/papers/bubble.pdf) that bubble sort should "no longer be taught" because of:

> pedagogical assertions that code and algorithmic examples used in early courses should be of high quality and adhere to established best practices ... they should also exemplify best practices so that these practices endure after many of the details of a course have been forgotten. 

But why should students only consider well-written code? Is there no educational value in looking at something ugly and asking what is wrong with it? Are we really concerned that students who are exposed to bad code are destined to go out into the world and develop something equally sloppy?

That seems patronising.

Of course, if a student makes it through a course on algorithms, only ever having considered ugly ones, then something has gone terribly wrong. But a student who has looked at both beautiful and ugly algorithms, and who has thought about the differences between the two, will surely emerge with a better understanding of good code than the student who is coddled and told merely, 'Look! This is the way you should sort.'

If the goal is simply to expose the student to algorithms, then bubble sort really is a bad choice. We might just as well show them something equally complex of much higher practical value: insertion sort, for instance. But mere exposure is not an admirable educational goal.

Once a student has understood and can implement bubble sort, it would be amiss of us to leave off there and not make use of low hanging exercises in critical thinking. A reasonably apt student, once shown that bubble sort will continue to iterate over a sorted array, may well successfully answer the question, 'How can we make bubble sort better?'

Could the same be done with quick sort?

As well as guiding a student to figure out what is bad about bubble sort, and thus teaching them the valuable lesson that not all correct algorithms for a given problem are created equal, we can go a step further and ask: 'What redeeming qualities does bubble sort have?'

Which other sorting algorithms allow us to sort an array using only the memory used by the array in question?

We do not even need to stop there. We might also ask, 'Can you make bubble sort even worse than it already is? Slower? Can we make it use up more memory than is available in the universe and yet still be correct?'

And in asking such questions, is it the case that the students are going to go out into the world and write algorithms that gobble up all the bytes?

I don't think so—creating ugliness is a useful exercise in learning how to produce beauty.

Astrachan asks:

> If students take only a few memories about sorting from a first course what do we want these memories to be? Should the phrase Bubble Sort be the first that springs to mind at the end of a course or several years later?

If the lesson was a particularly memorable one, from which all the ins-and-outs of bubble sort have long been forgotten, yet the student left having practiced skills that contributed to their aptitude for algorithmic thinking, then, sure, why should the student not only remember the phrase 'bubble sort'?

