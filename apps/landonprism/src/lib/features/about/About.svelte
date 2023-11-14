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
        <Windowsys
            back={$_("landing.about.windows.members.title")}
            main={$_("landing.about.windows.money.title")}
            >
            <svelte:fragment slot="main">
                <HackatonFaund money={stats.hackatonFound} commands={stats.hackatonWinners} offers={stats.hackatonOffers}/>
            </svelte:fragment>
        </Windowsys>

        <Windowsys
            back={$_("landing.about.windows.coffee.title")}
            main={$_("landing.about.windows.tasks.title")}
            >
            <svelte:fragment slot="main">
                <HackatonTasks />
            </svelte:fragment>
        </Windowsys>

        <Windowsys
            back={$_("landing.about.windows.company.title")}
            main={$_("landing.about.windows.lections.title")}
            >
            <svelte:fragment slot="main">
                <Speakers speakers={speakers} />
            </svelte:fragment>
        </Windowsys>

        <Windowsys
            main={$_("landing.about.windows.targetclick.title")}
            >
            <svelte:fragment slot="main">
                <Testyourself />
            </svelte:fragment>
        </Windowsys>
    </section>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"
    import Windowsys from "$lib/common/winsys/Windowsys.svelte"

    import HackatonFaund from "./components/HackatonFaund.svelte"
    import HackatonTasks from "./components/HackatonTasks.svelte"
    import Speakers from "./components/Speakers.svelte"
    import Testyourself from "./components/Testyourself.svelte"

    export let stats: {
        id: number,
        registrationOpen: boolean,
        registerDeadline: Date,
        hackatonFound: number,
        hackatonWinners: number,
        hackatonOffers: number,
    }

    export let speakers: {
        id: number,
        name: string,
        company: string
    }[]

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
