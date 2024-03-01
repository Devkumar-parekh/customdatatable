# customdatatable

## Description

Custom Datatable is a versatile React component that provides powerful functionality for managing and displaying tabular data. It includes features such as searching, sorting, pagination, and the ability to use custom cells for enhanced customization.

## Installation

You can install the package via npm:

```bash
npm i customdatatable

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

Searching: Easily search through the table data.
Sorting: Click on column headers to sort data in ascending or descending order.
Pagination: Navigate through pages of data.
Custom Cells: Use custom cells to display data in a way that suits your application.

## Props

Pagination: "true" or "false" - Enable or disable pagination.
TableBody: Array of objects - Your tabular data.
TableHead: Array of objects - Configuration for table headers.
SearchFilter: "true" or "false" - Enable or disable the search filter.
classes: String - Custom CSS classes for styling.
recordPerPageProp: Number or "all" - Number of records per page or show all records.
id: String - Identifier for the datatable.
useref: Ref object - Reference to the datatable.
printOption: Boolean - Enable or disable printing option.
pdfOption: Boolean - Enable or disable exporting to PDF.
isResponsive: Boolean - Enable or disable responsive design.

## TableHead

const TableHead = [
{ prop: 'key1', title: 'Title1' },
{ prop: 'key2', title: 'Title2' },
{ prop: 'key3', title: 'Title3' },
...
]
