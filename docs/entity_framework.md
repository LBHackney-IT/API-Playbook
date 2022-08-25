---
id: entity_framework
title: Entity Framework Core
---

import TextToSpeech from '../src/SpeechComponent.js';

<TextToSpeech>

## Introduction:

Entity Framework Core is an object-relational mapper that lets .NET developers work with a database using .NET objects. 

This reduces the amount of data-access code that needs to be written. 

This means that instead of writing code to directly interact with our databases, we can instead create a **domain** class which identifies the database from which we’re retrieving our data and maps column titles to the properties of that class.

##  Video Tutorial:

** Watch a video version of this page if you prefer! **

<figure class="video-container">
  <iframe width="100" src="https://www.youtube.com/embed/qNsqZCKefcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

## How is it implemented in the Base API?:

```c#
using Microsoft.EntityFrameworkCore;

namespace example-api.V1.Infrastructure
{

    public class DatabaseContext : DbContext
    {
        //TODO: rename DatabaseContext to reflect the data source it is representing. eg. MosaicContext.
        //Guidance on the context class can be found here https://github.com/LBHackney-IT/lbh-example-api/wiki/DatabaseContext
        public DatabaseContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<DatabaseEntity> DatabaseEntities { get; set; }
    }
}
```

- We call `EntityFrameworkCore` within the `DatabaseContext.cs` file in the infrastructure namespace. 

- We then create a `DatabaseContext` Class, which inherits methods from `DbContext` - a part of EntityFrameworkCore. If necessary, we can extend the methods in DBContext using an override modifier.

- The most important part of this class are the `properties`, which are formed with a `DbSet` attached to a specific object. 
  * We define this object using a `DatabaseEntity` model.
## Examples of Use:

EntityFrameworkCore uses the DatabaseEntity model when accessing the database. In the API team, we typically create an individual file within the Infrastructure namespace for each individual table in the database. 

```c#
using Amazon.DynamoDBv2.DataModel;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace example-api.V1.Infrastructure
{
    // There's an example of this in the wiki https://github.com/LBHackney-IT/lbh-example-api/wiki/DatabaseContext

    [Table("example_table")]
    [DynamoDBTable("example_table", LowerCamelCaseProperties = true)]
    public class DatabaseEntity
    {
        [Column("id")]
        [DynamoDBHashKey]
        public int Id { get; set; }

        [Column("created_at")]
        [DynamoDBProperty]
        public DateTime CreatedAt { get; set; }
    }
}
```
_Example DatabaseEntity for the Base API_
```sql title="./database/schema.sql"
CREATE TABLE example_table (
    created_at timestamp ,
    id SERIAL PRIMARY KEY
);
```
_Schema that we use to create an example table in our database_

The class for each DatabaseEntity has a Table attribute, which directly references a specific table present in the schema.

There are also Column attributes for each property, which also directly reference the names of the columns, as well as the data types.

```c#
using System.Collections.Generic;
using example-api.V1.Domain;
using example-api.V1.Factories;
using example-api.V1.Infrastructure;

namespace example-api.V1.Gateways
{
    public class ExampleGateway : IExampleGateway
    {
        private readonly DatabaseContext _databaseContext;

        public ExampleGateway(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public Entity GetEntityById(int id)
        {
            var result = _databaseContext.DatabaseEntities.Find(id);

            return result?.ToDomain();
        }

        public List<Entity> GetAll()
        {
            return new List<Entity>();
        }
    }
}
```

With our model built, we can now call our DatabaseContext object within the **Gateway**, and access the database using LINQ queries. 

For example, in the `GetEntityById` method, we call the Database Context, access the DatabaseEntity Property and use the `Find` method to match the id in our request with the id column in our database.

The `find` method is one of many methods within EntityFrameworkCore.

```c#
using AutoFixture;
using example-api.Tests.V1.Helper;
using example-api.V1.Domain;
using example-api.V1.Gateways;
using FluentAssertions;
using NUnit.Framework;

namespace example-api.Tests.V1.Gateways
{
    //For instruction on how to run tests please see the wiki: https://github.com/LBHackney-IT/lbh-example-api/wiki/Running-the-test-suite.
    [TestFixture]
    public class ExampleGatewayTests : DatabaseTests
    {
        private readonly Fixture _fixture = new Fixture();
        private ExampleGateway _classUnderTest;

        [SetUp]
        public void Setup()
        {
            _classUnderTest = new ExampleGateway(DatabaseContext);
        }

        [Test]
        public void GetEntityByIdReturnsNullIfEntityDoesntExist()
        {
            var response = _classUnderTest.GetEntityById(123);

            response.Should().BeNull();
        }

        [Test]
        public void GetEntityByIdReturnsTheEntityIfItExists()
        {
            // Arrange
            var entity = _fixture.Create<Entity>();
            var databaseEntity = DatabaseEntityHelper.CreateDatabaseEntityFrom(entity);

            DatabaseContext.DatabaseEntities.Add(databaseEntity);
            DatabaseContext.SaveChanges();

            // Act
            var response = _classUnderTest.GetEntityById(databaseEntity.Id);

            // Assert
            databaseEntity.Id.Should().Be(response.Id);
            databaseEntity.CreatedAt.Should().BeSameDateAs(response.CreatedAt);
        }

    }
}
```

We can see more methods in use when creating tests which require pre-existing data in the database.

Within our GatewayTests, during the `arrange` step shown we create a databaseEntity, then add that entity using the `Add` method to track the change to our table, then use the `SaveChanges` method to commit that change, as well as any other changes to the database.

## More Information:

For more information, please visit the [online documentation](https://docs.microsoft.com/en-us/ef/core/) for Entity Framework.
</TextToSpeech>