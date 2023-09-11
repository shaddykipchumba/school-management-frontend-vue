<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Grading System</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Gading System</li>
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
                <!-- add examination modal -->
                <div class="modal fade centered" id="modal-default">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4 class="modal-title">Create new Grading System</h4>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body row">
                          <div class="form-group col-lg-12">
                            <label for="department_name" class="form-label">Select Department<span class="text-danger">*</span></label>
                            <select class="form-control select2bs4" data-dropdown-css-class="select2-danger" style="width: 100%;">
                                <option selected="selected">--- Select Head of Department ---</option>
                                
                              </select>
                          </div>
                          <fieldset class="col-lg-12 row" style="border: 1;">
                            <legend>Marks and their Grading</legend>
                          <div class="col-lg-12 d-flex justify-content-between">
                            <div class="row">
                                <div class="form-group col-6">
                            
                                    <label for="from" class="form-label">From <span class="text-danger">*</span></label>
                                    <input type="number" class="form-control" name="from">
                                  </div>
                                  <div class="form-group col-6">
                                    <label for="to" class="form-label">To</label>
                                    <input type="number" class="form-control" name="to">
                                  </div>
                            </div>
                            <div class="">
                                <button class="btn btn-info"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                            </div>
                          </div>
                        </fieldset>
                          
                         
                        </div>
                        <div class="modal-footer justify-content-between">
                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                      <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                  </div>
                <!-- end of add examination modal -->
                <div class="col-lg-12 mb-2" style="width: 100%;">
                    <!-- <div class="d-flex justify-content-end">
                        <select name="class_name" id="class_name" class="form-control col-3 float-right">
                            <option value="">--- Select Class ---</option>
                        </select>
                        <select name="stream_name" id="stream_name" class="form-control col-3">
                            <option value="">---Select Stream</option>
                        </select>
                        <select name="exam" id="exam" class="form-control col-3">
                            <option value="">---Select Exam</option>
                        </select>
                    </div> -->
                </div>
    
                <div class="card">
                  <div class="card-header m-0">
                    <h3 class="card-title">List of Departments with their grading System</h3>
                    <button class="btn btn-info float-right" data-toggle="modal" data-target="#modal-default" @click.prevent=""><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>Department</th>
                        <th>Subjects</th>
                        <th>Grading</th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Science Department</td>
                        <td><ul>
                            <li>Mathematics</li>
                            <li>Physics</li>
                        </ul></td>
                        <td><ol>
                            <li>85% - 100% A</li>
                            <li>75% - 85% A-</li>
                        </ol></td>
                        
                        <td>
                            <div class="d-flex justify-content-between">
                                <button class="btn btn-success"><i class="fa fa-edit" aria-hidden="true"></i></button>
                                <button class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </td>
                      </tr>
                      
                      </tbody>
                      <tfoot>
                      <tr>
                        <th>Department</th>
                        <th>Subjects</th>
                        <th>Grading</th>
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
    import '../../assets/plugins/select2/css/select2.min.css'
  import '../../assets/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css'
    
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

    import '../../assets/plugins/select2/js/select2.full.min.js'
    
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

        $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
      theme: 'bootstrap4'
    })
      });
    </script>