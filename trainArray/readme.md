# Train Schedule Iteration Challenge

### Key Concepts

- variables, data types, conditionals & methods
- collections and iteration

### Instructions:

Using the blelow data sample:

```[
{train: "72C", frequency_in_minutes: 15, direction: "north"},
{train: "72D", frequency_in_minutes: 15, direction: "south"},
{train: "610", frequency_in_minutes: 5, direction: "north"},
{train: "611", frequency_in_minutes: 5, direction: "south"},
{train: "80A", frequency_in_minutes: 30, direction: "east"},
{train: "80B", frequency_in_minutes: 30, direction: "west"},
{train: "110", frequency_in_minutes: 15, direction: "north"},
{train: "111", frequency_in_minutes: 15, direction: "south"}
]
```

_1._ Save the direction of train 111 into a variable.

_2._ Save the frequency of train 80B into a variable.

_3._ Save the direction of train 610 into a variable.

_4._ Create an empty array. Iterate through each train and add the name of the train into
the array if it travels north.

_5._ Do the same thing for trains that travel east.

_6._ You probably just ended up rewriting some of the same code. Move this repeated code into a method that accepts a direction and a list of trains as arguments, and returns a list of just the trains that go in that direction. Call this method once for north and once for east in order to DRY up your code.

_7._ Pick one train and add another key/value pair for the `first_departure_time`. For simplicity, assume the first train always leave on the hour. You can represent this hour as an integer: `6` for 6:00am, `12` for noon, `13` for 1:00pm, etc.
