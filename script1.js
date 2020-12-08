$(document).ready(function()
{    debugger;
     $("#add").on("click",addListItem);
     $(document).on("click",".delete",deleteItem);
     $(document).on("click",".edit",editItem);
     $(document).on("click",".check",finishItem);
 });

 function addListItem()
{
 let i =$("#task_input").val();
let b='<input type="text" class="edit_task">';
let e_b='<input type="button" class="edit" value="edit"></button>';
let d_b = '<input type="button" class="delete" value="delete"> </button>';
 $("#task_left").append("<li><input type='checkbox' class='check'>"+ '<span class="s1">'+i+'</span>'+b+e_b+d_b+"</li>");
 console.log(i);
 $("#task_input").val('');
}
function deleteItem()
{
     $(this).parent().remove();
}
function editItem()
{    
     if($(this).val()=="edit")
     {
         $(this).val("update");
      $(this).parent().children(".edit_task").css("display","block");
      
     }
     else
     {
     var z=$(this).parent().children(".edit_task").val();
     $(this).val("edit");
     $(this).parent().children(".edit_task").css("display","none");
    
     $(this).parent().children(".s1").text(z);}

}
 function finishItem()
 {   
     if($(this).parent().parent().attr('id')=="task_done")
     {    let x= $(this).parent();
          console.log(x);
          $("#task_left").append(x);
     }
   else
   { 
        let y= $(this).parent();
     console.log(y);
     $("#task_done").append(y);
   }
 }