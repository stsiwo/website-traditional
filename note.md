# Note

## Sass/Css

### File Structure

here: https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4

### Dependencies

- normalizer
- autoprefixes (automatically included in sass?)

### Basics

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

### How to keep aspect ratio for vertical-long image?

```
  // aspect ratio: 1: 1.66: 60% : 100%
  position: relative;
  width: 100%;
  padding-top: 166%; // height / width * 100 = 1.66 / 1 * 100 = 166

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
```

### What is Delegation in jQuery

delegate the event handler to a parent element when an event is triggered on one of the children.

Why use? this is because if the number of the children dynamically changes, an added element cannot handle the event since this is added after initialization (e.g., $("...").on("..."))

takes an advantage of event bubbling so that parent element can catch the event and find the target child element and handle the event.

see: https://stackoverflow.com/questions/8110934/direct-vs-delegated-jquery-on

## Issues

### (issue-O7DhAYAX8-I): SwiperJS - cannot add multiple swipers with SwiperJS v7.0.0

bug? the width of the second swiper always overflow and show horizontal scroll.
because of the newer version?

### (issue-): Slick - centeredMode not working. not getting bigger when target item is centered.

ref: https://github.com/kenwheeler/slick/issues/1302

### (issue-0sylw6Qk1wh): Slick - height is too big for each slider

you can override the following:

```
.slick-slide {
  height: auto;
}
```

### (issue-grid-with-no-media-query)

better to use media query since it is cimplicated.

ref: https://stackoverflow.com/questions/55281598/css-grid-maximum-number-of-columns-without-media-queries

### issue:iphone-mobile-cannot-use-fixed-background-attachment

some mobiles esp iphone cannot display the background image with url. this is because of 'background-attachment: fixed'. this is too expensive for mobile devices so disabled.

solution) use 'scroll' instead.

ref: https://stackoverflow.com/questions/20443574/fixed-background-image-with-ios7

## Slick library

### usage

- you need to always wrap the content with empty <div>
- when responsive, manually adjust breakpoints with devtools

## Accessibility

### outline: none on focus

removing the outline on element (esp, input / textarea) is a bad practice based on Accessibility.

what you can do is that you can change the style on target element but you must avoid that:

- changing only color since people with colorblind may not be able to distinguish the focus state so you need to add a change based on the shape or animation on the element.

## Animation

### Border Expand Animation

see: https://stackoverflow.com/questions/28623446/hover-effect-expand-bottom-border

## Refs

### (ref-berq4IjPLV2): Google Material Design Icon Usage

1. det the style link and put it on head tag.
2. use cases:

- html (e.g., <i class="...">)
- css (e.g., font-family: GoogleMaterialIcons)

3. find the icon code from (here)[https://fonts.google.com/icons]

ref: https://stackoverflow.com/questions/40194077/how-to-set-the-css-content-property-with-a-google-material-icon
ref: https://www.tutorialspoint.com/web_icons/material_icons.htm

2021/09/16: better to use html <i> rather than css content since the css cannot change the size.
