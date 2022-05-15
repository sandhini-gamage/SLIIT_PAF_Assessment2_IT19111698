
$(document).ready(function()
{
	
$("#alertSuccess").hide();
$("#alertError").hide();
$("#btnUpdateSave").hide();
$("#hideIDToUpdate").val('');

});


$(document).on("click", "#btnSave", function(event){
	
	var status = validateItemForm();
		if (status != true)
		{
			$("#alertError").text(status);
			$("#alertError").show();
			
			return;
		}
		
		console.log($("#crform").serialize());
		
	var type = ($("#hideIDToUpdate").val() == "") ? "POST" : "PUT";
	$.ajax(
			{
					url : "HelpRequestApi",
					type : type,
					data : $("#crform").serialize(),
					dataType : "text",
					complete : function(response, status)
					{
						if(response.status==200){
							AlertSuccessMessage(response,status);
							$("#alertError").hide();
							
						}else{
							
							AlertErrorMessage(response,status);
						}
					}
		});
				
});

$(document).on("click", "#btnUpdateSave", function(event){
	
	
	
	
	var status = validateItemForm();
		if (status != true)
		{
			$("#alertError").text(status);
			$("#alertError").show();
			
			return;
		}
		
		console.log($("#crform").serialize());
	
	$.ajax(
			{
					url : "HelpRequestApi",
					type : "PUT",
					data : $("#crform").serialize(),
					dataType : "text",
					complete : function(response, status)
					{
						if(response.status==200){
							AlertSuccessMessage(response,status);
							$("#btnUpdateSave").hide();
							$("#alertError").hide();
							$("#btnSave").show();
							
						}else{
							
							AlertErrorMessage(response,status);
							$("#btnUpdateSave").hide();
							$("#btnSave").show();
						}
					}
			});
				
});


$(document).on("click", ".btnRemove", function(event){
	
	var reqid = $(this).data("reqid");
	
	console.log(reqid);
		$.ajax({
			url : "HelpRequestApi?requestId="+reqid,
			type : "Delete",
			dataType : "text",
			complete : function(response, status)
			{
				if(response.status==200){
					AlertSuccessMessage(response,status);
				}else{
					AlertErrorMessage(response,status);
				}
			}
		});
});

function AlertSuccessMessage(response,status)
{
	var message = JSON.parse(response.responseText).status;
	var table = JSON.parse(response.responseText).data;
	console.log(message);
	document.forms['crform'].reset();
	$("#alertSuccess").show();
	$("#alertSuccess").html(message);
	$("#divTable").html(table);
}

function AlertErrorMessage(response,status)
{
	document.forms['crform'].reset();
	$("#alertError").show();
	$("#alertError").html(message);
}

function resetForms() {
    document.forms['crform'].reset();
    $("#btnSave").show();
    $("#title").text("New Request");
	$("#btnUpdateSave").hide();
	$("#hideIDToUpdate").val(null);
	$("#alertSuccess").hide();
	$("#alertError").hide();
	
}

$(document).on("click", ".btnUpdate", function(event)
{
$("#title").text("Update Request");
$("#alertSuccess").hide();
$("#alertError").hide();
$("#btnSave").hide();
$("#btnUpdateSave").show();
$("#hideIDToUpdate").val($(this).data("updateid"));

$("#clientName").val($(this).closest("tr").find('td:eq(1)').text());
$("#nic").val($(this).closest("tr").find('td:eq(2)').text());
$("#acNumber").val($(this).closest("tr").find('td:eq(3)').text());
$("#address").val($(this).closest("tr").find('td:eq(4)').text());
$("#email").val($(this).closest("tr").find('td:eq(5)').text());
$("#contact").val($(this).closest("tr").find('td:eq(6)').text());
$("#message").val($(this).closest("tr").find('td:eq(7)').text());
$("#type").val($(this).closest("tr").find('td:eq(8)').text());
$("#status").val($(this).closest("tr").find('td:eq(9)').text());

});


function validateItemForm()
	{

	if ($("#clientName").val().trim() == ""){
		return "Insert Client Name";
	}
	
	if ($("#nic").val().trim() == ""){
		return "Insert Nic Number";
	}
	
	if (!isValidEmailAddress($("#email").val().trim()))
	{
		return "Insert Valid Email";
	}
	
	if ($("#address").val().trim() == ""){
		return "Insert Address";
	}

	var acNumber = $("#acNumber").val().trim();
	if (!$.isNumeric(acNumber))
	{
		return "Insert a numerical value for Account Number";
	}
	
	
	var contact = $("#contact").val().trim();
	
	if (!$.isNumeric(contact))
	{
		return "Insert a numerical value for Contact Number";
	}

	if ($("#message").val().trim() == ""){
		return "Insert Message";
	}

	
	return true;
};

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};