let empty_func = function(){}

function myAjax(url, method, data, func_Sccess = empty_func, func_Complete = empty_func, func_Before = empty_func, output_error = false){
	$.ajax({
		url: url,
		type: method,
		data: data,
		dataType: "json",
		'async': false,
        'global': false,
		crossDomain: true,
		beforeSend: function(xhr){
			func_Before();
		},
		complete: function(xhr,status){
			func_Complete();
		},
		success: function(result,status,xhr){
			func_Sccess();
		},
		error: function(xhr,status,error){
			if (output_error)
				console.log(error);
		}
	});
}