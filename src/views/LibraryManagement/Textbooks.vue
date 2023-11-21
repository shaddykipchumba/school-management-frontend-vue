<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Secondary English Form 2</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Textbooks</li>
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
                    <div class="col-12">
                        <div class="modal fade centered" id="modal-sm">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Add a New Textbook</h4>

                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form class="row">
                                            <div class="form-group col-lg-6">
                                                <label for="textbook_title">Textbook Title<span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control" placeholder="Enter Text Title" />
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <label for="category_name">Textbook Number <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control" placeholder="Enter Title Name" />
                                            </div>
                                            <div class="form-group col-lg-12">
                                                <label for="category_description">Title Description</label>
                                                <textarea name="category_description" id="category_description" cols="30"
                                                    rows="10" class="form-control"></textarea>
                                            </div>
                                            <div class="form-group col-lg-12">
                                                <label for="person_incharge">Date registered <span
                                                        class="text-danger">*</span></label>
                                                <input type="date" name="" id="" class="form-control"
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
                        <div class="card">
                            <div class="card-header m-0">
                                <div class="d-flex justify-content-between">
                                    <h3 class="card-title">
                                        List of secondary english textbooks in your institution
                                    </h3>
                                    <button class="btn btn-info float-right" data-toggle="modal" data-target="#modal-sm">
                                        Add Textbook
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <table id="example1" class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Textbook Number</th>
                                            <th>Date Registered</th>
                                            <th>Status</th>
                                            <th>Condition</th>
                                            <th>Number of Times Assigned</th>
                                            <!-- <td>Class Prefect</td> -->
                                            <!-- <td>No. of Students</td> -->
                                            <!-- subclasses should be displayed if existing -->
                                            <!-- <td>Sub Classes</td> -->
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>LSS/002/2023</td>
                                            <td>20/02/2023</td>
                                            <td>
                                                <span class="badge badge-warning">Assigned</span>
                                            </td>
                                            <td>
                                                <span class="badge badge-success">New</span>
                                            </td>
                                            <td>2</td>
                                            <td><button class="btn btn-info">Collect</button></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Textbook Number</th>
                                            <th>Date Registered</th>
                                            <th>Status</th>
                                            <th>Condition</th>
                                            <th>Number of Times Assigned</th>
                                            <!-- <td>Class Prefect</td> -->
                                            <!-- <td>No. of Students</td> -->
                                            <!-- subclasses should be displayed if existing -->
                                            <!-- <td>Sub Classes</td> -->
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>
  
<script>
//  Datatables styles
import "../../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "../../assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "../../assets/plugins/datatables-buttons/css/buttons.bootstrap4.min.css";

//  Datatables styles
// DataTables  & Plugins
import "../../assets/plugins/datatables/jquery.dataTables.min.js";
import "../../assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js";
import "../../assets/plugins/datatables-responsive/js/dataTables.responsive.min.js";
import "../../assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js";
import "../../assets/plugins/datatables-buttons/js/dataTables.buttons.min.js";
import "../../assets/plugins/datatables-buttons/js/buttons.bootstrap4.min.js";
import "../../assets/plugins/jszip/jszip.min.js";
// import '../../assets/plugins/pdfmake/pdfmake.min.js'
// import '../../assets/plugins/pdfmake/vfs_fonts.js'
import "../../assets/plugins/datatables-buttons/js/buttons.html5.min.js";
import "../../assets/plugins/datatables-buttons/js/buttons.print.min.js";
import "../../assets/plugins/datatables-buttons/js/buttons.colVis.min.js";

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
</script>
  