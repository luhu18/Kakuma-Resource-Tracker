//Dragging DOM elements for munipulation
let form = document.getElementById("resourceForm");
let resourceList = document.getElementById("resourceList");
const counter = document.getElementById("counter");
const searchInput = document.querySelector(".search-input");
const filterbutton = document.querySelectorAll(".filter-btn");

//demostrting the drag and drop functionality
let resources =JSON.parse(localStorage.getItem("resources"));
let currentfilter = "all";
let searchTerm = "";