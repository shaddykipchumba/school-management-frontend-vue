<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Assign Subjects</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Assign Subject</li>
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
                    <h3 class="card-title">Assign subject to your students. Fields marked with (<span class="text-white">*</span>) Must be filled</h3> <br>
                    
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
                  <form>
                    <div class="card-body">
                      <div class="form-group">
                        <label for="students_class" class="form-label">Class <span class="text-danger">*</span></label>
                        <select name="students_class" id="class" class="form-control">
                          <option value="">--- Select Class ---</option>
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
    import '../../assets/plugins/select2/css/select2.min.css'
  import '../../assets/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css'
    import '../../assets/plugins/bs-custom-file-input/bs-custom-file-input.min.js'
    import '../../assets/plugins/select2/js/select2.full.min.js'
    $(function () {
      bsCustomFileInput.init();
    });
    $(function () {
    //Initialize Select2 Elements
    $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
      theme: 'bootstrap4'
    })
    })
    </script>