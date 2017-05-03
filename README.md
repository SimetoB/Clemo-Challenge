# Clemo-Challenge
My solution for the Clemo Challenge

The site has to be made in accordance with a provided template. (In this case it is uploaded in the repo by the name "Front-end challenge.jpg"). The HTML must have semantic containers. The CSS has to be very similar to the given template.

Also on the CSS side, the site must have breakpoints for responsive design on the following widths: 760px, 960px, 1584px.

On the JavaScript part, there should be a slider and a calendar.
The slider must take arguments from an array to change the picture of the header element. This must happen automatically and manually. The pictures are rotated infinitely, that means if it gets to the end of the slider it resets back to the first value. There must be an indication which is the current slide.
The list with best workers is rendered via JavaScript, in my case. The HTML to be displayed is saved in an array, which is accessed by a function that puts the code in the corresponding container.
An event is fired when one of the chevrons is clicked. A function displays the next or the previous set of workers in the team. On request to view the previous set of workers, and if there's no previous value in the array, the last set of workers is shown. On request to view the next set of workers, and if there's no next value in the array, the first set of workers is shown.
The calendar is created entirely via JavaScript. For this goal I wrote a constructor object for the current date. The render function creates a new date object, also creates elements and text nodes, adds attributes, appends elements to the containers, stylizes the margin for the first day of the month. The current date is highlited for the user. The calendar is interactive and shows the next or previous months, by the user's demand, which is controled with the chevrons. If the month is changed the highlated date becomes the first day of the month.
