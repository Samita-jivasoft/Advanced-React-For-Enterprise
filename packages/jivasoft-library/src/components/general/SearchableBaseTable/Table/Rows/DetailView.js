import React from "react";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimesCircle } from "react-icons/fa";
import { useLists } from "../../data";
import { useAppTheme, useViewport } from "app/data";
import { RowActions } from "./RowActions";
import { useList } from "../../data";
import {
  DetailViewBody,
  DetailViewContainer,
  DetailViewHeader,
} from "./styles";
import { Layout } from "../../../Layout";
import { css } from "styled-components";

export const DetailView = (props) => {
  const [themeState] = useAppTheme();
  const [collapse, setCollapse] = useState(false);
  const { viewWidth, viewHeight } = useViewport();
  const [listState, listDispatch] = useList();
  const [listsState, listsDispatch] = useLists();

  // get current FormElements based on listState.detailview that changes based on row clicked
  const [formElements, setFormElements] = useState([]);
  useEffect(() => {
    const formelements = [];
    // console.log(listState.detailview.detail)
    if (listState?.detailview?.detail) {
      Object?.entries(listState?.detailview?.detail)?.map((el) =>
        listsState?.columns.map((f) => {
          if (
            el[0] === f.crudcolumnid.toLowerCase() &&
            f.iscolumn &&
            f.formelement &&
            f.formelement.length > 0
          ) {
            f.formelement[0]["defaultvalue"] = el[1];
            f.formelement[0]["canedit"] = 0;
            // f.formelement[0]['canedit'] = 0
            return formelements.push(f.formelement[0]);
          }
        })
      );
      setFormElements(formelements);
    }
  }, [listState?.detailview?.detail]);

  // needs to be a function to rerender formElements
  function FormComponent(props) {
    return (
      <Layout
        css={css`
          .FORM {
            color: ${listState.textcolor};
          }
          .scroll-to-top {
            background: ${listState.textcolor};
            color: ${listState.themecolor};
          }
          .element-body {
            color: ${listState.textcolor};
          }
        `}
        layout={"form"}
        elements={props.formElements}
      />
    );
  }

  useEffect(() => {
    if (viewWidth < 750) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [viewWidth]);

  function showDetailView() {
    return (
      listState?.detailview?.active &&
      listState?.detailview?.detail !== "" &&
      (listsState?.tolists?.length + listsState?.fromlists?.length === 1 ||
        listsState?.layout === "tabs") &&
      listState?.detailview?.detail &&
      Object?.entries(listState?.detailview?.detail)
        ?.map((el) =>
          listsState?.columns.some(
            (f) =>
              el[0] === f.crudcolumnid.toLowerCase() &&
              f.iscolumn &&
              f.formelement &&
              f.formelement.length > 0
          )
        )
        .some(Boolean)
    );
  }

  return (
    showDetailView() && (
      <DetailViewContainer
        className="container_detailview"
        themeColor={listState.themecolor}
        textColor={listState.textcolor}
        style={{
          width: collapse ? "100%" : "50%",
          height:
            document?.getElementById("table-" + listState.crudlistid)
              ?.clientHeight + "px",
          position: collapse ? "absolute" : "relative",
          right: collapse ? 0 : null,
          marginTop:
            document?.getElementById("header-" + listState.crudlistid)
              ?.clientHeight + "px",
        }}
      >
        <DetailViewHeader>
          <div
            style={{
              // border: '1px solid red',
              display: "flex",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
              paddingRight: "10px",
            }}
          >
            Detail View
          </div>
          <div
            style={{
              // border: "1px solid red",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginLeft: "auto",
              width: "100%",
            }}
          >
            <div
              style={{
                // border: "1px solid black",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                overflowX: "auto",
              }}
            >
              {/* {console.log('detailview listState', listState)} */}
              {listState?.detailview?.detail &&
                listState?.crudaction?.length > 0 &&
                Object.keys(listState?.detailview?.detail)?.length > 0 && (
                  <RowActions
                    item={listState?.detailview?.detail}
                    type="detail-view"
                  />
                )}
            </div>
            {collapse &&
              viewWidth > 750 &&
              (collapse ? (
                <FaChevronRight
                  onClick={() => setCollapse(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaChevronLeft
                  onClick={() => setCollapse(true)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            <FaTimesCircle
              size={"18px"}
              style={{ paddingLeft: "5px", cursor: "pointer" }}
              onClick={() =>
                listDispatch({
                  type: "SET_DETAIL_VIEW",
                  detailview: {
                    ...listState.detailview,
                    detail: "",
                  },
                })
              }
            />
          </div>
        </DetailViewHeader>
        <DetailViewBody textColor={listState.textcolor}>
          <FormComponent formElements={formElements} />
        </DetailViewBody>
      </DetailViewContainer>
    )
  );
};
