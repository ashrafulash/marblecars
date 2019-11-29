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
    selected: 2,
    width: "100%",
    defaultText: "Select..."
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
