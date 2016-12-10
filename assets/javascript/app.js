

// Initialize Firebase
var config = {
apiKey: "AIzaSyBK8x0wgYA9glOk4f0KzKQ1u6s8--9p7XE",
authDomain: "employee-data-management-7ee13.firebaseapp.com",
databaseURL: "https://employee-data-management-7ee13.firebaseio.com",
storageBucket: "employee-data-management-7ee13.appspot.com",
messagingSenderId: "178524481500"
};
firebase.initializeApp(config);

var database = firebase.database();
var employeeName;
var role;
var startDate;
var monthlyRate;


$("#submit").on("click", function(event){

	event.preventDefault();
	console.log("hello");
	employeeName = $("#employeeName").val().trim();
	role = $("#role").val().trim();
	startDate = $("#startDate").val().trim();
	monthlyRate = $("#monthlyRate").val().trim();

	console.log(employeeName);

	database.ref().push({
	    name: employeeName,
	    role: role,
	    startDate: startDate,
	    monthlyRate: monthlyRate
	});
});

// $("document").on("click", "#submit", pushToDatabase);

