window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  const containerEl = document.querySelector("#newsfeed");

  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];

    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;

    const postEl = document.createElement("div");
    postEl.innerText = post.text;
    postEl.append(friendEl);

    const timeStampEl = document.createElement("div");
    timeStampEl.innerText = post.timestamp;
    postEl.append(timeStampEl);
    containerEl.append(postEl);

    const feelingEl = document.createElement("div");
    feelingEl.innerText = post.feeling;
    postEl.append(feelingEl);

    // // 参考　https://gray-code.com/javascript/create-new-img-element/
    // // img要素を作成
    const imgEl = document.createElement('img');
    imgEl.src = `images/${post.image}`; // 画像パス
    imgEl.alt = '画像'; // 代替テキスト
    imgEl.width = 20; // 横サイズ（px）
    imgEl.height = 20; // 縦サイズ（px）
    postEl.append(imgEl); // 指定した要素にimg要素を挿入

    containerEl.append(postEl);
  }
})

function onclickSample() {
  const containerEl = document.querySelector("#newsfeed");

  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= bacefook.newsfeed.length - 1; index--) {
    const post = bacefook.newsfeed[index];

    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;

    const postEl = document.createElement("div");
    postEl.innerText = post.text;
    postEl.append(friendEl);

    const timeStampEl = document.createElement("div");
    timeStampEl.innerText = post.timestamp;
    postEl.append(timeStampEl);
    containerEl.append(postEl);


    const feelingEl = document.createElement("div");
    feelingEl.innerText = post.feeling;
    postEl.append(feelingEl);

    // // 参考　https://gray-code.com/javascript/create-new-img-element/
    // // img要素を作成
    const imgEl = document.createElement('img');
    imgEl.src = `images/${post.image}`; // 画像パス
    imgEl.alt = '画像'; // 代替テキスト
    imgEl.width = 20; // 横サイズ（px）
    imgEl.height = 20; // 縦サイズ（px）
    postEl.append(imgEl); // 指定した要素にimg要素を挿入


    // 現在の日時を取得
    var now = moment();
    console.log(now.format('YYYY年MM月DD日')); // 現在の年月日

    containerEl.append(postEl);
  }
}
;
