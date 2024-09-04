export default defineNuxtRouteMiddleware((to) => {
    const route = useRouter()
    if (!to.query?.page){
        route.push({path: '/', query: {page: 1}})
    }
})