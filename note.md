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
