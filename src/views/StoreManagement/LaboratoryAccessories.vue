<template>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Laboratory Accessories</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Laboratory Accessories</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <!-- /.container-fluid -->
            </section>
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
                                        <option selected="selected">
                                            --- Select Unit of Measurement ---
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-default" data-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- end of adding laboratory accessory modal -->
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-end">
                            <select name="selected_category" id="selected-category" class="form-control mr-2"
                                style="width: 150px">
                                <option value="">All</option>
                                <option value="">Chemicals</option>
                                <option value="">Apparatus</option>
                            </select>
                            <RouterLink to="/make_laboratory_requesite"><button
                                    class="btn btn-success mb-2 mr-2 float-right">
                                    Make Request
                                </button></RouterLink>
                            <RouterLink to="/laboratory_requesite_list"><button class="btn btn-info mb-2 float-right">
                                    View Requests
                                </button></RouterLink>
                        </div>
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between">
                                        <h3 class="card-title">
                                            List of apparatus/chemicals available in the school laboratory
                                        </h3>

                                        <button class="btn btn-info" data-toggle="modal" data-target="#modal-default"
                                            @click.prevent="">
                                            Add Apparatus/Chemical
                                        </button>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                    <table id="example2" class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Code</th>
                                                <th>Apparatus/Chemicals</th>
                                                <th>Description</th>
                                                <th>Type</th>
                                                <th>Quantity In Stock</th>
                                                <th>Last Purchase</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>LGG12</td>
                                                <td>Burette</td>
                                                <td>20 burettes purchased</td>
                                                <td>Apparatus</td>
                                                <td>50 cc</td>
                                                <td>28/09/2023</td>

                                                <td></td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Code</th>
                                                <th>Apparatus/Chemicals</th>
                                                <th>Description</th>
                                                <th>Type</th>
                                                <th>Quantity In Stock</th>
                                                <th>Last Purchase</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <!-- /.card-body -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
  
<script>
import "../../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "../../assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "../../assets/plugins/datatables/jquery.dataTables.min.js";
import "../../assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js";
import "../../assets/plugins/datatables-responsive/js/dataTables.responsive.min.js";
import "../../assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js";
import "../../assets/plugins/datatables-buttons/js/dataTables.buttons.min.js";
import "../../assets/plugins/datatables-buttons/js/buttons.bootstrap4.min.js";
$(function () {
    $("#example1")
        .DataTable({
            responsive: true,
            lengthChange: false,
            autoWidth: false,
            buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
        })
        .buttons()
        .container()
        .appendTo("#example1_wrapper .col-md-6:eq(0)");
});
export default {
    created() {
        $("#example2").DataTable({
            paging: true,
            lengthChange: false,
            searching: false,
            ordering: true,
            info: true,
            autoWidth: false,
            responsive: true,
        });
    },
    data() {
        return {
            apparatus_data: {},
        };
    },
};
</script>
  
<style scoped></style>
  