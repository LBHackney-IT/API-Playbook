---
id: mock_unit_tests
title: Isolating Unit Tests
---

## Introduction

Unit tests are used to test the functionality of a class in isolation.
So if a class depends on another we will need to mock any interactions with that class. We are using <u> dependency injection </u>  so any class which needs to interact with another will be passed an interface, which the depended on class subscribes to, in the constructor.
In the tests, we can then just pass in a mock implementation of this interface into the constructor instead.

Read some advice for mocking and writing unit tests in the [.NET documentation](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices).

## Setting up and using mocks

You can use mocks to return a specific value for a given input. For example a test for the following code:

```dotnet
public class GetSomeData
{
  public IAccessDataStore _datastore;

  public GetSomeData(IAccessDataStore dataStore)
  {
    _datastore = dataStore;
  }

  public SomeData Execure(int id)
  {
    return _dataStore.Get(id);
  }
}
```

might look like..

```dotnet
public class GetSomeDataTests
{
  [Test]
  public void ExecuteReturnsTheDataFromTheDataStore()
  {
    //Arrange
    var mock = new Mock<IAccessDataStore>();
    var stubData = new SomeData{ fieldOne: "data", fieldTwo: 7 };
    var id = 89;
    mock.SetUp(x => x.Get(89)).Returns(stubData);

    //Act
    var classUnderTest = new GetSomeData(mock.Object);
    var returnedData = classUnderTest.Execute(89);

    //Assert
    returnedData.Should().BeEquivalentTo(stubData);
  }
}
```

Or you can assert that they were called with the correct inputs. For example a test for the following code..

```dotnet
public class SaveSomeData
{
  public IAccessDataStore _datastore;

  public SaveSomeData(IAccessDataStore dataStore)
  {
    _datastore dataStore;
  }

  public void Execute(SomeData data)
  {
    return _dataStore. Put(data);
  }
}
```

might look like..

```dotnet
public class SaveSomeDataTests
{
  [Test]
  public void ExecutePutsTheDataInto TheDataStore()
  {
    //Arrange
    var mock = new Mock<IAccessDataStore>();
    var dataToSave = new SomeData{ fieldOne: "data", fieldTwo: 7 };

    //Act
    var classUnderTest = new SaveSomeData(mock. Object);
    classUnderTest.Execute(89);
    
    //Assert
    mock. Verify(x => x.Put(dataToSave), Times.Once());
  }
}
```

These examples are just a couple of common use cases for using Moq. Check out the [moq documentation](https://github.com/Moq/moq4/wiki/Quickstart) for more examples and use cases!