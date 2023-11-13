import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const myCustomTheme: CustomThemeConfig = {
    name: "my-custom-theme",
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
        "--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "255 255 255",
        "--on-tertiary": "255 255 255",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "0 0 0",
        // =~= Theme Colors  =~=
        // primary | #3a5199
        "--color-primary-50": "225 229 240", // #e1e5f0
        "--color-primary-100": "216 220 235", // #d8dceb
        "--color-primary-200": "206 212 230", // #ced4e6
        "--color-primary-300": "176 185 214", // #b0b9d6
        "--color-primary-400": "117 133 184", // #7585b8
        "--color-primary-500": "58 81 153", // #3a5199
        "--color-primary-600": "52 73 138", // #34498a
        "--color-primary-700": "44 61 115", // #2c3d73
        "--color-primary-800": "35 49 92", // #23315c
        "--color-primary-900": "28 40 75", // #1c284b
        // secondary | #108284
        "--color-secondary-50": "219 236 237", // #dbeced
        "--color-secondary-100": "207 230 230", // #cfe6e6
        "--color-secondary-200": "195 224 224", // #c3e0e0
        "--color-secondary-300": "159 205 206", // #9fcdce
        "--color-secondary-400": "88 168 169", // #58a8a9
        "--color-secondary-500": "16 130 132", // #108284
        "--color-secondary-600": "14 117 119", // #0e7577
        "--color-secondary-700": "12 98 99", // #0c6263
        "--color-secondary-800": "10 78 79", // #0a4e4f
        "--color-secondary-900": "8 64 65", // #084041
        // tertiary | #523a99
        "--color-tertiary-50": "229 225 240", // #e5e1f0
        "--color-tertiary-100": "220 216 235", // #dcd8eb
        "--color-tertiary-200": "212 206 230", // #d4cee6
        "--color-tertiary-300": "186 176 214", // #bab0d6
        "--color-tertiary-400": "134 117 184", // #8675b8
        "--color-tertiary-500": "82 58 153", // #523a99
        "--color-tertiary-600": "74 52 138", // #4a348a
        "--color-tertiary-700": "62 44 115", // #3e2c73
        "--color-tertiary-800": "49 35 92", // #31235c
        "--color-tertiary-900": "40 28 75", // #281c4b
        // success | #51993a
        "--color-success-50": "229 240 225", // #e5f0e1
        "--color-success-100": "220 235 216", // #dcebd8
        "--color-success-200": "212 230 206", // #d4e6ce
        "--color-success-300": "185 214 176", // #b9d6b0
        "--color-success-400": "133 184 117", // #85b875
        "--color-success-500": "81 153 58", // #51993a
        "--color-success-600": "73 138 52", // #498a34
        "--color-success-700": "61 115 44", // #3d732c
        "--color-success-800": "49 92 35", // #315c23
        "--color-success-900": "40 75 28", // #284b1c
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
        // error | #993a51
        "--color-error-50": "240 225 229", // #f0e1e5
        "--color-error-100": "235 216 220", // #ebd8dc
        "--color-error-200": "230 206 212", // #e6ced4
        "--color-error-300": "214 176 185", // #d6b0b9
        "--color-error-400": "184 117 133", // #b87585
        "--color-error-500": "153 58 81", // #993a51
        "--color-error-600": "138 52 73", // #8a3449
        "--color-error-700": "115 44 61", // #732c3d
        "--color-error-800": "92 35 49", // #5c2331
        "--color-error-900": "75 28 40", // #4b1c28
        // surface | #d5d6d2
        "--color-surface-50": "249 249 248", // #f9f9f8
        "--color-surface-100": "247 247 246", // #f7f7f6
        "--color-surface-200": "245 245 244", // #f5f5f4
        "--color-surface-300": "238 239 237", // #eeefed
        "--color-surface-400": "226 226 224", // #e2e2e0
        "--color-surface-500": "213 214 210", // #d5d6d2
        "--color-surface-600": "192 193 189", // #c0c1bd
        "--color-surface-700": "160 161 158", // #a0a19e
        "--color-surface-800": "128 128 126", // #80807e
        "--color-surface-900": "104 105 103" // #686967
    }
};
