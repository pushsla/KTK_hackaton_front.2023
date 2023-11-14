<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <a id="anchor_hackatons"/>
    <a id="anchor_speakers"/>
    <a id="anchor_ai"/>
    <a id="anchor_mobile"/>
    <section class="about">
        <Windowsys windows={[
            {title: $_("landing.about.windows.members.title")},
            {title: $_("landing.about.windows.money.title")},
        ]} />
        <Windowsys windows={[
            {title: $_("landing.about.windows.coffee.title")},
            {title: $_("landing.about.windows.tasks.title")},
        ]} />
        <Windowsys windows={[
            {title: $_("landing.about.windows.company.title")},
            {title: $_("landing.about.windows.lections.title")},
        ]} />
        <Windowsys windows={[
            {title: $_("landing.about.windows.targetclick.title")}
        ]} />
    </section>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"
    import Windowsys from "$lib/common/winsys/Windowsys.svelte"


</script>

<style lang="postcss">
    .about{
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    @media screen and (max-width: 950px){
        .about {
            height: 190vh;
            grid-template-columns: 1fr;
            grid-template-rows: 23rem 23rem 23rem 23rem;
        }
    }
</style>
