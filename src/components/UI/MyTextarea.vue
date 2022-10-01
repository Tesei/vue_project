<template>
    <div class="form__line">

        <label
            :for="nameId"
            class="form__label"
            :class="{ 'form__label_req': req }"
        >
            <slot></slot>
        </label>

        <textarea
            type="text"
            class="input"
            :value="modelValue.trim()"
            @input="updateInput"
            :class="{ '_req': req }"
            :id="nameId"
            autocomplete="off"
            name="form[]"
            data-value=""
            :placeholder="placeHolder"
            :data-error="dataError"
        >
        </textarea>
    </div>
</template>


<script>
export default {
    name: 'my-textarea',

    props: {
        modelValue: [String, Number],
        nameId: {
            type: [String, Number],
            default: () => ''
        },
        req: {
            type: Boolean,
            required: true,
            default: () => ""
        },
        placeHolder: {
            type: [String, Number],
            default: () => ''
        },
        dataError: {
            type: [String, Number],
            default: () => ''
        },
        clickButton: {
            type: [Boolean, String],
            default: false
        },
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>

<style lang="scss" scoped>
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
        outline: none;
    }
}

.input {
    display: block;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 100%;
    padding: 10px 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #B4B4B4;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    &:focus {
        box-shadow: 1px 3px 8px rgba(0, 128, 0, 0.3);
    }

    &._focus {
        color: #3F3F3F;
    }

    &._error {
        border: 1px solid #FF8484;
    }
}

textarea.input {
    height: 108px;
    resize: none;
    padding: 10px 16px;
}
</style>