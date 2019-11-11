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

## Hide bodies
- `SHIFT+N` to toggle hide body names
- `H` to hide current selected body
- `SHIFT+H` to hide toggle hide all bodies except currently selected body

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
