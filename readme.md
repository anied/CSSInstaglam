#CSSInstaglam

**CSSInstaglam** is a CSS library (compiled from LESS) that creates a simple API for using and animating CSS filter effects in your projects.

##Demo
A demo page is pending-- meanwhile, you can clone the repo and look at the demo inside of the `src` directory.  See the "[Development](#development)" section below.

##Adding CSSInstaglam to your project

(Installation via Bower is pending.)

From the repo, you can either download `dist/cssinstaglam.css` or the minified `dist/cssinstaglam.min.css`.  If you wish to compile the LESS files yourself in the project, you can grab all the files inside of the `src/less` directory.  Then include the file in your project in whatever way your prefer-- the simplest ways will be either via a HTML `link` element, or a CSS `@import` statment.

_HTML link element:_
```html
<link rel="stylesheet" href="{PATH_TO_YOUR_CSS_ASSETS}/cssinstaglam.min.css">
```
_HTML link element_
```css
@import url("{PATH_TO_YOUR_CSS_ASSETS}/cssinstaglam.min.css");
```

##Using CSSInstaglam
CSSInstaglam works by providing classes that correlate to CSS filters, as well as some syntactic sugar for handling hover states, intensity of effect and animation of the effect.

### FX Classes
Classes that correlate to filter effects-- intensity defaults to medium (`insta-medium`)

+ `insta-blur`
+ `insta-brighten`
+ `insta-darken` _(inversion of brighten-- sub 100%)_
+ `insta-contrast`
+ `insta-decontrast` _(inversion of contrast-- sub 100%)_
+ `insta-grayscale`
+ `insta-invert`
+ `insta-opacity` _(inverted class)_
+ `insta-saturate`
+ `insta-desaturate` _(inversion of saturate-- sub 100%)_
+ `insta-sepia`

### FX Intensity Classes 
Classes that control the intensity of the applied effect (reversed for the only inverted class-- `insta-opacity`)

+ `insta-none`
+ `insta-small`
+ `insta-medium`
+ `insta-large`
+ `insta-mega`

### Hover/Unhover Classes
Used to force effect to be applied or unapplied based on hover.

+ `insta-hover` - no effect is applied until the element or elements are hovered over by the cursor
+ `insta-unhover` - effect is applied only when the element or elements are not being hovered over by the cursor

### Animation Classes
When present, effect will animate when changing at speed chosen.  Generally to be used in conjunction with `insta-hover`/`insta-unhover` classes

+ `insta-reallyfast`
+ `insta-fast`
+ `insta-slow`
+ `insta-lazy`

### Pending implementation
The `hue` and `drop-shadow` filter values have not yet been implemented by this library-- they are somewhat different then the other filter effects, and deserve their own approach and implementation.  If you have ideas for how this should be done, please feel free to leave a comment or clone the repo and give it a shot.  You can learn more in the [Development](#development) section below.

### Best Practices
While the `insta-` classes can be used directly on a target element, it is the recommendation of **CSSInstaglam** to use "wrapper-elements"-- divs or spans whose sole purpose is to wrap target HTML and apply **CSSInstaglam** filter effects to the target.

Example:
```html
<div class="insta-blur insta-mega">
    <p>Some mega-blurry text.</p>
    <img src="myblurrypicture.jpg" />
</div>
```

### Multiple Effects
When using the "wrapper-elements" approach as described above in the 
[Best Practices](#best-practices) section, multiple effects is as simple as adding additional wrapper elements-- each wrapper element can have a unique intensity of effect, hover/unhover/nonhover state and animation. _**Using multiple FX classes on a single element will not work.**_  Because additional filter property values replace instead of behaving in an additive manor, generating a CSS file to account for every possible combination of classes would have become prohibitively large.

The below example shows an image that is 100% grayscale and medium blurry when not hovered over by the cursor;  when hovered over, color will return to the image quickly but the blurring effect will dissapate more slowly:
```html
<span class="insta-grayscale insta-mega insta-fast insta-unhover">
    <span class="insta-blur insta-medium insta-unhover insta-slow">
        <img src="img/rocket_blimp_launch.png"/>
    </span>
</span>
```

### Browser Support
`-moz`, `-webkit`, `-ms` and `-o` browser-prefixes are included for all filter rules.  Testing is not fully completed, but this library is expected to work in all the major browsers _**except for Internet Explorer.**_  Because of Microsoft's circuitous history with support of the CSS `filter` property, IE support is not particularly easy nor straightforward; in fact, it _may not be possible_.  It is my goal to continue to research the topic and see if there is anyway that some of the library effects can be achieved in IE browsers utilizing Javascript, the canvas element and/or SVG effects.  In the meantime, plan on graceful degradation for IE browsers.  Research on IE implementation will eventually be pushed into a branch for development-- if anything is pushed into the master branch, it will be accompanied by an update to the `readme.md` as well as an incrementation of the version number.

## Development
If you want to get involved directly in development, you can fork and/or clone this repo and get started.  Run `npm install` to install dev dependencies.  In two seperate terminal windows at the top level domain of your cloned repo you will run two persistent commands:
 + `grunt` - this will start the default watch job, which will recompile the LESS into CSS everytime a `.less` file is saved
 + `npm start` - this will start a server for local development (check the terminal for the port)
You can then work in the LESS files, and test changes in `index.html`.

###Pending Features
Here are a few of the features that are slated for further research and development:
 + Internet Explorer support
 + Implementation of `hue` filter
 + Implementation of `drop-shadow` filter
 + Sass version of the library

## Comments and Suggestions
If you have tweaks or suggestions or issues for **CSSInstaglam**, please feel free to leave comments or log issues here on the repo page.  Thanks!