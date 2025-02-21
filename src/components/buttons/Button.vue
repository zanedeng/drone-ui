<script>
function getTag(context) {
  const { to, href } = context;

  if (to) return "router-link";
  if (href) return "a";
  return "button";
}

function getProps(tag, context) {
  const { to } = context;

  if (tag === "router-link") return { to };
  return {};
}

function getDomProps(tag, context) {
  const { href, disabled } = context;

  if (tag === "a") return { href, disabled };
  return { disabled };
}

export default {
  name: "Button",
  props: {
    to: String,
    href: String,
    loading: { type: Boolean, default: false },
    borderless: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    size: { type: String, default: "m", validator: val => ["m", "l"].includes(val) },
    theme: {
      type: String,
      default: "default",
      validator: val => ["default", "light", "primary", "danger"].includes(val)
    }
  },
  computed: {
    bordered() {
      return !this.borderless && this.outline;
    }
  },
  render(createElement) {
    const tag = getTag(this);
    const { bordered, outline, theme, size, loading } = this;

    return createElement(
      tag,
      {
        domProps: getDomProps(tag, this),
        class: { button: true, bordered, outline, loading, [`theme-${theme}`]: true, [`size-${size}`]: true },
        props: getProps(tag, this)
      },
      this.$slots.default
    );
  }
};
</script>

<style>
.button > span + svg,
.button > svg + span {
  margin-left: 7px;
}

.button > svg {
  width: 20px;
  height: 20px;
  opacity: 0.6;
  margin-bottom: -5px;
}

.button:focus > svg,
.button:hover > svg {
  opacity: 1;
}
</style>

<style scoped lang="scss">
@import "../../assets/styles/mixins";

.button {
  background: none;
  font-size: 14px;
  border: none;
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  box-sizing: border-box;
  letter-spacing: 0.5px;
  font-weight: 500;
  border-radius: 3px;
  color: #fff;

  @include mobile {
    font-size: 13px;
  }
}

.button.size-m {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
}

.button.size-l {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
}

.button.bordered {
  border: 1px solid rgba(25, 45, 70, 0.25);
}

.button.bordered.size-m {
  line-height: 28px;
}

.button.bordered.size-l {
  line-height: 38px;
}

.button.theme-default {
  background-color: #192d46;

  @include hf {
    background-color: rgba(25, 45, 70, 0.8);
  }

  &.bordered {
    @include hf {
      border-color: #0564d7;
    }
  }

  &.outline {
    color: #0564d7;

    @include hf {
      color: #0564d7;
      background-color: transparent;
    }
  }
}

.button.theme-light {
  background-color: #fff;

  &.outline {
    color: #fff;
  }
}

.button.theme-primary {
  background-color: #0564d7;

  @include hf {
    background-color: #085cc1;
  }

  &.outline {
    color: #0564d7;

    @include hf {
      background-color: rgba(5, 100, 215, $button-outline-hover-bg-opacity);
    }
  }
}

.button.theme-danger {
  background-color: $color-danger;

  @include hf {
    background-color: #dd3e60;
  }

  &.bordered {
    border-color: $color-danger;
  }

  &.outline {
    color: $color-danger;

    @include hf {
      background-color: rgba(255, 65, 100, $button-outline-hover-bg-opacity);
    }
  }
}

.button.outline {
  background-color: transparent;
}

.button:focus {
  outline: none;
}

.button.loading {
  color: transparent !important;
  text-align: center;
  position: relative;
  pointer-events: none;
}

.button.loading:before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 50%;
  margin: -9px 0 0 -9px;
  left: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid #fff;
  border-radius: 50%;
  border-bottom-color: transparent !important;
  animation: spin 1s linear infinite;
}

.button.theme-danger.outline.loading:before {
  border-color: #dd3e60;
}

.button[disabled],
.button:hover[disabled] {
  cursor: not-allowed;
  opacity: 0.25;
  border-color: rgba(25, 45, 70, 0.5);
  color: #192d46;
}
</style>
