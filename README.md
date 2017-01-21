# Iterating Objects.

## Why I made it

I made this module primarily because I really like flat file databases....specifically [lowdb](https://github.com/typicode/lowdb).  I wanted to take a flat file field and create a very easily iterated field.  So if you DO want an incremented field for sorting or what have you, you can create it.  Due to the fact that flat files are not RDMS, this had to be done in a less-efficient, but still usable way for small projects.  Enter JSONcrementer.  The goal was to increment an 'id' field of your choice.

Obviously a more efficient method would be to create a sequencing file with each json object, and have an updated sequence.  Perhaps I'll get around to doing that in the future.

For right now this will suit my needs.

## Examples
Check out `example.js` to see a working example of this library

## How do I use it

```
iterate([iteratingObject], [fieldToIterate], [objectToAppend])
```

## Who uses this?

Anyone who wants to easily increment a json object.....this could be used for creating a sortable object.
