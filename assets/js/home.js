var words = ['100% PRACTICAL COURSE',"CONQUER THE FEAR OF CODE","LET US MAKE YOUR CAREER BETTER","DESIGN ANYTHING YOU WANT"],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.quotationAnimatedTag').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

var button2=document.getElementById('button2');
var button1=document.getElementById('button1');
var courseAndNextBatchComingBatchImageTag=document.getElementById('courseAndNextBatchComingBatchImageTag');
button2.addEventListener('click',function(){
  courseAndNextBatchComingBatchImageTag.src="https://scontent.fbho4-3.fna.fbcdn.net/v/t39.30808-6/325765181_522090129904700_8708532331234148921_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=NOnFMgNHlWgAX-Gl0Hx&_nc_ht=scontent.fbho4-3.fna&oh=00_AfCDaY3VWUqsAZgExoxsAg7MO7aF_4m2fcMjfG2hrEDiUg&oe=63DB38F9";
});
var button3=document.getElementById('button3');
button3.addEventListener('click',function(){
  courseAndNextBatchComingBatchImageTag.src="https://scontent.fbho4-1.fna.fbcdn.net/v/t39.30808-6/327893881_512837400748141_3299818327508080499_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=CMVo3ZT7keIAX9jFBNV&_nc_ht=scontent.fbho4-1.fna&oh=00_AfBRWWw4A60VGZiUWLgc29hskptsBFo_0nMpcQE5-YrpOQ&oe=63DBFF21";
});
button1.addEventListener('click',function(){
  courseAndNextBatchComingBatchImageTag.src="https://scontent.fbho4-2.fna.fbcdn.net/v/t39.30808-6/327934359_569189385106198_5463312145449252421_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=WYvdOnMaRZkAX9GCpcj&tn=oSTqxHg0cWwbUEn-&_nc_ht=scontent.fbho4-2.fna&oh=00_AfC7D_aluImG6XWspGjNjOBmj1p7LmG2ft6bhzfJ5Ugshw&oe=63DDD48A";
})