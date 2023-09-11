<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Create Role</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Create Role</li>
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
                    <h3 class="card-title">Create Role. Fields marked with (<span class="text-white">*</span>) Must be filled</h3> <br>
                    <b>NOTE: </b><i>This role helps in registering staff by categorizing them according to their roles.</i>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
                  <form>
                    <div class="card-body">
                      <div class="form-group">
                        <label for="role_name" class="form-label">Role Name <span class="text-danger">*</span></label>
                        <input type="text" name="role_name" class="form-control" placeholder="Enter role Name Eg. Teacher">
                      </div>
                      <div class="form-group">
                        <label for="amount" class="form-label">Fee Amount (KSH)</label>
                        <input type="number" class="form-control" placeholder="Enter Fee Amount" name="amount">
                      </div>
                      
                      <fieldset>
                        <legend>Privileges</legend>
                        <div class="form-group clearfix">
                      
                      
                      <div class="icheck-success d-inline">
                        <input type="checkbox" id="checkboxSuccess3">
                        <label for="checkboxSuccess3">
                          Manage Students
                        </label>
                      </div>
                    </div>
                      </fieldset>
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
 import '../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
    import '../assets/plugins/bs-custom-file-input/bs-custom-file-input.min.js'
    $(function () {
      bsCustomFileInput.init();
    });
    </script>