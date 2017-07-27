# Section csv
These files define the fields that must be filled in

## Columns
1. pdf field
1. label / query
1. datatype
1. additional information

## Datatype
The following options are available for data types

1. text - text input will be used
1. boolean - checkbox will be used
1. date - date input will be used
1. time - time input will be used
1. number - number input will be used
1. memo - textarea will be used
1. detail - shows pragma-details allowing multiple inputs
1. conditional - by default this is a boolean and thus checkbox
1. heading - show a heading element 
1. group - group the items defined below in a group
1. endgroup - stop using groups as the container and now use the page again so that the next items are not in a group

## detail
when using the detail data type you need to provide the section id to use as the input template.
the section id is defined in the additional information column, see example below

## conditional
when using conditional data type you need to provide the section id to use if the checkbox is checked.
this section will then become part of the sequance of sections you need to fill in.

## Example
field1;Section B;boolean;	
field2;Section C;boolean;	
field3;Details1;detail;2
field4;Section D;conditional;3
field5;@wo.code
field6;@wo.sitecode
unique:@wo.code @datenow                "R00100 12/01/2021 00:12:23"