<template>
    <div class="form__line">

        <label :for="nameId" class="form__label" :class="{ 'form__label_req': req }">
            <slot></slot>
        </label>

        <textarea type="text" class="input" :value="modelValue" @input="updateInput" :class="{ '_req': req }"
            :id="nameId" autocomplete="off" name="form[]" data-value="" :placeholder="placeHolder"
            :data-error="dataError">
        </textarea>
    </div>
</template>


<script>
export default {
    name: 'my-textarea',

    props: {
        modelValue: [String, Number],
        nameId: {
            type: String, Number,
            default: () => ''
        },
        req: {
            type: Boolean,
            required: true,
            default: () => ""
        },
        placeHolder: {
            type: String, Number,
            default: () => ''
        },
        dataError: {
            type: String, Number,
            default: () => ''
        },
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>