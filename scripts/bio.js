//get parent container
const formEl = document.querySelector(".comments__form");

//add comments container
const commentsContainerEl = document.createElement("div");
formEl.appendChild(commentsContainerEl);

//define the comments array
const comments = [
  {
    userName: "Victor Pinto",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    timeStamp: "11/02/2023",
  },
  {
    userName: "Christina Cabrera",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    timeStamp: "10/28/2023",
  },
  {
    userName: "Isaac Tadesse",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    timeStamp: "10/20/2023",
  },
];

//create the line above the comment
let divideLineEl = document.createElement("div");
divideLineEl.classList.add("comments__divide-line");
commentsContainerEl.appendChild(divideLineEl);

//create the function that populates the comments

for (let iterator of comments) {
  //create the comment box
  let commentBoxEl = document.createElement("div");
  commentBoxEl.classList.add("comments__form-content-box");
  commentsContainerEl.appendChild(commentBoxEl);

  //create the avatar
  let avatarEl = document.createElement("div");
  avatarEl.classList.add("comments__default-user-img");
  commentBoxEl.appendChild(avatarEl);

  //create the info box
  let infoBoxEl = document.createElement("div");
  infoBoxEl.classList.add("comments__form-input-box");
  commentBoxEl.appendChild(infoBoxEl);

  //create the info's first row box
  let infoFirstRowEl = document.createElement("div");
  infoFirstRowEl.classList.add("comments__info-first-row");
  infoBoxEl.appendChild(infoFirstRowEl);

  //create first row's elements
  let userNameEl = document.createElement("p");
  let timeStampEl = document.createElement("p");
  userNameEl.innerText = iterator.userName;
  timeStampEl.innerText = iterator.timeStamp;
  userNameEl.classList.add("comments__info-username");
  timeStampEl.classList.add("comments__info-timestamp");
  infoFirstRowEl.appendChild(userNameEl);
  infoFirstRowEl.appendChild(timeStampEl);

  //create second row's element
  let commentEl = document.createElement("p");
  commentEl.innerText = iterator.comment;
  commentEl.classList.add("comments__info-second-row");
  infoBoxEl.appendChild(commentEl);

  //create the line below the comment
  let divideLineEl = document.createElement("div");
  divideLineEl.classList.add("comments__divide-line");
  commentsContainerEl.appendChild(divideLineEl);
}
