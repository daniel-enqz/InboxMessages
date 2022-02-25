/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  const value1 = Math.random() * (10 - 1) + 1;
  return value1 <= 2;
};

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  const array = [{
    sender: 'GitHub Team',
    subject: 'Welcome to GitHub'
  },
  {
    sender: 'Arnold Schwarzenegger',
    subject: "I'm Back"
  }];
  const object = array[Math.floor(Math.random() * array.length)];
  return object;
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const object = Object.values(message);
  const list = document.querySelector('#inbox');
  list.insertAdjacentHTML('afterbegin', `<div class="row message unread">
  <div class="col-3">${object[0]}</div>
  <div class="col-9">${object[1]}</div>
  </div>`);
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage()) {
    appendMessageToDom(newMessage());
    const count = document.querySelector('#count');
    const countUnread = document.querySelectorAll('#inbox .unread');
    count.innerText = `(${countUnread.length})`;
  }
};

// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
