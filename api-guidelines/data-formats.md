# MUST Use JSON:API to Encode Structured Data

APIs could represent resources with many different structures, but picking a standard is a good thing.
[JSON:API](https://jsonapi.org/) is a good approach and enables useful things like including related resources in the same request.
I tend to prefer a minimal JSON:API implementation to start with and add features if required.

# MAY Use non-JSON Media Types for Binary Data or Alternative Content Representations

Other media types may be used in following cases:

  - Transferring binary data or data whose structure is not relevant.
    This is the case if payload structure is not interpreted and
    consumed by clients as is. Example of such use case is downloading
    images in formats JPG, PNG, GIF.

  - In addition to JSON version alternative data representations (e.g.
    in formats PDF, DOC, XML) may be made available through content
    negotiation.

# MUST Use Standard Date and Time Formats

## JSON Payload

Represent date and time format as [RFC 3339](#should-date-property-values-should-conform-to-rfc-3339).

## HTTP headers

HTTP headers including the proprietary headers use the [HTTP date format defined in RFC 7231](http://tools.ietf.org/html/rfc7231#section-7.1.1.1).

# MAY Use Standards for Country, Language and Currency Codes

Use the following standard formats for country, language and currency
codes:

  - [ISO 3166-1-alpha2 country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    
      - (It is "GB", not "UK", even though "UK" has seen some use at
        Zalando)

  - [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
    
      - [BCP-47](https://tools.ietf.org/html/bcp47) (based on ISO 639-1)
        for language variants

  - [ISO 4217 currency codes](https://en.wikipedia.org/wiki/ISO_4217)

# MUST Define Format for Type Number and Integer

Whenever an API defines a property of type `number` or `integer`, the
precision must be defined by the format as follows to prevent clients
from guessing the precision incorrectly, and thereby changing the value
unintentionally:

| type    | format  | specified value range                                 |
| ------- | ------- | ----------------------------------------------------- |
| integer | int32   | integer between -2^31 and 2^31-1                        |
| integer | int64   | integer between -2^63 and 2^63-1                        |
| integer | bigint  | arbitrarily large signed integer number               |
| number  | float   | IEEE 754-2008/ISO 60559:2011 binary64 decimal number  |
| number  | double  | IEEE 754-2008/ISO 60559:2011 binary128 decimal number |
| number  | decimal | arbitrarily precise signed decimal number             |

The precision must be translated by clients and servers into the most
specific language types. E.g. for the following definitions the most
specific language types in Java will translate to `BigDecimal` for
`Money.amount` and `int` or `Integer` for the `OrderList.page_size`:

``` yaml
components:
  schemas:
    Money:
      type: object
      properties:
        amount:
          type: number
          description: Amount expressed as a decimal number of major currency units
          format: decimal
          example: 99.95
       ...

    OrderList:
      type: object
      properties:
        page_size:
          type: integer
          description: Number of orders in list
          format: int32
          example: 42
```

# MUST use camelCase property names: `^[a-z][A-Z0-9]*$`

Property names are restricted to ASCII strings. The first character must
be a letter, or an underscore, and subsequent characters can be a
letter, or a number.

# MUST pluralize array names

To indicate they contain multiple values prefer to pluralize array
names. This implies that object names should in turn be singular.

# MUST Boolean property values must not be null

Schema based JSON properties that are by design booleans must not be
presented as nulls. A boolean is essentially a closed enumeration of two
values, true and false. If the content has a meaningful null value,
strongly prefer to replace the boolean with enumeration of named values
or statuses - for example acceptedTermsAndConditions with true or
false can be replaced with termsAndConditions with values yes, no
and unknown.

# SHOULD Null values should have their fields removed

OpenAPI, which is in common use, doesn’t support null field values (it
does allow omitting that field completely if it is not marked as
required). However that doesn’t prevent clients and servers sending and
receiving those fields with null values. Also, in some cases null may be
a meaningful value - for example, JSON Merge Patch
[RFC 7382](https://tools.ietf.org/html/rfc7386)) using null to indicate
property deletion.

# MUST Empty array values should not be null

Empty array values can unambiguously be represented as the empty list,
`[]`.

# SHOULD Date property values should conform to RFC 3339

Use the date and time formats defined by
[RFC 3339](http://tools.ietf.org/html/rfc3339#section-5.6):

  - for "date" use strings matching `date-fullyear "-" date-month "-"
    date-mday`, for example: `2015-05-28`

  - for "date-time" use strings matching `full-date "T" full-time`, for
    example `2015-05-28T14:07:17Z`

Note that the [OpenAPI
format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types)
"date-time" corresponds to "date-time" in the RFC) and `2015-05-28` for
a date (note that the OpenAPI format "date" corresponds to "full-date"
in the RFC). Both are specific profiles, a subset of the international
standard [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601).

A zone offset may be used (both, in request and responses) — this is
simply defined by the standards. However, we encourage restricting dates
to UTC and without offsets. For example `2015-05-28T14:07:17Z` rather
than `2015-05-28T14:07:17+00:00`. From experience we have learned that
zone offsets are not easy to understand and often not correctly handled.
Note also that zone offsets are different from local times that might be
including daylight saving time. Localization of dates should be done by
the services that provide user interfaces, if required.

When it comes to storage, all dates should be consistently stored in UTC
without a zone offset. Localization should be done locally by the
services that provide user interfaces, if required.

Sometimes it can seem data is naturally represented using numerical
timestamps, but this can introduce interpretation issues with precision
- for example whether to represent a timestamp as 1460062925,
1460062925000 or 1460062925.000. Date strings, though more verbose and
requiring more effort to parse, avoid this ambiguity.

# SHOULD Time durations and intervals could conform to ISO 8601

Schema based JSON properties that are by design durations and intervals
could be strings formatted as recommended by ISO 8601 ([Appendix A of
RFC 3339 contains a
grammar](https://tools.ietf.org/html/rfc3339#appendix-A) for durations).

# SHOULD Use standards for Language, Country and Currency

  - [ISO 3166-1-alpha2
    country](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

  - [ISO 639-1 language
    code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

  - [BCP-47](https://tools.ietf.org/html/bcp47) (based on ISO 639-1) for
    language variants

  - [ISO 4217 currency codes](http://en.wikipedia.org/wiki/ISO_4217)
