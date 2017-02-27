Pure CSS Components Modal
==================

[![Greenkeeper badge](https://badges.greenkeeper.io/joe-crick/pure-css-components-modal.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/joe-crick/pure-css-components-modal.svg?branch=master)](https://travis-ci.org/joe-crick/pure-css-components-modal)
[![GitHub license](https://img.shields.io/github/license/Day8/re-frame.svg)](license.txt) 
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
![Current Version](https://img.shields.io/badge/version-0.0.1-green.svg)


A small JS utility for working with Pure.CSS Components Modal. 

NOTE: This is an independent project, and is not directly associated with Pure CSS.

## Summary

[Pure.CSS Components](https://github.com/joe-crick/pure-css-components) is a library of CSS only components designed 
for use with the [Pure.CSS](https://purecss.io) framework. None of the components require any JavaScript in order to 
function. There may be times, however, when it can be useful to have JavaScript to manipulate a component. Therefore, 
I've created individual JS modules to complement the CSS only components. Don't need JS? Don't bother. Need a little 
JS? Use just what you need.

### Install from NPM

```js
yarn add purecss-components-modal
```
or
```js
npm i purecss-components-modal -S
```

## Example

An example HTML Modal:

```html
<!-- #login-modal is considered the base node for this modal -->
<input type="radio" class="open-modal pcssc-invisible" id="login-modal" name="modal-toggle"/>
<label for="test-modal" class="pure-button">Open Modal</label>
<div class="modal-container pcssc-invisible">
    <div class="modal-frame">
        <div class="modal-header">
            Header
            <input type="radio" id="close-modal" name="modal-toggle" class="close-modal pcssc-invisible"/>
            <label for="close-modal" class="close-button">x</label>
        </div>
        <div class="modal-body">
            Body
        </div>
    </div>
</div>
```
This JS would work with the Modal defined above: 

```js

import Modal from 'purecss-components-modal';

// Pass in a selector to the base node for the modal you want to work with
const loginModal = Modal('#login-modal');

// Show the modal
loginModal.open();

// Hide the modal
loginModal.close();

// Toggle the modal
loginModal.toggle();

// Check if the modal is open
loginModal.isOpen();

// Check if the modal is closed
loginModal.isClosed();

```

