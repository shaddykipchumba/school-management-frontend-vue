<template>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Textbook Titles</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Textbook Titles</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <!-- /.container-fluid -->
            </section>
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="modal fade centered" id="modal-sm">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Add a New Textbook Title</h4>

                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form class="row">
                                                <div class="form-group col-lg-6">
                                                    <label for="category_code">Title Code <span
                                                            class="text-danger">*</span></label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Enter Title Code" />
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label for="category_name">Title Name <span
                                                            class="text-danger">*</span></label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Enter Title Name" />
                                                </div>
                                                <div class="form-group col-lg-12">
                                                    <label for="category_description">Title Description</label>
                                                    <textarea name="category_description" id="category_description"
                                                        cols="30" rows="10" class="form-control"></textarea>
                                                </div>
                                                <div class="form-group col-lg-12">
                                                    <label for="person_incharge">Publisher <span
                                                            class="text-danger">*</span></label>
                                                    <input type="text" name="" id="" class="form-control"
                                                        placeholder="Enter Publisher">
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer justify-content-between">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">
                                                Close
                                            </button>
                                            <button type="button" class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                    <!-- /.modal-content -->
                                </div>
                                <!-- /.modal-dialog -->
                            </div>
                            <!-- /.modal -->
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between">
                                        <h3 class="card-title">
                                            Textbook titles for textbooks available in your institution.
                                        </h3>
                                        <button class="btn btn-info" data-toggle="modal" data-target="#modal-sm">
                                            Add Textbook Title
                                        </button>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                    <table id="example2" class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title Code</th>
                                                <th>Title Name</th>
                                                <th>Description</th>
                                                <th>Publisher</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>TXT123LSS</td>
                                                <td>
                                                    <RouterLink to="textbook_specific"><a href="#">Secondary English form
                                                            2</a></RouterLink>
                                                </td>
                                                <td> - </td>
                                                <td>Longhorn publishers</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Title Code</th>
                                                <th>Title Name</th>
                                                <th>Description</th>
                                                <th>Publisher</th>
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
    $("#example2").DataTable({
        paging: true,
        lengthChange: false,
        searching: false,
        ordering: true,
        info: true,
        autoWidth: false,
        responsive: true,
    });
});
export default {};
</script>
  
<style scoped></style>
  