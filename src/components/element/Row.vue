<template>
  <!-- 测试用的，文件内的内容已分割成单独的js和cass -->
    <div
      :class="[
        'el-row',
        {'el-row--flex': this.type === 'flex'},
        this.justify !== 'start' && `is-justify-${justify}`,
        this.align !== 'top' && `is-justify-${align}`
      ]"
      :style="style"
    >
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      // 验证成功或失败
      validator: (val) => ['start', 'end', 'center', 'space-around', 'space-between'].includes(val),
    },
    align: {
      type: String,
      default: 'top',
      validator: (val) => ['top', 'middle', 'bottom'].includes(val),
    },
  },
  computed: {
    style() {
      const style = {};

      if (this.gutter) {
        style.marginLeft = `${-this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  &::after,
  &::before {
    display: block;
    content: '';
  }

  &::after {
    clear: both;
  }

  &--flex {
    display: flex;

    &::before,
    &::after {
      display: none;
    }

    &.is-justify-end {
      justify-content: end;
    }
    &.is-justify-center {
      justify-content: center;
    }
    &.is-justify-space-around {
      justify-content: space-around;
    }
    &.is-justify-space-between {
      justify-content: space-between;
    }

    &.is-align-middle {
      align-items: center;
    }
    &.is-align-bottom {
      align-items: bottom;
    }
  }
}
</style>
