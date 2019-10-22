//E-mail Validation
//Head:
<script type="text/javascript">
function validateEmail(theForm) {
if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theForm.email-id.value)){
return(true);
}
alert("Invalid e-mail address! Please enter again carefully!.");
return(false);
}
</script>
//Body:
<form onSubmit="return validateEmail(this);" action="">
E-mail Address:
<input type="text" name="emailid" />
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
</form>

//Bookmark Us!
<a href="javascript:window.external.AddFavorite('http://www.yoursite.com', 'Your Site Name')">Add to Favorites</a>
