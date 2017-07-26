# section-landing.csv
This file defines sections and details about sections that may display on the landing screen of the client  
This file is a comma seperated file and the sequance of the columns are important

## Columns and sequances
1. id   - unique number that is used to identify this section
1. name - print name for this section
1. description - description of what this section does
1. csv file that describes the content of the section - filename assuming Form-Data as the root
1. pdf file used for the stiching process - filename assuming Form-Data as the root
1. options - defines additional information about this section
1. options parameter - define additional properties for a parameter type such as conditional query.

## States
These are the possible options to use in the state column

1. required - this section is on the menu but is selected by default and will always be filled in
1. false - does not show on on landing page but is available for conditional use
1. true - is on landing page

## Conditional Queries
For options "true" and "false" you can define a option parameter that is a conditional query.
This query defines if infact the section is available. If the query does not pass, regardless if the option is true or false,
it is not available for use.

If the conditional query passes and the option is true the item wil show on menu.
If the conditional query passes but the option is false then is available for conditional use but not on the menu.

## Example
1;Section A;Some Desc;SectionA.csv;SectionA.pdf;REQUIRED;	
2;Section B;Some Desc;SectionB.csv;SectionB.pdf;FALSE;	
3;Section C;Some Desc;SectionC.csv;SectionC.pdf;FALSE;@wo.site.code=“A11”
4;Section D;Some Desc;SectionD.csv;SectionD.pdf;TRUE;@wo.site.code=“A11”
5;Section E;Some Desc;SectionE.csv;SectionD.pdf;FALSE;	