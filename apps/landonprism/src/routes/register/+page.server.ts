import { prism } from "$lib/prisma";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { bot } from "$lib/tgbot/bot";

export const load = (async () => {
    const teams = await prism.reg_team.findMany();
    const regions = await prism.reg_region.findMany();
    const contacts = await prism.reg_contact.findMany();

    const result = {
        teams: teams,
        regions: regions,
        contacts: contacts
    };

    return result;
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        let name = data.get("name");
        let lastName = data.get("lastname");
        let birth = data.get("birth");
        let region = data.get("region");
        let contact = data.get("contact");
        let contactData = data.get("contactData");
        let selteam = data.get("selteam");
        let teamcode = data.get("teamcode");
        let createteam = data.get("createteam");

        let code0 = data.get("code0");
        let code1 = data.get("code1");
        let code2 = data.get("code2");
        let code3 = data.get("code3");
        let code4 = data.get("code4");
        let code5 = data.get("code5");

        if (createteam && (!code0 || !code1 || !code2 || !code3 || !code4 || !code5))
            return fail(400, { missing: "codes" });

        if (!name || !lastName || !birth || !region || !contact || !contactData)
            return fail(400, { missing: "personal" });

        if (selteam && !teamcode) return fail(400, { missing: "teamcode" });

        if (selteam && createteam) return fail(400, { missing: "teamcollision" });

        if (createteam) {
            const newusr = await prism.reg_user.create({
                data: {
                    loginHash: name.toString(),
                    secretHash: name.toString()
                }
            });
            console.log(newusr);

            const newreg = await prism.reg_registration.create({
                data: {
                    userId: newusr.id,
                    approvalId: 4,
                    contactId: parseInt(contact.toString()),
                    regionId: parseInt(region.toString()),
                    firstName: name.toString(),
                    lastName: name.toString()
                }
            });

            const newteam = await prism.reg_team.create({
                data: {
                    name: createteam.toString(),
                    code0: code0?.toString(),
                    code1: code1?.toString(),
                    code2: code2?.toString(),
                    code3: code3?.toString(),
                    code4: code4?.toString(),
                    code5: code5?.toString(),

                    captainId: newreg.id
                }
            });

            const resp = bot.sendNotification(newreg.firstName);
        }

        throw redirect(303, "/");
    }
} satisfies Actions;

export const prerender = false;
