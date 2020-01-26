import Record from './components/body/Record.vue';
import Stats from './components/body/Stats.vue';
import SubDetails from "./components/body/SubDetails.vue";

export const routes = [
    { path: '/', component: Record },
    { path: '/record', component: Record },
    { path: '/stats', component: Stats },
    { path: '/detail/:id', component: SubDetails }
]