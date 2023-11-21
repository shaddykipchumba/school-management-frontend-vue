<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Results Publication</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Results Publish</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="col-lg-12 mb-2" style="width: 100%;">
              <div class="d-flex justify-content-end">
                <select @change="results = true" name="subject_name" id="subject_name"
                  class="form-control col-3 float-right">
                  <option value="">--- Select Subject ---</option>
                  <option value="">Kiswahili</option>
                </select>

              </div>
            </div>

            <div class="card">
              <div class="card-header m-0">
                <h3 class="card-title">List of Students with Upload fields</h3>
                <input type="number" name="" id="" class="form-control float-right" placeholder="out of">
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                    <tr>

                      <th>Admission Number</th>
                      <th>Full Name</th>


                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                      <td>4719</td>
                      <td>Shadrack Kipchumba</td>

                      <td>
                        <div class="d-flex">
                          <input @keypress="marksChanged = true" type="number" name="" id="" class="form-control"
                            width="100px">
                          <button v-if="marksChanged == true" class="btn btn-success">save</button>
                        </div>

                      </td>
                    </tr>

                  </tbody>
                  <tfoot>
                    <tr>

                      <th>Admission Number</th>
                      <th>Full Name</th>

                      <th>Marks</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <!-- /.card-body -->
              <div class="card-footer d-flex justify-content-between">
                <select name="" id="" class="form-control" style="width: 100px;">
                  <option value="">Add Student</option>
                </select>
                <button v-if="marksChanged == false" class="btn btn-info float-right"
                  @click.prevent="uploaded = true">Upload Changes</button>
                <button v-if="marksChanged == true" class="btn btn-dark float-right">Publish Results</button>
              </div>
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
import '../../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css'
import '../../assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css'
import '../../assets/plugins/datatables-buttons/css/buttons.bootstrap4.min.css'

//  Datatables styles 
// DataTables  & Plugins
import '../../assets/plugins/datatables/jquery.dataTables.min.js'
import '../../assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js'
import '../../assets/plugins/datatables-responsive/js/dataTables.responsive.min.js'
import '../../assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js'
import '../../assets/plugins/datatables-buttons/js/dataTables.buttons.min.js'
import '../../assets/plugins/datatables-buttons/js/buttons.bootstrap4.min.js'
import '../../assets/plugins/jszip/jszip.min.js'
// import '../../assets/plugins/pdfmake/pdfmake.min.js'
// import '../../assets/plugins/pdfmake/vfs_fonts.js'
import '../../assets/plugins/datatables-buttons/js/buttons.html5.min.js'
import '../../assets/plugins/datatables-buttons/js/buttons.print.min.js'
import '../../assets/plugins/datatables-buttons/js/buttons.colVis.min.js'

$(function () {
  $("#example1").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,
    "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
  }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
  $('#example2').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    "info": true,
    "autoWidth": false,
    "responsive": true,
  });
});
export default {
  data() {
    return {
      marksChanged: false,
      uploaded: false,
    }
  },
}
</script>