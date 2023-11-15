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
            <Windowsys main={$_("landing.partners.windowtitle")}>
                <svelte:fragment slot="main">
                {#each part1 as p}
                    <div class="partner">
                        <span class="partname">{p.title}</span>
                        <span class="parttext">{p.text || ""}</span>
                    </div>
                {/each}
                </svelte:fragment>
            </Windowsys>
            <Windowsys main={$_("landing.partners.windowtitle")}>
                <svelte:fragment slot="main">
                {#each part2 as p}
                    <div class="partner">
                        <span class="partname">{p.title}</span>
                        <span class="parttext">{p.text || ""}</span>
                    </div>
                {/each}
                </svelte:fragment>
            </Windowsys>
        </div>
        <div class="targetclick">
            <a href="/register" class="btn btn-ms variant-filled-primary">{$_("landing.common.btnregister")}</a>
        </div>
    </section>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"
    import Windowsys from "$lib/common/winsys/Windowsys.svelte"

    export let partners: any[]

    let amount = partners.length
    let part1 = partners.slice(0, amount)
    let part2 = partners.slice(amount)

    $: {
        partners;
        amount = partners.length
        part1 = partners.slice(0, amount)
        part2 = partners.slice(amount)
    }
</script>

<style lang="postcss">
    .partners {
        width: 100vw;
        height: fit-content;
        margin-top: 5rem;
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
    .partner {
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: 1fr;
        margin-bottom: 2rem;
    }
    .partname {
        color: rgb(var(--color-primary-400))
    }
    .parttext{

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
