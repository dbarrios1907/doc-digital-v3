<template>
  <div class="toolbar with-read-speaker">
    <a class="toolbar-btn toolbar-behavior-contrast" href="#">
      <i class="cl cl-contrast"></i>
    </a>
    <div class="toolbar-btn-group">
      <a class="toolbar-btn toolbar-behavior-decrease" href="#">
        <i class="cl cl-decrease-text"></i>
      </a>
      <a class="toolbar-btn toolbar-behavior-increase" href="#">
        <i class="cl cl-increase-text"></i>
      </a>
    </div>
    <div
      class="toolbar-player toolbar-btn toolbar-behavior-read rs_skip rsbtn-gobcl-skin"
      id="readspeaker_button1"
    >
      <a rel="nofollow" accesskey="L" href="#"
        ><span class="rsbtn_left rsimg rspart"
          ><span class="rsbtn_text">
            <div class="toolbar-btn-icon-content">
              <em class="cl cl-sound"></em>
            </div>
            <span>Escuchar</span></span
          ></span
        ><span class="rsbtn_right rsimg rsplay rspart"></span
      ></a>
    </div>
    <a class="toolbar-btn toolbar-toggler" href="#">
      <i class="cl cl-accessibility toolbar-behavior-on"></i>
      <span class="toolbar-behavior-off">X</span>
    </a>
  </div>
</template>
