$( document ).ready(function() {
    // Changing text on button
    $(".btn").text("Continue");
    
    // Hiding macros input
    $("#mainInput input").css("display","none");
    
    // Saving value to custom field
    $("#submitButton button").on("click",function(){
        let myAttr = $("#rangeInput").val();
        let i = 2;
        let tag = $("input")[i];
        $(tag).attr("value", myAttr);
    });
    
    // test range
    let value;
    let percent;
    
    value = $("#rangeInput").val();
    nonActiveSquares(value);
    activeSquares(value);
        
    function nonActiveSquares(n){
        for(let i=10; i > n; i--){
            let name = ".colorItem" + [i];
            $(name).addClass("notActiveItem");
        }
    }
    function activeSquares(n){
        for(let i=1; i <= n; i++){
            let name = ".colorItem" + [i];
            $(name).removeClass("notActiveItem");
        }
    }

    $("#rangeInput").on('input', function(){ 
        value = $("#rangeInput").val();
        // $(".sliderValue").text(value);

  switch (Number(value)) {
    case 0:
    nonActiveSquares(value);
      break;
    case 1:
    nonActiveSquares(value);
    activeSquares(value);
      break;
    case 2:
    nonActiveSquares(value);
    activeSquares(value);
      break;
    case 3:
    nonActiveSquares(value);
    activeSquares(value);
      break;
    case 4:
    nonActiveSquares(value);
    activeSquares(value);
      break;
    case 5:
    nonActiveSquares(value);
    activeSquares(value);
      break;
    case 6:
    nonActiveSquares(value);
    activeSquares(value);
      break;
    case 7:
    nonActiveSquares(value);
    activeSquares(value);
      break;
    case 8:
    nonActiveSquares(value);
    activeSquares(value);
      break;
    case 9:
    nonActiveSquares(value);
    activeSquares(value);
      break;
    case 10:
    activeSquares(value);
      break;
    default:
    console.log("default is winning");
    break;
  }
});
});
