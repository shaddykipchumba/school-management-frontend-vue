<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Students Perfomance</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Students Perfomance</li>
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
                        <select name="class_name" id="class_name" class="form-control col-3 float-right">
                            <option value="">--- Select Class ---</option>
                        </select>
                        <select name="stream_name" id="stream_name" class="form-control col-3">
                            <option value="">---Select Stream</option>
                        </select>
                        <select name="exam" id="exam" class="form-control col-3">
                            <option value="">---Select Exam</option>
                        </select>
                    </div>
                </div>
    
                <div class="card">
                  <div class="card-header m-0">
                    <h3 class="card-title">List of Students with their perfomance</h3>
                    <button class="btn btn-info float-right"><i class="fa fa-download" aria-hidden="true"></i></button>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>Position</th>
                        <th>Admission Number</th>
                        <th>Full Name</th>
                        <th>Class</th>
                        <th>Number of Subjects</th>
                        <th>Mean Grade</th>
                        <th>Points</th>
                        <th>Deviation</th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>4719</td>
                        <td>Shadrack Kipchumba</td>
                        <td>Form Three</td>
                        <td>8</td>
                        <td> A</td>
                        <td>85</td>
                        <td>+25</td>
                        <td></td>
                      </tr>
                      
                      </tbody>
                      <tfoot>
                      <tr>
                        <th>Position</th>
                        <th>Admission Number</th>
                        <th>Full Name</th>
                        <th>Class</th>
                        <th>Number of Subjects</th>
                        <th>Mean Grade</th>
                        <th>Points</th>
                        <th>Deviation</th>
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
    </script>