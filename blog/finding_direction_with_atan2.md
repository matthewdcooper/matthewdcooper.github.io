
# Finding Direction with atan2
## 2020-02-14

We have a rover that landed on a planet at (0, 0). It has moved to (a, b) and is currently looking at a rock (a really very *interesting* rock) located at (c, d). 

![Rover/Rock diagram]("/assets/the_rover_and_the_rock.png")

How can we find the angle θ (in radians) that describes the direction the rover is currently facing?

We can start by somewhat arbitrarily defining θ to be 0 when the rover is facing due east, π/2 radians is north, -π/2 is south, and (-)π is west. So then in the case depicted above, θ is somewhere between π/2 and π radians. But obviously we'd like to be a bit more accurate than that.

![Four Cardinal Rover Directions]("/assets/cardinal_rover_directions.png")

The first thing to do is to find the difference in x and y from the rover to the rock.

Easy enough: 

```python
x = c - a
y = d - b
```

We now know that if the rover were to move east by x units and north by y units, it'd end up on top of the rock. It's worth noting that if x is negative, then the rover would actually need to go west. And, likewise, if y were negative then the rover would go south.

We can now usefully forget about the landing site altogether and think only about the relationship between the rover and the rock. We can do this with a right-angled triangle.

![Right-angled Triangle]("/assets/the_rover_the_rock_and_their_triangle.png")

Now we are ready to use a good old-fashioned bit of high school trigonometry to find our angle.

```python
θ = atan(y/x)
```

And we're done!

Or are we?

There are a few problems with the above solution. If the rock happens to be either due north or south from the rover then we will end up with a division by zero error.

Another problem comes from the fact that -y/x is equal to y/-x. The result of our atan function does not fully preserve information about the orientation of our triangle. We can't tell from atan alone whether the rock is eastward or westward or northward or southward from the rover! All we know is that one of the angles in the triangle is θ. 

We could solve both these problems by concocting a set of rather ugly ifs and thens:

```python
if x > 0 and y >= 0:
	θ = atan(y/x) 
if x > 0 and y < 0:
	θ = 2*π - atan(y/x)
if x < 0:
	θ = π + atan(y/x)
if x == 0 and y > 1:
	θ = π/2
else:
	θ = π
```

Fortunately the ugliness and cumbersomeness of implementing the above did not go unnoticed at IBM in 1961. The programmers responsible for creating FORTRAN-IV, while converting cartesian coordinates (x, y) into polar coordinates (r, θ), decided to abstract all the above nonsense away and created a rather magical little function called 'atan2'.

And it's still found today in the standard library of any reasonable programming language.

And so:

```python
θ = atan2(y, x)
```

Regardless of the signage of x and y, and even if x is zero, atan2 will give us an unambiguous value for θ describing the direction our little rover is facing.
