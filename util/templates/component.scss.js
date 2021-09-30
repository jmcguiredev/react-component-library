module.exports = (componentName) => ({
  content: `
@import "../mixins.scss";
@import "../variables.scss";
@import "../typography.scss";

.jm-${componentName} {
  @include font-defaults
}

`,
  extension: `.scss`
});
