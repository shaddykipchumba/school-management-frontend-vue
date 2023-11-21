<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add Subject</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Add Subject</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
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
                <h3 class="card-title">
                  Add a new subject to your institution. Fields marked with (<span class="text-white">*</span>) Must be
                  filled
                </h3>
                <br />
                <i>For grouped subjects you first create Subject grouped without checking
                  is grouped checkbox</i>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                <div class="card-body">
                  <div class="form-group">
                    <label for="subject_name" class="form-label">Subject Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter Subject Name" name="subject_name" />
                  </div>
                  <div class="form-group">
                    <label for="subject_code" class="form-label">Subject Code <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter Subject Code eg. 231"
                      name="subject_code" />
                  </div>
                  <div class="form-group">
                    <label for="number_of_papers" class="form-label">Number Of Papers <span
                        class="text-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Enter Number of papers done"
                      name="number_of_papers" />
                  </div>
                  <div class="form-group">
                    <label for="department">Department</label>
                    <select class="form-control select2bs4" data-dropdown-css-class="select2-danger" style="width: 100%"
                      name="department">
                      <option selected="selected">--- Select Department ---</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Classes where Subject is Compulsory</label>
                    <div class="select2-purple">
                      <select class="select2" multiple="multiple" data-placeholder="Select Compulsory Classes"
                        data-dropdown-css-class="select2-purple" style="width: 100%">
                        <option>Form 1</option>
                        <option>Form 2</option>
                        <option>Form 3</option>
                        <option>Form 4</option>
                      </select>
                    </div>
                  </div>
                  <div class="icheck-primary d-inline form-group">
                    <input type="checkbox" id="is_grouped" v-model="isGrouped" />
                    <label for="is_grouped">Is this subject grouped? </label>
                  </div>
                  <div class="form-group" v-show="isGrouped">
                    <label for="subject_grouped" class="form-label">Subject(s) grouped with</label>
                    <select class="select2" multiple="multiple" data-placeholder="Select Subject(s)"
                      data-dropdown-css-class="select2-purple" style="width: 100%">
                      <option>Mathematics</option>
                      <option>English</option>
                      <option>Kiswahili</option>
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
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import "../../assets/plugins/select2/css/select2.min.css";
import "../../assets/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css";
import "../../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "../../assets/plugins/bs-custom-file-input/bs-custom-file-input.min.js";
import "../../assets/plugins/select2/js/select2.full.min.js";

export default {
  created() {
    $(function () {
      bsCustomFileInput.init();
    });
    $(function () {
      //Initialize Select2 Elements
      $(".select2").select2();

      //Initialize Select2 Elements
      $(".select2bs4").select2({
        theme: "bootstrap4",
      });
    });
  },
  data() {
    return {
      isGrouped: false,
    };
  },
};
</script>
