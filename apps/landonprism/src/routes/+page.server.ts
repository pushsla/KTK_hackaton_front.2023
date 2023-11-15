import { prism } from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    const stats = await prism.cms_stats.findMany({
        orderBy: {
            id: "desc"
        }
    });

    const speakers = await prism.cms_speakers.findMany();

    const programs = await prism.cms_program.findMany({
        include: {
            entries: true
        }
    });

    const partners = await prism.cms_partners.findMany();

    for (let i = 0; i < partners.length; i++) {
        //@ts-ignore
        partners[i].icon = partners[i].icon.toString();
    }

    const result = {
        stats: stats[0],
        speakers: speakers,
        programs: programs,
        partners: partners
    };

    return result;
}) satisfies PageServerLoad;
