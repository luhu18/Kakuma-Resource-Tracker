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

// initializing javascript to operate on the DOM

function init() {
    renderREsources();
    bindEvents();
    updateCounter();
};[]

//binding events to the DOM elements
function bindEvents(){
    form.addEventListener("submit", handleFormSubmit);
    resourceList.addEventListener("click", handleDelete);
    resourceList.addEventListener("dragover", hundleRspuraceClick);
    resourceList.addEventListener("click", );
    searchInput.addEventListener("input", handleSearch);
    filterbutton.forEach((btn)=> {
        button.addEventListener("click", handleFilter);
    });

    //handling events
function handleFormSubmit(e) {
    e.preventDefault();
}
    const formData = new FormData(form);
    const resource = {
        id: Date.now().toString(),
        dateAdded: new Date().toLocaleDateString(),
        name: formData.get("resourceName").trim(),
        type: formData.get("resourceType"),};
    
if(validateForm(resource)){
    addresource(resource);
    form.reset();
    clearError();
}
};[];
//implemting form validation
function validateForm(resource) {
    if (!resource.name) {
        showError("Resource name is required.");
        return false;
    }
    if (!resource.type) {
        showError("Resource type is required.");
        return false;
    }
  if(!resource.loction){
    showError("Resource name is required.");
        return false;
  }
  return true
};

function showError(elementId,massege){
    const errorElement= document.getElementById(elementId);
    errorElement.textContent=message;
}
function clearError(elementId){
    const errorElement= document.getElementById(elementId);
    errorElement.textContent="";
};