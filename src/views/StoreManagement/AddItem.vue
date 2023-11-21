<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>New Item</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">New Item</li>
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
            <div class="card card-primary row">
              <div class="card-header">
                <h3 class="card-title">
                  Add new Item to the store. The field with (<span>*</span>) must be
                  filled
                </h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form class="row">
                <div class="card-body col-lg-12 row">
                  <div class="form-group col-lg-12">
                    <label for="item_name"
                      >Item Name<span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Item Name"
                      name="item_name"
                      required
                    />
                  </div>
                  <div class="form-group col-lg-12">
                    <label for="starting_stock">Starting Stock </label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter starting Stock"
                      name="starting_stock"
                    />
                  </div>

                  <div class="form-group col-lg-12">
                    <label for="unit_of_measure">Unit Of Measurement</label>
                    <div class="d-flex justify-content-between">
                      <select
                        name="unit_of_measure"
                        id="unit_of_measure"
                        class="form-control"
                      >
                        <option value="">--- Select Unit Of Measure ---</option>
                      </select>
                      <button class="btn btn-info">
                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div class="form-group col-lg-12">
                    <label for="price_per_unit">Price Per Unit</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter Price Per Unit"
                      name="price_per_unit"
                    />
                  </div>
                  <div class="form-group col-lg-12">
                    <div class="icheck-primary d-inline">
                      <input
                        type="checkbox"
                        id="notification_limit"
                        v-model="allow_notification"
                      />
                      <label for="notification_limit"
                        >Do you wish to include notifications?
                      </label>
                    </div>
                  </div>
                  <div class="form-group col-lg-12" v-if="allow_notification == true">
                    <label>Limit number to notify</label>
                    <input
                      type="number"
                      name="notify_limit"
                      id="notify_limit"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group col-lg-12">
                    <label for="store_category">Store Category</label>
                    <select
                      name="store_category"
                      id="store_category"
                      class="form-control"
                    >
                      <option value="">--- Select Store Category ---</option>
                    </select>
                  </div>
                  <div class="form-group col-lg-12">
                    <div class="icheck-primary d-inline">
                      <input
                        type="checkbox"
                        id="issuance_limit"
                        v-model="allow_issuance_limit"
                      />
                      <label for="issuance_limit"
                        >Do you wish to limit issuance of this item?
                      </label>
                    </div>
                  </div>
                  <div class="form-group col-lg-12" v-if="allow_issuance_limit == true">
                    <label>Issuance Limit</label>
                    <input
                      type="number"
                      name="notify_limit"
                      id="notify_limit"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-lg-12">
                    <label for="date_registered">Date Registered</label>
                    <input type="date" class="form-control" name="date_registered" />
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
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import "../../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "../../assets/plugins/select2/css/select2.min.css";
import "../../assets/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css";
import "../../assets/plugins/bs-custom-file-input/bs-custom-file-input.min.js";
import "../../assets/plugins/select2/js/select2.full.min.js";
$(function () {
  bsCustomFileInput.init();
  $(".select2").select2();

  //Initialize Select2 Elements
  $(".select2bs4").select2({
    theme: "bootstrap4",
  });
});
export default {
  data() {
    return {
      allow_issuance_limit: false,
      allow_notification: false,
    };
  },
};
</script>
