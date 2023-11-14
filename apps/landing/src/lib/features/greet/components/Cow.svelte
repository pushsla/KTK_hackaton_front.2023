<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <div class="cow">
        <div class="cow__container">
                <span class="cow__title cow__title_left">
                    {$_("landing.greet.cow.frontend")}
                </span>

                <span class="cow__title cow__title_blue cow__title_centerl">
                    {$_("landing.greet.cow.ai")}
                </span>

                <span class="cow__title cow__title_left">
                    {$_("landing.greet.cow.highloads")}
                </span>
        </div>
        <div class="cow__container">
            <span class="cow__title cow__title_right">{$_("landing.greet.cow.teaching")}</span>
            <span class="cow__title cow__title_centerr">{$_("landing.greet.cow.gamedev")}</span>
            <span class="cow__title cow__title_blue cow__title_right">{$_("landing.greet.cow.mobile")}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"
</script>

<style lang="postcss">
    .cow{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 4rem;
    }
    .cow__container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 100%;
        height: 45vh;
    }
    .cow__region{}
    .cow__region_left{}
    .cow__region_right{}
    .cow__title{
        width: 100%;
        font-size: 1.7rem;
        font-family: 'EpilepsySans';
        height: 10%;
    }
    .cow__title_blue{
        text-shadow: .1rem 0 .1rem rgb(var(--color-primary-500));

    }
    .cow__title_left{
        text-align: left;
        padding-left: 3rem;

    }
    .cow__title_centerl{
        text-align: left;
        padding-left: 20%;

    }
    .cow__title_centerr{
        text-align: right;
        padding-right: 40%;

    }
    .cow__title_right{
        text-align: right;
        padding-right: 3rem;

    }

    @media screen and (max-width: 1000px){
        .cow {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 0;
        }
        .cow__container{
            height: 10rem;
        }
        .cow__title {
            text-align: right;
            padding: 0;
        }
        .cow__title_centerl {
            text-align: right;
            padding: 0;
        }
        .cow__title_centerr {
            text-align: right;
            padding: 0;
        }
        .cow__title_left{
            text-align: right;
            padding: 0;
        }
        .cow__title_right {
            text-align: right;
            padding: 0;
        }
    }
</style>
