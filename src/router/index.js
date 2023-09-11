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
  ]
})

export default router
