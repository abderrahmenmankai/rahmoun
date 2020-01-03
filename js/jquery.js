$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$(".coursesItem").hover(function(){
    $(this).find(".btnCourses").toggleClass('btnCoursesHover')
});