<template>
    <div class="form__line">

        <label
            :for="nameId"
            class="form__label"
            :class="{ 'form__label_req': req }"
        >
            <slot></slot>
        </label>

        <input
            v-if="oninpShow"
            type="text"
            class="input"
            :value="modelValue"
            @input="updateInputWithWhiteSpace"
            :class="{ '_req': req, '_active': checkDataValue, '_error': showError }"
            :id="nameId"
            autocomplete="off"
            name="form[]"
            data-value=""
            :placeholder="placeHolder"
            :data-error="dataError"
        >
        <!-- <input
            v-if="oninpShow"
            type="text"
            class="input"
            :value="modelValue"
            @input="updateInput"
            :class="{ '_req': req, '_active': checkDataValue, '_error': showError }"
            :id="nameId"
            autocomplete="off"
            name="form[]"
            data-value=""
            :placeholder="placeHolder"
            :data-error="dataError"
            oninput="this.value = this.value.replace(/[^\d.,]/g, '').split('').reverse().join('').replace(/(.{3})/g, '$1 ').replace(/[,]/g, '.').split('').reverse().join('').trim()"
        > -->

        <input
            v-else
            type="text"
            class="input"
            :value="modelValue.trim()"
            @input="updateInput"
            :class="{ '_req': req, '_active': checkDataValue, '_error': showError }"
            :id="nameId"
            autocomplete="off"
            name="form[]"
            data-value=""
            :placeholder="placeHolder"
            :data-error="dataError"
        >

        <div
            v-if="showError"
            class="form__error"
        >{{ dataError }}</div>
    </div>
</template>


<script>
export default {
    name: 'my-input',

    props: {
        modelValue: [String, Number],
        nameId: {
            type: [String, Number],
            default: () => ''
        },
        req: {
            type: Boolean,
            required: true,
            default: false,
        },
        placeHolder: {
            type: [String, Number],
            default: () => ''
        },
        dataError: {
            type: [String, Number],
            default: () => ''
        },
        oninpShow: {
            type: [Boolean],
            default: false
        },
        clickButton: {
            type: [Boolean, String],
            default: false
        },
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
        updateInputWithWhiteSpace(event) {
            let updatedValue = event.target.value.replace(/[^\d.,]/g, '').split('').reverse().join('').replace(/(.{3})/g, '$1 ').replace(/[,]/g, '.').split('').reverse().join('').trim()
            this.$emit('update:modelValue', updatedValue)
        },

    },
    computed: {
        checkDataValue() {
            if (this.modelValue) return true;
            else return false;
        },
        showError() {
            if (this.clickButton && this.modelValue == false) return true;
            else return false;
        },
    }
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
</style>