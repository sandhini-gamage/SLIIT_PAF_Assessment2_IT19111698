<%@page import="controllers.HelpController"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Customer Help Requests</title>
<link rel="stylesheet" href="Components/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/helpmain.js"></script>
</head>
<body>

<nav class="navbar navbar-expand navbar-dark bg-dark m-1" aria-label="Second navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Customer Help Requests</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
</nav>

<div class="">
    <div class="container mt-3">
    	<h4 id="title">New Request</h4>
    	<form class="row g-3 mb-3  mt-3" name="crform" id="crform">
    	<input type="hidden" id="hideIDToUpdate" name="hideID" value="">
    	 <div class="col-md-4">
		    <label for="clientName" class="form-label">Name</label>
		    <input type="text" name="clientName" class="form-control" id="clientName">
		  </div>
		  <div class="col-md-4">
		    <label for="nic" class="form-label">Nic</label>
		    <input type="text" name="nic" class="form-control" id="nic">
		  </div>
		  
		   <div class="col-md-4">
		    <label for="email" class="form-label">Email</label>
		    <input type="email" name="email" class="form-control" id="email">
		  </div>
		  
		  <div class="col-md-4">
		    <label for="address" class="form-label">Address</label>
		    <input type="text" class="form-control" id="address" name="address">
		  </div>
		  
		  <div class="col-md-4">
		    <label for="acNumber" class="form-label">Account No </label>
		    <input type="number" class="form-control" id="acNumber" name="acNumber">
		  </div>
		  
		  <div class="col-md-4">
		    <label for="contact" class="form-label">Contact No</label>
		    <input type="number" name="contact" class="form-control" id="contact">
		  </div>
		  
		  
		  <div class="col-md-4">
		    <label for="type" class="form-label">Connection Type</label>
		    <select id="type" name="type" class="form-select">
		      <option value="Complain" selected>Complain</option>
		      <option value="Help">Help</option>
		    </select>
		  </div>
		  
		   <div class="col-md-12">
		    <label for="message" class="form-label">Message</label>
		    <textarea class="form-control" id="message" name="message" rows="3"></textarea>
		  </div>
		  
		   <div class="col-md-12">
		    <label for="status" class="form-label">Status</label>
		    <select id="status" name="status" class="form-select">
		      <option value="Pending" selected>Pending</option>
		      <option value="Complete">Complete</option>
		    </select>
		  </div>
	
		  <div class="col-12 mt-3">
		  	<input id="btnSave" name="btnSave" type="button" value="Submit" class="btn btn-primary">
		  	<input id="btnUpdateSave" name="btnUpdateSave" type="button" value="Update" class="btn btn-success">
		    <input type="button" onClick="resetForms()" class="btn btn-danger" value="Reset">
		  </div>
		</form>
		<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
    </div>
    <div class="container-fluid mt-5">
    <div class="table-responsive" id="divTable">
      	<%
      	HelpController con = new HelpController();
		out.print(con.getAllHelps());
		%>
    </div>
    </div>
  </div>

</body>
</html>