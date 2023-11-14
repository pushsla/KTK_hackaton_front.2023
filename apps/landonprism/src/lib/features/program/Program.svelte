<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <a id="anchor_program"/>
    <section class="program">
        <Windowsys main={$_("landing.program.programwindow.title")}></Windowsys>
        <Windowsys main={$_("landing.program.aboutuswindow.title")}></Windowsys>
    </section>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"
    import Windowsys from "$lib/common/winsys/Windowsys.svelte"
</script>

<style lang="postcss">
    .program{
        width: 100%;
        height: 50vh;

        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 3fr 2fr;
    }

    @media screen and (max-width: 950px) {
        .program{
            height: 100vh;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
        }
    }
</style>
