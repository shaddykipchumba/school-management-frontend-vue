<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Classes Configurations</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Add Class</li>
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
                  Add a new class/subclass to your institution. Fields marked with (<span class="text-white">*</span>)
                  Must be filled
                </h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                <div class="card-body">
                  <div class="form-group">
                    <label for="class_name" class="form-label">Class Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter Class Name" name="class_name" />
                  </div>
                  <div class="form-group">
                    <label for="class_acronym" class="form-label">Class Acronym</label>
                    <input type="text" class="form-control" placeholder="Enter Class Acrony eg. F1"
                      name="class_acronym" />
                  </div>
                  <div class="form-group">
                    <label for="teacher_incharge" class="form-label">Class Teacher</label>
                    <select name="teacher_incharge" id="teacher_incharge" class="form-control">
                      <option value="">--- Select Class Teacher ---</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="student_incharge" class="form-label">Class Prefect</label>
                    <select name="student_incharge" id="student_incharge" class="form-control">
                      <option value="">--- Select Class Prefect ---</option>
                    </select>
                  </div>
                  <div class="icheck-primary d-inline">
                    <input type="checkbox" id="is_subclass" v-model="isSubclass" />
                    <label for="is_subclass">Is this a sub-class? </label>
                  </div>
                  <div class="form-group col-lg-12" v-if="isSubclass == true">
                    <label for="main_class">Main Class</label>
                    <select name="main_class" id="main_class" class="form-control">
                      <option value="">--- Select Main class</option>
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
import "../../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "../../assets/plugins/bs-custom-file-input/bs-custom-file-input.min.js";
$(function () {
  bsCustomFileInput.init();
  $(".select2").select2();
  $(".select2bs4").select2({
    theme: "bootstrap4",
  });
});
export default {
  data() {
    return {
      isSubclass: false,
    };
  },
};
</script>
