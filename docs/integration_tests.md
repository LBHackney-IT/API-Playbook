---
id: integration_tests
title: How to write integration tests
---

## Introduction

When creating a new endpoint or adding new functionality to an API it's good practice to start by writing an integration test outlining the functionality you are hoping to achieve. You can then write unit tests when you touch the individual classes you will be working on. Integration tests give you confidence that all your classes work together and that the full feature you have made is working correctly. These tests are slightly different depending on which database type is being employed: Postgres of DynamoDb.

## Postgres

PostgreSQL is an object-relational database system that uses SQL language along with many other features to securely store and scale all data workloads including the most complicated ones.

To write Integration tests, inherit the IntegrationTest class for some useful test setup.

```dotnet
public class ExampleTest : IntegrationTests<Startup>
{
  //... your tests here
}
```

This will set up a web application factory so that you can make calls to endpoints, for example:

```dotnet
var uri = new Uri($"api/v1/residents/{personId}", UriKind. Relative);
var response = Client.GetAsync(uri);
```

It will also set up a database connection and register it in a mock startup class. You can also use this connection in the test setup if you need to add anything to the database to test against.

An example of an integration test for a GET endpoint would be to add entities to the database and then assert they get returned in the response from the endpoint. Here is a simplified example of this:

```dotnet
var person = new DatabaseEntity { Id = 1, Name = "Henry" };
DatabaseContext.DatabaseEntities.Add(person);
DatabaseContext.SaveChanges ()

var response = Client.GetAsync( new Uri($"api/v1/residents", UriKind.Relative));

var expectedJsonResponse = "{ "residents": [{ "id": 1, "name": "Henry" }] }";

response.Result.Content.Should().Be(expectedJsonResponse);
```

## DynamoDb

DynamoDB is a NoSQL database service that provides fast and foreseeable performance with minimal scalability. Amazon DynamoDB removes the burden of operating and scaling distributed database

### Database connection

The DynamoDbIntegrationTests.OneTimeSetUp() method is what controls which database instance is used. It ensures that some environment variables that are later used in connecting to the DynamoDb instance are set.

| Env Var Name | Description | Default Value |
| ------------ | ----------- | ------------- |
| **DynamoDb_LocalMode** | Indicates whether or not to use a local DynamoDb instance.<br/>If false it is assumed that the current context and credentials of the running code have been given access to a DynamoDb instance through an IAM policy. | true |
| **DynamoDb_LocalServiceUrl** | The Uri to the local DynamoDb instance.<br/>Only used if the LocalMode is set to true. | http://localhost:8000 |

### Database setup

** IMPORTANT: ** In order to ensure that the database instance used for the tests has all of the necessary tables created, update the DynamoDbIntegrationTests._tables collection with the necessary details. ** The details specifed here must match those that are set up by terraform, and those specified on any database entities.**

### Writing tests

To write Integration tests, inherit the DynamoDbIntegrationTests class for some useful test setup.

```dotnet
public class ExampleTest : DynamoDbIntegrationTests<Startup>
{
  //... your tests here
}
```

This will set up a web application factory so that you can make calls to endpoints, for example:

```dotnet
var uri = new Uri($"api/v1/residents/{personId}", UriKind. Relative);
var response = Client.GetAsync(uri);
```

It will set up a database connection and register it in a mock startup class. You can also use this connection in the test setup if you need to add anything to the database to test against. The base class also maintains the ** CleanupActions  ** collection of actions that can be used to remove any data that may have been added to the database during the test.

** Example **

```dotnet
public async Task GetEntityByIdReturnsResponse().
{
  // Create our test entity
  var entity = _fixture.Create<Entity>();
  // Add our test entity to the database
  await SetupTestData(entity).ConfigureAwait(false);

  // Make the call to the API endpoint
  var uri = new Uri($"api/v1/entity/{entity.Id}", UriKind.Relative);
  var response await Client.GetAsync(uri).ConfigureAwait(false);
  
  // Check the reponse code
  response.StatusCode.Should().Be(HttpStatusCode. OK);

  // Get the response payload
  var responseContent = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
  var apiEntity = JsonConvert.DeserializeObject<Entity>(responseContent);

  // Check it's what we expected
  apiEntity.Should(). BeEquivalentTo(entity);
}

private async Task SetupTestData(Entity entity)
{
  // Save the entity in the database using the DynamoDbContext base class member
  await DynamoDbContext.SaveAsync(entity.ToDatabase()).ConfigureAwait(false);

  // Add a cleanup task to remove this entity from the database in the test tear down
  CleanupActions.Add(async () => await DynamoDbContext.DeleteAsync<DatabaseEntity>(entity.Id).ConfigureAwait(false):
}
```