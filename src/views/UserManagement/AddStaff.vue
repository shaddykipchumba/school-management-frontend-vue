<template>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Staff</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Add Staff</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Staff Details</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                <div class="card-body">
                  <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" class="form-control" placeholder="Enter Full name" name="name">
                  </div>
                  <div class="form-group">
                    <label for="primary_phone">Primary Phone Number</label>
                    <input type="tel" class="form-control" placeholder="Primary Phone Number" name="primary_phone">
                  </div>
                  <div class="form-group">
                    <label for="secondary_phone">Secondary Phone Number</label>
                    <input type="tel" class="form-control" placeholder="Enter Secondary phone Number" name="secondary_phone">
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" placeholder="Email address" name="email">
                  </div>
                  <div class="form-group">
                    <label for="role">Role</label>
                    <select name="role" id="role" class="form-control">
                        <option value=""> --- Select Role ---</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Store Keeper">Store Keeper</option>
                        <option value="Accountant">Accountant</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="residence">Residence</label>
                    <input type="text" class="form-control" placeholder="Enter Residence" name="residence">
                  </div>
                  <div class="form-group">
                    <label for="salary">Salary</label>
                    <input type="number" class="form-control" placeholder="Salary Amount">
                  </div>
                  <div class="form-group">
                    <label for="date_registered">Employment Date</label>
                    <input type="date" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="profile-photo">Profile Photo</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="profile-photo" name="profile_photo">
                        <label class="custom-file-label" for="profile-photo">Choose Photo</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div> -->
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->


          </div>
          
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import '../../assets/plugins/bs-custom-file-input/bs-custom-file-input.min.js'
$(function () {
  bsCustomFileInput.init();
});
</script>