document.querySelector('.fa-eye').addEventListener('click',function() {
	this.classList.toggle('fa-eye-slash')
	this.classList.toggle('fa-eye');
	console.log(this.classList.value);
	if(this.classList.value.includes('fa-eye-slash')){
		UserPassword.setAttribute('type','text')
	}
	else{
		UserPassword.setAttribute('type','password')
	}
})
$('.btn').click(function() {
	var user_Name=UserName.value;
	var User_Password=UserPassword.value;
	const storedBlogs = JSON.parse(localStorage.getItem('information_users'));
	storedBlogs.forEach(element => {
		if(element.user_name==user_Name && element.password==User_Password){
			window.location.href="login.html";
			var userlogin={
				name:element.full_name,
				gender:element.gender,
				password:element.password
			}
            localStorage.setItem('login',JSON.stringify(userlogin));
		}
	});


})