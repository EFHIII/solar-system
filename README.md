Solar System
To use, go here: https://efhiii.github.io/solar-system

Velocities on J2000 taken from JPL: https://wgc.jpl.nasa.gov:8443/webgeocalc/#StateVector
Masses and radi taken from a combination of JPL and Wikipedia.
# Controls

## Zoom
- `UP ARROW` to zoom in
- `DOWN ARROW` to zoom out

## Move around
- `Click+drag` to rotate
- `R` to look at the next body (ordered by mass)
- `F` to look at the previous body (ordered by mass)
- `SHIFT+Q` to increase rotation speed when click+dragging
- `SHIFT+A` to decrease rotation speed when click+dragging
- `CTRL` to set view to top down looking down on the ecliptic
- `SHIFT+CTRL` to set view to looking along the ecliptic
- `SHIFT+Z` to set view to looking top down, axis aligning x & y rotation
- `Z` to zoom out to looking top down, axis aligning x & y rotation, and setting size of bodies to true scale

## Change preset
- `P` to go to next preset
- `SHIFT+P` to go to previous preset

## Time control
- `SHIFT+R` to reset to back to Jan 1st, 2000 (fast, and good to do if things get off)
- `W` to increase step size
- `S` to decrease step size
- `LEFT Arrow` toggle reverse time
- `W+UP ARROW` to increase steps per frame
- `W+DOWN ARROW` to decrease steps per frame
- `W+LEFT ARROW` to set 1 step per frame
- `W+RIGHT ARROW` to set 100 steps per frame
- `SPACE` to set step size to ~real time
- `SHIFT+SPACE` to set step size to 1 hour per frame
- `N` to simulate up to today's date (may take a while)

## View of bodies
- `Q` to increase size of bodies exponentially by radius
- `A` to decrease size of bodies exponentially by radius
- `E` to increase minimum size of bodies
- `D` to decrease minimum size of bodies
- `SHIFT+E` to increase minimum size of bodies 10x
- `SHIFT+D` to decrease minimum size of bodies 10x
- `BACKSPACE` to set size of bodies to true scale
- `SHIFT+BACKSPACE` to set size of bodies to exaggerated scale

## Toggle Hide
- `SHIFT+N` to toggle hide body names
- `H` to hide current selected body
- `SHIFT+H` to hide toggle hide all bodies except currently selected body
- `` ` `` to hide stats

## Lock with sun
- `1` to toggle visual lock with sun

## Trails
- `T` to toggle trails
- `B` to toggle relative to selected body vs relative to Sun
- `SHIFT+T` to toggle dotted trails
- `T+UP ARROW` increase trails dot rate
- `T+DOWN ARROW` decrease trails dot rate
- `T+LEFT ARROW` set trails dot rate to 1/frame
- `T+RIGHT ARROW` set trails dot rate to 10/frame
- `SHIFT+T+UP ARROW` increase trails stroke width
- `SHIFT+T+DOWN ARROW` decrease trails stroke width
- `O` increase points per trail
- `L` decrease points per trail

# Console commands
You can use these commands by going into the console (F12 on Chrome, may vary by browser)

## getNextApproach(bodyA,bodyB,initialStepSize*,precision*)
This function will simulate up to the next point in which to bodies reach their closest part of a flyby.
The bodys can be grabbed from the `nbody` object where they key for a body is its name.

`initialStepSize` is the amount of time in seconds that the steps are when simulating, and then it will binary search its way `precision` times to get closer to the moment of closest approach. Both `initialStepSize` and `precision` are optional, the default step size is 360 (6 minutes), and default precision is 5.

One application for this would be simulating up to the next potential Venus transit:
```javascript
//getNextApproach(bodya,bodyb,precision*);
getNextApproach(nbody.Earth,nbody.Venus);
```

Using a body that's not part of the currently selected preset will not work, although it will still work if one or both of the bodies are hidden.

## goToDate(date,initialStepSize*,precision*)

Similar to `getNextApproach()` but instead of looking for an approach, it targets a specific date, and for precision, it resets back to J2000 before simulating.

`date` is the date in milliseconds from 1970, `initialStepSize` and `precision` work the same as in `getNextApproach()`

One application for this would be going to the date of an interesting event, like the 2004 Venus transit:
```javascript
goToDate(new Date("June 8, 2004").getTime())
```
