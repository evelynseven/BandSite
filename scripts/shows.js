//get parent container
const showsEl = document.querySelector(".shows__shows-container");

//add shows container
const showsContainerEl = document.createElement("div");
showsEl.appendChild(showsContainerEl);

//define the shows array
const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

//populate the shows
for (const iterator of shows) {
  //create the show box
  let showBoxEl = document.createElement("div");
  showBoxEl.classList.add("shows__show-box");
  showsContainerEl.appendChild(showBoxEl);

  //create the outer container
  let outerContainerEl = document.createElement("div");
  outerContainerEl.classList.add("shows__outer-container");
  showBoxEl.appendChild(outerContainerEl);

  //create the inner container1
  let dataContainer1El = document.createElement("div");
  dataContainer1El.classList.add("shows__data-container");
  outerContainerEl.appendChild(dataContainer1El);

  //create elements
  let dateLabelEl = document.createElement("label");
  dateLabelEl.innerText = "date";
  dateLabelEl.classList.add("label");
  dateLabelEl.classList.add("shows__mobile-label");
  dataContainer1El.appendChild(dateLabelEl);

  let dateEl = document.createElement("p");
  dateEl.innerText = iterator.date;
  dateEl.classList.add("shows__show-date");
  dateEl.classList.add("shows__show-data");
  dataContainer1El.appendChild(dateEl);

  //create the inner container2
  let dataContainer2El = document.createElement("div");
  dataContainer2El.classList.add("shows__data-container");
  outerContainerEl.appendChild(dataContainer2El);

  let venueLabelEl = document.createElement("label");
  venueLabelEl.innerText = "venue";
  venueLabelEl.classList.add("label");
  venueLabelEl.classList.add("shows__mobile-label");
  dataContainer2El.appendChild(venueLabelEl);

  let venueEl = document.createElement("p");
  venueEl.innerText = iterator.venue;
  venueEl.classList.add("shows__show-data");
  dataContainer2El.appendChild(venueEl);

  //create the inner container3
  let dataContainer3El = document.createElement("div");
  dataContainer3El.classList.add("shows__data-container");
  outerContainerEl.appendChild(dataContainer3El);

  let locationLabelEl = document.createElement("label");
  locationLabelEl.innerText = "location";
  locationLabelEl.classList.add("label");
  locationLabelEl.classList.add("shows__mobile-label");
  dataContainer3El.appendChild(locationLabelEl);

  let locationEl = document.createElement("p");
  locationEl.innerText = iterator.location;
  locationEl.classList.add("shows__show-data");
  dataContainer3El.appendChild(locationEl);

  //create the button
  const buttonEl = document.createElement("button");
  buttonEl.innerText = "buy tickets";
  buttonEl.classList.add("button");
  buttonEl.classList.add("shows__button");
  outerContainerEl.appendChild(buttonEl);
}
