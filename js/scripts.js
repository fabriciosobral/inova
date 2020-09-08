    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByClassName(".itens-place");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }


    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {

        } else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }

    var clicks = 0;

    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

    function onClickLess() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
    };



    $(document).ready(function() {

        $(function() {
            $('input[name="daterange"]').daterangepicker({
                opens: 'center',
            }, function(start, end, label) {
                //console.log('New date range selected: ' + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY') + ' (predefined range: ' + label + ')');
            });
        });

        $('#menu-nav').click(function() {
            $("#menu-content").toggle("slow", function() {
                // Animation complete.
            });
        });

        $('#open-form-calculator').click(function(){
            $("#calulator-form").toggle("slow", function() {
            });
        });

        $('.pop').on('click', function() {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');
        });

        $('.pop').mouseover(function() {
            var overlayHover = $(this).find(".overlay");
            var imgSizeH = $(this).find("img").width();
            console.log("overlayHover", overlayHover);
            console.log("imgSizeW", imgSizeH);
            overlayHover.css("cssText", "opacity:0.7!important; width:" + imgSizeH + "px;");
            if (imgSizeH > 200) {
                $(".overlay::before").css("cssText", "left:30%");
            }

        });

        $('.pop').mouseout(function() {
            var overlayHover = $(this).find(".overlay");
            overlayHover.css("cssText", "opacity:0!important;");

        });

        function init() {
            $('.phones').addClass('off');
            var winW = $(window).width();

            if (winW > 769) {
                $("#contentSearch").removeClass("collapse");
            } else {
                $("#contentSearch").addClass("collapse");
            }


            $("#bt-menu-top").click(function() {
                $("#menu-top").slideToggle("slow");
            });


        }
        $('.contacts-top-slider').owlCarousel({
            loop: true,
            items: 1,
            margin: 50,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    nav: true
                }
            }
        })

        $('.details-img-slider').owlCarousel({
            loop: true,
            items: 1,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    nav: true,
                    navText: ["<i class='fa fa-2x fa-chevron-left'></i>", "<i class='fa fa-2x fa-chevron-right'></i>"]
                }
            }
        })

        $('.slider-home').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 1,
                    nav: false,
                    margin: 20,
                    dots: true,
                    autoplay: true
                },
                1024: {
                    items: 1,
                    nav: true,
                    margin: 20,
                    dots: false,
                    autoplay: true
                }
            }
        })

        $('.owl-carousel-show1').owlCarousel({
            loop: true,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 2,
                    nav: true,
                    margin: 20,
                    dots: false,
                    autoplay: false,
                    navText: ["<i class='fa fa-2x fa-chevron-left'></i>", "<i class='fa fa-2x fa-chevron-right'></i>"]
                },
                1200: {
                    items: 3,
                    nav: true,
                    margin: 20,
                    padding: 10,
                    dots: false,
                    autoplay: false,
                    navText: ["<i class='fa fa-2x fa-chevron-left'></i>", "<i class='fa fa-2x fa-chevron-right'></i>"]
                }
            }
        })

        $('.owl-carousel-show2').owlCarousel({
            loop: true,
            margin: 5,
            items: 5,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 2,
                    nav: true,
                    margin: 20,
                    dots: false,
                    autoplay: false,
                    navText: ["<i class='fa fa-2x fa-chevron-left'></i>", "<i class='fa fa-2x fa-chevron-right'></i>"]
                },
                1024: {
                    items: 4,
                    nav: true,
                    margin: 20,
                    padding: 10,
                    dots: false,
                    autoplay: false,
                    navText: ["<i class='fa fa-2x fa-chevron-left'></i>", "<i class='fa fa-2x fa-chevron-right'></i>"]
                }
            }
        })

        $('.owl-carousel-show3').owlCarousel({
            loop: true,
            margin: 5,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 2,
                    nav: true,
                    margin: 20,
                    dots: false,
                    autoplay: false,
                    navText: ["<i class='fa fa-2x fa-chevron-left'></i>", "<i class='fa fa-2x fa-chevron-right'></i>"]
                },
                1024: {
                    items: 3,
                    nav: true,
                    margin: 20,
                    padding: 10,
                    dots: false,
                    autoplay: false,
                    navText: ["<i class='fa fa-2x fa-chevron-left'></i>", "<i class='fa fa-2x fa-chevron-right'></i>"]
                }
            }
        })

        $('.points-carousel').owlCarousel({
            loop: true,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 2,
                    nav: true,
                    margin: 20,
                    dots: false,
                    autoplay: false,
                    navText: ["<i class='fa fa-2x fa-chevron-left'></i>", "<i class='fa fa-2x fa-chevron-right'></i>"]
                },
                1024: {
                    items: 3,
                    nav: true,
                    margin: 20,
                    dots: false,
                    autoplay: false,
                    navText: ["<i class='fa fa-2x fa-chevron-left'></i>", "<i class='fa fa-2x fa-chevron-right'></i>"]
                }
            }
        })




        init();

        $(window).resize(function() {
            init();
        });







        $('.owl-carousel-grid').owlCarousel({
            loop: true,
            autoplay: false,
            margin: 5,
            items: 5,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                },
                1024: {
                    items: 3,
                    nav: true,
                    margin: 20,
                    dots: false,
                    autoplay: false,
                    navText: ["<i class='fa fa-2x fa-chevron-left'></i>", "<i class='fa fa-2x fa-chevron-right'></i>"]
                }
            }
        })


        // reference for main items
        var slider = $('#slider');
        // reference for thumbnail items
        var thumbnailSlider = $('#thumbnailSlider');
        //transition time in ms
        var duration = 500;

        // carousel function for main slider
        slider.owlCarousel({
            loop: false,
            nav: false,
            items: 1
        }).on('changed.owl.carousel', function(e) {
            //On change of main item to trigger thumbnail item
            thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
        });

        // carousel function for thumbnail slider
        thumbnailSlider.owlCarousel({
            loop: false,
            center: false, //to display the thumbnail item in center
            nav: false,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        }).on('click', '.owl-item', function(e) {
            // On click of thumbnail items to trigger same main item
            console.log(this)
            slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            e.preventDefault();
            $(".owl-item").removeClass('on');
            $(this).addClass('on');

        }).on('changed.owl.carousel', function(e) {
            // On change of thumbnail item to trigger main item
            slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
        });


        //These two are navigation for main items
        $('.slider-right').click(function() {
            slider.trigger('next.owl.carousel');
        });
        $('.slider-left').click(function() {
            slider.trigger('prev.owl.carousel');
        });

    })