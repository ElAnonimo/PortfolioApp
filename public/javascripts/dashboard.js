$(document).ready(function() {
	$('.deleteProject').on('click', deleteProject);
});

function deleteProject() {
	deleteId = $(this).data('id');
	var confirmation = confirm('Are you sure to delete this project?');
	
	if (confirmation) {
		$.ajax({
			type: 'delete',
			url: '/admin/delete/' + deleteId
		}).done(function(response) {
			
		});
		
		window.location = '/admin';
	} else {
		return false;
	}
}