---
id: unit_testing
title: Writing Unit Tests
---
## Introduction

Unit tests are used to test the functionality of an individual function or a
collection of functions. This will be a simple introduction to unit testing,
where we use TDD to implement a basic greeter method.

**This article assumes you are working in a repository forked from [LBHackney-IT/lbh-base-api](https://github.com/LBHackney-IT/lbh-base-api).**

### Video Tutorial

Watch the video version of this page if you prefer:

<figure class="video-container">
  <iframe width="100%" src="https://www.youtube.com/embed/M-_F_Tr6paQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

### Create the Test File

Create a new file somewhere, named `GreetingGatewayTests.cs`.

```dotnet title="GreetingGatewayTests.cs"
using FluentAssertions;
using NUnit.Framework;
using TestApi.V1.Gateways;

namespace TestApi.Tests.V1.Gateways { }
```

 * *The `using` statements at the top provide references to things we will use
   later on.*
 * *At HackIT, we typically use a separate `<ProjectName>.Tests` namespace to
contain test code.*

This doesn't test anything yet! We need to add some more code.

Create the test class, and the initial signature of the test method.

```dotnet title="GreetingGatewayTests.cs" {7,9}
using FluentAssertions;
using NUnit.Framework;
using TestApi.V1.Gateways;

namespace TestApi.Tests.V1.Gateways
{
  [TestFixture]
  public class GreetingGatewayTests {
    [Test]
    public void GetGreetingForNameReturnsCorrectGreeting() { }
  }
}
```

 * *Two of the lines above are highlighted. These `[Symbols]` are called
   *[Attributes](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/)*;
   they are part of the C# Language.*

We are using the [NUnit unit-testing framework](https://nunit.org/) in this
example, so we use `[TestFixture]` attribute to indicate to NUnit that we are
writing a test **class**; and `[Test]` to indicate that we are writing a test
**method**.

Also, notice the test method name. The name should be descriptive and indicative
of the desired effect of calling the method.

Now, add the actual test code!

```dotnet title="GreetingGatewayTests.cs" {11,12}
using FluentAssertions;
using NUnit.Framework;
using TestApi.V1.Gateways;

namespace TestApi.Tests.V1.Gateways
{
  [TestFixture]
  public class GreetingGatewayTests {
    [Test]
    public void GetGreetingForNameReturnsCorrectGreeting() {
      var result = GreetingGateway.GetGreetingForName();
      result.Should().BeEquivalentTo("Hi, James!");
    }
  }
}
```

First, we call the method we are testing, and assign its result to the
variable `result`.
Then, we compare the result we captured with the result we want the method to
provide.

* *The `Should().BeEquivalentTo()` syntax is provided by
  [`FluentAssertions`](https://fluentassertions.com/) extension methods. It
  makes our *Assert* lines read more nicely.*
* Your IDE or Text Editor might complain when you write these lines, because
  neither the `GreetingGateway` nor its `GetGreetingForName` method exists yet.
  This is normal, and is actually part of the TDD process!

#### Running the Test

Now that we have some test code, we can try to run it.

```bash title="Terminal" {7}
~/tdd_practice$ dotnet test

  Determining projects to restore...
  All projects are up-to-date for restore.
  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll
~/repo/test-api/TestApi.Tests/V1/Gateways/GreetingGatewayTests.cs(13,26):
error CS0103: The name 'GreetingGateway' does not exist in the current context [~/repo/test-api/TestApi.Tests/TestApi.Tests.csproj]

```

* *Running *`dotnet test`* this time exited before any tests were run, so the
  output here is a compilation error, rather than being from the testing
  framework itself. However, we can *treat* this as a failing test, and solve
  the problem that the output describes.*

The output tells us that `GreetingGateway` doesn't exist. That's true - we
haven't made it yet!

### Create the Implementation

We will write the most minimal piece of code that will pass the test.
```dotnet title="GreetingGateway.cs"
namespace TestApi.V1.Gateways
{
  public static class GreetingGateway
  {
    public static string GetGreetingForName()
    {
      return "Hi, James!";
    }
  }
}
```

 * *We are using the same names for the class and method that we wrote into the
   test method.*

#### Running the test

We have addressed the error in the previous test run's output by creating the
class that didn't exist, `GreetingGateway` (and added the method pre-emptively,
to save some test runs).

```bash title="Terminal" {14}
~/tdd_practice$ dotnet test

  Determining projects to restore...
  All projects are up-to-date for restore.
  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll
  TestApi.Tests -> ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll
Test run for ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (.NETCoreApp,Version=v3.1)
Microsoft (R) Test Execution Command Line Tool Version 16.8.1
Copyright (c) Microsoft Corporation.  All rights reserved.

Starting test execution, please wait...
A total of 1 test files matched the specified pattern.

Passed!  - Failed:  0, Passed:  23, Skipped:  0, Total:  23, Duration: 913 ms - ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (netcoreapp3.1)

```

All of the tests in the project have passed! Our new code works, and it doesn't
break anything that already existed in the codebase. Good news?

At this point, it probably seems like the method is wrong. It only works for
James, and it should greet anyone. In reality, though, the method is fine -
**it's the test that is wrong!**

### Refactor the Test

We need to make sure that this greeting method works regardless of the name of
the person it is greeting. Since this is a requirement of the feature, the test
should enforce it.

What we want to do, is pass a name into `GetGreetingForName`, and have it return
an appropriate greeting for that name.

```dotnet title="GreetingGatewayTests.cs" {11-15}
using FluentAssertions;
using NUnit.Framework;
using TestApi.V1.Gateways;

namespace TestApi.Tests.V1.Gateways
{
  [TestFixture]
  public class GreetingGatewayTests {
    [Test]
    public void GetGreetingForNameReturnsCorrectGreeting() {
      var name = "Lisa";

      var result = GreetingGateway.GetGreetingForName(name);

      result.Should().BeEquivalentTo($"Hi, {name}!");
    }
  }
}
```

 * *We've used *[string
   interpolation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated)*
   in the *Assert*, so that whatever we set *`name`* to, will be what we test
   the *`result`* for.*

#### *Running the tests*

```bash title="Terminal" {7}
~/tdd_practice$ dotnet test

  Determining projects to restore...
  All projects are up-to-date for restore.
  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll
~/repo/test-api/TestApi.Tests/V1/Gateways/GreetingGatewayTests.cs(14,42):
error CS1501: No overload for method 'GetGreetingForName' takes 1 arguments [~/repo/test-api/TestApi.Tests/TestApi.Tests.csproj]

```

And we are back to a compilation error.

This time, it's because the method we've
written for the implementation doesn't take any arguments, but we are trying to
use one in the test! Let's fix that.


```dotnet title="GreetingGateway.cs" {5}
namespace TestApi.V1.Gateways
{
  public static class GreetingGateway
  {
    public static string GetGreetingForName(string name)
    {
      return "Hi, James!";
    }
  }
}
```

Now the method takes the name to be greeted as an argument.

```bash title="Terminal" {7}
~/tdd_practice$ dotnet test

  Determining projects to restore...
  All projects are up-to-date for restore.
  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll
~/repo/test-api/TestApi/V1/Gateways/GreetingGateway.cs(5,52):
error CA1801: Parameter name of method GetGreetingForName is never used. Remove the parameter or use it in the method body. [~/repo/test-api/TestApi/TestApi.csproj]

```

We are still getting a compilation error, because the compiler mandates that we
use the parameter we added to the method.

This can be done using exactly the same interpolation used in the test itself.

```dotnet title="GreetingGateway.cs" {7}
namespace TestApi.V1.Gateways
{
  public static class GreetingGateway
  {
    public static string GetGreetingForName(string name)
    {
      return $"Hi, {name}!";
    }
  }
}
```

Check the tests again:

```bash title="Terminal" {14}
~/tdd_practice$ dotnet test

  Determining projects to restore...
  All projects are up-to-date for restore.
  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll
  TestApi.Tests -> ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll
Test run for ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (.NETCoreApp,Version=v3.1)
Microsoft (R) Test Execution Command Line Tool Version 16.8.1
Copyright (c) Microsoft Corporation.  All rights reserved.

Starting test execution, please wait...
A total of 1 test files matched the specified pattern.

Passed!  - Failed:  0, Passed:  23, Skipped:  0, Total:  23, Duration: 908 ms - ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (netcoreapp3.1)

```

This passes! 🎉

### Refactoring the Test (Again)

To be pedantic, the test we currently have only ensures that the method will
work for people named Lisa. This is a simple example, so we can see quite
clearly that this would work for other names as well.

In other scenarios, it makes sense to test more thoroughly, covering as many use
cases as possible. One approach that can help with this is to generate lots of
different inputs to the method, and check that they all work. This can help
uncover strange edge cases.

We can use a library called Bogus to help with this.

```dotnet title="GreetingGatewayTests.cs" {4,12}
using FluentAssertions;
using NUnit.Framework;
using TestApi.V1.Gateways;
using Bogus;

namespace TestApi.Tests.V1.Gateways
{
  [TestFixture]
  public class GreetingGatewayTests {
    [Test]
    public void GetGreetingForNameReturnsCorrectGreeting() {
      var name = new Faker().Name.FirstName();

      var result = GreetingGateway.GetGreetingForName(name);

      result.Should().BeEquivalentTo($"Hi, {name}!");
    }
  }
}
```

In this example, we use Bogus to pick a random first name to assign to the
`name` variable. Every time the test is run, we assert that the method runs for
the random name.

```bash title="Terminal" {14}
~/tdd_practice$ dotnet test

  Determining projects to restore...
  All projects are up-to-date for restore.
  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll
  TestApi.Tests -> ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll
Test run for ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (.NETCoreApp,Version=v3.1)
Microsoft (R) Test Execution Command Line Tool Version 16.8.1
Copyright (c) Microsoft Corporation.  All rights reserved.

Starting test execution, please wait...
A total of 1 test files matched the specified pattern.

Passed!  - Failed:  0, Passed:  23, Skipped:  0, Total:  23, Duration: 939 ms - ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (netcoreapp3.1)

```

Everything is still passing! The feature is complete and we have a robust test
for it.
