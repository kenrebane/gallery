

$(document).ready(function() {

  var category = "all-projects";
  //On document load, fadeIn all project images

  $("#gallery li").fadeIn("slow");
  $("nav ul li:first-child").addClass("current");


  $("nav a").on("click", function() {

    //Current class assignment
    $("nav li.current").removeClass("current");
    $(this).parent().addClass("current");

    //Set All projects heading text
    $("h1#heading span").text( $(this).text() );

    //Get and filter link text
    category = $(this).text().toLowerCase().replace(" ", "-");

    //Display selected pictures
    if ( category === "all-projects" ) {

      $("#gallery li").hide();
      $("#gallery li").fadeIn("slow");

    } else {

      $("#gallery li").hide();
      $("#gallery li").each(function() {
        if ( $(this).hasClass(category) ) {
          $(this).fadeIn("slow");
        }
      });

    }
    return false;
  });

  $("#gallery li").on("mouseenter", function() {
    // Get data attribute value
    var title = $(this).data("title"),
        description = $(this).data("desc");

    //Validation
    if ( title === null || title === "" || title === undefined ) {
      title = "";
    }

    if ( description === null || description === "" ||
         description === undefined ) {
           description = "Click to enlarge";
    }

    //Creating overlay div
    $(this).append("<div class='overlay'></div>");


    //Get overlay div
    var overlay = $(".overlay");

    //Add html to overlay
    overlay.html("<h3>"+title+"</h3><p>"+description+"</p>")
      .fadeIn("normal");

  });

  $("#gallery li").on("mouseleave", function() {
    $(".overlay").fadeOut("slow").remove("div.overlay");
  });

});
