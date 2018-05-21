import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import synergy from '@/components/entries/synergy'
import reuserat from '@/components/entries/reuserat'
import cerner from '@/components/entries/cerner'
import jmatcher from '@/components/entries/jmatcher'
import crimsoncrepes from '@/components/entries/crimsoncrepes'
import schoolprojects from '@/components/entries/schoolprojects'
import library from '@/components/entries/library'
import iot from '@/components/entries/iot'
import kaust from '@/components/entries/kaust'


Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/entry/synergy',
      name: 'Synergy',
      component: synergy
    },
    {
      path: '/entry/reuserat',
      name: 'ReuseRat',
      component: reuserat
    },
    {
      path: '/entry/cerner',
      name: 'Cerner',
      component: cerner
    },
    { 
      path: '/entry/jmatcher',
      name: 'Jmatcher',
      component: jmatcher
    },
    {
      path: '/entry/crimsoncrepes',
      name: 'Crimsoncrepes',
      component: crimsoncrepes
    },
    {
      path: '/entry/schoolprojects',
      name: 'Schoolprojects',
      component: schoolprojects
    },
    {
      path: '/entry/library',
      name: 'Library',
      component: library
    },
    {
      path: '/entry/iot',
      name: 'Iot',
      component: iot
    },
    {
      path: '/entry/kaust',
      name: 'Kaust',
      component: kaust
    }
  ]
})
