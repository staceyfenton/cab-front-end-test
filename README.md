# Citizens Advice Front End Test

This is my response to a [front-end developer test](https://github.com/citizensadvice/frontend-test) for Citizens Advice. Here's a preview: http://staceyfenton.com/citizensadvice/

## Installation

You will need Grunt to run this application. Install the Grunt CLI with the following command:
```
npm install -g grunt-cli
```

You can then change to the application's root directiory and install the dependencies:
```
npm install
```

Once everything is installed run Grunt to get the application up and running. It should automatically open in your default browser:
```
grunt
```

## Tools and techniques
* Using SASS as a CSS pre-processor 
* [BEM](http://getbem.com/introduction/) naming convention for CSS classes. I find this helps making large-scale applications easier to maintain as you avoid issues of nesting styles and specificity. 
* Vanilla JavaScript only. Only a small amount of JavaScript was needed so I didn't feel it was necessary to include any JavaScript frameworks or libraries. 