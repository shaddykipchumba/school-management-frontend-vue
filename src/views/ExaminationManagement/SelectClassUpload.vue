<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Upload Class Selection</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Class Selection</li>
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
                <div class="row mb-3">
                    <div class="col-md-6 col-sm-6 col-12">
                      <div class="info-box bg-gradient-info">
          <RouterLink to="select_result_subjects">
                        <div class="info-box-content">
                          <span class="info-box-text">Form One</span>
                          <span class="info-box-number">41 Students</span>
          
                          <div class="progress">
                            <div class="progress-bar" style="width: 70%"></div>
                          </div>
                          <span class="progress-description">
                            70% Results Uploaded
                          </span>
                        </div>
                        </RouterLink>
                        <!-- /.info-box-content -->
                      </div>
                      <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                    <div class="col-md-6 col-sm-6 col-12">
                      <div class="info-box bg-gradient-success">
          
                        <div class="info-box-content">
                          <span class="info-box-text">Form Two</span>
                          <span class="info-box-number">21 Students</span>
          
                          <div class="progress">
                            <div class="progress-bar" style="width: 40%"></div>
                          </div>
                          <span class="progress-description">
                            70% Results Uploaded
                          </span>
                        </div>
                        <!-- /.info-box-content -->
                      </div>
                      <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                    <div class="col-md-6 col-sm-6 col-12">
                      <div class="info-box bg-gradient-warning">
          
                        <div class="info-box-content">
                          <span class="info-box-text">Form Three</span>
                          <span class="info-box-number">70 Students</span>
          
                          <div class="progress">
                            <div class="progress-bar" style="width: 50%"></div>
                          </div>
                          <span class="progress-description">
                            50% Results Uploaded
                          </span>
                        </div>
                        <!-- /.info-box-content -->
                      </div>
                      <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                    <div class="col-md-6 col-sm-6 col-12">
                      <div class="info-box bg-gradient-danger">
          
                        <div class="info-box-content">
                          <span class="info-box-text">Form Four</span>
                          <span class="info-box-number">40 Students</span>
          
                          <div class="progress">
                            <div class="progress-bar" style="width: 90%"></div>
                          </div>
                          <span class="progress-description">
                            90% Results Uploaded
                          </span>
                        </div>
                        <!-- /.info-box-content -->
                      </div>
                      <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                  </div>
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
import { RouterLink } from 'vue-router'
    
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