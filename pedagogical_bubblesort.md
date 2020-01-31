# The Pedagogical Value of Bubble Sort

> "If you can learn something from the wikipedia article on bubble sort, then you can't know very much at all."

With the above assertion in mind I read the [bubble sort article](https://en.wikipedia.org/wiki/Bubble_sort) and learned several things.

1) Elements that move up a list during a bubble sort are called 'rabbits', because they go relatively quickly.

2) Elements that move down a list are called 'turtles'.

3) The state of a list can be visualised on the Cartesian plane: x is index, y is value:

![bubble sort animation](https://en.wikipedia.org/wiki/Bubble_sort#/media/File:Bubble_sort_animation.gif)

4) Railing against bubble sort's pedagogical value is not restricted to idle pub banter, but has a history in academia.

1-3 probably support the pub premise (quoted above) that I'm not very well-informed. 

I was most surprised, however, by (4): Owen Astrachan has recommended that bubble sort "no longer be taught." Why?

His [argument](https://users.cs.duke.edu/~ola/papers/bubble.pdf) appears to be that bubble sort should not be taught because it is of no practical value, and there is a risk students will go out into the world and *actually implement bubble sort*, or something similarly ugly.

He asks: 

> If students take only a few memories about sorting from a first course what do we want these memories to be? Should the phrase Bubble Sort be the first that springs to mind at the end of a course or several years later?

But I believe this betrays a mistaken idea of what the goal of education in algorithms ought to be. We're not aiming to stuff brains full of algorithms, but rather to change the way in which they think about problems. And whether or not a student memorises either the name 'bubble sort' or its algorithmic steps, the very acts of contemplating bubble sort, learning to understand it, and hopefully even coming to see its ugliness, is going to leave an impression on the student's mind that will contribute to the way they think about problems and algorithms generally in the future.

According to Astrachan, there are many

> pedagogical assertions that code and algorithmic examples used in early courses should be of high quality and adhere to established best practices ... they should also exemplify best practices so that these practices endure after many of the details of a course have been forgotten. 

But it does not seem obvious to me that there is no pedagogical value in studying inefficient algorithms that depict bad practices. It seems to me that having an understanding of ugliness will ultimately contribute to a student's ability to produce beauty. 

The goal of education is not to memorise facts but to change the way in which you think. If a student forgets all about bubble sort, insertion sort, quicksort, then the educator's goal in exposing the student to these algorithms is not defunct, providing the student has internalised the underlying principles that contribute to the design of efficient algorithms.

Let us consider a student's first exposure to the bubble sort algorithm.

Which may take a form something like this:

## Bubble Sort in Python

```
def swap(L, i, j):
  tmp = L[i]
  L[i] = L[j]
  L[j] = tmp

def bubblesort(L):
  swapped = True
  while swapped:
    swapped = False
      for i in range(1, len(L)):
        if L[i-1] > L[i]:
	  swap(L, i-1, i)
          swapped = True
```

Now, clearly you can't expose a student who has zero understanding of any of the principles of computer science or programming to the code above and expect the experience to be at all fruitful. Before they can be introduced to bubble sort, a student must possess a handful of prerequisite concepts.

They would of course need some foundational ideas like variables and assignment, branching, iteration and function calls. But perhaps even more importantly they'd need to possess some mental model of how a list of orderable items might be stored in memory. And before even that, they'd need to have some understanding of what an algorithm even is. 

If, for whatever reason, you were going to expose a complete beginner to bubble sort, then you could not begin with the code at all, but you'd need to begin with an English language rendition of the algorithm. 

## Bubble Sort in English

1. Take a list or orderable items. For example: [1, 3, 2, 5, 8, 4]
2. Go through the list comparing each value to its immediate successor.
3. If ever the value and its successor are seen to be out of order (eg. 3, 2) swap them around, make a note that the swap happened, and continue on.
4. Upon reaching the end of the list, if a swap happened, return to (2). Otherwise the list is sorted and we are done.

Given the above, a shuffled hand of maybe half a dozen playing cards, a bit of time, and perhaps some friendly guidance, a student with no previous programming experience in possession of some degree of mathematical aptitude may well be able to implement a table top bubble sort.

Having done so, would they have learnt nothing at all? At the very least they have had their first taste of interpreting and implementing an algorithm; they would have paddled in the shallow end of algorithmic design. The goal would not be for them to memorise the steps but to expose them to a particular way of thinking.

Having had such exposure, a student would then be ready for a sequence of exercises that brings them from zero understanding of programming right up to a full implementation of bubble sort.

Thus we derive a set of questions that determine a student's readiness to translate the English algorithm into code:

1. Can you put the following into order: 132759?
2. How would you represent the unsorted list above in Python?
3. How do you access the 3rd element of that list? The n-th?
4. How could you change the 4th element to 8?
5. How would you swap two values? Say the 2nd and 5th? What about the i-th and j-th?
6. How can you tell if the i-th and j-th values (assuming j > i) are in the proper order?
7. How can you tell if the entire list is sorted or not?
8. Can you randomly swap two values?
9. Can you keep randomly swapping values until the list is sorted?
10. Is there a better way of sorting a list than swapping the values at random?



It is not enough to show that a student requires certain concepts in order to understand bubble sort. We must demonstrate what a student can learn by examining an inefficient algorithm. 

What must a student know in order to be able to see bubble sort's ugliness?

- that there is more than one way to solve the same problem
- that algorithms can be fast or slow

- if willing to throw in another concept on top of those the student must already grasp before being exposed to a sorting algorithm, (recursion), the student could be exposed initially to quicksort or mergesort. but in doing so we take away the possibility of asking, and having a reasonable expectation of success, 'what would be a better way of solving this problem?'


It is not self-evident that there can be a correct algorithm that is inefficient. Who hasn't observed the naive programmer who, after solving a problem, sits back and declares his work finished? Many students learning to program are satisfied once the program they have written generates the correct output. Learning that you can be correct and impractical is an important lesson that not everybody learns.


http://warp.povusers.org/grrr/bubblesort_eng.html
