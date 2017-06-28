$(document).ready(function(){
    $(".click p").click(function(){
        alert("you clicked on this paragraph!");
    })

    $(".hide button#hide").click(function(){
        $(".hide p").hide();
    })
    
    $(".hide button#show").click(function(){
         $(".hide p").show();
    })

    $(".toggle button#toggle").click(function(){
        $(".toggle p").toggle("slow", function(){
        })
    });

    $(".slidedown p").hide();

    $(".slidedown button#slidedown").click(function(){
        $(".slidedown p").slideDown("slow", function(){
        })
    })

    $(".slidedown button#slideup").click(function(){
        $(".slidedown p").slideUp("slow", function(){
        })
    });

    $(".slidetoggle button#slidetoggle").click(function(){
        $('.slidetoggle p').slideToggle("slow", function(){
        })
    });

    $(".fadein p").hide();

    $(".fadein button#fadein").click(function(){
        $(".fadein p").fadeIn("slow", function(){
        })
    })

    $(".fadein button#fadeout").click(function(){
        $(".fadein p").fadeOut("slow", function(){
        })
    })

    $(".addclass button").click(function(){
        $(".addclass p").addClass("red");
    })

    $(".before button#before").click(function(){
        $(".before p").before( "This")
    })

     $(".after button#after").click(function(){
        $(".after p").after( "after!")
    })

     $(".append button#append").click(function(){
        $(".append p").append( " appending!")
    })
    
    $(".html button#html").click(function(){
        alert($(".html").html());
    })

    $("#attr").click(function(){
        var myAttr = $("#attribute").attr('id');
        alert("The paragraphs' attribute is named " + myAttr);
    })
      
    $(".val button#val").click(function(){
        var myVal = $("#val").val();
        alert("The paragraphs' value is named " + myVal);
    }) 

    $(".text button#text").click(function(){
    var myText = $(".text").text();
    alert(myText);
    }) 

    $(".data button#data").click(function(){
        var myData = $(".data").data("hello", 13)
        alert("data div is now set to " + data[1]) 
    })

});
