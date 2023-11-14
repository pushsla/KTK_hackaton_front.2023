<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <section class="partners">
        <div class="partners__windows">
            <Windowsys windows={[
                {title: $_("landing.partners.windowtitle")}
            ]} />
            <Windowsys windows={[
                {title: $_("landing.partners.windowtitle")}
            ]} />
        </div>
        <div class="targetclick">
            <button class="btn btn-ms variant-filled-primary">{$_("landing.common.btnregister")}</button>
        </div>
    </section>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"
    import Windowsys from "$lib/common/winsys/Windowsys.svelte"
</script>

<style lang="postcss">
    .partners {
        width: 100vw;
        height: fit-content;
    }
    .partners__windows{
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
    .targetclick{
        padding: 30% 0;
        display: flex;
        justify-content: center;
    }
    .btn{
        font-family: 'LCD', sans;
        font-size: 1.3rem;
        font-weight: 500;
    }

    @media screen and (max-width: 950px) {
        .partners {
            height: 90vh;
        }
        .partners__windows {
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
        }
    }
</style>
