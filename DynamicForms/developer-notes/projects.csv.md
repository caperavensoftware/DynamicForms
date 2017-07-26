# projects.csv
This defines projects and the conditions when a project is relevant.
When a project file only contains one project it is always relevant.

When you define more than one project the defined section will load for the project that passes the selection query.

## Columns
1. name
1. pdf name that will be generated
1. csv file that defines the section landing page
1. condition to determine when this project must be used.

## Example
Shell;shell.pdf;shell.csv;@wo.site.code="A11"
Engine;engine.pdf;engine.csv;@wo.site.code="A12"