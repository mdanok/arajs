ARAJS
=============================

This module provides various functions to process and analyze Arabic text and number.

Features
--------

* Retrieve character order and name
* Arabic range generation
* Check for shadda, vocalized words or text, Arabic strings, and Arabic ranges
* Determine if a word is a valid Arabic word
* Get characters at specific positions in a word
* Strip characters from text (harakat, tashkeel, small, tatweel, shadda)
* Normalize ligatures, hamzas, tehs, and alefs in text
* Separate and join Arabic letters and marks
* Check if two words are vocalized similarly
* Check if a word matches a specific pattern (wazn)
* Check if two words have similar shaddas
* Reduce tashkeel in text
* Convert an Arabic number in textual form to its numeric value.
* Convert a number to its Arabic textual representation.
* Extract Arabic number phrases from a given text.
* Detect number words and phrases in a list of words and return a list of tags.
* and many more functions, ready to use.

Usage
-----

First, install the module:
    npm i arajs
Secondlly, import the module:

    const {number2text, stripTashkeel} = require("arajs");

Then, use the various functions provided by the module to process and analyze Arabic text.

Example
-------

    const number = 232;
    console.log(number2text(number)); // مئتان و إثنان و ثلاثون

    const text = 'مَرْحَبًا بِكُمْ';
    const strippedText = stripTashkeel(text);
    console.log(strippedText); // مرحبا بكم
