"use client";
import * as React from "react";
import { ReactNode } from "react";

// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useMemo, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export type PropsType = {
  Pagination: "false" | "true";
  TableBody: any[]; // Change 'any' to the actual type of your TableBody items
  TableHead: any[]; // Change 'any' to the actual type of your TableHead
  SearchFilter: "false" | "true";
  classes: string;
  recordPerPageProp: number | string;
  id: string;
  useref: any; // Change 'any' to the actual type of your useref
  printOption: boolean;
  pdfOption: boolean;
  isResponsive: boolean;
};

const CustomDatatable = ({
  Pagination = "false",
  TableBody = [],
  TableHead,
  SearchFilter = "false",
  classes = "",
  recordPerPageProp = 50,
  id = "1",
  // id = new Date().getTime().toString().substr(-3, 3),
  useref,
  printOption = true,
  pdfOption = false,
  isResponsive = true,
}: PropsType) => {
  id = new Date().getTime().toString();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // const [RecordPerPage, setRecordPerPage] = useState<number | string>(recordPerPageProp);
  const [RecordPerPage, setRecordPerPage] = useState<number | string>(
    recordPerPageProp
  );

  const [pageNumber, setpageNumber] = useState(1);
  const [BodyState, setBodyState] = useState(TableBody);
  // let BodyState = TableBody;

  useEffect(() => {
    setBodyState(TableBody);
  }, [TableBody]);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  // useEffect(() => {
  //   setBodyState(TableBody);
  // }, []);

  // TableBody
  //   const [sortedby, setSortedby] = useState(true);

  interface SorterProps {
    rel: {
      prop: string;
      isDate: boolean;
      title: string;
    };
  }
  const [sortedBy, setSortedBy] = useState<boolean>(false);
  const Sorter: React.FC<SorterProps> = ({ rel }) => {
    return (
      <>
        <div className="d-flex ">
          <span
            className="align-self-center "
            // onClick={() => sortHandler(rel.prop, rel.isDate)}
            onClick={() => {
              type SortParams = [string, boolean];
              const sortParams: SortParams = rel.isDate
                ? [rel.prop, true]
                : [rel.prop, false];
              const sortFunction = sortedBy ? updateSortBy : updateUnSortBy;
              sortFunction(...sortParams);
              setSortedBy((prev) => !prev);
            }}
          >
            {rel.title}
          </span>
          <div className="d-flex flex-column sort-btn ms-1">
            <div
              className="caret-up"
              onClick={() => {
                type SortParams = [string, boolean];
                const sortParams: SortParams = rel.isDate
                  ? [rel.prop, true]
                  : [rel.prop, false];
                const sortFunction = sortedBy ? updateSortBy : updateUnSortBy;
                sortFunction(...sortParams);
                setSortedBy(false);
              }}
              style={{
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderBottom: `8px solid ${"black"}` /* Change color as needed */,
                cursor: "pointer",
                display: "inline-block",
                margin: "2px",
              }}
            ></div>

            <div
              className="caret-down"
              style={{
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: `8px solid ${"black"}` /* Change color as needed */,
                cursor: "pointer",
                display: "inline-block",
                margin: "2px",
              }}
              onClick={() => {
                type SortParams = [string, boolean];
                const sortParams: SortParams = rel.isDate
                  ? [rel.prop, true]
                  : [rel.prop, false];
                const sortFunction = sortedBy ? updateSortBy : updateUnSortBy;
                sortFunction(...sortParams);
                setSortedBy(true);
              }}
            ></div>
          </div>
        </div>
      </>
    );
  };

  // const updateSearch = (e) => {
  //   // const filters = TableHead.filter((val) => {
  //   //   if (val?.isFilterable) {
  //   //     return val.prop;
  //   //   }
  //   // });
  //   const filters = TableHead;
  //   const temp = TableBody?.filter((val) => {
  //     if (
  //       Object.values(val).some((cell) => {
  //         if (typeof cell == "string") {
  //           if (cell.toLowerCase().includes(e.target.value.toLowerCase())) {
  //             return true;
  //           }
  //         }
  //         if (typeof cell == "number") {
  //           if (
  //             cell
  //               .toString()
  //               .toLowerCase()
  //               .includes(e.target.value.toLowerCase())
  //           ) {
  //             return true;
  //           }
  //         }
  //       })
  //     ) {
  //       return true;
  //     }
  //   });
  //   //=============================Don't remove this code (It is alter.)===================================
  //   //     if (
  //   //       filters.some((item) => {
  //   //         if (typeof val[[item.prop]] == "string") {
  //   //           if (
  //   //             val[[item.prop]]
  //   //               .toLowerCase()
  //   //               .includes(e.target.value.toLowerCase())
  //   //           ) {
  //   //             return true;
  //   //           }
  //   //         } else {
  //   //           if (typeof val[[item.prop]] == "number") {
  //   //             if (
  //   //               val[[item.prop]]
  //   //                 .toString()
  //   //                 .toLowerCase()
  //   //                 .includes(e.target.value.toLowerCase())
  //   //             ) {
  //   //               return true;
  //   //             }
  //   //           }
  //   //         }
  //   //       })
  //   //     ) {
  //   //       return val;
  //   //     }
  //   // });
  //   //================================================================

  //   setBodyState(temp);
  //   setpageNumber(1);
  // };

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const filters = TableHead;
    const temp = TableBody?.filter((val) => {
      if (
        Object.values(val).some((cell) => {
          if (typeof cell === "string") {
            if (cell.toLowerCase().includes(e.target.value.toLowerCase())) {
              return true;
            }
          }
          if (typeof cell === "number") {
            if (
              cell
                .toString()
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            ) {
              return true;
            }
          }
        })
      ) {
        return true;
      }
    });

    setBodyState(temp || []);
    setpageNumber(1);
  };
  const updateSortBy = (sortBy: string, isDate: boolean = false): void => {
    setBodyState((prev) => {
      return [
        ...prev.sort((a, b) => {
          const compareValue = isDate
            ? (new Date(a[sortBy]) as any) - (new Date(b[sortBy]) as any)
            : (a[sortBy] as any) - (b[sortBy] as any);

          return compareValue;
        }),
      ];
    });
  };

  const updateUnSortBy = (sortBy: any, isDate: boolean = false): void => {
    setBodyState((prev) => [
      ...prev.sort((a, b) => {
        const compareValue = isDate
          ? (new Date(b[sortBy]) as any) - (new Date(a[sortBy]) as any)
          : (b[sortBy] as any) - (a[sortBy] as any);

        return compareValue;
      }),
    ]);
  };

  function tableToExcel(
    table: HTMLElement | string,
    name: string,
    filename: string
  ): void {
    const uri = "data:application/vnd.ms-excel;base64,";
    const template =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><title></title><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>';

    const base64 = function (s: string): string {
      // return window.btoa(decodeURIComponent(encodeURIComponent(s)));
      return window.btoa(s);
    };

    const format = function (s: string, c: { [key: string]: string }): string {
      return s.replace(/{(\w+)}/g, function (m, p) {
        return c[p];
      });
    };

    let tableElement: HTMLElement | null = null;

    if (typeof table === "string") {
      tableElement = document.getElementById(table);
    } else {
      tableElement = table;
    }

    if (tableElement) {
      const ctx = {
        worksheet: name || "Worksheet",
        table: tableElement.innerHTML,
      };
      const link = document.createElement("a");
      link.download = filename;
      link.href = uri + base64(format(template, ctx));
      link.click();
    }
  }

  if (TableBody?.length > 0 && isClient) {
    return (
      <div className="">
        <div className="row my-2">
          <>
            {Pagination === "true" && (
              <div className="col">
                <div className=" " style={{ width: "max-content" }}>
                  Post Per Page:
                  <span>
                    <select
                      className="form-select"
                      style={{ width: "max-content" }}
                      onChange={(e) => {
                        setRecordPerPage(e.target.value);
                        setpageNumber(1);
                      }}
                      defaultValue={
                        recordPerPageProp === "all" ? "all" : recordPerPageProp
                      }
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="all">All</option>
                    </select>
                  </span>
                </div>
              </div>
            )}

            <div className="col "></div>
            <div className="col">
              <div className="d-flex ms-auto" style={{ width: "max-content" }}>
                {SearchFilter == "true" && SearchFilter == "true" && (
                  <>
                    {/* <span>Search by </span>
                {TableHead.map((val, index) => {
                  if (val?.isFilterable)
                    return <span key={index}>{val.title} </span>;
                })} */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      style={{ width: "max-content" }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        updateSearch(e);
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </>
        </div>
        <div
          className={
            isResponsive ? "table-responsive isResponsive" : "not Responsive"
          }
          style={{
            maxHeight: printOption ? "90vh" : "",
            overflow: isResponsive ? "auto" : "",
          }}
        >
          <table
            // className={`table ${classes}`}
            className={`table-bordered tableToPrint table`}
            id={`${id}_table`}
            ref={useref}
          >
            <thead
              className="bg-primary text-light"
              style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
              }}
            >
              <tr>
                {TableHead?.map((val, index) => {
                  if (val.prop !== "") {
                    return (
                      <th key={index}>
                        <div className="d-flex">
                          <Sorter rel={val} />
                        </div>
                      </th>
                    );
                  }
                  return null;
                })}
              </tr>
            </thead>

            <tbody>
              {(Pagination === "false" || RecordPerPage === "all"
                ? BodyState
                : BodyState?.slice(
                    (pageNumber - 1) * (+RecordPerPage as number),
                    pageNumber * (+RecordPerPage as number)
                  )
              )?.map((row, index) => {
                const tempId = index;
                return (
                  <tr key={index}>
                    {TableHead?.map((col, colIndex) => {
                      if (col?.prop !== "") {
                        return (
                          <td key={colIndex}>
                            {col?.prop !== "customCell"
                              ? typeof row[col?.prop] !== "object"
                                ? row[col?.prop]
                                : ""
                              : col?.cell?.({ ...row, customDataId: tempId })}
                          </td>
                        );
                      }
                      return null;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* {BodyState.length == 0 && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )} */}
        </div>
        {/* setpageNumber */}
        {Pagination === "true" && RecordPerPage !== "all" && (
          <div
            className="btn-group btn-group-sm my-2"
            role="group"
            aria-label="..."
            style={{ width: "max-content" }}
          >
            <button
              className="btn btn-secondary"
              disabled={pageNumber === 1}
              onClick={() => setpageNumber(pageNumber - 1)}
            >
              Prev
            </button>
            <button className="btn btn-secondary">
              Page {pageNumber} of{" "}
              {Math.ceil(BodyState?.length / (+RecordPerPage as number))}
            </button>
            <button
              className="btn btn-secondary"
              disabled={
                pageNumber ===
                Math.ceil(BodyState?.length / (+RecordPerPage as number))
              }
              onClick={() => setpageNumber(pageNumber + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};
export { CustomDatatable };
