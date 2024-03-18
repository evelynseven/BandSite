let formEl = document.querySelector(".comments__form");

let commentsContainerEl = document.createElement("div");
formEl.appendChild(commentsContainerEl);

function dynamicTS(commentTimestamp, currentTimestamp) {
  let dynamicTimestamp;

  let commentTime = new Date(commentTimestamp);
  let currentTime = new Date(currentTimestamp);

  const yearsDifference = Math.abs(
    currentTime.getFullYear() - commentTime.getFullYear()
  );
  const monthsDifference = Math.abs(
    currentTime.getMonth() - commentTime.getMonth()
  );
  const daysDifference = Math.abs(
    currentTime.getDate() - commentTime.getDate()
  );
  const hoursDifference = Math.abs(
    currentTime.getHours() - commentTime.getHours()
  );
  const minutesDifference = Math.abs(
    currentTime.getMinutes() - commentTime.getMinutes()
  );
  const secondsDifference = Math.abs(
    currentTime.getSeconds() - commentTime.getSeconds()
  );

  if (yearsDifference < 1) {
    if (monthsDifference < 1) {
      if (daysDifference < 1) {
        if (hoursDifference < 1) {
          if (minutesDifference < 1) {
            dynamicTimestamp = `${secondsDifference} seconds ago`;
          } else {
            dynamicTimestamp = `${minutesDifference} minutes ago`;
          }
        } else {
          dynamicTimestamp = `${hoursDifference} hours ago`;
        }
      } else {
        dynamicTimestamp = `${daysDifference} days ago`;
      }
    } else {
      dynamicTimestamp = `${monthsDifference} months ago`;
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
      let divideLineTopEl = document.createElement("hr");
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
    userNameEl.innerText = iterator.name;
    //get the current time, and call the dynamicTS function
    timeStampEl.innerText = dynamicTS(iterator.timestamp, new Date());
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
    let divideLineEl = document.createElement("hr");
    divideLineEl.classList.add("comments__divide-line");
    commentsContainerEl.appendChild(divideLineEl);
  }
}

let comments = [];
bandSiteApi.getComments().then((data) => {
  comments = data.sort((a, b) => b.timestamp - a.timestamp);
  renderAllComments(comments);
});

let avatar = document.querySelector(".comments__current-user-img");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = e.target.userName.value;
  let userComment = e.target.userComment.value;

  let nameInputEl = e.target.userName;
  let commentInputEl = e.target.userComment;

  if (userName.trim() !== "" && userComment.trim() !== "") {
    const newComment = {
      name: userName,
      comment: userComment,
    };

    bandSiteApi
      .postComment(newComment)
      .then(() => {
        return bandSiteApi.getComments();
      })
      .then((data) => {
        commentsContainerEl.innerHTML = "";
        comments = data.sort((a, b) => b.timestamp - a.timestamp);
        console.log(comments);
        renderAllComments(comments);

        nameInputEl.value = "";
        commentInputEl.value = "";
      });
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
