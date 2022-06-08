<template>
    <!-- v-model="modelValue" связывается с родительским v-model="selectedSort" -->
    <select class="select__item" v-model="modelValue" :order="order" @change="changeOption">
        <option class="select__option-default" disabled value="">Выберете из списка</option>
        <option class="select__option" v-for="option in options" :key="option.value" :value="option.value" value="">
            {{ option.name }}
        </option>
    </select>

</template>


<script>
export default {
    name: 'my-select',
    props: {
        modelValue: { type: String },
        order: [String, Number],
        options: {
            type: Array,
            // Так как по дефолту у нас будт "пустой массив", поэтому рекомендуется использовать стрелочную функцию
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit("update:modelValue", event.target.value);
            this.$emit("update:order", event.target.selectedIndex);
        }
    }
}
</script>

<style lang="scss" scoped>
.select {
    &__item {
        width: 100%;

        position: relative;
        cursor: pointer;
        padding: 10px 27px 10px 16px;
        color: #B4B4B4;
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        background: #FFFEFB;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        outline: none;
    }

    &__option-default {
        background-color: #e8e6e3;
    }

    &__option {
        color: darken(#B4B4B4, 20%);
        display: block;
        min-width: 100%;
        left: 0;
        border: 1px solid #d9d9d9;
        border-top: 0;
        background-color: #FFFEFB;
        font-size: 1.2rem;
        line-height: 1.5rem;
        min-width: 100%;
        cursor: pointer;
        padding: 5px 10px;
        margin: 0px 0px 0px 0px;

        @media (min-width: 992px) {
            &:hover {
                background: darken(#FFFEFB, 20%);
            }
        }
    }
}
</style>