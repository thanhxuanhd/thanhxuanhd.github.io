const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,ts,js}"],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      "colors": {
        "primary-fixed-dim": "#7bd0ff",
        "on-primary": "#00354a",
        "inverse-primary": "#00668a",
        "outline-variant": "#3e484f",
        "on-primary-container": "#004965",
        "secondary-fixed-dim": "#bdc2ff",
        "on-tertiary-fixed": "#2c0051",
        "primary": "#8ed5ff",
        "secondary-container": "#2f3aa3",
        "surface-tint": "#7bd0ff",
        "on-surface-variant": "#bdc8d1",
        "secondary": "#bdc2ff",
        "tertiary-fixed": "#f0dbff",
        "surface-container-high": "#252a39",
        "on-primary-fixed": "#001e2c",
        "surface-container-highest": "#303444",
        "on-secondary-fixed-variant": "#2f3aa3",
        "on-error": "#690005",
        "tertiary-container": "#ce9cff",
        "surface-container-low": "#161b2a",
        "tertiary-fixed-dim": "#ddb8ff",
        "on-tertiary": "#490081",
        "on-background": "#dee2f6",
        "on-secondary-container": "#a8afff",
        "secondary-fixed": "#e0e0ff",
        "surface": "#0e1321",
        "primary-container": "#38bdf8",
        "surface-container": "#1a1f2e",
        "inverse-surface": "#dee2f6",
        "on-surface": "#dee2f6",
        "surface-variant": "#303444",
        "on-secondary": "#131e8c",
        "background": "#0e1321",
        "surface-container-lowest": "#090e1c",
        "on-tertiary-fixed-variant": "#62259b",
        "surface-dim": "#0e1321",
        "tertiary": "#e1c0ff",
        "outline": "#87929a",
        "error-container": "#93000a",
        "on-secondary-fixed": "#000767",
        "on-primary-fixed-variant": "#004c69",
        "primary-fixed": "#c4e7ff",
        "error": "#ffb4ab",
        "surface-bright": "#343948",
        "on-tertiary-container": "#5f2198",
        "inverse-on-surface": "#2b303f",
        "on-error-container": "#ffdad6"
      },
      "borderRadius": {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      "spacing": {
        "space-sm": "0.5rem",
        "space-lg": "1.5rem",
        "space-xs": "0.25rem",
        "space-md": "1rem",
        "gutter-mobile": "1rem",
        "space-xl": "2.5rem",
        "margin": "3rem",
        "margin-mobile": "1.25rem",
        "gutter": "1.5rem"
      },
      "fontSize": {
        "body-sm": [
          "12px",
          {
            "lineHeight": "18px",
            "letterSpacing": "0.01em",
            "fontWeight": "400"
          }
        ],
        "body-md": [
          "14px",
          {
            "lineHeight": "22px",
            "letterSpacing": "0",
            "fontWeight": "400"
          }
        ],
        "label-code": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.03em",
            "fontWeight": "500"
          }
        ],
        "display-hero-mobile": [
          "32px",
          {
            "lineHeight": "40px",
            "letterSpacing": "-0.02em",
            "fontWeight": "700"
          }
        ],
        "headline-sm": [
          "18px",
          {
            "lineHeight": "26px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "label-caps": [
          "11px",
          {
            "lineHeight": "14px",
            "letterSpacing": "0.08em",
            "fontWeight": "600"
          }
        ],
        "display-hero": [
          "48px",
          {
            "lineHeight": "56px",
            "letterSpacing": "-0.03em",
            "fontWeight": "700"
          }
        ],
        "body-lg": [
          "16px",
          {
            "lineHeight": "26px",
            "letterSpacing": "0",
            "fontWeight": "400"
          }
        ],
        "headline-lg": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.02em",
            "fontWeight": "700"
          }
        ],
        "headline-md": [
          "22px",
          {
            "lineHeight": "30px",
            "letterSpacing": "-0.015em",
            "fontWeight": "600"
          }
        ]
      }
    }
  }
}
