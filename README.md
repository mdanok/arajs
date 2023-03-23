
<h1  align="center">ARAJS</h1>

[![npm version](https://badge.fury.io/js/arajs.svg)](https://badge.fury.io/js/arajs) ![enter image description here](https://img.shields.io/npm/dw/arajs) ![enter image description here](https://img.shields.io/bundlephobia/min/arajs) ![enter image description here](https://img.shields.io/github/repo-size/mdanok/arajs) ![enter image description here](https://img.shields.io/github/license/mdanok/arajs) ![enter image description here](https://img.shields.io/github/commit-activity/m/mdanok/arajs)

#### This module provides various functions to process and analyze Arabic **text** and **numbers**

#### To check the package on npmjs click ![@npm](https://avatars.githubusercontent.com/u/6078720?s=20&v=4) [here](https://www.npmjs.com/package/arajs)

#### Read the documentation [here](https://mdanok.gitbook.io/arajs/)


Features
--------

* Strip characters from text (harakat, tashkeel, small, tatweel, shadda)
* Normalize ligatures, hamzas, tehs, and alefs in text
* Separate and join Arabic letters and marks
* Check for shadda, vocalized words or text, Arabic strings, and Arabic ranges
* Reduce tashkeel in text
* Determine if a word is a valid Arabic word
* Convert a number to its Arabic textual representation.
* Extract Arabic number phrases from a given text.
* Detect number words and phrases in a list of words and return a list of tags.
* Convert an Arabic number in textual form to its numeric value.
* Retrieve character order and name.
* Arabic range generation.
* Get characters at specific positions in a word.
* Check if two words are vocalized similarly.
* Check if a word matches a specific pattern (wazn).
* Check if two words have similar shaddas.
* and many more functions, ready to use.

Usage

-----

First, install the module:

```javascript

npm i arajs

```

or

```javascript

npm install arajs

```

Secondlly, import the module:

```javascript

const {number2text, stripTashkeel} =  require("arajs");

```

Now, you can use the various functions provided by the module to process and analyze Arabic text.

Example
-------

```javascript

const  number  =  232;

console.log(number2text(number)); // مئتان و إثنان و ثلاثون

  

const  text  =  'مَرْحَبًا بِكُمْ';

const  strippedText  =  stripTashkeel(text);

console.log(strippedText); // مرحبا بكم

```

Features to be implemented
-------

* [X] Documentation for the package.

* [ ] Names generating and extraction from text.

* [ ] Names romanizition and translation.

* [ ] Arabic verb conjugator.

* [ ] Text Taskheel.

##### check the repo [here](https://www.github.com/mdanok/arajs)

##### Read the documentation [here](https://mdanok.gitbook.io/arajs/)

-------
