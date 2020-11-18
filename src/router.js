import Vue from 'vue'
import Router from 'vue-router'
// --------------------------------------Frontpage------------------------------------------------------------------
import login from '@/views/Frontpage/login'
import regis from '@/views/Frontpage/regis'
import regis2 from '@/views/Frontpage/regis2'
import home from '@/views/Frontpage/home'
// ---------------------------------------MANAGE DEVICE-------------------------------------------------------------------
// ---------------------------------------ADMIN-------------------------------------------------------------------
import createDevice from '@/views/PageInAppbar/manageDevice/admin/createDevice'
import deviceList from '@/views/PageInAppbar/manageDevice/admin/deviceList'
// ---------------------------------------MANAGE User-------------------------------------------------------------------
import adminPasswordReset from '@/views/PageInAppbar/manageUser/adminPasswordReset'
import resetpass from '@/views/PageInAppbar/manageUser/resetpass'
import editProfile from '@/views/PageInAppbar/manageUser/editProfile'
import createUser from '@/views/PageInAppbar/manageUser/createUser'

Vue.use(Router)

export default new Router(

  {
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      name: 'Regis',
      path: '/',
      component: regis,
      children: [
        {
          name: 'Regis2',
          path: '/regis2',
          component: regis2,
        },
        {
          name: 'Login',
          path: '/login',
          component: login,
        },
        {
          name: 'Home',
          path: '/',
          component: home,
        },
      ],
    },

    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        // {
        //   name: 'Dashboard',
        //   path: '',
        //   component: () => import('@/views/dashboard/Dashboard'),
        // },
        // ---------------------------------------MANAGE User-------------------------------------------------------------------
        {
          name: 'Password Reset',
          path: '/resetpassword',
          component: resetpass,
        },
        {
          name: 'Admin Password Reset',
          path: '/adminPasswordReset',
          component: adminPasswordReset,
        },
        {
          name: 'Create User',
          path: '/createUser',
          component: createUser,
        },
        {
          name: 'Edit Profile',
          path: '/editProfile',
          component: editProfile,
        },
// ---------------------------------------MANAGE DEVICE-------------------------------------------------------------------
// ---------------------------------------ADMIN-------------------------------------------------------------------
{
  name: 'Create Device',
  path: '/createdevice',
  component: createDevice,
},
{
  name: 'Devices List',
  path: '/devicelist',
  component: deviceList,
},

      ],
    },
  ],
})
