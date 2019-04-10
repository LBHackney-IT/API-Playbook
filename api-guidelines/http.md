# MUST Use REST Maturity Level 2

We strive for a good implementation of [REST Maturity Level 2](http://martinfowler.com/articles/richardsonMaturityModel.html#level2)
as it enables us to build resource-oriented APIs that make full use of
HTTP verbs and status codes. You can see this expressed by many rules
throughout these guidelines, e.g.:

  - [Avoid Actions — Think About Resources](resources.md#must-avoid-actions--think-about-resources)

  - [MUST Keep URLs Verb-Free](resources.md#must-keep-urls-verb-free)

  - [MUST Use HTTP Methods Correctly](#must-use-http-methods-correctly)

  - [MUST Use Standard HTTP Status Codes](#must-use-standard-http-status-codes)
  
# MUST Use HTTP Methods Correctly

Be compliant with the standardized HTTP method semantics summarized as follows:

## GET

GET requests are used to **read** either a single or a collection resource.

  - GET requests for individual resources will usually generate a 404 if the resource does not exist

  - GET requests for collection resources may return either 200 (if the collection is empty) or 404 (if the collection is missing)

  - GET requests must NOT have a request body payload

**Note:** GET requests on collection resources should provide sufficient
filter and [pagination](pagination.md) mechanisms.

## PUT

PUT requests are used to **update entire** resources. The semantic is best
described as *"please put the enclosed representation at the resource
mentioned by the URL, replacing any existing resource."*.

  - PUT requests are usually applied to single resources, and not to
    collection resources, as this would imply replacing the entire
    collection

  - PUT requests are usually robust against non-existence of resources
    by implicitly creating before updating

  - on successful PUT requests, the server will **replace the entire
    resource** addressed by the URL with the representation passed in
    the payload (subsequent reads will deliver the same payload)

  - successful PUT requests will usually generate 200 or 204 (if the
    resource was updated - with or without actual content returned), and
    201 (if the resource was created)

## POST

POST requests are idiomatically used to **create** single resources on a
collection resource endpoint, but other semantics on single resources
endpoint are possible. The semantic for collection endpoints is
best described as *"please add the enclosed representation to the
collection resource identified by the URL"*.

  - on a successful POST request, the server will create one or multiple
    new resources and provide their URI/URLs in the response

  - successful POST requests will usually generate 200 (if resources
    have been updated), 201 (if resources have been created), and 202
    (if the request was accepted but has not been finished yet)

The semantic for single resource endpoints is best described as *"please
execute the given well specified request on the resource identified by
the URL"*.

**Generally:** POST should be used for scenarios that cannot be covered
by the other methods sufficiently. In such cases, make sure to document
the fact that POST is used as a workaround.

**Note:** Resource IDs with respect to POST requests are created and
maintained by server and returned with response payload.

**Tip:** Posting the same resource twice is by itself **not** required
to be *idempotent* and may result in multiple resource instances.

## PATCH

PATCH requests are used to **update parts** of single resources, i.e.
where only a specific subset of resource fields should be replaced. The
semantic is best described as *"please change the resource identified by
the URL according to my change request"*. The semantic of the change
request is not defined in the HTTP standard and must be described in the
API specification by using suitable media types.

  - PATCH requests are usually applied to single resources as patching
    entire collection is challenging

  - PATCH requests are usually not robust against non-existence of
    resource instances

  - on successful PATCH requests, the server will update parts of the
    resource addressed by the URL as defined by the change request in
    the payload

  - successful PATCH requests will usually generate 200 or 204 (if
    resources have been updated with or without updated content
    returned)

**Note (To Be Clarified):** since implementing PATCH correctly is a bit tricky, we
strongly suggest to choose one and only one of the following patterns per endpoint.

1.  use PUT with complete objects to update a resource as long as
    feasible (i.e. do not use PATCH at all).

2.  use PATCH with partial objects to only update parts of a resource,
    whenever possible. (This is basically [JSON Merge Patch](https://tools.ietf.org/html/rfc7396),
    a specialized media type `application/merge-patch+json` that is a partial resource
    representation.)

3.  use PATCH with [JSON Patch](http://tools.ietf.org/html/rfc6902), a
    specialized media type `application/json-patch+json` that includes
    instructions on how to change the resource.

4.  use POST (with a proper description of what is happening) instead of
    PATCH, if the request does not modify the resource in a way defined
    by the semantics of the media type.

In practice [JSON Merge Patch](https://tools.ietf.org/html/rfc7396)
quickly turns out to be too limited, especially when trying to update
single objects in large collections (as part of the resource). In this
cases [JSON Patch](http://tools.ietf.org/html/rfc6902) can shown its
full power while still showing readable patch requests (see also 
[JSON patch vs. merge](http://erosb.github.io/post/json-patch-vs-merge-patch)).

## DELETE

DELETE requests are used to **delete** resources. The semantic is best
described as *"please delete the resource identified by the URL"*.

  - DELETE requests are usually applied to single resources, not on
    collection resources, as this would imply deleting the entire
    collection

  - successful DELETE requests will usually generate 200 (if the deleted
    resource is returned) or 204 (if no content is returned)

  - failed DELETE requests will usually generate 404 (if the resource
    cannot be found) or 410 (if the resource was already deleted before)

**Important:** After deleting a resource with DELETE, a GET request on
the resource is expected to either return 404 (not found) or 410 (gone)
depending on how the resource is represented after deletion. Under no
circumstances the resource must be accessible after this operation on
its endpoint.

## HEAD

HEAD requests are used to **retrieve** the header information of single
resources and resource collections.

  - HEAD has exactly the same semantics as GET, but returns headers
    only, no body.

## OPTIONS

OPTIONS requests are used to **inspect** the available operations (HTTP
methods) of a given endpoint.

  - OPTIONS responses usually either return a comma separated list of
    methods in the `Allow` header or as a structured list of link
    templates

**Note:** OPTIONS is rarely implemented, though it could be used to
self-describe the full functionality of a resource.

This section describes a handful of headers, which we found raised the
most questions in our daily usage, or which are useful in particular
circumstances but not widely known.

# MUST Use Content Headers Correctly

Content or entity headers are headers with a `Content-` prefix. They
describe the content of the body of the message and they can be used in
both, HTTP requests and responses. Commonly used content headers include
but are not limited to:

  - [`Content-Disposition`](https://tools.ietf.org/html/rfc6266) can
    indicate that the representation is supposed to be saved as a file,
    and the proposed file
    name.

  - [`Content-Encoding`](https://tools.ietf.org/html/rfc7231#section-3.1.2.2)
    indicates compression or encryption algorithms applied to the
    content.

  - [`Content-Length`](https://tools.ietf.org/html/rfc7230#section-3.3.2)
    indicates the length of the content (in
    bytes).

  - [`Content-Language`](https://tools.ietf.org/html/rfc7231#section-3.1.3.2)
    indicates that the body is meant for people literate in some human
    language(s).

  - [`Content-Location`](https://tools.ietf.org/html/rfc7231#section-3.1.4.2)
    indicates where the body can be found otherwise.

  - [`Content-Range`](https://tools.ietf.org/html/rfc7233#section-4.2)
    is used in responses to range requests to indicate which part of the
    requested resource representation is delivered with the
    body.

  - [`Content-Type`](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
    indicates the media type of the body content.

# MAY Use Other Standardized Headers

Use [this list](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
and mention its support in your OpenAPI definition.

# MUST Fulfill Safeness and Idempotency Properties

An operation can be...

  - idempotent, i.e. operation will have the same effect on the server’s
    state if executed once or multiple times (note: this does not
    necessarily mean returning the same response or status code)

  - safe, i.e. must not have side effects such as state changes

Method implementations must fulfill the following basic properties:

| HTTP method | safe | idempotent |
| ----------- | ---- | ---------- |
| OPTIONS     | Yes  | Yes        |
| HEAD        | Yes  | Yes        |
| GET         | Yes  | Yes        |
| PUT         | No   | Yes        |
| POST        | No   | No         |
| DELETE      | No   | Yes        |
| PATCH       | No   | No         |

# SHOULD Define Collection Format of Query Parameters and Headers

Sometimes, query parameters and headers may allow users to provide a list of
values by providing a comma-separated list (`csv`).
The API specification should explicitly define the type as follows:

| Description            | OpenAPI 3.0                   | Example                      |
| ---------------------- | ----------------------------- | ---------------------------- |
| Comma separated values | `style: form, explode: false` | `?param=value1,value2`       |

# MUST Document Implicit Filtering

Sometimes certain collection resources or queries will not list all the
possible elements they have, but only those for which the current client
is authorized to access.

Implicit filtering could be done on:

  - the collection of resources being returned on a parent `GET` request

  - the fields returned for the resource’s detail

In such cases, the implicit filtering must be in the API Specification
(in its description):

``` yaml
paths:
  /business-partner:
    get:
      description: >-
        Get the list of registered business partner.
        Only the business partners to which you have access to are returned.
```

# MUST Specify Success and Error Responses

APIs should define the functional, business view and abstract from
implementation aspects. Success and error responses are a vital part to
define how an API is used correctly.

Therefore, you must define **all** success and service specific error
responses in your API specification. Both are part of the interface
definition and provide important information for service clients to
handle standard as well as exceptional situations.

**Hint:** In most cases it is not useful to document all technical
errors, especially if they are not under control of the service
provider. Thus unless a response code conveys application-specific
functional semantics or is used in a none standard way that requires
additional explanation, multiple error response specifications can be
combined using the following pattern:

``` yaml
responses:
  ...
  default:
    description: error occurred - see status code and problem object for more information.
    content:
      "application/problem+json":
        schema:
          $ref: 'https://zalando.github.io/problem/schema.yaml#/Problem'
```

API designers should also think about a **troubleshooting board** as
part of the associated online API documentation. It provides information
and handling guidance on application-specific errors and is referenced
via links from the API specification. This can reduce service support
tasks and contribute to service client and provider performance.

# MUST Use Standard HTTP Status Codes

You must only use standardized HTTP status codes consistently with their
intended semantics. You must not invent new HTTP status codes.

RFC standards define \~60 different HTTP status codes with specific
semantics (mainly
[RFC7231](https://tools.ietf.org/html/rfc7231#section-6) and
[RFC-6585](https://tools.ietf.org/html/rfc6585)) — and there are
upcoming new ones, e.g. [draft legally-restricted-status](https://tools.ietf.org/html/draft-tbray-http-legally-restricted-status-05).
See overview on all error codes on
[Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) or
via <https://httpstatuses.com/>) also inculding 'unofficial codes', e.g.
used by popular web servers like Nginx.

Below we list the most commonly used and best understood HTTP status
codes, consistent with their semantics in the RFCs. APIs should only use
these to prevent misconceptions that arise from less commonly used HTTP
status codes.

**Important:** As long as your HTTP status code usage is well covered by
the semantic defined here, you should not describe it to avoid an
overload with common sense information and the risk of inconsistent
definitions. Only if the HTTP status code is not in the list below or
its usage requires additional information aside the well defined
semantic, the API specification must provide a clear description of the
HTTP status code in the
response.

## Success Codes

| Code | Meaning                                                                                                                                                                                                                                                  | Methods                  |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 200  | OK - this is the standard success response                                                                                                                                                                                                               | All                      |
| 201  | Created - Returned on successful entity creation. You are free to return either an empty response or the created resource in conjunction with the Location header. (More details found in [common headers](#must-use-content-headers-correctly).) *Always* set the Location header. | POST, PUT                |
| 202  | Accepted - The request was successful and will be processed asynchronously.                                                                                                                                                                              | POST, PUT, DELETE, PATCH |
| 204  | No content - There is no response body                                                                                                                                                                                                                   | PUT, DELETE, PATCH       |
| 207  | Multi-Status - The response body contains multiple status informations for different parts of a batch/bulk request. See [MUST Use Code 207 for Batch or Bulk Requests](#must-use-code-207-for-batch-or-bulk-requests).                                                                          | POST                     |

## Redirection Codes

| Code | Meaning                                                                                                                                | Methods                  |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 301  | Moved Permanently - This and all future requests should be directed to the given URI.                                                  | All                      |
| 303  | See Other - The response to the request can be found under another URI using a GET method.                                             | PATCH, POST, PUT, DELETE |
| 304  | Not Modified - resource has not been modified since the date or version passed via request headers If-Modified-Since or If-None-Match. | GET                      |

## Client Side Error Codes

| Code | Meaning                                                                                                                                                       | Methods                  |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 400  | Bad request - generic / unknown error. Should also be delivered in case of input payload fails business logic validation.                                     | All                      |
| 401  | Unauthorized - the users must log in (this often means "Unauthenticated")                                                                                     | All                      |
| 403  | Forbidden - the user is not authorized to use this resource                                                                                                   | All                      |
| 404  | Not found - the resource is not found                                                                                                                         | All                      |
| 405  | Method Not Allowed - the method is not supported, see OPTIONS                                                                                                 | All                      |
| 406  | Not Acceptable - resource can only generate content not acceptable according to the Accept headers sent in the request                                        | All                      |
| 408  | Request timeout - the server times out waiting for the resource                                                                                               | All                      |
| 409  | Conflict - request cannot be completed due to conflict, e.g. when two clients try to create the same resource or if there are concurrent, conflicting updates | POST, PUT, DELETE, PATCH |
| 410  | Gone - resource does not exist any longer, e.g. when accessing a resource that has intentionally been deleted                                                 | All                      |
| 412  | Precondition Failed - returned for conditional requests, e.g. If-Match if the condition failed. Used for optimistic locking.                                  | PUT, DELETE, PATCH       |
| 415  | Unsupported Media Type - e.g. clients sends request body without content type                                                                                 | POST, PUT, DELETE, PATCH |
| 423  | Locked - Pessimistic locking, e.g. processing states                                                                                                          | PUT, DELETE, PATCH       |
| 428  | Precondition Required - server requires the request to be conditional (e.g. to make sure that the "lost update problem" is avoided).                          | All                      |
| 429  | Too many requests - the client does not consider rate limiting and sent too many requests. See [MUST Use Code 429 with Headers for Rate Limits](#153).      | All                      |

## Server Side Error Codes:

| Code | Meaning                                                                                                                                                                                                                                                                                                                               | Methods |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 500  | Internal Server Error - a generic error indication for an unexpected server execution problem (here, client retry may be sensible)                                                                                                                                                                                                    | All     |
| 501  | Not Implemented - server cannot fulfill the request (usually implies future availability, e.g. new feature).                                                                                                                                                                                                                          | All     |
| 503  | Service Unavailable - service is (temporarily) not available (e.g. if a required component or downstream service is not available) — client retry may be sensible. If possible, the service should indicate how long the client should wait by setting the ['Retry-After'](https://tools.ietf.org/html/rfc7231#section-7.1.3) header. | All     |

# MUST Use Most Specific HTTP Status Codes

You must use the most specific HTTP status code when returning
information about your request processing status or error situations.

# MUST Use Code 207 for Batch or Bulk Requests

Some APIs are required to provide either *batch* or *bulk* requests
using POST for performance reasons, i.e. for communication and
processing efficiency. In this case services may be in need to signal
multiple response codes for each part of an batch or bulk request. As
HTTP does not provide proper guidance for handling batch/bulk requests
and responses, we herewith define the following approach:

  - A batch or bulk request **always** has to respond with HTTP status
    code **207**, unless it encounters a generic or unexpected failure
    before looking at individual parts.

  - A batch or bulk response with status code 207 **always** returns a
    multi-status object containing sufficient status and/or monitoring
    information for each part of the batch or bulk request.

  - A batch or bulk request may result in a status code 400/500, only if
    the service encounters a failure before looking at individual parts
    or, if an unanticipated failure occurs.

The before rules apply *even in the case* that processing of all
individual part *fail* or each part is executed *asynchronously*\! They
are intended to allow clients to act on batch and bulk responses by
inspecting the individual results in a consistent way.

**Note**: while a *batch* defines a collection of requests triggering
independent processes, a *bulk* defines a collection of independent
resources created or updated together in one request. With respect to
response processing this distinction normally does not matter.

# MUST Use Code 429 with Headers for Rate Limits

APIs that wish to manage the request rate of clients must use the ['429
Too Many Requests'](http://tools.ietf.org/html/rfc6585) response code if
the client exceeded the request rate and therefore the request can’t be
fulfilled. Such responses must also contain header information providing
further details to the client. There are two approaches a service can
take for header information:

  - Return a ['Retry-After'](https://tools.ietf.org/html/rfc7231#section-7.1.3)
    header indicating how long the client ought to wait before making a
    follow-up request. The Retry-After header can contain a HTTP date
    value to retry after or the number of seconds to delay. Either is
    acceptable but APIs should prefer to use a delay in seconds.

  - Return a trio of 'X-RateLimit' headers. These headers (described
    below) allow a server to express a service level in the form of a
    number of allowing requests within a given window of time and when
    the window is reset.

The 'X-RateLimit' headers are:

  - `X-RateLimit-Limit`: The maximum number of requests that the client
    is allowed to make in this window.

  - `X-RateLimit-Remaining`: The number of requests allowed in the
    current window.

  - `X-RateLimit-Reset`: The relative time in seconds when the rate
    limit window will be reset. **Beware** that this is different to
    Github and Twitter’s usage of a header with the same name which is
    using UTC epoch seconds instead.

The reason to allow both approaches is that APIs can have different
needs. Retry-After is often sufficient for general load handling and
request throttling scenarios and notably, does not strictly require the
concept of a calling entity such as a tenant or named account. In turn
this allows resource owners to minimise the amount of state they have to
carry with respect to client requests. The 'X-RateLimit' headers are
suitable for scenarios where clients are associated with pre-existing
account or tenancy structures. 'X-RateLimit' headers are generally
returned on every request and not just on a 429, which implies the
service implementing the API is carrying sufficient state to track the
number of requests made within a given window for each named entity.
