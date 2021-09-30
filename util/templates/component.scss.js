module.exports = (componentName) => ({
  content: `
@import "../mixins.scss";
@import "../variables.scss";
@import "../typography.scss";

.foo-bar {
  @include font-defaults;

  color: $harvey-green;
}
`,
  extension: `.scss`
});
