'use server';

import { SearchRepository } from './repository/search.repository';
import { searchSchema } from './schemas/search-schema';
import { SearchService } from './services/search.service';

const searchService = new SearchService();
const searchRepository = new SearchRepository(searchService);

export async function createSearch(data: unknown) {
  try {
    const parsedData = searchSchema.parse(data);
    return await searchRepository.search(parsedData);
  } catch (error) {
    
    console.error('Error en búsqueda:', error);
    return {
      success: false,
      message: 'Error al realizar la búsqueda',
    };
  }
}