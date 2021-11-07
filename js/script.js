// function openNav() {
//   document.getElementById("listview-signIn-signUp").style.width = "300px";
// }


function openNav() {
  document.getElementById("listview-signIn-signUp").style.width = "300px";
}


function closeNav() {
  document.getElementById("listview-signIn-signUp").style.width = "0";
}

// $(document).ready(function(){
//   $("btn_bar").click(function(){
//     $("listview-signIn-signUp").addClass("listview-signIn-signUp_after");
//   });
// });


  $(document).ready(function(){
    $("#ketnoixanh_02").click(function(){
      $("#submenu_ketnoixanh_02").slideToggle("1000");
    });
  });
  $(document).ready(function(){
    $("#ketnoixanh_03").click(function(){
      $("#submenu_ketnoixanh_03").slideToggle("1000");
    });
  });
  $(document).ready(function(){
    $("#ketnoixanh_04").click(function(){
      $("#submenu_ketnoixanh_04").slideToggle("1000");
    });
  });

  //4
  
  $(document).ready(function(){
    $("#trainghiemxanh_01").click(function(){
      $("#submenu_trainghiemxanh_01").slideToggle("1000");
    });
  });
  $(document).ready(function(){
    $("#trainghiemxanh_02").click(function(){
      $("#submenu_trainghiemxanh_02").slideToggle("1000");
    });
  });
  $(document).ready(function(){
    $("#trainghiemxanh_03").click(function(){
      $("#submenu_trainghiemxanh_03").slideToggle("1000");
    });
  });

  // 5

  $(document).ready(function(){
    $("#kythuatxanh_01").click(function(){
      $("#submenu_kythuatxanh_01").slideToggle("1000");
    });
  });
  $(document).ready(function(){
    $("#kythuatxanh_02").click(function(){
      $("#submenu_kythuatxanh_02").slideToggle("1000");
    });
  });
  $(document).ready(function(){
    $("#kythuatxanh_03").click(function(){
      $("#submenu_kythuatxanh_03").slideToggle("1000");
    });
  });

  // 6
  $(document).ready(function(){
    $("#giaitrixanh_01").click(function(){
      $("#submenu_giaitrixanh_01").slideToggle("1000");
    });
  });

  closeNav();