# customdatatabledev

## Description

Custom Datatable is a versatile React component that provides powerful functionality for managing and displaying tabular data. It includes features such as searching, sorting, pagination, and the ability to use custom cells for enhanced customization.

## Installation

You can install the package via npm:

```bash
npm i customdatatabledev
npm i bootstrap
```

```bash
import 'bootstrap/dist/css/bootstrap.min.css';


  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
```

Usage

```bash

  const tableProps: PropsType = {
    Pagination: 'false',
    SearchFilter: 'false',
    classes: '',
    recordPerPageProp: 50,
    id: '1',
    useref: null,
    printOption: true,
    pdfOption: false,
    isResponsive: true,
    TableBody: tableBody,
    TableHead: storeDataHead,
    tableClasses: 'table-dark table-hover table-striped',//you can do the changes as needed these are bootstrap classes
    theadClasses: 'table-primary',//you can do the changes as needed these are bootstrap classes
    tbodyClasses: 'table-success',//you can do the changes as needed these are bootstrap classes
  };

```

```bash

<CustomDatatable {...tableProps} />

```

## Features

Searching: Easily search through the table data.<br/>
Sorting: Click on column headers to sort data in ascending or descending order.<br/>
Pagination: Navigate through pages of data.<br/>
Custom Cells: Use custom cells to display data in a way that suits your application.<br/>

## Props

Pagination: "true" or "false" - Enable or disable pagination.<br/>
TableBody: Array of objects - Your tabular data.<br/>
TableHead: Array of objects - Configuration for table headers.<br/>
SearchFilter: "true" or "false" - Enable or disable the search filter.<br/>
classes: String - Custom CSS classes for styling.<br/>
recordPerPageProp: Number or "all" - Number of records per page or show all records.<br/>
id: String - Identifier for the datatable.<br/>
useref: Ref object - Reference to the datatable.<br/>
printOption: Boolean - Enable or disable printing option.<br/>
pdfOption: Boolean - Enable or disable exporting to PDF.<br/>
isResponsive: Boolean - Enable or disable responsive design.<br/>
tableClasses: you can do the changes as needed these are bootstrap classes<br/>
theadClasses: you can do the changes as needed these are bootstrap classes<br/>
tbodyClasses: you can do the changes as needed these are bootstrap classes<br/>

## TableHead

```bash
const TableHead = [
{ prop: 'key1', title: 'Title1' },
{ prop: 'key2', title: 'Title2' },
{ prop: 'key3', title: 'Title3' },
...
]
```

## Special Case

When you want to add some kind of inputs fields, call to actions,etc. you can do it like this.<br/>

```bash
const TableHead = [
{ prop: 'key1', title: 'Title1' },
{
      prop: 'customCell',
      title: 'Description',
      cell: (row: any): JSX.Element | null => {
        return (
          <>
            <span
              className="d-inline-block text-truncate"
              style={{ maxWidth: '300px' }}
            >
              {row?.storeDesc}
            </span>
          </>
        );
      },
    },
...
]
```

Here row will return complete object for that particular row.
For example:
tablebody -->

```bash
[{
  key1:value11,
  key2:value21,
  key3:value31,
},{
  key1:value12,
  key2:value22,
  key3:value32,
},{
  key1:value13,
  key2:value23,
  key3:value33,
}]
```

possible values for 1st row will be:

```bash
{
  key1:value11,
  key2:value21,
  key3:value31,
}
```
