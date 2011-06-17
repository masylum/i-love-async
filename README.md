# Async patterns

  "I love async, but I can't code like this "

# Functional approach

Solving problems with imperative languages is done by defining "HOW"

    do A, then do B, then you get C

Solving problems with functional languages is done by defining "WHAT"

    C is what you get from B once you did A

Asynchronous code is not linear, so define your problems in a functional way if possible.

# Chain/Serial pattern

Do *n* asynchronous calls, one after each other.

    Example:
    get A from db, use A.id to get B from db, use B.id to get C

# Parallel pattern

Do *n* asynchronous calls, process them, and callback once we are done.

    Example:
    get A and B and do C when they are done
