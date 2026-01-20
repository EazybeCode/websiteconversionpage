
import { Feature } from './types';

export const featuresData: Feature[] = [
  {
    id: 'capture',
    tag: 'Sincronización Nativa',
    title: 'Historial de Ventas Protegido',
    description: 'Elimina la dependencia del celular del vendedor. Sincroniza cada chat automáticamente para que los datos y los clientes siempre pertenezcan a tu empresa.',
    points: [
      '<strong>Cero Trabajo Manual</strong>: Tu equipo vende mientras Eazybe registra todo en el CRM.',
      '<strong>Continuidad del Negocio</strong>: Si un vendedor sale, el historial de chats permanece intacto.',
      '<strong>Visibilidad de Manager</strong>: Revisa qué tácticas funcionan sin pedir reportes manuales.'
    ],
    visualType: 'timeline'
  },
  {
    id: 'revenue-inbox',
    tag: 'Aceleración de Ingresos',
    title: 'Responde Primero a los Grandes Deals',
    description: 'No todos los prospectos valen lo mismo. Prioriza a tus clientes VIP y cierra negocios un 40% más rápido respondiendo en segundos.',
    points: [
      '<strong>Filtro de ROI</strong>: Visualiza primero los chats asociados a tus negocios de mayor valor.',
      '<strong>Alertas Críticas</strong>: Recibe avisos si un cliente caliente lleva minutos sin respuesta.',
      '<strong>Pipeline en el Chat</strong>: Cambia etapas del negocio sin salir de la interfaz de WhatsApp.'
    ],
    visualType: 'inbox'
  },
  {
    id: 'workflows',
    tag: 'Automatización Inteligente',
    title: 'Follow-ups que Cierran Solos',
    description: 'Escala tu operación sin contratar más personal. Automatiza las tareas repetitivas y deja que tu equipo se enfoque solo en negociar.',
    points: [
      '<strong>Seguimiento Implacable</strong>: Envía recordatorios automáticos si el cliente no responde.',
      '<strong>Agendamiento Directo</strong>: Clientes reservan demos por WhatsApp, llenando tu calendario solo.',
      '<strong>Calificación con IA</strong>: Filtra leads curiosos y entrega solo oportunidades reales a tus cerradores.'
    ],
    visualType: 'workflow'
  },
  {
    id: 'properties',
    tag: 'Analítica de Ventas',
    title: 'Métricas Reales para tu Equipo',
    description: 'Toma decisiones basadas en datos crudos de WhatsApp. Mide el desempeño real de cada vendedor en el canal donde ocurren las ventas.',
    points: [
      '<strong>KPIs de Velocidad</strong>: Mide el tiempo de respuesta exacto de cada integrante del equipo.',
      '<strong>Resúmenes con IA</strong>: Obtén puntos clave de hilos largos de WhatsApp directo en tu CRM.',
      '<strong>Previsión de Cierre</strong>: Proyecta ingresos basándote en la actividad real de las conversaciones.'
    ],
    visualType: 'properties'
  }
];
