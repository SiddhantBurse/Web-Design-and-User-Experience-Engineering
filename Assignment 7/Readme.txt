
NUID: 002761979

Description
The webpage is titled ICE CREAM co. The first page shows the variety of ice cream provided by the company and the information and review pages show the reviews by the people.

Nesting- footer scss and nav par scss is done using nesting.

Instead of writing parent class name again and again, we can include all child classes of particular parent class
under respective parent class writing once

Mixin- the review page padding display font size and other parameters are included in mixins and applied and variables also


It is just like the function which takes a parameter where value could be css property
You can place css inside mixin and use parameter value to assign it to different css properties
To use mixins we need to use keyword @include

Interpolation - Interpolation is used everywhere for eg font size function is passed to various tags.

Placeholder selector- It acts like a class it is used in to pass parameters for the review page

Sass has a special kind of selector known as a “placeholder”. It looks and acts a lot like a class selector, but it starts with a % and it's not included in the CSS output. In fact, any complex selector (the ones between the commas) that even contains a placeholder selector isn't included in the CSS, nor is any style rule whose selectors all contain placeholders.



Custom properties - The declaration syntax of CSS custom properties, also known as CSS variables, is specific in that almost any text can be used as the declared value.

Function- for increasing the size of text

Functions work same as mixins, but the only difference is that they return something

Variabel -
Prefixed with $
