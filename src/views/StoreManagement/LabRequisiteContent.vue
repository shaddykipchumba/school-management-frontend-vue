<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Laboratory Requisite</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Lab Accessories</li>
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
                        <!-- Main content -->
                        <div class="invoice p-3 mb-3">
                            <!-- title row -->
                            <div class="row">
                                <div class="col-12">
                                    <h4>
                                        <!-- this will pick the school name from the school configurations table -->
                                        Lelgel Secondary School
                                        <small class="float-right">Date: 28/09/2023</small>
                                    </h4>
                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- info row -->
                            <div class="row invoice-info">
                                <div class="col-sm-4 invoice-col">
                                    From
                                    <address><strong>Laboratory</strong><br /></address>
                                </div>
                                <!-- /.col -->
                                <div class="col-sm-4 invoice-col">
                                    To
                                    <address><strong>Principal</strong><br /></address>
                                </div>
                                <!-- /.col -->
                                <div class="col-sm-4 invoice-col">
                                    <b>Reference Number #007612</b><br />
                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- /.row -->

                            <!-- Table row -->
                            <div class="row">
                                <div class="col-12 table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Qty</th>
                                                <th>Item</th>
                                                <th>Code #</th>
                                                <th>Description</th>
                                                <th>Date Required</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>7cc</td>
                                                <td>Burette</td>
                                                <td>CGH342FG</td>
                                                <td>-</td>
                                                <td>23/02/2024</td>
                                            </tr>
                                            <tr>
                                                <td>7cc</td>
                                                <td>Burette</td>
                                                <td>CGH342FG</td>
                                                <td>-</td>
                                                <td>23/02/2024</td>
                                            </tr>
                                            <tr>
                                                <td>7cc</td>
                                                <td>Burette</td>
                                                <td>CGH342FG</td>
                                                <td>-</td>
                                                <td>23/02/2024</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- /.row -->

                            <div class="d-flex justify-content-end">
                                <button class="btn btn-success">Confirm Received</button>
                            </div>
                            <!-- /.row -->

                            <!-- this row will not appear when printing -->
                        </div>
                        <!-- /.invoice -->
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
export default {};
</script>
  
<style scoped></style>
  