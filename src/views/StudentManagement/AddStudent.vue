<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Student Admission</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Student Admission</li>
                </ol>
              </div>
            </div>
          </div><!-- /.container-fluid -->
        </section>
    
        <!-- Main content -->
        <section class="content">
          <!-- parent information modal -->
          <div class="modal fade centered" id="modal-default">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Add Parent</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body row">
                  <div class="form-group col-lg-12">
                    <label for="parent_name" class="form-label">Full Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name="parent_name" placeholder="Full Name">
                  </div>
                  <div class="form-group col-lg-6">
                    <label for="primary_phone" class="form-label">Primary Phone Number <span class="text-danger">*</span></label>
                    <input type="tel" class="form-control" name="primary_phone" placeholder="Primary Phone Number">
                  </div>
                  <div class="form-group col-lg-6">
                    <label for="secondary_phone" class="form-label">Secondary Phone Number</label>
                    <input type="tel" class="form-control" name="secondary_phone" placeholder="Secondary Phone Number">
                  </div>
                  <div class="form-group col-lg-12">
                    <label for="parent_email" class="form-label">Parent Email Address</label>
                    <input type="email" class="form-control" name="parent_email" placeholder="Parent Email Address">
                  </div>
                  <div class="form-group col-lg-6">
                    <label for="parent_occupation">Parent Occupation</label>
                    <input type="text" name="parent_occupation" id="parent_occupation" class="form-control" placeholder="Eg. Farmer">

                  </div>
                  <div class="form-group col-lg-6">
                    <label for="parent_residence">Parent Residence</label>
                    <input type="text" name="parent_residence" id="parent_residence" class="form-control" placeholder="Parent Residence">
                  </div>
                </div>
                <div class="modal-footer justify-content-between">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
          <!-- end of parent information modal -->
          <div class="container-fluid">
            <div class="row">
              <!-- left column -->
              <div class="col-md-12">
                <!-- general form elements -->
                <div class="card card-primary row">
                  <div class="card-header">
                    <h3 class="card-title">Admit new student to your institution. Fields marked with (<span>*</span>) must be filled</h3>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
                  <form class="row">
                    <div class="card-body col-lg-12 row">
                      <div class="form-group col-lg-4">
                        <label for="adm">Student Admission Number <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Enter student Admission Number" name="adm">
                      </div>
                      <div class="form-group col-lg-8">
                        <label for="student_name">Student full Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Enter Student Full name" name="student_name">
                      </div>
                      <div class="form-group clearfix">
                      <div class="icheck-success d-inline">
                        <input type="radio" name="gender" id="male">
                        <label for="male"> Male
                        </label>
                      </div>
                      <div class="icheck-success d-inline ml-2">
                        <input type="radio" name="gender" id="female">
                        <label for="female">
                          Female
                        </label>
                      </div>
                      
                    </div>
                      <div class="form-group col-lg-12">
                        <label for="index_number">Student Index Number</label>
                        <input type="text" class="form-control" placeholder="Enter Student Index Number" name="index_number">
                      </div>
                      <div class="form-group col-lg-4">
                        <label for="kcpe_index">KCPE Index Number</label>
                        <input type="text" class="form-control" placeholder="Enter student KCPE Index Number" name="kcpe_index">
                      </div>
                      <div class="form-group col-lg-4">
                        <label for="kcpe_marks">KCPE Marks <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name="kcpe_index" placeholder="KCPE Marks">
                      </div>
                      <div class="form-group col-lg-4"> 
                        <label for="kcpe_year">KCPE Year</label>
                        <input type="number" class="form-control" placeholder="KCPE Year">
                      </div>
                     
                      <div class="form-group col-lg-4">
                        <label for="upi_number">UPI Number</label>
                        <input type="text" class="form-control" name="upi_number" placeholder="Enter Student UPI">
                      </div>
                      <div class="form-group col-lg-4">
                        <label for="birth_certificate_number">Birth Certificate Number</label>
                        <input type="text" name="birth_certificate_number" class="form-control" placeholder="Birth Certificate Number">
                      </div>
                      <div class="form-group col-lg-4">
                        <label for="dob">Date of Birth</label>
                        <input type="text" name="dob" class="form-control" placeholder="Enter Date of Birth">
                      </div>
                      <div class="form-group col-lg-12">
                        <label for="blood_group">Blood Group</label>
                        <input type="text" class="form-control" name="blood_group" placeholder="Enter Student Blood Group">
                      </div>
                      <div class="form-group col-lg-6">
                        <label for="student_house">Student House</label>
                        <input type="text" class="form-control" name="student_house" id="student_house" placeholder="Enter Student House">
                      </div>
                      <div class="form-group col-lg-6">
                        <label for="bed_number">Bed Number</label>
                        <input type="text" name="bed_number" id="bed_number" class="form-control" placeholder="Bed Number">
                      </div>
                      <div class="form-group col-lg-12">
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
                      <div class="form-group col-lg-12 d-flex">
                        
                  
                  <select class="form-control select2 select2-danger pb-2" data-dropdown-css-class="select2-danger" style="width: 100%;">
                    <option selected="selected">Select Parent</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                
                        <button class="btn btn-info ml-2" data-toggle="modal" data-target="#modal-default" @click.prevent=""><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                      </div>
                      <div class="form-group col-lg-12">
                        <div class="icheck-primary d-inline">
                        <input type="checkbox" id="assign_subjects">
                        <label for="assign_subjects">Do you wish to Assign Subjects?
                        </label>
                      </div>
                      </div>
                      <div class="form-group col-lg-3">
                        <div class="icheck-success d-inline">
                        <input type="checkbox" id="maths">
                        <label for="maths">Mathematics
                        </label>
                      </div>
                      </div>
                      <div class="form-group col-lg-3">
                        <div class="icheck-success d-inline">
                        <input type="checkbox" id="eng">
                        <label for="eng">English
                        </label>
                      </div>
                      </div>
                      <div class="form-group col-lg-3">
                        <div class="icheck-success d-inline">
                        <input type="checkbox" id="kis">
                        <label for="kis">Kiswahili
                        </label>
                      </div>
                      </div>
                      <!-- <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                      </div> -->
                    </div>
                    <!-- /.card-body -->
    
                    <div class="card-footer col-12">
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
    import '../../assets/plugins/select2/css/select2.min.css'
  import '../../assets/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css'
    import '../../assets/plugins/bs-custom-file-input/bs-custom-file-input.min.js'
    import '../../assets/plugins/select2/js/select2.full.min.js'
    $(function () {
      bsCustomFileInput.init();
      $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
      theme: 'bootstrap4'
    })
    });
    </script>