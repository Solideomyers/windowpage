import { SearchService } from "../services/search.service";
import { SearchFormData } from "../types/search.types";

export class SearchRepository {
    private searchService: SearchService;

    constructor(searchService: SearchService) {
        this.searchService = searchService;
    }

    async search(data: SearchFormData) {
        // 
        return this.searchService.performSearch(data)
    }
}