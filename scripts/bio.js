//get the form container
const formEl = document.querySelector(".comments__form");

//add comments container
const commentsContainerEl = document.createElement("div");
formEl.appendChild(commentsContainerEl);

//define the comments array
let comments = [
  {
    userName: "Victor Pinto",
    avatar: "",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    timeStamp: "11/02/2023",
  },
  {
    userName: "Christina Cabrera",
    avatar: "",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    timeStamp: "10/28/2023",
  },
  {
    userName: "Isaac Tadesse",
    avatar: "",
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
function renderAllComments(comments) {
  for (let iterator of comments) {
    //create the comment box
    let commentBoxEl = document.createElement("div");
    commentBoxEl.classList.add("comments__form-content-box");
    commentsContainerEl.appendChild(commentBoxEl);

    //create the avatar
    let avatarEl = document.createElement("div");
    avatarEl.classList.add("comments__default-user-img");
    avatarEl.style.backgroundImage = `url("${iterator.avatar}")`;
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
}

//pupolate the comments
renderAllComments(comments);

let avatar = document.querySelector(".comments__current-user-img");

//register the form submit event
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  //get the avatar
  let avatar = document.querySelector(".comments__current-user-img");
  let avatarSrc = avatar.getAttribute("src");

  //get the name, comment, date
  let userName = e.target.userName.value;
  let userComment = e.target.userComment.value;

  //get the input boxes
  let nameInputEl = e.target.userName;
  let commentInputEl = e.target.userComment;

  if (userName.trim() !== "" && userComment.trim() !== "") {
    //clear the data
    commentsContainerEl.innerHTML = "";

    //get comment timestamp
    let commentTimeStamp = new Date();
    let day, month;
    if (commentTimeStamp.getDate() < 10) {
      day = "0" + commentTimeStamp.getDate();
    } else {
      day = commentTimeStamp.getDate();
    }
    if (commentTimeStamp.getMonth() + 1 < 10) {
      month = "0" + (commentTimeStamp.getMonth() + 1);
    } else {
      month = commentTimeStamp.getMonth() + 1;
    }

    let commentDate = `${month}/${day}/${commentTimeStamp.getFullYear()}`;

    // update the comments array
    comments.unshift({
      avatar: avatarSrc,
      userName: userName,
      comment: userComment,
      timeStamp: commentDate,
    });

    //re-render the data
    renderAllComments(comments);

    //clear the form
    nameInputEl.value = "";
    commentInputEl.value = "";
  } else {
    if (userName.trim() === "") {
      nameInputEl.classList.add("comments__name-input--error");
    } else {
      nameInputEl.classList.remove("comments__comment--error");
    }
    if (userComment.trim() === "") {
      commentInputEl.classList.add("comments__comment--error");
    } else {
      nameInputEl.classList.remove("comments__comment--error");
    }

    nameInputEl.addEventListener("blur", (e) => {
      userName = e.target.value;
      if (userName.trim() === "") {
        nameInputEl.classList.add("comments__name-input--error");
      } else {
        nameInputEl.classList.remove("comments__name-input--error");
      }
    });

    commentInputEl.addEventListener("blur", (e) => {
      userComment = e.target.value;
      if (userComment.trim() === "") {
        commentInputEl.classList.add("comments__comment--error");
      } else {
        commentInputEl.classList.remove("comments__comment--error");
      }
    });
  }
});
