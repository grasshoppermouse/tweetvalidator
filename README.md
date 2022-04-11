# tweetvalidator README

A [vscode](https://code.visualstudio.com) extension that checks if selected text is a valid tweet using [twitter-text](https://github.com/twitter/twitter-text), a twitter.com javascript tweet validator.

## Install

```
$ npm install grasshoppermouse/tweetvalidator
$ npm install -g vsce
$ cd tweetvalidator
$ vsce package
```

## Features

Select text in an editor window and invoke `Validate Tweet` using the command palette. A message will pop up with the weighted length of the tweet (e.g., taking into account urls, etc.), along with valid true or false.