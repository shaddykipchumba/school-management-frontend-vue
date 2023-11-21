<template>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Students Accessories</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Students Accessories</li>
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
                            <RouterLink to="/issued_students_accessories"><button class="btn btn-success mb-2 float-right">
                                    Check Issued Accessories
                                </button></RouterLink>
                        </div>
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between">
                                        <h3 class="card-title">
                                            List of students accessories available in school
                                        </h3>

                                        <RouterLink to="/issue_student_accessory">
                                            <button class="btn btn-info">Issue Accessory</button>
                                        </RouterLink>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                    <table id="example2" class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Code</th>
                                                <th>Item Name</th>
                                                <th>Description</th>
                                                <th>Quantity In Stock</th>
                                                <th>Total Issued</th>
                                                <th>Last Issue</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>LGG12</td>
                                                <td>Locker</td>
                                                <td>Locker number 12. or any description</td>
                                                <td>10 cc</td>
                                                <td>170 cc</td>
                                                <td>28/09/2023</td>

                                                <td></td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Code</th>
                                                <th>Item Name</th>
                                                <th>Description</th>
                                                <th>Quantity In Stock</th>
                                                <th>Total Issued</th>
                                                <th>Last Issue</th>
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
  