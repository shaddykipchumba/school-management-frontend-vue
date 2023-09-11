<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>School Settings</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Settings</li>
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
                    <h3 class="card-title">Configure your institution system to help the system during all activities involving institution</h3>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
                  <form>
                    <div class="card-body">
                      <div class="form-group">
                        <label for="school_name">School Name</label>
                        <input type="text" class="form-control" placeholder="Enter School Name" name="school_name">
                      </div>
                      <div class="form-group">
                        <label for="school_primary_phone">School Primary Phone Number</label>
                        <input type="tel" class="form-control" placeholder="Primary Phone Number" name="school_primary_phone">
                      </div>
                      <div class="form-group">
                        <label for="school_secondary_phone">School Secondary Phone Number</label>
                        <input type="tel" class="form-control" placeholder="Enter Secondary phone Number" name="secondary_phone">
                      </div>
                      <div class="form-group">
                        <label for="school_email">School Email</label>
                        <input type="email" class="form-control" placeholder="School Email address" name="school_email">
                      </div>
                      
                      <div class="form-group">
                        <label for="address">School Physical Address</label>
                        <input type="text" class="form-control" placeholder="Enter School Physical Address" name="address">
                      </div>
                      <div class="form-group">
                        <label for="school_coordinates">Google Maps Co-ordinates (Longitude to Latitude)</label>
                        <input type="text"  class="form-control" placeholder="Start from Longitude followed by Latitude">
                      </div>
                      <div class="form-group">
                        <label for="learning_system">School Learning System (Whether Day or Boarding)</label>
                        <select name="learning_system" id="learning_system" class="form-control">
                            <option value="">--- Select Learning System</option>
                            <option value="Day">Day</option>
                            <option value="Boarding">Boarding</option>
                        </select>
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