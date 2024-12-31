function startLoading() {
  const loadingBar = document.querySelector('.loading-bar');
  let progress = 0;

  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      onLoadingComplete();
    } else {
      progress += 10;
      loadingBar.style.width = `${progress}%`;
    }
  }, 500);
}
function onLoadingComplete() {
  console.log('Loading complete!');
  const body = document.body;
  if (body.style.display === 'flex') {
    body.style.display = ''
  }
  let abc = document.getElementById("a");
  console.log(abc)
  abc.innerHTML = "<div class=\"box\"><h1 class=\"c\" id=\"ab\"></h1><br><h2 class=\"c\" id=\"ac\"></h2><p id=\"ws\">Here's to new adventures, cherished memories, and dreams coming true in the year ahead! 🥂💫</p><div>"

  animateTitle();
  animateYear();
  animatewish();
}

startLoading();
const title = 'Happy New Year';
let index = 0;

const animateTitle = () => {
  if (index < title.length) {
    document.getElementById('ab').innerHTML += title[index];
    index++;
    setTimeout(animateTitle, 200);
  }
};
const year = '😈 2025 😈';
let i = 0;

const animateYear = () => {
  if (i < year.length) {
    document.getElementById('ac').innerHTML += year[i];
    i++;
    setTimeout(animateYear, 900);
  }
};

const graiant = [
  " linear-gradient(135deg, #3a0202e6, #2b0000, #0a0000)",
  "linear-gradient(135deg, #0a0000, #2b0000, #3a0202e6)"
];
let gi = 0;
function changebg() {
  document.body.style.background = graiant[gi];
  gi = (gi + 1) % graiant.length;
}
setInterval(changebg, 4500)