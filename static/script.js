$(document).ready(function(){

    console.log('Ready')

    // Fetch the current date and update it in the DOM
    // Replace '#dateElement' with the actual selector for the date element
    let currentDate = new Date();
    $('#dateElement').text(currentDate);

    // Write an event, when Submit button is clicked
    // Replace '#submitButton' with the actual selector for your submit button
    $('#submitButton').click(function(){

        // Get the text value from the textarea using the 'val()' method
        // Replace '#textArea' with the actual selector for your textarea
        let text_value = $('#textArea').val();

        // Convert it to JS object.
        // Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'key': text_value};
        console.log(input_text);

        // Ajax request
        $.ajax({

            // Type of web request, e.g., 'POST' or 'GET'
            type : 'POST',

            // Data to be sent in JSON format
            data : JSON.stringify(input_text),

            // Type of response expected is json
            dataType : 'json',

            // ContentType
            contentType : 'application/json',

            // If everything is successful, run this function
            success : function(result){
                // Extract prediction and emoticon url from result
                let prediction = result.prediction;
                let emoticonUrl = result.emoticonUrl;

                // Update the DOM elements
                // Replace '#predictionElement' and '#emoticonElement' with the actual selectors for your elements
                $('#predictionElement').text(prediction);
                $('#emoticonElement').attr('src', emoticonUrl);

                // Show them
                // Replace '#resultSection' with the actual selector for the result section
                $('#resultSection').show();
            },

            // If any error, run this function
            error : function(result){
                console.log(result);
            }
        });

        // Clearing the textbox after every button push
        // Replace '#textArea' with the actual selector for your textarea
        $('#textArea').val("");
    });
});
