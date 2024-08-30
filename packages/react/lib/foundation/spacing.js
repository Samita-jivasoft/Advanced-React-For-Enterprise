const spaces = {
    xxxs: 'xxxs',
    // 4px
    xxs: 'xxs',
    // 8px
    xs: 'xs',
    // 12px
    sm: 'sm',
    // 16px
    md: 'md',
    // 24px
    lg: 'lg',
    // 32px
    xl: 'xl',
    // 48px
    xxl: 'xxl',
    // 72px
    xxxl: 'xxxl',
};
//The user can now do something like spaces.small
var Spacing = Object.freeze(spaces); //Makes the object non-writable and non-configurable

export { Spacing as default };
//# sourceMappingURL=spacing.js.map
