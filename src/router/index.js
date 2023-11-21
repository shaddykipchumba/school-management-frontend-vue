import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/roles',
      name: 'roles',
      component: () => import('../addons/Roles.vue')
    },
    {
      path: '/add_roles',
      name: 'add_roles',
      component: () => import('../addons/AddRoles.vue')
    },
    
    {
      path: '/administrators',
      name: 'administrators',
      component: () => import('../views/UserManagement/Administrators.vue')
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../views/UserManagement/Staff.vue')
    },
    {
      path: '/add_staff',
      name: 'add_staff',
      component: () => import('../views/UserManagement/AddStaff.vue')
    },
    {
      path: '/school_configurations',
      name: 'school_configurations',
      component: () => import('../views/SchoolConfigurations/SchoolConfigurations.vue')
    },
    {
      path: '/classes_configurations',
      name: 'classes_configurations',
      component: () => import('../views/SchoolConfigurations/ClassesConfig.vue')
    },
    {
      path: '/add_class',
      name: 'add_class',
      component: () => import('../views/SchoolConfigurations/AddClass.vue')
    },
    {
      path: '/subjects_configurations',
      name: 'sujects_configurations',
      component: () => import('../views/SchoolConfigurations/Subjects.vue')
    },
    {
      path: '/add_subject',
      name: 'add_subject',
      component: () => import('../views/SchoolConfigurations/AddSubject.vue')
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: () => import('../views/SchoolConfigurations/Sessions.vue')
    },
    {
      path: '/create_session',
      name: 'create_session',
      component: () => import('../views/SchoolConfigurations/CreateSession.vue')
    },
    {
      path: '/fee_structures',
      name: 'fee_structures',
      component: () => import('../views/SchoolConfigurations/FeeStructure.vue')
    },
    {
      path: '/create_fee',
      name: 'create_fee',
      component: () => import('../views/SchoolConfigurations/CreateFee.vue')
    },
    {
      path: '/school_departments',
      name: 'school_departments',
      component: () => import('../views/SchoolConfigurations/SchoolDepartments.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/StudentManagement/Students.vue')
    },
    {
      path: '/add_student',
      name: 'add_student',
      component: () => import('../views/StudentManagement/AddStudent.vue')
    },
    {
      path: '/students_subjects',
      name: 'students_subjects',
      component: () => import('../views/StudentManagement/StudentSubjects.vue')
    },
    {
      path: '/assign_subjects',
      name: 'assign_subjects',
      component: () => import('../views/StudentManagement/AssignSubjects.vue')
    },
    {
      path: '/students_attendance',
      name: 'students_attendance',
      component: () => import('../views/StudentManagement/StudentsAttendance.vue')
    },
    {
      path: '/students_perfomance',
      name: 'students_perfomance',
      component: () => import('../views/StudentManagement/StudentsPerfomance.vue')
    },
    {
      path: '/exams',
      name: 'exams',
      component: () => import('../views/ExaminationManagement/Exams.vue')
    },
    {
      path: '/grading_system',
      name: 'grading_system',
      component: () => import('../views/ExaminationManagement/GradingSystem.vue')
    },
    {
      path: '/upload_class_select',
      name: 'upload_class_select',
      component: () => import('../views/ExaminationManagement/SelectClassUpload.vue')
    },
    {
      path: '/upload_class_select',
      name: 'upload_class_select',
      component: () => import('../views/ExaminationManagement/SelectSubject.vue')
    },
    // // store management routes
    {
      path: '/store_categories',
      name: 'store_categories',
      component: () => import('../views/StoreManagement/StoreCategories.vue')
    },
    {
      path: '/store_items',
      name: 'store_items',
      component: () => import('../views/StoreManagement/StoreItems.vue')
    },
    {
      path: '/add_item',
      name: 'add_item',
      component: () => import('../views/StoreManagement/AddItem.vue')
    },   
    // this will select items only from the consumable category
    {
      path: '/consumable_register',
      name: 'consumable_register',
      component: () => import('../views/StoreManagement/ConsumableRegister.vue')
    }, 
    {
      path: '/consumable_content',
      name: 'consumable_content',
      component: () => import('../views/StoreManagement/ConsumableContents.vue')
    }, 
    {
      path: '/issue_items',
      name: 'issue_items',
      component: () => import('../views/StoreManagement/IssueItems.vue')
    },
    {
      path: '/track_item_issuance',
      name: 'track_item_issuance',
      component: () => import('../views/StoreManagement/TrackItemIssuance.vue')
    },
    {
      path: '/students_accessories',
      name: 'students_accessories',
      component: () => import('../views/StoreManagement/studentsAccessories.vue')
    },
    {
      path: '/issued_students_accessories',
      name: 'issued_students_accessories',
      component: () => import('../views/StoreManagement/IssuedStudentsAccessories.vue')
    },
    {
      path: '/issue_student_accessory',
      name: 'issue_student_accessory',
      component: () => import('../views/StoreManagement/IssueStudentAccessory.vue')
    },
    {
      path: '/staff_accessories',
      name: 'staff_accessories',
      component: () => import('../views/StoreManagement/StaffAccessories.vue')
    },
    {
      path: '/issued_staff_accessories',
      name: 'issued_staff_accessories',
      component: () => import('../views/StoreManagement/IssuedStaffAccessories.vue')
    },
    {
      path: '/issue_staff_accessory',
      name: 'issue_staff_accessory',
      component: () => import('../views/StoreManagement/IssueStaffAccessory.vue')
    },
    {
      path: '/laboratory_accessories',
      name: 'laboratory_accessories',
      component: () => import('../views/StoreManagement/LaboratoryAccessories.vue')
    },
    {
      path: '/make_laboratory_requesite',
      name: 'make_laboratory_requesite',
      component: () => import('../views/StoreManagement/LabRequesite.vue')
    },
    {
      path: '/laboratory_requesite_list',
      name: 'laboratory_requesite_list',
      component: () => import('../views/StoreManagement/LabRequisiteList.vue')
    },
    {
      path: '/laboratory_requesite_content',
      name: 'laboratory_requesite_content',
      component: () => import('../views/StoreManagement/LabRequisiteContent.vue')
    },
    // end of store management routes

    // start of finance management module
    {
      path: '/fee_balances',
      name: 'fee_balances',
      component: () => import('../views/FinanceManagement/FeeBalances.vue')
    },
    {
      path: '/fee_payment_statement',
      name: 'fee_payment_statement',
      component: () => import('../views/FinanceManagement/FeePayementStatement.vue')
    },
    {
      path: '/fee_transactions',
      name: 'fee_transactions',
      component: () => import('../views/FinanceManagement/FeeTransactions.vue')
    },
    {
      path: '/pocket_money',
      name: 'pocket_money',
      component: () => import('../views/FinanceManagement/PocketMoney.vue')
    },
    {
      path: '/pocket_money_transaction',
      name: 'pocket_money_transaction',
      component: () => import('../views/FinanceManagement/PocketMoneyTransaction.vue')
    },

    // end of finance management module

    // start of library management module

    {
      path: '/textbooks',
      name: 'textbooks',
      component: () => import('../views/LibraryManagement/TextbookTitles.vue')
    },
    {
      path: '/textbook_specific',
      name: 'textbook_specific',
      component: () => import('../views/LibraryManagement/Textbooks.vue')
    },

    // end of library management module
  ]
})

export default router
