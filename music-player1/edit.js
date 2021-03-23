(function IIFE() {
  const list = [
    {
      id: 1,
      url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_01_-_One.mp3",
      author: "Marcel Pequel",
      title: "One",
      cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg",
    },
    {
      id: 2,
      url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_02_-_Two.mp3",
      author: "Marcel Pequel",
      title: "Two",
      cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg",
    },
    {
      id: 3,
      url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_03_-_Three.mp3",
      author: "Marcel Pequel",
      title: "Three",
      cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg",
    },
    {
      id: 4,
      url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_04_-_Four.mp3",
      author: "Marcel Pequel",
      title: "Four",
      cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg",
    },
    {
      id: 5,
      url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_05_-_Five.mp3",
      author: "Marcel Pequel",
      title: "Five",
      cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg",
    },
    {
      id: 6,
      url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_06_-_Six.mp3",
      author: "Marcel Pequel",
      title: "Six",
      cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg",
    },
    {
      id: 7,
      url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_07_-_Seven.mp3",
      author: "Marcel Pequel",
      title: "Seven",
      cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg",
    },
    {
      id: 8,
      url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_08_-_Eight.mp3",
      author: "Marcel Pequel",
      title: "Eight",
      cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg",
    },
    {
      id: 9,
      url: "http://cdn.atrera.com/audio/Marcel_Pequel_-_09_-_Nine.mp3",
      author: "Marcel Pequel",
      title: "Nine",
      cover: "http://cdn.atrera.com/images/cover_yz2mak.jpg",
    },
  ];

  let currentId = 0;
  let currentAudio = "currentAudio";

  const title = document.querySelector(".music-player__title");
  const author = document.querySelector(".music-player__author");
  const pauseBtn = document.querySelector(".pause");
  const playBtn = document.querySelector(".play");
  const forwardBtn = document.getElementById("forward");

  function play() {
    console.log("play");
    document.getElementById(currentAudio).play();
    title.innerHTML = list[currentId].title;
    author.innerHTML = list[currentId].author;
  }

  function pause() {
    console.log("pause");
    document.getElementById(currentAudio).pause();
    title.innerHTML = "Muscis Player";
    author.innerHTML = "&nbsp";
  }

  function goToNextMusic() {
    console.log("goToNextMusic");
    let newId = currentId;
    while (newId === currentId) {
      newId = Math.floor(Math.random() * Math.floor(list.length - 1));
    }

    currentId = newId;
    init();
    play();
  }

  function init() {
    console.log("init");
    const audio =
      document.getElementById(currentAudio) === null
        ? new Audio()
        : document.getElementById(currentAudio);
    audio.src = list[currentId].url;
    audio.id = currentAudio;
    document.getElementById(currentAudio) === null
      ? document.body.appendChild(audio)
      : "";

    title.innerHTML = "Muscis Player";
    author.innerHTML = "&nbsp";

    document.getElementById(currentAudio).onended = (e) => goToNextMusic(e);
  }

  pauseBtn.addEventListener("click", pause);
  playBtn.addEventListener("click", play);
  forwardBtn.addEventListener("click", goToNextMusic);

  init();
})();
