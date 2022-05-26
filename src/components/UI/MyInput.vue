<template>
    <input
        type="text"
        :value = "modelValue"
        @input="updateInput"
        autocomplete="off"
        name="form[]"
        data-value=""
        class="input"
    >

</template>


<script>
export default {
    name: 'my-input',

    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>