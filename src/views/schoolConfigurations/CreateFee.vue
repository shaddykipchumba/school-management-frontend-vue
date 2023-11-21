<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Create Fee</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Create Fee</li>
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
                <h3 class="card-title">Create Fee. Fields marked with (<span class="text-white">*</span>) Must be filled
                </h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                <div class="card-body">
                  <div class="form-group">
                    <label for="session_name" class="form-label">Session Name <span class="text-danger">*</span></label>
                    <select name="session_name" id="session_name" class="form-control">
                      <option value="">--- Select Session ---</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="amount" class="form-label">Fee Amount (KSH)</label>
                    <input type="number" class="form-control" placeholder="Enter Fee Amount" name="amount">
                  </div>

                  <div class="form-group">
                    <input type="checkbox" name="is_subclass" id="is_subclass" class="input-form-check">
                    <label for="is_subclass" class="form-check-label ml-2">Has additional Fees</label>
                  </div>
                  <div class="form-group d-flex">
                    <input type="text" name="fee_name" id="fee_name" class="form-control" placeholder="Fee name">
                    <input type="number" name="fee_amount" id="fee_amount" class="form-control" placeholder="Fee Amount">
                    <button class="btn btn-primary"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
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