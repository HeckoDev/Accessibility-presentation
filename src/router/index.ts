import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WithoutA11y from '../views/WithoutA11y.vue'
import WithA11y from '../views/WithA11y.vue'
import DocsView from '../views/DocsView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/without-a11y', component: WithoutA11y },
    { path: '/with-a11y', component: WithA11y },
    { path: '/docs', component: DocsView },
  ],
})

export default router
