---
id: linting
title: Linting
---
** Things to enforce: **

Indentation 4 spaces for tab


No whitespace

Public objects should be Pascal Case

Local objects should be camel case

Class objects should be prefixed with an underscore

Using directives : outside namespace

No unused using directives

One new line at the end of every file

One class for a file

Prefer the language keyword for local objects and member access

Require accessibility modifiers for fields

No unused parameters for non public method

Use var where possible

Brackets on a new line

Comments on their own line

No Console writes


** Tools **


.editorconfig + dotnet format  (Chosen)

editorconfig files: https://docs.microsoft.com/en-us/visualstudio/ide/editorconfig-language-conventions?view=vs-2019

dotnet format project site: https://github.com/dotnet/format

How to include in CI https://www.meziantou.net/enforce-dotnet-code-style-in-ci-with-dotnet-format.html

** Stylecop.analysers: **

Project site: https://github.com/DotNetAnalyzers/StyleCopAnalyzers

Need to make a .ruleset file + stylecop.json to implement rules

Integrates with build

**  Resharper: **

As an alternative to the paid version, there is a free command line tool but I’m assuming it wont integrate with peoples editors who aren’t using rider https://www.jetbrains.com/help/resharper/CleanupCode.html


** For API Playbook: **


** Linting rules: **

Indentation 4 spaces for tab

No whitespace

Public objects should be Pascal Case

Local objects should be camel case

Class objects should be prefixed with an underscore

Using directives : outside namespace

No unused using directives

One new line at the end of every file

One class for a file

Prefer the language keyword for local objects and member access

Require accessibility modifiers for fields

No unused parameters for non public method

Use var where possible

Brackets on a new line

Comments on their own line

No Console writes

** Tools: **

    .editorconfig + dotnet format

  editorconfig files:
    https://docs.microsoft.com/en-us/visualstudio/ide/editorconfig-language-conventions?view=vs-2019

    dotnet format project site:
    https://github.com/dotnet/format

    How to include in CI:
      https://www.meziantou.net/enforce-dotnet-code-style-in-ci-with-dotnet-format.htm

** How to: **

    Run ‘make lint’ command
