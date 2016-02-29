# svgo-bug-reduction

This is a reduced test case for svgo
Reduced test case for svgo issue #506: https://github.com/svg/svgo/issues/506

This repo contains an SVG file that has text converted to an outline. The file was created with Sketch on a Mac.

The `windows` folder contains a minified version of the SVG created on Windows.

The `mac` folder contains a minified version of the SVG created on a Mac.

The issue is that running either of these on the other platform generates a different minified SVG.

## Running

To reproduce this issue, run `gulp` in the folder of the platform you are not on. If you are on a Mac, run the following in the `windows` folder. If you are on Windows, run the following in the `mac` folder:

```
npm install
gulp
```

## Setup

```
npm install --save-dev gulp svgmin
```
