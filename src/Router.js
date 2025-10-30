import { createWebHistory, createRouter} from 'vue-router';
import PadreDeportes from './components/PadreDeportes.vue';
import ComicsComponent from './components/ComicsComponent.vue';
import NumerosPadre from './components/NumerosPadre.vue';
import SeleccionMultiple from './components/SeleccionMultiple.vue';
import SumaCheckbox from './components/SumaCheckbox.vue';
import NumeroDoble from './components/NumeroDoble.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';

const routes = [
    {path:"/", component: PadreDeportes},
    {path:"/comics", component: ComicsComponent},
    {path:"/numeros", component: NumerosPadre},
    {path:"/multiple", component: SeleccionMultiple},
    {path:"/checkbox", component: SumaCheckbox},
    {path: "/doble/:numero?", component: NumeroDoble},  //al poner ? significa que es parametro es opcional, es decir, puede tener paramatro o no
    {path: "/tablamultiplicar/:numero", component: TablaMultiplicar}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;