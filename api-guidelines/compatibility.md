# MUST Maintain Backward Compatibility

Change APIs, but keep all consumers running. Consumers usually have
independent release lifecycles, focus on stability, and avoid changes
that do not provide additional value. APIs are contracts between service
providers and service consumers that cannot be broken via unilateral
decisions.

There are two techniques to change APIs without breaking them:

  - follow rules for compatible extensions

  - introduce new API versions and still support older versions

We strongly encourage using compatible API changes and discourage
versioning. The following guidelines for service providers and consumers
enable us to make compatible changes without versioning.

**Note:** There is a difference between incompatible and breaking
changes. Incompatible changes are changes that are not covered by the
compatibility rules below. Breaking changes are incompatible changes
deployed into operation, and thereby breaking running API consumers.
Usually, incompatible changes are breaking changes when deployed into
operation. However, in specific controlled situations it is possible to
deploy incompatible changes in a non-breaking way, if no API consumer is
using the affected API aspects (see also [Deprecation](deprecation.md)).

**Hint:** Please note that the compatibility guarantees are for the "on
the wire" format. Binary or source compatibility of code generated from
an API definition is not covered by these rules. If client
implementations update their generation process to a new version of the
API definition, it has to be expected that code changes are necessary.

# SHOULD Prefer Compatible Changes

API designers should apply the following rules to evolve RESTful APIs
for services in a backward-compatible way:

  - Add only optional, never mandatory fields.

  - Never change the semantics of fields (e.g. changing the semantics from
    customer-number to customer-id, as both are different unique
    customer keys)

  - Input fields may have (complex) constraints being validated via
    server-side business logic. Never change the validation logic to be
    more restrictive and make sure that all constraints are clearly
    defined in description.

  - Support redirection in case an URL has to change ([301 Moved
    Permanently](https://en.wikipedia.org/wiki/HTTP_301)).

# MUST Prepare Clients To Not Crash On Compatible API Extensions

Service clients should apply the robustness principle:

  - Be conservative with API requests and data passed as input, e.g.
    avoid to exploit definition deficits like passing megabytes for
    strings with unspecified maximum length.

  - Be tolerant in processing and reading data of API responses, more
    specifically...

Service clients must be prepared for compatible API extensions of
service providers:

  - Be tolerant with unknown fields in the payload (see also Fowler’s
    ["TolerantReader"](http://martinfowler.com/bliki/TolerantReader.html)
    post), i.e. ignore new fields but do not eliminate them from payload
    if needed for subsequent PUT requests.

  - Be prepared to handle HTTP status codes not explicitly specified in
    endpoint definitions. Note also, that status codes are extensible.
    Default handling is how you would treat the corresponding x00 code
    (see [RFC7231
    Section 6](https://tools.ietf.org/html/rfc7231#section-6)).

  - Follow the redirect when the server returns HTTP status [301 Moved
    Permanently](https://en.wikipedia.org/wiki/HTTP_301).

# SHOULD Design APIs Conservatively

Designers of service provider APIs should be conservative and accurate
in what they accept from clients:

  - Unknown input fields in payload or URL should not be ignored;
    servers should provide error feedback to clients via an HTTP 400
    response code.

  - Be accurate in defining input data constraints (like formats,
    ranges, lengths etc.) — and check constraints and return dedicated
    error information in case of violations.

  - Prefer being more specific and restrictive (if compliant to
    functional requirements), e.g. by defining length range of strings.
    It may simplify implementation while providing freedom for further
    evolution as compatible extensions.

Not ignoring unknown input fields is a specific deviation from Postel’s
Law (e.g. see also  
[The Robustness Principle
Reconsidered](https://cacm.acm.org/magazines/2011/8/114933-the-robustness-principle-reconsidered/fulltext))
and a strong recommendation. Servers might want to take a different
approach but should be aware of the following problems and be explicit
in what is supported:

  - Ignoring unknown input fields is actually not an option for PUT,
    since it becomes asymmetric with subsequent GET response and HTTP is
    clear about the PUT "replace" semantics and default roundtrip
    expectations (see [RFC7231 Section
    4.3.4](https://tools.ietf.org/html/rfc7231#section-4.3.4)). Note,
    accepting (i.e. not ignoring) unknown input fields and returning it
    in subsequent GET responses is a different situation and compliant
    to PUT semantics.

  - Certain client errors cannot be recognized by servers, e.g.
    attribute name typing errors will be ignored without server error
    feedback. The server cannot differentiate between the client
    intentionally providing an additional field versus the client
    sending a mistakenly named field, when the client’s actual intent
    was to provide an optional input field.

  - Future extensions of the input data structure might be in conflict
    with already ignored fields and, hence, will not be compatible, i.e.
    break clients that already use this field but with different type.

In specific situations, where a (known) input field is not needed
anymore, it either can stay in the API definition with "not used
anymore" description or can be removed from the API definition as long
as the server ignores this specific
parameter.

# SHOULD Avoid Versioning

When changing your RESTful APIs, do so in a compatible way and avoid
generating additional API versions. Multiple versions can significantly
complicate understanding, testing, maintaining, evolving, operating and
releasing our systems ([supplementary
reading](http://martinfowler.com/articles/enterpriseREST.html)).

If changing an API can’t be done in a compatible way, then proceed in
one of these three ways:

  - create a new resource (variant) in addition to the old resource
    variant

  - create a new service endpoint — i.e. a new application with a new
    API (with a new domain name)

  - create a new API version supported in parallel with the old API by
    the same microservice

As we discourage versioning by all means because of the manifold
disadvantages, we strongly recommend to only use the first two
approaches. Versioning should be a last resort.

# MUST Use URI Versioning

With URI versioning a (major) version number is included in the path,
e.g. /v1/customers. If you don't put it in at the beginning then it's 
almost impossible to retro-fit
