import api from "@shared/infra/api";
import axios from "axios";

interface Request {
    state: string;
    dateStart: string;
    dateEnd: string;
}

interface InfoDTO {
    city: string;
    city_ibge_code: string;
    confirmed: number;
    confirmed_per_100k_inhabitants: number;
    date: string;
    death_rate: number;
    deaths: number;
    estimated_population: number;
    estimated_population_2019: number;
    is_last: boolean;
    order_for_place: number;
    place_type: string;
    state: string;
}

class CaseInformationsService {
    public async execute({state, dateStart, dateEnd}: Request): Promise<InfoDTO[]> {
        try {

            const response = await api.get("/dataset/covid19/caso/data", {
                params: {
                    state,
                    dateStart,
                    dateEnd
                }
            });

            
            const newResponse = response.data.results.sort((a: any, b: any) => {
                return b.confirmed - a.confirmed;
            }).filter((result: InfoDTO) => {
                return result.city !== null;
            }).map((result: InfoDTO, index: number) => {
                return {
                    id: index,
                    nomeCidade: result.city,
                    percentualDeCasos: result.confirmed
                }
            }).slice(0,10);

            await axios.post(`${process.env.URL_PROVIDER}`, {
                newResponse
            }, {
                headers: {
                    MeuNome: "Mateus_Sousa"
                }
            }).then(response => console.log(response.data));

            return newResponse;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default CaseInformationsService;