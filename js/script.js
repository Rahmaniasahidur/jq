// js
wow = new WOW (
    { 
boxClass:         'wow',      // default
animateClass:     'animated', // default
offset:           0,          // default
mobile:           true,       // default
live:             true        // default 
    })
    new WOW().init();

    // jquery
    $(document).ready(function(){

        $('.counter').counterUp({
            delay:10,
            time: 1000
        });
    });

    // js
    $('.parallax-window').parallax({
        naturalWidth: 600,
        naturalHeight: 400
    });
    // jquery
    jQuery(window).trigger('resize').trigger('scroll');

    // Vanilla js
    const input = document.querySelector("#telephone");
    const output = document.querySelector("#output")
    window.intTelInput,("tel")({
        nationalMode: true,
        //options here
    });
    // jQuery
    $("#telephone").inlTelInput({
        // options here
    });

    // jq
    $(document).ready(function(){
        $("#flip").click(function(){
            $("#panel").slideToggle(3000);
        });
    });

    // jq datepicker
    $(function(){
        $("#datepicker").datepicker();
    });

    // jq
    $(function(){
        $("#speed").selectmenu();
        $("#files").selectmenu();
        $("#number")
        .selectmenu()
        .selectmenu("menuWidget")
        .addClass("overflow");
        $("#salution").salectmenu();
    });


// js
      $(document).ready(function(){
        $("loader").click(function(){
          $("#animationWindow").load();
        });
      });