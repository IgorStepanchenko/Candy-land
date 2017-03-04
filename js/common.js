$(document).ready(function() {

// MAGNIFIC-POPUP

$(".item1").magnificPopup({
	type: 'image',
	gallery : {
		enabled : true
	}
});




   // SMOOTH SCROLL

 $(function(){
        $('a[href^="#"]').on('click', function(event){
            event.preventDefault();

            var target = this.hash;

            console.log(this.hash);
            var $target = $(target);

            console.log(window.location.hash);
            console.log($target.offset());
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function(){
                window.location.hash = target;
            })
        })
    }());


    // TABS

    $(".tab_item").not(":first").hide();
$(".external .tab").click(function() {
	$(".external .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");



   // AJAX FORM

   $("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
            $(this).find("input").val("");
			toastr.success('Заявка успешно отпрвлена.');
            $("#form").trigger("reset");
		});
		return false;
	});




})