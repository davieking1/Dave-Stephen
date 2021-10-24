var crock = 0;
var hash = "";
$(document).ready(function() {
  $("#navbar a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  if (!$("#menu").is(":checked")) {
    console.log("unchecked");
    $(".container").animate(
      {
        width: "75%"
      },
      "slow",
      "swing"
    );

    $("section").animate(
      {
        "padding-right": "0px"
      },
      "slow",
      "swing"
    );
  }

  $("#menu").on("click", function() {
    if ($("#menu").is(":checked")) {
      $(".animated:even").addClass("bounceInRight");
      $(".animated:odd").addClass("bounceInLeft");
      console.log("checked");
      $(".container").animate(
        {
          width: "100%"
        },
        "slow",
        "swing"
      );

      $("section").animate(
        {
          "padding-right": "30px"
        },
        "slow",
        "swing"
      );
    } else {
      if ($(".animated").hasClass("bounceInRight")) {
        $(".animated").removeClass("bounceInRight");
      }

      if ($(".animated").hasClass("bounceInLeft")) {
        $(".animated").removeClass("bounceInLeft");
      }

      $(".container").animate(
        {
          width: "75%"
        },
        "slow",
        "swing"
      );

      $("section").animate(
        {
          "padding-right": "0px"
        },
        "slow",
        "swing"
      );
    }
  });

  $("#main-doc").on("click", function() {
    $("#menu").prop("checked", false);

    $(".container").animate(
      {
        width: "75%"
      },
      "slow",
      "swing"
    );

    $("section").animate(
      {
        "padding-right": "0px"
      },
      "slow",
      "swing"
    );
  });

  $("[href='#Introduction_to_PHP']").on("click", function() {
    $("#menu").prop("checked", false);

    $(".container").animate(
      {
        width: "75%"
      },
      "slow",
      "swing"
    );

    $("section").animate(
      {
        "padding-right": "0px"
      },
      "slow",
      "swing"
    );
  });

  $("[href='#Basics_things_about_PHP']").on("click", function() {
    $("#menu").prop("checked", false);

    $(".container").animate(
      {
        width: "75%"
      },
      "slow",
      "swing"
    );

    $("section").animate(
      {
        "padding-right": "0px"
      },
      "slow",
      "swing"
    );
  });

  $("[href='#Data_types']").on("click", function() {
    $("#menu").prop("checked", false);

    $(".container").animate(
      {
        width: "75%"
      },
      "slow",
      "swing"
    );

    $("section").animate(
      {
        "padding-right": "0px"
      },
      "slow",
      "swing"
    );
  });

  $("[href='#Variable_scope']").on("click", function() {
    $("#menu").prop("checked", false);

    $(".container").animate(
      {
        width: "75%"
      },
      "slow",
      "swing"
    );

    $("section").animate(
      {
        "padding-right": "0px"
      },
      "slow",
      "swing"
    );
  });

  $("[href='#Loops']").on("click", function() {
    $("#menu").prop("checked", false);

    $(".container").animate(
      {
        width: "75%"
      },
      "slow",
      "swing"
    );

    $("section").animate(
      {
        "padding-right": "0px"
      },
      "slow",
      "swing"
    );
  });

  $("[href='#Functions_in_PHP']").on("click", function() {
    $("#menu").prop("checked", false);

    $(".container").animate(
      {
        width: "75%"
      },
      "slow",
      "swing"
    );

    $("section").animate(
      {
        "padding-right": "0px"
      },
      "slow",
      "swing"
    );
  });

  $("[href='#Reference']").on("click", function() {
    $("#menu").prop("checked", false);

    $(".container").animate(
      {
        width: "75%"
      },
      "slow",
      "swing"
    );

    $("section").animate(
      {
        "padding-right": "0px"
      },
      "slow",
      "swing"
    );
  });
});
