import "./body.css";
import $ from "jquery";
import _ from "lodash";

$("body").append("<button>Click here to get started</button>");
$("body").append('<p id="count"></p>');

const updateCounter = () => {
  let times = $("#count").text() || 0;
  $("button").on("click", () => {
    times++;
    $("#count").text(`${times} clicks on the button`);
  });
};

$("button").on("click", _.debounce(updateCounter, 500));
