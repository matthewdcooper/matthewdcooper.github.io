# The Pedagogical Value of Bubblesort

> "If you can learn something from the wikipedia article on bubblesort, then you can't know very much at all."

With the above assertion in mind I read the [bubblesort article](https://en.wikipedia.org/wiki/Bubble_sort) and learned several things.

1) Elements that move up a list during a bubblesort are called 'rabbits', because they go relatively quickly.

2) Elements that move down a list are called 'turtles'.

3) The state of a list can be visualised on the Cartesian plane: x is index, y is value.

![bubblesort animation](https://en.wikipedia.org/wiki/Bubble_sort#/media/File:Bubble_sort_animation.gif)

4) Railing against bubblesort's pedagogical value is not restricted to idle pub banter, but has a history in academia.


1-3 probably support the pub premise that I'm not very well-informed. (3) in particular is something I was surprised I had not either come across before or simply realised. It's pretty obvious when you think about it: whenever you have a set of n-tuples you can attempt to visualise them on n axis.

My ignorance aside, however, it seems unlikely to me that there exists anybody who could read the bubblesort article without learning anything at all. Excepting those who have thoroughly studied that particular article. Now, whether or not they learn anything of value--that's another question altogether.

I'm most interested in (4). Owen Astrachan has recommended that bubblesort "no longer be taught." Why?

His [argument](https://users.cs.duke.edu/~ola/papers/bubble.pdf) appears to be that bubblesort should not be taught because it is of no practical value, and there is a risk students will go out into the world and *actually implement bubblesort* (!). 

> pedagogical assertions that code and algorithmic ex-amples used in early courses should be of high qualityand adhere to established best practices

> There are compelling reasons for excluding discussion of bubble sort, but many texts continue to include discussion of the algorithm after years of warnings from scientists and educators.

> Although examples used in first year courses must be simple enough to be understandable and complex enough to be useful in a variety of situations, they should also exemplify best practices so that these practices endure after many of the details of a course have been forgotten. 


It is possible to learn how to be practical by examining impractical methods.

Understanding ugliness helps in the production of beauty.

That which is most useful from an education in any given subject ought not to be the memorisation of facts or even methods, but the impact it has on the way in which you think. The value of studying algorithms is not demonstrated by the number of algorithms your have memorised, but by the change in thinking, and improved ability to solve problems, that it brings about. If a student forgets all about bubblesort, insertion sort, quicksort, but retains an intuition that serves their capacity to solve problems, then there was very real pedagogical value in the experience.

"What algorithms did you learn about in your course?"

"I can't remember."

"Can you figure out how to solve this problem under this specific niche domain?" 

"Sure."


It is not self-evident that there can be a correct algorithm that is inefficient. Who hasn't observed the naive programmer who, after solving a problem, sits back and declares his work finished? Many students learning to program are satisfied once the program they have written generates the correct output. Learning that you can be correct and impractical is an important lesson that not everybody learns.

  