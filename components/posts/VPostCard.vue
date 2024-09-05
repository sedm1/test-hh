<template>
    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md" 
    >
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ PostItem.title }}</h2>
        <p class="mb-5 font-light text-gray-500 ">{{PostItem.body}}</p>
        <p class=" font-light text-gray-500">{{PostItem.id}}</p>
    </article> 
</template>
<script setup>
const {PostItem} = defineProps({
    PostItem: Object
})
</script>