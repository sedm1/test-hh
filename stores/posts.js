export const usepostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        IsLoading: true
    }),
    getters: {
    },
    actions: {
        async GET_ALL_POSTS_FROM_DB(page){
            this.IsLoading = true
            try {
                const config = useRuntimeConfig()
                const posts = await $fetch(`${config.public.Api}?_start=${(page - 1) * 10}&_limit=10`)

                this.posts = posts
                this.IsLoading = false
            } catch(err){
                console.log('Ошибка при получении постов')
                return err
            }
        }
    },
});
