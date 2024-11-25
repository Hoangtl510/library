<template>
    <div class="sh-input" :class="sizeClass">
        <label v-if="label" class="sh-input__label">
            {{ label }}
            <span class="sh-input__label-required">*</span>
        </label>
        <input :placeholder="placeholder"/>
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue"
const props = defineProps({
    label: {
        type: String,
    },
    placeholder: {
        type: String,
    }
})

</script>
<style lang="scss" scoped>
.sh-input {
    width: 100%;
    display: flex;
    flex-direction: column;
    .sh-input__label {
        padding-right: 2px;
        padding-bottom: 6px;
        font-size: var(--sh-label-font-size);
        .sh-input__label-required {
            color: var(--sh-asterisk-color);
        }
    }
    > input {
        border: var(--sh-border);
        padding: 0 12px;
        height: var(--sh-height);
    }
}
</style>