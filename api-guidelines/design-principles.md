# API Design Principles

Comparing SOA web service interfacing style of SOAP vs. REST, the former
tend to be centered around operations that are usually use-case specific
and specialized. In contrast, REST is centered around business (data)
entities exposed as resources that are identified via URIs and can be
manipulated via standardized CRUD-like methods using different
representations, and hypermedia. RESTful APIs tend to be less use-case
specific and comes with less rigid client / server coupling and are more
suitable for an ecosystem of (core) services providing a platform of
APIs to build diverse new business services. We apply the RESTful web
service principles to all kind of application (micro-) service
components, independently from whether they provide functionality via
the internet or intranet.

  - We prefer REST-based APIs with JSON payloads.

An important principle for API design and usage is Postel’s Law, aka
[The Robustness
Principle](http://en.wikipedia.org/wiki/Robustness_principle) (see also
[RFC 1122](https://tools.ietf.org/html/rfc1122)):

  - Be liberal in what you accept, be conservative in what you send

*Readings:* Some interesting reads on the RESTful API design style and
service architecture:

  - Book: [Irresistable APIs: Designing web APIs that developers will
    love](https://www.amazon.de/Irresistible-APIs-Designing-that-developers/dp/1617292559)

  - Book: [REST in Practice: Hypermedia and Systems
    Architecture](http://www.amazon.de/REST-Practice-Hypermedia-Systems-Architecture/dp/0596805829)

  - Book: [Build APIs You Won’t
    Hate](https://leanpub.com/build-apis-you-wont-hate)

  - InfoQ eBook: [Web APIs: From Start to
    Finish](http://www.infoq.com/minibooks/emag-web-api)

  - Lessons-learned blog: [Thoughts on RESTful API
    Design](http://restful-api-design.readthedocs.org/en/latest/)

  - Fielding Dissertation: [Architectural Styles and the Design of
    Network-Based Software
    Architectures](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)

# Designing APIs

APIs should adhere to the same design principles as any well managed product:

  - Treat your API as product and act like a product owner

  - Put yourself into the place of your customers; be an advocate for
    their needs

  - Emphasize simplicity, comprehensibility, and usability of APIs to
    make them irresistible for client engineers

  - Actively improve and maintain API consistency over the long term

  - Make use of customer feedback and provide service level support

Understand the concrete use cases of your API consumers and carefully check
the trade-offs of your API design variants with a product mindset. Avoid
short-term implementation optimizations at the expense of unnecessary
client side obligations, and have a high attention on API quality and
client developer experience.

# API First

API First is one of our principles. In a nutshell API First requires two aspects:

  - define APIs first, before coding its implementation, using a
    standard specification language

  - get early review feedback from peers and client developers

By defining APIs outside the code, we want to facilitate early review
feedback and also a development discipline that focus service interface
design on...

  - profound understanding of the domain and required functionality

  - generalized business entities / resources, i.e. avoidance of use
    case specific APIs

  - clear separation of WHAT vs. HOW concerns, i.e. abstraction from
    implementation aspects — APIs should be stable even if we replace
    complete service implementation including its underlying technology
    stack

Moreover, API definitions with standardized specification format also
facilitate...

  - single source of truth for the API specification; it is a crucial
    part of a contract between service provider and client users

  - infrastructure tooling for API discovery, API GUIs, API documents,
    automated quality checks

Elements of API First are also these standards and a standardized
API review process (TBC) as to get early review feedback from peers and client
developers. Peer review is important for us to get high quality APIs, to
enable architectural and design alignment and to supported development
of client applications decoupled from service provider engineering life
cycle.

It is important to learn, that API First is **not in conflict with the
agile development principles** that we love. Applications should
evolve incrementally — and so its APIs. Of course, our API specification
will and should evolve iteratively in different cycles; however, each
starting with draft status and *early* team and peer review feedback.
API may change and profit from implementation concerns and automated
testing feedback. API evolution during development life cycle may
include breaking changes for not yet productive features and as long as
we have aligned the changes with the clients. Hence, API First does
*not* mean that you must have 100% domain and requirement understanding
and can never produce code before you have defined the complete API and
get it confirmed by peer review. On the other hand, API First obviously
is in conflict with the bad practice of publishing API definition and
asking for peer review after the service integration or even the service
productive operation has started. It is crucial to request and get early
feedback — as early as possible, but not before the API changes are
comprehensive with focus to the next evolution step and have a certain
quality (including API Guideline compliance), already confirmed via team
internal reviews.
