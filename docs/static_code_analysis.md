---
id: static_code_analysis
title: Static Code Analysis
---



 ## Use FxCop

  Using ReSharper Command Line Tools (Website):

          https://www.jetbrains.com/help/resharper/ReSharper_Command_Line_Tools.html

Spike PR:

            https://github.com/LBHackney-IT/lbh-base-api/pull/19

##  Running locally

This can be downloaded either as a NuGet package or directly from the Jetbrains Website.

Decided to try this as the description mentions it being a stand-alone cross-platform tool and hypothesised that we could probably run the `inspectcode.sh` command in docker during the build.

Outputs the results to a specified file format (.xml or .html).


## Running in the CI pipeline

The `inspectcode` script/executable, returns a “command not found” error in the build pipeline.

** Pros: **

The command-line tools are not dependent on a specific IDE.

We could potentially have used this tool for both static-code analysis and linting. (So that we use only one tool)


** Cons: **

The command-line tools do not seem to work well on macOS/Linux.

Related Issue discussion:

    https://youtrack.jetbrains.com/issue/RSRP-466029
    https://youtrack.jetbrains.com/issue/RSRP-475696

To run the command line within a CI server, the server has to support windows and the Host OS of the container must be windows.

No explicit documentation on how to set it up in a CI pipeline.

## Using FxCop (Website)

    (Spike branch: https://github.com/LBHackney-IT/lbh-base-api/tree/add-static-code-analysis-to-ci-pipeline)

** Running locally **

This can be added to the project as a NuGet package.

Hypothesis: FxCop runs code analysis when the project is built. So adding the FxCop NuGet package should allow us to run this locally and adding properties on the relevant project should cause this build to fail if there are any issues.


Setting up the failures for specific errors should be possible by adding the relevant setting to the .editorConfig file and to the project’s .csproj file.

Outputs warnings and errors after building the project in the respective code editor.

** Running in the CI pipeline: **

Since the analyser runs when the project is built, it runs as part of the build stage of the pipeline and uses the same settings for running the analyser locally.

  The warnings messages could be suppressed from showing in the build pipeline by setting: `dotnet_analyzer_diagnostic.severity = none` in the .editorConfig file.

  You can also add:

              <CodeAnalysisTreatWarningsAsErrors>false</CodeAnalysisTreatWarningsAsErrors>

to the relevant project’s .csproj file.

    Any errors that we want the build to fail on could be set by:
              `dotnet_diagnostic.<category or ruleId>.severity = error`

** Pros: **

Simple to set up

Installation of NuGet package

Setup analyser settings in the .editorConfig and in the project file

No changes to current CI config needed.

** Cons: **

Depending on the volume of errors and the specificity of the errors we want to surface, this may require adding a lot of lines of code to the .editorConfig file.

Doesn’t seem to be an auto-correct function but this wasn’t explored much for this spike.

No explicit documentation on how to set it up in a CI pipeline.


** (At the time of the Spike) FxCop warnings found in the Base API and Test Project: **

** FxCop Error categories we have decided to NOT suppress: **

- CA1707: Identifiers should not contain underscores

- CA1052: Static holder types should be Static or NotInheritable

- CA1307: Specify StringComparison

- CA1822: Mark members as static

- CA1001: Types that own disposable fields should be disposable

- CA1823: Avoid unused private fields

- CA1051: Do not declare visible instance fields


** FxCop Error Categories we have decided to suppress: **

- CA1032: Implement standard exception constructors

- CA1062: Validate arguments of public methods

- CA1303: Do not pass literals as localized parameters
