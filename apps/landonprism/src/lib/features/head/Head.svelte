<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <header class="head bg-surface-50-900-token">
        <h1 class="head__title h3">
            {$_("landing.head.title")}<span class="title__tag text-primary-500-400-token">
                {$_("landing.common.hashtag")}
            </span>
        </h1>
        <nav class="head__nav">
            <ul class="nav__ul">
                <a href="#anchor_hackatons" class="nav__li btn btn-sm ">
                    {$_("landing.head.nav.hackaton_link")}
                </a>
                <a href="#anchor_program" class="nav__li btn btn-sm ">
                    {$_("landing.head.nav.program_link")}
                </a>
                <a href="#anchor_speakers" class="nav__li btn btn-sm ">
                    {$_("landing.head.nav.speech_link")}
                </a>
                <a href="#anchor_ai" class="nav__li btn btn-sm ">
                    {$_("landing.head.nav.aidev_link")}
                </a>
                <a href="#anchor_mobile" class="nav__li btn btn-sm ">
                    {$_("landing.head.nav.mobiledev_link")}
                </a>
            </ul>
            <button class="nav__btn btn btn-sm variant-ghost-primary text-primary-500-400-token">
                {$_("landing.common.btnregister")}
            </button>
        </nav>
    </header>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"
</script>

<style lang="postcss">
    .head{
        padding: .6rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 100%;
        flex-wrap: wrap;
        filter: brightness(0.96);
    }
    .head__title{}
    .title__tag{}
    .head__nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: .6rem;
        overflow-x: auto;
    }
    .nav__btn{
        font-family: 'LCD';
    }
    .nav__ul{
        display: flex;
        flex-direction: row;
        max-width: 100%;
    }
    .nav__li{
        cursor: pointer;
        font-family: 'EpilepsySansBold';
    }

    @media screen and (max-width: 715px){
        .nav__ul{
            display: none;
        }
    }
</style>
