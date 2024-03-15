const showsEl = document.querySelector(".shows__shows-container");

const showsContainerEl = document.createElement("div");
showsEl.appendChild(showsContainerEl);

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
  dateEl.innerText = iterator.date;
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
  venueEl.innerText = iterator.venue;
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

let showboxs = document.querySelectorAll(".shows__show-box");

//register click events
for (let iterator of showboxs) {
  iterator.addEventListener("click", () => {
    for (let showbox of showboxs) {
      showbox.classList.remove("shows__show-box--selected");
    }
    iterator.classList.toggle("shows__show-box--selected");
  });
}
