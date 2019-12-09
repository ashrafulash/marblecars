/*==================================
     bar scrolling
====================================*/

(function () {
    $(window).scroll(function () {
        var scrolling = $(document).scrollTop();

            
        if (scrolling > 48) {
            $(".bar_line").css({
                background: "#1fbfee",
                height: scrolling * 0.09 * 9
            });
        } else {
            $(".bar_line").css({
                background: "#1fbfee",
                height: "18%"
            });
        }
    });
})();


/*================================
    datePicker
=================================*/

(function () {
    
         
         var datepickerBtn = $("#date_picker_input")
         
            datepickerBtn.click(function(){
             $('.datePicker').fadeIn();
             })
    
            
            function logEvent(type, date) {
                $("<div class='log__entry'/>").hide().html("<strong>"+type + "</strong>: "+date).prependTo($('#eventlog')).show(200);
            }
            $('#clearlog').click(function() {
                $('#eventlog').html('');
            });

 
        
            $('#demo2').datetimepicker({
                date: new Date(),
                viewMode: 'YMD',
                onDateChange: function(){
                    $('#date-text2').text(this.getText());
                  
                }
            });
            
    

            
   
    
    
    

     var hourBox = document.querySelector("#hour_box");
     var minBox = document.querySelector("#minBox")
    
     var h_up = document.querySelector("#h_up");
     var h_down = document.querySelector("#h_down");
    
     var m_up = document.querySelector("#m_up");
     var m_down = document.querySelector("#m_down");

    dateBase = {
        hour: 0,
        minute: 0,
    }

    function displayDOM() {

        hourBox.innerHTML = dateBase.hour;
        minBox.innerHTML  = dateBase.minute;

    }

   

    h_up.addEventListener("click", function () {

        if (dateBase.hour < 23) {
            
            dateBase.hour++;
            displayDOM()
        }
    })
    
    h_down.addEventListener("click", function () {

        if (dateBase.hour > 0) {
            
            dateBase.hour;
            displayDOM()
        }
    })
    
    
    
    m_up.addEventListener("click", function () {

        if (dateBase.minute < 60) {
            
            dateBase.minute = dateBase.minute + 5;
            displayDOM()
        }
    })
    
    m_down.addEventListener("click", function () {

        if (dateBase.minute > 0) {
            
            dateBase.minute = dateBase.minute - 5;
            displayDOM()
        }
    })
    
    $(".title").click(function(){
       
        $(".ok").css({
            'opacity':'1',
            'visibility':'visible',
        });
        
        
        $(".ok").click(function(){
            $(".ok").css({
            'opacity':'0',
            'visibility':'hidden',
        });
        })
        
    });
    
    $("#ok_btn").click(function(){
        
        var day = $(".selected").text();
        var mon = $(".title").text();
        
        var date = day+', '+mon+', '+dateBase.hour+':'+dateBase.minute;
        
        
        $("#date_picker_input").val(date)
  
        $('.datePicker').fadeOut();
          
    })
    
    $("#cancel_btn").click(function(){
        $('.datePicker').fadeOut();
    })
    
    
    $("#asap_btn").click(function(){
        
         $("#date_picker_input").val("ASAP")
          $('.datePicker').fadeOut();
    })
    
    
    
    
    




})();



/*==================================
  video plugin -venobox
====================================*/
(function () {
    $(document).ready(function () {
        $(".venobox").venobox();
    });
})();

/*==================================
  event binding 
====================================*/
(function () {
    $("#menu_btn").click(function () {
        popUp(true);
    });
    
    $("#signIn_btn").click(function () {
        shadowFun(true)
    });
    

    $("#close_menu").click(function () {
        popUp(false);
    });
    
    $(".close_sup").click(function(){
        shadowFun(false);
    })

    //this function to toggle popup
    function popUp(act) {
        if (act === true) {
            $(".sideMenu").css({
                display: "block"
            });

            $("body").css({
                overflow: "hidden"
            });

            $(".menu_bar").animate({
                right: "0"
            });
        } else if (act === false) {
            $(".menu_bar").animate({
                    right: "-300px"
                },
                function () {
                    $(".sideMenu").css({
                        display: "none"
                    });
                }
            );

            $("body").css({
                overflow: "auto"
            });
        }
    }
    
    
    function shadowFun(act){
        if(act === true){
            $(".sideMenu").css({
                display: "block"
            });
            
            $(".sup").animate({
                'opacity': 1,
            })
            
            $("body").css({
                overflow: "hidden"
            });
            
        }else if(act === false){
            
            
            $(".sup").animate({
                
                'opacity': 0,
                
            }, function(){
                
                 $(".sideMenu").css({
                    display: "none"
                  });
                
            
                
            })
            
               $("body").css({
                overflow: "auto"
            }); 
            
            
            
        }
    }
})();

