<template>
    <UiVLoader v-if="postsStore.IsLoading"></UiVLoader>
    <main v-else>
        <section class="main mt-10">
            <div class="container">
                <div class="main__header flex justify-between items-center">
                    <h2 class="section__title">Посты</h2>
                    <button 
                    @click="emits('OpenModalWindow')"
                    class="main__button text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Добавить пост</button>
                </div>
                
                <div class="main__block flex flex-col gap-y-2.5 mt-5">
                    <PostsVPostCard 
                    v-for="PostItem in postsStore.posts"
                    :key='PostItem.id'
                    :PostItem="PostItem"
                    ></PostsVPostCard>
                </div>
            </div>
        </section>
        <UiVPagination
        @GoToNewPage="NavigateToNewPage"
        ></UiVPagination>
    </main>
</template>
<script setup>
import { usepostsStore } from '~/stores/posts';

const postsStore = usepostsStore()
const route = useRoute()
const router = useRouter()

definePageMeta({
  middleware: "main"
})

useSeoMeta({
    title: 'Все посты'
})

onMounted(() => {
    postsStore.GET_ALL_POSTS_FROM_DB(route.query.page)
})

const emits = defineEmits(['OpenModalWindow'])

function NavigateToNewPage(NewPage){
    if (NewPage >= 1){
        router.push({path: '/', query: {page: NewPage}})
        postsStore.GET_ALL_POSTS_FROM_DB(NewPage)
    }
    
    
}
</script>