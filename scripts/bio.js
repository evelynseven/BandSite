let formEl = document.querySelector(".comments__form");

let commentsContainerEl = document.createElement("div");
formEl.appendChild(commentsContainerEl);

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

function dynamicTS(dateString, currentTimestamp) {
  let dynamicTimestamp;

  let timestamp = new Date(dateString);
  date = timestamp.getDate();
  month = timestamp.getMonth() + 1;
  year = timestamp.getFullYear();

  const timeDifference = Math.abs(currentTimestamp - timestamp);
  const yearsDifference =
    currentTimestamp.getFullYear() - timestamp.getFullYear();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const monthsDifference = Math.floor(daysDifference / 30);
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesDifference = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

  if (daysDifference < 365) {
    if (daysDifference > 30) {
      dynamicTimestamp = `${monthsDifference} months ago`;
    } else if (daysDifference > 1) {
      dynamicTimestamp = `${daysDifference} days ago`;
    } else {
      if (minutesDifference > 60) {
        dynamicTimestamp = `${hoursDifference} hours ago`;
      } else {
        if (secondsDifference > 60) {
          dynamicTimestamp = `${minutesDifference} minutes ago`;
        } else {
          dynamicTimestamp = `${secondsDifference} seconds ago`;
        }
      }
    }
  } else {
    dynamicTimestamp = `${yearsDifference} years ago`;
  }

  return dynamicTimestamp;
}

function renderAllComments(comments) {
  for (let i = 0; i < comments.length; i++) {
    let iterator = comments[i];

    //create a divideLineTop if it's the first item in the array
    if (i === 0) {
      let divideLineTopEl = document.createElement("div");
      divideLineTopEl.classList.add("comments__divide-line");
      commentsContainerEl.appendChild(divideLineTopEl);
    }

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
    //get the current time, and call the dynamicTS function
    timeStampEl.innerText = dynamicTS(iterator.timeStamp, new Date());
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

renderAllComments(comments);

let avatar = document.querySelector(".comments__current-user-img");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let avatar = document.getElementById("comments__current-user-img");
  let avatarSrc = avatar.getAttribute("src");

  let userName = e.target.userName.value;
  let userComment = e.target.userComment.value;

  let nameInputEl = e.target.userName;
  let commentInputEl = e.target.userComment;

  if (userName.trim() !== "" && userComment.trim() !== "") {
    let commentTimeStamp = new Date();
    let second, minute, hour, date, month, year;
    second = commentTimeStamp.getSeconds();
    minute = commentTimeStamp.getMinutes();
    hour = commentTimeStamp.getHours();
    date = commentTimeStamp.getDate();
    month = commentTimeStamp.getMonth() + 1;
    year = commentTimeStamp.getFullYear();

    let commentDate = `${month}/${date}/${year} ${hour}:${minute}:${second}`;

    comments.unshift({
      avatar: avatarSrc,
      userName: userName,
      comment: userComment,
      timeStamp: commentDate,
    });

    commentsContainerEl.innerHTML = "";
    renderAllComments(comments);

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
