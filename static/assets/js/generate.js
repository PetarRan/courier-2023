$(document).ready(function () {
    $("#generateSignature").click(function (event) {
        event.preventDefault();
        // Get input values
        var fullName = $("#fullName").val();
        var profession = $("#profession").val();
        var company = $("#company").val();
        var mobileNumber = $("#mobileNumber").val();
        var email = $("#email").val();
        var website = $("#website").val();
        var linkedin = $("#linkedin").val();
        var github = $("#github").val();
        var imageFile = $("#image")[0].files[0];

        if (imageFile && imageFile.type.startsWith('image/')) {
            var imageUrl = imageFile;
        } else {
            alert("Add your logo to generate this style!") // use a default image or show an error message
        }

        var selectedCard = document.querySelector('.selected-tab')
        if (selectedCard.id === "TheProfessional") {
            // Generate Professional style signature HTML
            var signatureHTML = '<table style="font-family: Arial, sans-serif; font-size: 12px;">';
            signatureHTML += '<tr><td rowspan="3" style="padding-right: 10px;"><img src="' + URL.createObjectURL(imageUrl) + '" style="max-width: 120px;"></td><td><b>' + fullName + '</b></td></tr>';
            signatureHTML += '<tr><td>' + profession + ' | ' + company + '</td></tr>';
            signatureHTML += '<tr><td><a href="tel:' + mobileNumber + '">' + mobileNumber + '</a> | <a href="mailto:' + email + '">' + email + '</a> | <a href="' + website + '">' + website + '</a> | <a href="' + linkedin + '">LinkedIn</a> | <a href="' + github + '">GitHub</a></td></tr>';
            signatureHTML += '</table>';
        } else if (selectedCard.id === "TheCreative") {
            var signatureHTML = '<table style="font-family: Arial, sans-serif; font-size: 12px;">';
            signatureHTML += '<tr><td rowspan="2" style="padding-right: 10px;"><img src="' + URL.createObjectURL(imageUrl) + '" style="max-width: 80px;"></td><td style="font-size: 18px; font-weight: bold;">' + fullName + '</td></tr>';
            signatureHTML += '<tr><td style="color: #777777;">' + profession + ' | ' + company + '</td></tr>';
            signatureHTML += '<tr><td colspan="2" style="padding-top: 10px;"><a style="color: #555555; text-decoration: none;" href="tel:' + mobileNumber + '">' + mobileNumber + '</a></td></tr>';
            signatureHTML += '<tr><td colspan="2" style="padding-top: 10px;"><a style="color: #555555; text-decoration: none;" href="mailto:' + email + '">' + email + '</a></td></tr>';
            signatureHTML += '<tr><td colspan="2" style="padding-top: 10px;"><a style="color: #555555; text-decoration: none;" href="' + website + '">' + website + '</a></td></tr>';
            signatureHTML += '<tr><td colspan="2" style="padding-top: 10px;"><a style="color: #555555; text-decoration: none;" href="' + linkedin + '">LinkedIn</a></td></tr>';
            signatureHTML += '</table>';

        } else if (selectedCard.id === "TheTechie") {
            // Generate Tech-Savvy style signature HTML
            // Generate Tech-savvy style signature HTML
            var signatureHTML = '<table style="font-family: Arial, sans-serif; font-size: 12px;">';
            signatureHTML += '<tr><td rowspan="4" style="padding-right: 10px;"><img src="' + URL.createObjectURL(imageUrl) + '" style="max-width: 120px;"></td><td><b>' + fullName + '</b></td></tr>';
            signatureHTML += '<tr><td>' + profession + ' | ' + company + '</td></tr>';
            signatureHTML += '<tr><td><img src="https://img.icons8.com/material-sharp/24/000000/internet--v1.png"/><a href="' + website + '">' + website + '</a> | <img src="https://img.icons8.com/color/24/000000/linkedin.png"/><a href="' + linkedin + '">LinkedIn</a> | <img src="https://img.icons8.com/color/24/000000/github-2.png"/> <a href="' + github + '">GitHub</a></td></tr>';
            signatureHTML += '<tr><td><div style="text-align: right;"><img src="https://img.icons8.com/color/24/000000/phone.png"/><a href="tel:' + mobileNumber + '">' + mobileNumber + '</a> | <img src="https://img.icons8.com/color/24/000000/email.png"/><a href="mailto:' + email + '">' + email + '</a></div></td></tr>';
            signatureHTML += '</table>';



        } else if (selectedCard.id === "TheMinimal") {
            var signatureHTML = '<table style="font-family: Arial, sans-serif; font-size: 12px;">';
            signatureHTML += '<tr><td rowspan="3" style="padding-right: 10px;"><img src="' + URL.createObjectURL(imageUrl) + '" style="max-width: 80px;"></td><td><b>' + fullName + '</b></td></tr>';
            signatureHTML += '<tr><td>' + profession + ' | ' + company + '</td></tr>';
            signatureHTML += '<tr><td><a href="mailto:' + email + '">' + email + '</a></td></tr>';
            signatureHTML += '</table>';


        } else if (selectedCard.id === "TheModern") {
            var signatureHTML = '<table style="font-family: Arial, sans-serif; font-size: 14px;">';
            signatureHTML += '<tr>';
            signatureHTML += '<td style="width: 60px;display: flex;"><img src="' + URL.createObjectURL(imageUrl) + '" style="max-width: 100%;"></td>';
            signatureHTML += '<td style="padding-left: 10px;">';
            signatureHTML += '<div style="font-weight: 600;">' + fullName + '</div>';
            signatureHTML += '<div style="color: #999;">' + profession + ' at ' + company + '</div>';
            signatureHTML += '<div style="margin-top: 10px; color: #666;">';
            signatureHTML += '<div style="margin-bottom: 5px;"><i class="fa fa-mobile-alt" style="color: #999;"></i>&nbsp;&nbsp;<a href="tel:' + mobileNumber + '" style="color: #666; text-decoration: none;">' + mobileNumber + '</a></div>';
            signatureHTML += '<div style="margin-bottom: 5px;"><i class="fa fa-envelope" style="color: #999;"></i>&nbsp;&nbsp;<a href="mailto:' + email + '" style="color: #666; text-decoration: none;">' + email + '</a></div>';
            signatureHTML += '<div style="margin-bottom: 5px;"><i class="fa fa-globe" style="color: #999;"></i>&nbsp;&nbsp;<a href="' + website + '" style="color: #666; text-decoration: none;">' + website + '</a></div>';
            signatureHTML += '<div style="margin-bottom: 5px;"><i class="fa fa-linkedin" style="color: #999;"></i>&nbsp;&nbsp;<a href="' + linkedin + '" style="color: #666; text-decoration: none;">LinkedIn</a></div>';
            signatureHTML += '<div><i class="fa fa-github" style="color: #999;"></i>&nbsp;&nbsp;<a href="' + github + '" style="color: #666; text-decoration: none;">GitHub</a></div>';
            signatureHTML += '</div>';
            signatureHTML += '</td>';
            signatureHTML += '</tr>';
            signatureHTML += '</table>';
        }

        // Set signature HTML in page
        $("#signature").html(signatureHTML);
    });
});

var inputFields = $('input');
$('#generateSignature').prop('disabled', true);

inputFields.on('input', function() {
  // Check if all input fields have a value
  var allFieldsFilled = inputFields.toArray().every(function(field) {
    return field.value !== '';
  });
  
  // Enable / disable the generate signature button based on whether all fields are filled
  $('#generateSignature').prop('disabled', !allFieldsFilled);
});

