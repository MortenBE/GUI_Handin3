<template>
    <ul id="tags">
        <li v-repeat="tags">
            {{list}}
        </li>
    </ul>
</template>

        var list = new Vue({
        el: '#tags',
        data: {
        tags: ['JavaScript', 'MVVM', 'Vue.js']
        }
        })
