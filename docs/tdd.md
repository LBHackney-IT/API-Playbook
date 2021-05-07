---
id: tdd
title: Good TDD Principles
---

## Purpose

The purpose of this section is to provide some general guidelines on how we conduct testing in our applications.  This will give our developers some baseline standards on how to go about testing.  These guidelines are not intended to be prescriptive on what developers should test but to ensure that with a consistent understanding of our tests, it will be easy to grasp by other developers.

## Introduction

Hackney’s development standards have evolved over the past couple of years and one of the underpinning principles of this evolution is the adoption of **Test-Driven Development** (TDD) where developers are encouraged to start implementing a solution by first writing tests. These tests should describe the feature being implemented and should steer the implementation as it develops. The tests should let developers know what a unit or module is expected to do and should provide feedback on whether or not what was required has been achieved.  It is also useful to have these tests in place as a means of regression testing. As your implementation grows it becomes more and more difficult to determine if any previous code gets broken by newer functionality. With proper test coverage, regression testing is included by default.

## TDD Principles
The following are some of the principles we have adopted as part of our TDD principles.  These are meant to be used as guidelines for testing your application:

### Test Setup

Always follow the triple ‘A’ structure: Arrange, Act, Assert

### Test Naming
Tests should be clearly named - ideally the name of the test should describe the implementation you are trying to deliver.  

```dotnet
public void Test1()
```
_Not a good test name_
```dotnet
public void GetResidentWithValidIdReturnsCorrectRecord()
``` 
_A better test name that describes what is being tested_

### Unit Tests

Unit tests should provide good coverage of the various scenarios that may be encountered; from the main success scenario to any exceptionals or edge cases.
[See More](/unit_testing)

### Red-Green-Refactor-Commit

- **Red**
  * Write the unit test as the basic function you want the code to fulfil which will fail
  * Write only as much code as is required to resolve the current error
  * EG: Our first test states that a specific method will return a specific value. At the start of development, this method will not exist, so the test will fail, as the error states that the method does not exist, create that method, but have it return null
- **Green**
  * Write the minimum code required to get a test to pass
  * EG: If our test states that our method will return a specific value, we write the code to provide that value only. We could then write more complex tests to develop greater complexity
- **Refactor**
  * When the tests pass, refactor to simplify the code
  * When using the same variable value multiple times, extract it to SetUp
- **Commit**
  * Save it to GitHub

## End-to-end Tests
There should be end-to-end tests to test each feature you are implementing. You can have good coverage of unit tests any they may all pass, but they can easily overlook issues with how each unit interacts with others. End-to-end tests can pick up on these types of issues.
End-to-end tests can test and validate that a feature is implemented as per user need.
End-to-end tests are also good for regression testing; ensuring that each new implementation doesn’t break the behaviour of the feature as a whole.

## Test Coverage
Test coverage is all about ensuring that your implementation is sufficiently tested.  It is a method of quality checking the tests in our code, ensuring that it covers all possible scenarios and outcomes that your piece of code is expected to capture.
Test coverage is used as a metric to specify how much of our code needs to be covered by tests.  This will also encourage sufficient refactoring of code so that larger implementations can be broken down into smaller testable chunks.
[We need to determine what our test coverage standards should be]

## When should you fake it?
We use a number of different tools to ‘fake’ or simulate the output of dependent modules not directly tested.  Modules such as Fakr, Moq, Bogus, etc are used across our development.  There is no specific requirement for any one of these to be used.  However, when used, they should be used in an appropriate manner.  The following are some guidelines on when you should fake an implementation.

**When to fake it:**

When a unit being tested has a dependency on another unit whose output is not directly part of a test, the dependency’s output can be faked.  For example if you are testing a unit that call another unit for data and you are not directly testing the data that gets returned, only what the unit does with the data.  The unit that returns the data can be faked.

**When not to fake it:**

If you are testing a piece of code’s output you will not fake the output you expect from the unit as you will not be able to get a useful test outcome.  For example, if your unit accepts two numbers (2 and 2) and you are testing that it returns 4.  You will create a fake output of ‘4’ in your implementation and test that your unit returns ‘4’
