# CSS Tooltips

Tooltips for HTML elements created solely with CSS.

## How to adapt it

The only requirement for a correct display is that the margin-left property of ".tip span" should be the width of the same rule set times -0.5: 
    `margin-left = width * -0.5`

**Examples:**

```
.tip span {
    width: 10em;
    margin-left: -5em;
    ...
}
```

```
.tip span {
    width: 7em;
    margin-left: -3.5em;
    ...
}
```

