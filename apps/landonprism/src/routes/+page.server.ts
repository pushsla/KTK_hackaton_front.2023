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

    const result = {
        stats: stats[0],
        speakers: speakers,
        programs: programs
    };

    return result;
}) satisfies PageServerLoad;
