Pure CSS Components Alert
==================

[![Greenkeeper badge](https://badges.greenkeeper.io/joe-crick/pure-css-components-alert.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/joe-crick/pure-css-components-alert.svg?branch=master)](https://travis-ci.org/joe-crick/pure-css-components-alert)
[![GitHub license](https://img.shields.io/github/license/Day8/re-frame.svg)](license.txt) 
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
![Current Version](https://img.shields.io/badge/version-0.0.1-green.svg)


A small JS utility for working with Pure.CSS Components Alert. 

NOTE: This is an independent project, and is not directly associated with Pure CSS.

## Summary

[Pure.CSS Components](https://github.com/joe-crick/pure-css-components) is a library of CSS only components designed 
for use with the [Pure.CSS](https://purecss.io) framework. None of the components require any JavaScript in order to 
function. There may be times, however, when it can be useful to have JavaScript to manipulate a component. Therefore, 
I've created individual JS modules to complement the CSS only components. Don't need JS? Don't bother. Need a little 
JS? Use just what you need.

### Install from NPM

```js
yarn add purecss-components-alert
```
or
```js
npm i purecss-components-alert -S
```

## Example

An example HTML Alert:

```html
<!-- #my-alert is considered the base node for this alert -->
<input type="checkbox" id="my-alert" class="alert-toggle pcssc-invisible"/>
<div class="alert alert-success alert-dismissible" role="alert">
    <span><strong>Uh oh...</strong> Something happened...</span>
    <label for="close-alert" class="close-alert" aria-label="Close">
        <span aria-invisible="true">&times;</span>
    </label>
</div>
```
This JS would work with the Alert defined above: 

```js

import Alert from 'purecss-components-alert';

// Pass in a selector to the base node for the alert you want to work with
const myAlert = Alert('#my-alert');

// Show the alert
myAlert.open();

// Hide the alert
myAlert.close();

// Toggle the alert
myAlert.toggle();

// Check if the alert is open
myAlert.isOpen();

// Check if the alert is closed
myAlert.isClosed();

```