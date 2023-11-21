<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Items Issuance</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Issue Items</li>
                        </ol>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="card card-default">
                    <div class="card-header">
                        <h3 class="card-title">
                            Select from The following consumable items to be issued
                        </h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Consumable Items</label>
                                    <select class="duallistbox" multiple="multiple" v-model="items" id="consumable_items">
                                        <option>Maize</option>
                                        <option>Beans</option>
                                        <option>Rice</option>
                                        <option>Cooking Oil</option>
                                        <option>Cabbages</option>
                                        <option>Sugar</option>
                                        <option>Tea Leaves</option>
                                    </select>
                                </div>
                                <!-- /.form-group -->
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <button class="btn btn-info" @click.prevent="submit()">submit</button>
                    </div>
                </div>
                <div class="col-md-12" v-if="items.length > 0">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Quantity Confirmation</h3>
                        </div>
                        <div class="card-body row">
                            <!-- Date -->
                            <div class="form-group col-lg-12">
                                <label>Date Issued</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                    </div>
                                    <input type="text" class="form-control" data-inputmask-alias="datetime"
                                        data-inputmask-inputformat="dd/mm/yyyy" data-mask />
                                </div>
                            </div>
                            <hr />
                            <h4 class="col-12" v-if="items.length > 0">Items Quantities</h4>
                            <p class="col-12" v-if="items.length > 0">
                                <i>please fill in the quantities of the items you earlier selected</i>
                            </p>
                            <div v-for="item in items[0]" :key="item.name" class="form-group col-md-4">
                                <label>{{ item }}:</label>

                                <div class="input-group">
                                    <div class="input-group-prepend"></div>
                                    <input type="number" class="form-control float-right" />
                                </div>
                                <!-- /.input group -->
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-success float-right">Issue Items</button>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->

                    <!-- /.card -->
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import "../../assets/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css";
import "../../assets/plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js";
import "../../assets/plugins/inputmask/jquery.inputmask.min.js";

export default {
    created() {
        $(function () {
            $(".duallistbox").bootstrapDualListbox();
            // date picker
            //Datemask dd/mm/yyyy
            $("#datemask").inputmask("dd/mm/yyyy", { placeholder: "dd/mm/yyyy" });
            //Datemask2 mm/dd/yyyy
            $("#datemask2").inputmask("mm/dd/yyyy", { placeholder: "mm/dd/yyyy" });
            //Money Euro
            $("[data-mask]").inputmask();

            //Date picker
            $("#reservationdate").datetimepicker({
                format: "L",
            });
        });
    },
    data() {
        return {
            items: [],
        };
    },
    methods: {
        submit() {
            this.items = [];
            this.items.push($("#consumable_items").val());
            console.log(this.items);
        },
    },
};
</script>
  
<style scoped></style>
  