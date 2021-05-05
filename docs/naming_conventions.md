---
id: naming_conventions
title: Naming Conventions
---

### Name of the data source to represent the data

## MUST Use lowercase separate words with hyphens for Path Segments

Example:

``` http
/shipment-orders/{shipment-order-id}
```

This applies to concrete path segments and not the names of path parameters. For example `{shipment_order_id}` would be ok as a path parameter.

## MUST Use snake_case for Query Parameters

Examples:

    customer_number, order_id, billing_address

## MUST Pluralize Resource Names

Usually, a collection of resource instances is provided (at least API should be ready here). The special case of a resource singleton is a collection with cardinality 1.

## MUST use Outsider Understandable Property and Variable Names

Property and variable names should not contain acronyms or word shortenings that require any project or database specific knowledge to decipher. 

Examples:

    use `modificationProcess` rather than `modProc`
    use `propertyRef` rather than `propRef`
    use `dateOfBirth` rather than `DOB`

The shortenings like `id` and `ref` are considered acceptable as they are universally understood.

## MUST use camelCase Property Names

Data formats - [camel casing](data-formats.md#must-use-camelcase-property-names-a-za-z0-9).

## MUST Pluralise Array Names

Data formats - [array names](data-formats.md#must-pluralise-array-names).

## MUST Avoid Trailing Slashes

The trailing slash must not have specific semantics. Resource paths must deliver the same results whether they have the trailing slash or not.

## MUST Stick to Conventional Query Parameters

If you provide query support for searching, sorting, filtering, and paginating, you must stick to the following naming conventions:

  - `q` — default query parameter (e.g. used by browser tab completion); should have an entity specific alias, like sku

  - `sort` — comma-separated list of fields to define the sort order. To indicate sorting direction, fields may be prefixed with `+` (ascending) or `-` (descending), e.g. /sales-orders?sort=+id

  - `fields` — to retrieve only a subset of fields of a resource.

  - `embed` — to expand or embed sub-entities (ie.: inside of an article entity, expand silhouette code into the silhouette object). Implementing `embed` correctly is difficult, so do it with care.

  - `offset` — numeric offset of the first element on a page. See [pagination](pagination.md) section.

  - `limit` — client suggested limit to restrict the number of entries on a page. See [pagination](pagination.md) section.

