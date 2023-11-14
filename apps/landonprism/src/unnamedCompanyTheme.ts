import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const unnamedCompanyTheme: CustomThemeConfig = {
    name: "unnamed-company-theme",
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `'Roboto', ui-monospace, monospace, sans`,
        "--theme-font-family-heading": `'LCD', ui-monospace, monospace, sans`,
        "--theme-font-color-base": "var(--color-surface-900)",
        "--theme-font-color-dark": "var(--color-secondary-50)",
        "--theme-rounded-base": "2px",
        "--theme-rounded-container": "2px",
        "--theme-border-base": "2px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "var(--color-surface-900)",
        "--on-secondary": "var(--color-error-50)",
        "--on-tertiary": "var(--color-surface-50)",
        "--on-success": "var(--color-surface-900)",
        "--on-warning": "var(--color-surface-900)",
        "--on-error": "var(--color-surface-50)",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #00ccf6
        "--color-primary-50": "217 247 254", // #d9f7fe
        "--color-primary-100": "204 245 253", // #ccf5fd
        "--color-primary-200": "191 242 253", // #bff2fd
        "--color-primary-300": "153 235 251", // #99ebfb
        "--color-primary-400": "77 219 249", // #4ddbf9
        "--color-primary-500": "0 204 246", // #00ccf6
        "--color-primary-600": "0 184 221", // #00b8dd
        "--color-primary-700": "0 153 185", // #0099b9
        "--color-primary-800": "0 122 148", // #007a94
        "--color-primary-900": "0 100 121", // #006479
        // secondary | #1e656d
        "--color-secondary-50": "221 232 233", // #dde8e9
        "--color-secondary-100": "210 224 226", // #d2e0e2
        "--color-secondary-200": "199 217 219", // #c7d9db
        "--color-secondary-300": "165 193 197", // #a5c1c5
        "--color-secondary-400": "98 147 153", // #629399
        "--color-secondary-500": "30 101 109", // #1e656d
        "--color-secondary-600": "27 91 98", // #1b5b62
        "--color-secondary-700": "23 76 82", // #174c52
        "--color-secondary-800": "18 61 65", // #123d41
        "--color-secondary-900": "15 49 53", // #0f3135
        // tertiary | #a500f6
        "--color-tertiary-50": "242 217 254", // #f2d9fe
        "--color-tertiary-100": "237 204 253", // #edccfd
        "--color-tertiary-200": "233 191 253", // #e9bffd
        "--color-tertiary-300": "219 153 251", // #db99fb
        "--color-tertiary-400": "192 77 249", // #c04df9
        "--color-tertiary-500": "165 0 246", // #a500f6
        "--color-tertiary-600": "149 0 221", // #9500dd
        "--color-tertiary-700": "124 0 185", // #7c00b9
        "--color-tertiary-800": "99 0 148", // #630094
        "--color-tertiary-900": "81 0 121", // #510079
        // success | #51f600
        "--color-success-50": "229 254 217", // #e5fed9
        "--color-success-100": "220 253 204", // #dcfdcc
        "--color-success-200": "212 253 191", // #d4fdbf
        "--color-success-300": "185 251 153", // #b9fb99
        "--color-success-400": "133 249 77", // #85f94d
        "--color-success-500": "81 246 0", // #51f600
        "--color-success-600": "73 221 0", // #49dd00
        "--color-success-700": "61 185 0", // #3db900
        "--color-success-800": "49 148 0", // #319400
        "--color-success-900": "40 121 0", // #287900
        // warning | #EAB308
        "--color-warning-50": "252 244 218", // #fcf4da
        "--color-warning-100": "251 240 206", // #fbf0ce
        "--color-warning-200": "250 236 193", // #faecc1
        "--color-warning-300": "247 225 156", // #f7e19c
        "--color-warning-400": "240 202 82", // #f0ca52
        "--color-warning-500": "234 179 8", // #EAB308
        "--color-warning-600": "211 161 7", // #d3a107
        "--color-warning-700": "176 134 6", // #b08606
        "--color-warning-800": "140 107 5", // #8c6b05
        "--color-warning-900": "115 88 4", // #735804
        // error | #f62a00
        "--color-error-50": "254 223 217", // #fedfd9
        "--color-error-100": "253 212 204", // #fdd4cc
        "--color-error-200": "253 202 191", // #fdcabf
        "--color-error-300": "251 170 153", // #fbaa99
        "--color-error-400": "249 106 77", // #f96a4d
        "--color-error-500": "246 42 0", // #f62a00
        "--color-error-600": "221 38 0", // #dd2600
        "--color-error-700": "185 32 0", // #b92000
        "--color-error-800": "148 25 0", // #941900
        "--color-error-900": "121 21 0", // #791500
        // surface | #2f2e33
        "--color-surface-50": "224 224 224", // #e0e0e0
        "--color-surface-100": "213 213 214", // #d5d5d6
        "--color-surface-200": "203 203 204", // #cbcbcc
        "--color-surface-300": "172 171 173", // #acabad
        "--color-surface-400": "109 109 112", // #6d6d70
        "--color-surface-500": "47 46 51", // #2f2e33
        "--color-surface-600": "42 41 46", // #2a292e
        "--color-surface-700": "35 35 38", // #232326
        "--color-surface-800": "28 28 31", // #1c1c1f
        "--color-surface-900": "23 23 25" // #171719
    }
};
