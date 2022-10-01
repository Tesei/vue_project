<template>
    <div class="button">
        <button
            type="submit"
            class="btn"
            :class="{'_active': hasAllData }"
        >
            <slot></slot>
        </button>
    </div>
</template>


<script>

export default {
    name: 'my-button',
    props: {
        hasAllData: {
            type: Boolean,
        }
    }
}
</script>


<style lang="scss" scoped>
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EEEEEE;
    border-radius: 10px;
    width: 100%;
    padding: 11px 0;
    font-family: $font-family-accent;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: center;
    letter-spacing: -0.02em;
    color: #B4B4B4;
    transition: all 0.3s ease 0s;

    &._active {
        color: #FFFFFF;
        background: #7BAE73;
    }

    @media (min-width: $md2) {
        &:hover {
            transform: scale(1.05);
        }
    }
}
</style>