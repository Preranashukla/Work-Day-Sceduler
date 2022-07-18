//Display current Date
function getCurrentDay() 
{
    var currentDate = $("#currentDay");
    currentDate.text(moment().format('dddd MMMM Do YYYY'));
}

getCurrentDay();

function getTimeBlocks(){
    var container = $('.container');

    for(var i = 9; i<18; i++){
        //create a row
        var time = $("<div>");
        time.attr("class", "row hour");
    }

    // appending hour box
    if(i < 13)
    {
        time.append('<div class="time-block col-md-1">' + i + 'AM</div>');
    }
    else
    {
        time.append('<div class="time-block col-md-1">' + (i - 12) + 'PM</div>');
    }
    container.append(time);
}

getTimeBlocks();