"use strict"

module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
          "stylelint-order"
      ],
    "rules": {
      "selector-attribute-quotes": ["always"],
      "color-hex-length": ["short"],
      "indentation": 4,
      "number-leading-zero": ["never"],
      "order/properties-order": [
        "content",
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",
        "float",
        "display",
        "flex-direction",
        "flex-grow",
        "justify-content",
        "align-items",
        "align-self",
        "grid-template-rows",
        "gird-template-columns",
        "gird-template-areas",
        "grid-auto-rows",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-column-gap",
        "grid-row-gap",
        "column-gap",
        "row-gap",
        "overflow",
        "box-sizing",
        "width",
        "height",
        "border",
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "vertical-align",
        "font",
        "font-weight",
        "font-size",
        "line-height",
        "font-family",
        "letter-spacing",
        "color",
        "text-align",
        "text-overflow",
        "background",
        "background-color",
        "background-image",
        "border-radius",
        "border-collapse",
        "box-shadow",
        "opacity",
        "visibility",
        "white-space",
        "cursor",
        "animation-name",
        "animation-duration",
        "animation-timing-function",
        "animation-delay",
        "animation-fill-mode",
        "transform",
        "transition"
      ]
    }
};