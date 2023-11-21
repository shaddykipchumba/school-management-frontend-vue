<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Payment Transactions</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Fee Transactions</li>
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
                        <div class="card">
                            <div class="card-header m-0">
                                <h3 class="card-title">
                                    List of all fee transactions done in your institution
                                </h3>

                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <table id="example1" class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Transaction ID</th>
                                            <th>Mode of Payment</th>
                                            <th>Referrence</th>
                                            <th>Amount</th>
                                            <th>Date Payed</th>
                                            <!-- <td>Class Prefect</td> -->
                                            <!-- <td>No. of Students</td> -->
                                            <!-- subclasses should be displayed if existing -->
                                            <!-- <td>Sub Classes</td> -->
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>PMTNY2023</td>
                                            <td>M-Pesa</td>
                                            <td>KMHU90U</td>
                                            <td>
                                                KSh 4000/=
                                            </td>
                                            <td>23/02/2021</td>
                                            <td>X</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Transaction ID</th>
                                            <th>Mode of Payment</th>
                                            <th>Referrence</th>
                                            <th>Amount</th>
                                            <th>Date Payed</th>
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
  