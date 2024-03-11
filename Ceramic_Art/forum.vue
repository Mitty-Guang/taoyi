<template>
    <div v-for="i in 5": key="i" @click="a">
        {{hello1}}
        {{hello.v}}
    </div>
</template>
<script>


export default({
    data(){
        return{
            "hello1":"你好",
            "hello":{
                "v":true
            }
        }
    },
    methods:{
        a(){
            this.hello.data[0]=false;
            console.log(this.hello.data[0])
        }
    }

})
</script>
