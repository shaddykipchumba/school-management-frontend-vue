<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Create Session</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Create Session</li>
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
                    <h3 class="card-title">Create new Term/Session. Fields marked with (<span class="text-white">*</span>) Must be filled</h3> <br>
                    <b>NOTE: </b><i>This is terms that will help in perfomance recording, fee balances and fee structures.</i>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
                  <form>
                    <div class="card-body">
                      <div class="form-group">
                        <label for="session_name" class="form-label">Session Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Enter Session Name Eg. Term 1" name="session_name" required>
                      </div>
                      <div class="form-group">
                        <label for="start_date" class="form-label">Start Date <span class="text-danger">*</span></label>
                        <input type="date" class="form-control" name="start_date" required>
                      </div>
                      <div class="form-group">
                        <label for="end_date" class="form-label">End Date <span class="text-danger">*</span></label>
                        <input type="date" class="form-control" name="end_date">
                      </div>
                      <div class="form-group">
                        <div class="icheck-primary d-inline">
                        <input type="radio" id="isLast" name="is_last">
                        <label for="isLast">
                          Is the Last Session
                        </label>
                      </div>
                      </div>
                      
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
    import '../../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
    import '../../assets/plugins/bs-custom-file-input/bs-custom-file-input.min.js'
    $(function () {
      bsCustomFileInput.init();
    });
    </script>