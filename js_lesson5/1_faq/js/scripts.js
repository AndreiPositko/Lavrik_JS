$(function(){
    
   $('.faq .ask').on('click', function() {
    //    $(this).next().show();
       let answer = $(this).next();
       $('.faq .answer').not(answer).slideUp(400);
       answer.slideToggle(400);

   });
 
});
