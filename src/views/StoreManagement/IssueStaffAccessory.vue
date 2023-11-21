<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Issue Staff Accessory</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Staff Accessories</li>
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
                                    Assign Accessory to The member of staff community. The field with
                                    (<span>*</span>) must be filled
                                </h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form class="row">
                                <div class="card-body col-lg-12 row">
                                    <div class="form-group col-lg-12">
                                        <label for="item_name">Item Name<span class="text-danger">*</span></label>
                                        <select class="form-control select2bs4" data-dropdown-css-class="select2-danger"
                                            style="width: 100%">
                                            <option selected="selected">--- Select Item ---</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="description">Item Description</label>
                                        <textarea name="description" id="description" cols="30" rows="10"
                                            class="form-control"
                                            placeholder="Please make a description of an item that is issued especially when the item issued is special such as gifts"></textarea>
                                    </div>
                                    <div class="form-group col-lg-12">
                                        <label for="starting_stock">Staff Name <span class="text-danger">*</span></label>
                                        <select class="form-control select2bs4" data-dropdown-css-class="select2-danger"
                                            style="width: 100%">
                                            <option selected="selected">--- Select Staff ---</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-lg-12">
                                        <label for="quantity_issued">Quantity to be Issued</label>
                                        <input type="number" name="quantity_issued" id="quantity_issued"
                                            class="form-control" placeholder="Enter Quantity to be Issued" />
                                    </div>
                                    <div class="form-group col-lg-12">
                                        <label for="date_issued">Date Issued</label>
                                        <input type="date" class="form-control" name="date_issued" />
                                    </div>

                                    <div class="form-group col-lg-12">
                                        <div class="icheck-primary d-inline">
                                            <input type="checkbox" id="is_returnable" v-model="is_returnable" />
                                            <label for="is_returnable">Is this item expected to be returned back?
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12" v-if="is_returnable == true">
                                        <label for="return_date">Date To Be Returned</label>
                                        <input type="date" name="return_date" id="return_date" class="form-control" />
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
            is_returnable: false,
        };
    },
};
</script>
  