/** Copyright 2023 Svyatoslav Pushkarev
 * This file contains code distributed as free (as in freedom) software / piece of code.
 * you can redistribute and/or modify its content under terms of the GNU Affero General Public license,
 *    either version 3 of the License, or (at your option) any later version
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 *    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 */

import { browser } from "$app/environment";
import "$lib/i18n";
import { locale, waitLocale } from "svelte-i18n";

export const load = async () => {
    if (browser) {
        locale.set(window.navigator.language);
    }
    await waitLocale();
};

export const ssr = true;
export const prerender = true;
