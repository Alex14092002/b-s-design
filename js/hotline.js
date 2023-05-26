const hotline = document.querySelector('.hotlines')

hotline.innerHTML += `
<div class="hotline">
<div class="hotline-phone-ring-wrap">
  <div class="hotline-phone-ring">
    <div class="hotline-phone-ring-circle"></div>
    <div class="hotline-phone-ring-circle-fill"></div>
    <div class="hotline-phone-ring-img-circle">
      <a href="tel:0933366630" class="pps-btn-img">
        <img
          src="https://netweb.vn/img/hotline/icon.png"
          alt="so dien thoai"
          width="50"
        />
      </a>
    </div>
  </div>
  <div class="hotline-bar">
    <a href="tel:0933366630">
      <span class="text-hotline">0933 366 630</span>
    </a>
  </div>
</div>
<div class="float-icon-hotline">
  <ul class="left-icon hotline">
    <li class="hotline_float_icon">
      <a
        target="_blank"
        rel="nofollow"
        id="messengerButton"
        href="https://zalo.me/0933366630"
        ><i class="fa fa-zalo animated infinite tada"></i
        ><span>Zalo</span></a
      >
    </li>
    <li class="hotline_float_icon">
      <a
        target="_blank"
        rel="nofollow"
        id="messengerButton"
        href="https://www.facebook.com/ngocdankt"
        ><i class="fa fa-messenger animated infinite tada"></i
        ><span>Facebook</span></a
      >
    </li>
  </ul>
</div>
</div>
<a href="#" class="gotopbtn">
</a>
`