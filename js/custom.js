/*================================
    Selector Banner part
=================================*/
(function() {
  //pick up address
  var addressList = {
    1: "Heathrow Terminal 2 TW6 1RR",
    2: "Heathrow Terminal 3 TW6 1QG",
    3: "Heathrow Terminal 4 TW6 3XA",
    4: "Heathrow Terminal 5 TW6 2GA",
    5: "City Airport E16 2PX",
    6: "Stansted Airport CM24 1RW",
    7: "Gatwick South RH6 0NP",
    8: "Gatwick North RH6 0RD",
    9: "Southend Airport SS2 6YF",
    10: "Luton Airport LU2 9LY"
  };

  $("#select-box-preselect1").bselect({
    data: addressList,
    search: false,
    width: "100%",
    defaultText: "Pickup Address"
  });

  //Destination address
  var destination = {
    1: "Heathrow Terminal 2 TW6 1RR",
    2: "Heathrow Terminal 3 TW6 1QG",
    3: "Heathrow Terminal 4 TW6 3XA",
    4: "Heathrow Terminal 5 TW6 2GA",
    5: "City Airport E16 2PX",
    6: "Stansted Airport CM24 1RW",
    7: "Gatwick South RH6 0NP",
    8: "Gatwick North RH6 0RD",
    9: "Southend Airport SS2 6YF",
    10: "Luton Airport LU2 9LY"
  };

  $("#select-box-preselect2").bselect({
    data: destination,
    search: false,
    width: "100%",
    defaultText: "Destination Address"
  });

  //Person
  var person = {
    1: "Person 01",
    2: "Person 02",
    3: "Person 03",
    4: "Person 04",
    5: "Person 05",
    6: "Person 06",
    7: "Person 07",
    8: "Person 08"
  };

  $("#select-box-preselectPerson").bselect({
    data: person,
    search: false,
    selected: 2,
    width: "100%",
    defaultText: "Select..."
  });

  //luggage
  var luggage = {
    1: "Luggage 01",
    2: "Luggage 02",
    3: "Luggage 03",
    4: "Luggage 04",
    5: "Luggage 05",
    6: "Luggage 06",
    7: "Luggage 07",
    8: "Luggage 08"
  };

  $("#select-box-preselectLuggage").bselect({
    data: luggage,
    search: false,
    selected: 2,
    width: "100%",
    defaultText: "Select..."
  });
})();

/*==================================
  video plugin -venobox
====================================*/
(function() {
  $(document).ready(function() {
    $(".venobox").venobox();
  });
})();

/*==================================
  event binding 
====================================*/
(function() {
  $("#menu_btn").click(function() {
    popUp(true);
  });

  $("#close_menu").click(function() {
    popUp(false);
  });

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
      $(".menu_bar").animate(
        {
          right: "-300px"
        },
        function() {
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
})();

/*==================================
     bar scrolling
====================================*/

(function() {
  $(window).scroll(function() {
    var scrolling = $(document).scrollTop();

    console.log(scrolling);

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
