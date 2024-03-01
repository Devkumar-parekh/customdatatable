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
    useref: null, // Add your actual useref value
    printOption: true,
    pdfOption: false,
    isResponsive: true,
    TableBody: tableBody,
    TableHead: storeDataHead,
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

## TableHead

const TableHead = [
{ prop: 'key1', title: 'Title1' },
{ prop: 'key2', title: 'Title2' },
{ prop: 'key3', title: 'Title3' },
...
]
