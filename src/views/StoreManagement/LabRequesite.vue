<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Laboratory Requisite Form</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Laboratory Requests</li>
                        </ol>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">
            <!-- Adding new item/ laboratory accessory modal -->
            <div class="modal fade centered" id="modal-default">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Add Accessory</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body row">
                            <div class="form-group col-lg-12">
                                <label for="apparatus_name" class="form-label">Apparatus/Chemical Name <span
                                        class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="apparatus_name"
                                    placeholder="Apparatus or Chemical name" v-model="apparatus_data.name" />
                            </div>
                            <div class="form-group col-lg-12">
                                <label for="description" class="form-label">Description </label>
                                <textarea name="description" id="description" cols="30" rows="10" class="form-control"
                                    placeholder="Please give a brief description of the apparatus or chemical"></textarea>
                            </div>
                            <div class="form-group col-lg-12">
                                <div class="icheck-primary d-inline">
                                    <input type="checkbox" id="is_chemical" v-model="apparatus_data.is_chemical" />
                                    <label for="is_chemical">Is this item chemical? </label>
                                </div>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="unit_of_measure">Unit of Measure</label>
                                <select class="form-control select2bs4" id="item-name"
                                    data-dropdown-css-class="select2-danger" style="width: 100%" @change="updateName()">
                                    <option selected="selected">--- Select Unit of Measurement ---</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" class="btn btn-default" data-dismiss="modal">
                                Close
                            </button>
                            <button type="button" class="btn btn-primary" @click.prevent="addItem()">
                                Save changes
                            </button>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- end of adding laboratory accessory modal -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <RouterLink to="/laboratory_requesite_list"><button class="btn btn-success float-right mb-2">
                                View Requesites
                            </button></RouterLink>
                    </div>
                    <!-- left column -->
                    <div class="col-md-6">
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">
                                    Make a request of chemical/apparatus. The field with (<span>*</span>)
                                    must be filled
                                </h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form>
                                <div class="card-body col-lg-12 row">
                                    <div class="form-group col-lg-12 d-flex justify-content-between">
                                        <select class="form-control select2bs4" id="item-name"
                                            data-dropdown-css-class="select2-danger" style="width: 80%"
                                            @change="updateName()">
                                            <option selected="selected">
                                                --- Select Apparatus/chemical ---
                                            </option>
                                            <option v-for="(item, index) in laboratory_items" :key="index"
                                                :value="item.name">
                                                {{ item.name }}
                                            </option>
                                        </select>
                                        <button class="btn btn-info ml-2" data-toggle="modal" data-target="#modal-default"
                                            @click.prevent="">
                                            Add
                                        </button>
                                    </div>

                                    <div class="form-group col-lg-12">
                                        <label for="quantity">Quantity <span class="text-danger">*</span></label>
                                        <input type="number" name="quantity" id="quantity" class="form-control"
                                            placeholder="Please Enter the quantity" v-model="request_data.quantity" />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="date_required">Date Required</label>
                                        <input type="date" name="date_required" id="date_required" class="form-control" />
                                    </div>

                                    <!-- <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                              </div> -->
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer col-12">
                                    <button type="submit" class="btn btn-primary" @click.prevent="submitCart()">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <!-- /.card -->
                    </div>
                    <div class="col-md-6">
                        <div class="card card-success">
                            <div class="card-header"></div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form>
                                <div class="card-body row">
                                    <div class="col-12 table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Qty</th>
                                                    <th>Item</th>
                                                    <th>Date Required</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in requested_items" :key="index">
                                                    <td>{{ item.quantity }}</td>
                                                    <td>{{ item.name }}</td>
                                                    <td>23/02/2024</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- /.col -->

                                    <!-- <div class="form-check">
                                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div> -->
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer col-12">
                                    <RouterLink to="/confirm_laboratory_request"><button type="submit"
                                            class="btn btn-primary">Submit</button>
                                    </RouterLink>
                                </div>
                            </form>
                        </div>
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
import { toValue } from "vue";
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
            apparatus_data: {},
            request_data: {},
            requested_items: [],
            laboratory_items: [],
        };
    },
    methods: {
        addItem() {
            this.laboratory_items.push(this.apparatus_data);
            this.apparatus_data = [];
            // $("#modal-default");
            // console.log(this.laboratory_items);
        },

        submitCart() {
            this.requested_items.push(this.request_data);
            this.request_data = [];
            console.log(this.requested_items);
        },
        updateName() {
            this.request_data.name = $("#item-name").val();
            console.log(this.request_data.name);
        },
    },
};
</script>
  