import { SearchFormData } from "@/actions/search/types/search.types";

export class SearchService {
    async performSearch(data: SearchFormData) {
        // api
        return {
            success: true,
            data: {
                evento: data.evento,
                fecha: data.fecha,
                pasajeros: data.pasajeros,
            }
        }
    }
}