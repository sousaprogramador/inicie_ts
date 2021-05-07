import { Router } from "express";

import CaseInformationsService from "@modules/cases/services/CaseInformationsService";

const infoRouter = Router();

infoRouter.get("/", async (request, response) => {
    const { query }: any = request;
    
    const cases = new CaseInformationsService();

    const casos = await cases.execute({
        state: query.state,
        dateStart: query.dateStart,
        dateEnd: query.startEnd
    });

    return response.json(casos);
});

export default infoRouter;