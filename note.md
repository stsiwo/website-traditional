# Note

## Sass/Css

### File Structure

here: https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4

### Dependencies

- normalizer
- autoprefixes (automatically included in sass?)

## JS/jQuery

### Enable Typing for jQuery

create 'jsconfig.json' on your root directory and paste the following:

```
{
    "typeAcquisition": {
        "include": [
            "jquery"
        ]
    }

}
```

ref: https://stackoverflow.com/questions/41777327/jquery-intellisense-in-vs-code/48958573

## Questions

### How to prevent dropdown menu from going outside screen?

This happens esp when select a menu item on the edge and the dropdown goes out screen.

### Mouseenter & Mouseleave happens on even mobile?

this is correct behavior? on the chrome devtool happen this.

as workaround, use check the screen size as condition.

### Margin Collapse?

in some special cases, css removes margins called margin collapse.

here is how to disable it: https://stackoverflow.com/questions/19718634/how-to-disable-margin-collapsing

you can add 'display: inline-block' to parent for the parent and 1st and last child.

### Text Truncate

finally found the solution.

ref: https://stackoverflow.com/questions/33058004/applying-an-ellipsis-to-multiline-text

### How to add tooltips?

esp for if the text is truncated, i want to show the full text on a tooltip

### How to ignore padding of a parent from its child element

use negative margin.

ref: https://stackoverflow.com/questions/4296530/ignore-parent-padding

### Keep aspect ratio

1. create a wrapper element.
2. calculate aspect ratio: https://www.calculatorsoup.com/calculators/math/ratios.php
3. set css below:

```
.img-container { // wrapper
  // aspect ratio: 2.39: 1: 100% : 41.84
  position: relative;
  width: 100%;
  padding-top: 41.84%;

  // 41.84
  &__img { // target element
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
```

### Slick vs Swiper

use Slick for simple task

use Swiper for multiple task

- issue: cannot use multiple swipers at a single page.

ref: https://helperbyte.com/questions/68866/which-is-better-in-your-slick-vs-swiper-and-what-is-missing

## Issues

### (issue-O7DhAYAX8-I): SwiperJS - cannot add multiple swipers with SwiperJS v7.0.0

bug? the width of the second swiper always overflow and show horizontal scroll.
because of the newer version?

## Slick library

### ussage

- you need to always wrap the content with empty <div>
- when responsive, manually adjust breakpoints with devtools
