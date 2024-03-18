const showsEl = document.querySelector(".shows__shows-container");

const showsContainerEl = document.createElement("div");
showsEl.appendChild(showsContainerEl);

function dateFormat(timestamp) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = date.toLocaleString("en", { month: "short" });
  const day = date.getDate();

  return `${date.toDateString().slice(0, 3)} ${month} ${day} ${year}`;
}

function renderShows(shows) {
  for (const iterator of shows) {
    let index = 0;
    let showBoxEl = document.createElement("div");
    showBoxEl.classList.add("shows__show-box");
    showsContainerEl.appendChild(showBoxEl);

    let dataContainer1El = document.createElement("div");
    dataContainer1El.classList.add("shows__data-container");
    dataContainer1El.classList.add("shows__date-wrapper");
    showBoxEl.appendChild(dataContainer1El);

    let dateLabelEl = document.createElement("label");
    dateLabelEl.innerText = "date";
    dateLabelEl.classList.add("shows__mobile-label");
    dataContainer1El.appendChild(dateLabelEl);

    let dateEl = document.createElement("p");
    //call dateFormat function
    dateEl.innerText = dateFormat(iterator.date);
    dateEl.classList.add("shows__show-date");
    dataContainer1El.appendChild(dateEl);

    let dataContainer2El = document.createElement("div");
    dataContainer2El.classList.add("shows__data-container");
    showBoxEl.appendChild(dataContainer2El);

    let venueLabelEl = document.createElement("label");
    venueLabelEl.innerText = "venue";
    venueLabelEl.classList.add("shows__mobile-label");
    dataContainer2El.appendChild(venueLabelEl);

    let venueEl = document.createElement("p");
    venueEl.innerText = iterator.place;
    dataContainer2El.appendChild(venueEl);

    let dataContainer3El = document.createElement("div");
    dataContainer3El.classList.add("shows__data-container");
    showBoxEl.appendChild(dataContainer3El);

    let locationLabelEl = document.createElement("label");
    locationLabelEl.innerText = "location";
    locationLabelEl.classList.add("shows__mobile-label");
    dataContainer3El.appendChild(locationLabelEl);

    let locationEl = document.createElement("p");
    locationEl.innerText = iterator.location;
    dataContainer3El.appendChild(locationEl);

    const buttonEl = document.createElement("button");
    buttonEl.innerText = "buy tickets";
    buttonEl.classList.add("button");
    buttonEl.classList.add("shows__button");
    showBoxEl.appendChild(buttonEl);

    index++;
  }
}

let shows = [];
bandSiteApi.getShows().then((data) => {
  shows = data;
  renderShows(shows);

  let showboxs = document.querySelectorAll(".shows__show-box");
  for (let iterator of showboxs) {
    iterator.addEventListener("click", () => {
      for (let showbox of showboxs) {
        showbox.classList.remove("shows__show-box--selected");
      }
      iterator.classList.add("shows__show-box--selected");
    });
  }
});
