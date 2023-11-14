<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <section class="regform">
        <form class="form" action="">
            <label>
                <span>{$_("registerform.labels.name")}</span>
                <input type="text" class="input">
            </label>
            <label>
                <span>{$_("registerform.labels.lastname")}</span>
                <input type="text" class="input">
            </label>
            <label>
                <span>{$_("registerform.labels.birth")}</span>
                <input type="date" class="input">
            </label>
            <label>
                <span>{$_("registerform.labels.region")}</span>
                <select class="select" size="4" name="region" id="regionsel">
                    <option value="45">Курган</option>
                    <option value="90">Москва</option>
                    <option value="45">Курганинск</option>
                    <option value="90">Москваниниск</option>
                    <option value="45">Курганское село</option>
                    <option value="90">Москва село</option>
                </select>
            </label>
            <label>
                <span>{$_("registerform.labels.contacttype")}</span>
                <select class="select" size="2" name="region" id="regionsel">
                    <option value="tg">Telegram</option>
                    <option value="email">E-Mail</option>
                </select>
            </label>
            <label>
                <span>{$_("registerform.labels.contact")}</span>
                <input type="text" class="input">
            </label>

            {#if !wantteam}
                <label>
                    <input type="checkbox" class="checkbox" bind:checked={selteam}>
                    <span>{$_("registerform.labels.hasteam")}</span>
                </label>
            {/if}

            {#if selteam}
                <section class="form__team">
                    <label>
                        <span>{$_("registerform.labels.teamsel")}</span>
                        <select class="select" size="5" name="region" id="regionsel">
                            <option value="45">Курган</option>
                            <option value="90">Москва</option>
                            <option value="45">Курганинск</option>
                            <option value="90">Москваниниск</option>
                            <option value="45">Курганское село</option>
                            <option value="90">Москва село</option>
                        </select>
                    </label>
                    <label>
                        <span>{$_("registerform.labels.teamcode")}</span>
                        <input type="text" class="input">
                    </label>
                </section>
            {:else}
                <label>
                    <input type="checkbox" class="checkbox" bind:checked={wantteam}>
                    <span>{$_("registerform.labels.wantteam")}</span>
                </label>
            {/if}

            {#if wantteam}
                <section class="form_regteam">
                    <label>
                        <span>{$_("registerform.labels.teamname")}</span>
                        <input type="text" class="input">
                        <span>{$_("registerform.labels.teamsizewarning")}</span>
                    </label>
                </section>
            {/if}
        </form>
    </section>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"

    let selteam: boolean = false
    let wantteam: boolean = false
</script>

<style lang="postcss">
    .form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>
