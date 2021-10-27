"use strict"

module.exports = {
  "extends": "@wordpress/stylelint-config/scss",
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

    "function-calc-no-invalid": null,
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
    "selector-type-no-unknown": null
  }
};
