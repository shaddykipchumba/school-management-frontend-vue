<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>School Departments</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Departments</li>
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
                <!-- Create Department Modal -->
                <div class="modal fade centered" id="modal-default">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4 class="modal-title">Create Department</h4>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body row">
                          <div class="form-group col-lg-6">
                            <label for="department_name" class="form-label">Department Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="department_name" placeholder="Department Name">
                          </div>
                          <div class="form-group col-lg-6">
                            <label for="head_of_department">Head of Department</label>
                            <select class="form-control select2bs4" data-dropdown-css-class="select2-danger" style="width: 100%;">
                                <option selected="selected">--- Select Head of Department ---</option>
                                
                              </select>
                          </div>
                          <div class="form-group col-lg-12">
                            <label for="description" class="form-label">Department Description<span class="text-danger">*</span></label>
                            <textarea name="description" id="description" cols="30" rows="10" class="form-control" placeholder="Please enter brief description on objective that the department is involved in"></textarea>
                          </div>
                          <div class="form-group col-lg-12">
                            <div class="icheck-success d-inline">
                                <input type="checkbox" id="is_curriculum">
                                <label for="is_curriculum">Is this department involved with curriculum activities?
                                </label>
                              </div>
                          </div>
                          
                        </div>
                        <div class="modal-footer justify-content-between">
                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                      <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                  </div>
                <!-- End create Department modal -->
    
                <div class="card">
                  <div class="card-header m-0">
                    <h3 class="card-title">List of Departments in your institution</h3>
                    <button class="btn btn-info float-right" data-toggle="modal" data-target="#modal-default" @click.prevent="">Create Department</button>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Description</th>
                        <th>Head of Department</th>
                       
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Trident</td>
                        <td>Internet
                          Explorer 4.0
                        </td>
                        <td>Win 95+</td>
                        <td> 4</td>
                        <td><div class="d-flex">
                            <button class="btn btn-success m-2"><i class="fa fa-edit" aria-hidden="true"></i></button>
                            <button class="btn btn-danger m-2"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div></td>
                      </tr>
                      
                      </tbody>
                      <tfoot>
                      <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Description</th>
                        <th>Head of Department</th>
                       
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
    import '../../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
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