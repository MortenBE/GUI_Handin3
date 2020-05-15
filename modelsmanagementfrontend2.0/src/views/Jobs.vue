<template>
    <div id ="app">

        <Jobs v-bind:jobs="jobs"/>
    </div>
</template>

<script>
import Jobs from './Components/Jobs';


export default {
    name: 'Jobs',
    components: {
        Jobs
    },
    data()
    {
        return{
            Jobs: [
                {
                    id: 1,
                    Name: "Flot pige"
                },
                {
                    id: 2,
                    Name: "Pæn pige"
                },
                {
                    id: 3,
                    Name: "Tyk pige"
                },
                {
                    id: 4,
                    Name: "Høj pige"
                }
            ]
        }
    }
}
</script>