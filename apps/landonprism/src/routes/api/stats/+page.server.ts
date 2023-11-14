import { prism } from "$lib/prisma";
import type { PageServerLoad } from "../../$types";

export const load = async () => {
    const response = await prism.cms_stats.findMany({
        orderBy: {
            id: "desc"
        }
    });
};
