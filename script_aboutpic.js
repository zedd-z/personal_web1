//---------主角：轮播图函数-------------
window.onload = function() {
    var slideshow = document.getElementById("abslideshow"),
      imgs = slideshow.getElementsByTagName("img"), //得到图片们
      pages = slideshow.getElementsByTagName("span"), //得到页码们
      descrips = slideshow.getElementsByTagName("p"), //得到描述们
      current = 0; //current为当前活跃的图片编号
  
    function slideOff() {
      imgs[current].className = ""; //图片淡出
      pages[current].className = "";
      descrips[current].className = "";
    }
    function slideOn() {
      imgs[current].className = "active"; //图片淡入
      pages[current].className = "active";
      descrips[current].className = "active";
    }
  
    function changeSlide() {
      //切换图片的函数
      slideOff();
      current++; //自增1
      if (current >= 3) current = 0;
      slideOn();
    }
  
    //每2s调用changeSlide函数进行图片轮播
    var slideon = setInterval(changeSlide, 3500);
  
    slideshow.onmouseover = function () {
      clearInterval(slideon); //当鼠标移入时清除轮播事件
    };
    slideshow.onmouseout = function () {
      slideon = setInterval(changeSlide, 3500); //当鼠标移出时重新开始轮播事件
    };
  
    for (var i = 0; i < pages.length; i++) {
      //定义鼠标移入和移出页码事件
      pages[i].onmouseover = function () {
        slideOff(); //图片淡出
        current = this.innerHTML - 1; //得到鼠标停留的页码对应的current
        slideOn(); //图片淡出
      };
    }
  }
  
  slideshow();
  
  