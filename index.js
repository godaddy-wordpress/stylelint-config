"use strict"

module.exports = {
  "extends": ["@wordpress/stylelint-config/scss", "stylelint-config-standard-scss"],
  "plugins": [ "stylelint-order" ],
  "rules": {
    "at-rule-empty-line-before": [
      "always",
      {
        "except": [ "after-same-name" ],
        "ignore": [ "after-comment", "first-nested" ],
        "ignoreAtRules": [ "else" ]
      }
    ],

    "function-url-quotes": "never",

    "max-line-length": null,

    "no-descending-specificity": null,

    "number-leading-zero": "always",

    "order/properties-alphabetical-order": true,

    "rule-empty-line-before": [
      "always",
      {
        "ignore": [ "after-comment", "first-nested", "inside-block" ]
      }
    ],

    "scss/selector-no-redundant-nesting-selector": null,

    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "selector-type-no-unknown": null,
    "scss/double-slash-comment-whitespace-inside": null,
    "indentation": null,
    "scss/no-global-function-names": null,
    "scss/at-mixin-argumentless-call-parentheses": null,
    "alpha-value-notation": null,
    "color-function-notation": null,
    "hue-degree-notation": null,
    "number-max-precision": null,
    "block-closing-brace-empty-line-before": null,
    "scss/double-slash-comment-empty-line-before": null,
    "value-keyword-case": null,
    "shorthand-property-no-redundant-values": null,
    "max-empty-lines": null,
    "selector-descendant-combinator-no-non-space": null,
    "selector-no-vendor-prefix": null,
    "no-invalid-position-at-import-rule": null,
    "property-no-vendor-prefix": null,
    "keyframes-name-pattern": null,
    "declaration-empty-line-before": null,
    "scss/dollar-variable-colon-space-after": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "scss/at-mixin-pattern": null,
    "scss/dollar-variable-pattern": null,
    "scss/at-import-partial-extension": null,
    "scss/no-duplicate-mixins": null,
    "media-feature-parentheses-space-inside": null,
    "value-no-vendor-prefix": null,
    "custom-property-pattern": null,
    "scss/dollar-variable-empty-line-before": null
  }
};
